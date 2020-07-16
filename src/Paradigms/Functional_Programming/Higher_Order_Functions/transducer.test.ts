// @ts-nocheck

import R from "ramda";

import {
  mapReducer,
  filterReducer,
  mapping,
  filtering,
  transduce,
} from "./transducer";

const autobots = [
  "Optimus Prime",
  "Bumblebee",
  "Ironhide",
  "Sunstreaker",
  "Ratchet",
];

const transformed = ["EMIRP SUMITPO", "EDIHNORI", "REKAERTSNUS", "TEHCTAR"];

const regEx = (x) => /r/i.test(x);

describe("Transducer", () => {
  test("Custom implementation", () => {
    const transform = autobots
      .reduce(filterReducer(regEx), [])
      .reduce(mapReducer(R.toUpper), [])
      .reduce(mapReducer(R.reverse), []);
    expect(transform).toEqual(transformed);

    const transformTwo = autobots
      .reduce(
        filtering(regEx)((acc, val) => acc.concat(val)),
        []
      )
      .reduce(
        mapping(R.toUpper)((acc, val) => acc.concat(val)),
        []
      )
      .reduce(
        mapping(R.reverse)((acc, val) => acc.concat(val)),
        []
      );

    expect(transformTwo).toEqual(transformed);

    const transformThree = autobots.reduce(
      filtering(regEx)(
        mapping(R.toUpper)(mapping(R.reverse)((acc, val) => acc.concat(val)))
      ),
      []
    );

    expect(transformThree).toEqual(transformed);

    const getNamesWithRAndTransform = R.compose(
      filtering(regEx),
      mapping(R.toUpper),
      mapping(R.reverse)
    );

    const transformFour = autobots.reduce(
      getNamesWithRAndTransform((acc, val) => acc.concat(val)),
      []
    );

    expect(transformFour).toEqual(transformed);

    const transformFive = transduce(
      getNamesWithRAndTransform,
      (acc, val) => acc.concat(val),
      [],
      autobots
    );

    expect(transformFive).toEqual(transformed);

    const addOneAndFilter = R.compose(
      mapping((x) => x + 1),
      filtering((x) => x % 2 === 0)
    );

    expect(
      transduce(addOneAndFilter, (sum, val) => sum + val, 0, [0, 1, 2, 3, 4, 5])
    ).toBe(12);
  });

  test("R.transduce", () => {
    const transform = R.compose(
      R.filter(regEx),
      R.map(R.toUpper),
      R.map(R.reverse)
    );

    expect(transform(autobots)).toEqual(transformed);
    expect(R.transduce(transform, R.flip(R.append), [], autobots)).toEqual(
      transformed
    );
  });
});
