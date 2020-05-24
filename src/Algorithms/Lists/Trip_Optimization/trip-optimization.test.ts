// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./trip-optimization";

describe("Trip Optimization", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 3, 6], 15)).toBe(3);
    expect(solution([1, 3, 6], 12)).toBe(2);
    expect(solution([1, 3, 6, 7, 8], 15)).toBe(2);
  });
});
