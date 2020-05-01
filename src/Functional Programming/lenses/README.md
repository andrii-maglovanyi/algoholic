A lens is a composable pair of pure getter and setter functions which focus on a particular field inside an object, and obey a set of axioms known as the lens laws.

Lenses allow you to abstract state shape behind getters and setters.

# Lens Laws

- `view(lens, set(lens, a, store)) ≡ a` — If you set a value into the store, and immediately view the value through the lens, you get the value that was set.
- `set(lens, b, set(lens, a, store)) ≡ set(lens, b, store)` — If you set a lens value to `a` and then immediately set the lens value to `b`, it's the same as if you'd just set the value to `b`.
- `set(lens, view(lens, store), store) ≡ store` — If you get the lens value from the store, and then immediately set that value back into the store, the value is unchanged.
