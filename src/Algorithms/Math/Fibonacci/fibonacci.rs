// Recursive approach
#[cfg(test)]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

// Iterative approach
struct Fib {
    c: u32,
    n: u32,
}

impl Iterator for Fib {
    type Item = u32;

    fn next(&mut self) -> Option<u32> {
        let n = self.c + self.n;
        self.c = self.n;
        self.n = n;

        Some(self.c)
    }
}

#[allow(dead_code)]
fn fib() -> Fib {
    Fib { c: 0, n: 1 }
}

#[cfg(test)]
mod tests {
    #[test]
    fn should_calc() {
        assert_eq!(
            55,
            crate::Algorithms::Math::Fibonacci::fibonacci::fibonacci(10)
        );

        let res = crate::Algorithms::Math::Fibonacci::fibonacci::fib()
            .skip(9)
            .next()
            .unwrap();
        assert_eq!(55, res);
    }
}
