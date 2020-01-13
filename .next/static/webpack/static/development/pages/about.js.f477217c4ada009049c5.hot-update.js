webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_DirectionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DirectionButton */ "./components/DirectionButton.js");


var _jsxFileName = "/Users/inbaeyoon/Desktop/nextjs-portfolio/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 2rem;\n  transition: 1s ease-in-out;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin: 0;\n  margin-bottom: 1rem;\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  border: 1px solid #dee2e6;\n  border-radius: 10px;\n  color: #868e96;\n  text-align: center;\n  padding: 1rem 2rem;\n  width: 80%;\n\n  transition-timing-function: ease-in;\n  transition-timing-function: cubic-bezier(0.42, 0, 1, 1);\n  .period {\n  }\n\n  .title {\n    color: #343a40;\n    font-weight: 500;\n    font-size: 1.5rem;\n    letter-spacing: 0.3rem;\n  }\n  .description {\n  }\n\n  & + & {\n    margin-top: 1rem;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n\n  img {\n    width: 1rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    &:last-child {\n      display: none;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 60%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  width: 80%;\n  height: 60%;\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var AboutBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var InfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var SkillBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var CarrerBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var CarrerInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject6());
var SkillImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject7());
var imageSrcs = ['/static/icons/html.svg', '/static/icons/css.svg', '/static/icons/javascript.svg'];

var About = function About(props) {
  var carrers = props.carrers["default"];
  return __jsx(AboutBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_DirectionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: '/',
    direction: 'left',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(InfoBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(SkillBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Skills"), imageSrcs.map(function (src) {
    return __jsx(SkillImage, {
      src: src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    });
  })), __jsx(CarrerBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Careers"), carrers.map(function (carrer) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(CarrerInfoBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, carrer.title), __jsx("div", {
      className: "period",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, carrer.period), __jsx("div", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, carrer.description)), __jsx("img", {
      src: "/static/icons/down-arrow.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  }))), __jsx(_components_DirectionButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: 'projects',
    direction: 'right',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }));
};

About.getInitialProps = function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../data/carrers.json */ "./data/carrers.json", 3)));

        case 2:
          data = _context.sent;
          return _context.abrupt("return", {
            carrers: data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.f477217c4ada009049c5.hot-update.js.map