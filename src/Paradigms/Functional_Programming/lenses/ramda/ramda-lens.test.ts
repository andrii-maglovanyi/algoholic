import { lensPath, lensProp, set, view } from "ramda";

const person = {
  address: {
    zip: [90210, 1234],
  },
  name: "Andrii",
};

describe("Ramda Lens", () => {
  test("Should read contents of a property", () => {
    const nameProp = lensProp<typeof person>("name");
    expect(view(nameProp, person)).toBe("Andrii");
  });

  test("Should read zip code", () => {
    const zipProp = lensPath(["address", "zip", 1]);
    expect(view(zipProp, person)).toBe(1234);
  });

  test("Should create a new person", () => {
    const nameLens = lensProp<typeof person>("name");
    const newPerson = set(nameLens, "Mark", person);

    expect(person).toEqual({
      address: {
        zip: [90210, 1234],
      },
      name: "Andrii",
    });

    expect(newPerson).toEqual({
      address: {
        zip: [90210, 1234],
      },
      name: "Mark",
    });
  });
});
