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
