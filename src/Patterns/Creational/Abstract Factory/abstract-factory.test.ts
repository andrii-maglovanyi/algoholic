import { Type, Factory } from "./abstract-factory";

it("Should create vintage furniture", () => {
  const factory = Factory.getFactory(Type.VINTAGE);

  const sofa = factory.createSofa();
  expect(sofa.lay()).toBe("Laying on vintage sofa");
  expect(sofa.price).toBe(210);

  const table = factory.createTable();
  expect(table.put()).toBe("Putting on vintage table");
  expect(table.price).toBe(130);
});

it("Should create modern furniture", () => {
  const factory = Factory.getFactory(Type.MODERN);

  const chair = factory.createChair();
  expect(chair.sit()).toBe("Sitting on modern chair");
  expect(chair.price).toBe(100);

  const sofa = factory.createSofa();
  expect(sofa.lay()).toBe("Laying on modern sofa");
  expect(sofa.price).toBe(200);
});
