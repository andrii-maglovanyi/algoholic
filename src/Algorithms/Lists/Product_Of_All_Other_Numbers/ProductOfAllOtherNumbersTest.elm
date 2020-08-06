module Algorithms.Lists.Product_Of_All_Other_Numbers.ProductOfAllOtherNumbersTest exposing (..)

import Algorithms.Lists.Product_Of_All_Other_Numbers.ProductOfAllOtherNumbers exposing (getProductsOfAllIntsExceptAtIndex)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Product of all other numbers in list" <|
        \() ->
            [ [ 1, 2 ]
            , [ 1, 7, 3, 4 ]
            , [ 1, 2, 3 ]
            , [ 8, 2, 4, 3, 1, 5 ]
            , [ 6, 2, 0, 3 ]
            , [ 4, 0, 9, 1, 0 ]
            , [ -3, 8, 4 ]
            , [ -7, -1, -4, -2 ]
            , [ 1, 2, 6, 5, 9 ]
            ]
                |> List.map getProductsOfAllIntsExceptAtIndex
                |> Expect.equal
                    [ [ 2, 1 ]
                    , [ 84, 12, 28, 21 ]
                    , [ 6, 3, 2 ]
                    , [ 120, 480, 240, 320, 960, 192 ]
                    , [ 0, 0, 36, 0 ]
                    , [ 0, 0, 0, 0, 0 ]
                    , [ 32, -12, -24 ]
                    , [ -8, -56, -14, -28 ]
                    , [ 540, 270, 90, 108, 60 ]
                    ]
