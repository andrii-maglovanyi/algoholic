from can_sum import can_sum


def run_assertions(solution):
    assert solution(7, [2, 3]) == True
    assert solution(7, [5, 3, 4, 7]) == True
    assert solution(7, [2, 4]) == False
    assert solution(8, [2, 3, 5]) == True


def test_can_sum():
    run_assertions(can_sum)
