## Flatten a Dictionary

A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript or Python, where it’s known as an Object and Dictionary respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary `dict`, write a function `flattenDictionary` that returns a flattened version of it .

If a certain key is empty, it should be excluded from the output (see e in the example below).

Input:

```javascript
const dict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};
```

Output:

```javascript
{
  "Key1": "1",
  "Key2.a": "2",
  "Key2.b": "3",
  "Key2.c.d": "3",
  "Key2.c.e": "1",
};
```

Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating `Key2`, `c` and `d` the result key would be `Key2.c.d`.
