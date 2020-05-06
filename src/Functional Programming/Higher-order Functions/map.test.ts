import _ from "lodash";
import R from "ramda";
import { from } from "rxjs";
import { map } from "rxjs/operators";

import { map as customMap } from "./map";

import { scientists } from "../scientists.json";

const result = [
  "Haskell Brooks Curry",
  "John von Neumann",
  "Alan Turing",
  "Edsger W. Dijkstra",
  "Stephen Hawking",
  "Tim Berners-Lee",
];

const iteratorFunction = (s) =>
  s !== null && s !== undefined ? s.fullName : "";

describe("Map", () => {
  test("Custom implementation", () => {
    const fullNames = customMap(scientists, iteratorFunction);
    expect(fullNames).toEqual(result);
  });

  test("_.map", () => {
    const fullNames = _.map(scientists, iteratorFunction);
    expect(fullNames).toEqual(result);

    // Lodash 'reverse' mutates original array
    const reversedFullNames = _([...scientists])
      .reverse()
      .map(iteratorFunction)
      .value();

    expect(reversedFullNames).toEqual([...result].reverse());
  });

  test("R.map", () => {
    const fullNames = R.map(iteratorFunction, scientists);
    expect(fullNames).toEqual(result);

    const reversedFullNames = R.map(iteratorFunction, R.reverse(scientists));

    expect(reversedFullNames).toEqual([...result].reverse());
  });

  test("rxjs.map", (done) => {
    let index = 0;
    from(scientists)
      .pipe(map(iteratorFunction))
      .subscribe({
        next: (fullName) => {
          expect(fullName).toBe(result[index++]);
        },
        complete: done,
      });
  });
});
