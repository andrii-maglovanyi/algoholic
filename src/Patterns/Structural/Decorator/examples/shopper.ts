export interface Inventory {
  print: () => string;
  name: string;
  price: number;
}

export class InventoryItem implements Inventory {
  constructor(public name: string, public price: number) {}

  print() {
    return `${this.name} costs ${this.price}`;
  }
}

export class GoldenInventoryItem implements Inventory {
  private item: Inventory;

  constructor(public baseItem: Inventory) {
    this.item = baseItem;
  }

  get name() {
    return `Golden ${this.item.name}`;
  }

  set name(name: string) {
    this.item.name = name;
  }

  get price() {
    return 500 + this.item.price;
  }

  set price(price: number) {
    this.item.price = price;
  }

  print() {
    return this.item.print();
  }
}

export class DiamondInventoryItem implements Inventory {
  private item: Inventory;

  constructor(public baseItem: Inventory) {
    this.item = baseItem;
  }

  get name() {
    return `Diamond ${this.item.name}`;
  }

  set name(name: string) {
    this.item.name = name;
  }

  get price() {
    return 1000 + this.item.price;
  }

  set price(price: number) {
    this.item.price = price;
  }

  print() {
    return `${this.item.name} costs a lot of money...`;
  }
}

export class Shopper {
  public items: InventoryItem[] = [];
  constructor(public name: string, public account: number = 0) {}

  purchase(item: InventoryItem) {
    if (item.price > this.account) {
      throw new Error(`Cannot afford ${item.name}`);
    } else {
      this.account -= item.price;
      this.items.push(item);
    }
  }
}
