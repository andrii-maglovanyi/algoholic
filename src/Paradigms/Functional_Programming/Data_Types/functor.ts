export default class Wrapper {
  constructor(private value: any) {}

  // map : (a -> b) -> a -> b
  map(fn: Function) {
    return fn(this.value);
  }

  /**
   * fmap: (a -> b) -> Wrapper a -> Wrapper b
   *
   * fmap knows how to apply functions to values wrapped in a context.
   * It first opens the container, then applies the given function to its value,
   * and finally closes the value back into a new container of the same type.
   * This type of function is known as a functor.
   */
  fmap(fn: Function) {
    return new Wrapper(fn(this.value));
  }

  toString() {
    return `Wrapper (${this.value})`;
  }
}
