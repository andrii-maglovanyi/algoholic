export class CatalogItem {
  constructor(private name: string, private price: number) {}

  get total(): number {
    return this.price;
  }

  print(): string {
    return `${this.name} $${this.price}`;
  }
}

export class CatalogGroup {
  constructor(
    private name: string,
    private composites: (CatalogItem | CatalogGroup)[]
  ) {}

  get total(): number {
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print(): string {
    return `${this.name.toUpperCase()}\n${this.composites
      .map((item) => item.print())
      .join(" ")}`;
  }
}
