The **Decorator** pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

## Participants

- **Component** to which additional functionality is added.
- **Decorator** "wraps around" a Component by maintaining a reference to it, defines an interface that conforms to Component's interface and implements the additional functionality (addedMembers in diagram).

## Pros

- You can extend an object’s behavior without making a new subclass.
- You can add or remove responsibilities from an object at runtime.
- You can combine several behaviors by wrapping an object into multiple decorators.
- _Single Responsibility Principle_. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

## Cons

- It’s hard to remove a specific wrapper from the wrappers stack.
- It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
- The initial configuration code of layers might look pretty ugly.
