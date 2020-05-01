import {
  FranklinHandler,
  GrantHandler,
  HamiltonHandler,
  LincolnHandler,
  WashingtonHandler,
} from "./atm";

describe("Chain of Responsibility", () => {
  it("Should return correct amount of money", () => {
    const atm = new FranklinHandler(5);
    const grant = new GrantHandler(10);
    const hamilton = new HamiltonHandler(20);
    const lincoln = new LincolnHandler(40);
    const washington = new WashingtonHandler(80);

    atm.setNext(grant).setNext(hamilton).setNext(lincoln).setNext(washington);

    expect(atm.handle(247)).toEqual({
      franklin: 2,
      hamilton: 4,
      lincoln: 1,
      washington: 2,
    });

    expect(atm.handle(320)).toEqual({
      franklin: 3,
      hamilton: 2,
    });

    expect(atm.handle(105)).toEqual({
      grant: 2,
      lincoln: 1,
    });
  });
});
