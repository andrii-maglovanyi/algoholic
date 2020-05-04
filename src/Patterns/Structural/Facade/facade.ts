export class Bed {
  makeTheBed() {
    return "The bed is ready.";
  }
}

export class AirRefresher {
  spray() {
    return "Air refreshed.";
  }
}

export class TrashCan {
  takeOutTrash() {
    return "The trash is taken out.";
  }
}

export class Dishwasher {
  fill() {
    return "The dishwasher is filled.";
  }

  wash() {
    return new Promise((resolve) => {
      resolve("The dishwasher is working.");
    });
  }

  empty() {
    return "The dishwasher is empty.";
  }
}

export class HouseCleaningFacade {
  constructor(
    public bed: Bed,
    public trashCan: TrashCan,
    public airFreshener: AirRefresher,
    public dishwasher: Dishwasher
  ) {}

  async cleanTheHouse() {
    const messages = [];
    messages.push(this.bed.makeTheBed());
    messages.push(this.airFreshener.spray());
    messages.push(this.trashCan.takeOutTrash());
    messages.push(this.dishwasher.fill());
    messages.push(await this.dishwasher.wash());
    messages.push(this.dishwasher.empty());
    return messages.join(" ");
  }
}
