webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/hasan_sh/Documents/development/react/projectManegmentTool/components/Project.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  function Project() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Project);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Project)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dragStart", function (e, draggedProject, fromCategoryId) {
      e.dataTransfer.setData('fromCategoryId', fromCategoryId);
      e.dataTransfer.setData('draggedProject', JSON.stringify(draggedProject));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeProject",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(categoryId, projectId) {
        var query, res, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "\n    mutation  RemoveProject($input: RemoveProjectInput) {\n        removeProject(input: $input) {\n            title\n            id\n            description\n        }\n    }\n  ";
                _context.next = 3;
                return fetch(API, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      input: {
                        categoryId: categoryId,
                        projectId: projectId
                      }
                    }
                  })
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                _ref2 = _context.sent;
                data = _ref2.data;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Project, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          project = _this$props.project,
          categoryId = _this$props.categoryId;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.project,
        key: project.id || project.title,
        draggable: true,
        onDragStart: function onDragStart(e) {
          return _this2.dragStart(e, project, categoryId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.projectTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, project.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.removeProject(categoryId, project.id);
        },
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.removeProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "x")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.projectDesc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, project.description));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]); // I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.




/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagementSystem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Category_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Category.js */ "./components/Category.js");

var _jsxFileName = "/home/hasan_sh/Documents/development/react/projectManegmentTool/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var API = 'http://localhost:4000/graphql';

var ManagementSystem =
/*#__PURE__*/
function (_Component) {
  _inherits(ManagementSystem, _Component);

  _createClass(ManagementSystem, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, res, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "{\n      allCategories {\n        id\n        name\n        projects {\n          title\n          description\n          id\n        }\n      }\n    }";
                _context.next = 3;
                return fetch(API, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                _ref = _context.sent;
                data = _ref.data;
                return _context.abrupt("return", data);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function ManagementSystem() {
    var _this;

    _classCallCheck(this, ManagementSystem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ManagementSystem).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
      _this.setState({
        categories: _this.props.allCategories
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (e, targetCategoryId) {
      var fromCategoryId = e.dataTransfer.getData('fromCategoryId');
      var draggedProject = JSON.parse(e.dataTransfer.getData('draggedProject'));

      var categories = _this.state.categories.slice();

      if (targetCategoryId === fromCategoryId) return; // To category..

      var targetCategory = [];
      var targetCategoryIndex = -1;
      categories.forEach(function (category, index) {
        if (category.id === targetCategoryId) {
          targetCategory = category;
          targetCategoryIndex = index;
        } else if (fromCategoryId === category.id) {
          category.projects = category.projects.filter(function (project) {
            return project.id !== draggedProject.id;
          });
        }
      });
      targetCategory.projects.push(draggedProject);
      categories.splice(targetCategoryIndex, 1, targetCategory);

      _this.setState({
        categories: categories
      });

      _this.updateDB({
        fromCategoryId: fromCategoryId,
        toCategoryId: targetCategoryId,
        projectId: draggedProject.id
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDB",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
        var fromCategoryId, toCategoryId, projectId, query, res, _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fromCategoryId = _ref2.fromCategoryId, toCategoryId = _ref2.toCategoryId, projectId = _ref2.projectId;
                query = "\n      mutation  MoveProject($input: MoveProjectInput) {\n          moveProject(input: $input)\n          {\n            id\n            name\n            projects {\n              title\n              id\n            }\n          }\n         }\n    ";
                _context2.next = 4;
                return fetch(API, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      input: {
                        fromCategoryId: fromCategoryId,
                        toCategoryId: toCategoryId,
                        projectId: projectId
                      }
                    }
                  })
                });

              case 4:
                res = _context2.sent;
                _context2.next = 7;
                return res.json();

              case 7:
                _ref4 = _context2.sent;
                data = _ref4.data;
                console.log('the data: ', data);
                return _context2.abrupt("return", data);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      categories: []
    };
    return _this;
  }

  _createClass(ManagementSystem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log('the state:', this.state)
      var categories = this.state.categories;
      var allCategories = categories.map(function (category) {
        return (// <div key={category.id} className={css.item}>
          // </div>
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Category_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            key: category.id,
            category: category,
            onDrop: _this2.onDrop,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            },
            __self: this
          })
        );
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, allCategories));
    }
  }]);

  return ManagementSystem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.



    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4bbfd998f4dea5fb46b5.hot-update.js.map