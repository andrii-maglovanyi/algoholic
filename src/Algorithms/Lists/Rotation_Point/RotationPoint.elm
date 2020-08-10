module Algorithms.Lists.Rotation_Point.RotationPoint exposing (solution)

import Utils.GetByIndex exposing (getByIndex)


checkCondition : List String -> ( Int, Int, Int ) -> Int
checkCondition words ( floorIndex, ceilIndex, currentIndex ) =
    let
        newIndex =
            (ceilIndex - floorIndex) // 2 + floorIndex

        firstWord =
            getByIndex 0 words ""
    in
    if getByIndex currentIndex words "" < getByIndex (currentIndex - 1) words "" then
        currentIndex

    else if getByIndex currentIndex words firstWord < firstWord then
        checkCondition words ( floorIndex, currentIndex, newIndex )

    else
        checkCondition words ( currentIndex, ceilIndex, newIndex )


solution : List String -> Int
solution words =
    checkCondition words ( 0, List.length words, 0 )
