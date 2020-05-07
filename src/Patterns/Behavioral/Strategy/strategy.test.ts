import { Navigator, BikeNavigation, CarNavigation } from "./strategy";

describe("Strategy Pattern", () => {
  test("Should pick navigation strategy", () => {
    const navigator = new Navigator(new BikeNavigation());

    expect(navigator.navigate(["London", "Cambridge"])).toBe(
      "Cycle through London and Cambridge"
    );

    navigator.setStrategy(new CarNavigation());

    expect(navigator.navigate(["Amsterdam", "Haarlem"])).toBe(
      "Drive a car through Amsterdam and Haarlem"
    );
  });
});
