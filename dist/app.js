"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=u(require("fs")),r=u(require("path")),n=u(require("os")),o=require("child_process"),a=u(require("util")),i=u(require("crypto"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=h(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function s(){s=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:T(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",b={};function g(){}function w(){}function x(){}var L={};l(L,u,(function(){return this}));var k=Object.getPrototypeOf,j=k&&k(k(F([])));j&&j!==n&&o.call(j,u)&&(L=j);var E=x.prototype=g.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(a,i,u,c){var s=p(e[a],e,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function T(t,r,n){var o=y;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function F(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,i=function t(){for(;++a<r.length;)if(o.call(r,a))return t.value=r[a],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,a(E,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},S(O.prototype),l(O.prototype,c,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new O(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),l(E,f,"Generator"),l(E,u,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}function f(t,e){return d(t)||y(t,e)||h(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,e){if(t){if("string"==typeof t)return p(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return u}}function d(t){if(Array.isArray(t))return t}function v(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){v(a,n,o,i,u,"next",t)}function u(t){v(a,n,o,i,u,"throw",t)}i(void 0)}))}}var b=a.default.promisify(o.exec);function g(){return w.apply(this,arguments)}function w(){return(w=m(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("linux"!==n.default.type().toLowerCase()){t.next=5;break}return t.abrupt("return",!0);case 5:throw P(1001);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return L.apply(this,arguments)}function L(){return(L=m(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="",t.prev=1,t.next=4,e.default.readFileSync("/etc/os-release");case 4:t.t0=t.sent,r=t.t0+"",t.next=11;break;case 8:throw t.prev=8,t.t1=t.catch(1),P(1003);case 11:if(!r.toLowerCase().includes("ubuntu")){t.next=15;break}return t.abrupt("return",!0);case 15:throw P(1002);case 16:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function k(t){return j.apply(this,arguments)}function j(){return(j=m(s().mark((function t(e){var n,o,a,i,u,f,l;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,n="find ",o=c(e);try{for(o.s();!(a=o.n()).done;)i=a.value,n+=r.default.join("/home",i,".java","/")+" "}catch(t){o.e(t)}finally{o.f()}return n+=r.default.join("/","root",".java","/")+" ",n+="-type f ",n+='-name "prefs.xml" ',n+="2>/dev/null || true",t.next=10,b(n);case 10:if(u=t.sent,(f=u.stdout).trim()){t.next=14;break}throw P(1004);case 14:if((l=f.trim().split("\n").filter((function(t){return t.includes(r.default.join("mongochef","enterprise","prefs.xml"))}))).length){t.next=17;break}throw P(1004);case 17:return t.abrupt("return",l);case 20:throw t.prev=20,t.t0=t.catch(0),t.t0;case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))).apply(this,arguments)}function E(){return S.apply(this,arguments)}function S(){return(S=m(s().mark((function t(){var e,r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b("ls /home/");case 3:if(e=t.sent,(r=e.stdout).trim()){t.next=7;break}throw P(1004);case 7:if((n=r.trim().split("\n")).length){t.next=10;break}throw P(1004);case 10:return t.abrupt("return",n);case 13:throw t.prev=13,t.t0=t.catch(0),t.t0;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function O(t,e){return T.apply(this,arguments)}function T(){return(T=m(s().mark((function t(r,n){var o,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=!1,t.next=4,e.default.readFileSync(r);case 4:if(t.t0=t.sent,a=(a=(t.t0+"").split("\n")).map((function(t){if(t.includes("soduz3vqhnnja46uvu3szq--")){var e;try{e=t.split('value="')[1].split('"')[0]}catch(t){}e&&(t=t.replace(e,n),o=!0)}return t})),o){t.next=9;break}throw P(1005);case 9:return a=a.join("\n"),t.next=12,e.default.writeFileSync(r,a);case 12:return t.abrupt("return",!0);case 15:throw t.prev=15,t.t1=t.catch(0),t.t1;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function _(t){var e=Buffer.from("oTFg6Y5LV9gTBHa6V3B27MnzHxS7rSBAJH3cKuEAWVCzkNRAluhe9Lyn744zHVTQ").slice(0,32),r=f(t.split(":"),2),n=r[0],o=r[1],a=Buffer.from(n,"hex"),u=i.default.createDecipheriv("aes-256-cbc",e,a),c=u.update(o,"hex","utf8");return c+=u.final("utf8"),JSON.parse(c)}function A(t,e){var r=Math.abs(new Date(e)-new Date(t));return Math.floor(r/864e5)}var P=function(t){var e={1001:{message:"This system is not running Linux. Please ensure you're using a Linux-based environment."},1002:{message:"This system is not running Ubuntu. Please verify that you're using an Ubuntu distribution."},1003:{message:"Unable to read operating system information. The system may not be running Linux."},1004:{message:"Studio 3T management file not found."},1005:{message:"Authentication token not found for replacing in your system."},1006:{message:"The provided token has expired or the system time is incorrect. Please check the token's validity or system time."}},r=e[t]||{},n=new Error;return n.message=r.message||"invalid error",n.code=t,n};function N(){return F.apply(this,arguments)}function F(){return(F=m(s().mark((function t(){var e,r,n,o,a,i,u,f,l,h;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=_("f864f251a492cce622fd1085b047802c:cb0be9f4cf70917f354424deb30910c71972204dab282dd4c04d86b05f9a60fcbb303b3cc96ea86323ef7e0b85017acc689e08c7080a8d65f464d6cc79aff40ceb16d283a993eadd600f2c8db0ada5d820631f67e97f7f9777a2b9fcdc64fda8fdf56008e642c9127db0ff1fa4ea1419798e2cfaf1ecd0b94fa60b467df722ef"),r=e.token,n=e.expTime,o=new Date(n),a=new Date,!(o<a)){t.next=6;break}throw P(1006);case 6:return t.next=8,g();case 8:return t.next=10,x();case 10:return t.next=12,E();case 12:return i=t.sent,t.next=15,k(i);case 15:u=t.sent,f=c(u),t.prev=17,f.s();case 19:if((l=f.n()).done){t.next=25;break}return h=l.value,t.next=23,O(h,r);case 23:t.next=19;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(17),f.e(t.t0);case 30:return t.prev=30,f.f(),t.finish(30);case 33:console.log("You're all set! You can now start Studio 3T and enjoy a ".concat(A(a,o),"-day full product trial. Once the trial period ends, simply pull the project and run it again to recharge your trial.")),t.next=39;break;case 36:t.prev=36,t.t1=t.catch(0),console.error("error : (".concat(t.t1.code,")"),t.t1.message);case 39:case"end":return t.stop()}}),t,null,[[0,36],[17,27,30,33]])})))).apply(this,arguments)}N();
//# sourceMappingURL=app.js.map
