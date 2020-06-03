import { Singleton } from "./singleton";

it("Should create a Singleton object", () => {
  const singleton = Singleton.getInstance({ name: "John" });
  expect(Singleton.getInstance({ name: "Mike" })).toBe(singleton);
  expect(Singleton.getInstance({ name: "Liza" }).name).toBe("John");
});
