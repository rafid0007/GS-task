self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/StudentTable/StudentTable.jsx":
/*!******************************************************!*\
  !*** ./src/components/StudentTable/StudentTable.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StudentTable; }
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
/* harmony import */ var _StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentTable.styles */ "./src/components/StudentTable/StudentTable.styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Gain Solution\\client\\src\\components\\StudentTable\\StudentTable.jsx",
    _s = $RefreshSig$();









function StudentTable(_ref) {
  _s();

  var _this = this;

  var studentsData = _ref.studentsData,
      subjectsData = _ref.subjectsData;
  var classes = (0,_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles)();
  var headerData = Object.keys(studentsData[0]).slice(2);
  var rows = [];

  if (studentsData) {
    rows = studentsData.map(function (row) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          component: "th",
          scope: "row",
          children: row.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.dateOfBirth
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
          children: row.subjects.map(function (sub) {
            return "".concat(sub.name, ", ");
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, _this)]
      }, row.id, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this);
    });
  } // const SubjectTableRows = subjectsData.map(row => (
  //           <StyledTableRow key={row.id}>
  //             <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
  //             <StyledTableCell>{row.students.map(student => `${student.name}, `)}</StyledTableCell>
  //           </StyledTableRow>
  //         ));


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.table,
      "aria-label": "customized table",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__.default, {
          children: headerData.map(function (data, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.StyledTableCell, {
              children: data.toUpperCase()
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 47
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: rows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(StudentTable, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_StudentTable_styles__WEBPACK_IMPORTED_MODULE_2__.useStyles];
});

_c = StudentTable;

var _c;

$RefreshReg$(_c, "StudentTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3R1ZGVudFRhYmxlL1N0dWRlbnRUYWJsZS5qc3giXSwibmFtZXMiOlsiU3R1ZGVudFRhYmxlIiwic3R1ZGVudHNEYXRhIiwic3ViamVjdHNEYXRhIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImhlYWRlckRhdGEiLCJPYmplY3QiLCJrZXlzIiwic2xpY2UiLCJyb3dzIiwibWFwIiwicm93IiwibmFtZSIsInBob25lIiwiZW1haWwiLCJkYXRlT2ZCaXJ0aCIsInN1YmplY3RzIiwic3ViIiwiaWQiLCJQYXBlciIsInRhYmxlIiwiZGF0YSIsImkiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsT0FBb0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQ2pFLE1BQU1DLE9BQU8sR0FBR0MsK0RBQVMsRUFBekI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixZQUFZLENBQUMsQ0FBRCxDQUF4QixFQUE2Qk8sS0FBN0IsQ0FBbUMsQ0FBbkMsQ0FBbkI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFJUixZQUFKLEVBQWlCO0FBQ2ZRLFFBQUksR0FBR1IsWUFBWSxDQUFDUyxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSwwQkFDbkIsOERBQUMsZ0VBQUQ7QUFBQSxnQ0FDRSw4REFBQyxpRUFBRDtBQUFpQixtQkFBUyxFQUFDLElBQTNCO0FBQWdDLGVBQUssRUFBQyxLQUF0QztBQUFBLG9CQUE2Q0EsR0FBRyxDQUFDQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBQSxvQkFBa0JELEdBQUcsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLGlFQUFEO0FBQUEsb0JBQWtCRixHQUFHLENBQUNHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFBLG9CQUFrQkgsR0FBRyxDQUFDSTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQSxvQkFBa0JKLEdBQUcsQ0FBQ0ssUUFBSixDQUFhTixHQUFiLENBQWlCLFVBQUFPLEdBQUc7QUFBQSw2QkFBT0EsR0FBRyxDQUFDTCxJQUFYO0FBQUEsV0FBcEI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLFNBQXFCRCxHQUFHLENBQUNPLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbUI7QUFBQSxLQUFwQixDQUFQO0FBU0QsR0FkZ0UsQ0FnQmpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0UsOERBQUMscUVBQUQ7QUFBZ0IsYUFBUyxFQUFFQyw0REFBM0I7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFPLGVBQVMsRUFBRWhCLE9BQU8sQ0FBQ2lCLEtBQTFCO0FBQWlDLG9CQUFXLGtCQUE1QztBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUEsK0JBQ0UsOERBQUMsK0RBQUQ7QUFBQSxvQkFFUWYsVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQ1csSUFBRCxFQUFPQyxDQUFQO0FBQUEsZ0NBQWEsOERBQUMsaUVBQUQ7QUFBQSx3QkFBMEJELElBQUksQ0FBQ0UsV0FBTDtBQUExQixlQUFzQkQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBYjtBQUFBLFdBQWY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUsOERBQUMsZ0VBQUQ7QUFBQSxrQkFDR2I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQXhDdUJULFk7VUFDTkksMkQ7OztLQURNSixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhNmEyNDhlYWYyMWU4ODVlM2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHtTdHlsZWRUYWJsZUNlbGwsIFN0eWxlZFRhYmxlUm93LCB1c2VTdHlsZXN9IGZyb20gXCIuL1N0dWRlbnRUYWJsZS5zdHlsZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50VGFibGUoe3N0dWRlbnRzRGF0YSwgc3ViamVjdHNEYXRhfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBoZWFkZXJEYXRhID0gT2JqZWN0LmtleXMoc3R1ZGVudHNEYXRhWzBdKS5zbGljZSgyKTtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGlmIChzdHVkZW50c0RhdGEpe1xyXG4gICAgcm93cyA9IHN0dWRlbnRzRGF0YS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnBob25lfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+e3Jvdy5lbWFpbH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cuZGF0ZU9mQmlydGh9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN1YmplY3RzLm1hcChzdWIgPT4gYCR7c3ViLm5hbWV9LCBgKX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICkpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgU3ViamVjdFRhYmxlUm93cyA9IHN1YmplY3RzRGF0YS5tYXAocm93ID0+IChcclxuICAvLyAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93IGtleT17cm93LmlkfT5cclxuICAvLyAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgLy8gICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93LnN0dWRlbnRzLm1hcChzdHVkZW50ID0+IGAke3N0dWRlbnQubmFtZX0sIGApfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gIC8vICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gIC8vICAgICAgICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlckRhdGEubWFwKChkYXRhLCBpKSA9PiA8U3R5bGVkVGFibGVDZWxsIGtleT17aX0+e2RhdGEudG9VcHBlckNhc2UoKX08L1N0eWxlZFRhYmxlQ2VsbD4pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge3Jvd3N9XHJcbiAgICAgICAgICB7Lyp7c3ViamVjdHNEYXRhPyBzdHVkZW50VGFibGVSb3dzOiBudWxsfSovfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=