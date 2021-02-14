//@ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./coins-denominations";

describe("Coins Denominations", () => {
  TestSolutions(solutions, (solution) => {
    // expect(solution(4, [1, 2, 3])).toEqual([
    //   [3, 1],
    //   [2, 2],
    //   [2, 1, 1],
    //   [1, 1, 1, 1],
    // ]);
    // expect(solution(4, [1, 2, 3])).toBe(4);
    // expect(solution(5, [1, 2, 3])).toEqual([
    //   [3, 2],
    //   [3, 1, 1],
    //   [2, 2, 1],
    //   [2, 1, 1, 1],
    //   [1, 1, 1, 1, 1],
    // ]);
    // expect(solution(5, [1, 2, 3])).toBe(5);
  });
});
