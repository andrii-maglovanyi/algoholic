The **Mediator** pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

## Participants

- **Mediator** defines an interface for communicating with Colleague objects, maintains references to Colleague objects and manages central control over operations.
- **Colleagues** objects that are being mediated by the Mediator, each instance maintains a reference to the Mediator.

## Pros

- _Single Responsibility Principle_. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.
- _Open/Closed Principle_. You can introduce new mediators without having to change the actual components.
- You can reduce coupling between various components of a program.
- You can reuse individual components more easily.

## Cons

- Over time a mediator can evolve into a God Object.
