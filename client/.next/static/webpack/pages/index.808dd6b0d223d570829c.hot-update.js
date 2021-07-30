self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/CustomTable.jsx":
/*!**********************************************!*\
  !*** ./src/components/Table/CustomTable.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Table_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.styles */ "./src/components/Table/Table.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\Table\\CustomTable.jsx",
    _s = $RefreshSig$();









function CustomTable(_ref) {
  _s();

  var _this = this;

  var studentsData = _ref.studentsData,
      subjectsData = _ref.subjectsData;
  var classes = (0,_Table_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  var headerData = Object.keys(studentsData[0]).slice(2);
  var rows = [];

  if (studentsData) {
    rows = studentsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.subjects.map(function (sub) {
            return "".concat(sub.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this);
    });
  } else {
    rows = subjectsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.students.map(function (student) {
            return "".concat(student.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTable, {
      className: classes.table,
      "aria-label": "customized table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: data.toUpperCase()
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 47
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: rows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(CustomTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_Table_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles];
});

_c = CustomTable;

var _c;

$RefreshReg$(_c, "CustomTable");

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


/***/ }),

/***/ "./src/components/Table/Table.styles.js":
/*!**********************************************!*\
  !*** ./src/components/Table/Table.styles.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledTableCell": function() { return /* binding */ StyledTableCell; },
/* harmony export */   "StyledTableRow": function() { return /* binding */ StyledTableRow; },
/* harmony export */   "useStyles": function() { return /* binding */ useStyles; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var StyledTableCell = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.withStyles)(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__.default);
var StyledTableRow = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.withStyles)(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__.default);
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  table: {
    minWidth: 700
  }
});


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


/***/ }),

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
/* harmony import */ var _Table_CustomTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table/CustomTable */ "./src/components/Table/CustomTable.jsx");
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_CustomTable__WEBPACK_IMPORTED_MODULE_2__.default, {
        studentsData: students
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvQ3VzdG9tVGFibGUuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvSG9tZVNjcmVlbi5qc3giXSwibmFtZXMiOlsiQ3VzdG9tVGFibGUiLCJzdHVkZW50c0RhdGEiLCJzdWJqZWN0c0RhdGEiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGVhZGVyRGF0YSIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsInJvd3MiLCJtYXAiLCJyb3ciLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsImRhdGVPZkJpcnRoIiwic3ViamVjdHMiLCJzdWIiLCJpZCIsInN0dWRlbnRzIiwic3R1ZGVudCIsIlBhcGVyIiwidGFibGUiLCJkYXRhIiwiaSIsInRvVXBwZXJDYXNlIiwiU3R5bGVkVGFibGVDZWxsIiwid2l0aFN0eWxlcyIsInRoZW1lIiwiaGVhZCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsImNvbG9yIiwid2hpdGUiLCJib2R5IiwiZm9udFNpemUiLCJUYWJsZUNlbGwiLCJTdHlsZWRUYWJsZVJvdyIsInJvb3QiLCJhY3Rpb24iLCJob3ZlciIsIlRhYmxlUm93IiwibWFrZVN0eWxlcyIsIm1pbldpZHRoIiwiSG9tZVNjcmVlbiIsInVzZVF1ZXJ5IiwiU1RVREVOVFMiLCJsb2FkaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFdBQVQsT0FBbUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQ2hFLE1BQU1DLE9B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LEtBREQ7O0FBRXJCLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFIVSxNQUtkL0IsUUFMYyxHQUtGSSxJQUxFLENBS2RKLFFBTGM7QUFPckIsc0JBQ0ksOERBQUMsd0RBQUQ7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBSyxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSSw4REFBQyx1REFBRDtBQUFhLG9CQUFZLEVBQUVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQWpCRDs7R0FBTTJCLFU7VUFDNkJDLG9EOzs7S0FEN0JELFU7QUFtQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODA4ZGQ2YjBkMjIzZDU3MDgyOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQge1N0eWxlZFRhYmxlQ2VsbCwgU3R5bGVkVGFibGVSb3csIHVzZVN0eWxlc30gZnJvbSBcIi4vVGFibGUuc3R5bGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tVGFibGUoe3N0dWRlbnRzRGF0YSwgc3ViamVjdHNEYXRhfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXMoc3R1ZGVudHNEYXRhWzBdKS5zbGljZSgyKTtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGlmIChzdHVkZW50c0RhdGEpe1xyXG4gICAgcm93cyA9IHN0dWRlbnRzRGF0YS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnBob25lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5lbWFpbH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZGF0ZU9mQmlydGh9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN1YmplY3RzLm1hcChzdWIgPT4gYCR7c3ViLm5hbWV9LCBgKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb3dzID0gc3ViamVjdHNEYXRhLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3R1ZGVudHMubWFwKHN0dWRlbnQgPT4gYCR7c3R1ZGVudC5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxDdXN0b21UYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEubWFwKChkYXRhLCBpKSA9PiA8U3R5bGVkVGFibGVDZWxsIGtleT17aX0+e2RhdGEudG9VcHBlckNhc2UoKX08L1N0eWxlZFRhYmxlQ2VsbD4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgICB7Lyp7c3ViamVjdHNEYXRhPyBzdHVkZW50VGFibGVSb3dzOiBudWxsfSovfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L0N1c3RvbVRhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7bWFrZVN0eWxlcywgd2l0aFN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaGVhZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGJvZHk6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG59KSkoVGFibGVDZWxsKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpKFRhYmxlUm93KTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNzAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHtTdHlsZWRUYWJsZUNlbGwsU3R5bGVkVGFibGVSb3csIHVzZVN0eWxlc30iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0JveCwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEN1c3RvbVRhYmxlIGZyb20gXCIuLi9UYWJsZS9DdXN0b21UYWJsZVwiO1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtTVFVERU5UU30gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvcXVlcmllc1wiO1xyXG5cclxuY29uc3QgSG9tZVNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeShTVFVERU5UUyk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyISE8L3A+O1xyXG5cclxuICAgIGNvbnN0IHtzdHVkZW50c30gPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJveCBweT17NX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlNUVURFTlQgVEFCTEU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbVRhYmxlIHN0dWRlbnRzRGF0YT17c3R1ZGVudHN9Lz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVNjcmVlbjsiXSwic291cmNlUm9vdCI6IiJ9