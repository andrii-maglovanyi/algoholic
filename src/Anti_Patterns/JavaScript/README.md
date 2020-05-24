## Modify the prototype on an instance

In JS, the definition of the "class" (it is not really class like in other languages... sometimes the term pseudoclass is used) is the constructor itself. If your object is parametrised by name, it makes sense to write

```javascript
function Person(name) {
  this.name = name;
}
```

i.e. the property name must be set in the constructor.

Of course, you can write

```javascript
function Person(name) {
this.name = name;
this.describe = function() { ... };
}
```

and it will work as you expect.

However, in this case you are creating a separate instance of the method with every call of the constructor.

On the other hand, here:

```javascript
Person.prototype.describe = function () {
  return "Person called " + this.name;
};
```

you only define the method once. All instances of Person will receive a pointer (called **proto** and not accessible by programmer in most browsers) to Person.prototype. So if you call

```javascript
var myPerson = new Person();
myPerson.describe();
```

it will work, because JS looks object members directly in the object, then in its prototype etc. all the way up to Object.prototype.

The point is that in the second case, only one instance of the function will exist. Which you will probably agree that is a better design. And even if you don't, it simply takes less memory.
