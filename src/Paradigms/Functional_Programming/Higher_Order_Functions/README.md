## Higher-order functions

- **map** is applies a function to each element in a list (functor), in order, and returns a new array of equal length.

```javascript
[🐮, 🥔, 🐔, 🌽].map(cook) => [🍔, 🍟, 🍗, 🍿]
```

- **filter** iterates through an array of elements and returns a new array that's a subset of the original with values that satisfy a condition.

```javascript
[🍔, 🍟, 🍗, 🍿].filter(isVegetarian) => [🍟, 🍿]
```

- **reduce** compresses a list of elements down to a single value. This value is computed from the accumulated result of invoking a function with an accumulator value against each element.

```javascript
[🍔, 🍟, 🍗, 🍿].reduce(eat) => 💩
```

---

## Points-free definitions

With the functions `add` (which adds two numbers) and `reduce` (which runs the supplied function against an accumulator and each element of the list, feeding the result of each call into the next one and returning the final result), we can easily define a `sum` function like this:

```javascript
const sum = (list) => reduce(add, 0, list);
```

Because of the automatic currying, though, the following is entirely equivalent:

```javascript
const sum = reduce(add, 0);
```

This is the points-free style, defining functions without ever making direct reference to their arguments.

There are plenty of reasons to like it, but the most important one might just be the simplicity. There is a great deal to be said for elegant, readable code.
