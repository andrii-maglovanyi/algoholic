// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./sum-of-numbers";

describe("Sum of Numbers", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 4, 45, 6, 10, -8], 16)).toEqual([6, 10]);
    expect(solution([0, -1, 2, -3, 1], -2)).toEqual([-3, 1]);
    expect(solution([1, -2, 1, 0, 5], 0)).toBe(-1);
    expect(solution([1, 2, 3, 9], 8)).toBe(-1);
    expect(solution([1, 2, 4, 4], 8)).toEqual([4, 4]);
  });
});
