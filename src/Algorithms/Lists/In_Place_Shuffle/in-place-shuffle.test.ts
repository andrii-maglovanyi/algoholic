// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./in-place-shuffle";

describe("In Place Shuffle", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9])).not.toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});
