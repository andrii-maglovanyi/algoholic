**Pure functions** are functions that have no side-effects. They don’t assign to any outside variables, they don’t consume input, they don’t produce output, they don’t read from or write to a database, they don’t modify the parameters they’re passed, etc.

The basic idea is that, if you call a function with the same inputs over and over again, you always get the same result.

You can certainly do things with impure functions (and you must, if your program is going to do anything interesting), but for the most part you’ll want to keep most of your functions pure.
