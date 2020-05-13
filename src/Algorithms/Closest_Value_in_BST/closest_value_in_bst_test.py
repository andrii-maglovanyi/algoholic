from closest_value_in_bst import findClosestValueValueRecursively, findClosestValueValueIteratively

from src.Data_Structures.Binary_Tree.binary_tree import BinaryTree

binaryTreeA = BinaryTree(10)
binaryTreeB = BinaryTree(5)

list = [5, 15, 2, 6, 13, 22, 1, 14]
for value in list:
    binaryTreeA.insert(value)

list = [2, 8, -2, 10, 12, 3, 15, -15, 21]
for value in list:
    binaryTreeB.insert(value)


def runAssertions(solution):
    assert solution(binaryTreeA, 12) == 13
    assert solution(binaryTreeA, 15) == 15
    assert solution(binaryTreeB, 7) == 8


def test_findClosestValueValueRecursively():
    runAssertions(findClosestValueValueRecursively)


def test_findClosestValueValueIteratively():
    runAssertions(findClosestValueValueIteratively)
