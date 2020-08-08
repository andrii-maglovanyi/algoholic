# Functional Data Types

## Functor

A **functor** represents a set of things that can be mapped over to obtain a set of new things under that same structure.
We use the .map(f) method to perform that mapping.

```javascript
Functor<T> {
  map: <a, b>(a => b, T<a>) => T<b>
}
```

Module must match the `Functor` signature for some type `T`, and obey following laws:

- Identity: `F.map(x => x, a) ≡ a`
- Composition: `F.map(x => f(g(x)), a) ≡ F.map(f, F.map(g, a))`

Their practical purpose is to create a context or an abstraction that allows you to securely manipulate and apply operations to values without changing any original values.

- _Must be side effect–free_. You can map the R.identity function to obtain the same value over a context. This proves functors are side effect–free and preserves the structure of the wrapped value:

```javascript
new Wrapper("Get Functional").fmap(R.identity); // Wrapper('Get Functional')
```

- _Must be composable_. This property indicates that the composition of a function applied to `fmap` should be exactly the same as chaining `fmap` functions together.

```javascript
two.fmap(R.compose(plus3, R.tap(infoLogger))).map(R.identity); // 5
```

## Examples in Javascript

- Array
- Object
- String
