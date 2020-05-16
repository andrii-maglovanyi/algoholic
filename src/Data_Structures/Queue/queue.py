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
        return self.list.head.value

    def getLength(self):
        return self.list.length

    def isEmpty(self):
        return self.list.isEmpty()

    def toList(self):
        return self.list.toList()
