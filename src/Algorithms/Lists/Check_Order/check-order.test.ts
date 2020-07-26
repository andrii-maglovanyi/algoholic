// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./check-order";

describe("Check Order", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])).toBeTruthy();
    expect(solution([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])).toBeFalsy();
    expect(solution([], [2, 3, 6], [2, 3, 6])).toBeTruthy();
    expect(solution([1, 5], [2, 3, 6], [1, 6, 3, 5])).toBeFalsy();
    expect(solution([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])).toBeFalsy();
    expect(solution([1, 9], [7, 8], [1, 7, 8])).toBeFalsy();
    expect(solution([55, 9], [7, 8], [1, 7, 8, 9])).toBeFalsy();
    expect(
      solution([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18])
    ).toBeTruthy();
  });
});
