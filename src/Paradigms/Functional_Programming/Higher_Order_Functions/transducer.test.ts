// @ts-nocheck

import R from "ramda";

const autobots = [
  "Optimus Prime",
  "Bumblebee",
  "Ironhide",
  "Sunstreaker",
  "Ratchet",
];

const transformed = ["EMIRP SUMITPO", "EDIHNORI", "REKAERTSNUS", "TEHCTAR"];

describe("Transducer", () => {
  test("R.transduce", () => {
    const transform = R.compose(
      R.filter((x) => /r/i.test(x)),
      R.map(R.toUpper),
      R.map(R.reverse)
    );

    expect(transform(autobots)).toEqual(transformed);
    expect(R.transduce(transform, R.flip(R.append), [], autobots)).toEqual(
      transformed
    );
  });
});
