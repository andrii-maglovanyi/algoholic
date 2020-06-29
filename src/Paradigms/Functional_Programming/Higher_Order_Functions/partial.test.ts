// @ts-nocheck

import _ from "lodash";
import R from "ramda";
import { partial } from "./partial";

const greet = (greeting, title, name) => `${greeting}, ${title} ${name}`;

describe("Partial", () => {
  test("Custom implementation", () => {
    const sayHelloTo = partial(greet, "Hello", "Herr");
    expect(sayHelloTo("Dijkstra")).toBe("Hello, Herr Dijkstra");
  });

  test("_.partial", () => {
    const sayHelloTo = _.partial(greet, "Hello", "Mr.");

    expect(sayHelloTo("Turing")).toBe("Hello, Mr. Turing");
  });

  test("R.partial", () => {
    const sayHelloTo = R.partial(greet, ["Hello", "Mr."]);

    expect(sayHelloTo("Neumann")).toBe("Hello, Mr. Neumann");
  });
});
