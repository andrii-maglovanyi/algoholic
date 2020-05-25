from flatten_dictionary import flatten_recursive


def run_assertions(solution):
    assert solution({
        "Key1": "1",
        "Key2": {
            "a": "2",
            "b": "3",
            "c": {
                "d": "3",
                "e": {
                    "": "1",
                },
            },
        },
    }) == {
        "Key1": "1",
        "Key2.a": "2",
        "Key2.b": "3",
        "Key2.c.d": "3",
        "Key2.c.e": "1",
    }

    assert solution({"Key": {"a": "2", "b": "3"}}) == {
        "Key.a": "2",
        "Key.b": "3",
    }

    assert solution({
        "Key1": "1",
        "Key2": {
            "a": "2",
            "b": "3",
            "c": {
                "d": "3",
                "e": {
                    "f": "4"
                }
            }
        }
    }) == {
        "Key1": "1",
        "Key2.a": "2",
        "Key2.b": "3",
        "Key2.c.d": "3",
        "Key2.c.e.f": "4",
    }

    assert solution({"": {"a": "1"}, "b": "3"}) == {
        "a": "1",
        "b": "3",
    }

    assert solution({
        "a": {
            "b": {
                "c": {
                    "d": {
                        "e": {
                            "f": {
                                "": "awesome"
                            }
                        }
                    }
                }
            }
        }
    }) == {"a.b.c.d.e.f": "awesome"}

    assert solution({"a": "1"}) == {"a": "1"}


def test_flattern_recursive():
    run_assertions(flatten_recursive)
