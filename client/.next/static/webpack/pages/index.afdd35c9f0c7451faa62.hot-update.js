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
/* harmony import */ var _Table_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table/Table */ "./src/components/Table/Table.jsx");
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
  var students = data.students;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      py: 5,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: "h4",
        align: "center",
        children: "STUDENT TABLE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_Table__WEBPACK_IMPORTED_MODULE_2__.default, {
        tableData: students
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9Ib21lU2NyZWVuLmpzeCJdLCJuYW1lcyI6WyJIb21lU2NyZWVuIiwidXNlUXVlcnkiLCJTVFVERU5UUyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdHVkZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyx3REFBUSxDQUFDQyxzREFBRCxDQURsQjtBQUFBLE1BQ2RDLElBRGMsYUFDZEEsSUFEYztBQUFBLE1BQ1JDLE9BRFEsYUFDUkEsT0FEUTtBQUFBLE1BQ0NDLEtBREQsYUFDQ0EsS0FERDs7QUFFckIsTUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUhVLE1BS2RDLFFBTGMsR0FLRkgsSUFMRSxDQUtkRyxRQUxjO0FBT3JCLHNCQUNJLDhEQUFDLHdEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBLDZCQUNJLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGFBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0ksOERBQUMsaURBQUQ7QUFBTyxpQkFBUyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FqQkQ7O0dBQU1OLFU7VUFDNkJDLG9EOzs7S0FEN0JELFU7QUFtQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWZkZDM1YzlmMGM3NDUxZmFhNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL1RhYmxlL1RhYmxlXCI7XHJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQge1NUVURFTlRTfSBmcm9tIFwiLi4vLi4vcXVlcmllcy9xdWVyaWVzXCI7XHJcblxyXG5jb25zdCBIb21lU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yfSA9IHVzZVF1ZXJ5KFNUVURFTlRTKTtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciBnZXR0aW5nIGRhdGEgZnJvbSBzZXJ2ZXIhITwvcD47XHJcblxyXG4gICAgY29uc3Qge3N0dWRlbnRzfSA9IGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Qm94IHB5PXs1fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+U1RVREVOVCBUQUJMRTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgdGFibGVEYXRhPXtzdHVkZW50c30vPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lU2NyZWVuOyJdLCJzb3VyY2VSb290IjoiIn0=