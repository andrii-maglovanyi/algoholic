export enum DoughType {
  NEAPOLITAN = "neapolitan",
  CHICAGO_DEEP_DISH = "chicago deep dish",
  FOCCACIA = "foccacia",
}
export enum Topping {
  CHEESE = "cheese",
  SAUCE = "sauce",
  MUSHROOM = "mushroom",
  BACON = "bacon",
}

export interface Pizza {
  numberOfSlices: number;
  isThin: boolean;
  doughType: DoughType;
  toppings: Topping[];
}

export class PizzaBuilder {
  private numberOfSlices?: number;
  private isThin?: boolean;
  private doughType?: DoughType;
  private toppings: Topping[] = [];

  public setNumberOfSlices(numberOfSlices: number): PizzaBuilder {
    this.numberOfSlices = numberOfSlices;
    return this;
  }

  public setIsThin(isThin: boolean): PizzaBuilder {
    this.isThin = isThin;
    return this;
  }

  public setDoughType(doughType: DoughType): PizzaBuilder {
    this.doughType = doughType;
    return this;
  }

  public addTopping(topping: Topping): PizzaBuilder {
    this.toppings.push(topping);
    return this;
  }

  public build(): Pizza {
    if (typeof this.isThin === "undefined") {
      this.isThin = false;
    }
    if (typeof this.numberOfSlices === "undefined") {
      this.numberOfSlices = 8;
    }
    if (typeof this.doughType === "undefined") {
      throw new Error("Dough type must be set!");
    }
    if (this.toppings.length < 0) {
      this.toppings.push(Topping.CHEESE);
    }

    return {
      doughType: this.doughType,
      numberOfSlices: this.numberOfSlices,
      isThin: this.isThin,
      toppings: this.toppings,
    };
  }
}
