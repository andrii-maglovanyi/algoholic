// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./how-sum";

describe("How Sum", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution(7, [2, 3])).toEqual([3, 2, 2]);
    expect(solution(7, [5, 3, 4, 7])).toEqual([4, 3]);
    expect(solution(7, [2, 4])).toBeFalsy();
    expect(solution(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
    // expect(solution(300, [7, 14])).toBeFalsy();
  });
});
