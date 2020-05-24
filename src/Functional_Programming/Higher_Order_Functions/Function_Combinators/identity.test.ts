// @ts-nocheck

import _ from "lodash";
import R from "ramda";
import { identity } from "rxjs";

import { identity as customIdentity } from "./identity";

describe("Identity", () => {
  const object = { name: "Mark" };

  test("Custom implementation", () => {
    expect(customIdentity(object)).toEqual(object);
  });

  test("_.identity", () => {
    expect(_.identity(object)).toEqual(object);
  });

  test("R.identity", () => {
    expect(R.identity(object)).toEqual(object);
  });

  test("rxjs.identity", () => {
    expect(identity(object)).toEqual(object);
  });
});
