// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./reverse-words";

describe("Reverse words", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution("".split(""))).toBe("");
    expect(solution("vault".split(""))).toBe("vault");
    expect(solution("word one".split(""))).toBe("one word");
    expect(solution("cake pound steal".split(""))).toBe("steal pound cake");
    expect(solution("rat the ate cat the".split(""))).toBe(
      "the cat ate the rat"
    );
    expect(solution("yummy is cake bundt chocolate".split(""))).toBe(
      "chocolate bundt cake is yummy"
    );
  });
});
