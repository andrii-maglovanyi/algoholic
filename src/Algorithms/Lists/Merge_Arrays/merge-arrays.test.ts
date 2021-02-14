// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./merge-arrays";

describe("Merge Arrays", () => {
  TestSolutions(solutions, (solution) => {
    // expect(solution([], [1, 2, 3])).toEqual([1, 2, 3]);
    // expect(solution([5, 6, 7], [])).toEqual([5, 6, 7]);
    // expect(solution([2, 4, 6], [1, 3, 7])).toEqual([1, 2, 3, 4, 6, 7]);
    // expect(solution([2, 4, 6, 8], [1, 7])).toEqual([1, 2, 4, 6, 7, 8]);
    // expect(solution([1, 7], [2, 4, 6, 8])).toEqual([1, 2, 4, 6, 7, 8]);
    // expect(solution([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19])).toEqual([
    //   1,
    //   3,
    //   4,
    //   5,
    //   6,
    //   8,
    //   10,
    //   11,
    //   12,
    //   14,
    //   15,
    //   19,
    // ]);
  });
});
