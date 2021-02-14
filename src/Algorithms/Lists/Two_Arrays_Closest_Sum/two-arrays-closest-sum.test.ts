// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./two-arrays-closest-sum";

describe("Two arrays closest sum", () => {
  TestSolutions(solutions, (solution) => {
    // expect(solution([-1, 3, 8, 2, 9, 5], [4, 1, 2, 10, 5, 20], 24)).toEqual([
    //   [5, 20],
    //   [3, 20],
    // ]);
    expect(solution([2, 8, 4], [9, 1, 5], 15)).toEqual([
      [8, 5],
      [8, 9],
      [4, 9],
    ]);
  });
});
