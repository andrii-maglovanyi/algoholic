//@ts-nocheck

import {
  Context,
  CoffeeMachineExpression as Expression,
} from "./coffee-machine";

const coffeeMachine = (sentence) => {
  const tree = [];
  var context = new Context(sentence);

  tree.push(new Expression("make", "startCommand"));
  tree.push(new Expression("hi", "startCommand"));
  tree.push(new Expression("hey", "startCommand"));

  tree.push(new Expression("thanks", "endCommand"));
  tree.push(new Expression("hurry up", "endCommand"));

  tree.push(new Expression("espresso", "espresso"));
  tree.push(new Expression("cappuccino", "cappuccino"));

  tree.push(new Expression("small", "size"));
  tree.push(new Expression("medium", "size"));
  tree.push(new Expression("large", "size"));

  for (var i = 0, len = tree.length; i < len; i++) {
    tree[i].interpret(context);
  }

  return `I'm ${
    context.output.startCommand ? "starting" : "not starting"
  } prepare your ${context.output.size} ${
    context.output.espresso ? "espresso" : "cappuccino"
  }. ${
    context.output.endCommand ? "Have a good day!" : "What else I can help you?"
  }`;
};

describe("Interpreter (coffee machine example)", () => {
  test("Should respond to user input", () => {
    expect(
      coffeeMachine("Hi, please make me a medium cappuccino to go...")
    ).toBe(
      "I'm starting prepare your medium cappuccino. What else I can help you?"
    );

    expect(
      coffeeMachine(
        "Hi, today I am going to save the world! Please make a very large portion of your cappuccino. Great thanks!"
      )
    ).toBe("I'm starting prepare your large cappuccino. Have a good day!");

    expect(coffeeMachine("Hey, espresso. Hurry up!")).toBe(
      "I'm starting prepare your small espresso. Have a good day!"
    );
  });
});
