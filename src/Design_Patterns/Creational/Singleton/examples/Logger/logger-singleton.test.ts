import { Store } from "./store";
import { Shopper } from "./shopper";
import { logger } from "./logger";

describe("Example: Singleton logger", () => {
  test("Should log all messages in single instance", () => {
    logger.log("Starting app...");

    const alex = new Shopper("Alex", 500);
    const skiShop = new Store("Steep and Deep Supplies", [
      {
        item: "Downhill Skis",
        qty: 5,
        price: 750,
      },
      {
        item: "Knit Hat",
        qty: 20,
        price: 5,
      },
    ]);

    logger.log("Finished config...");

    expect(`${logger.count} logs total`).toBe("4 logs total");
  });
});
