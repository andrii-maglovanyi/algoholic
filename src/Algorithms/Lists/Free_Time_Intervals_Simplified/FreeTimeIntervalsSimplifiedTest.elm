module Algorithms.Lists.Free_Time_Intervals_Simplified.FreeTimeIntervalsSimplifiedTest exposing (..)

import Algorithms.Lists.Free_Time_Intervals_Simplified.FreeTimeIntervalsSimplified exposing (solution)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Free time intervals simplified" <|
        \() ->
            [ [ ( 1, 3 ), ( 2, 4 ) ]
            , [ ( 5, 6 ), ( 6, 8 ) ]
            , [ ( 1, 8 ), ( 2, 5 ) ]
            , [ ( 1, 3 ), ( 4, 8 ) ]
            , [ ( 1, 4 ), ( 2, 5 ), ( 5, 8 ) ]
            , [ ( 5, 8 ), ( 1, 4 ), ( 6, 8 ) ]
            , [ ( 6, 8 ), ( 1, 10 ), ( 2, 5 ), ( 9, 10 ), ( 10, 12 ) ]
            , [ ( 0, 1 ), ( 10, 12 ), ( 3, 5 ), ( 9, 10 ), ( 4, 8 ) ]
            ]
                |> List.map solution
                |> Expect.equal
                    [ [ ( 1, 4 ) ]
                    , [ ( 5, 8 ) ]
                    , [ ( 1, 8 ) ]
                    , [ ( 1, 3 ), ( 4, 8 ) ]
                    , [ ( 1, 8 ) ]
                    , [ ( 1, 4 ), ( 5, 8 ) ]
                    , [ ( 1, 12 ) ]
                    , [ ( 0, 1 ), ( 3, 8 ), ( 9, 12 ) ]
                    ]
