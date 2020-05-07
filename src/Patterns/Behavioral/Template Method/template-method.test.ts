import {
  BeefShawarma,
  ChickenShawarma,
  VegetarianShawarma,
} from "./template-method";

describe("Template Method", () => {
  test("Beef Shawarma", () => {
    const beefShawarma = new BeefShawarma();
    beefShawarma.cook();

    expect(beefShawarma.description).toBe(
      "Add bread. Add onion and tomato. Add beef. Roll and wrap it."
    );
  });

  test("Chicken Shawarma", () => {
    const chickenShawarma = new ChickenShawarma();
    chickenShawarma.cook();

    expect(chickenShawarma.description).toBe(
      "Add bread. Add cabbage and cucumber. Add chicken. Add chilli pepper. Roll and wrap it."
    );
  });

  test("Vegetarian Shawarma", () => {
    const vegetarianShawarma = new VegetarianShawarma();
    vegetarianShawarma.cook();

    expect(vegetarianShawarma.description).toBe(
      "Add bread. Add onion, cucumber and sweet pepper. Roll and wrap it."
    );
  });
});
