The **Builder** pattern allows a client to construct a complex object step by step by specifying the type and content only. Construction details are hidden from the client entirely.

There is an optional class called Director, it's used to define methods that execute steps in a specific order to build commonly created objects.

## Participants

- **Builder** implements the multi-step Builder interface, maintains the product through the assembly process.
- **Product** represents the complex objects being assembled.

## Pros

- You can construct objects step-by-step, defer construction steps or run steps recursively.
- You can reuse the same construction code when building various representations of products.
- _Single Responsibility Principle_. You can isolate complex construction code from the business logic of the product.

## Cons

- The overall complexity of the code increases since the pattern requires creating multiple new classes.
