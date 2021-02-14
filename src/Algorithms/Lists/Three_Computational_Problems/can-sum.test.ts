// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./can-sum";

describe("Can Sum", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution(7, [2, 3])).toBeTruthy();
    expect(solution(7, [5, 3, 4, 7])).toBeTruthy();
    expect(solution(7, [2, 4])).toBeFalsy();
    expect(solution(8, [2, 3, 5])).toBeTruthy();
    // expect(solution(300, [7, 14])).toBeFalsy();
  });
});
