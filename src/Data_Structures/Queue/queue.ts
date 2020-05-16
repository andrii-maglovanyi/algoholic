import { LinkedList } from "../Linked_List/linked-list";

export class Queue<T> {
  private list: LinkedList<T>;

  constructor(...items: T[]) {
    this.list = new LinkedList();
    items.map((item) => this.list.push(item));
  }

  enqueue(...items: T[]) {
    items.map((item) => this.list.push(item));
    return this.list.length;
  }

  dequeue() {
    return this.list.shift()?.value;
  }

  peek() {
    return this.list.head?.value;
  }

  get length() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  toArray() {
    return this.list.toArray();
  }
}
