// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./best-sum";

describe("Best Sum", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution(7, [5, 3, 4, 7])).toEqual([7]);
    expect(solution(7, [2, 4])).toBeFalsy();
    expect(solution(8, [2, 3, 5])).toEqual([5, 3]);
    expect(solution(8, [1, 4, 5])).toEqual([4, 4]);
    expect(solution(100, [1, 2, 5, 25])).toEqual([25, 25, 25, 25]);
  });
});
