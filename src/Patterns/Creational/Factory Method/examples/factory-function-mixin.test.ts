import { createProgrammer, createTeacher } from "./factory-function-mixin"

it("Should create a programmer", () => {
  const programmer = createProgrammer({
    firstName: "John",
    lastName: "Smith",
    programmingLanguage: "JavaScript"
  });

  expect(programmer.speak()).toBe(`My name is John Smith`);
  expect(programmer.speakMore()).toBe(`I program in JavaScript`);
})

it("Should create a teacher", () => {
  const programmer = createTeacher({
    firstName: "Jacob",
    lastName: "Williams",
    subject: "Maths"
  });

  expect(programmer.speak()).toBe(`My name is Jacob Williams`);
  expect(programmer.speakMore()).toBe(`I teach Maths`);
})
