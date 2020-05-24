// @ts-nocheck

import { Tuple } from "./tuple";

describe("Tuple", () => {
  const Status = Tuple(Boolean, String);
  const StringPair = Tuple(String, String);

  test("Should create tuples", () => {
    expect(new Status(true, "Success!").values()).toEqual([true, "Success!"]);
    expect(new StringPair("Alan", "Kay").values()).toEqual(["Alan", "Kay"]);
  });

  test("Should throw", () => {
    const status = new Status(true, "Success!");
    expect(() => (status._1 = false)).toThrow(TypeError);
    expect(() => new StringPair("J", "Alan", "Kay")).toThrow(TypeError);
  });
});
