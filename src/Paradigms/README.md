## Chief difference between OOP and FP

| Object-Oriented                                                                                               | Functional                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| - Data and the operations upon it are tightly coupled.                                                        | - Data is only loosely coupled to functions. \_                                                                                       |
| - Objects hide their implementation of operations from other objects via their interfaces.                    | - Functions hide their implementation, and the language’s abstractions speak to functions and the way they are combined or expressed. |
| - The central model for abstraction is the data itself.                                                       | - The central model for abstraction is the function, not the data structure.                                                          |
| - The central activity is composing new objects and extending existing objects by adding new methods to them. | - The central activity is writing new functions.                                                                                      |

One main distinguishing characteristics of functional programming languages is that they describe what they want done, and not how to do it. OO, inside its methods, still uses mostly imperative techniques.

#### Imperative style

```javascript
const sumOfSquares = (list) => {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += square(list[i]);
  }
  return result;
};
```

#### Functional style

```javascript
const sumOfSquares = pipe(map(square), reduce(add, 0));
```

### Functional Features in Javascript

**Easily available in Javascript**

- First-class functions
- Lambdas/Anonymous Functions with closures
- Compact, even terse, functions

**Possible to accomplish in Javascript with some care**

- Mostly stateless processing
- Side-effect-free function calls

### Not available in current versions Javascript

- Performant recursion through tail call optimization
- Pattern matching (Haskell, Erlang)
- Lazy Evaluation (Miranda, Haskell)
- Homoiconicity (mostly LISP-like languages?)
