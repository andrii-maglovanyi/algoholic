export default class Wrapper<T, U> {
  constructor(private value: T) {}

  static of<K>(value: K) {
    return new Wrapper(value);
  }

  map(fn: (arg: T) => U) {
    return Wrapper.of(fn(this.value));
  }

  join(): Wrapper<T, U> {
    if (!(this.value instanceof Wrapper)) {
      return this;
    }

    return this.value.join();
  }

  toString() {
    return `Wrapper (${this.value})`;
  }
}

// Maybe monad
export class Maybe<T, U> {
  static just<K>(value: K) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  static fromNullable<K>(value: K) {
    return value !== null && value !== undefined
      ? this.just(value)
      : this.nothing();
  }

  static of<K>(value: K) {
    return this.just(value);
  }

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }
}

class Just<T, U> extends Maybe<T, U> {
  constructor(private _value: T) {
    super();
  }

  get value() {
    return this._value;
  }

  static of<K>(value: K) {
    return new Just(value);
  }

  map(fn: (arg: T) => U) {
    return Just.of(fn(this.value));
  }

  getOrElse() {
    return this.value;
  }

  filter(fn: (arg: T) => U) {
    Maybe.fromNullable(fn(this.value) ? this.value : null);
  }

  get isJust() {
    return true;
  }

  toString() {
    return `Just (${this.value})`;
  }
}

class Nothing<T, U> extends Maybe<T, U> {
  map() {
    return this;
  }

  get value() {
    throw new TypeError("Can't extract the value of a Nothing.");
  }

  getOrElse(other: T) {
    return other;
  }

  filter() {
    return this.value;
  }

  get isNothing() {
    return true;
  }

  toString() {
    return "Nothing";
  }
}
