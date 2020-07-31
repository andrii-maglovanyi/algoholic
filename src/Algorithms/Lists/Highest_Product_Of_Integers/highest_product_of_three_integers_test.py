from highest_product_of_three_integers import max_product_of_integers


def run_assertions(solution):
    assert solution([1, 2, 3, 4]) == 24
    assert solution([6, 1, 3, 5, 7, 8, 2]) == 336
    assert solution([-5, 4, 8, 2, 3]) == 96
    assert solution([-10, 1, 3, 2, -10]) == 300
    assert solution([-5, -1, -3, -2]) == -6
    assert solution([1, 10, -5, 1, -100]) == 5000


def test_max_product_of_three():
    run_assertions(max_product_of_integers)
