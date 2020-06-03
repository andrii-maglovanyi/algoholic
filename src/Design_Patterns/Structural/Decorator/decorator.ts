/**
 * Class decorator
 */
export function Bio(arg: string) {
  return function (constructor: any) {
    return function (...args: any[]) {
      args.push(arg);
      return new constructor(...args);
    } as typeof constructor;
  };
}

export function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

/**
 * Method decorator.
 *
 * - The constructor function of the class (for a static property), or the prototype of the class (for instance property),
 * - Name of the property,
 * - The property descriptor.
 */
export function ExcludeProperties(propertiesToExclude: string[]) {
  return (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalFunction = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const originalResult = await originalFunction.apply(this, args);
      propertiesToExclude.forEach((propertyName) => {
        delete originalResult[propertyName];
      });

      return originalResult;
    };
  };
}

export function WithTax(rate: number) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.get;

    if (original) {
      descriptor.get = function () {
        const result = original.apply(this);
        return (result * (1 + rate)).toFixed(2);
      };
    }

    return descriptor;
  };
}

/**
 * Property decorator
 * - The constructor function of the class (for a static property), or the prototype of the class (for instance property),
 * - Name of the property.
 */
export function Emoji(emoji: string) {
  return function (target: any, propertyName: string) {
    let initValue = target[propertyName];

    const getter = () => {
      return initValue;
    };

    const setter = (next: string | number) => {
      initValue = `${emoji}${next}${emoji}`;
    };

    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
