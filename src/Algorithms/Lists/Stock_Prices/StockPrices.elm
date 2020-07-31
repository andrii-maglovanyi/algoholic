module Algorithms.Lists.Stock_Prices.StockPrices exposing (getMaxProfit)

import Utils.GetByIndex exposing (getByIndex)


type alias Profit =
    { minBuyPrice : Int
    , maxProfit : Int
    }


getProfit : Int -> Profit -> Profit
getProfit current profit =
    let
        maxProfit =
            current - profit.minBuyPrice |> max profit.maxProfit

        minBuyPrice =
            min current profit.minBuyPrice
    in
    { minBuyPrice = minBuyPrice, maxProfit = maxProfit }


getMaxProfit : List Int -> Int
getMaxProfit stockPrices =
    let
        minBuyPrice =
            getByIndex 0 stockPrices 0

        maxProfit =
            getByIndex 1 stockPrices 0 - minBuyPrice
    in
    (List.foldl getProfit { minBuyPrice = minBuyPrice, maxProfit = maxProfit } (List.drop 1 stockPrices)).maxProfit
