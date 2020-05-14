// @ts-nocheck

import { LinkedList } from "./linked-list";

describe("Linked List", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    const values = ["a", "b", "c", "d", "e"];
    values.map((value) => list.push(value));
  });

  test("Should create and manipulate a new Linked list", () => {
    expect(list.isEmpty()).toBeFalsy();
    let node = list.pop();
    expect(node).toBe("e");
    expect(list.tail.value).toBe("d");
    expect(list.get(1)).toBe("b");
    list.delete(1);
    expect(list.toArray()).toEqual(["a", "c", "d"]);
    node = list.pop();
    expect(node).toBe("d");

    expect(list.toArray()).toEqual(["a", "c"]);
    list.delete(0);
    expect(list.toArray()).toEqual(["c"]);
    list.pop();
    expect(list.toArray()).toEqual([]);
    list.push("f");
    expect(list.toArray()).toEqual(["f"]);
    list.push("g");
    list.push("h");
    list.toArray(); //?
    expect(list.toArray()).toEqual(["f", "g", "h"]);
    node = list.shift();
    expect(node).toBe("f");
    expect(list.toArray()).toEqual(["g", "h"]);
    list.shift();
    expect(list.toArray()).toEqual(["h"]);
    node = list.unshift("g");
    expect(node).toBe("g");
    expect(list.toArray()).toEqual(["g", "h"]);
    list.shift();
    expect(list.toArray()).toEqual(["h"]);
    node = list.shift();
    expect(list.toArray()).toEqual([]);
    node = list.shift();
    expect(node).toBe(null);
    expect(list.toArray()).toEqual([]);
  });

  test("Should reverse the list", () => {
    expect(list.reverse().toArray()).toEqual(["e", "d", "c", "b", "a"]);
  });

  test("Should find a node in the list", () => {
    expect(list.find("d")).toEqual({
      value: "d",
      next: { value: "e", next: null },
    });
  });
});
