webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.js */ "./components/layout.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project.js */ "./components/Project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/hasan_sh/Documents/development/react/projectManegmentTool/components/Category.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var API = 'http://localhost:4000/graphql';

var Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    var _this;

    _classCallCheck(this, Category);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Category).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeProject", function (id) {
      console.log('Remove: ', id);
    });

    _this.state = {
      draggedProject: null,
      fromCategoryId: ''
    };
    return _this;
  }

  _createClass(Category, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          category = _this$props.category,
          _onDrop = _this$props.onDrop; //   <Layout>
      //       </Layout>

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.item,
        key: category.id,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: function onDrop(e) {
          return _onDrop(e, category.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.categoryName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, category.name), category.projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Project_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: project.id,
          project: project,
          categoryId: category.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        });
      }));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.




/***/ })

})
//# sourceMappingURL=index.js.9ad1f23af85e145893fd.hot-update.js.map