The **Visitor** pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.

Visitors are useful when building extensibility in a library or framework. If the objects in your project provide a 'visit' method that accepts a Visitor object which can make changes to the receiving object then you are providing an easy way for clients to implement future extensions.

## Participants

- **Elements** define an accept method that accepts visitor objects. In the accept method the visitor's visit method is invoked with 'this' as a parameter.
- **Visitor** implements a visit method. The argument is the Element being visited. This is where the Element's changes are made.

## Pros

- _Open/Closed Principle_. You can introduce a new behavior that can work with objects of different classes without changing these classes.
- _Single Responsibility Principle_. You can move multiple versions of the same behavior into the same class.
- A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

## Cons

- You need to update all visitors each time a class gets added to or removed from the element hierarchy.
- Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.
