def best_sum(target_sum, numbers):
    if target_sum < 0:
        return None
    if target_sum == 0:
        return []

    shortest_combination = None

    for num in numbers:
        remainder = target_sum - num
        combination = best_sum(remainder, numbers)

        if combination is not None:
            combination.append(num)

            if shortest_combination is None or len(shortest_combination) > len(combination):
                shortest_combination = combination

    return shortest_combination
