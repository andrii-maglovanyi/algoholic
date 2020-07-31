//@ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./fibonacci";

describe("Fibonacci", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution(0)).toBe(0);
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(1);
    expect(solution(3)).toBe(2);
    expect(solution(6)).toBe(8);

    // Heavy computations below (except for Memoization and Simple Loop solution)
    // expect(solution(10)).toBe(55);
    // expect(solution(40)).toBe(102334155);
    // expect(solution(81)).toBe(37889062373143906);
  });
});
