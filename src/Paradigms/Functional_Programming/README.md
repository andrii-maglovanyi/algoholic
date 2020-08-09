# Characteristics of functional Programming

- First-class Functions
- [Higher-order Functions](Higher_Order_Functions/README.md)
- Immutable Data
- Lazy Evaluation
- Manipulation of Lists
- Pure Functions
- Recursion

# Applicative

With an applicative, the values are wrapped in a context, like `Functors`, but functions are also wrapped in a context.

```elm
Maybe.map2 (|>)
```
