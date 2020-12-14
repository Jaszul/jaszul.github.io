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
    }

    setCount(dur);
    requestRef.current = requestAnimationFrame(animate);
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
      lineNumber: 49,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: [days, "D ", hours, "H ", minutes, "M ", seconds, "S"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGRvd24vQ291bnRkb3duLmpzIl0sIm5hbWVzIjpbIkNvdW50ZG93biIsInVzZVN0YXRlIiwibW9tZW50IiwiZHVyYXRpb24iLCJjb3VudCIsInNldENvdW50IiwicmVxdWVzdFJlZiIsInVzZVJlZiIsImFuaW1hdGUiLCJub3ciLCJkdXIiLCJjb25maWciLCJrb250cm9sYV9sb3R1X2RhdGUiLCJpc0FmdGVyIiwidGltZURpZmYiLCJjdXJyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJhc0RheXMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwidXNlRWZmZWN0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzdHlsZXMiLCJjb3VudGRvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDQyw2Q0FBTSxDQUFDQyxRQUFQLENBQWdCRCw2Q0FBTSxFQUF0QixDQUFELENBRFA7QUFBQSxNQUNwQkUsS0FEb0I7QUFBQSxNQUNiQyxRQURhLGlCQUczQjtBQUNBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsUUFBTUMsR0FBRyxHQUFHUCw2Q0FBTSxFQUFsQjtBQUVBLFFBQUlRLEdBQUo7O0FBRUEsUUFBSVIsNkNBQU0sQ0FBQ1Msc0RBQU0sQ0FBQ0Msa0JBQVIsQ0FBTixDQUFrQ0MsT0FBbEMsQ0FBMENYLDZDQUFNLEVBQWhELENBQUosRUFBeUQ7QUFDckRRLFNBQUcsR0FBR1IsNkNBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixDQUFOO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBTVcsUUFBUSxHQUFHWiw2Q0FBTSxDQUFDUyxzREFBTSxDQUFDQyxrQkFBUixDQUFOLEdBQW9DSCxHQUFyRDtBQUNBQyxTQUFHLEdBQUdSLDZDQUFNLENBQUNDLFFBQVAsQ0FBZ0JXLFFBQWhCLENBQU47QUFDSDs7QUFFRFQsWUFBUSxDQUFDSyxHQUFELENBQVI7QUFFQUosY0FBVSxDQUFDUyxPQUFYLEdBQXFCQyxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUExQztBQUNILEdBZkQ7O0FBaUJBLE1BQUlTLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkOztBQUVBLE1BQUloQixLQUFKLEVBQVc7QUFDUGEsUUFBSSxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBV2xCLEtBQUssQ0FBQ21CLE1BQU4sRUFBWCxDQUFQO0FBQ0FMLFNBQUssR0FBR2QsS0FBSyxDQUFDYyxLQUFOLEdBQWNNLFFBQWQsR0FBeUJDLFFBQXpCLENBQWtDLENBQWxDLEVBQXFDLEdBQXJDLENBQVI7QUFDQU4sV0FBTyxHQUFHZixLQUFLLENBQUNlLE9BQU4sR0FBZ0JLLFFBQWhCLEdBQTJCQyxRQUEzQixDQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxDQUFWO0FBQ0FMLFdBQU8sR0FBR2hCLEtBQUssQ0FBQ2dCLE9BQU4sR0FBZ0JJLFFBQWhCLEdBQTJCQyxRQUEzQixDQUFvQyxDQUFwQyxFQUF1QyxHQUF2QyxDQUFWO0FBQ0g7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNacEIsY0FBVSxDQUFDUyxPQUFYLEdBQXFCQyxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUExQztBQUNBLFdBQU87QUFBQSxhQUFNbUIsb0JBQW9CLENBQUNyQixVQUFVLENBQUNTLE9BQVosQ0FBMUI7QUFBQSxLQUFQO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVCxDQXBDMkIsQ0F1Q25COztBQUVSLHNCQUNJO0FBQUssYUFBUyxFQUFFYSw2REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLGlCQUNLWixJQURMLFFBQ2FDLEtBRGIsUUFDc0JDLE9BRHRCLFFBQ2lDQyxPQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBakRNOztHQUFNcEIsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZTg0MWI1NTI5OWE5YThkZGRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db3VudGRvd24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93biA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobW9tZW50LmR1cmF0aW9uKG1vbWVudCgpKSk7XHJcblxyXG4gICAgLy8gVXNlIHVzZVJlZiBmb3IgbXV0YWJsZSB2YXJpYWJsZXMgdGhhdCB3ZSB3YW50IHRvIHBlcnNpc3RcclxuICAgIC8vIHdpdGhvdXQgdHJpZ2dlcmluZyBhIHJlLXJlbmRlciBvbiB0aGVpciBjaGFuZ2VcclxuICAgIGNvbnN0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xyXG5cclxuICAgICAgICBsZXQgZHVyO1xyXG5cclxuICAgICAgICBpZiAobW9tZW50KGNvbmZpZy5rb250cm9sYV9sb3R1X2RhdGUpLmlzQWZ0ZXIobW9tZW50KCkpKSB7XHJcbiAgICAgICAgICAgIGR1ciA9IG1vbWVudC5kdXJhdGlvbigwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lRGlmZiA9IG1vbWVudChjb25maWcua29udHJvbGFfbG90dV9kYXRlKSAtIG5vdztcclxuICAgICAgICAgICAgZHVyID0gbW9tZW50LmR1cmF0aW9uKHRpbWVEaWZmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvdW50KGR1cik7XHJcblxyXG4gICAgICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5cyA9ICcnO1xyXG4gICAgbGV0IGhvdXJzID0gJyc7XHJcbiAgICBsZXQgbWludXRlcyA9ICcnO1xyXG4gICAgbGV0IHNlY29uZHMgPSAnJztcclxuXHJcbiAgICBpZiAoY291bnQpIHtcclxuICAgICAgICBkYXlzID0gTWF0aC5mbG9vcihjb3VudC5hc0RheXMoKSk7XHJcbiAgICAgICAgaG91cnMgPSBjb3VudC5ob3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBtaW51dGVzID0gY291bnQubWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBzZWNvbmRzID0gY291bnQuc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdFJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTsgLy8gTWFrZSBzdXJlIHRoZSBlZmZlY3QgcnVucyBvbmx5IG9uY2VcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3dufT5cclxuICAgICAgICAgICAgPGgzPkRvIG5hc3TEmXBuZWogS29udHJvbGkgTG90dTwvaDM+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIHtkYXlzfUQge2hvdXJzfUgge21pbnV0ZXN9TSB7c2Vjb25kc31TXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9