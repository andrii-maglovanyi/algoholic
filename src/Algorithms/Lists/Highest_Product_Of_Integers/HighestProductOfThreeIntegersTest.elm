module Algorithms.Lists.Highest_Product_Of_Integers.HighestProductOfThreeIntegersTest exposing (..)

import Algorithms.Lists.Highest_Product_Of_Integers.HighestProductOfThreeIntegers exposing (highestProductOfThreeIntegers)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Highest product of three integers" <|
        \() ->
            [ [ 1, 2, 3, 4 ], [ 6, 1, 3, 5, 7, 8, 2 ], [ -5, 4, 8, 2, 3 ], [ -10, 1, 3, 2, -10 ], [ -5, -1, -3, -2 ], [ 1, 10, -5, 1, -100 ] ]
                |> List.map highestProductOfThreeIntegers
                |> Expect.equal [ 24, 336, 96, 300, -6, 5000 ]
