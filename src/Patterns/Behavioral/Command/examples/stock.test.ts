import { Agent, BuyStockOrder, SellStockOrder, StockTrade } from "./stock";

describe("Command Pattern", () => {
  test("Should place a stock order", () => {
    const agent = new Agent();
    const stock = new StockTrade();

    const buyTSLA = new BuyStockOrder(stock, "TSLA", 900);
    const sellAMZN = new SellStockOrder(stock, "AMZN", 500);

    agent.placeOrder(buyTSLA);
    agent.placeOrder(sellAMZN);
    agent.removeOrder(sellAMZN);

    agent.onMarketOpen();

    expect(stock.trades).toEqual([
      { orderId: "001", trade: "Buying TSLA at 900" },
      { orderId: "002", trade: "Selling AMZN at 500" },
    ]);

    agent.onMarketClose();
    expect(stock.trades).toEqual([
      { orderId: "001", trade: "Buying TSLA at 900" },
    ]);
  });
});
