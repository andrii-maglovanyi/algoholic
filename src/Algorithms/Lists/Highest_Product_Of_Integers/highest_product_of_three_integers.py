
def max_product_of_integers(list_of_ints):
    highest = max(list_of_ints[0], list_of_ints[1])
    lowest = min(list_of_ints[0], list_of_ints[1])

    max_product_of_two = min_product_of_two = highest * lowest

    max_product = max_product_of_two * list_of_ints[2]

    for current in list_of_ints[2:]:
        max_product = max(max_product, max_product_of_two *
                          current, min_product_of_two * current)

        max_product_of_two = max(
            max_product_of_two, highest * current, lowest * current)

        min_product_of_two = min(
            min_product_of_two, highest * current, lowest * current)

        highest = max(highest, current)
        lowest = min(lowest, current)

    return max_product
