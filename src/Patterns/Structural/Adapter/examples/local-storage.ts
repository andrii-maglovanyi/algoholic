import { writeFile, existsSync, readFileSync, unlinkSync } from "fs";

const FILE_NAME = "localStorage.json";

class LocalStorage {
  constructor(private items: { [key: string]: any } = {}) {
    if (existsSync(FILE_NAME)) {
      const file = readFileSync(FILE_NAME, { encoding: "utf8", flag: "r" });
      this.items = JSON.parse(file);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key: string) {
    return this.items[key];
  }

  setItem(key: string, value: any) {
    this.items[key] = value;
    writeFile(FILE_NAME, JSON.stringify(this.items), console.error);
  }

  clear() {
    this.items = {};
    unlinkSync(FILE_NAME);
  }
}

export const localStorage = new LocalStorage();
