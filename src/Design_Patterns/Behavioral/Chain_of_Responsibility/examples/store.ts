import Inventory from "./inventory.json";

interface InventoryItem {
  name: string;
  qty: number;
}

interface SearchResult extends InventoryItem {
  location: string;
  deliveryTime: string;
}

class Storage {
  private next: Storage | undefined;

  constructor(
    public name: string,
    public inventory: InventoryItem[] = [],
    public deliveryTime: number = 0
  ) {}

  setNext(storage: Storage) {
    this.next = storage;
  }

  find(itemName: string): SearchResult | string {
    const found = this.lookInLocalInventory(itemName);

    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "now" : `${this.deliveryTime} day(s)`,
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `We do not carry ${itemName}`;
    }
  }

  private lookInLocalInventory(itemName: string) {
    const index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }
}

export class Store {
  private storage: Storage;

  constructor(public name: string, private inventory: typeof Inventory) {
    const floor = new Storage("store floor", inventory.floor);
    const backroom = new Storage("store backroom", inventory.backroom);
    const localStore = new Storage("nearby store", inventory.localStore, 1);
    const warehouse = new Storage("warehouse", inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName: string) {
    return this.storage.find(itemName);
  }
}
