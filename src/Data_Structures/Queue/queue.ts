import { LinkedList } from "../Linked_List/linked-list";

export class Queue {
  private list: LinkedList;

  constructor(...items: any[]) {
    this.list = new LinkedList();
    items.map((item) => this.list.push(item));
  }

  enqueue(...items: any[]) {
    items.map((item) => this.list.push(item));
    return this.list.length;
  }

  dequeue() {
    return this.list.shift();
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
