import { T } from "ramda";

type Callback<T> = (value: T) => any;
type Predicate<T> = (value: T) => boolean;
type Reducer<T, U> = (acc: T, val: U) => T;
type Transformer<R> = (fn: R) => R;

export const mapReducer = <T>(fn: Callback<T>) => (result: T[], input: T) =>
  result.concat(fn(input));

export const filterReducer = <T, U>(predicate: Predicate<T>) => (
  result: T[],
  input: T
): T[] => (predicate(input) ? result.concat(input) : result);

export const mapping = <T, U>(fn: Callback<T>) => (reducing: Reducer<U, T>) => (
  result: U,
  input: T
) => reducing(result, fn(input));

export const filtering = <T, U>(predicate: Predicate<T>) => (
  reducing: Reducer<U, T>
) => (result: U, input: T) =>
  predicate(input) ? reducing(result, input) : result;

export const transduce = <T, U>(
  transform: Transformer<typeof reduce>,
  reduce: Reducer<T, U>,
  initial: T,
  input: U[]
) => input.reduce(transform(reduce), initial);
