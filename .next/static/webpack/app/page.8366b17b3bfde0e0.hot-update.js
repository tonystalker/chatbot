"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [theInput, setTheInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hey lad, How can I help you ?\"\n        }\n    ]);\n    const Submit = (event)=>{\n        if (event.key === \"Enter\") {\n            event.preventDefault();\n            callGetResponse();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between px-24 py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-sans\",\n                children: \"ChatBot\"\n            }, void 0, false, {\n                fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  h-[35rem] w-[40rem] flex-col items-center bg-gray-600 rounded-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" h-full flex flex-col gap-2 overflow-y-auto py-8 px-3 w-full\",\n                        children: \"we're gonna do something here\"\n                    }, void 0, false, {\n                        fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative  w-[80%] bottom-4 flex justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: theInput,\n                                onChange: (event)=>setTheInput(event.target.value),\n                                className: \"w-[85%] h-10 px-3 py-2 resize-none overflow-y-auto text-black bg-gray-300 rounded-l outline-none\",\n                                onKeyDown: Submit\n                            }, void 0, false, {\n                                fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: \"{callGetResponse}\",\n                                className: \"w-[15%] bg-blue-500 px-4 py-2 rounded-r\",\n                                children: \"send\"\n                            }, void 0, false, {\n                                fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tonystalker/Desktop/projects/chatbot/src/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"a9yn/sOHWjcW+y/D5r7IFU/ijGU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2lDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUN2QztZQUNFUSxNQUFNO1lBQ05DLFNBQVM7UUFDWDtLQUNEO0lBRUQsTUFBTUMsU0FBUyxDQUFDQztRQUNkLElBQUlBLE1BQU1DLEdBQUcsS0FBSyxTQUFTO1lBQ3pCRCxNQUFNRSxjQUFjO1lBQ3BCQztRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUVuQyw4REFBQ0U7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBSUYsV0FBVTtrQ0FBK0Q7Ozs7OztrQ0FHOUUsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQ0NDLE9BQU9sQjtnQ0FDUG1CLFVBQVUsQ0FBQ1YsUUFBVVIsWUFBWVEsTUFBTVcsTUFBTSxDQUFDRixLQUFLO2dDQUNuREosV0FBVTtnQ0FFVk8sV0FBV2I7Ozs7OzswQ0FFYiw4REFBQ2M7Z0NBQ0NDLFNBQVE7Z0NBQ1JULFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ0U7Ozs7Ozs7Ozs7O0FBR1A7R0E1Q3dCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RoZUlucHV0LCBzZXRUaGVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgcm9sZTogXCJhc3Npc3RhbnRcIixcbiAgICAgIGNvbnRlbnQ6IFwiSGV5IGxhZCwgSG93IGNhbiBJIGhlbHAgeW91ID9cIixcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjYWxsR2V0UmVzcG9uc2UoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0yNCBweS01XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1zYW5zXCI+Q2hhdEJvdDwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgaC1bMzVyZW1dIHctWzQwcmVtXSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctZ3JheS02MDAgcm91bmRlZC14bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy15LWF1dG8gcHktOCBweC0zIHctZnVsbFwiPlxuICAgICAgICAgIHdlJ3JlIGdvbm5hIGRvIHNvbWV0aGluZyBoZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlICB3LVs4MCVdIGJvdHRvbS00IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXt0aGVJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRoZUlucHV0KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4NSVdIGgtMTAgcHgtMyBweS0yXG4gICAgICAgICAgcmVzaXplLW5vbmUgb3ZlcmZsb3cteS1hdXRvIHRleHQtYmxhY2sgYmctZ3JheS0zMDAgcm91bmRlZC1sIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBvbktleURvd249e1N1Ym1pdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9XCJ7Y2FsbEdldFJlc3BvbnNlfVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVsxNSVdIGJnLWJsdWUtNTAwIHB4LTQgcHktMiByb3VuZGVkLXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwidGhlSW5wdXQiLCJzZXRUaGVJbnB1dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIlN1Ym1pdCIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJjYWxsR2V0UmVzcG9uc2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});