type Person = {
  firstName: string,
  lastName: string
}

export const createPerson = ({
  firstName,
  lastName
}: Person) => ({
  firstName,
  lastName,
  speak: () => `My name is ${firstName} ${lastName}`
})
