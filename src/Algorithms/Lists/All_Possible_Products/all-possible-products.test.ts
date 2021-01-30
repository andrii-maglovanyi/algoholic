// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./all-possible-products";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([2, 11, 3])).toEqual([2, 11, 3, 22, 6, 33, 66]);
    expect(solution([4, 3, 5, 2])).toEqual([
      4,
      3,
      5,
      2,
      12,
      20,
      15,
      60,
      8,
      6,
      10,
      24,
      40,
      30,
      120,
    ]);
  });
});
