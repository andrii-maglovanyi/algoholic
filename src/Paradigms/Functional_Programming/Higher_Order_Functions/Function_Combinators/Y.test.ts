// @ts-nocheck

import { Y } from "./Y";

describe("Y (Y-combinator)", () => {
  test("Custom implementation (factorial)", () => {
    const fn = (rec) => (n) => (n < 2 ? 1 : n * rec(n - 1));
    const value = 5;

    expect(Y(fn)(value)).toBe(120);
  });
});
