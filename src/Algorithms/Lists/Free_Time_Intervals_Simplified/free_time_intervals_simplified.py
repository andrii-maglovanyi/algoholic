

# O(n^2) time
# O(n) space
def compare_all_pairs(slots):
    meetings = []

    def is_in_range(slot):
        for index, meeting in enumerate(meetings):
            if ((slot[0] >= meeting[0] and slot[0] <= meeting[1]) or
                (slot[1] >= meeting[0] and slot[1] <= meeting[1]) or
                    (slot[0] <= meeting[0] and slot[1] >= meeting[1])):
                return (index, meeting)

    for slot in slots:
        item = is_in_range(slot)

        if item is not None:
            (index, meeting) = item

            meetings[index] = (
                min(slot[0], meeting[0]),
                max(slot[1], meeting[1])
            )
        else:
            meetings.append(slot)

    return sorted(meetings, key=lambda tup: tup[0])


# O(n*Log(n)) time
# O(1) space
def sort_and_merge(meetings):
    slots = sorted(meetings, key=lambda tup: tup[0])

    i = 0
    while i < len(slots):
        slot = slots[i]

        if i + 1 < len(slots):
            nextSlot = slots[i + 1]

            if (slot[1] >= nextSlot[0]):
                slots[i] = (slot[0], max(slot[1], nextSlot[1]))
                del slots[i+1]
                i -= 1

        i += 1

    return slots
