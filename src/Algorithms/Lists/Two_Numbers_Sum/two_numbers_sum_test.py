from two_numbers_sum import findSum, sortAndFindSum, findSumWithSet


def runAssertions(solution):
    assert solution([1, 4, 45, 6, 10, -8], 16) == [6, 10]
    assert solution([0, -1, 2, -3, 1], -2) == [-3, 1]
    assert solution([1, -2, 1, 0, 5], 0) == -1
    assert solution([1, 2, 3, 9], 8) == -1
    assert solution([1, 2, 4, 4], 8) == [4, 4]


def test_findSum():
    runAssertions(findSum)


def test_sortAndFindSum():
    runAssertions(sortAndFindSum)


def test_findSumWithSet():
    runAssertions(findSumWithSet)
