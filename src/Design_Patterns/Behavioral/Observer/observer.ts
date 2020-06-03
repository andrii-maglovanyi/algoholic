export interface IObserver {
  update: (message: any) => void;
}

export class Subject {
  private observers = new Set<Observer>();

  subscribe(observer: Observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers.delete(observer);
  }

  notify(message: string) {
    this.observers.forEach((observer) => {
      observer.update(message);
    });
  }
}

export class Observer implements IObserver {
  private lastMessage: string = "...";
  constructor(private name: string) {}

  get lastUpdate() {
    return `${this.name}: ${this.lastMessage}`;
  }

  update(message: string) {
    this.lastMessage = message;
  }
}
