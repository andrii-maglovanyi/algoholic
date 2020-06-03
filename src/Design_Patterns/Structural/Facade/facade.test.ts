import {
  Bed,
  TrashCan,
  AirRefresher,
  Dishwasher,
  HouseCleaningFacade,
} from "./facade";

it("Should clean the house", async () => {
  const houseCleaning = new HouseCleaningFacade(
    new Bed(),
    new TrashCan(),
    new AirRefresher(),
    new Dishwasher()
  );

  expect(await houseCleaning.cleanTheHouse()).toBe(
    `The bed is ready. Air refreshed. The trash is taken out. The dishwasher is filled. The dishwasher is working. The dishwasher is empty.`
  );
});
