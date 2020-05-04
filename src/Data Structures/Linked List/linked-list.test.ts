import { LinkedList } from "./linked-list";

describe("Linked List", () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
    const values = ["a", "b", "c", "d", "e"];
    values.map((value) => list.push(value));
  });

  test("Should create and manipulate a new Linked list", () => {
    expect(list.isEmpty()).toBeFalsy();
    list.pop();
    expect(list.tail?.value).toBe("d");
    expect(list.get(1)?.value).toBe("b");
    list.delete(1);
    expect(list.print()).toBe("a => c => d");
    list.pop();
    expect(list.print()).toBe("a => c");
    list.delete(0);
    expect(list.print()).toBe("c");
    list.pop();
    expect(list.print()).toBe("");
    list.push("f");
    expect(list.print()).toBe("f");
  });

  test("Should reverse the list", () => {
    expect(list.reverse().print()).toBe("e => d => c => b => a");
  });

  test("Should find a node in the list", () => {
    expect(list.find("d")).toEqual({
      value: "d",
      next: { value: "e", next: null },
    });
  });
});
