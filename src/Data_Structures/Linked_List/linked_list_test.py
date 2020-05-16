import pytest
from linked_list import LinkedList


@pytest.fixture(scope="function", autouse=True)
def linkedList():
    linkedList = LinkedList()
    for value in ["a", "b", "c", "d", "e"]:
        linkedList.push(value)

    return linkedList


def test_createAndManipulateLinkedList(linkedList):
    assert linkedList.isEmpty() == False
    assert linkedList.pop().value == "e"
    assert linkedList.tail.value == "d"
    assert linkedList.get(1).value == "b"

    linkedList.delete(1)
    assert linkedList.toList() == ["a", "c", "d"]
    assert linkedList.pop().value == "d"
    assert linkedList.toList() == ["a", "c"]

    linkedList.delete(0)
    assert linkedList.toList() == ["c"]

    linkedList.pop()
    assert linkedList.toList() == []

    linkedList.push("f")
    assert linkedList.toList() == ["f"]

    linkedList.push("g")
    linkedList.push("h")
    assert linkedList.toList() == ["f", "g", "h"]
    assert linkedList.shift().value == "f"
    assert linkedList.toList() == ["g", "h"]

    linkedList.shift()
    assert linkedList.toList() == ["h"]
    assert linkedList.unshift("g").value == "g"
    assert linkedList.toList() == ["g", "h"]

    linkedList.shift()
    assert linkedList.toList() == ["h"]

    linkedList.shift()
    assert linkedList.toList() == []
    assert linkedList.shift() == None
    assert linkedList.toList() == []


def test_reverseLinkedList(linkedList):
    assert linkedList.reverse().toList() == ["e", "d", "c", "b", "a"]


def test_findNodeInLinkedList(linkedList):
    d = linkedList.find("d")
    assert d.value == "d"
    assert d.next.value == "e"
    assert d.next.next == None
