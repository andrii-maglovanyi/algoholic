/**
 * Abstract Factory is a creational design pattern.
 * Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
 */

export enum Type {
  MODERN = "modern",
  VINTAGE = "vintage",
}

interface Chair {
  type: string;
  price: number;
  sit: () => string;
}

interface Sofa {
  type: string;
  price: number;
  lay: () => string;
}

interface Table {
  type: string;
  price: number;
  put: () => string;
}

class ModernChair implements Chair {
  public type = "modern";
  public price = 100;
  public sit = () => `Sitting on ${this.type} chair`;
}

class VintageChair implements Chair {
  public type = "vintage";
  public price = 90;
  public sit = () => `Sitting on ${this.type} chair`;
}

class ModernSofa implements Sofa {
  public type = "modern";
  public price = 200;
  public lay = () => `Laying on ${this.type} sofa`;
}

class VintageSofa implements Sofa {
  public type = "vintage";
  public price = 210;
  public lay = () => `Laying on ${this.type} sofa`;
}

class ModernTable implements Table {
  public type = "modern";
  public price = 150;
  public put = () => `Putting on ${this.type} table`;
}

class VintageTable implements Table {
  public type = "vintage";
  public price = 130;
  public put = () => `Putting on ${this.type} table`;
}

// The abstract factory interface declares a set of methods that return different abstract products.
interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}

// Concrete products are created by corresponding concrete factories.
class ModernFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }

  createTable(): Table {
    return new ModernTable();
  }
}

class VintageFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VintageChair();
  }

  createSofa(): Sofa {
    return new VintageSofa();
  }

  createTable(): Table {
    return new VintageTable();
  }
}

export abstract class Factory {
  static getFactory(type: Type) {
    switch (type) {
      case Type.MODERN:
        return new ModernFactory();
      case Type.VINTAGE:
        return new VintageFactory();
    }
  }
}
