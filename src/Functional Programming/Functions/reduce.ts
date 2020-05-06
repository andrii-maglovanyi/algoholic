type Callback<T, U> = (
  accumulator: U | T,
  value: T,
  index: number,
  arr: T[]
) => any;

export const reduce = <T = any, U = any>(
  arr: T[],
  fn: Callback<T, U>,
  accumulator: U | T
) => {
  let index = 0,
    length = arr.length;

  if (!accumulator && length > 0) {
    accumulator = arr[index];
  }

  while (index < length) {
    accumulator = fn(accumulator, arr[index], index, arr);
    index++;
  }

  return accumulator;
};
