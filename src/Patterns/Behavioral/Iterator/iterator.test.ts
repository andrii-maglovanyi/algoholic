import { WordsCollection } from "./iterator";

describe("Iterator", () => {
  test("Should iterate over a collection with custom method", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    const iterator = collection.getIterator();

    expect(iterator.next()).toBe("First");

    iterator.reset();
    let words = "";
    while (iterator.hasMoreElements()) {
      words += iterator.next();
    }

    expect(words).toBe("FirstSecondThird");

    const reverseIterator = collection.getReverseIterator();

    let reverseWords = "";
    while (reverseIterator.hasMoreElements()) {
      reverseWords += reverseIterator.next();
    }

    expect(reverseWords).toBe("ThirdSecondFirst");
  });

  test("Should iterate a collection with native iterator", () => {
    const collection = new WordsCollection();
    collection.addItem("First");
    collection.addItem("Second");
    collection.addItem("Third");

    let itemsString = "";
    for (const item of collection) {
      itemsString += item;
    }
    expect(itemsString).toBe("FirstSecondThird");

    const reverseIterator = collection.reverse();

    let reverseItemsString = "";
    for (const item of reverseIterator) {
      reverseItemsString += item;
    }
    expect(reverseItemsString).toBe("ThirdSecondFirst");
  });
});
