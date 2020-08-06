module Algorithms.Lists.Product_Of_All_Other_Numbers.ProductOfAllOtherNumbers exposing (getProductsOfAllIntsExceptAtIndex)


type alias Model =
    { productSoFar : Int, products : List Int, result : List Int }


getProduct : Int -> ( Int, List Int ) -> ( Int, List Int )
getProduct current ( productSoFar, products ) =
    let
        product =
            current * productSoFar
    in
    ( product, product :: products )


getAllProductsBeforeIndex : List Int -> List Int
getAllProductsBeforeIndex numbers =
    Tuple.second (List.foldl getProduct ( 1, [ 1 ] ) numbers)


getAllProductsAfterIndex : Int -> Model -> Model
getAllProductsAfterIndex current { productSoFar, products, result } =
    let
        productAtIndex =
            Maybe.withDefault 1 (List.head products) * productSoFar

        productz =
            List.drop 1 products
    in
    { productSoFar = current * productSoFar, products = productz, result = productAtIndex :: result }


getProductsOfAllIntsExceptAtIndex : List Int -> List Int
getProductsOfAllIntsExceptAtIndex numbers =
    let
        listOfProductsBeforeIndex =
            List.tail (getAllProductsBeforeIndex numbers)

        products =
            Maybe.withDefault [] listOfProductsBeforeIndex
    in
    (List.foldr getAllProductsAfterIndex { productSoFar = 1, products = products, result = [] } numbers).result
