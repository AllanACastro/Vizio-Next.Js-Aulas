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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../theme/theme */ \"./src/theme/theme.js\");\n/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../theme/components */ \"./src/theme/components.js\");\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        as: \"header\",\n        styleSheet: {\n            backgroundColor: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral[900]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                overflow: \"hidden\",\n                maxWidth: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.xcontainer_xl,\n                marginLeft: \"auto\",\n                marginRight: \"auto\",\n                paddingVertical: {\n                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x12\n                },\n                paddingHorizontal: {\n                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x4,\n                    sm: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x6,\n                    lg: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space.x8\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                as: \"p\",\n                styleSheet: {\n                    textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.typography.variants.body2,\n                    textAlign: \"center\",\n                    color: _theme_theme__WEBPACK_IMPORTED_MODULE_1__.theme.colors.neutral[400]\n                },\n                children: \"Bem vindo a Vizio.\"\n            }, void 0, false, {\n                fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/all_dev/Desktop/New Folder/src/components/Link/patterns/header/header.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5rL3BhdHRlcm5zL2hlYWRlci9oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUNTO0FBRTFDLFNBQVNHLFNBQVM7SUFDL0IscUJBQ0UsOERBQUNGLGtEQUFHQTtRQUNGRyxJQUFHO1FBQ0hDLFlBQVk7WUFDVkMsaUJBQWlCTixtRUFBeUI7UUFDNUM7a0JBRUEsNEVBQUNDLGtEQUFHQTtZQUNGSSxZQUFZO2dCQUNWSSxVQUFTO2dCQUNUQyxVQUFVVixtRUFBeUI7Z0JBQ25DYSxZQUFZO2dCQUNaQyxhQUFZO2dCQUNaQyxpQkFBZ0I7b0JBQ2RDLElBQUloQix5REFBZTtnQkFDckI7Z0JBQ0FrQixtQkFBa0I7b0JBQ2hCRixJQUFJaEIsd0RBQWM7b0JBQ2xCb0IsSUFBSXBCLHdEQUFjO29CQUNsQnNCLElBQUl0Qix3REFBYztnQkFDcEI7WUFDRjtzQkFFQSw0RUFBQ0UsbURBQUlBO2dCQUNIRSxJQUFHO2dCQUNIQyxZQUFZO29CQUNWbUIsYUFBYXhCLHlFQUErQjtvQkFDNUM0QixXQUFXO29CQUNYQyxPQUFPN0IsbUVBQXlCO2dCQUNsQzswQkFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQU1ULENBQUM7S0FyQ3VCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MaW5rL3BhdHRlcm5zL2hlYWRlci9oZWFkZXIuanM/YjIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lL3RoZW1lJztcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5uZXV0cmFsWzkwMF1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgb3ZlcmZsb3c6XCJoaWRkZW5cIixcbiAgICAgICAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2UueGNvbnRhaW5lcl94bCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5SaWdodDpcImF1dG9cIixcbiAgICAgICAgICBwYWRkaW5nVmVydGljYWw6e1xuICAgICAgICAgICAgeHM6IHRoZW1lLnNwYWNlLngxMixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhZGRpbmdIb3Jpem9udGFsOntcbiAgICAgICAgICAgIHhzOiB0aGVtZS5zcGFjZS54NCxcbiAgICAgICAgICAgIHNtOiB0aGVtZS5zcGFjZS54NixcbiAgICAgICAgICAgIGxnOiB0aGVtZS5zcGFjZS54OCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGFzPVwicFwiXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgdGV4dFZhcmlhbnQ6IHRoZW1lLnR5cG9ncmFwaHkudmFyaWFudHMuYm9keTIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JzLm5ldXRyYWxbNDAwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIEJlbSB2aW5kbyBhIFZpemlvLlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJ0aGVtZSIsIkJveCIsIlRleHQiLCJIZWFkZXIiLCJhcyIsInN0eWxlU2hlZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJuZXV0cmFsIiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsInNwYWNlIiwieGNvbnRhaW5lcl94bCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdWZXJ0aWNhbCIsInhzIiwieDEyIiwicGFkZGluZ0hvcml6b250YWwiLCJ4NCIsInNtIiwieDYiLCJsZyIsIng4IiwidGV4dFZhcmlhbnQiLCJ0eXBvZ3JhcGh5IiwidmFyaWFudHMiLCJib2R5MiIsInRleHRBbGlnbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Link/patterns/header/header.js\n"));

/***/ })

});