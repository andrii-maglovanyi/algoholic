The **Command pattern** encapsulates actions as objects that contain all information about the request. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request.
It also allows you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.

## Participants

- **Invoker** asks to carry out the request. It has to store a reference to the command object(s) and triggers it instead of sending the request directly to the receiver. Invoker isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
- **Command** maintains information about the action to be taken.
- **Receiver** knows how to carry out the operation associated with the command and (optionally) maintains a history of executed commands.

## Pros

- _Single Responsibility Principle_. You can decouple classes that invoke operations from classes that perform these operations.
- _Open/Closed Principle_. You can introduce new commands into the app without breaking existing client code.
- You can implement undo/redo.
- You can implement deferred execution of operations.
- You can assemble a set of simple commands into a complex one.

## Cons

- The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
