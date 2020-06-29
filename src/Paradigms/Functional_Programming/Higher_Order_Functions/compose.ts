export const compose = (...fns: Function[]) => {
  let start = fns.length - 1;
  return (...args: any[]) => {
    let i = start;
    let result = fns[start].apply(null, args);
    while (i--) {
      result = fns[i].call(null, result);
    }

    return result;
  };
};
