from award_budget_cuts import budget_cuts_iterative, find_grant_cap


def run_assertions(solution):
    assert solution([2, 4], 3) == 1.5
    assert solution([2, 4, 6], 3) == 1
    assert solution([2, 100, 50, 120, 167], 400) == 128
    assert solution([2, 100, 50, 120, 1000], 190) == 47
    assert solution([21, 100, 50, 120, 130, 110], 140) == 23.8
    assert solution([210, 200, 150, 193, 130, 110, 209, 342, 117], 1530) == 211


def test_budget_cuts_iterative():
    run_assertions(budget_cuts_iterative)


def test_find_grant_cap():
    run_assertions(find_grant_cap)
