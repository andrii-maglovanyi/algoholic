

# O(n^2) time
# O(1) space
def find_sum(array, targetSum):
    for i in range(len(array) - 1):
        firstNum = array[i]
        for j in range(i+1, len(array)):
            secondNum = array[j]
            if firstNum + secondNum == targetSum:
                return [firstNum, secondNum]
    return -1


# O(nlog(n)) time (depends on a sorting algorithm)
# O(n) space (because we clone sorted array, otherwise it's O(1))
def sort_and_find_sum(array, targetSum):
    sortedArray = array.copy()
    sortedArray.sort()
    pointerA = 0
    pointerB = len(sortedArray) - 1

    while pointerA < pointerB:
        currentSum = sortedArray[pointerA] + sortedArray[pointerB]
        if currentSum == targetSum:
            return [sortedArray[pointerA], sortedArray[pointerB]]
        elif currentSum > targetSum:
            pointerB -= 1
        else:
            pointerA += 1

    return -1


# O(n) time
# O(n) space
def find_sum_with_set(array, targetSum):
    nums = {}
    for num in array:
        if targetSum - num in nums:
            return [targetSum - num, num]
        else:
            nums[num] = True
    return -1
