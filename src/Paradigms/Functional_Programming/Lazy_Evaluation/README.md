**Lazy evaluation** delays evaluating an expression until it is actually needed. When it is evaluated, the result is saved so repeated evaluation is not needed.
The opposite (evaluating immediately) is called _strict evaluation_.

Lazy evaluation is performant (and correct) only when correctly mixed with referential transparency. If the state of your variables is constantly changing, you can forget about memoization, and suddenly lazy evaluation becomes slower than doing it eagerly.

Lazy evaluation is to the CPU what garbage collection is to memory. The garbage collector allows you to pretend that you have infinite memory; lazy evaluation allows you to pretend that you have infinite processing power.

It allows you to operate on theoretically infinite data structures, calculating only those parts you need. And it allows you to define your own efficient control structures inside the language instead of only at the level of the language syntax.

## Pros

- Discard expressions that are not directly linked to result and reduce the time complexity of an algorithm.
- Ability to work with infinite lists.
- Short circuiting behavior for a logical AND (&&).
- Memoization. A dictionary where the key is the name of the variable, and the value is the result of the evaluation. When compiler encounters an already evaluated variable, it can simply look up the value in the dictionary.

## Cons

- Can increase space complexity of an algorithm.
- The reason so few compilers support lazy evaluation is that it makes writing an imperative, OOP-style compiler tricky.

---

### Lodash

The `_.chain` function can be used to augment the state of an input object by connecting operations that transform the input into the desired output. It’s powerful because, unlike wrapping arrays with the shorthand `_(...)` object, it explicitly makes any function in the sequence chainable. Despite this being a complex program, you can avoid creating any variables, and all looping is effectively eliminated.

Another benefit of using `_.chain` is that you can create complex programs that behave lazily, so nothing executes until that last `value()` function is called. This can have a tremendous impact in your application because you can potentially skip running entire functions when their results aren’t needed.
