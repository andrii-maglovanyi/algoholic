import inventory from "./inventory.json";
import { Store } from "./store";

describe("Chain of Responsibility: Inventory example", () => {
  test("Should find item in the inventory", () => {
    const skiShop = new Store("Steep and Deep", inventory);
    expect(skiShop.find("ski poles")).toEqual({
      name: "ski poles",
      qty: 2,
      location: "store backroom",
      deliveryTime: "now",
    });

    expect(skiShop.find("ski hats")).toEqual({
      name: "ski hats",
      qty: 15,
      location: "store floor",
      deliveryTime: "now",
    });

    expect(skiShop.find("wax")).toEqual({
      name: "wax",
      qty: 8,
      location: "nearby store",
      deliveryTime: "1 day(s)",
    });

    expect(skiShop.find("powder skis")).toEqual({
      name: "powder skis",
      qty: 10,
      location: "warehouse",
      deliveryTime: "5 day(s)",
    });
  });
});
