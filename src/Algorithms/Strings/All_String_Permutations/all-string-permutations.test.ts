// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./all-string-permutations";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("")).toEqual([""]);
    expect(solution("a")).toEqual(["a"]);
    expect(solution("ab")).toEqual(["ab", "ba"]);
    expect(solution("abc")).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });
});
