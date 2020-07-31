// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./anagrams";

describe("Anagrams", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("hello world", "world hello")).toBe(true);
    expect(solution("silent", "listen")).toBe(true);
    expect(solution("hell world", "hello world")).toBe(false);
    expect(solution("fried", "fired")).toBe(true);
  });
});
