module Utils.GetByIndex exposing (getByIndex)


getByIndex : Int -> List a -> a -> a
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
