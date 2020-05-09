type Person = {
  firstName: string,
  lastName: string
}

interface Programmer extends Person {
  programmingLanguage: string
}

interface Teacher extends Person {
  subject: string
}

export const withNames = ({
  firstName,
  lastName
}: Person) => ({
  firstName,
  lastName,
  speak: () => `My name is ${firstName} ${lastName}`
})

export const createProgrammer = ({
  firstName,
  lastName,
  programmingLanguage
}: Programmer) => ({
  ...withNames({ firstName, lastName}),
  programmingLanguage,
  speakMore: () => `I program in ${programmingLanguage}`
})

export const createTeacher = ({
  firstName,
  lastName,
  subject
}: Teacher) => ({
  ...withNames({firstName, lastName}),
  subject,
  speakMore: () => `I teach ${subject}`
})
