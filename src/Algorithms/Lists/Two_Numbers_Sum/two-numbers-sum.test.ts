// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./two-numbers-sum";

describe("Two numbers sum", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 4, 45, 6, 10, -8], 16)).toEqual([6, 10]);
    expect(solution([0, -1, 2, -3, 1], -2)).toEqual([-3, 1]);
    expect(solution([1, -2, 1, 0, 5], 0)).toBe(-1);
    expect(solution([1, 2, 3, 9], 8)).toBe(-1);
    expect(solution([1, 2, 4, 4], 8)).toEqual([4, 4]);
    expect(solution([2, 4], 1)).toBe(-1);
    expect(solution([2, 4], 6)).toEqual([2, 4]);
    expect(solution([3, 8], 6)).toBe(-1);
    expect(solution([3, 8, 3], 6)).toEqual([3, 3]);
    expect(solution([1, 2, 3, 4, 5, 6], 7)).toBeTruthy();
    expect(solution([4, 3, 2], 5)).toBeTruthy();
    expect(solution([6], 6)).toBe(-1);
    expect(solution([], 2)).toBe(-1);
  });
});
