// @ts-nocheck

import _ from "lodash";
import R from "ramda";
import { compose } from "./compose";
import { partial } from "./partial";

const trim = (str) => str.replace(/^\s*|\s*$/g, "");
const normalize = (str) => str.replace(/\-/g, "");
const validLength = (param, str) => str.length === param;
const checkLengthSsn = partial(validLength, 9);

const students = ["Rosser", "Kleene", "Turing", "Church"];
const grades = [80, 100, 90, 99];

describe("Compose", () => {
  test("Custom implementation", () => {
    const cleanInput = compose(normalize, trim);
    const isValidSsn = compose(checkLengthSsn, cleanInput);
    expect(cleanInput(" 444-44-4444 ")).toBe("444444444");
    expect(isValidSsn(" 444-44-4444 ")).toBeTruthy();
  });

  test("_.compose", () => {
    const cleanInput = _.flowRight([normalize, trim]);
    const isValidSsn = _.flowRight([checkLengthSsn, cleanInput]);
    expect(cleanInput(" 444-44-4444 ")).toBe("444444444");
    expect(isValidSsn(" 444-44-4444 ")).toBeTruthy();
  });

  test("R.compose", () => {
    const cleanInput = R.compose(normalize, trim);
    const isValidSsn = R.compose(checkLengthSsn, cleanInput);
    expect(cleanInput(" 444-44-4444 ")).toBe("444444444");
    expect(isValidSsn(" 444-44-4444 ")).toBeTruthy();
  });

  test("Find smartest student", () => {
    const smartestStudentRamda = R.compose(
      R.head,
      R.pluck(0),
      R.reverse,
      R.sortBy(R.prop(1)),
      R.zip
    );

    const smartestStudentLodash = _.flow([
      _.zip,
      _.partialRight(_.sortBy, _.partialRight(_.nth, 1)),
      _.reverse,
      _.head,
      _.partialRight(_.nth, 0),
    ]);

    expect(smartestStudentRamda(students, grades)).toBe("Kleene");
    expect(smartestStudentLodash(students, grades)).toBe("Kleene");
  });
});
