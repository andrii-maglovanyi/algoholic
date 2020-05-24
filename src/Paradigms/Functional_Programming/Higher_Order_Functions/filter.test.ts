// @ts-nocheck

import _ from "lodash";
import R from "ramda";
import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

import { filter as customFilter } from "./filter";

import { scientists } from "../scientists.json";

const result = [
  "Haskell Brooks Curry",
  "John von Neumann",
  "Edsger W. Dijkstra",
];

const notFromUK = (scientist) => scientist.address.country !== "United Kingdom";

describe("Filter", () => {
  test("Custom implementation", () => {
    const filteredScientists = customFilter(scientists, notFromUK);
    expect(filteredScientists.length).toBe(3);
  });

  test("_.filter", () => {
    const filteredScientists = _.filter(scientists, notFromUK);
    expect(filteredScientists.length).toBe(3);

    const filteredScientistNames = _(scientists)
      .filter(notFromUK)
      .map((s) => s.fullName)
      .value();

    expect(filteredScientistNames).toEqual(result);
  });

  test("R.filter", () => {
    const filteredScientists = R.filter(notFromUK, scientists);
    expect(filteredScientists.length).toBe(3);

    const filteredScientistNames = R.map(
      R.prop("fullName"),
      R.filter(notFromUK, scientists)
    );
    expect(filteredScientistNames).toEqual(result);
  });

  test("rxjs.filter", (done) => {
    let index = 0;
    from(scientists)
      .pipe(filter(notFromUK))
      .pipe(map(R.prop("fullName")))
      .subscribe({
        next: (fullName) => {
          expect(fullName).toBe(result[index++]);
        },
        complete: done,
      });
  });
});
