module Algorithms.Lists.Stock_Prices.StockPricesTest exposing (..)

import Algorithms.Lists.Stock_Prices.StockPrices exposing (getMaxProfit)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Max profit" <|
        \() ->
            [ [ 1, 5, 3, 2 ], [ 7, 2, 8, 9 ], [ 7, 2, 3, 1, 9 ], [ 1, 6, 7, 9 ], [ 9, 7, 4, 1 ], [ 1, 1, 1, 1 ], [ 10, 7, 5, 8, 11, 9 ] ]
                |> List.map getMaxProfit
                |> Expect.equal [ 4, 7, 8, 8, -2, 0, 6 ]
