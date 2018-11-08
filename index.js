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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMWFhNDU2NmMxNTgxZTc5NTgyNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlByb3BUeXBlc1wiLFwiY29tbW9uanMyXCI6XCJwcm9wLXR5cGVzXCIsXCJjb21tb25qc1wiOlwicHJvcC10eXBlc1wiLFwiYW1kXCI6XCJwcm9wLXR5cGVzXCJ9Il0sIm5hbWVzIjpbIkNvbnRleHRNZW51Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInByb3BzIiwic3RhdGUiLCJzdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsInpJbmRleCIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3MiLCJjb250ZXh0Iiwic2V0U3RhdGUiLCJ3aW5kb3dTaXplIiwiZ2V0V2luZG93U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJrZXkiLCJzaG93IiwibmFtZSIsIm9uQ2xpY2siLCJlbmFibGUiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIkNvbnRleHRNZW51SXRlbSIsIm1vdXNlT3ZlciIsIm1lbnUiLCJybU1vdXNlT3ZlciIsInJtRGlzYWJsZWQiLCJybVNlcGFyYXRvciIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1FBQ1FBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7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S0FBSzNCLEtBQUwsQ0FBV3lDLElBQVgsQ0FBZ0J4QyxLQUFoQixDQUFzQmMsT0FBekM7QUFDQSxhQUFLZixLQUFMLENBQVd5QyxJQUFYLENBQWdCOUIsS0FBaEI7QUFDRDtBQUNGOzs7NkJBRU87QUFBQTs7QUFDTixhQUNFO0FBQ0UsbUJBQVcsMEJBQVcsWUFBWCxFQUF5QixFQUFDK0IsYUFBYSxLQUFLekMsS0FBTCxDQUFXdUMsU0FBekIsRUFBb0NHLFlBQVksQ0FBQyxLQUFLM0MsS0FBTCxDQUFXNEIsTUFBNUQsRUFBb0VnQixhQUFhLEtBQUs1QyxLQUFMLENBQVcwQixJQUFYLElBQW1CLEdBQXBHLEVBQXpCLEVBQW1JLEtBQUsxQixLQUFMLENBQVc2QixTQUE5SSxDQURiO0FBRUUscUJBQWE7QUFBQSxpQkFBSyxPQUFLZ0IsV0FBTCxDQUFpQmpDLENBQWpCLENBQUw7QUFBQSxTQUZmO0FBR0Usb0JBQVk7QUFBQSxpQkFBSyxPQUFLa0MsVUFBTCxDQUFnQmxDLENBQWhCLENBQUw7QUFBQSxTQUhkO0FBSUUsaUJBQVM7QUFBQSxpQkFBSyxPQUFLZSxPQUFMLENBQWFmLENBQWIsQ0FBTDtBQUFBLFNBSlg7QUFLRSxpQ0FBeUIsRUFBQ21DLFFBQVEsS0FBSy9DLEtBQUwsQ0FBVzBCLElBQVgsSUFBbUIsR0FBbkIsR0FBeUIsSUFBekIsR0FBZ0MsS0FBSzFCLEtBQUwsQ0FBVzBCLElBQXBEO0FBTDNCLFFBREY7QUFVRDs7OztFQXZDMEMsZ0JBQU1JLFM7O2tCQUE5QlMsZTs7Ozs7O0FDSHJCLCtDOzs7Ozs7QUNBQSwrQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJjbGFzc25hbWVzXCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSkgOiBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcImNsYXNzTmFtZXNcIl0sIHJvb3RbXCJQcm9wVHlwZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMWFhNDU2NmMxNTgxZTc5NTgyNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9qcy9jb21wb25lbnRzL0NvbnRleHRNZW51JztcbmV4cG9ydCB7Q29udGV4dE1lbnV9XG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmVzNiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9Db250ZXh0TWVudUl0ZW0nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIHN0YXRpYyBnZXRXaW5kb3dTaXplKCl7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXhcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm1NZW51T3ZlcmxheScpO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInBvc2l0aW9uXCJdID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJ0b3BcIl0gPSAnMCc7XG4gICAgdGhpcy5vdmVybGF5LnN0eWxlW1wibGVmdFwiXSA9ICcwJztcbiAgICB0aGlzLm92ZXJsYXkuc3R5bGVbXCJkaXNwbGF5XCJdID0gJ25vbmUnO1xuICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcInpJbmRleFwiXSA9IHRoaXMucHJvcHMuekluZGV4IC0gMTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhwb3MsIGNvbnRleHQpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwgcG9zLCB7ZGlzcGxheTogJ2Jsb2NrJ30pLFxuICAgICAgY29udGV4dDogY29udGV4dFxuICAgIH0sICgpID0+IHtcbiAgICAgIGxldCB3aW5kb3dTaXplID0gQ29udGV4dE1lbnUuZ2V0V2luZG93U2l6ZSgpO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlW1wid2lkdGhcIl0gPSB3aW5kb3dTaXplLndpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVtcImhlaWdodFwiXSA9IHdpbmRvd1NpemUuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBjb25zb2xlLmxvZygnb3V0Jyk7XG4gIH1cblxuICBvbk1vdXNlT3Zlcigpe1xuICAgIGNvbnNvbGUubG9nKCdvdmVyJyk7XG4gIH1cblxuICBjbG9zZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7c3R5bGU6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5zdHlsZSwge2Rpc3BsYXk6ICdub25lJ30pfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlWydkaXNwbGF5J10gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj1cIm1lbnVcIiBjbGFzc05hbWU9XCJybU1lbnVcIiBzdHlsZT17dGhpcy5zdGF0ZS5zdHlsZX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJybU1lbnVJdGVtTGlzdFwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbnRleHQgPyB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZighaXRlbS5zaG93IHx8IGl0ZW0uc2hvdyh0aGlzLnN0YXRlLmNvbnRleHQpKXtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lKHRoaXMuc3RhdGUuY29udGV4dCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBtZW51PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgZW5hYmxlPXtpdGVtLmVuYWJsZSA/IGl0ZW0uZW5hYmxlKHRoaXMuc3RhdGUuY29udGV4dCkgOiB0cnVlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgOiBudWxsfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZXh0TWVudS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvdzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlclxufVxuXG5Db250ZXh0TWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHpJbmRleDogMTAwXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudS5qc3giLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG57XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3VzZU92ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIG9uTW91c2VPdXQoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU92ZXIoKXtcbiAgICBpZih0aGlzLnByb3BzLmVuYWJsZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGUpe1xuICAgIGlmKHRoaXMucHJvcHMuZW5hYmxlKXtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm1lbnUuc3RhdGUuY29udGV4dCk7XG4gICAgICB0aGlzLnByb3BzLm1lbnUuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcInJtTWVudUl0ZW1cIiwge3JtTW91c2VPdmVyOiB0aGlzLnN0YXRlLm1vdXNlT3Zlciwgcm1EaXNhYmxlZDogIXRoaXMucHJvcHMuZW5hYmxlLCBybVNlcGFyYXRvcjogdGhpcy5wcm9wcy5uYW1lID09ICctJ30sIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgb25Nb3VzZU92ZXI9e2UgPT4gdGhpcy5vbk1vdXNlT3ZlcihlKX1cbiAgICAgICAgb25Nb3VzZU91dD17ZSA9PiB0aGlzLm9uTW91c2VPdXQoZSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5uYW1lID09ICctJyA/IG51bGwgOiB0aGlzLnByb3BzLm5hbWV9fVxuICAgICAgPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9Db250ZXh0TWVudUl0ZW0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJjbGFzc05hbWVzXCIsXCJjb21tb25qczJcIjpcImNsYXNzbmFtZXNcIixcImNvbW1vbmpzXCI6XCJjbGFzc25hbWVzXCIsXCJhbWRcIjpcImNsYXNzbmFtZXNcIn1cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQcm9wVHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImFtZFwiOlwicHJvcC10eXBlc1wifVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9