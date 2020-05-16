import pytest

from linked_list import LinkedList


@pytest.fixture(scope="function", autouse=True)
def linked_list():
    linked_list = LinkedList()
    for value in ["a", "b", "c", "d", "e"]:
        linked_list.push(value)

    return linked_list


def test_createAndManipulateLinkedList(linked_list):
    assert linked_list.is_empty() == False
    assert linked_list.pop().value == "e"
    assert linked_list.tail.value == "d"
    assert linked_list.get(1).value == "b"

    linked_list.delete(1)
    assert linked_list.to_list() == ["a", "c", "d"]
    assert linked_list.pop().value == "d"
    assert linked_list.to_list() == ["a", "c"]

    linked_list.delete(0)
    assert linked_list.to_list() == ["c"]

    linked_list.pop()
    assert linked_list.to_list() == []

    linked_list.push("f")
    assert linked_list.to_list() == ["f"]

    linked_list.push("g")
    linked_list.push("h")
    assert linked_list.to_list() == ["f", "g", "h"]
    assert linked_list.shift().value == "f"
    assert linked_list.to_list() == ["g", "h"]

    linked_list.shift()
    assert linked_list.to_list() == ["h"]
    assert linked_list.unshift("g").value == "g"
    assert linked_list.to_list() == ["g", "h"]

    linked_list.shift()
    assert linked_list.to_list() == ["h"]

    linked_list.shift()
    assert linked_list.to_list() == []
    assert linked_list.shift() == None
    assert linked_list.to_list() == []


def test_reverseLinkedList(linked_list):
    assert linked_list.reverse().to_list() == ["e", "d", "c", "b", "a"]


def test_findNodeInLinkedList(linked_list):
    d = linked_list.find("d")
    assert d.value == "d"
    assert d.next.value == "e"
    assert d.next.next == None
