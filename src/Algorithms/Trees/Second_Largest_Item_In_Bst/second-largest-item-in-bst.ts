import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

// O(n) time
// O(n) space
const solution = (
  tree: BinaryTree<number>,
  largest: number = 0,
  secondLargest: number = 0
): number => {
  if (tree.right) {
    const second = largest > tree.right.value ? tree.right.value : tree.value;

    return solution(
      tree.right,
      Math.max(largest, tree.right.value),
      Math.max(second, secondLargest)
    );
  }

  if (tree.left) {
    return solution(
      tree.left,
      largest,
      Math.max(secondLargest, tree.left.value)
    );
  }

  if (largest === secondLargest) {
    throw new Error("Second largest item is not found");
  }

  return secondLargest;
};

const findLargest = (tree: BinaryTree<number>) => {
  let current = tree;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
};

// O(h) time, where h is the height of the tree
// O(1) space
const findSecondLargest = (tree: BinaryTree<number>) => {
  if (!tree.left && !tree.right) {
    throw new Error("Tree has to have at least two nodes");
  }

  let current: BinaryTree<number> | null = tree;
  while (current) {
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    current = current.right;
  }
};

export const solutions = {
  solution,
  findSecondLargest,
};
