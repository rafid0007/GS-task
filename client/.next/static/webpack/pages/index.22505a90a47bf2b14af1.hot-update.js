self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table.jsx":
/*!**********************************!*\
  !*** ./src/components/Table.jsx ***!
  \**********************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\Table.jsx",
    _s = $RefreshSig$();










var StyledTableCell = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__.default);
var StyledTableRow = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__.default);

function createData(name, calories, fat, carbs, protein) {
  return {
    name: name,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var rows = [createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]) // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),
];
var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 700
  }
});
function CustomizedTables() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: classes.table,
      "aria-label": "customized table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: headerData.map(function (data) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 42
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableRow, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(CustomizedTables, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CustomizedTables;
var headerData = ["Student Name", "Email", "Phone No.", "Date of Birth", "Subjects"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiYWN0aW9uIiwiaG92ZXIiLCJUYWJsZVJvdyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21pemVkVGFibGVzIiwiY2xhc3NlcyIsIlBhcGVyIiwiaGVhZGVyRGF0YSIsIm1hcCIsImRhdGEiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FEbEM7QUFFSkMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkc7QUFGeEIsS0FEdUM7QUFLN0NDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETjtBQUx1QyxHQUFaO0FBQUEsQ0FBRCxDQUFWLENBUXBCQyxnRUFSb0IsQ0FBeEI7QUFVQSxJQUFNQyxjQUFjLEdBQUdaLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDNUNZLFFBQUksRUFBRTtBQUNKLDRCQUFzQjtBQUNwQlYsdUJB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QTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBaEN1QlUsZ0I7VUFDTkosUzs7O0tBRE1JLGdCO0FBa0N4QixJQUFNRyxVQUFVLEdBQUcsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLEVBQTBCLFdBQTFCLEVBQXVDLGVBQXZDLEVBQXdELFVBQXhELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyNTA1YTkwYTQ3YmYyYjE0YWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGhlYWQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxufSkpKFRhYmxlQ2VsbCk7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKShUYWJsZVJvdyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluKSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgLy8gY3JlYXRlRGF0YSgnSWNlIGNyZWFtIHNhbmR3aWNoJywgMjM3LCA5LjAsIDM3LCA0LjMpLFxyXG4gIC8vIGNyZWF0ZURhdGEoJ0VjbGFpcicsIDI2MiwgMTYuMCwgMjQsIDYuMCksXHJcbiAgLy8gY3JlYXRlRGF0YSgnQ3VwY2FrZScsIDMwNSwgMy43LCA2NywgNC4zKSxcclxuICAvLyBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCwgNDksIDMuOSksXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWluV2lkdGg6IDcwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRUYWJsZXMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhLm1hcChkYXRhID0+IDxTdHlsZWRUYWJsZUNlbGw+e2RhdGF9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgey8qICA8U3R5bGVkVGFibGVDZWxsPkRlc3NlcnQgKDEwMGcgc2VydmluZyk8L1N0eWxlZFRhYmxlQ2VsbD4qL31cclxuICAgICAgICAgICAgey8qICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYWxvcmllczwvU3R5bGVkVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgICB7Lyo8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5GYXQmbmJzcDsoZyk8L1N0eWxlZFRhYmxlQ2VsbD4qL31cclxuICAgICAgICAgICAgey8qPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1N0eWxlZFRhYmxlQ2VsbD4qL31cclxuICAgICAgICAgICAgey8qPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UHJvdGVpbiZuYnNwOyhnKTwvU3R5bGVkVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuY2Fsb3JpZXN9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmZhdH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuY2FyYnN9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnByb3RlaW59PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgaGVhZGVyRGF0YSA9IFtcIlN0dWRlbnQgTmFtZVwiLCBcIkVtYWlsXCIsIFwiUGhvbmUgTm8uXCIsIFwiRGF0ZSBvZiBCaXJ0aFwiLCBcIlN1YmplY3RzXCJdXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=