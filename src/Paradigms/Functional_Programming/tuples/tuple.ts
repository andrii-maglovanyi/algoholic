import { curryTwo } from "../Higher_Order_Functions/curry";
import R from "ramda";

interface LooseObject {
  [key: string]: any;
}

export const checkType = curryTwo((type, value) => {
  if (R.is(type, value)) {
    return value;
  } else {
    throw new TypeError(
      `Type mismatch. Expected [${type}] but found [${typeof value}]`
    );
  }
});

export const Tuple = function (...types: any[]) {
  return class Instance implements LooseObject {
    constructor(...values: typeof types) {
      if (values.some((value) => value === null || value === undefined)) {
        throw new ReferenceError("Tuples may not have any null values.");
      }

      if (values.length !== types.length) {
        throw new TypeError("Tuple arity does not match its prototype.");
      }

      values.map((value, index) => {
        (this as LooseObject)["_" + (index + 1)] = checkType(types[index])(
          value
        );
      }, this);

      Object.freeze(this);
    }

    values(): Array<typeof types> {
      return Object.keys(this).map(
        (index) => (this as LooseObject)[index],
        this
      );
    }
  };
};
