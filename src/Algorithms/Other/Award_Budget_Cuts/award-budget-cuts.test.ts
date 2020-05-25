//@ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./award-budget-cuts";

describe("Award Budget Cuts", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([2, 4], 3)).toBe(1.5);
    expect(solution([2, 4, 6], 3)).toBe(1);
    expect(solution([2, 100, 50, 120, 167], 400)).toBe(128);
    expect(solution([2, 100, 50, 120, 1000], 190)).toBe(47);
    expect(solution([21, 100, 50, 120, 130, 110], 140)).toBe(23.8);
    expect(solution([210, 200, 150, 193, 130, 110, 209, 342, 117], 1530)).toBe(
      211
    );
  });
});
