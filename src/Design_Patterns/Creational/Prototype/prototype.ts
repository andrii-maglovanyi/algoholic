export class CustomerPrototype {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthDate: Date
  ) {}

  public clone() {
    const clone = Object.create(this);
    clone.birthDate = new Date(this.birthDate);

    return clone;
  }
}
