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
          children: headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: data
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 47
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
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiYWN0aW9uIiwiaG92ZXIiLCJUYWJsZVJvdyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21pemVkVGFibGVzIiwiY2xhc3NlcyIsIlBhcGVyIiwiaGVhZGVyRGF0YSIsIm1hcCIsImRhdGEiLCJpIiwicm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzdDQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBRGxDO0FBRUpDLFdBQUssRUFBRU4sS0FBSyxDQUFDRyxPQUFOLENBQWNDLE1BQWQsQ0FBcUJHO0FBRnhCLEtBRHVDO0FBSzdDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE47QUFMdUMsR0FBWjtBQUFBLENBQUQsQ0FBVixDQVFwQkMsZ0VBUm9CLENBQXhCO0FBVUEsSUFBTUMsY0FBYyxHQUFHWixvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVDWSxRQUFJLEVBQUU7QUFDSiw0QkFBc0I7QUFDcEJW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bUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EzQnVCVSxnQjtVQUNOSixTOzs7S0FETUksZ0I7QUE2QnhCLElBQU1HLFVBQVUsR0FBRyxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEIsV0FBMUIsRUFBdUMsZUFBdkMsRUFBd0QsVUFBeEQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFjZWFhN2E3YTg2NmIyZTBiMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaGVhZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGJvZHk6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG59KSkoVGFibGVDZWxsKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpKFRhYmxlUm93KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4pIHtcclxuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbiB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICAvLyBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCwgMzcsIDQuMyksXHJcbiAgLy8gY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcclxuICAvLyBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxyXG4gIC8vIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wLCA0OSwgMy45KSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNzAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFRhYmxlcygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEubWFwKChkYXRhLCBpKSA9PiA8U3R5bGVkVGFibGVDZWxsIGtleT17aX0+e2RhdGF9PC9TdHlsZWRUYWJsZUNlbGw+KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5uYW1lfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmNhbG9yaWVzfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5mYXR9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LmNhcmJzfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5wcm90ZWlufTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlckRhdGEgPSBbXCJTdHVkZW50IE5hbWVcIiwgXCJFbWFpbFwiLCBcIlBob25lIE5vLlwiLCBcIkRhdGUgb2YgQmlydGhcIiwgXCJTdWJqZWN0c1wiXSJdLCJzb3VyY2VSb290IjoiIn0=