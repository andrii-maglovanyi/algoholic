import { Person } from "./person";

export class PersonBuilder {
  public isEmployee?: boolean;
  public isManager?: boolean;
  public hours?: number;
  public money?: number;
  public shoppingList?: string[];

  constructor(public name: string) {}

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours: number = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours: number = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money: number) {
    this.money = money;
    return this;
  }

  withList(list: string[] = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}
