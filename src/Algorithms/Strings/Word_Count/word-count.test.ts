// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./word-count";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("I like cake")).toEqual([
      ["I", 1],
      ["like", 1],
      ["cake", 1],
    ]);
    expect(
      solution("Chocolate cake for dinner and pound cake for dessert")
    ).toEqual([
      ["Chocolate", 1],
      ["cake", 2],
      ["for", 2],
      ["dinner", 1],
      ["and", 1],
      ["pound", 1],
      ["dessert", 1],
    ]);
    expect(solution("Strawberry short cake? Yum!")).toEqual([
      ["Strawberry", 1],
      ["short", 1],
      ["cake", 1],
      ["Yum", 1],
    ]);
    expect(solution("Dessert - mille-feuille cake")).toEqual([
      ["Dessert", 1],
      ["mille-feuille", 1],
      ["cake", 1],
    ]);
    expect(solution("Mmm...mmm...decisions...decisions")).toEqual([
      ["mmm", 2],
      ["decisions", 2],
    ]);
    expect(solution("Allie's Bakery: Sasha's Cakes")).toEqual([
      ["Allie's", 1],
      ["Bakery", 1],
      ["Sasha's", 1],
      ["Cakes", 1],
    ]);
  });
});
