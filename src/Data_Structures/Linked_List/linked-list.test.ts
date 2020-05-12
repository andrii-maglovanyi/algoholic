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
    list.pop();
    expect(list.tail.value).toBe("d");
    expect(list.get(1)).toBe("b");
    list.delete(1);
    expect(list.toArray()).toEqual(["a", "c", "d"]);
    list.pop();
    expect(list.toArray()).toEqual(["a", "c"]);
    list.delete(0);
    expect(list.toArray()).toEqual(["c"]);
    list.pop();
    expect(list.toArray()).toEqual([]);
    list.push("f");
    expect(list.toArray()).toEqual(["f"]);
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
