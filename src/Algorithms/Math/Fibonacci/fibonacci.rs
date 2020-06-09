#[cfg(test)]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn should_calc() {
        assert_eq!(
            55,
            crate::Algorithms::Math::Fibonacci::fibonacci::fibonacci(10)
        );
    }
}
