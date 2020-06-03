import { logger } from "./logger";

export class Shopper {
  constructor(public name: string, public money: number = 0) {
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}
