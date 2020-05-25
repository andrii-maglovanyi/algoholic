

# O(n) time.
# We visit every key in dictionary only once, hence the linear time complexity.
# O(n) space.
# Since the output dictionary is asymptotically as big as the input dictionary. We also store recursive calls in the execution stack which in the worst case scenario could be O(N), as well. The total is still O(N).
def flatten_recursive(dictionary):
    return helper(dictionary, [], {})


def helper(dictionary, path, flat_dict):
    for prop in dictionary:
        new_path = path + [prop] if prop else path

        if isinstance(dictionary[prop], dict):
            helper(dictionary[prop], new_path, flat_dict)
        else:
            flat_dict[".".join(new_path)] = dictionary[prop]

    return flat_dict
