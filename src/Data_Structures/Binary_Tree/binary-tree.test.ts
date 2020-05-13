//@ts-nocheck

import { BinaryTree } from "./binary-tree";

describe("Binary Tree", () => {
  const binaryTree = new BinaryTree(5);

  beforeAll(() => {
    for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) {
      binaryTree.insert(value);
    }

    //               5
    //          3         6
    //       1     4         7
    //         2                8
    //                            10
    //                          9

    binaryTree.print(); //?
    binaryTree.print("pre"); //?
    binaryTree.print("post"); //?
  });

  test("Should create a binary tree", () => {
    expect(binaryTree.value).toBe(5);
    expect(binaryTree.left.value).toBe(3);
    expect(binaryTree.right.value).toBe(6);
    expect(binaryTree.left.left.value).toBe(1);
    expect(binaryTree.right.right.value).toBe(7);
    expect(binaryTree.right.right.right.value).toBe(8);
    expect(binaryTree.left.right.value).toBe(4);
    expect(binaryTree.right.right.right.right.value).toBe(10);
    expect(binaryTree.left.left.right.value).toBe(2);
    expect(binaryTree.right.right.right.right.left.value).toBe(9);
  });

  test("Should implement contains", () => {
    expect(binaryTree.contains(2)).toBeTruthy();
    expect(binaryTree.contains(9)).toBeTruthy();
    expect(binaryTree.contains(0)).toBeFalsy();
    expect(binaryTree.contains(11)).toBeFalsy();
  });

  test("Should implement depthFirstTraversal", () => {
    const _pre = [];
    const _in = [];
    const _post = [];
    binaryTree.depthFirstTraversal("pre", (value) => _pre.push(value));
    binaryTree.depthFirstTraversal("in", (value) => _in.push(value));
    binaryTree.depthFirstTraversal("post", (value) => _post.push(value));
    expect(_pre).toEqual([5, 3, 1, 2, 4, 6, 7, 8, 10, 9]);
    expect(_in).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(_post).toEqual([2, 1, 4, 3, 9, 10, 8, 7, 6, 5]);
  });

  test("Should implement breadthFirstTraversal", () => {
    const result = [];
    binaryTree.breadthFirstTraversal((value) => result.push(value));
    expect(result).toEqual([5, 3, 6, 1, 4, 7, 2, 8, 10, 9]);
  });

  test("Should implement getMinValue", () => {
    expect(binaryTree.getMinValue()).toBe(1);
  });

  test("Should implement getMaxValue", () => {
    expect(binaryTree.getMaxValue()).toBe(10);
  });

  test("Should create a custom binary tree", () => {
    const customBinaryTree = new BinaryTree("a");
    const b = customBinaryTree.insertLeft("b");
    const c = customBinaryTree.insertRight("c");
    const d = b.insertLeft("d");
    const e = b.insertRight("e");
    const f = c.insertLeft("f");
    const g = c.insertRight("g");
    const h = d.insertLeft("h");
    const i = d.insertRight("i");

    //                  a
    //            b           c
    //         d     e     f     g
    //       h   i

    customBinaryTree.print(); //?
    customBinaryTree.print("pre"); //?
    customBinaryTree.print("post"); //?

    expect(customBinaryTree.value).toBe("a");
    expect(customBinaryTree.left.value).toBe("b");
    expect(customBinaryTree.left.left.value).toBe("d");
    expect(customBinaryTree.left.right.value).toBe("e");
    expect(customBinaryTree.left.left.left.value).toBe("h");
    expect(customBinaryTree.left.left.right.value).toBe("i");
    expect(customBinaryTree.right.value).toBe("c");
    expect(customBinaryTree.right.left.value).toBe("f");
    expect(customBinaryTree.right.right.value).toBe("g");
  });
});
