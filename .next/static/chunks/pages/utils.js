/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/utils"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C.projects%5Cyt-clone%5Cpages%5Cutils.js&page=%2Futils!":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C.projects%5Cyt-clone%5Cpages%5Cutils.js&page=%2Futils! ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/utils\",\n      function () {\n        return __webpack_require__(/*! ./pages/utils.js */ \"./pages/utils.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/utils\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1EJTNBJTVDLnByb2plY3RzJTVDeXQtY2xvbmUlNUNwYWdlcyU1Q3V0aWxzLmpzJnBhZ2U9JTJGdXRpbHMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz80ZjgwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvdXRpbHNcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3V0aWxzLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi91dGlsc1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C.projects%5Cyt-clone%5Cpages%5Cutils.js&page=%2Futils!\n"));

/***/ }),

/***/ "./pages/utils.js":
/*!************************!*\
  !*** ./pages/utils.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Utils; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Utils() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 ml-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-10 text-xl\",\n                children: \"Utils\"\n            }, void 0, false, {\n                fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker\",\n                    onClick: async ()=>{\n                        await fetch(\"/api/utils\", {\n                            body: JSON.stringify({\n                                task: \"generate_content\"\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            method: \"POST\"\n                        });\n                    },\n                    children: \"Generate content\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker\",\n                    onClick: async ()=>{\n                        await fetch(\"/api/utils\", {\n                            body: JSON.stringify({\n                                task: \"clean_database\"\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            method: \"POST\"\n                        });\n                    },\n                    children: \"Clean database\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\.projects\\\\yt-clone\\\\pages\\\\utils.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = Utils;\nvar _c;\n$RefreshReg$(_c, \"Utils\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsUUFBUTtJQUM5QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQjs7Ozs7OzBCQUU5Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUNDRixXQUFVO29CQUNWRyxTQUFTLFVBQVk7d0JBQ25CLE1BQU1DLE1BQU0sY0FBYzs0QkFDeEJDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQ0FDbkJDLE1BQU07NEJBQ1I7NEJBQ0FDLFNBQVM7Z0NBQ1AsZ0JBQWdCOzRCQUNsQjs0QkFDQUMsUUFBUTt3QkFDVjtvQkFDRjs4QkFBRzs7Ozs7Ozs7Ozs7MEJBSVAsOERBQUNYO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRTtvQkFDQ0YsV0FBVTtvQkFDVkcsU0FBUyxVQUFZO3dCQUNuQixNQUFNQyxNQUFNLGNBQWM7NEJBQ3hCQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0NBQ25CQyxNQUFNOzRCQUNSOzRCQUNBQyxTQUFTO2dDQUNQLGdCQUFnQjs0QkFDbEI7NEJBQ0FDLFFBQVE7d0JBQ1Y7b0JBQ0Y7OEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIsQ0FBQztLQXpDdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3V0aWxzLmpzP2I2NWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXRpbHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTEwIG1sLTIwJz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J21iLTEwIHRleHQteGwnPlV0aWxzPC9oMj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSBtYi01Jz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyIHB4LTggcHktMiBtdC01IG1yLTggZm9udC1ib2xkIHJvdW5kZWQtZnVsbCBjb2xvci1hY2NlbnQtY29udHJhc3QgYmctY29sb3ItYWNjZW50IGhvdmVyOmJnLWNvbG9yLWFjY2VudC1ob3Zlci1kYXJrZXInXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvdXRpbHMnLCB7XG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0YXNrOiAnZ2VuZXJhdGVfY29udGVudCcsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19PlxuICAgICAgICAgIEdlbmVyYXRlIGNvbnRlbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LTEgbWItNSc+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlciBweC04IHB5LTIgbXQtNSBtci04IGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgY29sb3ItYWNjZW50LWNvbnRyYXN0IGJnLWNvbG9yLWFjY2VudCBob3ZlcjpiZy1jb2xvci1hY2NlbnQtaG92ZXItZGFya2VyJ1xuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL3V0aWxzJywge1xuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdGFzazogJ2NsZWFuX2RhdGFiYXNlJyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgQ2xlYW4gZGF0YWJhc2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlV0aWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRhc2siLCJoZWFkZXJzIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/utils.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=D%3A%5C.projects%5Cyt-clone%5Cpages%5Cutils.js&page=%2Futils!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);