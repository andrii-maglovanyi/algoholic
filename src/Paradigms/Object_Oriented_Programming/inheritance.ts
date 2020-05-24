class BaseArray {
  private arr: string[] = [];

  public add(element: string) {
    this.arr.push(element);
  }

  public addAll(elements: string[]) {
    for (let i = 0; i < elements.length; i++) {
      // this.arr.push(elements[i]);
      this.add(elements[i]);
    }
  }
}

class ArrayCount extends BaseArray {
  public count: number = 0;

  public add(element: string) {
    super.add(element);
    this.count++;
  }

  public addAll(elements: string[]) {
    super.addAll(elements);
    this.count += elements.length;
  }
}

const arrayCount = new ArrayCount();

arrayCount.add("one");
arrayCount.addAll(["two", "three"]);

// Fragile Base Class. Items counted twice.
arrayCount.count; //?

/**
 * The author of the Derived class must KNOW how the Base class has been implemented.
 * And they must be informed about every change in the Base class since it could break their Derived class in unpredictable ways.
 */
