function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(T,t),l?y(e):f}function S(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=i}function T(){var e=v();if(S(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-a);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=r=void 0,f)}function w(){var e=v(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(s)return u=setTimeout(T,t),y(a)}return void 0===u&&(u=setTimeout(T,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form textarea"),S=document.querySelector(".feedback-form input"),T={};console.log(S),console.log(j),console.log(y),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(S.value=e.email,j.value=e.message)}(),y.addEventListener("input",e(t)((function(e){T.email=S.value,T.message=j.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(T)}));
//# sourceMappingURL=03-feedback.87e2252a.js.map
