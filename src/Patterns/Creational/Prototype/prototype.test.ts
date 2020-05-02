import { CustomerPrototype } from "./prototype";

describe("Prototype", () => {
  test("Should create a customer prototype", () => {
    const customer = new CustomerPrototype(
      "John",
      "Doe",
      new Date("10-05-1975")
    );

    const clonedCustomer = customer.clone();

    expect(clonedCustomer.firstName).toBe(customer.firstName);
    expect(clonedCustomer.lastName).toBe(customer.lastName);
    expect(clonedCustomer.birthDate !== customer.birthDate).toBeTruthy();
    expect(clonedCustomer.birthDate).toEqual(customer.birthDate);
  });
});
