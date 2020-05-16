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
    expect(list.pop().value).toBe("e");
    expect(list.tail.value).toBe("d");
    expect(list.get(1).value).toBe("b");

    list.delete(1);
    expect(list.toArray()).toEqual(["a", "c", "d"]);
    expect(list.pop().value).toBe("d");
    expect(list.toArray()).toEqual(["a", "c"]);

    list.delete(0);
    expect(list.toArray()).toEqual(["c"]);

    list.pop();
    expect(list.toArray()).toEqual([]);

    list.push("f");
    expect(list.toArray()).toEqual(["f"]);

    list.push("g");
    list.push("h");
    expect(list.toArray()).toEqual(["f", "g", "h"]);
    expect(list.shift().value).toBe("f");
    expect(list.toArray()).toEqual(["g", "h"]);

    list.shift();
    expect(list.toArray()).toEqual(["h"]);
    expect(list.unshift("g").value).toBe("g");
    expect(list.toArray()).toEqual(["g", "h"]);

    list.shift();
    expect(list.toArray()).toEqual(["h"]);

    list.shift();
    expect(list.toArray()).toEqual([]);
    expect(list.shift()).toBe(null);
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
