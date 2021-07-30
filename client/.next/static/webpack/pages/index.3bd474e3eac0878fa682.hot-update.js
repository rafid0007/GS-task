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
  var rows = [];
  var headerData = null;

  if (studentsData) {
    console.log();
    headerData = Object.keys(studentsData[0]).slice(2);
    rows = studentsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.subjects.map(function (sub) {
            return "".concat(sub.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this);
    });
  } else {
    headerData = Object.keys(subjectsData[0]).slice(2);
    rows = subjectsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.students.map(function (student) {
            return "".concat(student.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
          children: headerData && headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: data.toUpperCase()
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 23
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: rows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvQ3VzdG9tVGFibGUuanN4Il0sIm5hbWVzIjpbIkN1c3RvbVRhYmxlIiwic3R1ZGVudHNEYXRhIiwic3ViamVjdHNEYXRhIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvd3MiLCJoZWFkZXJEYXRhIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsIm1hcCIsInJvdyIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwiZGF0ZU9mQmlydGgiLCJzdWJqZWN0cyIsInN1YiIsImlkIiwic3R1ZGVudHMiLCJzdHVkZW50IiwiUGFwZXIiLCJ0YWJsZSIsImRhdGEiLCJpIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFdBQVQsT0FBbUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBRWhFLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVMsRUFBekI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxNQUFJTCxZQUFKLEVBQWlCO0FBQ2JNLFdBQU8sQ0FBQ0MsR0FBUjtBQUNBRixjQUFVLEdBQUdHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxZQUFZLENBQUMsQ0FBRCxDQUF4QixFQUE2QlUsS0FBN0IsQ0FBbUMsQ0FBbkMsQ0FBYjtBQUNGTixRQUFJLEdBQUdKLFlBQVksQ0FBQ1csR0FBYixDQUFpQixVQUFBQyxHQUFHO0FBQUEsMEJBQ25CLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMERBQUQ7QUFBaUIsbUJBQVMsRUFBQyxJQUEzQjtBQUFnQyxlQUFLLEVBQUMsS0FBdEM7QUFBQSxvQkFBNkNBLEdBQUcsQ0FBQ0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsb0JBQWtCRCxHQUFHLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBLG9CQUFrQkYsR0FBRyxDQUFDRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUUsOERBQUMsMERBQUQ7QUFBQSxvQkFBa0JILEdBQUcsQ0FBQ0k7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFLDhEQUFDLDBEQUFEO0FBQUEsb0JBQWtCSixHQUFHLENBQUNLLFFBQUosQ0FBYU4sR0FBYixDQUFpQixVQUFBTyxHQUFHO0FBQUEsNkJBQU9BLEdBQUcsQ0FBQ0wsSUFBWDtBQUFBLFdBQXBCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQSxTQUFxQkQsR0FBRyxDQUFDTyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1CO0FBQUEsS0FBcEIsQ0FBUDtBQVNELEdBWkQsTUFZTztBQUNIZCxjQUFVLEdBQUdHLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixZQUFZLENBQUMsQ0FBRCxDQUF4QixFQUE2QlMsS0FBN0IsQ0FBbUMsQ0FBbkMsQ0FBYjtBQUNGTixRQUFJLEdBQUdILFlBQVksQ0FBQ1UsR0FBYixDQUFpQixVQUFBQyxHQUFHO0FBQUEsMEJBQ25CLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMERBQUQ7QUFBaUIsbUJBQVMsRUFBQyxJQUEzQjtBQUFnQyxlQUFLLEVBQUMsS0FBdEM7QUFBQSxvQkFBNkNBLEdBQUcsQ0FBQ0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsb0JBQWtCRCxHQUFHLENBQUNRLFFBQUosQ0FBYVQsR0FBYixDQUFpQixVQUFBVSxPQUFPO0FBQUEsNkJBQU9BLE9BQU8sQ0FBQ1IsSUFBZjtBQUFBLFdBQXhCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxTQUFxQkQsR0FBRyxDQUFDTyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1CO0FBQUEsS0FBcEIsQ0FBUDtBQU1EOztBQUVELHNCQUNFLDhEQUFDLHFFQUFEO0FBQWdCLGFBQVMsRUFBRUcsNERBQTNCO0FBQUEsMkJBQ0UsOERBQUMsV0FBRDtBQUFhLGVBQVMsRUFBRXBCLE9BQU8sQ0FBQ3FCLEtBQWhDO0FBQXVDLG9CQUFXLGtCQUFsRDtBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxvQkFFUWxCLFVBQVUsSUFBSUEsVUFBVSxDQUFDTSxHQUFYLENBQWUsVUFBQ2EsSUFBRCxFQUFPQyxDQUFQO0FBQUEsZ0NBQ3pCLDhEQUFDLDBEQUFEO0FBQUEsd0JBQTBCRCxJQUFJLENBQUNFLFdBQUw7QUFBMUIsZUFBc0JELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHlCO0FBQUEsV0FBZjtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsOERBQUMsZ0VBQUQ7QUFBQSxrQkFDR3JCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0E3Q3VCTCxXO1VBRU5JLG9EOzs7S0FGTUosVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYmQ0NzRlM2VhYzA4NzhmYTY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCB7U3R5bGVkVGFibGVDZWxsLCBTdHlsZWRUYWJsZVJvdywgdXNlU3R5bGVzfSBmcm9tIFwiLi9UYWJsZS5zdHlsZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21UYWJsZSh7c3R1ZGVudHNEYXRhLCBzdWJqZWN0c0RhdGF9KSB7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGxldCBoZWFkZXJEYXRhID0gbnVsbDtcclxuICBpZiAoc3R1ZGVudHNEYXRhKXtcclxuICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXMoc3R1ZGVudHNEYXRhWzBdKS5zbGljZSgyKTtcclxuICAgIHJvd3MgPSBzdHVkZW50c0RhdGEubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e3Jvdy5uYW1lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5waG9uZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZW1haWx9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmRhdGVPZkJpcnRofTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5zdWJqZWN0cy5tYXAoc3ViID0+IGAke3N1Yi5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXMoc3ViamVjdHNEYXRhWzBdKS5zbGljZSgyKTtcclxuICAgIHJvd3MgPSBzdWJqZWN0c0RhdGEubWFwKHJvdyA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e3Jvdy5uYW1lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5zdHVkZW50cy5tYXAoc3R1ZGVudCA9PiBgJHtzdHVkZW50Lm5hbWV9LCBgKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPEN1c3RvbVRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyRGF0YSAmJiBoZWFkZXJEYXRhLm1hcCgoZGF0YSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwga2V5PXtpfT57ZGF0YS50b1VwcGVyQ2FzZSgpfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvQ3VzdG9tVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==