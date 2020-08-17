// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { BinaryTree } from "@Data_Structures/Binary_Tree/binary-tree";

import { solutions } from "./super-balanced-tree";

describe("Super-balanced tree", () => {
  const binaryTreeA = new BinaryTree(5);
  let leftNodeA = binaryTreeA.insertLeft(8);
  leftNodeA.insertLeft(1);
  leftNodeA.insertRight(2);
  let rightNodeA = binaryTreeA.insertRight(6);
  rightNodeA.insertLeft(3);
  rightNodeA.insertRight(4);

  const binaryTreeB = new BinaryTree(3);
  let leftNodeB = binaryTreeB.insertLeft(4);
  leftNodeB.insertLeft(1);
  let rightNodeB = binaryTreeB.insertRight(6);
  rightNodeB.insertRight(9);

  const binaryTreeC = new BinaryTree(6);
  binaryTreeC.insertLeft(1);
  let rightNodeC = binaryTreeC.insertRight(0);
  rightNodeC.insertRight(7);

  const binaryTreeD = new BinaryTree(6);
  binaryTreeD.insertLeft(1);
  let rightNodeD = binaryTreeD.insertRight(0);
  rightNodeD.insertRight(7).insertRight(8);

  const binaryTreeE = new BinaryTree(1);
  binaryTreeE.insertLeft(5);
  let rightNodeE = binaryTreeE.insertRight(9);
  rightNodeE.insertLeft(8);
  rightNodeE.insertRight(5);

  const binaryTreeF = new BinaryTree(1);
  binaryTreeF.insertLeft(5);
  const rightNodeF = binaryTreeF.insertRight(9);
  rightNodeF.insertLeft(8).insertLeft(7);
  rightNodeF.insertRight(5);

  const binaryTreeG = new BinaryTree(1);
  const leftNodeG = binaryTreeG.insertLeft(2);
  leftNodeG.insertLeft(3);
  leftNodeG.insertRight(7).insertRight(8);
  binaryTreeG.insertRight(4).insertRight(5).insertRight(6).insertRight(9);

  const binaryTreeH = new BinaryTree(1);
  const leftNodeH = binaryTreeH.insertLeft(2);
  const leftLeftH = leftNodeH.insertLeft(3);
  leftNodeH.insertRight(4);
  leftLeftH.insertLeft(5);
  leftLeftH.insertRight(6);
  binaryTreeH.insertRight(7).insertRight(8).insertRight(9).insertRight(10);

  const binaryTreeI = new BinaryTree(1);

  const binaryTreeJ = new BinaryTree(1);
  binaryTreeJ.insertRight(2).insertRight(3).insertRight(4);

  TestSolutions(solutions, (solution) => {
    expect(solution(binaryTreeA)).toBeTruthy();
    expect(solution(binaryTreeB)).toBeTruthy();
    expect(solution(binaryTreeC)).toBeTruthy();
    expect(solution(binaryTreeD)).toBeFalsy();
    expect(solution(binaryTreeE)).toBeTruthy();
    expect(solution(binaryTreeF)).toBeFalsy();
    expect(solution(binaryTreeG)).toBeFalsy();
    expect(solution(binaryTreeH)).toBeFalsy();
    expect(solution(binaryTreeI)).toBeTruthy();
    expect(solution(binaryTreeJ)).toBeTruthy();
  });
});
