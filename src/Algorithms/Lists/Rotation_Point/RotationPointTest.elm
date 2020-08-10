module Algorithms.Lists.Rotation_Point.RotationPointTest exposing (..)

import Algorithms.Lists.Rotation_Point.RotationPoint exposing (solution)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Rotation Point" <|
        \() ->
            [ [ "cape", "cake" ], [ "grape", "orange", "plum", "radish", "apple" ], [ "ptolemaic", "retrograde", "supplant", "undulate", "xenoepist", "asymptote", "babka", "banoffee", "engender", "karpatka", "othellolagkage" ], [ "broccoli", "cabbage", "cauliflower", "leek", "radish", "asparagus", "beetroot", "cucumber", "eggplant" ], [ "broccoli", "cabbage", "cauliflower", "artichoke", "asparagus", "beetroot", "cucumber", "eggplant", "leek", "radish" ] ]
                |> List.map solution
                |> Expect.equal [ 1, 4, 5, 5, 3 ]
