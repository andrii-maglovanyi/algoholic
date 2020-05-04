export class Target {
  public fixedPower(voltage: number) {
    return voltage * 4;
  }
}

export class Adaptee {
  public dynamicPower(voltage: number, current: number): number {
    return voltage * current;
  }
}

export class Adapter extends Target {
  constructor(private adaptee: Adaptee) {
    super();
  }

  public fixedPower(voltage: number) {
    return this.adaptee.dynamicPower(voltage, 4);
  }
}
