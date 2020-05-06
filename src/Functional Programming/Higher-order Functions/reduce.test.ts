import _ from "lodash";
import R from "ramda";
import { from } from "rxjs";
import { map, reduce } from "rxjs/operators";

import { reduce as customReduce } from "./reduce";

import { scientists } from "./scientists.json";

const result = {
  Hungary: 1,
  Netherlands: 1,
  "United Kingdom": 2,
  "United States": 1,
};

const iteratorFunction = (stat, scientist) => {
  const country = scientist.address.country;
  stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
  return stat;
};

const getCountry = (scientist) => scientist.address.country;
const gatherStats = (stat, prop) => {
  stat[prop] = _.isUndefined(stat[prop]) ? 1 : stat[prop] + 1;

  return stat;
};

// Ramda Lens
const countryPath = ["address", "country"];
const countryLens = R.lens(R.path(countryPath), R.assocPath(countryPath));

describe("Reduce", () => {
  test("Custom implementation", () => {
    const stat = customReduce(scientists, iteratorFunction, {});
    expect(stat).toEqual(result);
  });

  test("_.reduce", () => {
    const stat = _(scientists).reduce(iteratorFunction, {});
    expect(stat).toEqual(result);

    // WIth Map-Reduce combination
    const statMapReduce = _(scientists).map(getCountry).reduce(gatherStats, {});
    expect(statMapReduce).toEqual(result);

    // With Ramda Lens
    const statLens = _(scientists)
      .map(R.view(countryLens))
      .reduce(gatherStats, {});
    expect(statLens).toEqual(result);
  });

  test("R.reduce", () => {
    const stat = R.reduce(iteratorFunction, {}, scientists);
    expect(stat).toEqual(result);

    // WIth Map-Reduce combination
    const statMapReduce = R.reduce(
      gatherStats,
      {},
      R.map(getCountry, scientists)
    );
    expect(statMapReduce).toEqual(result);

    // With Lens
    R.map(R.view(countryLens, scientists)); //?
    const statLens = R.reduce(
      gatherStats,
      {},
      R.map(R.view(countryLens), scientists)
    );

    expect(statLens).toEqual(result);
  });

  test("rxjs.reduce", (done) => {
    from(scientists)
      .pipe(reduce(iteratorFunction, {}))
      .subscribe({
        next: (stat) => {
          expect(stat).toEqual(result);
        },
        complete: done,
      });

    // WIth Map-Reduce combination
    from(scientists)
      .pipe(map(getCountry))
      .pipe(reduce(gatherStats, {}))
      .subscribe({
        next: (stat) => {
          expect(stat).toEqual(result);
        },
        complete: done,
      });

    // With Ramda Lens
    from(scientists)
      .pipe(map(R.view(countryLens)))
      .pipe(reduce(gatherStats, {}))
      .subscribe({
        next: (stat) => {
          expect(stat).toEqual(result);
        },
        complete: done,
      });
  });
});
