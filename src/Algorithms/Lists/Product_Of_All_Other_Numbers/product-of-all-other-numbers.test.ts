// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./product-of-all-other-numbers";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 2])).toEqual([2, 1]);
    expect(solution([1, 7, 3, 4])).toEqual([84, 12, 28, 21]);
    expect(solution([1, 2, 3])).toEqual([6, 3, 2]);
    expect(solution([8, 2, 4, 3, 1, 5])).toEqual([
      120,
      480,
      240,
      320,
      960,
      192,
    ]);
    expect(solution([6, 2, 0, 3])).toEqual([0, 0, 36, 0]);
    expect(solution([4, 0, 9, 1, 0])).toEqual([0, 0, 0, 0, 0]);
    expect(solution([-3, 8, 4])).toEqual([32, -12, -24]);
    expect(solution([-7, -1, -4, -2])).toEqual([-8, -56, -14, -28]);
    expect(solution([1, 2, 6, 5, 9])).toEqual([540, 270, 90, 108, 60]);
  });
});
