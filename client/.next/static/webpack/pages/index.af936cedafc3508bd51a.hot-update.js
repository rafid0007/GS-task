self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/screens/HomeScreen.jsx":
/*!***********************************************!*\
  !*** ./src/components/screens/HomeScreen.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table */ "./src/components/Table.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries/queries */ "./src/queries/queries.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\screens\\HomeScreen.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomeScreen = function HomeScreen() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_queries_queries__WEBPACK_IMPORTED_MODULE_3__.STUDENTS),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Error getting data from server!!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 23
  }, _this);
  console.log("students:", data.students);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      py: 5,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "h4",
        align: "center",
        children: "STUDENT TABLE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(HomeScreen, "RsAoF0jGW8x/4pnnopXB/YWtfZ8=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});

_c = HomeScreen;
/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

var _c;

$RefreshReg$(_c, "HomeScreen");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9Ib21lU2NyZWVuLmpzeCJdLCJuYW1lcyI6WyJIb21lU2NyZWVuIiwidXNlUXVlcnkiLCJTVFVERU5UUyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R1ZGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsd0RBQVEsQ0FBQ0Msc0RBQUQsQ0FEbEI7QUFBQSxNQUNkQyxJQURjLGFBQ2RBLElBRGM7QUFBQSxNQUNSQyxPQURRLGFBQ1JBLE9BRFE7QUFBQSxNQUNDQyxLQURELGFBQ0NBLEtBREQ7O0FBRXJCLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDWEMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF3QkosSUFBSSxDQUFDSyxRQUE3QjtBQUVBLHNCQUNJLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBLDZCQUNJLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0ksOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBaEJEOztHQUFNUixVO1VBQzZCQyxvRDs7O0tBRDdCRCxVO0FBa0JOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmOTM2Y2VkYWZjMzUwOGJkNTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0JveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9UYWJsZVwiO1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtTVFVERU5UU30gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvcXVlcmllc1wiO1xyXG5cclxuY29uc3QgSG9tZVNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeShTVFVERU5UUyk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyISE8L3A+O1xyXG4gICAgY29uc29sZS5sb2coXCJzdHVkZW50czpcIixkYXRhLnN0dWRlbnRzKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJveCBweT17NX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlNUVURFTlQgVEFCTEU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVNjcmVlbjsiXSwic291cmNlUm9vdCI6IiJ9