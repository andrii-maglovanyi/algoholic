import fs from "fs";

type Callback = (error: Error | null, contents?: Buffer | string) => void;

export class FileSystemProxy {
  constructor(private subject: typeof fs) {}

  readFile(path: string | number | Buffer, format: string, callback: Callback) {
    if (!(path as string).match(/.txt$|.TXT$/)) {
      return callback(new Error("Can only read text files."));
    }

    this.subject.readFile(
      path,
      format,
      (err: Error | null, data: Buffer | string) => {
        if (err) {
          return callback(err);
        }

        return callback(null, data);
      }
    );
  }

  writeFile(path: string, data: Buffer | string) {
    return this.subject.writeFileSync(path, data);
  }
}
