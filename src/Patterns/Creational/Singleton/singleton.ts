/**
 * Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
 */

type SingletonProperties = {
  name: string;
};

export class Singleton {
  private static instance?: Singleton;
  public name: string;

  private constructor({ name }: SingletonProperties) {
    this.name = name;
  }

  static getInstance(properties: SingletonProperties) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = new Singleton(properties);
    return Singleton.instance;
  }
}

// Less transparent approach, might confuse that the constructor returns the same object

// export class Singleton {
//   private static instance?: Singleton;

//   private constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//   }
// }
