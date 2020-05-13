from binary_tree import BinaryTree


binaryTree = BinaryTree(5)

list = [3, 6, 1, 7, 8, 4, 10, 2, 9]
for value in list:
    binaryTree.insert(value)

    #               5
    #          3         6
    #       1     4         7
    #         2                8
    #                            10
    #                          9


def test_createBinaryTree():
    assert binaryTree.value == 5
    assert binaryTree.left.value == 3
    assert binaryTree.right.value == 6
    assert binaryTree.left.left.value == 1
    assert binaryTree.right.right.value == 7
    assert binaryTree.right.right.right.value == 8
    assert binaryTree.left.right.value == 4
    assert binaryTree.right.right.right.right.value == 10
    assert binaryTree.left.left.right.value == 2
    assert binaryTree.right.right.right.right.left.value == 9


def test_contains():
    assert binaryTree.contains(2) == True
    assert binaryTree.contains(9) == True
    assert binaryTree.contains(0) == False
    assert binaryTree.contains(11) == False


def test_depthFirstTraversal():
    _pre = []
    _in = []
    _post = []

    def preCallback(value):
        _pre.append(value)

    def inCallback(value):
        _in.append(value)

    def postCallback(value):
        _post.append(value)

    binaryTree.depthFirstTraversal("pre", preCallback)
    binaryTree.depthFirstTraversal("in", inCallback)
    binaryTree.depthFirstTraversal("post", postCallback)
    assert _pre == [5, 3, 1, 2, 4, 6, 7, 8, 10, 9]
    assert _in == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert _post == [2, 1, 4, 3, 9, 10, 8, 7, 6, 5]


def test_breadthFirstTraversal():
    result = []

    def callback(value):
        result.append(value)

    binaryTree.breadthFirstTraversal(callback)
    assert result == [5, 3, 6, 1, 4, 7, 2, 8, 10, 9]


def test_getMinValue():
    assert binaryTree.getMinValue() == 1


def test_getMaxValue():
    assert binaryTree.getMaxValue() == 10


def test_customBinaryTree():
    customBinaryTree = BinaryTree("a")
    b = customBinaryTree.insertLeft("b")
    c = customBinaryTree.insertRight("c")
    d = b.insertLeft("d")
    e = b.insertRight("e")
    f = c.insertLeft("f")
    g = c.insertRight("g")
    h = d.insertLeft("h")
    i = d.insertRight("i")

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
