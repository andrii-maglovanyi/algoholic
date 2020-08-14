import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

// O(n) time
// O(1) space
const solution = (tree: BinaryTree) => {
  const findMaxDepth = (tree: BinaryTree, curDepth: number) => {
    curDepth += 1;

    if (tree.left) {
      findMaxDepth(tree.left, curDepth);
    }

    if (tree.right) {
      findMaxDepth(tree.right, curDepth);
    }

    if (!tree.left && !tree.right) {
      if (refDepth) {
        if (Math.abs(refDepth - curDepth) > 1) {
          isBalanced = false;
        }
        refDepth = Math.min(refDepth, curDepth);
      } else {
        refDepth = curDepth;
      }
    }
  };

  let isBalanced = true;
  let refDepth = 0;

  findMaxDepth(tree, 0);

  return isBalanced;
};

export const solutions = {
  solution,
};
