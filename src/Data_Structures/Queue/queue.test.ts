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

  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  expect(queue.peek()).toBe("a");
  expect(queue.dequeue()).toBe("a");
  expect(queue.peek()).toBe("b");
  expect(queue.length).toBe(2);

  queue.dequeue();
  expect(queue.peek()).toBe("c");

  queue.dequeue();
  expect(queue.dequeue()).toBeUndefined();
  expect(queue.isEmpty()).toBeTruthy();
  expect(queue.length).toBe(0);
});
