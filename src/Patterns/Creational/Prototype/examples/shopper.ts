export class Shopper {
  constructor(
    private _name = "unnamed person",
    private _shoppingList: string[] = []
  ) {}

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList;
  }

  addItemToList(item: string) {
    this._shoppingList.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}
