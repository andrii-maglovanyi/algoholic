# Cake shop

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

The following example would _not_ be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

```javascript
const takeOutOrders = [1, 3, 5];
const dineInOrders = [2, 4, 6];
const servedOrders = [1, 2, 4, 6, 5, 3];
```

but

```javascript
const takeOutOrders = [17, 8, 24];
const dineInOrders = [12, 19, 2];
const servedOrders = [17, 8, 12, 19, 24, 2];
```

_would_ be first-come, first-served.

Order numbers are arbitrary. They do **not** have to be in increasing order.
