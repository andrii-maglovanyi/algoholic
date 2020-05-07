The **Iterator** pattern allows clients to effectively loop over a collection of objects

A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure.

## Participants

- **Iterator** implements iterator interface with methods first(), next(), etc. Keeps track of current position when traversing collection.
- **Iterable** individual objects of the collection being traversed. A data structure that provides a way to expose its data to the public. In JavaScript the implementation is based on a method whose key is _Symbol.iterator_, which is is a factory of iterators.

## Pros

- _Single Responsibility Principle_. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.
- _Open/Closed Principle_. You can implement new types of collections and iterators and pass them to existing code without breaking anything.
- You can iterate over the same collection in parallel because each iterator object contains its own iteration state.
- For the same reason, you can delay an iteration and continue it when needed.

## Cons

- Applying the pattern can be an overkill if your app only works with simple collections.
- Using an iterator may be less efficient than going through elements of some specialized collections directly.

## Examples

```javascript
const iterable = {
 [Symbol.iterator](){
   let step = 0;
   const iterator = {
       next() {
           if (step++ < 3) {
               return { value: step; done: false };
           }
           return { value: null; done: true };
       }
   };
   return iterator;
 }
}
```

There are a list of iterables in JavaScript which are using the concepts previously mentioned natively.

- _Array_ and _TypedArray_ over each element inside array.
- _String_ over each character.
- _Set_ over their elements.
- _Map_ over its key-value pairs.

And constructs in that use iterables.

- `for-of loop` which uses an iterable, otherwise it will throw an Error.

```javascript
for (const value of iterable) {...}
```

- Destructuring of Array and spread operator.

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, , third, , last] = numbers;

// is equivalent to
const iterator = numbers[Symbol.iterator]();
const first = iterator.next().value;
iterator.next().value;
const third = iterator.next().value;
iterator.next().value;
const last = iterator.next().value;
```
