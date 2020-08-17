// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

import { solutions } from "./second-largest-item-in-bst";

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
  leftNodeB.insertLeft(10);
  leftNodeB.insertRight(40);
  const rightNodeB = binaryTreeB.insertRight(70);
  rightNodeB.insertLeft(60);

  const binaryTreeC = new BinaryTree(50);
  let leftNodeC = binaryTreeC.insertLeft(30);
  leftNodeC.insertLeft(10);
  leftNodeC.insertRight(40);
  let rightNodeC = binaryTreeC.insertRight(70);
  leftNodeC = rightNodeC.insertLeft(60);
  leftNodeC.insertRight(65);
  leftNodeC = leftNodeC.insertLeft(55);
  leftNodeC.insertRight(58);

  const binaryTreeD = new BinaryTree(50);
  const leftNodeD = binaryTreeD.insertLeft(30);
  leftNodeD.insertLeft(10);
  leftNodeD.insertRight(40);
  binaryTreeD.insertRight(70);

  const binaryTreeE = new BinaryTree(50);
  binaryTreeE.insertLeft(40).insertLeft(30).insertLeft(20).insertLeft(10);

  const binaryTreeF = new BinaryTree(50);
  binaryTreeF.insertRight(60).insertRight(70).insertRight(80);

  const binaryTreeG = new BinaryTree(50);

  TestSolutions(solutions, (solution) => {
    expect(solution(binaryTreeA)).toBe(70);
    expect(solution(binaryTreeB)).toBe(60);
    expect(solution(binaryTreeC)).toBe(65);
    expect(solution(binaryTreeD)).toBe(50);
    expect(solution(binaryTreeE)).toBe(40);
    expect(solution(binaryTreeF)).toBe(70);
    expect(() => solution(binaryTreeG)).toThrowError();
  });
});
