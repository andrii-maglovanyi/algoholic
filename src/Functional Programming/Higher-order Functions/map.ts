type Callback<T> = (value: T, index: number, arr: T[]) => any;

export const map = <T = any>(arr: T[], fn: Callback<T>) => {
  let index = 0,
    length = arr.length,
    result = new Array(length);

  while (index < length) {
    result[index] = fn(arr[index], index, arr);
    index++;
  }

  return result;
};
