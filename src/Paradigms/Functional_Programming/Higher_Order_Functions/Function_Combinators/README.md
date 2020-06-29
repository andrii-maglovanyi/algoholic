## Combinatory logic

Combinatory logic is a model by which logical statements can be described as a combination of a small number of primitive elements called combinators. Each combinator is like a function or lambda abstraction, but without any free variables.

Combinatory logic forces you to use point-free programming style to write useful programs.

A combinator is a an expression with no free variables. That is, it is either a constant, or a lambda expression which only refers to its bound variables.

Examples of combinators:

- 2 is a constant, and therefore a combinator.
- 𝜆𝑥.𝑥 is a lambda expression which only refers to the bound variable 𝑥 , and therefore a combinator.
- 𝜆𝑓.𝜆𝑥.𝜆𝑦.𝑓𝑦𝑥 is a lambda expression which only refers to bound variables, and hence is a combinator.
- 𝜆𝑥.𝑦 is not a combinator; it has a free variable.

**Combinators** are higher-order functions that can combine primitive artifacts like other functions (or other combinators) and behave as control logic. Combinators typically don’t declare any variables of their own or contain any business logic; they’re meant to orchestrate the flow of a functional program.

### **I combinator** (identity)

```
I :: a -> a
```

Returns its argument.

```javascript
const convert = R.pipe(R.map(R.toLower), R.uniq, R.sortBy(R.identity));

convert([
  "Functional",
  "Programming",
  "Curry",
  "Memoization",
  "Partial",
  "Curry",
  "Programming",
]);

// [curry, functional, memoization, partial, programming]
```

---

### **K combinator** (constant)

```
K :: a -> b -> a
```

Throws away its 2nd argument and returns the first.
In simple terms, this is a function that executes any effect but ignores its outcome, just passing the value along in the stream to the next operator `(?)`.

- compose
- pipe

### **OR combinator** (alternation)

Allows to perform simple conditional logic - takes two functions and returns the result of the first one if the value is defined (not `false`, `null` or `undefined`); otherwise it returns the result of second function.

```javascript
const alt = (fnOne, fnTwo) => (val) => fnOne(val) || fnTwo(val);
```

or

```javascript
const alt = R.curry((fnOne, fnTwo, val) => fnOne(val) || fnTwo(val));
```

### **S combinator** (sequence)

Used to loop over a sequence of functions. It takes two or more functions as parameters and returns a new function, which runs all of them in sequence against the same value:

```javascript
const seq = function (/*funcs*/) {
  const funcs = Array.prototype.slice.call(arguments);
  return function (val) {
    funcs.forEach((fn) => {
      fn(val);
    });
  };
};
```

### **??? combinator** (fork, join)

Useful when you need to process a single resource in two different ways and then combine the results. Takes three functions; a join function and two terminal functions that process the provided input. The result of each forked function is passed to `join` function of two arguments.

```javascript
const fork = (join, fnOne, fnTwo) => (val) => join(fnOne(val), fnTwo(val));
```

As example:

```javascript
const computeAverageGrade = R.compose(
  getLetterGrade,
  fork(R.divide, R.sum, R.length)
);

computeAverageGrade([99, 80, 89]); // "B"
```
