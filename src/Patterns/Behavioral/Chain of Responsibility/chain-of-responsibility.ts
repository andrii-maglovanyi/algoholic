type Money = { [key: string]: number };

interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: number, money: Money): Money;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | undefined;
  private money: Money = {};

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return handler;
  }

  public handle(request: number, money: Money) {
    this.money = money;

    if (request && this.nextHandler) {
      return this.nextHandler.handle(request, this.money);
    }

    return this.money;
  }

  protected calculateNumberOfBills(request: number, faceValue: number) {
    return {
      billsNumber: Math.floor(request / faceValue),
      requestReminder: request % faceValue,
    };
  }
}

export class FranklinHandler extends AbstractHandler {
  private faceValue = 100;

  constructor(private availableBills: number = 0) {
    super();
  }

  public handle(request: number, money: Money = {}) {
    const { billsNumber, requestReminder } = super.calculateNumberOfBills(
      request,
      this.faceValue
    );
    if (billsNumber && billsNumber <= this.availableBills) {
      this.availableBills -= billsNumber;
      return super.handle(requestReminder, { ...money, franklin: billsNumber });
    }

    return super.handle(request, money);
  }
}

export class GrantHandler extends AbstractHandler {
  private faceValue = 50;

  constructor(private availableBills: number = 0) {
    super();
  }

  public handle(request: number, money: Money) {
    const { billsNumber, requestReminder } = super.calculateNumberOfBills(
      request,
      this.faceValue
    );
    if (billsNumber && billsNumber <= this.availableBills) {
      this.availableBills -= billsNumber;
      return super.handle(requestReminder, { ...money, grant: billsNumber });
    }

    return super.handle(request, money);
  }
}

export class HamiltonHandler extends AbstractHandler {
  private faceValue = 10;

  constructor(private availableBills: number = 0) {
    super();
  }

  public handle(request: number, money: Money) {
    const { billsNumber, requestReminder } = super.calculateNumberOfBills(
      request,
      this.faceValue
    );
    if (billsNumber && billsNumber <= this.availableBills) {
      this.availableBills -= billsNumber;
      return super.handle(requestReminder, { ...money, hamilton: billsNumber });
    }

    return super.handle(request, money);
  }
}

export class LincolnHandler extends AbstractHandler {
  private faceValue = 5;

  constructor(private availableBills: number = 0) {
    super();
  }

  public handle(request: number, money: Money) {
    const { billsNumber, requestReminder } = super.calculateNumberOfBills(
      request,
      this.faceValue
    );
    if (billsNumber && billsNumber <= this.availableBills) {
      this.availableBills -= billsNumber;
      return super.handle(requestReminder, { ...money, lincoln: billsNumber });
    }

    return super.handle(request, money);
  }
}

export class WashingtonHandler extends AbstractHandler {
  private faceValue = 1;

  constructor(private availableBills: number = 0) {
    super();
  }

  public handle(request: number, money: Money) {
    const { billsNumber, requestReminder } = super.calculateNumberOfBills(
      request,
      this.faceValue
    );
    if (billsNumber && billsNumber <= this.availableBills) {
      this.availableBills -= billsNumber;
      return super.handle(requestReminder, {
        ...money,
        washington: billsNumber,
      });
    }

    return super.handle(request, money);
  }
}
