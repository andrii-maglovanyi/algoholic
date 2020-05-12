// @ts-nocheck
import { curryTwo } from "./curry";
import { checkType, Tuple } from "../tuples/tuple";

describe("Curry", () => {
  test("Should curry function with two arguments", () => {
    const name = curryTwo(function (first: string, last: string) {
      const StringPair = Tuple(String, String);
      return new StringPair(first, last);
    });

    expect(name("Stephen")("Hawking").values()).toEqual(["Stephen", "Hawking"]);
    expect(() => name("Stephen")(true)).toThrow(TypeError);

    expect(checkType(String)("Haskell")).toBe("Haskell");
    expect(checkType(Number)(3)).toBe(3);
    expect(checkType(Date)(new Date())).toEqual(new Date());
    expect(checkType(Object)({})).toEqual({});
    expect(() => checkType(String)(42)).toThrow(TypeError);
  });
});
