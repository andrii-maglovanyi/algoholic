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

  test("Should dress lower body in the right order", () => {
    const stack = new Stack();

    stack.push("Underwear");
    stack.push("Socks");
    stack.push("Pants");
    stack.push("Shoes");

    expect(stack.peek()).toBe("Shoes");
    expect(stack.pop()).toBe("Shoes");
    expect(stack.peek()).toBe("Pants");
    stack.pop();
    expect(stack.length).toBe(2);
    stack.pop();
    expect(stack.pop()).toBe("Underwear");
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeNull();
  });
});
