!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.mapFunctions=[],this.objAvoided=[],this.elementAvoided=[],this.keyPressed=!1}return o(e,[{key:"init",value:function(e){var t=this;if(e.prevent&&e.prevent.isArray)throw new Error("Please define options.prevent as an array");this.elementAvoided=e&&e.prevent?e.prevent:[],document.addEventListener("keydown",function(e){var n=t.decodeKey(e);if(t.filteringElement(n)){for(var r=!0,o=0;o<t.mapFunctions[n].length;o++){var i=t.mapFunctions[n][o];i.pv||(r=!1),i.db||(i.fn?(t.keyDown(e,i,n),t.keyPressed=!0):t.keyPressed||(i.el.focus(),t.keyPressed=!0))}r&&(e.preventDefault(),e.stopPropagation())}},!0),document.addEventListener("keyup",function(e){var n=t.decodeKey(e);if(t.filteringElement(n)){for(var r=!0,o=0;o<t.mapFunctions[n].length;o++){var i=t.mapFunctions[n][o];i.pv||(r=!1),i.db||(i.oc||i.ps)&&t.keyUp(e,i,n)}r&&(e.preventDefault(),e.stopPropagation())}t.keyPressed=!1},!0)}},{key:"decodeKey",value:function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}/g.test(e.key))&&(t+=e.key.toLowerCase()),t}},{key:"keyDown",value:function(e,t,n){(!t.oc&&!t.ps||t.ps&&!this.keyPressed)&&t.cb(e,n)}},{key:"keyUp",value:function(e,t,n){t.cb(e,n)}},{key:"filteringElement",value:function(e){var t=this.objAvoided.find(function(e){return e===document.activeElement}),n=this.checkElementType(),r=n.avoidedTypes,o=n.avoidedClasses,i=r.find(function(e){return e===document.activeElement.tagName.toLowerCase()}),u=o.find(function(e){return e==="."+document.activeElement.className.toLowerCase()});return!t&&this.mapFunctions[e]&&this.mapFunctions[e].length&&!i&&!u}},{key:"checkElementType",value:function(){var e=[],t=[];return this.elementAvoided.forEach(function(n){var r=n.indexOf(".");0===r?t.push(n):r>0?(e.push(n.split(".")[0]),t.push("."+n.split(".")[1])):e.push(n)}),{avoidedTypes:e,avoidedClasses:t}}},{key:"findIndexOf",value:function(e,t){for(var n=0;n<this.mapFunctions[e].length;n++)if(this.mapFunctions[e][n].el===t)return n}}]),e}(),u=new i;t.ShortcutsHelper=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(0),i={};i.install=function(e,t){o.ShortcutsHelper.init(t||{}),e.directive("shortcuts",r.ShortcutsDirective)},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShortcutsDirective=void 0;var r=n(0),o={bind:function(e,t,n){for(var o=t.value,i=0;i<o.length;i++){if(o[i].avoid)return void r.ShortcutsHelper.objAvoided.push(e);var u=o[i].shortcut.join("");r.ShortcutsHelper.mapFunctions[u]||(r.ShortcutsHelper.mapFunctions[u]=[]),r.ShortcutsHelper.mapFunctions[u].push({ps:!0===o[i].push,oc:!0===o[i].once,fn:!(!0===o[i].focus),db:o[i].disabled||!1,pv:!1!==o[i].prevent,cb:o[i].callback,el:n.elm})}},unbind:function(e,t){for(var n=t.value,o=0;o<n.length;o++)if(n[o]){var i=n[o].shortcut.join("");r.ShortcutsHelper.mapFunctions[i].splice(r.ShortcutsHelper.findIndexOf(i,e),1)}for(var u=0;u<r.ShortcutsHelper.objAvoided.length;u++)if(r.ShortcutsHelper.objAvoided[u]===e){r.ShortcutsHelper.objAvoided.splice(u,1);break}},update:function(e,t,n){for(var o=t.value,i=0;i<o.length;i++){var u=o[i].shortcut.join("");r.ShortcutsHelper.mapFunctions[u][r.ShortcutsHelper.findIndexOf(u,e)].db=o[i].disabled||!1}}};t.ShortcutsDirective=o}])});
//# sourceMappingURL=index.js.map