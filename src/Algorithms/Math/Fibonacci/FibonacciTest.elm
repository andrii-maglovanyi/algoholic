module Algorithms.Math.Fibonacci.FibonacciTest exposing (..)

import Algorithms.Math.Fibonacci.Fibonacci exposing (fib)
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    test "Fibonacci"
        (\_ -> Expect.equal 55 (fib 10))
