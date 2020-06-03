interface Expression {
  interpret(context: Context): void;
}
export class Context {
  public output = {
    startCommand: false,
    endCommand: false,
    espresso: false,
    cappuccino: false,
    size: "small",
  };

  constructor(public input: string) {}
}

export class CoffeeMachineExpression implements Expression {
  constructor(private text: string, private command: string) {}

  private isCoffeeSizeCommand(text: string) {
    return ["small", "medium", "large"].includes(text);
  }

  private stripCommandFromInput(input: string) {
    return input
      .split(" ")
      .filter((item) => item !== this.text)
      .join(" ");
  }

  interpret(context: Context) {
    if (!context.input.length) {
      return;
    }

    if (context.input.toLowerCase().includes(this.text)) {
      context.output = {
        ...context.output,
        [this.command]: this.isCoffeeSizeCommand(this.text) ? this.text : true,
      };

      context.input = this.stripCommandFromInput(context.input);
    }
  }
}
