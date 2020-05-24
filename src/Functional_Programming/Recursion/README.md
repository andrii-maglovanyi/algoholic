Recursion is a technique designed to solve problems by decomposing them into smaller, self-similar problems that, when combined, arrive at the original solution. A recursive function has two main parts:

- Base cases (also known as the terminating condition)
- Recursive cases

The base cases are a set of inputs for which a recursive function computes a concrete result, without having to recur. The recursive case deals with a set of inputs (necessarily smaller than the original) for which the function calls itself. If the input isn’t smaller, the recursion runs indefinitely until the program crashes. As the function recurs, the nature of the inputs unconditionally become smaller, finally reaching the instance for which the base case is triggered and the process terminates with a value.
