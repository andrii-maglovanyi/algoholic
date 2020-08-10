from math import floor


# O(log(n)) time
# O(1) space
def solution(words):
    first_word = words[0]

    floor_index = 0
    ceil_index = len(words)
    current_index = 0

    while (floor_index < ceil_index):
        current_index = floor(
            (ceil_index - floor_index) / 2 + floor_index)

        if (words[current_index] < first_word):
            ceil_index = current_index
        else:
            floor_index = current_index

        if (words[current_index] < words[current_index - 1]):
            break

    return current_index
