from free_time_intervals_simplified import compare_all_pairs, sort_and_merge


def run_assertions(solution):
    assert solution([(1, 3), (2, 4)]) == [(1, 4)]
    assert solution([(5, 6), (6, 8)]) == [(5, 8)]
    assert solution([(1, 8), (2, 5)]) == [(1, 8)]
    assert solution([(1, 3), (4, 8)]) == [(1, 3), (4, 8)]
    assert solution([(1, 4), (2, 5), (5, 8)]) == [(1, 8)]
    assert solution([(5, 8), (1, 4), (6, 8)]) == [(1, 4), (5, 8)]
    assert solution([(6, 8), (1, 10), (2, 5), (9, 10), (10, 12)]) == [(1, 12)]
    assert solution([(0, 1), (10, 12), (3, 5), (9, 10), (4, 8)]) == [
        (0, 1), (3, 8), (9, 12)]


def test_compare_all_pairs():
    run_assertions(compare_all_pairs)


def test_sort_and_merge():
    run_assertions(sort_and_merge)
