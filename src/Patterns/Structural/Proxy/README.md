The **Proxy** pattern provides a surrogate or placeholder object for another object and controls access to this other object.

In object-oriented programming, objects do the work they advertise through their interface (properties and methods). Clients of these objects expect this work to be done quickly and efficiently. However, there are situations where an object is severely constrained and cannot live up to its responsibility. Typically this occurs when there is a dependency on a remote resource (resulting in network latency) or when an object takes a long time to load.

In situations like these you apply the Proxy pattern and create a proxy object that ‘stands in’ for the original object. The Proxy forwards the request to a target object. The interface of the Proxy object is the same as the original object and clients may not even be aware they are dealing with a proxy rather than the real object

## Participants

- **Proxy** provides an interface similar to the real object, maintains a reference that lets the proxy access the real object and handles requests and forwards these to the real object.
- **RealObject** defines the real object for which service is requested.

## Pros

- You can control the service object without clients knowing about it.
- You can manage the lifecycle of the service object when clients don’t care about it.
- The proxy works even if the service object isn’t ready or is not available.
- _Open/Closed Principle_. You can introduce new proxies without changing the service or clients.

## Cons

- The code may become more complicated since you need to introduce a lot of new classes.
- The response from the service might get delayed.

## Usage

- Lazy initialization.
- Access control.
- Local execution of a remote service.
- Logging requests.
- Caching requests.
