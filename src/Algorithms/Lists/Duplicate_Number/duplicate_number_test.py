from duplicate_number import solution


def run_assertions(solution):
    assert solution([3, 1, 3, 4, 2]) == 3
    assert solution([1, 3, 4, 2, 2]) == 2
    assert solution([1, 4, 6, 2, 6, 3, 5]) == 6
    assert solution([5, 7, 6, 8, 1, 3, 8, 4, 2]) == 8
    assert solution([1, 3, 5, 7, 9, 2, 4, 6, 8]) == False
    assert solution([1, 2, 5, 5, 5, 5]) == 5
    assert solution([1, 2, 3, 2]) == 2
    assert solution([4, 1, 4, 8, 3, 2, 7, 6, 5]) == 4


def test_duplicate_number():
    run_assertions(solution)
