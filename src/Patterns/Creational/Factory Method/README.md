A **Factory Method** creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common.

## Participants

- **Factory** the 'factory' object that creates new products.
- **AbstractProduct** declares an interface for products.
- **ConcreteProduct** the product being created.

## Pros

- You avoid tight coupling between the creator and the concrete products.
- _Single Responsibility Principle_. You can move the product creation code into one place in the program, making the code easier to support.
- _Open/Closed Principle_. You can introduce new types of products into the program without breaking existing client code.

## Cons

- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.
