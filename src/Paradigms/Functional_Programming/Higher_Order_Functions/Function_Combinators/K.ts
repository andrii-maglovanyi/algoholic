export const K = <T, U>(x: T) => (y: U) => x;

export const K_withSideEffect = <T, U>(a: T, b: U) => {
  typeof b === "function" && b(a);
  return a;
};
