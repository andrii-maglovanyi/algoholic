// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./highest-product-of-three-integers";

describe("Solution", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution([1, 2, 3, 4])).toBe(24);
    expect(solution([6, 1, 3, 5, 7, 8, 2])).toBe(336);
    expect(solution([-5, 4, 8, 2, 3])).toBe(96);
    expect(solution([-10, 1, 3, 2, -10])).toBe(300);
    expect(solution([-5, -1, -3, -2])).toBe(-6);
    expect(solution([1, 10, -5, 1, -100])).toBe(5000);
  });
});
