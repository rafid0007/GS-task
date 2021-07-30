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
  console.log("studentsData", studentsData);
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
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.subjects.map(function (sub) {
            return "".concat(sub.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
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
          lineNumber: 31,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.students.map(function (student) {
            return "".concat(student.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
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
              lineNumber: 44,
              columnNumber: 23
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: rows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvQ3VzdG9tVGFibGUuanN4Il0sIm5hbWVzIjpbIkN1c3RvbVRhYmxlIiwic3R1ZGVudHNEYXRhIiwic3ViamVjdHNEYXRhIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3dzIiwiaGVhZGVyRGF0YSIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsIm1hcCIsInJvdyIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwiZGF0ZU9mQmlydGgiLCJzdWJqZWN0cyIsInN1YiIsImlkIiwic3R1ZGVudHMiLCJzdHVkZW50IiwiUGFwZXIiLCJ0YWJsZSIsImRhdGEiLCJpIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFdBQVQsT0FBbUQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTJCSCxZQUEzQjtBQUNGLE1BQU1JLE9BQU8sR0FBR0Msd0RBQVMsRUFBekI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxNQUFJUCxZQUFKLEVBQWlCO0FBQ2JPLGNBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULFlBQVksQ0FBQyxDQUFELENBQXhCLEVBQTZCVSxLQUE3QixDQUFtQyxDQUFuQyxDQUFiO0FBQ0ZKLFFBQUksR0FBR04sWUFBWSxDQUFDVyxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSwwQkFDbkIsOERBQUMseURBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFpQixtQkFBUyxFQUFDLElBQTNCO0FBQWdDLGVBQUssRUFBQyxLQUF0QztBQUFBLG9CQUE2Q0EsR0FBRyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxvQkFBa0JELEdBQUcsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQUEsb0JBQWtCRixHQUFHLENBQUNHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSw4REFBQywwREFBRDtBQUFBLG9CQUFrQkgsR0FBRyxDQUFDSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UsOERBQUMsMERBQUQ7QUFBQSxvQkFBa0JKLEdBQUcsQ0FBQ0ssUUFBSixDQUFhTixHQUFiLENBQWlCLFVBQUFPLEdBQUc7QUFBQSw2QkFBT0EsR0FBRyxDQUFDTCxJQUFYO0FBQUEsV0FBcEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLFNBQXFCRCxHQUFHLENBQUNPLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUI7QUFBQSxLQUFwQixDQUFQO0FBU0QsR0FYRCxNQVdPO0FBQ0haLGNBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLFlBQVksQ0FBQyxDQUFELENBQXhCLEVBQTZCUyxLQUE3QixDQUFtQyxDQUFuQyxDQUFiO0FBQ0ZKLFFBQUksR0FBR0wsWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSwwQkFDbkIsOERBQUMseURBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFpQixtQkFBUyxFQUFDLElBQTNCO0FBQWdDLGVBQUssRUFBQyxLQUF0QztBQUFBLG9CQUE2Q0EsR0FBRyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQSxvQkFBa0JELEdBQUcsQ0FBQ1EsUUFBSixDQUFhVCxHQUFiLENBQWlCLFVBQUFVLE9BQU87QUFBQSw2QkFBT0EsT0FBTyxDQUFDUixJQUFmO0FBQUEsV0FBeEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLFNBQXFCRCxHQUFHLENBQUNPLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUI7QUFBQSxLQUFwQixDQUFQO0FBTUQ7O0FBRUQsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFRyw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyxXQUFEO0FBQWEsZUFBUyxFQUFFbEIsT0FBTyxDQUFDbUIsS0FBaEM7QUFBdUMsb0JBQVcsa0JBQWxEO0FBQUEsOEJBQ0UsOERBQUMsZ0VBQUQ7QUFBQSwrQkFDRSw4REFBQywrREFBRDtBQUFBLG9CQUVRaEIsVUFBVSxJQUFJQSxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDYSxJQUFELEVBQU9DLENBQVA7QUFBQSxnQ0FDekIsOERBQUMsMERBQUQ7QUFBQSx3QkFBMEJELElBQUksQ0FBQ0UsV0FBTDtBQUExQixlQUFzQkQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEeUI7QUFBQSxXQUFmO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxnRUFBRDtBQUFBLGtCQUNHbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQTVDdUJQLFc7VUFFTk0sb0Q7OztLQUZNTixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzZTU2MGQ3NTM2ZGRhNWRkMGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHtTdHlsZWRUYWJsZUNlbGwsIFN0eWxlZFRhYmxlUm93LCB1c2VTdHlsZXN9IGZyb20gXCIuL1RhYmxlLnN0eWxlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbVRhYmxlKHtzdHVkZW50c0RhdGEsIHN1YmplY3RzRGF0YX0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3R1ZGVudHNEYXRhXCIsc3R1ZGVudHNEYXRhKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGxldCBoZWFkZXJEYXRhID0gbnVsbDtcclxuICBpZiAoc3R1ZGVudHNEYXRhKXtcclxuICAgICAgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN0dWRlbnRzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgICByb3dzID0gc3R1ZGVudHNEYXRhLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cucGhvbmV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmVtYWlsfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5kYXRlT2ZCaXJ0aH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3ViamVjdHMubWFwKHN1YiA9PiBgJHtzdWIubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyRGF0YSA9IE9iamVjdC5rZXlzKHN1YmplY3RzRGF0YVswXSkuc2xpY2UoMik7XHJcbiAgICByb3dzID0gc3ViamVjdHNEYXRhLm1hcChyb3cgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuc3R1ZGVudHMubWFwKHN0dWRlbnQgPT4gYCR7c3R1ZGVudC5uYW1lfSwgYCl9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxDdXN0b21UYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgJiYgaGVhZGVyRGF0YS5tYXAoKGRhdGEsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGtleT17aX0+e2RhdGEudG9VcHBlckNhc2UoKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L0N1c3RvbVRhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=