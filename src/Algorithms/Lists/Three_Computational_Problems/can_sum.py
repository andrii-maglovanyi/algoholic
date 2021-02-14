def can_sum(target_sum, numbers):
    if target_sum == 0:
        return True
    if target_sum < 0:
        return False

    for num in numbers:
        remainder = target_sum - num
        if can_sum(remainder, numbers) == True:
            return True

    return False
