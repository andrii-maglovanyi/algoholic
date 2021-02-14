from best_sum import best_sum


def run_assertions(solution):
    assert solution(7, [2, 3]) == [3, 2, 2]
    assert solution(7, [5, 3, 4, 7]) == [7]
    assert solution(7, [2, 4]) == None
    assert solution(8, [2, 3, 5]) == [5, 3]
    assert solution(8, [1, 4, 5]) == [4, 4]
    # assert solution(100, [1, 2, 5, 25]) == [25, 25, 25, 25]


def test_best_sum():
    run_assertions(best_sum)
