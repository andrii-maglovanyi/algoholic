// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./stock-prices";

describe("Max profit", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 5, 3, 2])).toEqual(4);
    expect(solution([7, 2, 8, 9])).toEqual(7);
    expect(solution([7, 2, 3, 1, 9])).toEqual(8);
    expect(solution([1, 6, 7, 9])).toEqual(8);
    expect(solution([9, 7, 4, 1])).toEqual(-2);
    expect(solution([1, 1, 1, 1])).toEqual(0);
    expect(solution([10, 7, 5, 8, 11, 9])).toEqual(6);
  });
});
