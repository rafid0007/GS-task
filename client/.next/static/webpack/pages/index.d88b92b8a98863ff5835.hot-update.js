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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3R1ZGVudFRhYmxlL1N0dWRlbnRUYWJsZS5qc3giXSwibmFtZXMiOlsiU3R1ZGVudFRhYmxlIiwic3R1ZGVudHNEYXRhIiwic3ViamVjdHNEYXRhIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImhlYWRlckRhdGEiLCJPYmplY3QiLCJrZXlzIiwic2xpY2UiLCJyb3dzIiwibWFwIiwicm93IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkYXRlT2ZCaXJ0aCIsInN1YmplY3RzIiwic3ViIiwiaWQiLCJzdHVkZW50cyIsInN0dWRlbnQiLCJQYXBlciIsInRhYmxlIiwiZGF0YSIsImkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsT0FBb0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQ2pFLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVMsRUFBekI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixZQUFZLENBQUMsQ0FBRCxDQUF4QixFQUE2Qk8sS0FBN0IsQ0FBbUMsQ0FBbkMsQ0FBbkI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFJUixZQUFKLEVBQWlCO0FBQ2ZRLFFBQUksR0FBR1IsWUFBWSxDQUFDUyxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSwwQkFDbkIsOERBQUMsZ0VBQUQ7QUFBQSxnQ0FDRSw4REFBQyxpRUFBRDtBQUFpQixtQkFBUyxFQUFDLElBQTNCO0FBQWdDLGVBQUssRUFBQyxLQUF0QztBQUFBLG9CQUE2Q0EsR0FBRyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBQSxvQkFBa0JELEdBQUcsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLGlFQUFEO0FBQUEsb0JBQWtCRixHQUFHLENBQUNHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFBLG9CQUFrQkgsR0FBRyxDQUFDSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQSxvQkFBa0JKLEdBQUcsQ0FBQ0ssUUFBSixDQUFhTixHQUFiLENBQWlCLFVBQUFPLEdBQUc7QUFBQSw2QkFBT0EsR0FBRyxDQUFDTCxJQUFYO0FBQUEsV0FBcEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLFNBQXFCRCxHQUFHLENBQUNPLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUI7QUFBQSxLQUFwQixDQUFQO0FBU0QsR0FWRCxNQVVPO0FBQ0xULFFBQUksR0FBR1AsWUFBWSxDQUFDUSxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSwwQkFDbkIsOERBQUMsZ0VBQUQ7QUFBQSxnQ0FDRSw4REFBQyxpRUFBRDtBQUFpQixtQkFBUyxFQUFDLElBQTNCO0FBQWdDLGVBQUssRUFBQyxLQUF0QztBQUFBLG9CQUE2Q0EsR0FBRyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBQSxvQkFBa0JELEdBQUcsQ0FBQ1EsUUFBSixDQUFhVCxHQUFiLENBQWlCLFVBQUFVLE9BQU87QUFBQSw2QkFBT0EsT0FBTyxDQUFDUixJQUFmO0FBQUEsV0FBeEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQXFCRCxHQUFHLENBQUNPLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUI7QUFBQSxLQUFwQixDQUFQO0FBTUQ7O0FBRUQsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFRyw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRWxCLE9BQU8sQ0FBQ21CLEtBQTFCO0FBQWlDLG9CQUFXLGtCQUE1QztBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxvQkFFUWpCLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNhLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUFhLDhEQUFDLGlFQUFEO0FBQUEsd0JBQTBCRCxJQUFJLENBQUNFLFdBQUw7QUFBMUIsZUFBc0JELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWI7QUFBQSxXQUFmO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFLDhEQUFDLGdFQUFEO0FBQUEsa0JBQ0dmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7R0F4Q3VCVCxZO1VBQ05JLDJEOzs7S0FETUosWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODhiOTJiOGE5ODg2M2ZmNTgzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCB7U3R5bGVkVGFibGVDZWxsLCBTdHlsZWRUYWJsZVJvdywgdXNlU3R5bGVzfSBmcm9tIFwiLi9TdHVkZW50VGFibGUuc3R5bGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudFRhYmxlKHtzdHVkZW50c0RhdGEsIHN1YmplY3RzRGF0YX0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN0dWRlbnRzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgbGV0IHJvd3MgPSBbXTtcclxuICBpZiAoc3R1ZGVudHNEYXRhKXtcclxuICAgIHJvd3MgPSBzdHVkZW50c0RhdGEubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e3Jvdy5uYW1lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5waG9uZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZW1haWx9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmRhdGVPZkJpcnRofTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5zdWJqZWN0cy5tYXAoc3ViID0+IGAke3N1Yi5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm93cyA9IHN1YmplY3RzRGF0YS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN0dWRlbnRzLm1hcChzdHVkZW50ID0+IGAke3N0dWRlbnQubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhLm1hcCgoZGF0YSwgaSkgPT4gPFN0eWxlZFRhYmxlQ2VsbCBrZXk9e2l9PntkYXRhLnRvVXBwZXJDYXNlKCl9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgICAgey8qe3N1YmplY3RzRGF0YT8gc3R1ZGVudFRhYmxlUm93czogbnVsbH0qL31cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9