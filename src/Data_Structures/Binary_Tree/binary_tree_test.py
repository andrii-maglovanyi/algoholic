from binary_tree import BinaryTree


binary_tree = BinaryTree(5)

list = [3, 6, 1, 7, 8, 4, 10, 2, 9]
for value in list:
    binary_tree.insert(value)

    #               5
    #          3         6
    #       1     4         7
    #         2                8
    #                            10
    #                          9


def test_createBinaryTree():
    assert binary_tree.value == 5
    assert binary_tree.left.value == 3
    assert binary_tree.right.value == 6
    assert binary_tree.left.left.value == 1
    assert binary_tree.right.right.value == 7
    assert binary_tree.right.right.right.value == 8
    assert binary_tree.left.right.value == 4
    assert binary_tree.right.right.right.right.value == 10
    assert binary_tree.left.left.right.value == 2
    assert binary_tree.right.right.right.right.left.value == 9


def test_contains():
    assert binary_tree.contains(2) == True
    assert binary_tree.contains(9) == True
    assert binary_tree.contains(0) == False
    assert binary_tree.contains(11) == False


def test_depth_first_traversal():
    _pre = []
    _in = []
    _post = []

    def preCallback(value):
        _pre.append(value)

    def inCallback(value):
        _in.append(value)

    def postCallback(value):
        _post.append(value)

    binary_tree.depth_first_traversal("pre", preCallback)
    binary_tree.depth_first_traversal("in", inCallback)
    binary_tree.depth_first_traversal("post", postCallback)
    assert _pre == [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]
    assert _in == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert _post == [2, 1, 4, 3, 9, 10, 8, 7, 6, 5]


def test_breadth_first_traversal():
    result = []

    def callback(value):
        result.append(value)

    binary_tree.breadth_first_traversal(callback)
    assert result == [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]


def test_getMinValue():
    assert binary_tree.get_min_value() == 1


def test_get_max_value():
    assert binary_tree.get_max_value() == 10


def test_customBinaryTree():
    customBinaryTree = BinaryTree("a")
    b = customBinaryTree.insert_left("b")
    c = customBinaryTree.insert_right("c")
    d = b.insert_left("d")
    e = b.insert_right("e")
    f = c.insert_left("f")
    g = c.insert_right("g")
    h = d.insert_left("h")
    i = d.insert_right("i")

    #                  a
    #            b           c
    #         d     e     f     g
    #       h   i

    assert customBinaryTree.value == "a"
    assert customBinaryTree.left.value == "b"
    assert customBinaryTree.left.left.value == "d"
    assert customBinaryTree.left.right.value == "e"
    assert customBinaryTree.left.left.left.value == "h"
    assert customBinaryTree.left.left.right.value == "i"
    assert customBinaryTree.right.value == "c"
    assert customBinaryTree.right.left.value == "f"
    assert customBinaryTree.right.right.value == "g"
