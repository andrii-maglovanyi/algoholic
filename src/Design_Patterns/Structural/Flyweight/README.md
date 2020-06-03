The **Flyweight** pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.

Essentially Flyweight is an 'object normalization technique' in which common properties are factored out into shared flyweight objects.

## Participants

- FlyweightFactory creates and manages flyweight objects. If requested, and a flyweight does not exist, it will create one. Stores newly created flyweights for future requests.
- Flyweight maintains intrinsic data to be shared across the application.

## Pros

- You can save lots of RAM, assuming your program has tons of similar objects.

## Cons

- You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.
- The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.
