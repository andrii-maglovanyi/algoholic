// @ts-nocheck
import { PriorityQueue } from "./priority-queue";

describe("Priority Queue", () => {
  test("Should resort values in the queue every time new inserted", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.enqueue("a", 5);
    priorityQueue.enqueue("b", 10);
    priorityQueue.enqueue("c", 2);
    priorityQueue.enqueue("d", 7);
    expect(priorityQueue.values).toEqual([
      { value: "c", priority: 2 },
      { value: "a", priority: 5 },
      { value: "d", priority: 7 },
      { value: "b", priority: 10 },
    ]);

    expect(priorityQueue.dequeue()?.value).toBe("c");
    expect(priorityQueue.values).toEqual([
      { value: "a", priority: 5 },
      { value: "d", priority: 7 },
      { value: "b", priority: 10 },
    ]);
  });
});
