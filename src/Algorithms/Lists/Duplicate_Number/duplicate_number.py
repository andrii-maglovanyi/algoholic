from math import floor

# O(n*log(n)) time
# O(1) space


def solution(numbers):
    print(numbers)
    floor_index = 1
    ceil_index = len(numbers) - 1

    while (floor_index < ceil_index):
        middle = floor((ceil_index - floor_index) / 2 + floor_index)

        lower_range_start = floor_index
        lower_range_finish = middle
        upper_range_start = middle + 1
        upper_range_finish = ceil_index

        real_items_in_lower_range = 0
        real_items_in_upper_range = 0
        for number in numbers:
            if (number >= lower_range_start and number <= lower_range_finish):
                real_items_in_lower_range += 1
            elif (number >= upper_range_start and number <= upper_range_finish):
                real_items_in_upper_range += 1

        distinct_numbers_in_lower_range = lower_range_finish - lower_range_start + 1
        distinct_numbers_in_upper_range = upper_range_finish - upper_range_start + 1

        if (real_items_in_lower_range > distinct_numbers_in_lower_range):
            floor_index = lower_range_start
            ceil_index = lower_range_finish
        elif (real_items_in_upper_range > distinct_numbers_in_upper_range):
            floor_index = upper_range_start
            ceil_index = upper_range_finish
        else:
            return False

    return ceil_index
