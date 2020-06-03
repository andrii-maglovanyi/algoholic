import { localStorage } from "./local-storage";

describe("Adapter: Local storage example", () => {
  test("Should use LocalStorage adapter for Node.js environment", () => {
    expect(localStorage.length).toBe(0);

    expect(localStorage.getItem("user_id")).toBeUndefined();

    localStorage.setItem("token", "some-token-123");
    localStorage.setItem("user_id", "12345");

    expect(localStorage.getItem("user_id")).toBe("12345");
    expect(localStorage.getItem("token")).toBe("some-token-123");

    expect(localStorage.length).toBe(2);

    localStorage.clear();

    expect(localStorage.length).toBe(0);
    expect(localStorage.getItem("user_id")).toBeUndefined();
    expect(localStorage.getItem("token")).toBeUndefined();
  });
});
