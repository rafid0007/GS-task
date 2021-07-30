self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/StudentTable.jsx":
/*!***********************************************!*\
  !*** ./src/components/Table/StudentTable.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StudentTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentTable.styles */ "./src/components/Table/StudentTable.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\Table\\StudentTable.jsx",
    _s = $RefreshSig$();









function StudentTable(_ref) {
  _s();

  var _this = this;

  var studentsData = _ref.studentsData,
      subjectsData = _ref.subjectsData;
  var classes = (0,_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  var headerData = Object.keys(studentsData[0]).slice(2);
  var rows = [];

  if (studentsData) {
    rows = studentsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "customized table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
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

_s(StudentTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles];
});

_c = StudentTable;

var _c;

$RefreshReg$(_c, "StudentTable");

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

/***/ "./src/components/Table/StudentTable.styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Table/StudentTable.styles.js ***!
  \*****************************************************/
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
/* harmony import */ var _Table_StudentTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table/StudentTable */ "./src/components/Table/StudentTable.jsx");
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_StudentTable__WEBPACK_IMPORTED_MODULE_2__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvU3R1ZGVudFRhYmxlLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvU3R1ZGVudFRhYmxlLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2NyZWVucy9Ib21lU2NyZWVuLmpzeCJdLCJuYW1lcyI6WyJTdHVkZW50VGFibGUiLCJzdHVkZW50c0RhdGEiLCJzdWJqZWN0c0RhdGEiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGVhZGVyRGF0YSIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsInJvd3MiLCJtYXAiLCJyb3ciLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsImRhdGVPZkJpcnRoIiwic3ViamVjdHMiLCJzdWIiLCJpZCIsInN0dWRlbnRzIiwic3R1ZGVudCIsIlBhcGVyIiwidGFibGUiLCJkYXRhIiwiaSIsInRvVXBwZXJDYXNlIiwiU3R5bGVkVGFibGVDZWxsIiwid2l0aFN0eWxlcyIsInRoZW1lIiwiaGVhZCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsImNvbG9yIiwid2hpdGUiLCJib2R5IiwiZm9udFNpemUiLCJUYWJsZUNlbGwiLCJTdHlsZWRUYWJsZVJvdyIsInJvb3QiLCJhY3Rpb24iLCJob3ZlciIsIlRhYmxlUm93IiwibWFrZVN0eWxlcyIsIm1pbldpZHRoIiwiSG9tZVNjcmVlbiIsInVzZVF1ZXJ5IiwiU1RVREVOVFMiLCJsb2FkaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxZQUFULE9BQW9EO0FBQUE7O0FBQUE7O0FBQUEsTUFBN0JDLFlBQTZCLFFBQTdCQSxZQUE2QjtBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUNq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LEtBREQsYUFDQ0EsS0FERDs7QUFFckIsTUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUhVLE1BS2QvQixRQUxjLEdBS0ZJLElBTEUsQ0FLZEosUUFMYztBQU9yQixzQkFDSSw4REFBQyx3REFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQSw2QkFDSSw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFLLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJLDhEQUFDLHdEQUFEO0FBQWMsb0JBQVksRUFBRUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBakJEOztHQUFNMkIsVTtVQUM2QkMsb0Q7OztLQUQ3QkQsVTtBQW1CTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzZjNGIxZDgwNmFkZjAzNDNiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCB7U3R5bGVkVGFibGVDZWxsLCBTdHlsZWRUYWJsZVJvdywgdXNlU3R5bGVzfSBmcm9tIFwiLi9TdHVkZW50VGFibGUuc3R5bGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudFRhYmxlKHtzdHVkZW50c0RhdGEsIHN1YmplY3RzRGF0YX0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN0dWRlbnRzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgbGV0IHJvd3MgPSBbXTtcclxuICBpZiAoc3R1ZGVudHNEYXRhKXtcclxuICAgIHJvd3MgPSBzdHVkZW50c0RhdGEubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e3Jvdy5uYW1lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5waG9uZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZW1haWx9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmRhdGVPZkJpcnRofTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5zdWJqZWN0cy5tYXAoc3ViID0+IGAke3N1Yi5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm93cyA9IHN1YmplY3RzRGF0YS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN0dWRlbnRzLm1hcChzdHVkZW50ID0+IGAke3N0dWRlbnQubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhLm1hcCgoZGF0YSwgaSkgPT4gPFN0eWxlZFRhYmxlQ2VsbCBrZXk9e2l9PntkYXRhLnRvVXBwZXJDYXNlKCl9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgICAgey8qe3N1YmplY3RzRGF0YT8gc3R1ZGVudFRhYmxlUm93czogbnVsbH0qL31cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQge21ha2VTdHlsZXMsIHdpdGhTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGhlYWQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxufSkpKFRhYmxlQ2VsbCk7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKShUYWJsZVJvdyk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWluV2lkdGg6IDcwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7U3R5bGVkVGFibGVDZWxsLFN0eWxlZFRhYmxlUm93LCB1c2VTdHlsZXN9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCb3gsIENvbnRhaW5lciwgVHlwb2dyYXBoeX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTdHVkZW50VGFibGUgZnJvbSBcIi4uL1RhYmxlL1N0dWRlbnRUYWJsZVwiO1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtTVFVERU5UU30gZnJvbSBcIi4uLy4uL3F1ZXJpZXMvcXVlcmllc1wiO1xyXG5cclxuY29uc3QgSG9tZVNjcmVlbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhLCBsb2FkaW5nLCBlcnJvcn0gPSB1c2VRdWVyeShTVFVERU5UUyk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgZ2V0dGluZyBkYXRhIGZyb20gc2VydmVyISE8L3A+O1xyXG5cclxuICAgIGNvbnN0IHtzdHVkZW50c30gPSBkYXRhO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEJveCBweT17NX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlNUVURFTlQgVEFCTEU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPFN0dWRlbnRUYWJsZSBzdHVkZW50c0RhdGE9e3N0dWRlbnRzfS8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVTY3JlZW47Il0sInNvdXJjZVJvb3QiOiIifQ==