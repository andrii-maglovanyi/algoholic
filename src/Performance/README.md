Achieving efficient execution of JavaScript is a challenging task. A primary reason for this is the dynamic nature of JavaScript. JavaScript is a dynamically-typed programming language which supports dynamic properties. This means that properties can be added and removed from objects dynamically throughout execution. In addition, since JavaScript is a scripting language, code is compiled dynamically using Just-In-Time (JIT) compilation.

Another important metric when evaluating web applications is their page load time.

As JavaScript was initially designed to be embedded within browsers, JavaScript implementations commonly provide APIs to control execution. The host system in which a JavaScript runtime is embedded, such as a web browser or Node.js, is responsible for scheduling JavaScript execution. Normally, the host system can drive JavaScript execution through two means: loading new scripts (i.e., initialization) and adding
new events (i.e., event handling).

Initialization occurs when the host system first loads a JavaScript source file into the JavaScript runtime. For example, when a browser encounters a script element during
HTML parsing, it passes the JavaScript source code in the tag to the JavaScript runtime. Alternatively, the host system can register JavaScript functions to handle events, such as user input. These functions are then executed when the
corresponding events are triggered.

The page cannot be fully loaded until all included JavaScript source code has
initialized. For example, the initialization can block DOM object construction and page rendering. In addition, user interaction is typically disabled until initialization is complete.
