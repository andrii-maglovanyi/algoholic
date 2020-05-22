import {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem,
  Shopper,
} from "./shopper";

describe("Decorator: Shopper example", () => {
  test("Should be able to purchase items", () => {
    const mark = new Shopper("Mark", 3000);

    const walkman = new InventoryItem("Walkman", 29.99);
    const necklace = new InventoryItem("Neclace", 9.99);
    const goldNecklace = new GoldenInventoryItem(necklace);
    const diamondGoldNecklace = new DiamondInventoryItem(goldNecklace);

    const diamondWalkman = new DiamondInventoryItem(walkman);

    mark.purchase(diamondGoldNecklace);
    mark.purchase(walkman);

    expect(mark.items).toEqual([diamondGoldNecklace, walkman]);
    expect(mark.account).toEqual(1460.02);
  });
});
