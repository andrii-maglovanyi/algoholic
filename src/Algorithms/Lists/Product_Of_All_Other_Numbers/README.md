# You have an array of integers, and for each index you want to find the product of _every integer except the integer at that index_

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

```javascript
[1, 7, 3, 4];
```

The function would return:

```javascript
[84, 12, 28, 21];
```

By calculating:

```javascript
[7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3];
```

**You can't use division in your solution!**
