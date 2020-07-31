from stock_prices import get_max_profit


def run_assertions(solution):
    assert solution([1, 5, 3, 2]) == 4
    assert solution([7, 2, 8, 9]) == 7
    assert solution([7, 2, 3, 1, 9]) == 8
    assert solution([1, 6, 7, 9]) == 8
    assert solution([9, 7, 4, 1]) == -2
    assert solution([1, 1, 1, 1]) == 0
    assert solution([10, 7, 5, 8, 11, 9]) == 6


def test_max_product_of_three():
    run_assertions(get_max_profit)
