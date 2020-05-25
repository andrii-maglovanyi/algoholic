//@ts-nocheck

import { TestSolutions } from "@utils/test-solutions";

import { solutions } from "./flatten-dictionary";

describe("Flatten a dictionary", () => {
  TestSolutions(solutions, (solution) => {
    expect(
      solution({
        Key1: "1",
        Key2: {
          a: "2",
          b: "3",
          c: {
            d: "3",
            e: {
              "": "1",
            },
          },
        },
      })
    ).toEqual({
      Key1: "1",
      "Key2.a": "2",
      "Key2.b": "3",
      "Key2.c.d": "3",
      "Key2.c.e": "1",
    });

    expect(solution({ Key: { a: "2", b: "3" } })).toEqual({
      "Key.a": "2",
      "Key.b": "3",
    });

    expect(
      solution({
        Key1: "1",
        Key2: { a: "2", b: "3", c: { d: "3", e: { f: "4" } } },
      })
    ).toEqual({
      Key1: "1",
      "Key2.a": "2",
      "Key2.b": "3",
      "Key2.c.d": "3",
      "Key2.c.e.f": "4",
    });

    expect(solution({ "": { a: "1" }, b: "3" })).toEqual({
      a: "1",
      b: "3",
    });

    expect(
      solution({
        a: { b: { c: { d: { e: { f: { "": "awesome" } } } } } },
      })
    ).toEqual({ "a.b.c.d.e.f": "awesome" });

    expect(solution({ a: "1" })).toEqual({ a: "1" });
  });
});
