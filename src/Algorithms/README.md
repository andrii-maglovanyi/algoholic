# Classes of Algorithms

![big-o-notation]

## Algorithm strategy

### Brute Force

Another name for brute force is _exhaustive search_. In these algorithms you consider every possible solution in the solution domain to find the optimal solution. Depending on the type of problem that you are doing, if you have n items to consider you will be either doing n! searches (Permutations) or 2^n searches (Combinations). Brute force algorithms are simple to implement but computationally intensive to run. They are reasonable solutions when n is small but even for moderately large values of n the solutions become too intensive to produce results in a reasonable time frame. One advantage of the the brute force algorithms is that they give the optimal solution.

### Greedy Algorithms

Greedy Algorithms are simple, straightforward and short sighted. They are easy to implement and sometimes produce results that we can live with. In a greedy algorithm you are always looking for the immediate gain without considering the long term effect. Even though you get short term gains with a greedy algorithm, it does not always produce the optimal solution.

### Divide and Conquer

Divide and conquer are extremely efficient because the problem space or domain is decreased significantly with each iteration. A great example of this algorithm is binary search. After each unsuccessful comparison with the middle element in the array, we divide the search space in half. The algorithm converges extremely rapidly.

There are some recursive algorithms that make good use of the divide and conquer technique. In fact, recursion is based on two key problem solving concepts - divide and conquer and self similarity. A recursive solution solves a problem by solving a smaller instance of the same problem. It solves this new problem by solving an even smaller instance of the same problem. Eventually, the new problem will be so small that its solution will either be obvious or known. And then we work backwards to solve the original problem.

A recursive definition consists of two parts: a recursive part that defines the solution with a smaller instance of the problem and a non-recursive boundary case or base case that defines a limiting condition. There are two prime examples of this process - merge sort and quick sort.

1. Does more work on the sub-problems and hence has more time consumption.
2. In divide and conquer the sub-problems are independent of each other.

```javascript
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
```

The above example has O(2^n) time and O(n) space complexity.

### Dynamic Programming

Divide and conquer is a top down approach to solve a problem. We start with the largest instance of the problem that we continually decrease in size until we reach the base case. In dynamic programming we start with the simplest case and work systematically to the values we need.

1. Solves the sub-problems only once and then stores it in the table.
2. In dynamic programming the sub-problem are not independent.

```javascript
const memo = {};
const fib = (n) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  return result;
};
```

The above example has O(n) time and space complexity.

## Algorithm structure

– **Iterative**. Execute action in loop
– **Recursive**. Reapply action to subproblem(s)

[big-o-notation]: big-o-notation.jpeg "Big O notation"
