webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/DirectionButton.js":
/*!***************************************!*\
  !*** ./components/DirectionButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/inbaeyoon/Desktop/nextjs-portfolio/components/DirectionButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 2rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          justify-content: flex-end;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          justify-content: flex-start;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 0;\n  right: 3rem;\n  left: ;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var DirectionButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.direction === 'left' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3());
});
var ImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject4());

var DirectionButton = function DirectionButton(_ref) {
  var direction = _ref.direction,
      src = _ref.src;
  return __jsx(DirectionButtonBlock, {
    direction: direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, direction === 'left' ? __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(ImageBlock, {
    src: "/static/icons/left-arrow.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })) : __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(ImageBlock, {
    src: "/static/icons/right-arrow.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DirectionButton);

/***/ })

})
//# sourceMappingURL=about.js.9f6017e0f91eef79a0af.hot-update.js.map