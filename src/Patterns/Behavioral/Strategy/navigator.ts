interface Strategy {
  navigate(cities: string[]): string;
}

export class Navigator {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public navigate(cities: string[]) {
    return this.strategy.navigate(cities);
  }
}

export class CarNavigation implements Strategy {
  public navigate(cities: string[]) {
    return `Drive a car through ${cities.join(" and ")}`;
  }
}

export class BikeNavigation implements Strategy {
  public navigate(cities: string[]) {
    return `Cycle through ${cities.join(" and ")}`;
  }
}
