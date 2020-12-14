webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Countdown/Countdown.js":
/*!*******************************************!*\
  !*** ./components/Countdown/Countdown.js ***!
  \*******************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Countdown.module.scss */ "./components/Countdown/Countdown.module.scss");
/* harmony import */ var _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Countdown_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../configuration */ "./configuration.js");


var _jsxFileName = "C:\\Users\\filip\\code\\elektroniczni\\components\\Countdown\\Countdown.js",
    _this = undefined,
    _s = $RefreshSig$();





var Countdown = function Countdown() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_1___default()())),
      count = _useState[0],
      setCount = _useState[1]; // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change


  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var animate = function animate() {
    var now = moment__WEBPACK_IMPORTED_MODULE_1___default()();
    var dur;

    if (moment__WEBPACK_IMPORTED_MODULE_1___default()(_configuration__WEBPACK_IMPORTED_MODULE_4__["default"].kontrola_lotu_date).isAfter(moment__WEBPACK_IMPORTED_MODULE_1___default()())) {
      dur = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(0);
    } else {
      var timeDiff = moment__WEBPACK_IMPORTED_MODULE_1___default()(_configuration__WEBPACK_IMPORTED_MODULE_4__["default"].kontrola_lotu_date) - now;
      dur = moment__WEBPACK_IMPORTED_MODULE_1___default.a.duration(timeDiff);
      requestRef.current = requestAnimationFrame(animate);
    }

    setCount(dur);
  };

  var days = '';
  var hours = '';
  var minutes = '';
  var seconds = '';

  if (count) {
    days = Math.floor(count.asDays());
    hours = count.hours().toString().padStart(2, '0');
    minutes = count.minutes().toString().padStart(2, '0');
    seconds = count.seconds().toString().padStart(2, '0');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    requestRef.current = requestAnimationFrame(animate);
    return function () {
      return cancelAnimationFrame(requestRef.current);
    };
  }, []); // Make sure the effect runs only once

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Countdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.countdown,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Do nast\u0119pnej Kontroli Lotu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: [days, "D ", hours, "H ", minutes, "M ", seconds, "S"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(Countdown, "ILj2xYoZ/H8De2QZgOQ1ET9XvgU=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGRvd24vQ291bnRkb3duLmpzIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZVN0YXRlIiwibW9tZW50IiwiZHVyYXRpb24iLCJjb3VudCIsInNldENvdW50IiwicmVxdWVzdFJlZiIsInVzZVJlZiIsImFuaW1hdGUiLCJub3ciLCJkdXIiLCJjb25maWciLCJrb250cm9sYV9sb3R1X2RhdGUiLCJpc0FmdGVyIiwidGltZURpZmYiLCJjdXJyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJhc0RheXMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwidXNlRWZmZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdHlsZXMiLCJjb3VudGRvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDQyw2Q0FBTSxDQUFDQyxRQUFQLENBQWdCRCw2Q0FBTSxFQUF0QixDQUFELENBRFA7QUFBQSxNQUNwQkUsS0FEb0I7QUFBQSxNQUNiQyxRQURhLGlCQUczQjtBQUNBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsUUFBTUMsR0FBRyxHQUFHUCw2Q0FBTSxFQUFsQjtBQUVBLFFBQUlRLEdBQUo7O0FBRUEsUUFBSVIsNkNBQU0sQ0FBQ1Msc0RBQU0sQ0FBQ0Msa0JBQVIsQ0FBTixDQUFrQ0MsT0FBbEMsQ0FBMENYLDZDQUFNLEVBQWhELENBQUosRUFBeUQ7QUFDckRRLFNBQUcsR0FBR1IsNkNBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixDQUFOO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBTVcsUUFBUSxHQUFHWiw2Q0FBTSxDQUFDUyxzREFBTSxDQUFDQyxrQkFBUixDQUFOLEdBQW9DSCxHQUFyRDtBQUNBQyxTQUFHLEdBQUdSLDZDQUFNLENBQUNDLFFBQVAsQ0FBZ0JXLFFBQWhCLENBQU47QUFDQVIsZ0JBQVUsQ0FBQ1MsT0FBWCxHQUFxQkMscUJBQXFCLENBQUNSLE9BQUQsQ0FBMUM7QUFDSDs7QUFFREgsWUFBUSxDQUFDSyxHQUFELENBQVI7QUFDSCxHQWREOztBQWdCQSxNQUFJTyxJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxNQUFJaEIsS0FBSixFQUFXO0FBQ1BhLFFBQUksR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVdsQixLQUFLLENBQUNtQixNQUFOLEVBQVgsQ0FBUDtBQUNBTCxTQUFLLEdBQUdkLEtBQUssQ0FBQ2MsS0FBTixHQUFjTSxRQUFkLEdBQXlCQyxRQUF6QixDQUFrQyxDQUFsQyxFQUFxQyxHQUFyQyxDQUFSO0FBQ0FOLFdBQU8sR0FBR2YsS0FBSyxDQUFDZSxPQUFOLEdBQWdCSyxRQUFoQixHQUEyQkMsUUFBM0IsQ0FBb0MsQ0FBcEMsRUFBdUMsR0FBdkMsQ0FBVjtBQUNBTCxXQUFPLEdBQUdoQixLQUFLLENBQUNnQixPQUFOLEdBQWdCSSxRQUFoQixHQUEyQkMsUUFBM0IsQ0FBb0MsQ0FBcEMsRUFBdUMsR0FBdkMsQ0FBVjtBQUNIOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDWnBCLGNBQVUsQ0FBQ1MsT0FBWCxHQUFxQkMscUJBQXFCLENBQUNSLE9BQUQsQ0FBMUM7QUFDQSxXQUFPO0FBQUEsYUFBTW1CLG9CQUFvQixDQUFDckIsVUFBVSxDQUFDUyxPQUFaLENBQTFCO0FBQUEsS0FBUDtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQsQ0FuQzJCLENBc0NuQjs7QUFFUixzQkFDSTtBQUFLLGFBQVMsRUFBRWEsNkRBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxpQkFDS1osSUFETCxRQUNhQyxLQURiLFFBQ3NCQyxPQUR0QixRQUNpQ0MsT0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQWhETTs7R0FBTXBCLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE3OTgwOTcwYjdhMTEzOWM4ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ291bnRkb3duLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWd1cmF0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG1vbWVudC5kdXJhdGlvbihtb21lbnQoKSkpO1xyXG5cclxuICAgIC8vIFVzZSB1c2VSZWYgZm9yIG11dGFibGUgdmFyaWFibGVzIHRoYXQgd2Ugd2FudCB0byBwZXJzaXN0XHJcbiAgICAvLyB3aXRob3V0IHRyaWdnZXJpbmcgYSByZS1yZW5kZXIgb24gdGhlaXIgY2hhbmdlXHJcbiAgICBjb25zdCByZXF1ZXN0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgbGV0IGR1cjtcclxuXHJcbiAgICAgICAgaWYgKG1vbWVudChjb25maWcua29udHJvbGFfbG90dV9kYXRlKS5pc0FmdGVyKG1vbWVudCgpKSkge1xyXG4gICAgICAgICAgICBkdXIgPSBtb21lbnQuZHVyYXRpb24oMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZURpZmYgPSBtb21lbnQoY29uZmlnLmtvbnRyb2xhX2xvdHVfZGF0ZSkgLSBub3c7XHJcbiAgICAgICAgICAgIGR1ciA9IG1vbWVudC5kdXJhdGlvbih0aW1lRGlmZik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvdW50KGR1cik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRheXMgPSAnJztcclxuICAgIGxldCBob3VycyA9ICcnO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSAnJztcclxuICAgIGxldCBzZWNvbmRzID0gJyc7XHJcblxyXG4gICAgaWYgKGNvdW50KSB7XHJcbiAgICAgICAgZGF5cyA9IE1hdGguZmxvb3IoY291bnQuYXNEYXlzKCkpO1xyXG4gICAgICAgIGhvdXJzID0gY291bnQuaG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgbWludXRlcyA9IGNvdW50Lm1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgc2Vjb25kcyA9IGNvdW50LnNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXF1ZXN0UmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RSZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7IC8vIE1ha2Ugc3VyZSB0aGUgZWZmZWN0IHJ1bnMgb25seSBvbmNlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bn0+XHJcbiAgICAgICAgICAgIDxoMz5EbyBuYXN0xJlwbmVqIEtvbnRyb2xpIExvdHU8L2gzPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICB7ZGF5c31EIHtob3Vyc31IIHttaW51dGVzfU0ge3NlY29uZHN9U1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==