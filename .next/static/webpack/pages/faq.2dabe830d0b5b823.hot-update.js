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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ FAQPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Link */ \"./src/components/Link/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSG = true;\nfunction FAQPage(props) {\n    _s();\n    console.log(props);\n    const [faq, setFaq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const FAQ_API_URL = \"https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json\";\n        fetch(FAQ_API_URL).then((respostaDoServidor)=>{\n            return respostaDoServidor.json();\n        }).then((resposta)=>{\n            setTimeout(()=>{\n                setFaq(resposta);\n            }, 3 * 1000);\n            return resposta;\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Alura Cases - FAQ\"\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                lineNumber: 31,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                children: \"Ir para a Home\"\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                lineNumber: 32,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: faq.map((param)=>{\n                    let { answer , question  } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: question\n                                }, void 0, false, {\n                                    fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: answer\n                                }, void 0, false, {\n                                    fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                            lineNumber: 39,\n                            columnNumber: 22\n                        }, this)\n                    }, question, false, {\n                        fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                        lineNumber: 38,\n                        columnNumber: 19\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n                lineNumber: 35,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/all_dev/Desktop/New Folder/pages/faq.js\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, this);\n}\n_s(FAQPage, \"U+btVaewv5J64fV6r++q0Pwf8Nw=\");\n_c = FAQPage;\nvar _c;\n$RefreshReg$(_c, \"FAQPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNGOztBQVUzQixTQUFTRyxRQUFRQyxLQUFLLEVBQUU7O0lBQ3BDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxLQUFLQyxPQUFPLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDakNELGdEQUFTQSxDQUFDLElBQU07UUFDYixNQUFNUyxjQUFjO1FBQ3BCQyxNQUFNRCxhQUNGRSxJQUFJLENBQUMsQ0FBQ0MscUJBQXVCO1lBQzNCLE9BQU9BLG1CQUFtQkMsSUFBSTtRQUNqQyxHQUNDRixJQUFJLENBQUMsQ0FBQ0csV0FBYTtZQUNqQkMsV0FBVyxJQUFNO2dCQUNkUCxPQUFPTTtZQUNWLEdBQUcsSUFBSTtZQUNQLE9BQU9BO1FBQ1Y7SUFDTixHQUFHLEVBQUU7SUFFTCxxQkFDRyw4REFBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDZiw0REFBSUE7Z0JBQUNnQixNQUFLOzBCQUFJOzs7Ozs7MEJBR2YsOERBQUNDOzBCQUNHWixJQUFJYSxHQUFHLENBQUMsU0FBMEI7d0JBQXpCLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFO29CQUMzQixxQkFDRyw4REFBQ0M7a0NBQ0UsNEVBQUNDOzs4Q0FDRSw4REFBQ0M7OENBQUlIOzs7Ozs7OENBQ0wsOERBQUNJOzhDQUFHTDs7Ozs7Ozs7Ozs7O3VCQUhEQzs7Ozs7Z0JBT2Y7Ozs7Ozs7Ozs7OztBQUlaLENBQUM7R0FyQ3VCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxLmpzP2Y0NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0xpbmtcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgcmV0dXJuIHtcbiAgICAgcHJvcHM6IHtcbiAgICAgICAgcXVhbHF1ZXJjb2lzYTogXCJxIGV1IHBhc3NhclwiXG4gICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgfVxuIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRkFRUGFnZShwcm9wcykge1xuICAgY29uc29sZS5sb2cocHJvcHMpXG4gICBjb25zdCBbZmFxLCBzZXRGYXFdID0gdXNlU3RhdGUoW10pO1xuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IEZBUV9BUElfVVJMID0gXCJodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL29tYXJpb3NvdXRvLzBjZWFiNTRiZGQ4MTgyY2JkMWE0NTQ5ZDMyOTQ1YzFhL3Jhdy81NzhhZDFlOGU1Mjk2ZmEwNDhlM2U3ZmY2YjMxN2Y3NDk3YjMxYWQ5L2FsdXJhLWNhc2VzLWZhcS5qc29uXCI7XG4gICAgICBmZXRjaChGQVFfQVBJX1VSTClcbiAgICAgICAgIC50aGVuKChyZXNwb3N0YURvU2Vydmlkb3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICAgICAgICAgfSlcbiAgICAgICAgIC50aGVuKChyZXNwb3N0YSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICBzZXRGYXEocmVzcG9zdGEpXG4gICAgICAgICAgICB9LCAzICogMTAwMClcbiAgICAgICAgICAgIHJldHVybiByZXNwb3N0YTtcbiAgICAgICAgIH0pXG4gICB9LCBbXSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPGgxPkFsdXJhIENhc2VzIC0gRkFRPC9oMT5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICBJciBwYXJhIGEgSG9tZVxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2ZhcS5tYXAoKHsgYW5zd2VyLCBxdWVzdGlvbiB9KSA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17cXVlc3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3F1ZXN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YW5zd2VyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiRkFRUGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImZhcSIsInNldEZhcSIsIkZBUV9BUElfVVJMIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZpZG9yIiwianNvbiIsInJlc3Bvc3RhIiwic2V0VGltZW91dCIsImRpdiIsImgxIiwiaHJlZiIsInVsIiwibWFwIiwiYW5zd2VyIiwicXVlc3Rpb24iLCJsaSIsImFydGljbGUiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faq.js\n"));

/***/ })

});