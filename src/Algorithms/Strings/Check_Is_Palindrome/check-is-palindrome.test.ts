// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./check-is-palindrome";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("aabcbcd")).toBeTruthy();
    expect(solution("aabccbdd")).toBeTruthy();
    expect(solution("aabcd")).toBeFalsy();
    expect(solution("aabbcd")).toBeFalsy();
    expect(solution("")).toBeTruthy();
    expect(solution("a")).toBeTruthy();
  });
});
