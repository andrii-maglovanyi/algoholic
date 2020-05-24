**Tail call optimization** means that, if the last expression in a function is a call to another function, then the engine will optimize so that the call stack doesn't grow.

### Example

---

V8, the JavaScript engine in Chrome, had TCO support for a while, but it no longer does and there is no active development on TCO in V8, and none is planned.

TCO support reached a decent level in V8 at one point, but remained behind a flag for several reasons (debugging issues, bugs).
In July, with no TCO work being done, the V8 team removed the code for supporting TCO from the source for TurboFan as it would otherwise be subject to bit rot (a maintenance pain and source of bugs).

- Of the major browsers, only Safari has actually implemented the feature.
- In Node.JS version 8 and later, TCO is not available.

---

- [Tail Call Optimization support](<https://kangax.github.io/compat-table/es6/#test-proper_tail_calls_(tail_call_optimisation)>)
- [V8 team issues with TCO](https://v8.dev/blog/modern-javascript)
