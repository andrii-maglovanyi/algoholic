import { solutions } from "./anagrams";

describe("Anagrams", () => {
  test("Character Map Comparison", () => {
    const isAnagram = solutions["Character Map Comparison"];

    expect(isAnagram("hello world", "world hello")).toBe(true);
    expect(isAnagram("silent", "listen")).toBe(true);
    expect(isAnagram("hell world", "hello world")).toBe(false);
    expect(isAnagram("fried", "fired")).toBe(true);
  });

  test("Direct Comparison", () => {
    const isAnagram = solutions["Direct Comparison"];

    expect(isAnagram("hello world", "world hello")).toBe(true);
    expect(isAnagram("silent", "listen")).toBe(true);
    expect(isAnagram("hell world", "hello world")).toBe(false);
    expect(isAnagram("fried", "fired")).toBe(true);
  });
});
