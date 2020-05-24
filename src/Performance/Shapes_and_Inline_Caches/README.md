- Always initialize objects in the same way, to limit the size of shape chains.
- Don’t mess with property property descriptors of array elements, so they can be stored and operated on efficiently.
- Do not change object prototype during the code execution (or change at the very beginning) because it invalidates inline caching (IC).

## Shapes (Hidden Classes)

JavaScript is a dynamically-typed programming language, where objects can have properties added to, and deleted from at runtime. Such dynamism prevents JavaScript compilers from constructing a fixed object layout before execution.

However, to generate efficient code, it is crucial for the compiler to have some notion of object type. To resolve this conflict, JavaScript implementations dynamically create Hidden Classes (Shapes) for objects. The basic idea is to assign each object a hidden class, which contains information about the current layout
of the object. Objects created in the same way are assigned the same hidden class. Grouping objects in this manner helps to enable optimizations.

## Inline Caching (IC)

It's a technique used in dynamically-typed languages to specialize sites in the program that access objects. The IC structures are dynamically built with profile information gathered during execution, and they help improve performance. Unfortunately, in current JavaScript implementations, such structures are cleared and repopulated at each execution. This is because they contain context-dependent information, such as the memory addresses of heap objects, which are not consistent across runs.

IC is based on the empirical evidence that the objects accessed at a particular
object access site often have the same hidden class or classes.

Without IC, the runtime system would be invoked at every object access site and, after identifying the type of the incoming object, would perform the appropriate load or store operation at the appropriate offset.

C misses still induce significant overhead during the initial sections of programs. Importantly, this overhead does not disappear as a program is re-executed. Indeed, V8 discards the ICVector data at the end of every execution, and recreates it from scratch at the beginning of each new execution.
