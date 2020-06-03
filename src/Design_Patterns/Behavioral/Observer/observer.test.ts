import { Observer, Subject } from "./observer";

it("Should notify all observers", () => {
  const firstObserver = new Observer("First");
  const secondObserver = new Observer("Second");
  const thirdObserver = new Observer("Third");

  const subject = new Subject();
  subject.subscribe(firstObserver);
  subject.subscribe(secondObserver);
  subject.subscribe(thirdObserver);

  expect(firstObserver.lastUpdate).toBe("First: ...");
  expect(secondObserver.lastUpdate).toBe("Second: ...");
  expect(thirdObserver.lastUpdate).toBe("Third: ...");

  subject.notify("first message");
  expect(firstObserver.lastUpdate).toBe("First: first message");
  expect(secondObserver.lastUpdate).toBe("Second: first message");
  expect(thirdObserver.lastUpdate).toBe("Third: first message");

  subject.unsubscribe(secondObserver);

  subject.notify("second message");
  expect(firstObserver.lastUpdate).toBe("First: second message");
  expect(secondObserver.lastUpdate).toBe("Second: first message");
  expect(thirdObserver.lastUpdate).toBe("Third: second message");
});
