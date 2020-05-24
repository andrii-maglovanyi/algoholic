A combinator is a an expression with no free variables. That is, it is either a constant, or a lambda expression which only refers to its bound variables.

Examples of combinators:

- 2 is a constant, and therefore a combinator.
- 𝜆𝑥.𝑥 is a lambda expression which only refers to the bound variable 𝑥 , and therefore a combinator.
- 𝜆𝑓.𝜆𝑥.𝜆𝑦.𝑓𝑦𝑥 is a lambda expression which only refers to bound variables, and hence is a combinator.
- 𝜆𝑥.𝑦 is not a combinator; it has a free variable.

**Combinators** are higher-order functions that can combine primitive artifacts like other functions (or other combinators) and behave as control logic. Combinators typically don’t declare any variables of their own or contain any business logic; they’re meant to orchestrate the flow of a functional program.

- compose
- pipe
- **identity** (I-combinator)\
   A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.

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

* tap
* alternation
* sequence
* fork
