The **Abstract Factory** provides an interface for creating families of related or dependent objects without specifying their concrete classes or constructors.In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a family which is shared by the newly created objects.

## Participants

- **AbstractFactory** declares an interface for creating products.
- **ConcreteFactory** a factory object that 'manufactures' new products, the create() method returns new products.
- **AbstractProduct** declares an interface for the products that are being created.
- **Products** the product instances being created by the factory.

## Pros

- You can be sure that the products you’re getting from a factory are compatible with each other.
- You avoid tight coupling between concrete products and client code.
- _Single Responsibility Principle_. You can extract the product creation code into one place, making the code easier to support.
- _Open/Closed Principle_. You can introduce new variants of products without breaking existing client code.

## Cons

- The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.
