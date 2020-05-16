import { Queue } from "./queue";

test("Should enqueue items to the left", () => {
  const queue = new Queue(4, 5);
  expect(queue.enqueue(1, 2, 3)).toBe(5);
  expect(queue.toArray()).toEqual([4, 5, 1, 2, 3]);
});

test("Should dequeue item from the right", () => {
  const queue = new Queue(1, 2, 3);
  expect(queue.dequeue()).toBe(1);
});

test("Should create a new empty queue and add items to it", () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toBeTruthy();
  queue.enqueue("Learn data structures.");
  queue.enqueue("Find a job of dream.");
  queue.enqueue("Be happy!");

  expect(queue.peek()).toBe("Learn data structures.");
  expect(queue.dequeue()).toBe("Learn data structures.");
  expect(queue.peek()).toBe("Find a job of dream.");
  expect(queue.length).toBe(2);
  queue.dequeue();
  expect(queue.peek()).toBe("Be happy!");
  queue.dequeue();
  expect(queue.dequeue()).toBeUndefined();
  expect(queue.isEmpty()).toBeTruthy();
  expect(queue.length).toBe(0);
});
