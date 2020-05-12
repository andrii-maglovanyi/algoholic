import { LinkedList } from "../Linked_List/linked-list";

export class Stack {
  private list: LinkedList;

  constructor(...items: any[]) {
    this.list = new LinkedList();
    items.map((item) => this.list.push(item));
  }

  push(...items: any[]) {
    items.map((item) => this.list.push(item));
    return this.list.length;
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list.get(this.list.length - 1);
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
