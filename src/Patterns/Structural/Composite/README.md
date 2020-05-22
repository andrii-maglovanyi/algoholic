The **Composite pattern** allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.

## Participants

- **Component** declares the interface for objects in the composition.
- **Leaf** represents primitive objects in the composition. A leaf has no children.
- **Composite** represents branches (or subtrees) in the composition
  maintains a collection of child components.

## Pros

- You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
- _Open/Closed Principle_. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

## Cons

- It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.
