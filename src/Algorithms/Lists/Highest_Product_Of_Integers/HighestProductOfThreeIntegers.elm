module Algorithms.Lists.Highest_Product_Of_Integers.HighestProductOfThreeIntegers exposing (highestProductOfThreeIntegers)


type alias Products =
    { lowest : Int
    , highest : Int
    , lowestProductOfTwo : Int
    , highestProductOfTwo : Int
    , maxProduct : Int
    }


getProducts : Int -> Products -> Products
getProducts current products =
    let
        maxProduct =
            (products.highestProductOfTwo * current)
                |> max (products.lowestProductOfTwo * current)
                |> max products.maxProduct

        lowestProductOfTwo =
            (products.lowest * current)
                |> min (products.highest * current)
                |> min products.lowestProductOfTwo

        highestProductOfTwo =
            (products.lowest * current)
                |> max (products.highest * current)
                |> max products.highestProductOfTwo

        lowest =
            min products.lowest current

        highest =
            max products.highest current
    in
    { lowest = lowest, highest = highest, lowestProductOfTwo = lowestProductOfTwo, highestProductOfTwo = highestProductOfTwo, maxProduct = maxProduct }


get : Int -> List Int -> Int
get nth list =
    let
        item =
            list
                |> List.drop nth
                |> List.head
    in
    case item of
        Just value ->
            value

        Nothing ->
            1


highestProductOfThreeIntegers : List Int -> Int
highestProductOfThreeIntegers listOfInts =
    let
        first =
            get 0 listOfInts

        second =
            get 1 listOfInts

        third =
            get 2 listOfInts

        lowest =
            min first second

        highest =
            max first second

        lowestProductOfTwo =
            first * second

        highestProductOfTwo =
            lowestProductOfTwo

        maxProduct =
            highestProductOfTwo * third
    in
    (List.foldl getProducts { lowest = lowest, highest = highest, lowestProductOfTwo = lowestProductOfTwo, highestProductOfTwo = highestProductOfTwo, maxProduct = maxProduct } (List.drop 2 listOfInts)).maxProduct
