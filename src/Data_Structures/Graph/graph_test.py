import pytest

from graph import Graph


def add_vertices_and_edges(graph):
    for vertex in ["a", "b", "c", "d", "e", "f"]:
        graph.add_vertex(vertex)

    for vertex_a, vertex_b in [["a", "b"], ["a", "e"], ["b", "c"], ["c", "d"],  ["d", "f"], ["e", "d"], ["e", "f"], ["f", "a"]]:
        graph.add_edge(vertex_a, vertex_b)

    return graph


@pytest.fixture(scope="function")
def directed_graph():
    return add_vertices_and_edges(Graph(True))


@pytest.fixture(scope="function")
def undirected_graph():
    return add_vertices_and_edges(Graph())


def test_create_and_manipulate_directed_graph(directed_graph):
    assert directed_graph.print() == "a => b e, b => c, c => d, d => f, e => d f, f => a"
    assert directed_graph.get_vertex("b").key == "b"
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("b").get_neighbors())) == ["c"]
    assert directed_graph.get_vertex("e").key == "e"
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("e").get_neighbors())) == ["d", "f"]
    assert len(directed_graph.get_all_vertices()) == 6
    assert len(directed_graph.get_all_edges()) == 8

    directed_graph.remove_vertex("c")
    assert directed_graph.get_vertex("c") == None
    assert directed_graph.get_vertex("b").get_neighbors() == []
    assert len(directed_graph.get_all_vertices()) == 5
    assert len(directed_graph.get_all_edges()) == 6
    assert directed_graph.print() == "a => b e, b, d => f, e => d f, f => a"
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("a").get_neighbors())) == ["b", "e"]

    directed_graph.remove_edge("a", "b")
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("a").get_neighbors())) == ["e"]
    assert directed_graph.get_vertex("b").get_neighbors() == []
    assert len(directed_graph.get_all_vertices()) == 5
    assert len(directed_graph.get_all_edges()) == 5
    assert directed_graph.print() == "a => e, b, d => f, e => d f, f => a"

    directed_graph.add_vertex("g")
    assert len(directed_graph.get_all_vertices()) == 6
    assert len(directed_graph.get_all_edges()) == 5
    assert directed_graph.print() == "a => e, b, d => f, e => d f, f => a, g"

    directed_graph.add_edge("g", "a")
    directed_graph.add_edge("d", "g")
    assert len(directed_graph.get_all_vertices()) == 6
    assert len(directed_graph.get_all_edges()) == 7
    assert directed_graph.print() == "a => e, b, d => f g, e => d f, f => a, g => a"
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("d").get_neighbors())) == ["f", "g"]
    assert list(map(lambda vertex: vertex.key,
                    directed_graph.get_vertex("g").get_neighbors())) == ["a"]
    assert directed_graph.get_edge("d", "g").get_key() == "d-g"
