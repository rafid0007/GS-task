self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/Table.jsx":
/*!****************************************!*\
  !*** ./src/components/Table/Table.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CustomizedTables; }
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
/* harmony import */ var _table_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.styles */ "./src/components/Table/table.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\Table\\Table.jsx",
    _s = $RefreshSig$();









function CustomizedTables(_ref) {
  _s();

  var _this = this;

  var tableData = _ref.tableData;
  var classes = (0,_table_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  var headerData = Object.keys(tableData[0]).slice(2);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "customized table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: data.toUpperCase()
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 47
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: tableData.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.dateOfBirth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.subjects.map(function (sub) {
                return "".concat(sub.name, ", ");
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, row.id, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(CustomizedTables, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_table_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles];
});

_c = CustomizedTables;

var _c;

$RefreshReg$(_c, "CustomizedTables");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4Il0sIm5hbWVzIjpbIkN1c3RvbWl6ZWRUYWJsZXMiLCJ0YWJsZURhdGEiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGVhZGVyRGF0YSIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsIlBhcGVyIiwidGFibGUiLCJtYXAiLCJkYXRhIiwiaSIsInRvVXBwZXJDYXNlIiwicm93IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkYXRlT2ZCaXJ0aCIsInN1YmplY3RzIiwic3ViIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxnQkFBVCxPQUF1QztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUNwRCxNQUFNQyxPQUFPLEdBQUdDLHdEQUFTLEVBQXpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsU0FBUyxDQUFDLENBQUQsQ0FBckIsRUFBMEJNLEtBQTFCLENBQWdDLENBQWhDLENBQW5CO0FBRUEsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFQyw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRU4sT0FBTyxDQUFDTyxLQUExQjtBQUFpQyxvQkFBVyxrQkFBNUM7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBLCtCQUNFLDhEQUFDLCtEQUFEO0FBQUEsb0JBRVFMLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUFhLDhEQUFDLDBEQUFEO0FBQUEsd0JBQTBCRCxJQUFJLENBQUNFLFdBQUw7QUFBMUIsZUFBc0JELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWI7QUFBQSxXQUFmO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFLDhEQUFDLGdFQUFEO0FBQUEsa0JBQ0dYLFNBQVMsQ0FBQ1MsR0FBVixDQUFlLFVBQUFJLEdBQUc7QUFBQSw4QkFDakIsOERBQUMseURBQUQ7QUFBQSxvQ0FDRSw4REFBQywwREFBRDtBQUFpQix1QkFBUyxFQUFDLElBQTNCO0FBQWdDLG1CQUFLLEVBQUMsS0FBdEM7QUFBQSx3QkFBNkNBLEdBQUcsQ0FBQ0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsd0JBQWtCRCxHQUFHLENBQUNFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBLHdCQUFrQkYsR0FBRyxDQUFDRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUUsOERBQUMsMERBQUQ7QUFBQSx3QkFBa0JILEdBQUcsQ0FBQ0k7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFLDhEQUFDLDBEQUFEO0FBQUEsd0JBQWtCSixHQUFHLENBQUNLLFFBQUosQ0FBYVQsR0FBYixDQUFpQixVQUFBVSxHQUFHO0FBQUEsaUNBQU9BLEdBQUcsQ0FBQ0wsSUFBWDtBQUFBLGVBQXBCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQSxhQUFxQkQsR0FBRyxDQUFDTyxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURpQjtBQUFBLFNBQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E1QnVCckIsZ0I7VUFDTkcsb0Q7OztLQURNSCxnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTg5YTg5NjQxNTA4MzIzNzBjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCB7U3R5bGVkVGFibGVDZWxsLCBTdHlsZWRUYWJsZVJvdywgdXNlU3R5bGVzfSBmcm9tIFwiLi90YWJsZS5zdHlsZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkVGFibGVzKHt0YWJsZURhdGF9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGhlYWRlckRhdGEgPSBPYmplY3Qua2V5cyh0YWJsZURhdGFbMF0pLnNsaWNlKDIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhLm1hcCgoZGF0YSwgaSkgPT4gPFN0eWxlZFRhYmxlQ2VsbCBrZXk9e2l9PntkYXRhLnRvVXBwZXJDYXNlKCl9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHt0YWJsZURhdGEubWFwKCByb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cucGhvbmV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmVtYWlsfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5kYXRlT2ZCaXJ0aH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3ViamVjdHMubWFwKHN1YiA9PiBgJHtzdWIubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9