

# O(n) time
# O(1) space
def solution(list):
    highest_score = 100
    sorted_scores = []
    possible_scores = [0] * highest_score

    for score in list:
        possible_scores[score] += 1

    for amount in possible_scores[::-1]:
        highest_score -= 1
        while amount > 0:
            sorted_scores.append(highest_score)
            amount -= 1

    return sorted_scores
