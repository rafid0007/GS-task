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












var createData = function createData(name, phone, email, dateOfBirth, subjects) {
  return {
    name: name,
    phone: phone,
    email: email,
    dateOfBirth: dateOfBirth,
    subjects: subjects
  };
};

var rows = [createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]) // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function CustomizedTables(_ref) {
  _s();

  var _this = this;

  var tableData = _ref.tableData;
  var classes = (0,_table_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  console.log(tableData);
  var tableInfo = ["Student Name", "Email", "Phone No.", "Date of Birth", "Subjects"];
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
              lineNumber: 41,
              columnNumber: 47
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: rows.map(function (row, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.dateOfBirth
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: row.subjects
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4Il0sIm5hbWVzIjpbImNyZWF0ZURhdGEiLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsImRhdGVPZkJpcnRoIiwic3ViamVjdHMiLCJyb3dzIiwiQ3VzdG9taXplZFRhYmxlcyIsInRhYmxlRGF0YSIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJjb25zb2xlIiwibG9nIiwidGFibGVJbmZvIiwiaGVhZGVyRGF0YSIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsIlBhcGVyIiwidGFibGUiLCJtYXAiLCJkYXRhIiwiaSIsInRvVXBwZXJDYXNlIiwicm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsS0FBZCxFQUFxQkMsV0FBckIsRUFBa0NDLFFBQWxDLEVBQStDO0FBQ2hFLFNBQU87QUFBRUosUUFBSSxFQUFKQSxJQUFGO0FBQVFDLFNBQUssRUFBTEEsS0FBUjtBQUFlQyxTQUFLLEVBQUxBLEtBQWY7QUFBc0JDLGVBQVcsRUFBWEEsV0FBdEI7QUFBbUNDLFlBQVEsRUFBUkE7QUFBbkMsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsSUFBSSxHQUFHLENBQ1hOLFVBQVUsQ0FBQyxlQUFELEVBQWtCLDBCQUFsQixFQUE4QyxhQUE5QyxFQUE2RCxVQUE3RCxFQUF5RSxDQUFDLGlCQUFELENBQXpFLENBREMsRUFFWEEsVUFBVSxDQUFDLGVBQUQsRUFBa0IsMEJBQWxCLEVBQThDLGFBQTlDLEVBQTZELFVBQTdELEVBQXlFLENBQUMsaUJBQUQsQ0FBekUsQ0FGQyxFQUdYQSxVQUFVLENBQUMsZUFBRCxFQUFrQiwwQkFBbEIsRUFBOEMsYUFBOUMsRUFBNkQsVUFBN0QsRUFBeUUsQ0FBQyxpQkFBRCxDQUF6RSxDQUhDLEVBSVhBLFVBQVUsQ0FBQyxlQUFELEVBQWtCLDBCQUFsQixFQUE4QyxhQUE5QyxFQUE2RCxVQUE3RCxFQUF5RSxDQUFDLGlCQUFELENBQXpFLENBSkMsQ0FLWDtBQUNBO0FBQ0E7QUFDQTtBQVJXLENBQWI7QUFXZSxTQUFTTyxnQkFBVCxPQUF1QztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUNwRCxNQUFNQyxPQUFPLEdBQUdDLHdEQUFTLEVBQXpCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaO0FBRUEsTUFBTUssU0FBUyxHQUFHLENBQUMsY0FBRCxFQUFpQixPQUFqQixFQUEwQixXQUExQixFQUF1QyxlQUF2QyxFQUF3RCxVQUF4RCxDQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLFNBQVMsQ0FBQyxDQUFELENBQXJCLEVBQTBCUyxLQUExQixDQUFnQyxDQUFoQyxDQUFuQjtBQUVBLHNCQUNFLDhEQUFDLHFFQUFEO0FBQWdCLGFBQVMsRUFBRUMsNERBQTNCO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBTyxlQUFTLEVBQUVULE9BQU8sQ0FBQ1UsS0FBMUI7QUFBaUMsb0JBQVcsa0JBQTVDO0FBQUEsOEJBQ0UsOERBQUMsZ0VBQUQ7QUFBQSwrQkFDRSw4REFBQywrREFBRDtBQUFBLG9CQUVRTCxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxnQ0FBYSw4REFBQywwREFBRDtBQUFBLHdCQUEwQkQsSUFBSSxDQUFDRSxXQUFMO0FBQTFCLGVBQXNCRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFiO0FBQUEsV0FBZjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSw4REFBQyxnRUFBRDtBQUFBLGtCQUNHaEIsSUFBSSxDQUFDYyxHQUFMLENBQVMsVUFBQ0ksR0FBRCxFQUFNRixDQUFOO0FBQUEsOEJBQ1IsOERBQUMseURBQUQ7QUFBQSxvQ0FDRSw4REFBQywwREFBRDtBQUFpQix1QkFBUyxFQUFDLElBQTNCO0FBQWdDLG1CQUFLLEVBQUMsS0FBdEM7QUFBQSx3QkFBNkNFLEdBQUcsQ0FBQ3ZCO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLHdCQUFrQnVCLEdBQUcsQ0FBQ3RCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQywwREFBRDtBQUFBLHdCQUFrQnNCLEdBQUcsQ0FBQ3JCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRSw4REFBQywwREFBRDtBQUFBLHdCQUFrQnFCLEdBQUcsQ0FBQ3BCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRSw4REFBQywwREFBRDtBQUFBLHdCQUFrQm9CLEdBQUcsQ0FBQ25CO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQSxhQUFxQmlCLENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EvQnVCZixnQjtVQUNORyxvRDs7O0tBRE1ILGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkODAxYjUwYTcxODRkODI5MDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHtTdHlsZWRUYWJsZUNlbGwsIFN0eWxlZFRhYmxlUm93LCB1c2VTdHlsZXN9IGZyb20gXCIuL3RhYmxlLnN0eWxlc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZURhdGEgPSAobmFtZSwgcGhvbmUsIGVtYWlsLCBkYXRlT2ZCaXJ0aCwgc3ViamVjdHMpID0+IHtcclxuICByZXR1cm4geyBuYW1lLCBwaG9uZSwgZW1haWwsIGRhdGVPZkJpcnRoLCBzdWJqZWN0cyB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICAvLyBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCwgMzcsIDQuMyksXHJcbiAgLy8gY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcclxuICAvLyBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxyXG4gIC8vIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wLCA0OSwgMy45KSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRUYWJsZXMoe3RhYmxlRGF0YX0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc29sZS5sb2codGFibGVEYXRhKTtcclxuXHJcbiAgY29uc3QgdGFibGVJbmZvID0gW1wiU3R1ZGVudCBOYW1lXCIsIFwiRW1haWxcIiwgXCJQaG9uZSBOby5cIiwgXCJEYXRlIG9mIEJpcnRoXCIsIFwiU3ViamVjdHNcIl1cclxuICBjb25zdCBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXModGFibGVEYXRhWzBdKS5zbGljZSgyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyRGF0YS5tYXAoKGRhdGEsIGkpID0+IDxTdHlsZWRUYWJsZUNlbGwga2V5PXtpfT57ZGF0YS50b1VwcGVyQ2FzZSgpfTwvU3R5bGVkVGFibGVDZWxsPilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnBob25lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5lbWFpbH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZGF0ZU9mQmlydGh9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN1YmplY3RzfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9