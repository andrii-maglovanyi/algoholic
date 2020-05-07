The **Prototype Pattern** creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object.

## Participants

- **Prototype** creates an interfaces to clone itself.
- **Clones** are the cloned objects that are being created.

## Pros

- You can clone objects without coupling to their concrete classes.
- You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
- You can produce complex objects more conveniently.
- You get an alternative to inheritance when dealing with configuration presets for complex objects.

## Cons

- Cloning complex objects that have circular references might be very tricky.
