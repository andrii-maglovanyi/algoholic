from how_sum import how_sum


def run_assertions(solution):
    assert solution(7, [2, 3]) == [3, 2, 2]
    assert solution(7, [5, 3, 4, 7]) == [4, 3]
    assert solution(7, [2, 4]) == None
    assert solution(8, [2, 3, 5]) == [2, 2, 2, 2]
    # assert solution(300, [7, 14]) == None


def test_how_sum():
    run_assertions(how_sum)
