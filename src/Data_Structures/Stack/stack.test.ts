// @ts-nocheck
import { Stack } from "./stack";

describe("Stack", () => {
  test("Should push items to top of stack", () => {
    const stack = new Stack(4, 5);
    expect(stack.push(1, 2, 3)).toBe(5);
    expect(stack.toArray()).toEqual([4, 5, 1, 2, 3]);
  });

  test("Should pop item from top of stack", () => {
    const stack = new Stack(1, 2, 3);
    expect(stack.pop()).toBe(3);
  });

  test("Should create a new empty stack and add items to it", () => {
    const stack = new Stack();

    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.push("d");
    expect(stack.peek()).toBe("d");
    expect(stack.pop()).toBe("d");
    expect(stack.peek()).toBe("c");
    expect(stack.length).toBe(3);

    stack.pop();
    expect(stack.peek()).toBe("b");
    expect(stack.length).toBe(2);

    stack.pop();
    expect(stack.pop()).toBe("a");
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeUndefined();
  });
});
