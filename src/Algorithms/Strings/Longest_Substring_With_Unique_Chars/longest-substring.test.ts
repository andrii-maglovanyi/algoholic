//@ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./longest-substring";

describe("Longest Substring With Unique Characters", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("abc")).toBe(3);
    expect(solution("abcabcd")).toBe(4);
    expect(solution("abcabcd")).toBe(4);
    expect(solution("abababababbabababaaaabac")).toBe(3);
    expect(solution("acdbcr")).toBe(4);
    expect(solution("abcabcbb")).toBe(3);
    expect(solution("bbbbb")).toBe(1);
    expect(solution("pwwkew")).toBe(3);
    expect(solution("abcdefabcdaabcdefgaahrtts")).toBe(7);
    expect(solution("")).toBe(0);
    expect(solution("a")).toBe(1);
    expect(solution("aabcdef")).toBe(6);
    expect(solution("abcdeff")).toBe(6);
    expect(solution("codingisawesome")).toBe(7);
    expect(solution("always be coding")).toBe(9);
  });
});
