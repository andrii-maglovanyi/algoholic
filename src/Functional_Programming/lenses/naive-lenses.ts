type Lens<T, U = any> = {
  view: (store: T) => T[keyof T];
  set: (value: U, store: T) => T;
};

// A function which takes a prop, and returns naive lens accessors for that prop.

export const lensProp = <T extends object, K extends keyof T, U>(
  prop: K
): Lens<T, U> => ({
  view: (store: T) => store[prop],
  set: (value: U, store: T) => ({
    ...store,
    [prop]: value,
  }),
});

// Pure functions to view and set which can be used with any lens:

export const view = <T extends object>(lens: Lens<T>, store: T) =>
  lens.view(store);

export const set = <T extends object, U>(
  lens: Lens<T, U>,
  value: U,
  store: T
) => lens.set(value, store);

export const over = <T extends object, U>(
  lens: Lens<T>,
  func: Function,
  store: T
) => set(lens, func(view(lens, store)), store);
