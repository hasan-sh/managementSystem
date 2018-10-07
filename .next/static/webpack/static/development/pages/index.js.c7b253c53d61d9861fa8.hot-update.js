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
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ "./components/Project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/hasan_sh/Documents/development/react/projectManegmentTool/components/Category.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var API = 'http://localhost:4000/graphql';

var Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    var _this;

    _classCallCheck(this, Category);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Category).call(this));
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
          _onDrop = _this$props.onDrop,
          removeProject = _this$props.removeProject;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.item,
        key: category.id,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: function onDrop(e) {
          return _onDrop(e, category.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.categoryName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, category.name), category.projects.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Project_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: project.id,
          project: project,
          categoryId: category.id,
          removeProject: removeProject,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });
      }));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); // I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.




/***/ }),

/***/ "./components/layout.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Category_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Category.js */ "./components/Category.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/service */ "./util/service.js");

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
        var query;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "{\n      allCategories {\n        id\n        name\n        projects {\n          title\n          description\n          id\n        }\n      }\n    }";
                return _context.abrupt("return", Object(_util_service__WEBPACK_IMPORTED_MODULE_5__["default"])(query));

              case 2:
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
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var fromCategoryId, toCategoryId, projectId, query, res, _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fromCategoryId = _ref.fromCategoryId, toCategoryId = _ref.toCategoryId, projectId = _ref.projectId;
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
                _ref3 = _context2.sent;
                data = _ref3.data;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeProject",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(categoryId, projectId) {
        var query, res, _ref5, data, categories;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "\n    mutation  RemoveProject($input: RemoveProjectInput) {\n        removeProject(input: $input) {\n            title\n            id\n            description\n        }\n    }\n  ";
                _context3.next = 3;
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
                        id: categoryId,
                        projectId: projectId
                      }
                    }
                  })
                });

              case 3:
                res = _context3.sent;
                _context3.next = 6;
                return res.json();

              case 6:
                _ref5 = _context3.sent;
                data = _ref5.data;
                console.log(data);

                if (data) {
                  categories = _this.state.categories.slice();
                  categories.forEach(function (category, index) {
                    if (category.id === categoryId) {
                      category.projects = category.projects.filter(function (project) {
                        return project.id !== projectId;
                      });
                    }
                  });

                  _this.setState({
                    categories: categories
                  });
                }

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addProject",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
        var _this$state, title, desc, query, res, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, title = _this$state.title, desc = _this$state.desc;

                if (!(title && desc)) {
                  _context4.next = 14;
                  break;
                }

                query = "\n    mutation  SetProject($input: SetProjectInput) {\n        setProject(input: $input) {\n          id\n          name\n          projects {\n            id\n            title\n            description\n          }\n        }\n    }\n  ";
                _context4.next = 6;
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
                        title: title,
                        description: desc,
                        id: _this.state.categories[0].id
                      }
                    }
                  })
                });

              case 6:
                res = _context4.sent;
                _context4.next = 9;
                return res.json();

              case 9:
                _ref7 = _context4.sent;
                data = _ref7.data;

                _this.setState({
                  categories: data.setProject,
                  title: '',
                  desc: ''
                });

                _context4.next = 15;
                break;

              case 14:
                alert('Please, add title or description.');

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());

    _this.state = {
      categories: [],
      title: '',
      desc: ''
    };
    return _this;
  }

  _createClass(ManagementSystem, [{
    key: "handleChange",
    value: function handleChange(event, type) {
      this.setState(_defineProperty({}, type, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log('the state:', this.state)
      var categories = this.state.categories;
      var allCategories = categories.map(function (category) {
        return (// <div key={category.id} className={css.item}>
          // </div>
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Category_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: category.id,
            category: category,
            onDrop: _this2.onDrop,
            removeProject: _this2.removeProject,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          })
        );
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, allCategories.length > 0 ? allCategories : 'Please Add Categories first!'), allCategories.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.addProject,
        className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.addProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: 'Title',
        value: this.state.title,
        onChange: function onChange(e) {
          return _this2.handleChange(e, 'title');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        type: "text",
        placeholder: 'Description',
        value: this.state.desc,
        onChange: function onChange(e) {
          return _this2.handleChange(e, 'desc');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Add Project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })) : null);
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

/***/ }),

/***/ "./util/service.js":
/*!*************************!*\
  !*** ./util/service.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API = 'http://localhost:4000/graphql';


var fetchFromGraphql =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
    var variables,
        res,
        _ref2,
        data,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
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
                  input: _objectSpread({}, variables)
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
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchFromGraphql(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (fetchFromGraphql);

/***/ })

})
//# sourceMappingURL=index.js.c7b253c53d61d9861fa8.hot-update.js.map