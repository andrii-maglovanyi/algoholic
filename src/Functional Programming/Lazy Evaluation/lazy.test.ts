import _ from "lodash";

import { scientists } from "../scientists.json";

export const gatherStats = (stat, prop) => {
  stat[prop] = _.isUndefined(stat[prop]) ? 1 : stat[prop] + 1;

  return stat;
};
const isValid = (scientist) => scientist.subject === "Computer Science";

describe("Lazy Evaluation", () => {
  test("with Lodash", () => {
    // Explicit chain
    const statExplicit = _.chain(scientists)
      .filter(isValid)
      .map(_.property("address.country"))
      .uniq()
      .join(", ")
      .value(); // Execute all functions

    expect(statExplicit).toBe(
      "United States, Hungary, United Kingdom, Netherlands"
    );

    // Implisit chain - no lazy evaluation
    const statImplicit = _(scientists)
      .filter(isValid)
      .map(_.property("address.country"))
      .uniq()
      .join(" and ");

    expect(statImplicit).toBe(
      "United States and Hungary and United Kingdom and Netherlands"
    );
  });
});
