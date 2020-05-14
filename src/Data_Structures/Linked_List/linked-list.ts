// TODO: add shift, unshift method

class Node {
  public next: Node | null = null;

  constructor(public value: any) {}
}

export class LinkedList {
  public head: Node | null = null;
  public tail?: Node | null = null;
  public length: number = 0;

  delete(index: number) {
    if (!this.head || index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) {
      const deleted = this.head;
      this.head = this.head.next;
      this.length--;

      return deleted;
    }

    let current = this.head;
    let previous = current;
    let i = 0;

    while (i < index) {
      i++;
      previous = current;
      if (current.next) {
        current = current.next;
      }
    }

    const deleted = current;
    previous.next = current.next;

    if (previous.next === null) {
      this.tail = previous;
    }

    this.length--;

    return deleted;
  }

  find(value: any) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  get(index: number) {
    if (!this.head || index < 0 || index > this.length - 1) {
      return null;
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      i++;
      if (current.next) {
        current = current.next;
      }
    }

    return current?.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        current = current.next;
      }

      if (penultimate) {
        penultimate.next = null;
        this.tail = penultimate;
      }
    }

    this.length--;
    return node?.value;
  }

  push(value: any) {
    const node = new Node(value);

    if (this.head && this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.tail = this.head;
    this.head = previous;

    return this;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head) {
      this.head = this.head.next;
    }

    this.length--;

    return node?.value;
  }

  toArray() {
    const values = [];

    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  unshift(value: any) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return node.value;
  }
}
