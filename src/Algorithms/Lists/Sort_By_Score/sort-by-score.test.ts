// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./sort-by-score";

describe("Sort By Score", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([])).toEqual([]);
    expect(solution([55])).toEqual([55]);
    expect(solution([30, 60])).toEqual([60, 30]);
    expect(solution([37, 89, 41, 65, 91, 53])).toEqual([
      91,
      89,
      65,
      53,
      41,
      37,
    ]);
    expect(solution([20, 10, 30, 30, 10, 20])).toEqual([
      30,
      30,
      20,
      20,
      10,
      10,
    ]);
  });
});
