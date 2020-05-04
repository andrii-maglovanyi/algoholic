import { PizzaBuilder, DoughType, Topping } from "./builder";

it("Shoud build a pizza", () => {
  const pizza = new PizzaBuilder()
    .setDoughType(DoughType.CHICAGO_DEEP_DISH)
    .setIsThin(true)
    .addTopping(Topping.BACON)
    .addTopping(Topping.BACON)
    .addTopping(Topping.MUSHROOM)
    .addTopping(Topping.CHEESE)
    .build();

  expect(pizza).toEqual({
    doughType: "chicago deep dish",
    numberOfSlices: 8,
    isThin: true,
    toppings: ["bacon", "bacon", "mushroom", "cheese"],
  });
});
