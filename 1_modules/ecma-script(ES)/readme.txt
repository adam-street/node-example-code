What is ECMA script
	is a general-purpose programming language, standardised by Ecma International according to the document ECMA-262.
	It is a JavaScript standard meant to ensure the interoperability of web pages across different web browsers.
	ECMAScript is commonly used for client-side scripting on the World Wide Web, and it is increasingly being used for writing server
	applications and services using Node.js.

How do I enable ECMA modules?
	The default format of modules in Node.js is the CommonJS. To make Node.js understand ES modules format, you have to explicitly make so.

	Node.js uses ECMAScript modules format if:
		1. The module’s file extension is .mjs
		2. The module’s nearest parent folder has { "type": "module" } in package.json
		3. The argument --input-type=module is present, and the module’s code is passed as a string using --eval="<module-code>" argument or from STDIN.


A full explanation of node modules exports can be found here
	https://www.freecodecamp.org/news/node-module-exports-explained-with-javascript-export-function-examples/