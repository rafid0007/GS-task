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
    headerData = Object.keys(studentsData[0]).slice(2);
    rows = studentsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.subjects.map(function (sub) {
            return "".concat(sub.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
          lineNumber: 30,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.students.map(function (student) {
            return "".concat(student.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
              lineNumber: 43,
              columnNumber: 23
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: rows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvQ3VzdG9tVGFibGUuanN4Il0sIm5hbWVzIjpbIkN1c3RvbVRhYmxlIiwic3R1ZGVudHNEYXRhIiwic3ViamVjdHNEYXRhIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvd3MiLCJoZWFkZXJEYXRhIiwiT2JqZWN0Iiwia2V5cyIsInNsaWNlIiwibWFwIiwicm93IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkYXRlT2ZCaXJ0aCIsInN1YmplY3RzIiwic3ViIiwiaWQiLCJzdHVkZW50cyIsInN0dWRlbnQiLCJQYXBlciIsInRhYmxlIiwiZGF0YSIsImkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsV0FBVCxPQUFtRDtBQUFBOztBQUFBOztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7QUFDaEUsTUFBTUMsT0FBTyxHQUFHQyx3REFBUyxFQUF6QjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLE1BQUlMLFlBQUosRUFBaUI7QUFDYkssY0FBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsWUFBWSxDQUFDLENBQUQsQ0FBeEIsRUFBNkJRLEtBQTdCLENBQW1DLENBQW5DLENBQWI7QUFDRkosUUFBSSxHQUFHSixZQUFZLENBQUNTLEdBQWIsQ0FBaUIsVUFBQUMsR0FBRztBQUFBLDBCQUNuQiw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLDBEQUFEO0FBQWlCLG1CQUFTLEVBQUMsSUFBM0I7QUFBZ0MsZUFBSyxFQUFDLEtBQXRDO0FBQUEsb0JBQTZDQSxHQUFHLENBQUNDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLG9CQUFrQkQsR0FBRyxDQUFDRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQSxvQkFBa0JGLEdBQUcsQ0FBQ0c7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFLDhEQUFDLDBEQUFEO0FBQUEsb0JBQWtCSCxHQUFHLENBQUNJO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRSw4REFBQywwREFBRDtBQUFBLG9CQUFrQkosR0FBRyxDQUFDSyxRQUFKLENBQWFOLEdBQWIsQ0FBaUIsVUFBQU8sR0FBRztBQUFBLDZCQUFPQSxHQUFHLENBQUNMLElBQVg7QUFBQSxXQUFwQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsU0FBcUJELEdBQUcsQ0FBQ08sRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQjtBQUFBLEtBQXBCLENBQVA7QUFTRCxHQVhELE1BV087QUFDSFosY0FBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sWUFBWSxDQUFDLENBQUQsQ0FBeEIsRUFBNkJPLEtBQTdCLENBQW1DLENBQW5DLENBQWI7QUFDRkosUUFBSSxHQUFHSCxZQUFZLENBQUNRLEdBQWIsQ0FBaUIsVUFBQUMsR0FBRztBQUFBLDBCQUNuQiw4REFBQyx5REFBRDtBQUFBLGdDQUNFLDhEQUFDLDBEQUFEO0FBQWlCLG1CQUFTLEVBQUMsSUFBM0I7QUFBZ0MsZUFBSyxFQUFDLEtBQXRDO0FBQUEsb0JBQTZDQSxHQUFHLENBQUNDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLG9CQUFrQkQsR0FBRyxDQUFDUSxRQUFKLENBQWFULEdBQWIsQ0FBaUIsVUFBQVUsT0FBTztBQUFBLDZCQUFPQSxPQUFPLENBQUNSLElBQWY7QUFBQSxXQUF4QjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsU0FBcUJELEdBQUcsQ0FBQ08sRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURtQjtBQUFBLEtBQXBCLENBQVA7QUFNRDs7QUFFRCxzQkFDRSw4REFBQyxxRUFBRDtBQUFnQixhQUFTLEVBQUVHLDREQUEzQjtBQUFBLDJCQUNFLDhEQUFDLFdBQUQ7QUFBYSxlQUFTLEVBQUVsQixPQUFPLENBQUNtQixLQUFoQztBQUF1QyxvQkFBVyxrQkFBbEQ7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsb0JBRVFoQixVQUFVLElBQUlBLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNhLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUN6Qiw4REFBQywwREFBRDtBQUFBLHdCQUEwQkQsSUFBSSxDQUFDRSxXQUFMO0FBQTFCLGVBQXNCRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR5QjtBQUFBLFdBQWY7QUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFLDhEQUFDLGdFQUFEO0FBQUEsa0JBQ0duQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBM0N1QkwsVztVQUNOSSxvRDs7O0tBRE1KLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDMyOGM1M2Y2YWUyYTU4NmUxMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQge1N0eWxlZFRhYmxlQ2VsbCwgU3R5bGVkVGFibGVSb3csIHVzZVN0eWxlc30gZnJvbSBcIi4vVGFibGUuc3R5bGVzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tVGFibGUoe3N0dWRlbnRzRGF0YSwgc3ViamVjdHNEYXRhfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGxldCBoZWFkZXJEYXRhID0gbnVsbDtcclxuICBpZiAoc3R1ZGVudHNEYXRhKXtcclxuICAgICAgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN0dWRlbnRzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgICByb3dzID0gc3R1ZGVudHNEYXRhLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cucGhvbmV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmVtYWlsfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5kYXRlT2ZCaXJ0aH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3ViamVjdHMubWFwKHN1YiA9PiBgJHtzdWIubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN1YmplY3RzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgICByb3dzID0gc3ViamVjdHNEYXRhLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3R1ZGVudHMubWFwKHN0dWRlbnQgPT4gYCR7c3R1ZGVudC5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxDdXN0b21UYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgJiYgaGVhZGVyRGF0YS5tYXAoKGRhdGEsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGtleT17aX0+e2RhdGEudG9VcHBlckNhc2UoKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L0N1c3RvbVRhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=