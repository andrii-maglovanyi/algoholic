The **Observer** pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs. This pattern is the cornerstone of event driven programming.

## Participants

- **Subject** maintains list of observers. Any number of Observer objects may observe a Subject. It implements an interface that lets observer objects subscribe or unsubscribe and sends a notification to its observers when its state changes.
- **Observers** have a function signature that can be invoked when Subject changes (i.e. event occurs).

## Pros

- _Open/Closed Principle_. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
- You can establish relations between objects at runtime.

## Cons

- Subscribers are notified in random order.

## Usage

- Promise (An Observable with one single emitted value)
- Rx.js
