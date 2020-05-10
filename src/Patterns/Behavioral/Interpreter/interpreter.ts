interface Expression {
  interpret(context: Context): void;
}

export class Context {
  public output: number = 0;

  constructor(public input: string) {}

  public startsWith(char: string) {
    return this.input.substr(0, char.length) === char;
  }
}

export class RomanNumeralsExpression implements Expression {
  constructor(
    private one: string,
    private four: string,
    private five: string,
    private nine: string,
    private multiplier: number
  ) {}

  interpret(context: Context) {
    if (context.input.length == 0) {
      return;
    } else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  }
}
