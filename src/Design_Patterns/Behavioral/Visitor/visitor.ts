export class RegularItem {
  constructor(public price: number) {}

  public accept(visitor: ItemsVisitor): void {
    visitor.visitRegular(this);
  }
}

export class GiftItem {
  constructor(
    public minimalPriceForGift: number,
    public originalPrice: number
  ) {}

  public accept(visitor: ItemsVisitor): void {
    visitor.visitGift(this);
  }
}

export class DiscountItem {
  constructor(public originalPrice: number, public discount: number) {}

  public accept(visitor: ItemsVisitor) {
    visitor.visitDiscount(this);
  }
}

type Item = RegularItem | GiftItem | DiscountItem;

interface ItemsVisitor {
  visitRegular(item: RegularItem): void;
  visitGift(item: GiftItem): void;
  visitDiscount(item: DiscountItem): void;
}

export class TotalPriceVisitor implements ItemsVisitor {
  public price: number = 0;

  public calculatePrice(items: Item[]) {
    items.forEach((item) => item.accept(this));
  }

  public visitRegular(item: RegularItem): void {
    this.price += item.price;
  }
  public visitGift(item: GiftItem): void {}
  public visitDiscount(item: DiscountItem): void {
    this.price += item.originalPrice - item.discount;
  }
}

export class DiscountVisitor implements ItemsVisitor {
  private price: number = 0;
  public discount: number = 0;

  constructor(private totalPriceVisitor: TotalPriceVisitor) {}

  public calculateDiscount(items: Item[]) {
    this.totalPriceVisitor.calculatePrice(items);
    this.price = this.totalPriceVisitor.price;

    items.forEach((item) => item.accept(this));
  }

  public visitRegular(item: RegularItem): void {}
  public visitGift(item: GiftItem): void {
    if (this.price >= item.minimalPriceForGift) {
      this.discount += item.originalPrice;
    }
  }
  public visitDiscount(item: DiscountItem): void {
    this.discount += item.discount;
  }
}
