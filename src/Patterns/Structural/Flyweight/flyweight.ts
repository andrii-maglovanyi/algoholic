class Flyweight {
  constructor(
    public make: string,
    public model: string,
    public color: string
  ) {}
}

export class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(make: string, model: string, color: string) {
    const key = `${make}_${model}`;
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(make, model, color);
    }

    return this.flyweights[key];
  }

  public countFlyweights() {
    let count = 0;
    for (const i in this.flyweights) {
      count++;
    }

    return count;
  }
}
