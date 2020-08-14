module Algorithms.Lists.Free_Time_Intervals_Simplified.FreeTimeIntervalsSimplified exposing (solution)

-- O(n^2) time
-- O(n) space


mergeRange : ( Int, Int ) -> ( Int, Int ) -> ( Int, Int )
mergeRange current range =
    let
        currentStart =
            Tuple.first current

        currentEnd =
            Tuple.second current

        rangeStart =
            Tuple.first range

        rangeEnd =
            Tuple.second range
    in
    if (currentStart >= rangeStart && currentStart <= rangeEnd) || (currentEnd >= rangeStart && currentEnd <= rangeEnd) then
        ( min currentStart rangeStart, max currentEnd rangeEnd )

    else
        current


mergeRanges : ( Int, Int ) -> List ( Int, Int ) -> List ( Int, Int )
mergeRanges current ranges =
    let
        head =
            List.head ranges

        tail =
            Maybe.withDefault [] (List.tail ranges)
    in
    case head of
        Nothing ->
            current
                :: ranges

        Just range ->
            let
                newRange =
                    mergeRange current range
            in
            if newRange == current then
                range :: mergeRanges current tail

            else
                newRange :: tail


solution : List ( Int, Int ) -> List ( Int, Int )
solution intervals =
    List.foldl mergeRanges [] (List.sort intervals)
