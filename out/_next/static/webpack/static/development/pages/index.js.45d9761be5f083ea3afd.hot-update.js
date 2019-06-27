webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/FetchRepos.js":
/*!****************************************!*\
  !*** ./pages/components/FetchRepos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\cesaresparza.dev\\pages\\components\\FetchRepos.js";



var FetchRepos = function FetchRepos(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: Styles.div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.collection.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.id,
      style: Styles.repoCard,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.html_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      style: Styles.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, item.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, item.description));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FetchRepos);
var Styles = {
  div: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '0 100px'
  },
  repoCard: {
    backgroundColor: 'gray',
    borderRadius: '25px',
    color: 'rgb(243, 243, 243)',
    display: 'flex',
    flexDirection: 'column',
    margin: '25px',
    padding: '25px',
    minHeight: '300px',
    minWidth: '300px',
    maxHeight: '300px',
    maxWidth: '300px',
    textAlign: 'center'
  },
  link: {
    color: 'rgb(243, 243, 243)',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
};

/***/ })

})
//# sourceMappingURL=index.js.45d9761be5f083ea3afd.hot-update.js.map