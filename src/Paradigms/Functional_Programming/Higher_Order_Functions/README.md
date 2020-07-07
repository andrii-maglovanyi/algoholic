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

## Currying Functions

Currying is the process of converting functions that take multiple arguments into ones that, when supplied fewer arguments, return new functions that accept the remaining ones.

```javascript
const add = curry((a, b) => a + b);

var add42 = add(42);

add42(10); //=> 52
add42(7); // 49
```

### Currying multiple arguments

Different versions of currying work slightly differently. In Ramda, you can pass any of the arguments at any time to a curried function. If the total arguments passed have not yet reached the required number, then you will get back a new function. If you reach (or exceed) that number, you will get back the final result.

```javascript
const formatName = curry(
  (first, middle, last) => first + " " + middle + " " + last
);

var f = formatName("James"); // returns a function
var g = f("Earl"); // returns a function
g("Jones"); //=> "James Earl Jones"
var h = formatName("James", "Earl"); // returns a function
h("Jones"); //=> "James Earl Jones"
// Note that g and h are equivalent functions
formatName("James", "Earl", "Jones"); //=> "James Earl Jones"
```

Some insist that this is not truly currying, but should be called `partial application`. They can feel free to call it what they like. It serves the same role as currying does in a more strongly typed language.

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

Points-free programming brings functional JavaScript code closer to that of Haskell and the Unix philosophy. It can be used to increase the level of abstraction by forcing you to think of composing high-level components instead of details of function evaluation.

## Transducer

Transducer is a function that accepts a `transformer` and returns a `transformer` and can be composed directly. It's an efficient way to transform list of data by reducing iterations for every transformation to just one.

A transducer will loop over the list and then perform all the transformations at once on each value. The transformed value is then passed back to the main reducing function.

The `transduce` function is really just a `reduce` function with an additional argument upfront.

```javascript
R.reduce(iteratorFunction, [], list);
R.transduce(transformationFunction, iteratorFunction, [], list);
```
