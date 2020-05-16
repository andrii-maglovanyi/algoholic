from src.Data_Structures.Linked_List.linked_list import LinkedList


class Queue:
    def __init__(self, *items):
        self.list = LinkedList()
        for item in items:
            self.list.push(item)

    def enqueue(self, *items):
        for item in items:
            self.list.push(item)

        return self.list.length

    def dequeue(self):
        return getattr(self.list.shift(), 'value', None)

    def peek(self):
        return getattr(self.list.head, 'value', None)

    def get_length(self):
        return self.list.length

    def is_empty(self):
        return self.list.is_empty()

    def to_list(self):
        return self.list.to_list()
