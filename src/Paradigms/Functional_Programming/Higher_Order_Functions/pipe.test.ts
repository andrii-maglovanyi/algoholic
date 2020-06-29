// @ts-nocheck

import _ from "lodash";
import R from "ramda";

const words = [
  "Functional",
  "Programming",
  "Curry",
  "Memoization",
  "Partial",
  "Curry",
  "Programming",
];

describe("Pipe", () => {
  test("R.pipe", () => {
    const convert = R.pipe(R.map(R.toLower), R.uniq, R.sortBy(R.identity));
    expect(convert(words)).toEqual([
      "curry",
      "functional",
      "memoization",
      "partial",
      "programming",
    ]);
  });
});
