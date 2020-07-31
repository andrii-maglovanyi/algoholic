module Algorithms.Math.Fibonacci.FibonacciTest exposing (..)

import Algorithms.Math.Fibonacci.Fibonacci exposing (fib)
import Expect
import Test exposing (..)


suite : Test
suite =
    test "Fibonacci"
        (\_ -> Expect.equal 55 (fib 10))
