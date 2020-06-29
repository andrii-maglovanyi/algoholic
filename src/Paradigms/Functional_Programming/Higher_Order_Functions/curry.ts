type CurriedFunction<T, U> = (argA: T, argB: U) => any;

export const curryTwo = <T, U>(fn: CurriedFunction<T, U>) => (firstArg: T) => (
  secondArg: U
) => fn(firstArg, secondArg);
