// [DozTab]  Build version: 1.8.1  
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Tab = /*#__PURE__*/function (_Component) {
  function Tab(o) {
    var _this;
    _classCallCheck(this, Tab);
    _this = _callSuper(this, Tab, [o]);
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
  _inherits(Tab, _Component);
  return _createClass(Tab, [{
    key: "template",
    value: function template(h) {
      var _this2 = this;
      var isVertical = this.props.buttonsPosition === 'left' || this.props.buttonsPosition === 'right';
      //language=html
      return h(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <div class=\"tab-controller\">\n                <style>\n                    * {\n                        box-sizing: border-box;\n                    }\n\n                    :component {\n                        ", "\n\n                        background: ", ";\n                    }\n\n                    .tab-controller {\n                        ", "\n                    }\n\n                    ul.tab-buttons {\n                        display: flex;\n                        flex: 1;\n                        flex-wrap: ", ";\n                        flex-direction: ", ";\n                        justify-content: stretch;\n\n                        padding: 0;\n                        margin: 0;\n                        list-style: none;\n                        overflow: auto;\n                        user-select: none;\n                    }\n\n                    .tab-buttons li {\n                        cursor: pointer;\n                        flex: 1;\n                        padding: ", ";\n                        color: ", ";\n                        background: ", ";\n                        text-align: center;\n                        text-transform: uppercase;\n                        font-size: ", ";\n                        font-weight: bold;\n                    }\n\n                    .tab-buttons li:hover {\n                        color: ", ";\n                        background: ", ";\n                    }\n\n                    .tab-buttons li.selected {\n                        color: ", ";\n                        background: ", ";\n                    }\n\n                    /*.tab-buttons li.focus {*/\n                    /*    outline: 1px solid inherit;*/\n                    /*    background: red;*/\n                    /*}*/\n                </style>\n                <ul class=\"tab-buttons\" role=\"tablist\">\n                    ", "\n                </ul>\n            </div>\n        "])), isVertical ? "\n                                display: flex;\n                                flex-direction: ".concat(this.props.buttonsPosition === 'left' ? 'row-reverse' : 'row', " ;\n                            ") : "\n                                display: flex;\n                                flex-wrap: wrap;\n                                flex-direction: ".concat(this.props.buttonsPosition === 'top' ? 'column-reverse' : 'column', ";\n                            "), this.props.bodyBackgroundColor, isVertical ? "" : "width: 100%;", this.props.buttonsWrap ? 'wrap' : 'nowrap', isVertical ? 'column' : 'unset', this.props.buttonsSize === 'large' ? '16px' : '8px', this.props.buttonColor, this.props.buttonBackgroundColor, this.props.buttonSize === 'large' ? '14px' : '12px', this.props.buttonHoverColor, this.props.buttonHoverBackgroundColor, this.props.buttonSelectedColor, this.props.buttonSelectedBackgroundColor, this.props.items.map(function (item, i, total) {
        return h(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                        <li forceupdate class=\"", "\" onkeydown=\"", "\" onclick=\"", "\">\n                            ", "\n                        </li>\n                    "])), item.selected ? 'selected' : '', function (event) {
          // console.log(event.key)
          if (event.key === "Enter" || event.key === " ") {
            // Supporta anche lo Space
            event.preventDefault(); // Evita comportamenti predefiniti (es. scroll con Space)
            _this2.selectTabItem(i);
          } else if (event.key === "ArrowRight") {
            _this2.selectTabItem((i + 1) % total.length);
          } else if (event.key === "ArrowLeft") {
            _this2.selectTabItem((i - 1 + total.length) % total.length);
          }
        }, function () {
          return _this2.selectTabItem(i);
        }, typeof item.title === 'function' ? h(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<", "/>"])), item.title) : item.title);
      }));
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      setTimeout(function () {
        document.querySelectorAll('.tab-buttons li').forEach(function (item) {
          item.setAttribute('role', 'tab');
          item.setAttribute('tabindex', '0');
          item.setAttribute('aria-selected', 'false');
          if (item.classList.contains('selected')) {
            // item.setAttribute('tabindex', '0');
            item.setAttribute('aria-selected', 'true');
            item.focus();
          }
        });
      }, 100);
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
}(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["Component"]);

;
// CONCATENATED MODULE: ./src/tab-item.js
function tab_item_typeof(o) { "@babel/helpers - typeof"; return tab_item_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, tab_item_typeof(o); }
var tab_item_templateObject;
function tab_item_taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function tab_item_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function tab_item_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, tab_item_toPropertyKey(o.key), o); } }
function tab_item_createClass(e, r, t) { return r && tab_item_defineProperties(e.prototype, r), t && tab_item_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function tab_item_toPropertyKey(t) { var i = tab_item_toPrimitive(t, "string"); return "symbol" == tab_item_typeof(i) ? i : i + ""; }
function tab_item_toPrimitive(t, r) { if ("object" != tab_item_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != tab_item_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function tab_item_callSuper(t, o, e) { return o = tab_item_getPrototypeOf(o), tab_item_possibleConstructorReturn(t, tab_item_isNativeReflectConstruct() ? Reflect.construct(o, e || [], tab_item_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function tab_item_possibleConstructorReturn(t, e) { if (e && ("object" == tab_item_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return tab_item_assertThisInitialized(t); }
function tab_item_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function tab_item_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (tab_item_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function tab_item_getPrototypeOf(t) { return tab_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, tab_item_getPrototypeOf(t); }
function tab_item_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && tab_item_setPrototypeOf(t, e); }
function tab_item_setPrototypeOf(t, e) { return tab_item_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, tab_item_setPrototypeOf(t, e); }

var TabItem = /*#__PURE__*/function (_Component) {
  function TabItem(o) {
    var _this;
    tab_item_classCallCheck(this, TabItem);
    _this = tab_item_callSuper(this, TabItem, [o]);
    _this.props = {
      __is_tab_item: true,
      show: false,
      height: '50px'
    };
    return _this;
  }
  tab_item_inherits(TabItem, _Component);
  return tab_item_createClass(TabItem, [{
    key: "template",
    value: function template(h) {
      //language=html
      return h(tab_item_templateObject || (tab_item_templateObject = tab_item_taggedTemplateLiteral(["\n            <style> \n                :component {\n                    width: 100%;\n                    display: ", ";\n                    height: ", ";\n                    overflow-y: ", ";\n                }\n            </style>\n            <dz-empty/>\n        "])), this.props.show ? 'block' : 'none', this.props.height, this.props.height === 'auto' ? 'visible' : 'auto');
    }
  }]);
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
      Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["defineWebComponent"])('dwc-doz-tab', Tab, tabProps, tabExposedMethods);
      //createDozWebComponent('doz-tab-item');
    }
  }
}
register();

if (false) {}

/***/ })
/******/ ]);
}); 