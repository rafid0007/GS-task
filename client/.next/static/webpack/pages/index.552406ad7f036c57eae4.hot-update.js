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
              align: "right",
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTableCell, {
              align: "right",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbIlN0eWxlZFRhYmxlQ2VsbCIsIndpdGhTdHlsZXMiLCJ0aGVtZSIsImhlYWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwiYmxhY2siLCJjb2xvciIsIndoaXRlIiwiYm9keSIsImZvbnRTaXplIiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiYWN0aW9uIiwiaG92ZXIiLCJUYWJsZVJvdyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJyb3dzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21pemVkVGFibGVzIiwiY2xhc3NlcyIsIlBhcGVyIiwiaGVhZGVyRGF0YSIsIm1hcCIsImRhdGEiLCJyb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FEbEM7QUFFSkMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkc7QUFGeEIsS0FEdUM7QUFLN0NDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETjtBQUx1QyxHQUFaO0FBQUEsQ0FBRCxDQUFWLENBUXBCQyxnRUFSb0IsQ0FBeEI7QUFVQSxJQUFNQyxjQUFjLEdBQUdaLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDNUNZLFFBQUksRUFBRTtBQUNKLDRCQUFzQjtBQUNwQlYsdUJB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QTtBQUFBLHFCQUxGO0FBQUEsYUFBcUJZLEdBQUcsQ0FBQ2hCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0FoQ3VCVSxnQjtVQUNOSixTOzs7S0FETUksZ0I7QUFrQ3hCLElBQU1HLFVBQVUsR0FBRyxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEIsV0FBMUIsRUFBdUMsZUFBdkMsRUFBd0QsVUFBeEQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTUyNDA2YWQ3ZjAzNmM1N2VhZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgaGVhZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGJvZHk6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG59KSkoVGFibGVDZWxsKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpKFRhYmxlUm93KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4pIHtcclxuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbiB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICAvLyBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCwgMzcsIDQuMyksXHJcbiAgLy8gY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcclxuICAvLyBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxyXG4gIC8vIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wLCA0OSwgMy45KSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNzAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFRhYmxlcygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEubWFwKGRhdGEgPT4gPFN0eWxlZFRhYmxlQ2VsbD57ZGF0YX08L1N0eWxlZFRhYmxlQ2VsbD4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7LyogIDxTdHlsZWRUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvU3R5bGVkVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgICB7LyogIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9TdHlsZWRUYWJsZUNlbGw+Ki99XHJcbiAgICAgICAgICAgIHsvKjxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvU3R5bGVkVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgICB7Lyo8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvU3R5bGVkVGFibGVDZWxsPiovfVxyXG4gICAgICAgICAgICB7Lyo8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9TdHlsZWRUYWJsZUNlbGw+Ki99XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8U3R5bGVkVGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+e3Jvdy5uYW1lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2Fsb3JpZXN9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnByb3RlaW59PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgaGVhZGVyRGF0YSA9IFtcIlN0dWRlbnQgTmFtZVwiLCBcIkVtYWlsXCIsIFwiUGhvbmUgTm8uXCIsIFwiRGF0ZSBvZiBCaXJ0aFwiLCBcIlN1YmplY3RzXCJdXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=