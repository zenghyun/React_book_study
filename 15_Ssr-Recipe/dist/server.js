/*! For license information please see server.js.LICENSE.txt */
(()=>{"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(){r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,c=Object.create(o.prototype),a=new P(n||[]);return i(c,"_invoke",{value:O(t,r,a)}),c}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(_([])));x&&x!==n&&o.call(x,a)&&(m=x);var j=y.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,r){function n(i,c,a,u){var s=h(t[i],t,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var c;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return c=c?c.then(o,o):o()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=E(c,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=y,i(j,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new w(f(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(j),l(j,s,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const i=require("react");var c=t.n(i);const a=require("react-dom/server");var u=t.n(a);const s=require("express");var l=t.n(s);const f=require("react-router-dom/server"),h=require("react-router-dom"),p=require("react/jsx-runtime"),d=function(){return(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(h.Link,{to:"/red",children:"Red"})}),(0,p.jsx)("li",{children:(0,p.jsx)(h.Link,{to:"/blue",children:"Blue"})}),(0,p.jsx)("li",{children:(0,p.jsx)(h.Link,{to:"/users",children:"Users"})})]})},v=function(){return(0,p.jsx)("div",{className:"Red",children:"Red"})},y=function(){return(0,p.jsx)(v,{})},m=function(){return(0,p.jsx)("div",{className:"Blue",children:"Blue"})},g=function(){return(0,p.jsx)(m,{})},x=function(t){var e=t.users;return e?(0,p.jsx)("div",{children:(0,p.jsx)("ul",{children:e.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(h.Link,{to:"/users/".concat(t.id),children:t.username})},t.id)}))})}):null},j=require("react-redux");function b(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const E=require("axios");var S=t.n(E),L="users/GET_USERS_PENDING",P="users/GET_USERS_SUCCESS",_="users/GET_USERS_FAILURE",k={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var R=(0,i.createContext)(null);const N=R;var T=function(t){var e=t.resolve,r=(0,i.useContext)(R);return r?(r.done||r.promises.push(Promise.resolve(e())),null):null},q=c().useEffect;const G=(0,j.connect)((function(t){return{users:t.users.users}}),{getUsers:function(){return function(){var t=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:L}),t.next=4,S().get("https://jsonplaceholder.typicode.com/users");case 4:n=t.sent,e({type:P,payload:n}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),e((r=t.t0,{type:_,error:!0,payload:r})),t.t0;case 12:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.users,r=t.getUsers;return q((function(){e||r()}),[r,e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{users:e}),";",(0,p.jsx)(T,{resolve:r})]})})),F=function(){return(0,p.jsx)(G,{})},D=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{}),(0,p.jsx)("hr",{}),(0,p.jsxs)(h.Routes,{children:[(0,p.jsx)(h.Route,{path:"/red",element:(0,p.jsx)(y,{})}),(0,p.jsx)(h.Route,{path:"/blue",element:(0,p.jsx)(g,{})}),(0,p.jsx)(h.Route,{path:"/users",element:(0,p.jsx)(F,{})})]})]})},U=require("path");var A=t.n(U);const C=require("fs");var I=t.n(C);const Y=require("redux"),B=require("redux-thunk");var J=t.n(B);const M=(0,Y.combineReducers)({users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return O(O({},t),{},{loading:O(O({},t.loading),{},{users:!0}),error:O(O({},t.error),{},{users:null})});case P:return O(O({},t),{},{loading:O(O({},t.loading),{},{users:!1}),users:e.payload.data});case _:return O(O({},t),{},{loading:O(O({},t.loading),{},{users:!1}),error:O(O({},t.error),{},{users:e.payload})});default:return t}}});var $=JSON.parse(I().readFileSync(A().resolve("./build/asset-manifest.json"),"utf8")),z=Object.keys($.files).filter((function(t){return/chunk\.js$/.exec(t)})).map((function(t){return'<script src="'.concat($.files[t],'"><\/script>')})).join("");function H(t,e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat($.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(t,"\n      </div>\n      ").concat(r,'\n      <script src="').concat($.files["runtime-main.js"],'"><\/script>\n      ').concat(z,'\n      <script src="').concat($.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}var K=l()(),Q=function(){var t=o(r().mark((function t(e,n,o){var i,c,a,s,l,h;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={},c=(0,Y.createStore)(M,(0,Y.applyMiddleware)(J())),a={done:!1,promises:[]},s=(0,p.jsx)(N.Provider,{value:a,children:(0,p.jsx)(j.Provider,{store:c,children:(0,p.jsx)(f.StaticRouter,{location:e.url,context:i,children:(0,p.jsx)(D,{})})})}),u().renderToStaticMarkup(s),t.prev=5,t.next=8,Promise.all(a.promises);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",n.status(500));case 13:a.done=!0,l=u().renderToString(s),h=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),"<script>__PRELOADED_STATE__ = ".concat(h,"<\/script>"),n.send(H(l));case 18:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e,r,n){return t.apply(this,arguments)}}(),V=l().static(A().resolve("./build"),{index:!1});K.use(V),K.use(Q),K.listen(5050,(function(){console.log("Running on http://localhost:5050")}))})();