// @ts-nocheck

import path from "path";

import { FileSystemProxy } from "./file-system-proxy";

const fs = new FileSystemProxy(require("fs"));

const textFile = path.join(__dirname, "Readme.txt");
const mdFile = path.join(__dirname, "Readme.md");

describe("Proxy: File system example", () => {
  test("Should restrict access to .md file", (done) => {
    fs.readFile(mdFile, "utf8", (error, data) => {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Can only read text files.");
      expect(data).toBeUndefined();
      done();
    });
  });

  test("Should allow access to .txt file", (done) => {
    fs.readFile(textFile, "utf8", (error, data) => {
      expect(error).toBeFalsy();
      expect(data).toBe(
        "File system proxy example.\n\nProxy allows access to the file."
      );
      done();
    });
  });
});
