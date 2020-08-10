// @ts-nocheck

import { TestSolutions } from "@Utils/test-solutions";

import { solutions } from "./rotation-point";

describe("Rotation Point", () => {
  TestSolutions(solutions, (solution) => {
    expect(solution(["cape", "cake"])).toBe(1);
    expect(solution(["grape", "orange", "plum", "radish", "apple"])).toBe(4);
    expect(
      solution([
        "ptolemaic",
        "retrograde",
        "supplant",
        "undulate",
        "xenoepist",
        "asymptote",
        "babka",
        "banoffee",
        "engender",
        "karpatka",
        "othellolagkage",
      ])
    ).toBe(5);
    expect(
      solution([
        "broccoli",
        "cabbage",
        "cauliflower",
        "leek",
        "radish",
        "asparagus",
        "beetroot",
        "cucumber",
        "eggplant",
      ])
    ).toBe(5);

    expect(
      solution([
        "broccoli",
        "cabbage",
        "cauliflower",
        "artichoke",
        "asparagus",
        "beetroot",
        "cucumber",
        "eggplant",
        "leek",
        "radish",
      ])
    ).toBe(3);
  });
});
