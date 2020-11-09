/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test-two"] = factory();
	else
		root["test-two"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/joe/PROJECTS/test-deps/test-two/src/index.js: Identifier 'NavButton' has already been declared (10:13)\\n\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mconst\\u001b[39m \\u001b[33mNavButton\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mNAV\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 10 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mconst\\u001b[39m \\u001b[33mNavButton\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mHomebaseButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mDiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mNAV\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mDiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mHomebaseButton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:799:17)\\n    at Object.raiseWithData (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:792:17)\\n    at Object.raise (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:786:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:4906:12)\\n    at ScopeHandler.declareName (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:4872:12)\\n    at Object.checkLVal (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:9554:22)\\n    at Object.parseVarId (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:12265:10)\\n    at Object.parseVar (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:12240:12)\\n    at Object.parseVarStatement (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:12052:10)\\n    at Object.parseStatementContent (/Users/joe/PROJECTS/test-deps/test-two/node_modules/@babel/parser/lib/index.js:11644:21)\");\n\n//# sourceURL=webpack://test-two/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});