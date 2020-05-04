import { FlyweightFactory } from "./flyweight";

describe("Flyweight", () => {
  const factory = new FlyweightFactory();

  const newRegistration = (
    make: string,
    model: string,
    color: string,
    plate: string,
    owner: string
  ) => ({
    car: factory.getFlyweight(make, model, color),
    plate,
    owner,
  });

  test("Should have 3 flyweights", () => {
    const carRegistrations = [
      newRegistration("BMW", "X5", "Yellow", "L-870-TT", "Mark"),
      newRegistration("Kia", "Ceed", "White", "PF-125-X", "Andrii"),
      newRegistration("Suzuki", "Vitara", "Red", "CL-233-R", "Ivan"),
      newRegistration("Kia", "Ceed", "White", "AA-567-U", "Ira"),
    ];

    expect(factory.countFlyweights()).toBe(3);
    expect(carRegistrations[1]).toEqual({
      car: {
        make: "Kia",
        model: "Ceed",
        color: "White",
      },
      plate: "PF-125-X",
      owner: "Andrii",
    });
  });
});
