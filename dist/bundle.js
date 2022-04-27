// [DozTab]  Build version: 1.7.0  
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "tab", function() { return /* reexport */ Tab; });
__webpack_require__.d(__webpack_exports__, "tabItem", function() { return /* reexport */ TabItem; });

// EXTERNAL MODULE: external {"commonjs":"doz","commonjs2":"doz","amd":"doz","root":"Doz"}
var external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/tab.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Tab = /*#__PURE__*/function (_Component) {
  _inherits(Tab, _Component);

  var _super = _createSuper(Tab);

  function Tab(o) {
    var _this;

    _classCallCheck(this, Tab);

    _this = _super.call(this, o);
    _this.props = {
      items: [],
      initial: 0,
      buttonsPosition: 'top',
      //top|left|right|bottom
      buttonsWrap: false,
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
    _this.propsType = {
      initial: 'number'
    };
    return _this;
  }

  _createClass(Tab, [{
    key: "template",
    value: function template(h) {
      var _this2 = this;

      var isVertical = this.props.buttonsPosition === 'left' || this.props.buttonsPosition === 'right'; //language=html

      return h(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <div class=\"tab-controller\">\n                <style> \n                    * {\n                        box-sizing: border-box;\n                    }\n                    \n                    :component {\n                        ", "\n                        \n                        background: ", ";\n                    }\n\n                    .tab-controller {\n                        ", "\n                    }\n                    \n                    ul.tab-buttons {\n                        display: flex;\n                        flex: 1;\n                        flex-wrap: ", ";\n                        flex-direction: ", ";\n                        justify-content: stretch;\n                        \n                        padding: 0;\n                        margin: 0;\n                        list-style: none;\n                        overflow: auto;\n                        user-select: none;\n                    }\n                    \n                    .tab-buttons li {\n                        cursor: pointer;\n                        flex: 1;\n                        padding: ", " ;\n                        color: ", ";\n                        background: ", ";\n                        text-align: center;\n                        text-transform: uppercase;\n                        font-size: ", ";\n                        font-weight: bold;\n                    }\n                    \n                    .tab-buttons li:hover {\n                        color: ", ";\n                        background: ", ";\n                    }\n                    \n                    .tab-buttons li.selected {\n                        color: ", ";\n                        background: ", ";\n                    }\n                </style>\n                <ul class=\"tab-buttons\">\n                    ", "\n                </ul>\n            </div>\n        "])), isVertical ? "\n                                display: flex;\n                                flex-direction: ".concat(this.props.buttonsPosition === 'left' ? 'row-reverse' : 'row', " ;\n                            ") : "\n                                display: flex;\n                                flex-wrap: wrap;\n                                flex-direction: ".concat(this.props.buttonsPosition === 'top' ? 'column-reverse' : 'column', ";\n                            "), this.props.bodyBackgroundColor, isVertical ? "" : "width: 100%;", this.props.buttonsWrap ? 'wrap' : 'nowrap', isVertical ? 'column' : 'unset', this.props.buttonsSize === 'large' ? '16px' : '8px', this.props.buttonColor, this.props.buttonBackgroundColor, this.props.buttonSize === 'large' ? '14px' : '12px', this.props.buttonHoverColor, this.props.buttonHoverBackgroundColor, this.props.buttonSelectedColor, this.props.buttonSelectedBackgroundColor, this.props.items.map(function (item, i) {
        return h(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                        <li forceupdate class=\"", "\" onclick=\"", "\">\n                            ", "\n                        </li>\n                    "])), item.selected ? 'selected' : '', function () {
          return _this2.selectTabItem(i);
        }, typeof item.title === 'function' ? h(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<", "/>"])), item.title) : item.title);
      }));
    }
  }, {
    key: "onMountAsync",
    value: function onMountAsync() {
      var itemComponents = Object.values(this.children);
      var tabItem;

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
    key: "selectTabItem",
    value: function selectTabItem(index) {
      var itemComponents = Object.values(this.children);
      var tabItem;
      var isSelected;

      for (var i = 0; i < itemComponents.length; i++) {
        tabItem = itemComponents[i];
        if (!tabItem.props.__is_tab_item) continue;
        isSelected = i === index;
        tabItem.props.show = isSelected;
        this.props.items[i].selected = isSelected;
      }
      /*setTimeout(() => {
          const elSelected = document.querySelector('.tab-buttons .selected');
          if (elSelected) {
              elSelected.scrollIntoView();
          }
      })*/

    }
  }]);

  return Tab;
}(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["Component"]);


;
// CONCATENATED MODULE: ./src/tab-item.js
function tab_item_typeof(obj) { "@babel/helpers - typeof"; return tab_item_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, tab_item_typeof(obj); }

var tab_item_templateObject;

function tab_item_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function tab_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tab_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tab_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) tab_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) tab_item_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function tab_item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) tab_item_setPrototypeOf(subClass, superClass); }

function tab_item_setPrototypeOf(o, p) { tab_item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tab_item_setPrototypeOf(o, p); }

function tab_item_createSuper(Derived) { var hasNativeReflectConstruct = tab_item_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tab_item_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tab_item_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tab_item_possibleConstructorReturn(this, result); }; }

function tab_item_possibleConstructorReturn(self, call) { if (call && (tab_item_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return tab_item_assertThisInitialized(self); }

function tab_item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tab_item_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function tab_item_getPrototypeOf(o) { tab_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tab_item_getPrototypeOf(o); }



var TabItem = /*#__PURE__*/function (_Component) {
  tab_item_inherits(TabItem, _Component);

  var _super = tab_item_createSuper(TabItem);

  function TabItem(o) {
    var _this;

    tab_item_classCallCheck(this, TabItem);

    _this = _super.call(this, o);
    _this.props = {
      __is_tab_item: true,
      show: false,
      height: '50px'
    };
    return _this;
  }

  tab_item_createClass(TabItem, [{
    key: "template",
    value: function template(h) {
      //language=html
      return h(tab_item_templateObject || (tab_item_templateObject = tab_item_taggedTemplateLiteral(["\n            <style> \n                :component {\n                    width: 100%;\n                    display: ", ";\n                    height: ", ";\n                    overflow-y: ", ";\n                }\n            </style>\n            <dz-empty/>\n        "])), this.props.show ? 'block' : 'none', this.props.height, this.props.height === 'auto' ? 'visible' : 'auto');
    }
  }]);

  return TabItem;
}(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["Component"]);


;
// CONCATENATED MODULE: ./index.js


 // expose component to global scope

function register() {
  if (typeof window !== 'undefined') {
    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["define"])('doz-tab', Tab);
    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["define"])('doz-tab-item', TabItem);

    if (external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["defineWebComponent"]) {
      var tabProps = ['items', 'initial', 'buttons-position', 'height', 'buttons-size', 'body-background-color', 'button-color', 'button-background-color', 'button-hover-color', 'button-hover-background-color', 'button-selected-color', 'button-selected-background-color'];
      var tabExposedMethods = ['selectTabItem'];
      Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["defineWebComponent"])('dwc-doz-tab', Tab, tabProps, tabExposedMethods); //createDozWebComponent('doz-tab-item');
    }
  }
}

register();


if (false) {}

/***/ })
/******/ ]);
}); 