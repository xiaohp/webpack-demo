!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="/",t(t.s=5)}([function(n,r,t){var e=t(1);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(e,o);e.locals&&(n.exports=e.locals)},function(n,r,t){(n.exports=t(2)(!1)).push([n.i,"body {\n  color: blue;\n}\n",""])},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(u=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var u;return[t].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+t+"}":t}).join("")},r.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(o=0;o<n.length;o++){var u=n[o];null!=u[0]&&e[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="("+u[2]+") and ("+t+")"),r.push(u))}},r}},function(n,r,t){var e,o,i={},u=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),c=function(n){var r={};return function(n,t){if("function"==typeof n)return n();if(void 0===r[n]){var e=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}}(),f=null,a=0,s=[],p=t(4);function d(n,r){for(var t=0;t<n.length;t++){var e=n[t],o=i[e.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](e.parts[u]);for(;u<e.parts.length;u++)o.parts.push(U(e.parts[u],r))}else{var c=[];for(u=0;u<e.parts.length;u++)c.push(U(e.parts[u],r));i[e.id]={id:e.id,refs:1,parts:c}}}}function l(n,r){for(var t=[],e={},o=0;o<n.length;o++){var i=n[o],u=r.base?i[0]+r.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};e[u]?e[u].parts.push(c):t.push(e[u]={id:u,parts:[c]})}return t}function h(n,r){var t=c(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=s[s.length-1];if("top"===n.insertAt)e?e.nextSibling?t.insertBefore(r,e.nextSibling):t.appendChild(r):t.insertBefore(r,t.firstChild),s.push(r);else if("bottom"===n.insertAt)t.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,t);t.insertBefore(r,o)}}function v(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=s.indexOf(n);r>=0&&s.splice(r,1)}function b(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return t.nc}();e&&(n.attrs.nonce=e)}return m(r,n.attrs),h(n,r),r}function m(n,r){Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})}function U(n,r){var t,e,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var u=a++;t=f||(f=b(r)),e=R.bind(null,t,u,!1),o=R.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(r,n.attrs),h(n,r),r}(r),e=function(n,r,t){var e=t.css,o=t.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(e=p(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([e],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,t,r),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(r),e=function(n,r){var t=r.css,e=r.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=u()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var t=l(n,r);return d(t,r),function(n){for(var e=[],o=0;o<t.length;o++){var u=t[o];(c=i[u.id]).refs--,e.push(c)}n&&d(l(n,r),r);for(o=0;o<e.length;o++){var c;if(0===(c=e[o]).refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete i[c.id]}}}};var w,L=(w=[],function(n,r){return w[n]=r,w.filter(Boolean).join("\n")});function R(n,r,t,e){var o=t?"":e.css;if(n.styleSheet)n.styleSheet.cssText=L(r,o);else{var i=document.createTextNode(o),u=n.childNodes;u[r]&&n.removeChild(u[r]),u.length?n.insertBefore(i,u[r]):n.appendChild(i)}}},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=r.protocol+"//"+r.host,e=t+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,t){"use strict";function e(){console.log("Updating print.js...")}t.r(r);t(0);(function(){let n=function(){let n=document.createElement("div");var r=document.createElement("button");return n.innerHTML=["Hello","webpack"].join(" "),r.innerHTML="Click me and check the console",r.onclick=e,n.appendChild(r),n}();document.body.appendChild(n)})()}]);
//# sourceMappingURL=app.8c2f9302650be6d0cc2e.js.map