from queue import Queue


def test_enqueueItemsToLeft():
    queue = Queue(4, 5)
    assert queue.enqueue(1, 2, 3) == 5
    assert queue.toList() == [4, 5, 1, 2, 3]


def test_dequeueItemFromRight():
    queue = Queue(1, 2, 3)
    assert queue.dequeue() == 1


def test_createEmptyQueueAndAddItems():
    queue = Queue()
    assert queue.isEmpty() == True

    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    assert queue.peek() == "a"
    assert queue.dequeue() == "a"
    assert queue.peek() == "b"
    assert queue.getLength() == 2

    queue.dequeue()
    assert queue.peek() == "c"

    queue.dequeue()
    assert queue.dequeue() == None
    assert queue.isEmpty() == True
    assert queue.getLength() == 0
