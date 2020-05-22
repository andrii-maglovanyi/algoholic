import { scoutPrototype } from "./scout-prototype";

describe("Scout prototype", () => {
  test("Should create scouts from the prototype", () => {
    const alex = scoutPrototype.clone();
    alex.name = "Alex Banks";
    alex.addItemToList("Slingshot");
    expect(`${alex.name}: ${alex.shoppingList}`).toBe(
      "Alex Banks: Camping knife,Ten,Backpack,Map,Slingshot"
    );

    const eve = scoutPrototype.clone();
    eve.name = "Eve Porcello";
    eve.addItemToList("Reading light");
    expect(`${eve.name}: ${eve.shoppingList}`).toBe(
      "Eve Porcello: Camping knife,Ten,Backpack,Map,Reading light"
    );
  });
});
