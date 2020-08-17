from closest_value_in_bst import find_closest_value_recursively, find_closest_value_iteratively

from src.Data_Structures.Binary_Tree.binary_tree import BinaryTree

binaryTreeA = BinaryTree(10)
binaryTreeB = BinaryTree(5)

list = [5, 15, 2, 6, 13, 22, 1, 14]
for value in list:
    binaryTreeA.insert(value)

list = [2, 8, -2, 10, 12, 3, 15, -15, 21]
for value in list:
    binaryTreeB.insert(value)


def run_assertions(solution):
    assert solution(binaryTreeA, 12) == 13
    assert solution(binaryTreeA, 15) == 15
    assert solution(binaryTreeB, 7) == 8


def test_find_closest_value_recursively():
    run_assertions(find_closest_value_recursively)


def test_find_closest_value_iteratively():
    run_assertions(find_closest_value_iteratively)
