"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./pages/faq.js":
/*!**********************!*\
  !*** ./pages/faq.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FAQPage; },\n/* harmony export */   \"useEffects\": function() { return /* reexport safe */ react__WEBPACK_IMPORTED_MODULE_1__.useEffects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Link */ \"./src/components/Link/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction FAQPage() {\n    _s();\n    useEffects(()=>{\n        const FAQ_API_URL = \"https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json\";\n        fetch(FAQ_API_URL).then((respostaDoServidor)=>{\n            console.log(respostaDoServidor);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Vizio.me FAQ\"\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                passHref: true,\n                children: \"Ir para Home\"\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(FAQPage, \"i9aAcOu0ADn/vuiPInAzGDW+/3o=\", true);\n_c = FAQPage;\nvar _c;\n$RefreshReg$(_c, \"FAQPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFtQztBQUNPO0FBRzNCLFNBQVNFLFVBQVM7O0lBQzdCRixXQUFXLElBQU07UUFDYixNQUFNRyxjQUFjO1FBQ3BCQyxNQUFPRCxhQUNGRSxJQUFJLENBQUMsQ0FBQ0MscUJBQXVCO1lBQzFCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBRVIsR0FBRSxFQUFFO0lBTVIscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1QsNERBQUlBO2dCQUFDVSxNQUFLO2dCQUFJQyxRQUFROzBCQUFDOzs7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQztHQXRCdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhcS5qcz9mNDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHVzZUVmZmVjdHMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTGlua1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZBUVBhZ2UoKXtcbiAgICB1c2VFZmZlY3RzKCgpID0+IHtcbiAgICAgICAgY29uc3QgRkFRX0FQSV9VUkwgPSAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vbWFyaW9zb3V0by8wY2VhYjU0YmRkODE4MmNiZDFhNDU0OWQzMjk0NWMxYS9yYXcvNTc4YWQxZThlNTI5NmZhMDQ4ZTNlN2ZmNmIzMTdmNzQ5N2IzMWFkOS9hbHVyYS1jYXNlcy1mYXEuanNvbidcbiAgICAgICAgZmV0Y2ggKEZBUV9BUElfVVJMKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2aWRvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3Bvc3RhRG9TZXJ2aWRvcik7XG4gICAgICAgICAgICB9KVxuXG4gICAgfSxbXSk7XG5cblxuXG5cblxucmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5WaXppby5tZSBGQVE8L2gxPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgSXIgcGFyYSBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbilcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0cyIsIkxpbmsiLCJGQVFQYWdlIiwiRkFRX0FQSV9VUkwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb3N0YURvU2Vydmlkb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJocmVmIiwicGFzc0hyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faq.js\n"));

/***/ })

});