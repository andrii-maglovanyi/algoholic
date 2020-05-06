**Lazy evaluation** delays evaluating an expression until it is actually needed. When it is evaluated, the result is saved so repeated evaluation is not needed.
The opposite (evaluating immediately) is called strict evaluation.

## Pros

- Discard expressions that are not directly linked to result and reduce the time complexity of an algorithm.
- Ability to work with infinite lists.
- Short circuiting behavior.
- Memoization.

## Cons

- Can increase space complexity of an algorithm.

---

### Lodash

The `_.chain` function can be used to augment the state of an input object by connecting operations that transform the input into the desired output. It’s powerful because, unlike wrapping arrays with the shorthand `_(...)` object, it explicitly makes any function in the sequence chainable. Despite this being a complex program, you can avoid creating any variables, and all looping is effectively eliminated.

Another benefit of using `_.chain` is that you can create complex programs that behave lazily, so nothing executes until that last `value()` function is called. This can have a tremendous impact in your application because you can potentially skip running entire functions when their results aren’t needed.
