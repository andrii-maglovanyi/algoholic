import { createPerson } from "./factory-function";

test("Should speak person's name", () => {
  const person = createPerson({
    firstName: "John",
    lastName: "Smith"
  });

  expect(person.speak()).toBe("My name is John Smith");
})
