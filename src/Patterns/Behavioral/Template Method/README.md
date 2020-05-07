The **Template Method** pattern provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps. This pattern is designed to offer extensibility to the client developer.

## Participants

- **AbstractClass** offers an interface for clients to invoke the templateMethod, implements template method which defines the primitive Steps for an algorithm and provides the hooks (through method overriding) for a client developer to implement the steps.
- **ConcreteClass** implements the primitive Steps as defined in AbstractClass.

## Pros

- You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.
- You can pull the duplicate code into a superclass.

## Cons

- Some clients may be limited by the provided skeleton of an algorithm.
- You might violate the _Liskov Substitution Principle_ by suppressing a default step implementation via a subclass.
- Template methods tend to be harder to maintain the more steps they have.
