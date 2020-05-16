class Node:
    def __init__(self, data):
        self.next = None
        self.value = data


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def delete(self, index):
        if self.head is None or index < 0 or index >= self.length:
            return None

        if index == 0:
            deleted = self.head
            self.head = self.head.next
            self.length += 1

            return deleted

        current = self.head
        previous = current
        i = 0

        while i < index:
            i += 1
            previous = current
            if current.next is not None:
                current = current.next

        deleted = current
        previous.next = current.next

        if previous.next is None:
            self.tail = previous

        self.length -= 1

        return deleted

    def find(self, value):
        current = self.head

        while current is not None:
            if current.value == value:
                return current

            current = current.next

        return None

    def get(self, index):
        if self.head is None or index < 0 or index >= self.length:
            return None

        if index == 0:
            return self.head

        current = self.head
        i = 0

        while i < index:
            i += 1
            if current.next is not None:
                current = current.next

        return current

    def isEmpty(self):
        return self.length == 0

    def pop(self):
        if self.isEmpty():
            return None

        node = self.tail

        if (self.head == self.tail):
            self.head = None
            self.tail = None
        else:
            penultimate = None
            current = self.head
            while current is not None:
                if current.next == self.tail:
                    penultimate = current
                    break

                current = current.next

            if penultimate:
                penultimate.next = None
                self.tail = penultimate

        self.length -= 1

        return node

    def push(self, value):
        node = Node(value)

        if self.tail is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

        self.length += 1

        return node

    def reverse(self):
        current = self.head
        previous = None
        next = None

        while current is not None:
            next = current.next
            current.next = previous
            previous = current
            current = next

        self.tail = self.head
        self.head = previous

        return self

    def shift(self):
        if self.isEmpty():
            return None

        node = self.head

        if self.head == self.tail:
            self.head = None
            self.tail = None
        elif self.head is not None:
            self.head = self.head.next

        self.length -= 1

        return node

    def toList(self):
        values = []

        current = self.head
        while current is not None:
            values.append(current.value)
            current = current.next

        return values

    def unshift(self, value):
        node = Node(value)

        if self.head is None:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node

        self.length += 1

        return node
