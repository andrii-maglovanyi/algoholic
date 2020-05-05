import _ from "lodash";
import R from "ramda";
import { from } from "rxjs";
import { map } from "rxjs/operators";

import { map as customMap } from "./map";

const scientists = [
  {
    fullName: "John von Neumann",
    address: "Hungary",
    birthYear: "1903",
  },
  {
    fullName: "Alan Turing",
    address: "United Kingdom",
    birthYear: "1912",
  },
  {
    fullName: "Tim Berners-Lee",
    address: "United Kingdom",
    birthYear: "1955",
  },
];

let result = ["John von Neumann", "Alan Turing", "Tim Berners-Lee"];

const predicateFunction = (s) =>
  s !== null && s !== undefined ? s.fullName : "";

describe("Map", () => {
  test("Custom implementation", () => {
    const fullNames = customMap(scientists, predicateFunction);
    expect(fullNames).toEqual(result);
  });

  test("_.map", () => {
    const fullNames = _.map(scientists, predicateFunction);
    expect(fullNames).toEqual(result);

    // Lodash 'reverse' mutates original array
    const reversedFullNames = _([...scientists])
      .reverse()
      .map(predicateFunction)
      .value();

    expect(reversedFullNames).toEqual([...result].reverse());
  });

  test("R.map", () => {
    const fullNames = R.map(predicateFunction, scientists);
    expect(fullNames).toEqual(result);

    const reversedFullNames = R.map(predicateFunction, R.reverse(scientists));

    expect(reversedFullNames).toEqual([...result].reverse());
  });

  test("rxjs.map", (done) => {
    let index = 0;
    from(scientists)
      .pipe(map(predicateFunction))
      .subscribe({
        next: (fullName) => {
          expect(fullName).toBe(result[index++]);
        },
        complete: () => done(),
      });
  });
});
