// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./cheapest-trip";

describe("Check Order", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([10, 7, 8, 6, 9], [8, 9, 7, 11, 10])).toEqual([1, 2]);
    expect(solution([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual([0, 4]);
    expect(solution([10, 8, 6], [2, 5, 6])).toEqual([0, 0]);
  });
});
