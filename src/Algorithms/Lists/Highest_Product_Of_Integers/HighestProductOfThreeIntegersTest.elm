module Algorithms.Lists.Highest_Product_Of_Integers.HighestProductOfThreeIntegersTest exposing (..)

import Algorithms.Lists.Highest_Product_Of_Integers.HighestProductOfThreeIntegers exposing (highestProductOfThreeIntegers)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Highest product of three integers"
        (\_ -> Expect.equal 24 (highestProductOfThreeIntegers [ 1, 2, 3, 4 ]))
