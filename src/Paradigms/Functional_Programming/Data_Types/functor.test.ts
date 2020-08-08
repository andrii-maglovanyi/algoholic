// @ts-nocheck

import R from "ramda";
import Wrapper from "./functor";

describe("Functor", () => {
  test("Identity function should return value via map", () => {
    const wrappedValue = new Wrapper("Functional type");
    expect(wrappedValue.map(R.identity)).toBe("Functional type");
  });

  test("Should create a new wrapped value immutably", () => {
    const plus = R.curry((a, b) => a + b);
    const plusThree = plus(3);
    const plustTen = plus(10);

    const wrappedTwo = new Wrapper(2);
    expect(wrappedTwo.fmap(plusThree).map(R.identity)).toBe(5);
    expect(wrappedTwo.fmap(plusThree).fmap(plustTen).map(R.identity)).toBe(15);
  });
});
