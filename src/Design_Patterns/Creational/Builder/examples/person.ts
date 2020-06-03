import { PersonBuilder } from "./person-builder";

export class Person {
  public name: string;
  public isEmployee?: boolean;
  public isManager?: boolean;
  public hours?: number;
  public money?: number;
  public shoppingList?: string[];

  constructor(builder: PersonBuilder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList || [];
  }

  toString() {
    return JSON.stringify(this);
  }
}
