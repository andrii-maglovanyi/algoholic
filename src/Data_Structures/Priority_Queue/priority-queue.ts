export class PriorityQueue<T> {
  public values: { value: T; priority: number }[];

  constructor() {
    this.values = [];
  }

  enqueue(value: T, priority: number) {
    this.values.push({ value, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}
