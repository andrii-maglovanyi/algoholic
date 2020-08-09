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

### Examples in Javascript

- Array
- Object
- String

## Monad

**Monad** is a design pattern used to describe computations as a series of steps. They are extensively used in pure functional programming languages to manage side effects but can also be used in multi-paradigm languages to control complexity.

Monads are needed because lots of functions aren’t simple mappings from `a => b`. Some functions need to deal with side effects (promises, streams), handle branching (Maybe), deal with exceptions (Either), etc...

Monads wrap types giving them additional behavior like the automatic propagation of empty value (Maybe monad) or simplifying asynchronous code (Continuation monad).

To be considered a monad the structure has to provide three components:

1. type constructor — a feature that creates a monadic type for the underlying type. For example it defines the type `Maybe<number>` for the underlying type `number`.
2. the unit function that wraps a value of underlying type into a monad. For the Maybe monad it wraps value `2` of the type number into the value `Maybe(2)` of the type `Maybe<number>`.
3. the bind function that chains the operations on a monadic values.

### There are also three monadic laws to obey

- Left identity:

```javascript
bind(unit(x), f) ≡ f(x)

unit(x).bind(f) ==== f(x)
```

- Right identity

```javascript
bind(m, unit) ≡ m

m.bind(unit) ==== m
```

- Associativity:

```javascript
bind(bind(m, f), g) ≡ bind(m, x ⇒ bind(f(x), g))

m.bind(f).bind(g) ==== m.bind(x => f(x).bind(g))
```

The first two laws say that the `unit` is a neutral element. The third one says that the `bind` should be associative — the order of binding does not matter. This is the same property that the addition have: `(8 + 4) + 2` is the same as `8 + (4 + 2)`. The same holds true for function composition: `(f ∘ g) ∘ h = f ∘ (g ∘ h)`.

#### Identity monad

The identity monad is the simplest monad. It just wraps a value. The Identity constructor will serve as the unit function.

#### Maybe monad

```elm
type Maybe a = Nothing | Just a
```

The maybe monad is similar to the identity monad but besides storing a value it can also represent the absence of any value.

The main difference from the identity monad is the empty value propagation. When one of the steps returns a `Nothing` then all subsequent computations are skipped and `Nothing` is returned.

This behavior is similar to the special value `NaN` (not-a-number) in numeric expressions. When one of the intermediate results are NaN then the NaN value propagates through the computations.

```javascript
const result = 5 + 6 * NaN;
```

Maybe can be used to protect against errors caused by the null value.

#### List monad

The list monad represents a lazily computed list of values.

The `unit` function of this monad takes one value and returns a generator that yields that value. The `bind` function applies the `transform` function to every element and yields all elements from the result.

#### Continuation monad

The continuation monad is used for asynchronous tasks. Fortunately with ES6 there is no need to implement it — the Promise object is an implementation of this monad.

1. `Promise.resolve(value)` wraps a value and returns a promise (the unit function).
2. `Promise.prototype.then(onFullfill: value => Promise)` takes as an argument a function that transforms a value into a different promise and returns a promise (the bind function).

Promise.resolve(value) will serve as the Unit function
Promise.prototype.then will serve as the Bind function

Promises provide several extensions to the basic continuation monad. If `then` returns a simple value (and not a promise object) it is treated as a Promise resolved to that value automatically wrapping a value inside the monad.

Second difference lies in the error propagation. Continuation monad allows passing only one value between computation steps. Promises on the other hand have two distinct values — one for the success value and one for the error (similar to the **Either monad**). Errors can be captured using the second callback to the `then` method or using the special `.catch` method.

### Examples

- Promise
- Observable
