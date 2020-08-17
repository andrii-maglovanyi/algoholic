import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

// Average O(log(n)), worst O(n) time
// Average O(log(n)), worst O(n) space
const findClosestValueRecursively = (
  tree: BinaryTree<number>,
  targetValue: number
) => {
  const findClosestInSubTree = (
    tree: BinaryTree<number>,
    targetValue: number,
    closestValue: number
  ): number => {
    if (
      Math.abs(targetValue - closestValue) >
      Math.abs(targetValue - (tree.value as number))
    ) {
      closestValue = tree.value as number;
    }

    if (tree.left && targetValue < tree.value) {
      return findClosestInSubTree(tree.left, targetValue, closestValue);
    } else if (tree.right && targetValue > tree.value) {
      return findClosestInSubTree(tree.right, targetValue, closestValue);
    }

    return closestValue;
  };

  return findClosestInSubTree(tree, targetValue, tree.value as number);
};

// Average O(log(n)), worst O(n) time
// O(1) space
const findClosestValueIteratively = (
  tree: BinaryTree<number>,
  targetValue: number
) => {
  let current = tree;
  let closestValue = current.value as number;
  let smallestDiff = current.value as number;

  while (current) {
    const diff = Math.abs(targetValue - (current.value as number));

    if (smallestDiff >= diff) {
      smallestDiff = diff;
      closestValue = current.value as number;
    }

    if (current.left && targetValue < current.value) {
      current = current.left;
    } else if (current.right && targetValue > current.value) {
      current = current.right;
    } else {
      break;
    }
  }

  return closestValue;
};

export const solutions = {
  findClosestValueRecursively,
  findClosestValueIteratively,
};
