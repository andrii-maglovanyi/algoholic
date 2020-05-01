export interface Command {
  execute(): void;
  undo(): void;
}

type Order = {
  orderId: string;
  trade: string;
};

abstract class OrderCommand implements Command {
  protected orderId?: string;

  constructor(
    protected stock: StockTrade,
    protected name: string,
    protected amount: number
  ) {}

  public execute() {}

  public undo() {
    if (this.orderId) {
      this.stock.cancelOrder(this.orderId);
    }
  }
}

export class BuyStockOrder extends OrderCommand {
  public execute() {
    this.orderId = this.stock.buy(this.name, this.amount);
  }
}

export class SellStockOrder extends OrderCommand {
  public execute() {
    this.orderId = this.stock.sell(this.name, this.amount);
  }
}

// The Receiver knows how to handle the commands
export class StockTrade {
  public trades: Order[] = [];

  public buy(name: string, amount: number) {
    const orderId = "001";
    const trade = `Buying ${name} at ${amount}`;
    this.trades.push({ orderId, trade });
    return orderId;
  }

  public sell(name: string, amount: number) {
    const orderId = "002";
    const trade = `Selling ${name} at ${amount}`;
    this.trades.push({ orderId, trade });
    return orderId;
  }

  public cancelOrder(orderId: string) {
    this.trades = this.trades.filter((trade) => trade.orderId !== orderId);
  }
}

// The Invoker asks for the command to be executed
export class Agent {
  constructor(
    private orders: Command[] = [],
    private undoOrders: Command[] = []
  ) {}

  public placeOrder(order: Command) {
    this.orders.push(order);
  }

  public removeOrder(order: Command) {
    this.undoOrders.push(order);
  }

  public onMarketOpen() {
    this.orders.forEach((order) => order.execute());
  }

  public onMarketClose() {
    this.undoOrders.forEach((order) => order.undo());
  }
}
