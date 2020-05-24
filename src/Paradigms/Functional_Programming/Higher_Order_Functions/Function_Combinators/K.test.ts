// @ts-nocheck

import _ from "lodash";
import R from "ramda";
import { from } from "rxjs";
import { tap } from "rxjs/operators";

import { K, K_withSideEffect } from "./K";

describe("K (constant)", () => {
  test("Custom implementation", () => {
    const mock = jest.fn();

    expect(K("Tea")("Coffe")).toBe("Tea");
    expect(K_withSideEffect("Tea", mock)).toBe("Tea");
    expect(mock).toHaveBeenNthCalledWith(1, "Tea");
  });

  test("_.tap", () => {
    const mock = jest.fn();

    expect(_.tap("Tea", mock)).toEqual("Tea");
    expect(mock).toHaveBeenNthCalledWith(1, "Tea");
  });

  test("R.always && R.tap", () => {
    const mock = jest.fn();

    expect(R.always("Tea")("Coffee")).toBe("Tea");
    expect(R.tap(mock, "Tea")).toBe("Tea");
    expect(mock).toHaveBeenNthCalledWith(1, "Tea");
  });

  test("rxjs.tap", (done) => {
    const mock = jest.fn();

    from(["Tea"])
      .pipe(tap(mock))
      .subscribe({
        next: (value) => {
          expect(value).toBe("Tea");
        },
        complete: done,
      });

    expect(mock).toHaveBeenNthCalledWith(1, "Tea");
  });
});
