//@ts-nocheck

import { Context, RomanNumeralsExpression as Expression } from "./interpreter";

describe("Interpreter", () => {
  const romanToNumbers = (string) => {
    const tree = [];
    var context = new Context(string);

    tree.push(new Expression("M", " ", " ", " ", 1000));
    tree.push(new Expression("C", "CD", "D", "CM", 100));
    tree.push(new Expression("X", "XL", "L", "XC", 10));
    tree.push(new Expression("I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
      tree[i].interpret(context);
    }

    return context.output;
  };
  test("Should convert roman numerals to decimal numbers", () => {
    expect(romanToNumbers("XXVI")).toBe(26);
    expect(romanToNumbers("CI")).toBe(101);
  });
});
