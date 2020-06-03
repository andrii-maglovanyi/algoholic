abstract class ShawarmaRecipe {
  public description: string = "";

  public cook() {
    this.addBread();
    this.addVegetables();
    this.addMeat();
    this.addChilliPepper();
    this.rollAndWrap();
  }

  // Already have implementation
  protected addBread() {
    this.description += "Add bread. ";
  }
  protected rollAndWrap() {
    this.description += "Roll and wrap it.";
  }

  // To be implemented in subclasses
  protected abstract addVegetables(): void;
  protected abstract addMeat(): void;

  // A hook. Subclass can override it if needed.
  // Hooks are empty by default and can provide additional extension points.
  protected addChilliPepper() {}
}

export class BeefShawarma extends ShawarmaRecipe {
  protected addVegetables() {
    this.description += "Add onion and tomato. ";
  }

  protected addMeat() {
    this.description += "Add beef. ";
  }
}

export class ChickenShawarma extends ShawarmaRecipe {
  protected addVegetables() {
    this.description += "Add cabbage and cucumber. ";
  }

  protected addMeat() {
    this.description += "Add chicken. ";
  }

  protected addChilliPepper() {
    this.description += "Add chilli pepper. ";
  }
}

export class VegetarianShawarma extends ShawarmaRecipe {
  protected addVegetables() {
    this.description += "Add onion, cucumber and sweet pepper. ";
  }

  protected addMeat() {}
}
