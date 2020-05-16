from stack import Stack


def test_pushItemsToTopOfStack():
    stack = Stack(4, 5)
    assert stack.push(1, 2, 3) == 5
    assert stack.toList() == [4, 5, 1, 2, 3]


def test_popItemsFromTopOfStack():
    stack = Stack(1, 2, 3)
    assert stack.pop() == 3


def test_createEmptyStackAndAddItems():
    stack = Stack()

    stack.push("a")
    stack.push("b")
    stack.push("c")
    stack.push("d")
    assert stack.peek() == "d"
    assert stack.pop() == "d"
    assert stack.peek() == "c"
    assert stack.getLength() == 3

    stack.pop()
    assert stack.peek() == "b"
    assert stack.getLength() == 2

    stack.pop()
    assert stack.pop() == "a"
    assert stack.getLength() == 0
    assert stack.isEmpty() == True
    assert stack.pop() == None
