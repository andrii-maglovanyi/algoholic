from check_order import check_orders


def run_assertions(solution):
    assert solution([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]) == True
    assert solution([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]) == False
    assert solution([], [2, 3, 6], [2, 3, 6]) == True
    assert solution([1, 5], [2, 3, 6], [1, 6, 3, 5]) == False
    assert solution([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]) == False
    assert solution([1, 9], [7, 8], [1, 7, 8]) == False
    assert solution([55, 9], [7, 8], [1, 7, 8, 9]) == False
    assert solution([27, 12, 18], [55, 31, 8], [55, 31, 8, 27, 12, 18]) == True


def test_max_product_of_three():
    run_assertions(check_orders)
