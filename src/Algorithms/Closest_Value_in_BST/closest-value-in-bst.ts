// import { BinaryTree } from "../../Data_Structures/Binary_Tree/binary-tree";

// // Average O(log(n)), worst O(n) time
// // Average O(log(n)), worst O(n) space
// const findClosestValueRecursively = (tree: BinaryTree, targetValue: number) => {
//   const findClosestInSubTree = (
//     tree: BinaryTree,
//     targetValue: number,
//     closestValue: number
//   ): number => {
//     if (
//       Math.abs(targetValue - closestValue) >
//       Math.abs(targetValue - (tree.value as number))
//     ) {
//       closestValue = tree.value as number;
//     }

//     if (tree.left && targetValue < tree.value) {
//       return findClosestInSubTree(tree.left, targetValue, closestValue);
//     } else if (tree.right && targetValue > tree.value) {
//       return findClosestInSubTree(tree.right, targetValue, closestValue);
//     }

//     return closestValue;
//   };

//   return findClosestInSubTree(tree, targetValue, tree.value as number);
// };

// // Average O(log(n)), worst O(n) time
// // O(1) space
// const findClosestValueIteratively = (tree: BinaryTree, targetValue: number) => {
//   let current = tree;
//   let closestValue = current.value as number;
//   let smallestDiff = current.value as number;

//   while (current) {
//     const diff = Math.abs(targetValue - (current.value as number));

//     if (smallestDiff >= diff) {
//       smallestDiff = diff;
//       closestValue = current.value as number;
//     }

//     if (current.left && targetValue < current.value) {
//       current = current.left;
//     } else if (current.right && targetValue > current.value) {
//       current = current.right;
//     } else {
//       break;
//     }
//   }

//   return closestValue;
// };

// export const solutions = {
//   "Recursion Traversal": findClosestValueRecursively,
//   "Loop Traversal": findClosestValueIteratively,
// };

///================

///================

export const distance_path = function (src, dest, wizards) {
  let minCost = 0;
  let minPath = [];

  //   const solutions = [];

  const findPath = (src, dest, wizards, path, cost) => {
    src; //?
    dest; //?
    cost; //?
    for (let i = 0; i < wizards.length; i++) {
      if (wizards[i].toString().indexOf(dest) !== -1) {
        i; //?
        const newCost = cost + (dest - i) ** 2;
        const newPath = i + path;
        if (i === src) {
          cost; //?
          i; //?
          return { path: newPath, cost: newCost };
        } else {
          i; //?
          return findPath(src, i, wizards, newPath, newCost);
        }
      }
    }
  };

  const solutions = findPath(src, dest, wizards, `${dest}`, 0);

  solutions; //?

  return { minCost: minCost, minPath: minPath };
};
