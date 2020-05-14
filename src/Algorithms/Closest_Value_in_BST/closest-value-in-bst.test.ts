// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { BinaryTree } from "../../Data_Structures/Binary_Tree/binary-tree";

import { solutions } from "./closest-value-in-bst";

describe("Find closest value in BST", () => {
  const binaryTreeA = new BinaryTree(10);
  const binaryTreeB = new BinaryTree(5);

  for (const value of [5, 15, 2, 6, 13, 22, 1, 14]) {
    binaryTreeA.insert(value);
  }

  for (const value of [2, 8, -2, 10, 12, 3, 15, -15, 21]) {
    binaryTreeB.insert(value);
  }

  TestSolutions(solutions, (solution) => {
    expect(solution(binaryTreeA, 12)).toBe(13);
    expect(solution(binaryTreeA, 15)).toBe(15);
    expect(solution(binaryTreeB, 7)).toBe(8);
  });
});
