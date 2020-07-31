export const withMemoization = (fn: Function) => {
  const map = new Map();
  return (...args: (number | string)[]) => {
    const key = args.toString();

    if (map.has(key)) {
      return map.get(key);
    }

    const output = fn.apply(null, args);

    map.set(key, output);
    return output;
  };
};
