type Log = { message: string; timestamp: string };

class Logger {
  constructor(public logs: Log[] = []) {}

  get count() {
    return this.logs.length;
  }

  log(message: string) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

export const logger = new Logger();
