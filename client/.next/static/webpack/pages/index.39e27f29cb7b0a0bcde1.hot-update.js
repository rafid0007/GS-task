self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table.jsx":
/*!**********************************!*\
  !*** ./src/components/Table.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BasicTable; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\Table.jsx",
    _s = $RefreshSig$();










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  table: {
    minWidth: 650
  }
});

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
function BasicTable() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            children: "Dessert (100g serving)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Calories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Fat\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Carbs\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Protein\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: rows.map(function (row) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              component: "th",
              scope: "row",
              children: row.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
} // const rows = [
//   createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]),
//   createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]),
//   createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]),
//   createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

_s(BasicTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = BasicTable;
var headerData = ["Student Name", "Email", "Phone No.", "Date of Birth", "Subjects"];

var _c;

$RefreshReg$(_c, "BasicTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsImNhcmJzIiwicHJvdGVpbiIsInJvd3MiLCJCYXNpY1RhYmxlIiwiY2xhc3NlcyIsIlBhcGVyIiwibWFwIiwicm93IiwiaGVhZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMO0FBRG9CLENBQUQsQ0FBNUI7O0FBTUEsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLFFBQTFCLEVBQW9DQyxHQUFwQyxFQUF5Q0MsS0FBekMsRUFBZ0RDLE9BQWhELEVBQXlEO0FBQ3ZELFNBQU87QUFBRUosUUFBSSxFQUFKQSxJQUFGO0FBQVFDLFlBQVEsRUFBUkEsUUFBUjtBQUFrQkMsT0FBRyxFQUFIQSxHQUFsQjtBQUF1QkMsU0FBSyxFQUFMQSxLQUF2QjtBQUE4QkMsV0FBTyxFQUFQQTtBQUE5QixHQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsSUFBSSxHQUFHLENBQ1hOLFVBQVUsQ0FBQyxnQkFBRCxFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixFQUE3QixFQUFpQyxHQUFqQyxDQURDLEVBRVhBLFVBQVUsQ0FBQyxvQkFBRCxFQUF1QixHQUF2QixFQUE0QixHQUE1QixFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQyxDQUZDLEVBR1hBLFVBQVUsQ0FBQyxRQUFELEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixFQUF0QixFQUEwQixHQUExQixDQUhDLEVBSVhBLFVBQVUsQ0FBQyxTQUFELEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixFQUF0QixFQUEwQixHQUExQixDQUpDLEVBS1hBLFVBQVUsQ0FBQyxhQUFELEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLEdBQS9CLENBTEMsQ0FBYjtBQVFlLFNBQVNPLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFDbkMsTUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFYSw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRUQsT0FBTyxDQUFDVixLQUExQjtBQUFpQyxvQkFBVyxjQUE1QztBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFLDhEQUFDLGdFQUFEO0FBQVcsaUJBQUssRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxnRUFBRDtBQUFBLGtCQUNHUSxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsOEJBQ1IsOERBQUMsK0RBQUQ7QUFBQSxvQ0FDRSw4REFBQyxnRUFBRDtBQUFXLHVCQUFTLEVBQUMsSUFBckI7QUFBMEIsbUJBQUssRUFBQyxLQUFoQztBQUFBLHdCQUNHQSxHQUFHLENBQUNWO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQlUsR0FBRyxDQUFDVDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0UsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCUyxHQUFHLENBQUNSO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFNRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJRLEdBQUcsQ0FBQ1A7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQk8sR0FBRyxDQUFDTjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUEsYUFBZU0sR0FBRyxDQUFDVixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURRO0FBQUEsU0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQsQyxDQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQTNDd0JNLFU7VUFDTlgsUzs7O0tBRE1XLFU7QUErQ3hCLElBQU1LLFVBQVUsR0FBRyxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEIsV0FBMUIsRUFBdUMsZUFBdkMsRUFBd0QsVUFBeEQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzllMjdmMjljYjdiMGEwYmNkZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1pbldpZHRoOiA2NTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluKSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKCdGcm96ZW4geW9naHVydCcsIDE1OSwgNi4wLCAyNCwgNC4wKSxcclxuICBjcmVhdGVEYXRhKCdJY2UgY3JlYW0gc2FuZHdpY2gnLCAyMzcsIDkuMCwgMzcsIDQuMyksXHJcbiAgY3JlYXRlRGF0YSgnRWNsYWlyJywgMjYyLCAxNi4wLCAyNCwgNi4wKSxcclxuICBjcmVhdGVEYXRhKCdDdXBjYWtlJywgMzA1LCAzLjcsIDY3LCA0LjMpLFxyXG4gIGNyZWF0ZURhdGEoJ0dpbmdlcmJyZWFkJywgMzU2LCAxNi4wLCA0OSwgMy45KSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuLy8gY29uc3Qgcm93cyA9IFtcclxuLy8gICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbi8vICAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4vLyAgIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuLy8gICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbi8vICAgLy8gY3JlYXRlRGF0YSgnSWNlIGNyZWFtIHNhbmR3aWNoJywgMjM3LCA5LjAsIDM3LCA0LjMpLFxyXG4vLyAgIC8vIGNyZWF0ZURhdGEoJ0VjbGFpcicsIDI2MiwgMTYuMCwgMjQsIDYuMCksXHJcbi8vICAgLy8gY3JlYXRlRGF0YSgnQ3VwY2FrZScsIDMwNSwgMy43LCA2NywgNC4zKSxcclxuLy8gICAvLyBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCwgNDksIDMuOSksXHJcbi8vIF07XHJcblxyXG5cclxuXHJcbmNvbnN0IGhlYWRlckRhdGEgPSBbXCJTdHVkZW50IE5hbWVcIiwgXCJFbWFpbFwiLCBcIlBob25lIE5vLlwiLCBcIkRhdGUgb2YgQmlydGhcIiwgXCJTdWJqZWN0c1wiXSJdLCJzb3VyY2VSb290IjoiIn0=