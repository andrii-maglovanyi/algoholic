import { Adaptee, Adapter, Target } from "./adapter";

describe("Adapter", () => {
  test("Should convert electric power", () => {
    const target = new Target();
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);

    expect(target.fixedPower(5)).toEqual(adapter.fixedPower(5));
  });
});
