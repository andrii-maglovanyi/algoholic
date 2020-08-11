from rotation_point import solution


def run_assertions(solution):
    assert solution(["cape", "cake"]) == 1
    assert solution(["grape", "orange", "plum", "radish", "apple"]) == 4
    assert solution(["ptolemaic", "retrograde", "supplant", "undulate", "xenoepist",
                     "asymptote", "babka", "banoffee", "engender", "karpatka", "othellolagkage"]) == 5
    assert solution(["broccoli", "cabbage", "cauliflower", "leek",
                     "radish", "asparagus", "beetroot", "cucumber", "eggplant"]) == 5
    assert solution(["broccoli", "cabbage", "cauliflower", "artichoke",
                     "asparagus", "beetroot", "cucumber", "eggplant", "leek", "radish"]) == 3


def test_rotation_point():
    run_assertions(solution)
