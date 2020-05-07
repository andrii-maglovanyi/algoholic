import {
  RegularItem,
  GiftItem,
  DiscountItem,
  TotalPriceVisitor,
  DiscountVisitor,
} from "./visitor";

const items = [
  new RegularItem(10),
  new GiftItem(11, 3),
  new DiscountItem(4, 2),
];

it("Should calculate total price", () => {
  const visitor = new TotalPriceVisitor();

  visitor.calculatePrice(items);

  expect(visitor.price).toBe(12);
});

it("Should calculate discount price", () => {
  const totalPriceVisitor = new TotalPriceVisitor();
  const visitor = new DiscountVisitor(totalPriceVisitor);

  visitor.calculateDiscount(items);

  expect(visitor.discount).toBe(5);
});
