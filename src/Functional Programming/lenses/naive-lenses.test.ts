import { lensProp, over, set, view } from "./naive-lenses";

type Store = {
  age: number;
  name: string;
};

// Store object
const store: Store = {
  age: 34,
  name: "Andrii",
};

const nameLens = lensProp<Store, "name", string>("name");
const ageLens = lensProp<Store, "age", number>("age");

describe("Naive Lenses", () => {
  test("Should destructure 'name' and 'age' props from the lens using the view() function", () => {
    const name = view(nameLens, store);
    const age = view(ageLens, store);

    expect(name).toBe("Andrii");
    expect(age).toBe(34);
  });

  test("Should set a value into the Store using lenses", () => {
    let newStore = set(nameLens, "Mark", store);

    expect(newStore).toEqual({ age: 34, name: "Mark" });

    newStore = set(ageLens, 2, newStore);

    expect(newStore).toEqual({ age: 2, name: "Mark" });
    expect(store).toEqual({ age: 34, name: "Andrii" });
  });

  test("Should view the newly set value and preserve the old state", () => {
    let newStore = set(nameLens, "Mark", store);

    expect(view(nameLens, newStore)).toBe("Mark");
    expect(view(nameLens, store)).toBe("Andrii");
  });

  test("Should apply a given function to the focused value, over = (lens, f: a => a, store) => store", () => {
    const uppercase = (val: string) => val.toUpperCase();

    expect(over(nameLens, uppercase, store)).toEqual({
      age: 34,
      name: "ANDRII",
    });

    // if you map the identity function over a lens the store is unchanged.
    expect(store).toEqual({ age: 34, name: "Andrii" });
  });

  describe("Test lens laws", () => {
    // If you set a value into the store, and immediately view the value through the lens,
    // you get the value that was set.
    test("Should view(lens, set(lens, value, store)) = value", () => {
      const name = view(nameLens, set(nameLens, "Mark", store));
      expect(name).toBe("Mark");
    });

    // If you set a lens value to `a` and then immediately set the lens value to `b`,
    // it's the same as if you'd just set the value to `b`.
    test("set(lens, b, set(lens, a, store)) = set(lens, b, store)", () => {
      const name = set(nameLens, "Mark", set(nameLens, "Ira", store));
      expect(set(nameLens, "Mark", store)).toEqual(name);
    });

    // If you get the lens value from the store, and then immediately set that value
    // back into the store, the value is unchanged.
    test("set(lens, view(lens, store), store) = store", () => {
      const newStore = set(ageLens, view(ageLens, store) as number, store);
      expect(newStore).toEqual(store);
    });
  });
});
