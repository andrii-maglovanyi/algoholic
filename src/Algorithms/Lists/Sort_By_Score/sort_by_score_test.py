from sort_by_score import solution


def run_assertions(solution):
    assert solution([]) == []
    assert solution([55]) == [55]
    assert solution([30, 60]) == [60, 30]
    assert solution([37, 89, 41, 65, 91, 53]) == [91, 89, 65, 53, 41, 37]
    assert solution([20, 10, 30, 30, 10, 20]) == [30, 30, 20, 20, 10, 10]


def test_sort_by_score():
    run_assertions(solution)
