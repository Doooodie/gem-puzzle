(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}};function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.d({},{Z:()=>xt});var r=n((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"div",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";o(this,t),this.root=document.createElement(r),this.root.classList.add(e),this.root.textContent=n,this.root.href=i}));const i=new r("button","Save","button");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function a(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}const p=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(o);if(r){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function c(){var t;l(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))).movesCount=0,t.root.textContent="Moves: ".concat(t.movesCount),t}return e=c,(n=[{key:"updateText",value:function(){this.root.textContent="Moves: ".concat(this.movesCount)}},{key:"resetMoves",value:function(){this.movesCount=0,this.updateText()}},{key:"countMove",value:function(){this.movesCount+=1,this.updateText()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r))("dynamic-info","","span");function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function m(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}const w=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(r){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function c(){var t;h(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=i.call.apply(i,[this].concat(n))).minutes="0",t.seconds="00",t.root.textContent="Time: ".concat(t.minutes,":").concat(t.seconds),t.interval=null,t}return e=c,(n=[{key:"startTimer",value:function(){var t=this;this.resetTimer();var e=(new Date).getTime();this.interval=setInterval((function(){var n=((new Date).getTime()-e)/1e3;t.seconds=parseInt(n%60,10),t.minutes=parseInt(n/60%60,10),t.seconds<10&&(t.seconds="0".concat(t.seconds)),t.root.textContent="Time: ".concat(t.minutes,":").concat(t.seconds)}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.interval)}},{key:"resetTimer",value:function(){this.stopTimer(),this.minutes="0",this.seconds="00"}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r))("dynamic-info","","span"),O=t.p+"178c5fd641fd054bd26a.mp3";function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(c,t);var e,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(o);if(r){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function c(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"checkbox";S(this,c);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=i.call.apply(i,[this].concat(o))).root.type=e,t.root.checked=!0,t.audio=new Audio(O),t}return e=c,(n=[{key:"playSound",value:function(){this.root.checked&&this.audio.play()}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(r),R=new r("sound-container"),T=new r("sound-text","Sound: ","span"),k=new _("checkbox","sound-switcher","","input");function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function M(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}R.root.append(T.root,k.root);var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(l,t);var e,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(o);if(i){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return M(this,t)});function l(t){var e;I(this,l);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return F(B(e=c.call.apply(c,[this].concat(o))),"close",(function(){e.root.remove(),e.container.root.remove()})),e.container=new r("overlay-container"),e.container.root.append(t),e.root.onclick=e.close,e}return e=l,(n=[{key:"open",value:function(){xt.prepend(this.root),this.root.after(this.container.root)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(r);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function H(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return $(t)}function $(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(l,t);var e,n,o,i,c=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Y(o);if(i){var n=Y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return H(this,t)});function l(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9;G(this,l);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return X($(t=c.call.apply(c,[this].concat(o))),"enableCells",(function(){t.top&&t.top.root.addEventListener("click",t.moveBottom),t.right&&t.right.root.addEventListener("click",t.moveLeft),t.bottom&&t.bottom.root.addEventListener("click",t.moveTop),t.left&&t.left.root.addEventListener("click",t.moveRight)})),X($(t),"moveBottom",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateY(".concat(t.cellWidth,")"),k.playSound(),p.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]-1][t.emptyCellIndex[1]]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),X($(t),"moveLeft",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateX(-".concat(t.cellWidth,")"),k.playSound(),p.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]+1]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),X($(t),"moveTop",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateY(-".concat(t.cellWidth,")"),k.playSound(),p.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]+1][t.emptyCellIndex[1]]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),X($(t),"moveRight",(function(e){t.cellWidth=getComputedStyle(t.emptyCell.root).width;var n=e;n.target.style.transform="translateX(".concat(t.cellWidth,")"),k.playSound(),p.countMove(),t.disableCells(),setTimeout((function(){t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]-1]=new r("cell"),t.field[t.emptyCellIndex[0]][t.emptyCellIndex[1]]=new r("cell","".concat(n.target.textContent)),t.refreshField()}),500)})),t.winState=!1,t.fieldSize=e,t.range=Array.from(Array(t.fieldSize).keys(),(function(t){return t+1})),t.field=Array(Math.sqrt(t.fieldSize)).fill(null).map((function(){return Array(Math.sqrt(t.fieldSize)).fill(0)})),t.cellWidth="",t.emptyCell=null,t.emptyCellIndex=null,t.top=null,t.right=null,t.bottom=null,t.left=null,t}return e=l,n=[{key:"startGame",value:function(){p.resetMoves(),w.startTimer(),this.generateField()}},{key:"stopGame",value:function(){w.stopTimer(),this.disableCells(),this.saveResult(),new W("Hooray! You solved the puzzle in ".concat(w.minutes,":").concat(w.seconds," and ").concat(p.movesCount," moves!"),"overlay").open()}},{key:"generateField",value:function(){this.root.innerHTML=null;for(var t=this.shuffle(),e=0,n=0;n<this.field.length;n+=1)for(var o=0;o<this.field[0].length;o+=1)t[e]===this.fieldSize?this.field[n][o]=new r("cell"):this.field[n][o]=new r("cell",t[e]),this.root.append(this.field[n][o].root),e+=1;this.hasSolution(t)||this.generateField(),this.makeCellsActive(),this.checkForWin(),this.winState&&this.stopGame()}},{key:"hasSolution",value:function(t){for(var e=this,n=t.filter((function(t){return t!==e.fieldSize})),o=Math.sqrt(this.fieldSize),r=this.returnEmptyCell()[0],i=0,c=0;c<this.fieldSize;c+=1)for(var l=c+1;l<this.fieldSize;l+=1)n[l]<n[c]&&(i+=1);return o%2!=0?i%2==0:i%2+r!==0}},{key:"refreshField",value:function(){this.root.innerHTML=null;for(var t=0;t<this.field.length;t+=1)for(var e=0;e<this.field[0].length;e+=1)this.root.append(this.field[t][e].root);this.makeCellsActive(),this.checkForWin(),this.winState&&this.stopGame()}},{key:"makeCellsActive",value:function(){this.top=this.findActiveCell("top"),this.right=this.findActiveCell("right"),this.left=this.findActiveCell("left"),this.bottom=this.findActiveCell("bottom"),this.enableCells()}},{key:"disableCells",value:function(){this.top&&this.top.root.removeEventListener("click",this.moveBottom),this.right&&this.right.root.removeEventListener("click",this.moveLeft),this.bottom&&this.bottom.root.removeEventListener("click",this.moveTop),this.left&&this.left.root.removeEventListener("click",this.moveRight)}},{key:"findActiveCell",value:function(t){if(this.emptyCellIndex=this.returnEmptyCell(),this.emptyCell=this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]],"top"===t)try{return this.field[this.emptyCellIndex[0]-1][this.emptyCellIndex[1]]}catch(t){return null}if("right"===t)try{return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]+1]}catch(t){return null}if("bottom"===t)try{return this.field[this.emptyCellIndex[0]+1][this.emptyCellIndex[1]]}catch(t){return null}if("left"===t)try{return this.field[this.emptyCellIndex[0]][this.emptyCellIndex[1]-1]}catch(t){return null}return null}},{key:"returnEmptyCell",value:function(){for(var t=0;t<this.field.length;t+=1)for(var e=0;e<this.field[0].length;e+=1)if(""===this.field[t][e].root.textContent)return[t,e];return null}},{key:"checkForWin",value:function(){for(var t=this,e=this.range.filter((function(e){return e!==t.fieldSize})),n=[],o=0;o<this.field.length;o+=1)for(var r=0;r<this.field[0].length;r+=1)""!==this.field[o][r].root.textContent&&n.push(+this.field[o][r].root.textContent);e.every((function(t,e){return t===n[e]}))?this.winState=!0:this.winState=!1}},{key:"saveResult",value:function(){var t=JSON.parse(localStorage.getItem("results"));t||(localStorage.setItem("results",JSON.stringify([])),t=JSON.parse(localStorage.getItem("results")));var e,n={fieldSize:"".concat(Math.pow(this.fieldSize,.5),"x").concat(Math.pow(this.fieldSize,.5)),time:"".concat(w.minutes,":").concat(w.seconds),moves:p.movesCount};t.length<10&&localStorage.setItem("results",JSON.stringify([].concat(function(t){if(Array.isArray(t))return N(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[n])))}},{key:"shuffle",value:function(){for(var t=Array.from(this.range),e=t.length-1;e>0;e-=1){var n=Math.floor(Math.random()*e),o=t[e];t[e]=t[n],t[n]=o}return t}}],n&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(r);const Z=new U(9,"game-container");function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function V(t,e){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},V(t,e)}function tt(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function et(t){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},et(t)}const nt=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(i,t);var e,n,o,r=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=et(n);if(o){var r=et(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return tt(this,t)});function i(){var t;Q(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=r.call.apply(r,[this].concat(n))).root.addEventListener("click",(function(){Z.startGame()})),t}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(r))("button","Start","button");function ot(t){return ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(t)}function rt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},it(t,e)}function ct(t,e){if(e&&("object"===ot(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return lt(t)}function lt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(t){return ut=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ut(t)}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var at=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&it(t,e)}(c,t);var e,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=ut(n);if(o){var r=ut(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return ct(this,t)});function c(){var t;rt(this,c);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return ft(lt(t=i.call.apply(i,[this].concat(n))),"showResults",(function(){t.container.root.innerHTML=null;var e=new W(t.container.root,"overlay");JSON.parse(localStorage.getItem("results")).forEach((function(e,n){var o=new r("result-container"),i=new r("result-place","".concat(n+1,"."),"span"),c=new r("result-size","field size: ".concat(e.fieldSize),"span"),l=new r("result-time","time: ".concat(e.time),"span"),u=new r("result-moves","moves: ".concat(e.moves),"span");o.root.append(i.root,c.root,l.root,u.root),t.container.root.append(o.root)})),e.open()})),t.container=new r("results-container"),t.results=null,t.root.onclick=t.showResults,t}return e=c,Object.defineProperty(e,"prototype",{writable:!1}),e}(r);const st=new at("button","Results","button");var pt=new r("buttons-container").root;pt.append(i.root,nt.root,st.root);const yt=pt;var ht=new r("game-info").root,dt=[new r("moves-container").root,new r("time-container").root];dt[0].append(p.root),dt[1].append(w.root),ht.append.apply(ht,dt);const bt=ht,mt=new r("frame-size","Frame size: 3x3").root;for(var vt=new r("other-sizes").root,wt=new r("other-sizes-text","Other sizes:","span").root,Ot=[],gt=3;gt<=8;gt+=1)Ot.push(new r("other-sizes-link","".concat(gt,"x").concat(gt),"a","#").root);vt.append.apply(vt,[wt].concat(Ot));const St=vt;var jt=new r("container").root;jt.append(yt,bt,Z.root,mt,St,R.root);const Ct=jt;var Pt=document.querySelector(".wrapper");Pt.append(Ct);const xt=Pt})();