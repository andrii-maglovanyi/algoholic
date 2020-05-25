

# Average O(log(n)), worst O(n) time
# Average O(log(n)), worst O(n) space
def find_closest_value_recursively(tree, targetValue):
    return find_closest_value_in_subtree(tree, targetValue, float("inf"))


def find_closest_value_in_subtree(tree, targetValue, closestValue):
    if tree is None:
        return closestValue

    if abs(targetValue - closestValue) > abs(targetValue - tree.value):
        closestValue = tree.value

    if targetValue < tree.value:
        return find_closest_value_in_subtree(tree.left, targetValue, closestValue)
    elif targetValue > tree.value:
        return find_closest_value_in_subtree(tree.right, targetValue, closestValue)
    else:
        return closestValue


# Average O(log(n)), worst O(n) time
# O(1) space
def find_closest_value_iteratively(tree, targetValue):
    current = tree
    closestValue = current.value

    while current is not None:
        if abs(targetValue - closestValue) > abs(targetValue - current.value):
            closestValue = current.value

        if targetValue < current.value:
            current = current.left
        elif targetValue > current.value:
            current = current.right
        else:
            break
    return closestValue
