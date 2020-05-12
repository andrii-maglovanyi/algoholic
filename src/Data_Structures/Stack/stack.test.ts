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
    const lowerBodyStack = new Stack();

    lowerBodyStack.push("Underwear");
    lowerBodyStack.push("Socks");
    lowerBodyStack.push("Pants");
    lowerBodyStack.push("Shoes");

    expect(lowerBodyStack.peek()).toBe("Shoes");
    lowerBodyStack.pop();
    expect(lowerBodyStack.peek()).toBe("Pants");
    lowerBodyStack.pop();
    expect(lowerBodyStack.length).toBe(2);
  });
});
