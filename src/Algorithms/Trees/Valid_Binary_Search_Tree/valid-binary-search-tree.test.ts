// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

import { solutions } from "./valid-binary-search-tree";

describe("Super-balanced tree", () => {
  const binaryTreeA = new BinaryTree(50);
  const leftNodeA = binaryTreeA.insertLeft(30);
  leftNodeA.insertLeft(10);
  leftNodeA.insertRight(40);
  const rightNodeA = binaryTreeA.insertRight(70);
  rightNodeA.insertLeft(60);
  rightNodeA.insertRight(80);

  const binaryTreeB = new BinaryTree(50);
  const leftNodeB = binaryTreeB.insertLeft(30);
  leftNodeB.insertLeft(20);
  leftNodeB.insertRight(60);
  const rightNodeB = binaryTreeB.insertRight(80);
  rightNodeB.insertLeft(70);
  rightNodeB.insertRight(90);

  const binaryTreeC = new BinaryTree(50);
  binaryTreeC.insertLeft(40).insertLeft(30).insertLeft(20).insertLeft(10);

  const binaryTreeD = new BinaryTree(50);
  binaryTreeD.insertRight(70).insertRight(60).insertRight(80);

  const binaryTreeE = new BinaryTree(50);

  const binaryTreeF = new BinaryTree(50);
  const leftNodeF = binaryTreeF.insertLeft(30);
  leftNodeF.insertLeft(20);
  leftNodeF.insertRight(40).insertRight(60);
  const rightNodeF = binaryTreeF.insertRight(80);
  rightNodeF.insertLeft(70);
  rightNodeF.insertRight(90);

  TestSolutions(solutions, (solution) => {
    expect(solution(binaryTreeA)).toBeTruthy();
    expect(solution(binaryTreeB)).toBeFalsy();
    expect(solution(binaryTreeC)).toBeTruthy();
    expect(solution(binaryTreeD)).toBeFalsy();
    expect(solution(binaryTreeE)).toBeTruthy();
    expect(solution(binaryTreeF)).toBeFalsy();
  });
});
