// @ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./reverse-characters-list";

describe("Reverse Characters List", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([])).toEqual([]);
    expect(solution(["A"])).toEqual(["A"]);
    expect(solution(["A", "B"])).toEqual(["B", "A"]);
    expect(solution(["A", "B", "C", "D", "E"])).toEqual([
      "E",
      "D",
      "C",
      "B",
      "A",
    ]);
  });
});
