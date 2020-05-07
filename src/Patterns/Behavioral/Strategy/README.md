**The Strategy pattern** encapsulates alternative algorithms (or strategies) for a particular task. It allows a method to be swapped out at runtime by any other method (strategy) without the client realizing it. Essentially, Strategy is a group of algorithms that are interchangeable.

## Participants

- **Context** maintains a reference to the current Strategy object, supports interface to allow clients to request Strategy calculations and allows clients to change Strategy
- **Strategy** implements the algorithm using the Strategy interface

## Pros

- You can swap algorithms used inside an object at runtime.
- You can isolate the implementation details of an algorithm from the code that uses it.
- You can replace inheritance with composition.
- _Open/Closed Principle_. You can introduce new strategies without having to change the context.

## Cons

- If you only have a couple of algorithms and they rarely change, there’s no real reason to over-complicate the program with new classes and interfaces that come along with the pattern.
- Clients must be aware of the differences between strategies to be able to select a proper one.
- A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.
