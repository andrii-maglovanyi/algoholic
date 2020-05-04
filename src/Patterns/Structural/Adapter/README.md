The **Adapter pattern** translates one interface (an object's properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces.

## Participants

- **Adapter** implements the interface that the client expects or knows.
- **Adaptee** is the object being adapted and has a different interface from what the client expects or knows.

## Pros

- _Single Responsibility Principle_. You can separate the interface or data conversion code from the primary business logic of the program.
- _Open/Closed Principle_. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

## Cons

- The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the adaptee class so that it matches the rest of your code.
