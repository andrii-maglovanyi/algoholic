**Pure functions** are functions that have no side-effects. They don’t assign to any outside variables, they don’t consume input, they don’t produce output, they don’t read from or write to a database, they don’t modify the parameters they’re passed, etc.

The basic idea is that, if you call a function with the same inputs over and over again, you always get the same result.

You can certainly do things with impure functions (and you must, if your program is going to do anything interesting), but for the most part you’ll want to keep most of your functions pure.

**Referentially opaque** functions are those that provide a different result depending on when they are called. In programming, a watch would be a function which tells you the current time. If you call that function twice, you will get two different results.

```javascript
const a = currentTime();
const b = currentTime();
a == b; // false
```

**Referentially transparent** functions can be called at any time and anywhere and will always give the same result for the same input.

```javascript
const times = (x, y) => x * y;

const a = times(3, 2);
const b = times(3, 2);
a == b; // true
```

You only need to call it once, and you know that every future result will be the same. You can freely replace times(3, 2) with 6, and the program will work just as well.

You can call times(3, 2), and just remember that it's 6. The next time it has to do the same thing, it can just remember that it was 6, without doing any calculation. This is called _memoization_.

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
