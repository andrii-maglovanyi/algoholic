import { LinkedList } from "../Linked_List/linked-list";

export class Stack<T> {
  private list: LinkedList<T>;

  constructor(...items: T[]) {
    this.list = new LinkedList();
    items.map((item) => this.list.push(item));
  }

  push(...items: T[]) {
    items.map((item) => this.list.push(item));
    return this.list.length;
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list.tail?.value;
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
