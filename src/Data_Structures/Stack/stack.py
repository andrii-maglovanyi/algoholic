from src.Data_Structures.Linked_List.linked_list import LinkedList


class Stack:
    def __init__(self, *items):
        self.list = LinkedList()
        for item in items:
            self.list.push(item)

    def push(self, *items):
        for item in items:
            self.list.push(item)

        return self.list.length

    def pop(self):
        return getattr(self.list.pop(), 'value', None)

    def peek(self):
        return getattr(self.list.tail, 'value', None)

    def getLength(self):
        return self.list.length

    def isEmpty(self):
        return self.list.isEmpty()

    def toList(self):
        return self.list.toList()
