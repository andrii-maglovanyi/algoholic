The **Facade pattern** provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.

The intent of the Facade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

## Participants

- **Facade** knows which subsystems are responsible for a request delegates client requests to appropriate subsystem objects.
- **Complex Subsystem** implements and performs specialized subsystem functionality and have no knowledge of or reference to the facade.

## Pros

- You can isolate your code from the complexity of a subsystem.

## Cons

- A facade can become a god object coupled to all classes of an app.
