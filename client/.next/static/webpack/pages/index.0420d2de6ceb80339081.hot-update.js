self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/StudentTable/StudentTable.jsx":
/*!******************************************************!*\
  !*** ./src/components/StudentTable/StudentTable.jsx ***!
  \******************************************************/
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
/* harmony import */ var _StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentTable.styles */ "./src/components/StudentTable/StudentTable.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\StudentTable\\StudentTable.jsx",
    _s = $RefreshSig$();









function StudentTable(_ref) {
  _s();

  var _this = this;

  var studentsData = _ref.studentsData,
      SubjectsData = _ref.SubjectsData;
  var classes = (0,_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  var headerData = Object.keys(studentsData[0]).slice(2);
  var StudentTableRows = studentsData.map(function (row) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
        component: "th",
        scope: "row",
        children: row.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
        children: row.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
        children: row.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
        children: row.dateOfBirth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
        children: row.subjects.map(function (sub) {
          return "".concat(sub.name, ", ");
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }, _this)]
    }, row.id, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this);
  }); // const SubjectTableRows = s

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
              lineNumber: 33,
              columnNumber: 47
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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

/***/ "./src/components/StudentTable/StudentTable.styles.js":
/*!************************************************************!*\
  !*** ./src/components/StudentTable/StudentTable.styles.js ***!
  \************************************************************/
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
/* harmony import */ var _StudentTable_StudentTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StudentTable/StudentTable */ "./src/components/StudentTable/StudentTable.jsx");
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_StudentTable__WEBPACK_IMPORTED_MODULE_2__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3R1ZGVudFRhYmxlL1N0dWRlbnRUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0dWRlbnRUYWJsZS9TdHVkZW50VGFibGUuc3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zY3JlZW5zL0hvbWVTY3JlZW4uanN4Il0sIm5hbWVzIjpbIlN0dWRlbnRUYWJsZSIsInN0dWRlbnRzRGF0YSIsIlN1YmplY3RzRGF0YSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJoZWFkZXJEYXRhIiwiT2JqZWN0Iiwia2V5cyIsInNsaWNlIiwiU3R1ZGVudFRhYmxlUm93cyIsIm1hcCIsInJvdyIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwiZGF0ZU9mQmlydGgiLCJzdWJqZWN0cyIsInN1YiIsImlkIiwiUGFwZXIiLCJ0YWJsZSIsImRhdGEiLCJpIiwidG9VcHBlckNhc2UiLCJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29sb3IiLCJ3aGl0ZSIsImJvZHkiLCJmb250U2l6ZSIsIlRhYmxlQ2VsbCIsIlN0eWxlZFRhYmxlUm93Iiwicm9vdCIsImFjdGlvbiIsImhvdmVyIiwiVGFibGVSb3ciLCJtYWtlU3R5bGVzIiwibWluV2lkdGgiLCJIb21lU2NyZWVuIiwidXNlUXVlcnkiLCJTVFVERU5UUyIsImxvYWRpbmciLCJlcnJvciIsInN0dWRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsWUFBVCxPQUFvRDtBQUFBOztBQUFBOztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxZQUFl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QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBakJEOztHQUFNTCxVO1VBQzZCQyxvRDs7O0tBRDdCRCxVO0FBbUJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0MjBkMmRlNmNlYjgwMzM5MDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHtTdHlsZWRUYWJsZUNlbGwsIFN0eWxlZFRhYmxlUm93LCB1c2VTdHlsZXN9IGZyb20gXCIuL1N0dWRlbnRUYWJsZS5zdHlsZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50VGFibGUoe3N0dWRlbnRzRGF0YSwgU3ViamVjdHNEYXRhfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXMoc3R1ZGVudHNEYXRhWzBdKS5zbGljZSgyKTtcclxuXHJcbiAgY29uc3QgU3R1ZGVudFRhYmxlUm93cyA9IHN0dWRlbnRzRGF0YS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnBob25lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5lbWFpbH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZGF0ZU9mQmlydGh9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN1YmplY3RzLm1hcChzdWIgPT4gYCR7c3ViLm5hbWV9LCBgKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICkpO1xyXG5cclxuICAvLyBjb25zdCBTdWJqZWN0VGFibGVSb3dzID0gc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhLm1hcCgoZGF0YSwgaSkgPT4gPFN0eWxlZFRhYmxlQ2VsbCBrZXk9e2l9PntkYXRhLnRvVXBwZXJDYXNlKCl9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHt9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHttYWtlU3R5bGVzLCB3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBoZWFkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgYm9keToge1xyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbn0pKShUYWJsZUNlbGwpO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICAnJjpudGgtb2YtdHlwZShvZGQpJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSkoVGFibGVSb3cpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1pbldpZHRoOiA3MDAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQge1N0eWxlZFRhYmxlQ2VsbCxTdHlsZWRUYWJsZVJvdywgdXNlU3R5bGVzfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3R1ZGVudFRhYmxlIGZyb20gXCIuLi9TdHVkZW50VGFibGUvU3R1ZGVudFRhYmxlXCI7XHJcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQge1NUVURFTlRTfSBmcm9tIFwiLi4vLi4vcXVlcmllcy9xdWVyaWVzXCI7XHJcblxyXG5jb25zdCBIb21lU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGVycm9yfSA9IHVzZVF1ZXJ5KFNUVURFTlRTKTtcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciBnZXR0aW5nIGRhdGEgZnJvbSBzZXJ2ZXIhITwvcD47XHJcblxyXG4gICAgY29uc3Qge3N0dWRlbnRzfSA9IGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Qm94IHB5PXs1fT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+U1RVREVOVCBUQUJMRTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8U3R1ZGVudFRhYmxlIHN0dWRlbnRzRGF0YT17c3R1ZGVudHN9Lz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVNjcmVlbjsiXSwic291cmNlUm9vdCI6IiJ9