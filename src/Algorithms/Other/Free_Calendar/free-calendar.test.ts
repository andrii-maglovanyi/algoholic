//@ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./free-calendar";

describe("Free Calendar", () => {
  TestSolutions(solutions, (solution) => {
    expect(
      solution([
        { startTime: 1, endTime: 3 },
        { startTime: 2, endTime: 4 },
      ])
    ).toEqual([{ startTime: 1, endTime: 4 }]);

    expect(
      solution([
        { startTime: 5, endTime: 6 },
        { startTime: 6, endTime: 8 },
      ])
    ).toEqual([{ startTime: 5, endTime: 8 }]);
    expect(
      solution([
        { startTime: 1, endTime: 8 },
        { startTime: 2, endTime: 5 },
      ])
    ).toEqual([{ startTime: 1, endTime: 8 }]);
    expect(
      solution([
        { startTime: 1, endTime: 3 },
        { startTime: 4, endTime: 8 },
      ])
    ).toEqual([
      { startTime: 1, endTime: 3 },
      { startTime: 4, endTime: 8 },
    ]);
    expect(
      solution([
        { startTime: 1, endTime: 4 },
        { startTime: 2, endTime: 5 },
        { startTime: 5, endTime: 8 },
      ])
    ).toEqual([{ startTime: 1, endTime: 8 }]);

    expect(
      solution([
        { startTime: 5, endTime: 8 },
        { startTime: 1, endTime: 4 },
        { startTime: 6, endTime: 8 },
      ])
    ).toEqual([
      { startTime: 1, endTime: 4 },
      { startTime: 5, endTime: 8 },
    ]);

    expect(
      solution([
        { startTime: 1, endTime: 10 },
        { startTime: 2, endTime: 5 },
        { startTime: 6, endTime: 8 },
        { startTime: 9, endTime: 10 },
        { startTime: 10, endTime: 12 },
      ])
    ).toEqual([{ startTime: 1, endTime: 12 }]);

    expect(
      solution([
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 5 },
        { startTime: 4, endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9, endTime: 10 },
      ])
    ).toEqual([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ]);
  });
});
