The **Interpreter** pattern helps to get an appropriate representation of some language (code analysis, parsing, processing, etc).

Some applications are so complex that they require advanced configuration. You could offer a basic scripting language which allows the end-user to manipulate your application through simple instructions. The Interpreter pattern solves this particular problem.

## Participants

- **Context** contains state information to the interpreter.
- **TerminalExpression** implements an interpret operation associated with terminal symbols in the grammar one instance for each terminal expression in the sentence.
- **NonTerminalExpression** implements an interpret operation associated for non-terminal symbols in the grammar.

## Pros

- It’s easy to change and extend the grammar. The pattern uses classes to represent grammar rules, so it’s open to extending functionality through class extension.
- Classes defining nodes in the abstract syntax tree. Such classes are easy to write and often such process is delegated to a compiler or parser generator.
- The Interpreter pattern makes it easier to evaluate an expression in a new way. For example, you can support pretty printing or type-checking an expression by defining a new operation on the expression classes.

## Cons

- The Interpreter pattern defines at least one class for every rule in the grammar. Hence grammars containing many rules can be hard to manage and maintain.
- When the grammar is very complex, you probably need a more complex solution as well. Like parsers or compiler generators would help not to maintain a huge number of classes by yourself.

## Usage

- Analyzers, using Abstract Syntax Tree (AST) - Babel, EsLint, TypeScript
