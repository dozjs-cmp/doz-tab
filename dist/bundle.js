// [DozTab]  Build version: 1.2.0  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozTab", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozTab"] = factory(require("doz"));
	else
		root["DozTab"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tabItem = exports.tab = undefined;

var _doz = __webpack_require__(0);

var _tab = __webpack_require__(2);

var _tab2 = _interopRequireDefault(_tab);

var _tabItem = __webpack_require__(3);

var _tabItem2 = _interopRequireDefault(_tabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-tab', _tab2.default);
        (0, _doz.define)('doz-tab-item', _tabItem2.default);

        if (_doz.createDozWebComponent) {
            var tabProps = ['items', 'initial', 'buttons-position', 'height', 'buttons-size', 'body-background-color', 'button-color', 'button-background-color', 'button-hover-color', 'button-hover-background-color', 'button-selected-color', 'button-selected-background-color'];

            (0, _doz.createDozWebComponent)('doz-tab', _tab2.default, tabProps);
            (0, _doz.createDozWebComponent)('doz-tab-item', _tabItem2.default);
        }
    }
}

register();

exports.tab = _tab2.default;
exports.tabItem = _tabItem2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <div class="tab-controller">\n                <style> \n                    * {\n                        box-sizing: border-box;\n                    }\n                    \n                    :component {\n                        display: flex;\n                        flex-wrap: wrap;\n                        flex-direction: ', ';\n                        background: ', ';\n                    }\n\n                    .tab-controller {\n                        width: 100%;\n                    }\n                    \n                    ul.tab-buttons {\n                        display: flex;\n                        flex: 1;\n                        padding: 0;\n                        margin: 0;\n                        list-style: none;\n                        justify-content: stretch;\n                        flex-wrap: wrap;\n                        user-select: none;\n                    }\n                    \n                    .tab-buttons li {\n                        cursor: pointer;\n                        flex: 1;\n                        padding: ', ' ;\n                        color: ', ';\n                        background: ', ';\n                        text-align: center;\n                        text-transform: uppercase;\n                        font-size: ', ';\n                        font-weight: bold;\n                    }\n                    \n                    .tab-buttons li:hover {\n                        color: ', ';\n                        background: ', ';\n                    }\n                    \n                    .tab-buttons li.selected {\n                        color: ', ';\n                        background: ', ';\n                    }\n                </style>\n                <ul class="tab-buttons">\n                    ', '\n                </ul>\n            </div>\n        '], ['\n            <div class="tab-controller">\n                <style> \n                    * {\n                        box-sizing: border-box;\n                    }\n                    \n                    :component {\n                        display: flex;\n                        flex-wrap: wrap;\n                        flex-direction: ', ';\n                        background: ', ';\n                    }\n\n                    .tab-controller {\n                        width: 100%;\n                    }\n                    \n                    ul.tab-buttons {\n                        display: flex;\n                        flex: 1;\n                        padding: 0;\n                        margin: 0;\n                        list-style: none;\n                        justify-content: stretch;\n                        flex-wrap: wrap;\n                        user-select: none;\n                    }\n                    \n                    .tab-buttons li {\n                        cursor: pointer;\n                        flex: 1;\n                        padding: ', ' ;\n                        color: ', ';\n                        background: ', ';\n                        text-align: center;\n                        text-transform: uppercase;\n                        font-size: ', ';\n                        font-weight: bold;\n                    }\n                    \n                    .tab-buttons li:hover {\n                        color: ', ';\n                        background: ', ';\n                    }\n                    \n                    .tab-buttons li.selected {\n                        color: ', ';\n                        background: ', ';\n                    }\n                </style>\n                <ul class="tab-buttons">\n                    ', '\n                </ul>\n            </div>\n        ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                        <li forceupdate class="', '" onclick="', '">', '</li>\n                    '], ['\n                        <li forceupdate class="', '" onclick="', '">', '</li>\n                    ']);

var _doz = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            items: [],
            initial: 0,
            buttonsPosition: 'top',
            height: '200px',
            buttonsSize: 'large',
            bodyBackgroundColor: '#eee',
            buttonColor: '#000',
            buttonBackgroundColor: '#ccc',
            buttonHoverColor: '#fff',
            buttonHoverBackgroundColor: '#444',
            buttonSelectedColor: '#fff',
            buttonSelectedBackgroundColor: '#888'
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            var _this2 = this;

            return h(_templateObject, this.props.buttonsPosition === 'top' ? 'column-reverse' : 'column', this.props.bodyBackgroundColor, this.props.buttonsSize === 'large' ? '16px' : '8px', this.props.buttonColor, this.props.buttonBackgroundColor, this.props.buttonSize === 'large' ? '14px' : '12px', this.props.buttonHoverColor, this.props.buttonHoverBackgroundColor, this.props.buttonSelectedColor, this.props.buttonSelectedBackgroundColor, this.props.items.map(function (item, i) {
                return h(_templateObject2, item.selected ? 'selected' : '', function () {
                    return _this2.selectTabItem(i);
                }, item.title);
            }));
        }
    }, {
        key: 'onMountAsync',
        value: function onMountAsync() {
            var itemComponents = Object.values(this.children);
            var tabItem = void 0;
            for (var i = 0; i < itemComponents.length; i++) {
                tabItem = itemComponents[i];
                tabItem.props.height = this.props.height;
                this.props.items.push({
                    title: tabItem.props.title,
                    selected: false
                });
            }
            this.selectTabItem(this.props.initial);
        }
    }, {
        key: 'selectTabItem',
        value: function selectTabItem(index) {
            var itemComponents = Object.values(this.children);
            var tabItem = void 0;
            var isSelected = void 0;
            for (var i = 0; i < itemComponents.length; i++) {
                isSelected = i === index;
                tabItem = itemComponents[i];
                tabItem.props.show = isSelected;
                this.props.items[i].selected = isSelected;
            }
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            <style> \n                :component {\n                    display: ', ';\n                    height: ', ';\n                    overflow-y: auto;\n                }\n            </style>\n            <dz-empty/>\n        '], ['\n            <style> \n                :component {\n                    display: ', ';\n                    height: ', ';\n                    overflow-y: auto;\n                }\n            </style>\n            <dz-empty/>\n        ']);

var _doz = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.props = {
            show: false,
            height: '50px'
        };
        return _this;
    }

    _createClass(_class, [{
        key: 'template',
        value: function template(h) {
            return h(_templateObject, this.props.show ? 'block' : 'none', this.props.height);
        }
    }]);

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ })
/******/ ]);
}); 