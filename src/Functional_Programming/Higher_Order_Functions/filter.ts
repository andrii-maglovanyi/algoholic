type Callback<T> = (value: T, index: number, arr: T[]) => any;

export const filter = <T = any>(arr: T[], fn: Callback<T>) => {
  let index = 0,
    length = arr.length,
    result = [];

  while (index < length) {
    const value = arr[index];
    if (fn(value, index, arr)) {
      result.push(value);
    }
    index++;
  }
  return result;
};
