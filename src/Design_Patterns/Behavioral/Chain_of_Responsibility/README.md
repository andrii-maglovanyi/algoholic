The **Chain of Responsibility** pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

## Participants

- **Client** initiates the request to a chain of handler objects.
- **Handler** defines an interface for handling the requests implements the successor link (returning 'this').

## Pros

- You can control the order of request handling.
- _Single Responsibility Principle_. You can decouple classes that invoke operations from classes that perform operations.
- _Open/Closed Principle_. You can introduce new handlers into the app without breaking the existing client code.

## Cons

- Some requests may end up unhandled.

## Examples

- Event-bubbling. Event propagates through a series of nested controls one of which may choose to handle the event.
- Prototypical inheritance.
