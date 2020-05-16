from functools import reduce

from src.Data_Structures.Queue.queue import Queue
from src.Data_Structures.Stack.stack import Stack


class Vertex:
    def __init__(self, key):
        self.key = key
        self.edges = {}

    def add_edge(self, edge):
        key = Edge.get_static_key(
            self, edge.vertex_b if self.key == edge.vertex_a.key else edge.vertex_a)

        if key in self.edges:
            raise Exception("The edge is already defined.")
        else:
            self.edges[key] = edge

    def remove_neighbor(self, vertex):
        self.edges.pop(Edge.get_static_key(self, vertex), None)

    def get_neighbors(self):
        return list(map(lambda edge: edge.vertex_b if edge.vertex_a == self else edge.vertex_a, self.edges.values()))


class Edge:
    def __init__(self, vertex_a, vertex_b, weight=0):
        self.vertex_a = vertex_a
        self.vertex_b = vertex_b
        self.weight = weight

    @staticmethod
    def get_static_key(vertex_a, vertex_b):
        return f'{vertex_a.key}-{vertex_b.key}'

    def get_key(self):
        return Edge.get_static_key(self.vertex_a, self.vertex_b)


class Graph:
    def __init__(self, directed=False, vertices=[]):
        self.directed = directed
        self.vertices = vertices

    def add_vertex(self, key):
        self.vertices.append(Vertex(key))

    def get_vertex(self, key):
        return next((vertex for vertex in self.vertices if vertex.key == key), None)

    def get_all_vertices(self):
        return self.vertices

    def remove_vertex(self, key):
        vertex_to_remove = self.get_vertex(key)
        if vertex_to_remove is not None:
            vertices_to_clean = self.vertices if self.directed == True else vertex_to_remove.get_neighbors()

            for vertex in vertices_to_clean:
                vertex.remove_neighbor(vertex_to_remove)

            self.vertices.remove(vertex_to_remove)

    def add_edge(self, vertex_a_key, vertex_b_key):
        vertex_a = self.get_vertex(vertex_a_key)
        vertex_b = self.get_vertex(vertex_b_key)

        if vertex_a is not None and vertex_b is not None:
            edge = Edge(vertex_a, vertex_b)
            vertex_a.add_edge(edge)

            if self.directed == False:
                vertex_b.add_edge(edge)

    def get_edge(self, vertex_a_key, vertex_b_key):
        vertex_a = self.get_vertex(vertex_a_key)
        vertex_b = self.get_vertex(vertex_b_key)

        if vertex_a is not None and vertex_b is not None:
            return vertex_a.edges[Edge.get_static_key(vertex_a, vertex_b)]

    def get_all_edges(self):
        return reduce((lambda edges, vertex: edges +
                       list(filter(lambda edge: edge not in edges, vertex.edges.values()))), self.vertices, [])

    def remove_edge(self, vertex_a_key, vertex_b_key):
        vertex_a = self.get_vertex(vertex_a_key)
        vertex_b = self.get_vertex(vertex_b_key)

        if vertex_a is not None and vertex_b is not None:
            vertex_a.remove_neighbor(vertex_b)
            vertex_b.remove_neighbor(vertex_a)

    def print(self):
        return ", ".join(
            list(map(lambda vertex: f'{vertex.key} => {" ".join(list(map(lambda neighbor: neighbor.key, vertex.get_neighbors())))}' if len(
                vertex.get_neighbors()) is not 0 else vertex.key, self.vertices)))
