def how_sum(target_sum, numbers):
    if target_sum < 0:
        return None
    if target_sum == 0:
        return []

    for num in numbers:
        remainder = target_sum - num
        remainder_result = how_sum(remainder, numbers)
        if (remainder_result is not None):
            remainder_result.append(num)
            return remainder_result

    return None
