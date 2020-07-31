// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./duplicate-number";

describe("Find Duplicate Number", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([3, 1, 3, 4, 2])).toBe(3);
    expect(solution([1, 3, 4, 2, 2])).toBe(2);
    expect(solution([1, 4, 6, 2, 6, 3, 5])).toBe(6);
    expect(solution([5, 7, 6, 8, 1, 3, 8, 4, 2])).toBe(8);
    expect(solution([1, 3, 5, 7, 9, 2, 4, 6, 8])).toBeFalsy();
  });
});
