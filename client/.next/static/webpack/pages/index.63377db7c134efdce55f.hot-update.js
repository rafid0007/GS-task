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
          children: headerData.map(function (data) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 42
            }, _this);
          })
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiYWN0aW9uIiwiaG92ZXIiLCJUYWJsZVJvdyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21pemVkVGFibGVzIiwiY2xhc3NlcyIsIlBhcGVyIiwiaGVhZGVyRGF0YSIsIm1hcCIsImRhdGEiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FEbEM7QUFFSkMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkc7QUFGeEIsS0FEdUM7QUFLN0NDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETjtBQUx1QyxHQUFaO0FBQUEsQ0FBRCxDQUFWLENBUXBCQyxnRUFSb0IsQ0FBeEI7QUFVQSxJQUFNQyxjQUFjLEdBQUdaLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDNUNZLFFBQUksRUFBRTtBQUNKLDRCQUFzQjtBQUNwQlYsdUJB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QUFBLHFCQVBGO0FBQUEsYUFBcUJZLEdBQUcsQ0FBQ2hCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0FsQ3VCVSxnQjtVQUNOSixTOzs7S0FETUksZ0I7QUFvQ3hCLElBQU1HLFVBQVUsR0FBRyxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEIsV0FBMUIsRUFBdUMsZUFBdkMsRUFBd0QsVUFBeEQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjMzNzdkYjdjMTM0ZWZkY2U1NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaGVhZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGJvZHk6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG59KSkoVGFibGVDZWxsKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpKFRhYmxlUm93KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4pIHtcclxuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbiB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoJ0Zyb3plbiB5b2dodXJ0JywgMTU5LCA2LjAsIDI0LCA0LjApLFxyXG4gIGNyZWF0ZURhdGEoJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIDIzNywgOS4wLCAzNywgNC4zKSxcclxuICBjcmVhdGVEYXRhKCdFY2xhaXInLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxyXG4gIGNyZWF0ZURhdGEoJ0N1cGNha2UnLCAzMDUsIDMuNywgNjcsIDQuMyksXHJcbiAgY3JlYXRlRGF0YSgnR2luZ2VyYnJlYWQnLCAzNTYsIDE2LjAsIDQ5LCAzLjkpLFxyXG5dO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1pbldpZHRoOiA3MDAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21pemVkVGFibGVzKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyRGF0YS5tYXAoZGF0YSA9PiA8U3R5bGVkVGFibGVDZWxsPntkYXRhfTwvU3R5bGVkVGFibGVDZWxsPilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsvKiAgPFN0eWxlZFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9TdHlsZWRUYWJsZUNlbGw+Ki99XHJcbiAgICAgICAgICAgIHsvKiAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2Fsb3JpZXM8L1N0eWxlZFRhYmxlQ2VsbD4qL31cclxuICAgICAgICAgICAgey8qPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RmF0Jm5ic3A7KGcpPC9TdHlsZWRUYWJsZUNlbGw+Ki99XHJcbiAgICAgICAgICAgIHsvKjxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhcmJzJm5ic3A7KGcpPC9TdHlsZWRUYWJsZUNlbGw+Ki99XHJcbiAgICAgICAgICAgIHsvKjxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlByb3RlaW4mbmJzcDsoZyk8L1N0eWxlZFRhYmxlQ2VsbD4qL31cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdyBrZXk9e3Jvdy5uYW1lfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuZmF0fTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2FyYnN9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlckRhdGEgPSBbXCJTdHVkZW50IE5hbWVcIiwgXCJFbWFpbFwiLCBcIlBob25lIE5vLlwiLCBcIkRhdGUgb2YgQmlydGhcIiwgXCJTdWJqZWN0c1wiXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9