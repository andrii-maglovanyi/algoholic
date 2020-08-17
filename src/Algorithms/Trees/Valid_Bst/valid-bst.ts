import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

// O(n) time
// O(n) space
const solution = (
  tree: BinaryTree<number> | null,
  smallestPossible?: number,
  biggestPossible?: number
): boolean => {
  if (!tree) {
    return true;
  }

  if (smallestPossible && tree.value < smallestPossible) return false;
  if (biggestPossible && tree.value > biggestPossible) return false;

  return (
    solution(tree.left, smallestPossible, tree.value) &&
    solution(tree.right, tree.value, biggestPossible)
  );
};

export const solutions = {
  solution,
};
