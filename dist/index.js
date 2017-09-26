(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shortcutsHelper; });
class ShortcutsHelper {
  constructor() {
    this.mapFunctions = [];
    this.objAvoided = [];
    this.elementAvoided = [];
    this.keyPressed = false;
  }

  init(options) {
    if (options.prevent && options.prevent.isArray) {
      throw new Error('Please define options.prevent as an array');
    }
    this.elementAvoided = options && options.prevent ? options.prevent : [];
    document.addEventListener('keydown', event => {
      const decodedKey = this.decodeKey(event);
      if (this.filteringElement(decodedKey)) {
        event.preventDefault();
        event.stopPropagation();
        for (let i = 0; i < this.mapFunctions[decodedKey].length; i++) {
          let mapFunction = this.mapFunctions[decodedKey][i];
          if (mapFunction.db) {
            continue;
          }
          if (mapFunction.fn) {
            this.keyDown(event, mapFunction, decodedKey);
            this.keyPressed = true;
          } else if (!this.keyPressed) {
            mapFunction.el.focus();
            this.keyPressed = true;
          }
        }
      }
    }, true);

    document.addEventListener('keyup', event => {
      const decodedKey = this.decodeKey(event);
      if (this.filteringElement(decodedKey)) {
        event.preventDefault();
        event.stopPropagation();
        for (let i = 0; i < this.mapFunctions[decodedKey].length; i++) {
          let mapFunction = this.mapFunctions[decodedKey][i];
          if (mapFunction.db) {
            continue;
          }
          if (mapFunction.oc || mapFunction.ps) {
            this.keyUp(event, mapFunction, decodedKey);
          }
        }
      }
      this.keyPressed = false;
    }, true);
  }

  decodeKey(pKey) {
    let k = '';
    if (pKey.key === 'Shift' || pKey.shiftKey) {
      k += 'shift';
    }
    if (pKey.key === 'Control' || pKey.ctrlKey) {
      k += 'ctrl';
    }
    if (pKey.key === 'Meta' || pKey.metaKey) {
      k += 'meta';
    }
    if (pKey.key === 'Alt' || pKey.altKey) {
      k += 'alt';
    }
    if (pKey.key === 'ArrowUp') {
      k += 'arrowup';
    }
    if (pKey.key === 'ArrowLeft') {
      k += 'arrowleft';
    }
    if (pKey.key === 'ArrowRight') {
      k += 'arrowright';
    }
    if (pKey.key === 'ArrowDown') {
      k += 'arrowdown';
    }
    if (pKey.key === 'AltGraph') {
      k += 'altgraph';
    }
    if (pKey.key === 'Escape') {
      k += 'esc';
    }
    if (pKey.key === 'Enter') {
      k += 'enter';
    }
    if (pKey.key === 'Tab') {
      k += 'tab';
    }
    if (pKey.key === ' ') {
      k += 'space';
    }
    if (pKey.key === 'PageUp') {
      k += 'pageup';
    }
    if (pKey.key === 'PageDown') {
      k += 'pagedown';
    }
    if (pKey.key === 'Home') {
      k += 'home';
    }
    if (pKey.key === 'End') {
      k += 'end';
    }
    if (pKey.key && pKey.key !== ' ' && pKey.key.length === 1 || /F\d{1,2}/g.test(pKey.key)) k += pKey.key.toLowerCase();
    return k;
  }

  keyDown(event, mapFunction, decodedKey) {
    if (!mapFunction.oc && !mapFunction.ps || mapFunction.ps && !this.keyPressed) {
      mapFunction.cb(event, decodedKey);
    }
  }

  keyUp(event, mapFunction, decodedKey) {
    mapFunction.cb(event, decodedKey);
  }

  filteringElement(decodedKey) {
    const objectAvoid = this.objAvoided.find(r => r === document.activeElement);
    const elementSeparate = this.checkElementType();
    const elementTypeAvoid = elementSeparate.avoidedTypes;
    const elementClassAvoid = elementSeparate.avoidedClasses;
    const filterTypeAvoid = elementTypeAvoid.find(r => r === document.activeElement.tagName.toLowerCase());
    const filterClassAvoid = elementClassAvoid.find(r => r === '.' + document.activeElement.className.toLowerCase());
    return !objectAvoid && this.mapFunctions[decodedKey] && this.mapFunctions[decodedKey].length && !filterTypeAvoid && !filterClassAvoid;
  }

  checkElementType() {
    let elmTypeAvoid = [];
    let elmClassAvoid = [];
    this.elementAvoided.forEach(r => {
      const dotPosition = r.indexOf('.');
      if (dotPosition === 0) {
        elmClassAvoid.push(r);
      } else if (dotPosition > 0) {
        elmTypeAvoid.push(r.split('.')[0]);
        elmClassAvoid.push('.' + r.split('.')[1]);
      } else {
        elmTypeAvoid.push(r);
      }
    });

    return { avoidedTypes: elmTypeAvoid, avoidedClasses: elmClassAvoid };
  }

  findIndexOf(k, el) {
    for (var i = 0; i < this.mapFunctions[k].length; i++) {
      if (this.mapFunctions[k][i].el === el) {
        return i;
      }
    }
  }
}

let shortcutsHelper = new ShortcutsHelper();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_shortcuts_directive__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_shortcuts_helper__ = __webpack_require__(0);



let VueShortcuts = {};

VueShortcuts.install = (Vue, options) => {
  __WEBPACK_IMPORTED_MODULE_1__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].init(options || {});
  Vue.directive('shortcuts', __WEBPACK_IMPORTED_MODULE_0__directives_shortcuts_directive__["a" /* ShortcutsDirective */]);
};

/* harmony default export */ __webpack_exports__["default"] = (VueShortcuts);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__ = __webpack_require__(0);


const ShortcutsDirective = {
  bind: (el, binding, vnode) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      if (bindings[i].avoid) {
        __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].objAvoided.push(el);
        return;
      }
      let k = bindings[i].shortcut.join('');
      if (!__WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].mapFunctions[k]) {
        __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].mapFunctions[k] = [];
      }
      __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].mapFunctions[k].push({
        'ps': bindings[i].push === true,
        'oc': bindings[i].once === true,
        'fn': !(bindings[i].focus === true),
        'db': bindings[i].disabled || false,
        'cb': bindings[i].callback,
        'el': vnode.elm
      });
    }
  },
  unbind: (el, binding) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      if (bindings[i]) {
        let k = bindings[i].shortcut.join('');

        __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].mapFunctions[k].splice(__WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].findIndexOf(k, el), 1);
      }
      let i;
      for (i in __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].objAvoided) {
        if (__WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].objAvoided[i] === el) {
          __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].objAvoided.splice(i, 1);
          break;
        }
      }
    }
  },
  update: (el, binding, vnode) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      let k = bindings[i].shortcut.join('');
      __WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].mapFunctions[k][__WEBPACK_IMPORTED_MODULE_0__helpers_shortcuts_helper__["a" /* ShortcutsHelper */].findIndexOf(k, el)].db = bindings[i].disabled || false;
    }
  }
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map