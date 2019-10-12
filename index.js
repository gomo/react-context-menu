(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("classnames"), require("prop-types")) : factory(root["React"], root["classNames"], root["PropTypes"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
                enable: item.enable ? item.enable(_this4.state.context) : true,
                className: item.className
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
    enable: _propTypes2.default.func,
    className: _propTypes2.default.string
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
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
	} catch (err) {
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

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
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

      var dangerousHtml = _react2.default.isValidElement(this.props.name) ? null : { __html: this.props.name == '-' ? null : this.props.name };
      return _react2.default.createElement(
        'li',
        {
          className: (0, _classnames2.default)("rmMenuItem", { rmMouseOver: this.state.mouseOver, rmDisabled: !this.props.enable, rmSeparator: this.props.name == '-' }, this.props.className),
          onMouseOver: function onMouseOver(e) {
            return _this2.onMouseOver(e);
          },
          onMouseOut: function onMouseOut(e) {
            return _this2.onMouseOut(e);
          },
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          dangerouslySetInnerHTML: dangerousHtml
        },
        _react2.default.isValidElement(this.props.name) ? this.props.name : null
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZDU0MGM0ZTM4MDI0MjlmMmZjNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9Il0sIm5hbWVzIjpbIkNvbnRleHRNZW51Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInByb3BzIiwic3RhdGUiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsInpJbmRleCIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3MiLCJjb250ZXh0Iiwic2V0U3RhdGUiLCJ3aW5kb3dTaXplIiwiZ2V0V2luZG93U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJzaG93IiwibmFtZSIsIm9uQ2xpY2siLCJlbmFibGUiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiQ29udGV4dE1lbnVJdGVtIiwibW91c2VPdmVyIiwibWVudSIsImRhbmdlcm91c0h0bWwiLCJpc1ZhbGlkRWxlbWVudCIsIl9faHRtbCIsInJtTW91c2VPdmVyIiwicm1EaXNhYmxlZCIsInJtU2VwYXJhdG9yIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7UUFD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LEtBQUsxQixLQUFMLENBQVcwQixJQUFuRCxHQUEwRDtBQVA3RCxPQURGO0FBV0Q7Ozs7RUF6QzBDSSxnQkFBTUMsUzs7a0JBQTlCVSxlOzs7Ozs7QUNIckIsK0M7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImNsYXNzbmFtZXNcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImNsYXNzbmFtZXNcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKSA6IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiY2xhc3NOYW1lc1wiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZDU0MGM0ZTM4MDI0MjlmMmZjNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51JztcbmV4cG9ydCB7Q29udGV4dE1lbnV9XG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmVzNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9Db250ZXh0TWVudUl0ZW0nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHN0YXRpYyBnZXRXaW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm1NZW51T3ZlcmxheScpO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInBvc2l0aW9uXCJdID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ0b3BcIl0gPSAnMCc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wibGVmdFwiXSA9ICcwJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJkaXNwbGF5XCJdID0gJ25vbmUnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInpJbmRleFwiXSA9IHRoaXMucHJvcHMuekluZGV4IC0gMTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhwb3MsIGNvbnRleHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwgcG9zLCB7ZGlzcGxheTogJ2Jsb2NrJ30pLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH0sICgpID0+IHtcbiAgICAgIGxldCB3aW5kb3dTaXplID0gQ29udGV4dE1lbnUuZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wid2lkdGhcIl0gPSB3aW5kb3dTaXplLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImhlaWdodFwiXSA9IHdpbmRvd1NpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBjb25zb2xlLmxvZygnb3V0Jyk7XG4gIH1cblxuICBvbk1vdXNlT3Zlcigpe1xuICAgIGNvbnNvbGUubG9nKCdvdmVyJyk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7c3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwge2Rpc3BsYXk6ICdub25lJ30pfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1lbnVcIiBjbGFzc05hbWU9XCJybU1lbnVcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJybU1lbnVJdGVtTGlzdFwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbnRleHQgPyB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZighaXRlbS5zaG93IHx8IGl0ZW0uc2hvdyh0aGlzLnN0YXRlLmNvbnRleHQpKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lKHRoaXMuc3RhdGUuY29udGV4dCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBtZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgZW5hYmxlPXtpdGVtLmVuYWJsZSA/IGl0ZW0uZW5hYmxlKHRoaXMuc3RhdGUuY29udGV4dCkgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgOiBudWxsfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZXh0TWVudS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5Db250ZXh0TWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHpJbmRleDogMTAwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudS5qc3giLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW91c2VPdmVyOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBvbk1vdXNlT3V0KCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VPdmVyKCl7XG4gICAgaWYodGhpcy5wcm9wcy5lbmFibGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhlKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5tZW51LnN0YXRlLmNvbnRleHQpO1xuICAgICAgdGhpcy5wcm9wcy5tZW51LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgZGFuZ2Vyb3VzSHRtbCA9IFJlYWN0LmlzVmFsaWRFbGVtZW50KHRoaXMucHJvcHMubmFtZSkgPyBudWxsIDoge19faHRtbDogdGhpcy5wcm9wcy5uYW1lID09ICctJyA/IG51bGwgOiB0aGlzLnByb3BzLm5hbWV9XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJybU1lbnVJdGVtXCIsIHtybU1vdXNlT3ZlcjogdGhpcy5zdGF0ZS5tb3VzZU92ZXIsIHJtRGlzYWJsZWQ6ICF0aGlzLnByb3BzLmVuYWJsZSwgcm1TZXBhcmF0b3I6IHRoaXMucHJvcHMubmFtZSA9PSAnLSd9LCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgIG9uTW91c2VPdmVyPXtlID0+IHRoaXMub25Nb3VzZU92ZXIoZSl9XG4gICAgICAgIG9uTW91c2VPdXQ9e2UgPT4gdGhpcy5vbk1vdXNlT3V0KGUpfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGljayhlKX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2Rhbmdlcm91c0h0bWx9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5pc1ZhbGlkRWxlbWVudCh0aGlzLnByb3BzLm5hbWUpID8gdGhpcy5wcm9wcy5uYW1lIDogbnVsbH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvQ29udGV4dE1lbnVJdGVtLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiY2xhc3NOYW1lc1wiLFwiY29tbW9uanMyXCI6XCJjbGFzc25hbWVzXCIsXCJjb21tb25qc1wiOlwiY2xhc3NuYW1lc1wiLFwiYW1kXCI6XCJjbGFzc25hbWVzXCJ9XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJjb21tb25qczJcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzXCI6XCJwcm9wLXR5cGVzXCIsXCJhbWRcIjpcInByb3AtdHlwZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==