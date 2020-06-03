interface Iterator<T> {
  current(): T;
  key(): number;
  hasMoreElements(): boolean;
  reset(): void;
}

interface CustomIterator<T> extends Iterator<T> {
  first(): T;
  next(): T;
}

interface NativeIterator<T> extends Iterator<T> {
  first(): { value: T; done: boolean };
  next(): { value: T; done: boolean };
}

interface Aggregator {
  getIterator(): Iterator<string>;
}

class AlphabeticalOrderIterator implements Iterator<string> {
  protected position: number = 0;

  constructor(
    private collection: WordsCollection,
    protected reverse: boolean = false
  ) {
    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public reset() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public key(): number {
    return this.position;
  }

  public hasMoreElements(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

class CustomAlphabeticalOrderIterator extends AlphabeticalOrderIterator
  implements CustomIterator<string> {
  public first() {
    this.reset();
    return this.next();
  }

  public next(): string {
    const item = this.current();
    this.position += this.reverse ? -1 : 1;
    return item;
  }
}

class NativeAlphabeticalOrderIterator extends AlphabeticalOrderIterator
  implements NativeIterator<string> {
  public first() {
    this.reset();
    return this.next();
  }

  public next() {
    const value = this.current();
    const result = { value, done: !this.hasMoreElements() };
    this.position += this.reverse ? -1 : 1;
    return result;
  }
}

export class WordsCollection {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): CustomIterator<string> {
    return new CustomAlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): CustomIterator<string> {
    return new CustomAlphabeticalOrderIterator(this, true);
  }

  [Symbol.iterator](): NativeIterator<string> {
    return new NativeAlphabeticalOrderIterator(this);
  }

  reverse(): Iterable<string> {
    this.items; //?
    return {
      [Symbol.iterator]: () => {
        return new NativeAlphabeticalOrderIterator(this, true);
      },
    };
  }
}
