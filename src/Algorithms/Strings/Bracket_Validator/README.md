# Bracket validator

Write a braces/brackets/parentheses validator.

Let's say:

- `(`, `{`, `[` are called _openers_.
- `)`, `}`, `]` are called _closers_.

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

```javascript
"{ [ ]() }"; // true
"{ [ ( ] ) }"; // false
"{ [ }"; // false
```
