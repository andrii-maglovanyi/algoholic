import { logger } from "./logger";

export class Store {
  constructor(public name: string, public inventory: Object[] = []) {
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}
