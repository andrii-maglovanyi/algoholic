# O(nlog(n)) time
# O(n) space


def budget_cuts_iterative(grants_array, new_budget):
    under_budget_sum = 0
    cap = new_budget / len(grants_array)

    under_budget = []
    over_budget = grants_array

    while True:
        for i in range(len(over_budget) - 1, -1, -1):
            grant = over_budget.pop(i)
            if (grant < cap):
                under_budget_sum += grant
                under_budget.append(grant)
            else:
                over_budget.append(grant)

        cap = (new_budget - under_budget_sum) / len(over_budget)

        if len(list(filter(lambda grant: grant < cap, over_budget))) == 0:
            break

    return cap


# O(n⋅log(n)) time.
# Sorting the grants array takes O(N⋅log(N)), calculating the surplus is O(N) due to the grants summation, and finally the for loop takes another O(N). In total, the time complexity is O(N⋅log(N)) before sorting and O(N) after sorting.
# O(1) space
# Throughout the algorithm we used only a constant amount of auxiliary space. The space complexity is therefore O(1).
def find_grant_cap(grants_array, new_budget):
    # Sort the array in a descending order
    grants_array.sort(reverse=True)

    # Pad the array with a zero at the end to cover the case where 0 <= cap <= grantsArray[i]
    grants_array.append(0)

    # Calculate the total amount we need to cut back to meet the reduced budget
    surplus = sum(grants_array) - new_budget

    # If there is nothing to cut, simply return the highest grant as the cap. Recall that the grants array is sorted in a descending  order, so the highest grant is positioned at index 0
    if surplus <= 0:
        return grants_array[0]

    # Start subtracting from surplus the differences (“deltas”) between consecutive grants until surplus is less or equal to zero. Basically, we are testing out, in order, each of the grants as potential lower bound for the cap.
    i = 0
    while surplus > 0:
        surplus -= ((i + 1) * (grants_array[i] - grants_array[i + 1]))
        i += 1

    # Since grantsArray[i] is a lower bound to our cap, i.e. grantsArray[i] <= cap, we  need to add to grantsArray[i] the difference: (-total / i), so the returned value equals exactly to cap.
    return grants_array[i] + -surplus / i
