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

var rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
            children: "Dessert (100g serving)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
            align: "right",
            children: "Calories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
            align: "right",
            children: "Fat\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
            align: "right",
            children: "Carbs\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
            align: "right",
            children: "Protein\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiYWN0aW9uIiwiaG92ZXIiLCJUYWJsZVJvdyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21pemVkVGFibGVzIiwiY2xhc3NlcyIsIlBhcGVyIiwibWFwIiwicm93IiwiaGVhZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM3Q0MsUUFBSSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQURsQztBQUVKQyxXQUFLLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxNQUFkLENBQXFCRztBQUZ4QixLQUR1QztBQUs3Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROO0FBTHVDLEdBQVo7QUFBQSxDQUFELENBQVYsQ0FRcEJDLGdFQVJvQixDQUF4QjtBQVVBLElBQU1DLGNBQWMsR0FBR1osb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1Q1ksUUFBSSxFQUFFO0FBQ0osNEJBQXNCO0FBQ3BCVix1QkFBZSxFQUFF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Z0NhLEdBQUcsQ0FBQ1o7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FLDhEQUFDLGVBQUQ7QUFBaUIsbUJBQUssRUFBQyxPQUF2QjtBQUFBLHdCQUFnQ1ksR0FBRyxDQUFDWDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0UsOERBQUMsZUFBRDtBQUFpQixtQkFBSyxFQUFDLE9BQXZCO0FBQUEsd0JBQWdDVyxHQUFHLENBQUNWO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUFxQlUsR0FBRyxDQUFDZCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBbEN1QlUsZ0I7VUFDTkosUzs7O0tBRE1JLGdCO0FBb0N4QixJQUFNSyxVQUFVLEdBQUcsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLEVBQTBCLFdBQTFCLEVBQXVDLGVBQXZDLEVBQXdELFVBQXhELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM1ZGQzNjdhMTkyOWFkYjFjYTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGhlYWQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBib2R5OiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxufSkpKFRhYmxlQ2VsbCk7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKShUYWJsZVJvdyk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluKSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKCdGcm96ZW4geW9naHVydCcsIDE1OSwgNi4wLCAyNCwgNC4wKSxcclxuICBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCwgMzcsIDQuMyksXHJcbiAgY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcclxuICBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxyXG4gIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wLCA0OSwgMy45KSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNzAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFRhYmxlcygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPkRlc3NlcnQgKDEwMGcgc2VydmluZyk8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYWxvcmllczwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5GYXQmbmJzcDsoZyk8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UHJvdGVpbiZuYnNwOyhnKTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2Fsb3JpZXN9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnByb3RlaW59PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgaGVhZGVyRGF0YSA9IFtcIlN0dWRlbnQgTmFtZVwiLCBcIkVtYWlsXCIsIFwiUGhvbmUgTm8uXCIsIFwiRGF0ZSBvZiBCaXJ0aFwiLCBcIlN1YmplY3RzXCJdXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=