import { CatalogItem, CatalogGroup } from "./catalog";

describe("Catalog", () => {
  test("Should print the full catalog", () => {
    const boots = new CatalogItem("Leather Boots", 79.99);
    const sneakers = new CatalogItem("Sneakers", 39.99);
    const flipFlops = new CatalogItem("California work boots", 19.99);

    const groupShoes = new CatalogGroup("Shoes and such", [
      boots,
      sneakers,
      flipFlops,
    ]);

    const milkshake = new CatalogItem("Milkshake", 5.99);
    const frenchFries = new CatalogItem("French Fries", 3.99);

    const groupFood = new CatalogGroup("Food for while you try on clothes", [
      milkshake,
      frenchFries,
    ]);

    const keyChain = new CatalogItem("Key chain", 0.99);

    const catalog = new CatalogGroup("Clothes and Food", [
      keyChain,
      groupFood,
      groupShoes,
    ]);

    expect(catalog.total).toBe(150.94);

    expect(catalog.print()).toBe(
      `CLOTHES AND FOOD
Key chain $0.99 FOOD FOR WHILE YOU TRY ON CLOTHES
Milkshake $5.99 French Fries $3.99 SHOES AND SUCH
Leather Boots $79.99 Sneakers $39.99 California work boots $19.99`
    );
  });
});
