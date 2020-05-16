from queue import Queue


def test_enqueueItemsToLeft():
    queue = Queue(4, 5)
    assert queue.enqueue(1, 2, 3) == 5
    assert queue.to_list() == [4, 5, 1, 2, 3]


def test_dequeueItemFromRight():
    queue = Queue(1, 2, 3)
    assert queue.dequeue() == 1


def test_createEmptyQueueAndAddItems():
    queue = Queue()
    assert queue.is_empty() == True

    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    assert queue.peek() == "a"
    assert queue.dequeue() == "a"
    assert queue.peek() == "b"
    assert queue.get_length() == 2

    queue.dequeue()
    assert queue.peek() == "c"

    queue.dequeue()
    assert queue.dequeue() == None
    assert queue.is_empty() == True
    assert queue.get_length() == 0
