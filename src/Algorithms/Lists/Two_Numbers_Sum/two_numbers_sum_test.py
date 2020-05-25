from two_numbers_sum import find_sum, sort_and_find_sum, find_sum_with_set


def run_assertions(solution):
    assert solution([1, 4, 45, 6, 10, -8], 16) == [6, 10]
    assert solution([0, -1, 2, -3, 1], -2) == [-3, 1]
    assert solution([1, -2, 1, 0, 5], 0) == -1
    assert solution([1, 2, 3, 9], 8) == -1
    assert solution([1, 2, 4, 4], 8) == [4, 4]


def test_find_sum():
    run_assertions(find_sum)


def test_sort_and_find_sum():
    run_assertions(sort_and_find_sum)


def test_find_sum_with_set():
    run_assertions(find_sum_with_set)
