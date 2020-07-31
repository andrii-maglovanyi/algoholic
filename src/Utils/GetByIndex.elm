module Utils.GetByIndex exposing (getByIndex)


getByIndex : Int -> List Int -> Int -> Int
getByIndex nth list default =
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
            default
