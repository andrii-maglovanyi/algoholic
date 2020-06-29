export const Y = (fn: Function) =>
  ((f) => f(f))((f: Function) => fn((n: any) => f(f)(n)));
