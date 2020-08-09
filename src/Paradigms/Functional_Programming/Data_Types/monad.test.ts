// @ts-nocheck

import R from "ramda";
import Wrapper, { Maybe } from "./monad";

describe("Monad", () => {
  test("Identity function should return value via map", () => {
    const wrappedValue = new Wrapper("Hi Monad");
    expect(wrappedValue.map(R.toUpper).toString()).toBe("Wrapper (HI MONAD)");
  });

  test("Should flatten a monadic structure", () => {
    const wrappedValue = Wrapper.of(
      Wrapper.of(Wrapper.of("Get Functional"))
    ).join();
    expect(wrappedValue.toString()).toBe("Wrapper (Get Functional)");
  });

  test("Should return Just value of Maybe monad", () => {
    const data = {
      school: {
        address: {
          country: "Germany",
        },
      },
    };

    const getCountry = (student) =>
      student
        .map(R.prop("school"))
        .map(R.prop("address"))
        .map(R.prop("country"))
        .getOrElse("Country does not exist!");

    expect(getCountry(Maybe.fromNullable())).toBe("Country does not exist!");
    expect(getCountry(Maybe.fromNullable(data))).toBe("Germany");
  });
});
