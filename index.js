(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("prop-types")) : factory(root["React"], root["classNames"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = undefined;

var _ContextMenu = __webpack_require__(2);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ContextMenu = _ContextMenu2.default;
exports.default = _ContextMenu2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(3);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _ContextMenuItem = __webpack_require__(4);

var _ContextMenuItem2 = _interopRequireDefault(_ContextMenuItem);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenu = function (_React$Component) {
  _inherits(ContextMenu, _React$Component);

  _createClass(ContextMenu, null, [{
    key: 'getWindowSize',
    value: function getWindowSize() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      return { width: width, height: height };
    }
  }]);

  function ContextMenu(props) {
    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

    _this.state = {
      style: {
        position: 'absolute',
        display: 'none',
        zIndex: _this.props.zIndex
      }
    };

    _this.overlay = document.createElement('div');
    _this.overlay.setAttribute('class', 'rmMenuOverlay');
    _this.overlay.style["position"] = 'absolute';
    _this.overlay.style["top"] = '0';
    _this.overlay.style["left"] = '0';
    _this.overlay.style["display"] = 'none';
    _this.overlay.style["zIndex"] = _this.props.zIndex - 1;
    document.body.appendChild(_this.overlay);
    _this.overlay.addEventListener('click', function (e) {
      return _this.close();
    });
    _this.overlay.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      _this.close();
    });
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'show',
    value: function show(pos, context) {
      var _this2 = this;

      this.setState({
        style: (0, _objectAssign2.default)({}, this.state.style, pos, { display: 'block' }),
        context: context
      }, function () {
        var windowSize = ContextMenu.getWindowSize();
        _this2.overlay.style["width"] = windowSize.width + 'px';
        _this2.overlay.style["height"] = windowSize.height + 'px';
        _this2.overlay.style['display'] = 'block';
      });
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      console.log('out');
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      console.log('over');
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      this.setState({ style: (0, _objectAssign2.default)({}, this.state.style, { display: 'none' }) }, function () {
        _this3.overlay.style['display'] = 'none';
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { ref: 'menu', className: 'rmMenu', style: this.state.style },
        _react2.default.createElement(
          'ul',
          { className: 'rmMenuItemList' },
          this.state.context ? this.props.items.map(function (item, key) {
            if (!item.show || item.show(_this4.state.context)) {
              return _react2.default.createElement(_ContextMenuItem2.default, {
                key: key,
                name: item.name(_this4.state.context),
                onClick: item.onClick,
                menu: _this4,
                enable: item.enable ? item.enable(_this4.state.context) : true
              });
            }
          }) : null
        )
      );
    }
  }]);

  return ContextMenu;
}(_react2.default.Component);

exports.default = ContextMenu;


ContextMenu.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.func.isRequired,
    onClick: _propTypes2.default.func,
    show: _propTypes2.default.func,
    enable: _propTypes2.default.func
  })).isRequired,
  zIndex: _propTypes2.default.number
};

ContextMenu.defaultProps = {
  zIndex: 100
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenuItem = function (_React$Component) {
  _inherits(ContextMenuItem, _React$Component);

  function ContextMenuItem(props) {
    _classCallCheck(this, ContextMenuItem);

    var _this = _possibleConstructorReturn(this, (ContextMenuItem.__proto__ || Object.getPrototypeOf(ContextMenuItem)).call(this, props));

    _this.state = {
      mouseOver: false
    };
    return _this;
  }

  _createClass(ContextMenuItem, [{
    key: 'onMouseOut',
    value: function onMouseOut() {
      if (this.props.enable) {
        this.setState({ mouseOver: false });
      }
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      if (this.props.enable) {
        this.setState({ mouseOver: true });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.enable) {
        this.props.onClick(this.props.menu.state.context);
        this.props.menu.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('li', {
        className: (0, _classnames2.default)("rmMenuItem", { rmMouseOver: this.state.mouseOver, rmDisabled: !this.props.enable, rmSeparator: this.props.name == '-' }),
        onMouseOver: function onMouseOver(e) {
          return _this2.onMouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return _this2.onMouseOut(e);
        },
        onClick: function onClick(e) {
          return _this2.onClick(e);
        },
        dangerouslySetInnerHTML: { __html: this.props.name == '-' ? null : this.props.name }
      });
    }
  }]);

  return ContextMenuItem;
}(_react2.default.Component);

exports.default = ContextMenuItem;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});