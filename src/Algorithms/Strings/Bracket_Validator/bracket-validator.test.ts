// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./bracket-validator";

describe("Bracket validator", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("()")).toBeTruthy();
    expect(solution("([]{[]})[]{{}()}")).toBeTruthy();
    expect(solution("([][]}")).toBeFalsy();
    expect(solution("[[]()")).toBeFalsy();
    expect(solution("[[]]())")).toBeFalsy();
    expect(solution("")).toBeTruthy();
  });
});
