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
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Calories"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Fat\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Carbs\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
            align: "right",
            children: "Protein\xA0(g)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
              lineNumber: 40,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.calories
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.fat
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.carbs
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__.default, {
              align: "right",
              children: row.protein
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)]
          }, row.name, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(BasicTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = BasicTable;
var rows = [createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]), createData('Mostafa Rafid', "rafidmostafa13@gmail.com", "01704894483", "13/01/98", ["Bangla, English"]) // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// createData('Eclair', 262, 16.0, 24, 6.0),
// createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9),
];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUuanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0YWJsZSIsIm1pbldpZHRoIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsImNhcmJzIiwicHJvdGVpbiIsIkJhc2ljVGFibGUiLCJjbGFzc2VzIiwiUGFwZXIiLCJyb3dzIiwibWFwIiwicm93IiwiaGVhZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMO0FBRG9CLENBQUQsQ0FBNUI7O0FBTUEsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLFFBQTFCLEVBQW9DQyxHQUFwQyxFQUF5Q0MsS0FBekMsRUFBZ0RDLE9BQWhELEVBQXlEO0FBQ3ZELFNBQU87QUFBRUosUUFBSSxFQUFKQSxJQUFGO0FBQVFDLFlBQVEsRUFBUkEsUUFBUjtBQUFrQkMsT0FBRyxFQUFIQSxHQUFsQjtBQUF1QkMsU0FBSyxFQUFMQSxLQUF2QjtBQUE4QkMsV0FBTyxFQUFQQTtBQUE5QixHQUFQO0FBQ0Q7O0FBR2MsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNuQyxNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyxxRUFBRDtBQUFnQixhQUFTLEVBQUVZLDREQUEzQjtBQUFBLDJCQUNFLDhEQUFDLDREQUFEO0FBQU8sZUFBUyxFQUFFRCxPQUFPLENBQUNULEtBQTFCO0FBQWlDLG9CQUFXLGNBQTVDO0FBQUEsOEJBQ0UsOERBQUMsZ0VBQUQ7QUFBQSwrQkFDRSw4REFBQywrREFBRDtBQUFBLGtDQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0UsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUUsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0UsOERBQUMsZ0VBQUQ7QUFBVyxpQkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFLDhEQUFDLGdFQUFEO0FBQUEsa0JBQ0dXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSw4QkFDUiw4REFBQywrREFBRDtBQUFBLG9DQUNFLDhEQUFDLGdFQUFEO0FBQVcsdUJBQVMsRUFBQyxJQUFyQjtBQUEwQixtQkFBSyxFQUFDLEtBQWhDO0FBQUEsd0JBQ0dBLEdBQUcsQ0FBQ1Y7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCVSxHQUFHLENBQUNUO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRSw4REFBQyxnRUFBRDtBQUFXLG1CQUFLLEVBQUMsT0FBakI7QUFBQSx3QkFBMEJTLEdBQUcsQ0FBQ1I7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FLDhEQUFDLGdFQUFEO0FBQVcsbUJBQUssRUFBQyxPQUFqQjtBQUFBLHdCQUEwQlEsR0FBRyxDQUFDUDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0UsOERBQUMsZ0VBQUQ7QUFBVyxtQkFBSyxFQUFDLE9BQWpCO0FBQUEsd0JBQTBCTyxHQUFHLENBQUNOO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUFlTSxHQUFHLENBQUNWLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0EvQnVCSyxVO1VBQ05WLFM7OztLQURNVSxVO0FBa0N4QixJQUFNRyxJQUFJLEdBQUcsQ0FDWFQsVUFBVSxDQUFDLGVBQUQsRUFBa0IsMEJBQWxCLEVBQThDLGFBQTlDLEVBQTZELFVBQTdELEVBQXlFLENBQUMsaUJBQUQsQ0FBekUsQ0FEQyxFQUVYQSxVQUFVLENBQUMsZUFBRCxFQUFrQiwwQkFBbEIsRUFBOEMsYUFBOUMsRUFBNkQsVUFBN0QsRUFBeUUsQ0FBQyxpQkFBRCxDQUF6RSxDQUZDLEVBR1hBLFVBQVUsQ0FBQyxlQUFELEVBQWtCLDBCQUFsQixFQUE4QyxhQUE5QyxFQUE2RCxVQUE3RCxFQUF5RSxDQUFDLGlCQUFELENBQXpFLENBSEMsRUFJWEEsVUFBVSxDQUFDLGVBQUQsRUFBa0IsMEJBQWxCLEVBQThDLGFBQTlDLEVBQTZELFVBQTdELEVBQXlFLENBQUMsaUJBQUQsQ0FBekUsQ0FKQyxDQUtYO0FBQ0E7QUFDQTtBQUNBO0FBUlcsQ0FBYjtBQWFBLElBQU1ZLFVBQVUsR0FBRyxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEIsV0FBMUIsRUFBdUMsZUFBdkMsRUFBd0QsVUFBeEQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTBkZTI4NDhlMWI0MzQxZDZlYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGFibGU6IHtcclxuICAgIG1pbldpZHRoOiA2NTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluKSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cubmFtZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgY3JlYXRlRGF0YSgnTW9zdGFmYSBSYWZpZCcsIFwicmFmaWRtb3N0YWZhMTNAZ21haWwuY29tXCIsIFwiMDE3MDQ4OTQ0ODNcIiwgXCIxMy8wMS85OFwiLCBbXCJCYW5nbGEsIEVuZ2xpc2hcIl0pLFxyXG4gIGNyZWF0ZURhdGEoJ01vc3RhZmEgUmFmaWQnLCBcInJhZmlkbW9zdGFmYTEzQGdtYWlsLmNvbVwiLCBcIjAxNzA0ODk0NDgzXCIsIFwiMTMvMDEvOThcIiwgW1wiQmFuZ2xhLCBFbmdsaXNoXCJdKSxcclxuICBjcmVhdGVEYXRhKCdNb3N0YWZhIFJhZmlkJywgXCJyYWZpZG1vc3RhZmExM0BnbWFpbC5jb21cIiwgXCIwMTcwNDg5NDQ4M1wiLCBcIjEzLzAxLzk4XCIsIFtcIkJhbmdsYSwgRW5nbGlzaFwiXSksXHJcbiAgLy8gY3JlYXRlRGF0YSgnSWNlIGNyZWFtIHNhbmR3aWNoJywgMjM3LCA5LjAsIDM3LCA0LjMpLFxyXG4gIC8vIGNyZWF0ZURhdGEoJ0VjbGFpcicsIDI2MiwgMTYuMCwgMjQsIDYuMCksXHJcbiAgLy8gY3JlYXRlRGF0YSgnQ3VwY2FrZScsIDMwNSwgMy43LCA2NywgNC4zKSxcclxuICAvLyBjcmVhdGVEYXRhKCdHaW5nZXJicmVhZCcsIDM1NiwgMTYuMCwgNDksIDMuOSksXHJcbl07XHJcblxyXG5cclxuXHJcbmNvbnN0IGhlYWRlckRhdGEgPSBbXCJTdHVkZW50IE5hbWVcIiwgXCJFbWFpbFwiLCBcIlBob25lIE5vLlwiLCBcIkRhdGUgb2YgQmlydGhcIiwgXCJTdWJqZWN0c1wiXSJdLCJzb3VyY2VSb290IjoiIn0=