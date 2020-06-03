import { PersonBuilder } from "./person-builder";

describe("Person builder", () => {
  test("Should create persons with builder", () => {
    // Employees
    // const sue = new Person("Sue", true, true, 60);
    const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();
    expect(sue.name).toBe("Sue");
    expect(sue.isEmployee).toBe(true);
    expect(sue.isManager).toBe(true);
    expect(sue.hours).toBe(60);
    expect(sue.shoppingList).toEqual([]);
    expect(sue.money).toBe(0);

    // const bill = new Person("Bill", true, false, 20);
    const bill = new PersonBuilder("Bill")
      .makeEmployee()
      .makePartTime()
      .build();
    expect(bill.name).toBe("Bill");
    expect(bill.isEmployee).toBe(true);
    expect(bill.isManager).toBeUndefined();
    expect(bill.hours).toBe(20);
    expect(bill.shoppingList).toEqual([]);
    expect(bill.money).toBe(0);

    // const phil = new Person("Phil", true, false);
    const phil = new PersonBuilder("Phil").makeEmployee().build();
    expect(phil.name).toBe("Phil");
    expect(phil.isEmployee).toBe(true);
    expect(phil.isManager).toBeUndefined();
    expect(phil.hours).toBe(0);
    expect(phil.shoppingList).toEqual([]);
    expect(phil.money).toBe(0);

    // Shoppers
    // const charles = new Person("Charles", false, false, 0, 500, [
    //   "jeans",
    //   "sunglasses",
    // ]);
    const charles = new PersonBuilder("Charles")
      .withMoney(500)
      .withList(["jeans", "sunglasses"])
      .build();
    expect(charles.name).toBe("Charles");
    expect(charles.isEmployee).toBeUndefined();
    expect(charles.isManager).toBeUndefined();
    expect(charles.hours).toBe(0);
    expect(charles.shoppingList).toEqual(["jeans", "sunglasses"]);
    expect(charles.money).toBe(500);

    // const tabbitha = new Person("Tabbitha", false, false, 0, 1000);
    const tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();
    expect(tabbitha.name).toBe("Tabbitha");
    expect(tabbitha.isEmployee).toBeUndefined();
    expect(tabbitha.isManager).toBeUndefined();
    expect(tabbitha.hours).toBe(0);
    expect(tabbitha.shoppingList).toEqual([]);
    expect(tabbitha.money).toBe(1000);
  });
});
