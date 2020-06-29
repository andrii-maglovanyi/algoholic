export const partial = (fn: Function, ...args: any[]) => (...rest: any[]) => {
  return fn.apply(null, args.concat(rest));
};
