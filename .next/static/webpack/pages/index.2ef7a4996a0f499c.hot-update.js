"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Link/patterns/header/header.js":
/*!*******************************************************!*\
  !*** ./src/components/Link/patterns/header/header.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components */ \"./src/theme/components.js\");\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"header\",\n        styleSheet: {\n            backgroundColor: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral[900]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                overflow: \"hidden\",\n                maxWidth: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.xcontainer_xl,\n                marginLeft: \"auto\",\n                marginRight: \"auto\",\n                paddingVertical: {\n                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x12\n                },\n                paddingHorizontal: {\n                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x4,\n                    sm: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x6,\n                    lg: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x8\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                as: \"p\",\n                styleSheet: {\n                    textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.typography.variants.body2,\n                    textAlign: \"center\",\n                    color: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral[400]\n                },\n                children: [\n                    \"\\xa9 \",\n                    new Date().getFullYear(),\n                    \" Vizio.me. Todos os direitos reservados.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5rL3BhdHRlcm5zL2hlYWRlci9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNTO0FBRTFDLFNBQVNHLFNBQVM7SUFDL0IscUJBQ0UsOERBQUNGLGtEQUFHQTtRQUNGRyxJQUFHO1FBQ0hDLFlBQVk7WUFDVkMsaUJBQWlCTixtRUFBeUI7UUFDNUM7a0JBRUEsNEVBQUNDLGtEQUFHQTtZQUNGSSxZQUFZO2dCQUNWSSxVQUFTO2dCQUNUQyxVQUFVVixtRUFBeUI7Z0JBQ25DYSxZQUFZO2dCQUNaQyxhQUFZO2dCQUNaQyxpQkFBZ0I7b0JBQ2RDLElBQUloQix5REFBZTtnQkFDckI7Z0JBQ0FrQixtQkFBa0I7b0JBQ2hCRixJQUFJaEIsd0RBQWM7b0JBQ2xCb0IsSUFBSXBCLHdEQUFjO29CQUNsQnNCLElBQUl0Qix3REFBYztnQkFDcEI7WUFDRjtzQkFFQSw0RUFBQ0UsbURBQUlBO2dCQUNIRSxJQUFHO2dCQUNIQyxZQUFZO29CQUNWbUIsYUFBYXhCLHlFQUErQjtvQkFDNUM0QixXQUFXO29CQUNYQyxPQUFPN0IsbUVBQXlCO2dCQUNsQzs7b0JBQ0Q7b0JBQ1MsSUFBSThCLE9BQU9DLFdBQVc7b0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNDLENBQUM7S0FyQ3VCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGluay9wYXR0ZXJucy9oZWFkZXIvaGVhZGVyLmpzP2IyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZS90aGVtZSc7XG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZS9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcnMubmV1dHJhbFs5MDBdXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgIG92ZXJmbG93OlwiaGlkZGVuXCIsXG4gICAgICAgICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNlLnhjb250YWluZXJfeGwsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsXG4gICAgICAgICAgcGFkZGluZ1ZlcnRpY2FsOntcbiAgICAgICAgICAgIHhzOiB0aGVtZS5zcGFjZS54MTIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbDp7XG4gICAgICAgICAgICB4czogdGhlbWUuc3BhY2UueDQsXG4gICAgICAgICAgICBzbTogdGhlbWUuc3BhY2UueDYsXG4gICAgICAgICAgICBsZzogdGhlbWUuc3BhY2UueDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBhcz1cInBcIlxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIHRleHRWYXJpYW50OiB0aGVtZS50eXBvZ3JhcGh5LnZhcmlhbnRzLmJvZHkyLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy5uZXV0cmFsWzQwMF0sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBWaXppby5tZS4gVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn0iXSwibmFtZXMiOlsidGhlbWUiLCJCb3giLCJUZXh0IiwiSGVhZGVyIiwiYXMiLCJzdHlsZVNoZWV0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwibmV1dHJhbCIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJzcGFjZSIsInhjb250YWluZXJfeGwiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVmVydGljYWwiLCJ4cyIsIngxMiIsInBhZGRpbmdIb3Jpem9udGFsIiwieDQiLCJzbSIsIng2IiwibGciLCJ4OCIsInRleHRWYXJpYW50IiwidHlwb2dyYXBoeSIsInZhcmlhbnRzIiwiYm9keTIiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Link/patterns/header/header.js\n"));

/***/ })

});