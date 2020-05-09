import { TeacherFactory, TEACHER_TYPE } from "./factory-method";

it("Should create Coding Teacher", () => {
  const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.CODING, {
    programmingLanguage: "JavaScript",
    name: "John",
  });

  expect(codingTeacher.programmingLanguage).toBe("JavaScript");
  expect(codingTeacher.name).toBe("John");
});

it("Should create Music Teacher", () => {
  const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.MUSIC, {
    instrument: "Guitar",
    name: "Andy",
  });

  expect(codingTeacher.instrument).toBe("Guitar");
  expect(codingTeacher.name).toBe("Andy");
});
