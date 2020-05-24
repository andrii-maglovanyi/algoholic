Recursion is a technique designed to solve problems by decomposing them into smaller, self-similar problems that, when combined, arrive at the original solution. A recursive function has two main parts:

- Base cases (also known as the terminating condition)
- Recursive cases

The base cases are a set of inputs for which a recursive function computes a concrete result, without having to recur. The recursive case deals with a set of inputs (necessarily smaller than the original) for which the function calls itself. If the input isn’t smaller, the recursion runs indefinitely until the program crashes. As the function recurs, the nature of the inputs unconditionally become smaller, finally reaching the instance for which the base case is triggered and the process terminates with a value.

### Example

Calculate the odds of choosing the correct `n` numbers out of the `p` possibilities.

Iterative version:

```javascript
const odds = (n, p) => {
  const acc = 1;
  for (let i = 0; i < n; i++) {
    acc *= (n - i) / (p - i);
  }
  return acc;
};

odds(3, 10); //=> (3/10) _ (2/9) _ (1/8) => (1/120) => 0.008333...
```

Recursive version:

```javascript
const odds = (n, p) => (n == 0 ? 1 : (n / p) * odds(n - 1, p - 1));

odds(3, 10); //=> (3/10) * (2/9) * (1/8) => (1/120) => 0.008333...
```

There are many reasons that functional programmers prefer recursion, but one very simple one is that recursive functions are often much more elegant than their iterative cousins. It's easier to reason about them.

Unfortunately, they often don't perform as well. All the overhead of creating stack contexts for function calls tends to add up. But certain kinds of recursive calls can be easily optimized.

Recursive with tail-call formulation:

```javascript
const odds = (() => {
  const odds1 = (n, p, acc) =>
    n == 0 ? acc : odds1(n - 1, p - 1, (n / p) * acc);

  return (n, p) => odds1(n, p, 1);
})();
```

The recursive call in `odds1` is the last statement in its branch of the function. If this is true for all recursive calls, then the function is `tail-recursive`, and the compiler can replace the entire set of nested calls with simple `JUMP` operations.

Such optimizations are required by many functional languages.

[Tail-Call Optimization](../../../Performance/Tail_Call_Optimization/README.md) is not planned to be implemented in major browsers.
