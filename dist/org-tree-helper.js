!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).zzjg=n()}(this,(function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(e,!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?f(t):n}function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var p=function(t,n){return t(n={exports:{}},n.exports),n.exports}((function(t,n){var e=200,r="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",c="[object Boolean]",u="[object Date]",a="[object Function]",f="[object GeneratorFunction]",l="[object Map]",s="[object Number]",p="[object Object]",d="[object RegExp]",y="[object Set]",v="[object String]",g="[object Symbol]",b="[object ArrayBuffer]",x="[object DataView]",_="[object Float32Array]",j="[object Float64Array]",m="[object Int8Array]",w="[object Int16Array]",O="[object Int32Array]",E="[object Uint8Array]",z="[object Uint8ClampedArray]",S="[object Uint16Array]",k="[object Uint32Array]",X=/\w*$/,A=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,C={};C[i]=C["[object Array]"]=C[b]=C[x]=C[c]=C[u]=C[_]=C[j]=C[m]=C[w]=C[O]=C[l]=C[s]=C[p]=C[d]=C[y]=C[v]=C[g]=C[E]=C[z]=C[S]=C[k]=!0,C["[object Error]"]=C[a]=C["[object WeakMap]"]=!1;var M="object"==typeof h&&h&&h.Object===Object&&h,R="object"==typeof self&&self&&self.Object===Object&&self,T=M||R||Function("return this")(),B=n&&!n.nodeType&&n,D=B&&t&&!t.nodeType&&t,I=D&&D.exports===B;function $(t,n){return t.set(n[0],n[1]),t}function F(t,n){return t.add(n),t}function U(t,n,e,r){var o=-1,i=t?t.length:0;for(r&&i&&(e=t[++o]);++o<i;)e=n(e,t[o],o,t);return e}function L(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function V(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function W(t,n){return function(e){return t(n(e))}}function Y(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}var H,G=Array.prototype,N=Function.prototype,q=Object.prototype,J=T["__core-js_shared__"],K=(H=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",Q=N.toString,Z=q.hasOwnProperty,tt=q.toString,nt=RegExp("^"+Q.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=I?T.Buffer:void 0,rt=T.Symbol,ot=T.Uint8Array,it=W(Object.getPrototypeOf,Object),ct=Object.create,ut=q.propertyIsEnumerable,at=G.splice,ft=Object.getOwnPropertySymbols,lt=et?et.isBuffer:void 0,st=W(Object.keys,Object),ht=Dt(T,"DataView"),pt=Dt(T,"Map"),dt=Dt(T,"Promise"),yt=Dt(T,"Set"),vt=Dt(T,"WeakMap"),gt=Dt(Object,"create"),bt=Lt(ht),xt=Lt(pt),_t=Lt(dt),jt=Lt(yt),mt=Lt(vt),wt=rt?rt.prototype:void 0,Ot=wt?wt.valueOf:void 0;function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function zt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function St(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function kt(t){this.__data__=new zt(t)}function Xt(t,n){var e=Wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Yt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==i)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,o=!!r;for(var c in t)!n&&!Z.call(t,c)||o&&("length"==c||Ft(c,r))||e.push(c);return e}function At(t,n,e){var r=t[n];Z.call(t,n)&&Vt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Pt(t,n){for(var e=t.length;e--;)if(Vt(t[e][0],n))return e;return-1}function Ct(t,n,e,r,o,h,A){var P;if(r&&(P=h?r(t,o,h,A):r(t)),void 0!==P)return P;if(!Nt(t))return t;var M=Wt(t);if(M){if(P=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,P)}else{var R=$t(t),T=R==a||R==f;if(Ht(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(R==p||R==i||T&&!h){if(L(t))return h?t:{};if(P=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(n=it(t),Nt(n)?ct(n):{});var n}(T?{}:t),!n)return function(t,n){return Tt(t,It(t),n)}(t,function(t,n){return t&&Tt(n,qt(n),t)}(P,t))}else{if(!C[R])return h?t:{};P=function(t,n,e,r){var o=t.constructor;switch(n){case b:return Rt(t);case c:case u:return new o(+t);case x:return function(t,n){var e=n?Rt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case _:case j:case m:case w:case O:case E:case z:case S:case k:return function(t,n){var e=n?Rt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case l:return function(t,n,e){return U(n?e(V(t),!0):V(t),$,new t.constructor)}(t,r,e);case s:case v:return new o(t);case d:return function(t){var n=new t.constructor(t.source,X.exec(t));return n.lastIndex=t.lastIndex,n}(t);case y:return function(t,n,e){return U(n?e(Y(t),!0):Y(t),F,new t.constructor)}(t,r,e);case g:return i=t,Ot?Object(Ot.call(i)):{}}var i}(t,R,Ct,n)}}A||(A=new kt);var B=A.get(t);if(B)return B;if(A.set(t,P),!M)var D=e?function(t){return function(t,n,e){var r=n(t);return Wt(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,qt,It)}(t):qt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(D||t,(function(o,i){D&&(o=t[i=o]),At(P,i,Ct(o,n,e,r,i,t,A))})),P}function Mt(t){return!(!Nt(t)||(n=t,K&&K in n))&&(Gt(t)||L(t)?nt:A).test(Lt(t));var n}function Rt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Tt(t,n,e,r){e||(e={});for(var o=-1,i=n.length;++o<i;){var c=n[o],u=r?r(e[c],t[c],c,e,t):void 0;At(e,c,void 0===u?t[c]:u)}return e}function Bt(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function Dt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Mt(e)?e:void 0}Et.prototype.clear=function(){this.__data__=gt?gt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var n=this.__data__;if(gt){var e=n[t];return e===r?void 0:e}return Z.call(n,t)?n[t]:void 0},Et.prototype.has=function(t){var n=this.__data__;return gt?void 0!==n[t]:Z.call(n,t)},Et.prototype.set=function(t,n){return this.__data__[t]=gt&&void 0===n?r:n,this},zt.prototype.clear=function(){this.__data__=[]},zt.prototype.delete=function(t){var n=this.__data__,e=Pt(n,t);return!(e<0)&&(e==n.length-1?n.pop():at.call(n,e,1),!0)},zt.prototype.get=function(t){var n=this.__data__,e=Pt(n,t);return e<0?void 0:n[e][1]},zt.prototype.has=function(t){return Pt(this.__data__,t)>-1},zt.prototype.set=function(t,n){var e=this.__data__,r=Pt(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},St.prototype.clear=function(){this.__data__={hash:new Et,map:new(pt||zt),string:new Et}},St.prototype.delete=function(t){return Bt(this,t).delete(t)},St.prototype.get=function(t){return Bt(this,t).get(t)},St.prototype.has=function(t){return Bt(this,t).has(t)},St.prototype.set=function(t,n){return Bt(this,t).set(t,n),this},kt.prototype.clear=function(){this.__data__=new zt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,n){var r=this.__data__;if(r instanceof zt){var o=r.__data__;if(!pt||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new St(o)}return r.set(t,n),this};var It=ft?W(ft,Object):function(){return[]},$t=function(t){return tt.call(t)};function Ft(t,n){return!!(n=null==n?o:n)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<n}function Ut(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||q)}function Lt(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,n){return t===n||t!=t&&n!=n}(ht&&$t(new ht(new ArrayBuffer(1)))!=x||pt&&$t(new pt)!=l||dt&&"[object Promise]"!=$t(dt.resolve())||yt&&$t(new yt)!=y||vt&&"[object WeakMap]"!=$t(new vt))&&($t=function(t){var n=tt.call(t),e=n==p?t.constructor:void 0,r=e?Lt(e):void 0;if(r)switch(r){case bt:return x;case xt:return l;case _t:return"[object Promise]";case jt:return y;case mt:return"[object WeakMap]"}return n});var Wt=Array.isArray;function Yt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Ht=lt||function(){return!1};function Gt(t){var n=Nt(t)?tt.call(t):"";return n==a||n==f}function Nt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function qt(t){return Yt(t)?Xt(t):function(t){if(!Ut(t))return st(t);var n=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return Ct(t,!0,!0)}}));function d(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function y(t,n){var e,r,o,i,c,u=new x(t),a=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=v);e=f.pop();)if(a&&(e.value=+e.data.value),(o=n(e.data))&&(c=o.length))for(e.children=new Array(c),i=c-1;i>=0;--i)f.push(r=e.children[i]=new x(o[i])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(b)}function v(t){return t.children}function g(t){t.data=t.data.data}function b(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function x(t){this.data=t,this.depth=this.height=0,this.parent=null}x.prototype=y.prototype={constructor:x,count:function(){return this.eachAfter(d)},each:function(t){var n,e,r,o,i=this,c=[i];do{for(n=c.reverse(),c=[];i=n.pop();)if(t(i),e=i.children)for(r=0,o=e.length;r<o;++r)c.push(e[r])}while(c.length);return this},eachAfter:function(t){for(var n,e,r,o=this,i=[o],c=[];o=i.pop();)if(c.push(o),n=o.children)for(e=0,r=n.length;e<r;++e)i.push(n[e]);for(;o=c.pop();)t(o);return this},eachBefore:function(t){for(var n,e,r=this,o=[r];r=o.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)o.push(n[e]);return this},sum:function(t){return this.eachAfter((function(n){for(var e=+t(n.data)||0,r=n.children,o=r&&r.length;--o>=0;)e+=r[o].value;n.value=e}))},sort:function(t){return this.eachBefore((function(n){n.children&&n.children.sort(t)}))},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),o=null;t=e.pop(),n=r.pop();for(;t===n;)o=t,t=e.pop(),n=r.pop();return o}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var o=r.length;t!==e;)r.splice(o,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each((function(n){t.push(n)})),t},leaves:function(){var t=[];return this.eachBefore((function(n){n.children||t.push(n)})),t},links:function(){var t=this,n=[];return t.each((function(e){e!==t&&n.push({source:e.parent,target:e})})),n},copy:function(){return y(this).eachBefore(g)}};var _=Object.freeze({children:function(t){return t.children},nodeSize:function(t){return t.data.size},spacing:0});function j(n){var r=Object.assign({},_,n);function o(t){var n=r[t];return"function"==typeof n?n:function(){return n}}function i(n){var r,i,h,p=s((r=a(),i=o("nodeSize"),h=o("spacing"),function(n){function r(n){var e;return t(this,r),e=l(this,u(r).call(this,n)),Object.assign(f(e),{x:0,y:0,relX:0,prelim:0,shift:0,change:0,lExt:f(e),lExtRelX:0,lThr:null,rExt:f(e),rExtRelX:0,rThr:null}),e}return c(r,n),e(r,[{key:"spacing",value:function(t){return h(this.data,t.data)}},{key:"update",value:function(){return m(this),w(this),this}},{key:"size",get:function(){return i(this.data)}},{key:"x",get:function(){return this.data.x},set:function(t){this.data.x=t}},{key:"y",get:function(){return this.data.y},set:function(t){this.data.y=t}}]),r}(r)),n,(function(t){return t.children}));return p.update(),p.data}function a(){var n=o("nodeSize"),r=o("spacing");return function(o){function i(n){return t(this,i),l(this,u(i).call(this,n))}return c(i,o),e(i,[{key:"copy",value:function(){var t=s(this.constructor,this,(function(t){return t.children}));return t.each((function(t){return t.data=t.data.data})),t}},{key:"spacing",value:function(t){return r(this,t)}},{key:"size",get:function(){return n(this)}},{key:"nodes",get:function(){return this.descendants()}},{key:"xSize",get:function(){return this.size[0]}},{key:"ySize",get:function(){return this.size[1]}},{key:"top",get:function(){return this.y}},{key:"bottom",get:function(){return this.y+this.ySize}},{key:"left",get:function(){return this.x-this.xSize/2}},{key:"right",get:function(){return this.x+this.xSize/2}},{key:"root",get:function(){var t=this.ancestors();return t[t.length-1]}},{key:"numChildren",get:function(){return this.hasChildren?this.children.length:0}},{key:"hasChildren",get:function(){return!this.noChildren}},{key:"noChildren",get:function(){return null===this.children}},{key:"firstChild",get:function(){return this.hasChildren?this.children[0]:null}},{key:"lastChild",get:function(){return this.hasChildren?this.children[this.numChildren-1]:null}},{key:"extents",get:function(){return(this.children||[]).reduce((function(t,n){return i.maxExtents(t,n.extents)}),this.nodeExtents)}},{key:"nodeExtents",get:function(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}],[{key:"maxExtents",value:function(t,n){return{top:Math.min(t.top,n.top),bottom:Math.max(t.bottom,n.bottom),left:Math.min(t.left,n.left),right:Math.max(t.right,n.right)}}}]),i}(y.prototype.constructor)}function s(t,n,e){return function n(r,o){var i=new t(r);Object.assign(i,{parent:o,depth:null===o?0:o.depth+1,height:0,length:1});var c=e(r)||[];return i.children=0===c.length?null:c.map((function(t){return n(t,i)})),i.children&&Object.assign(i,i.children.reduce((function(t,n){return{height:Math.max(t.height,n.height+1),length:t.length+n.length}}),i)),i}(n,null)}return Object.assign(i,{nodeSize:function(t){return arguments.length?(r.nodeSize=t,i):r.nodeSize},spacing:function(t){return arguments.length?(r.spacing=t,i):r.spacing},children:function(t){return arguments.length?(r.children=t,i):r.children},hierarchy:function(t,n){var e=void 0===n?r.children:n;return s(a(),t,e)},dump:function(t){var n=o("nodeSize");return function t(e){return function(r){var o=e+"  ",i=e+"    ",c=r.x,u=r.y,a=n(r),f=r.children||[],l=0===f.length?" ":",".concat(o,"children: [").concat(i).concat(f.map(t(i)).join(i)).concat(o,"],").concat(e);return"{ size: [".concat(a.join(", "),"],").concat(o,"x: ").concat(c,", y: ").concat(u).concat(l,"},")}}("\n")(t)}}),i}var m=function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n.y=e,(n.children||[]).reduce((function(e,r){var o=s(e,2),i=o[0],c=o[1];t(r,n.y+n.ySize);var u=(0===i?r.lExt:r.rExt).bottom;return 0!==i&&E(n,i,c),[i+1,M(u,i,c)]}),[0,null]),O(n),C(n),n},w=function t(n,e,r){void 0===e&&(e=-n.relX-n.prelim,r=0);var o=e+n.relX;return n.relX=o+n.prelim-r,n.prelim=0,n.x=r+n.relX,(n.children||[]).forEach((function(e){return t(e,o,n.x)})),n},O=function(t){(t.children||[]).reduce((function(t,n){var e=s(t,2),r=e[0],o=e[1],i=r+n.shift,c=o+i+n.change;return n.relX+=c,[i,c]}),[0,0])},E=function(t,n,e){for(var r=t.children[n-1],o=t.children[n],i=r,c=r.relX,u=o,a=o.relX,f=!0;i&&u;){i.bottom>e.lowY&&(e=e.next);var l=c+i.prelim-(a+u.prelim)+i.xSize/2+u.xSize/2+i.spacing(u);(l>0||l<0&&f)&&(a+=l,z(o,l),S(t,n,e.index,l)),f=!1;var s=i.bottom,h=u.bottom;s<=h&&(i=X(i))&&(c+=i.relX),s>=h&&(u=k(u))&&(a+=u.relX)}!i&&u?A(t,n,u,a):i&&!u&&P(t,n,i,c)},z=function(t,n){t.relX+=n,t.lExtRelX+=n,t.rExtRelX+=n},S=function(t,n,e,r){var o=t.children[n],i=n-e;if(i>1){var c=r/i;t.children[e+1].shift+=c,o.shift-=c,o.change-=r-c}},k=function(t){return t.hasChildren?t.firstChild:t.lThr},X=function(t){return t.hasChildren?t.lastChild:t.rThr},A=function(t,n,e,r){var o=t.firstChild,i=o.lExt,c=t.children[n];i.lThr=e;var u=r-e.relX-o.lExtRelX;i.relX+=u,i.prelim-=u,o.lExt=c.lExt,o.lExtRelX=c.lExtRelX},P=function(t,n,e,r){var o=t.children[n],i=o.rExt,c=t.children[n-1];i.rThr=e;var u=r-e.relX-o.rExtRelX;i.relX+=u,i.prelim-=u,o.rExt=c.rExt,o.rExtRelX=c.rExtRelX},C=function(t){if(t.hasChildren){var n=t.firstChild,e=t.lastChild,r=(n.prelim+n.relX-n.xSize/2+e.relX+e.prelim+e.xSize/2)/2;Object.assign(t,{prelim:r,lExt:n.lExt,lExtRelX:n.lExtRelX,rExt:e.rExt,rExtRelX:e.rExtRelX})}},M=function(t,n,e){for(;null!==e&&t>=e.lowY;)e=e.next;return{lowY:t,index:n,next:e}},R=function(t){var n=[],e=[];t.forEach((function(t){var n=e.findIndex((function(n){return n[0]===t[0]}));-1===n?e.push(t):e[n].push(t[1])}));return e.forEach((function(t){(function(t){t.sort((function(t,n){return t[0]!==n[0]?t[0]-n[0]:t[1]-n[1]}));for(var n,e,r=t.length,o=[],i=0;i<r;i++){var c=t[i][0],u=t[i][1];if(void 0===n)n=c,e=u;else if(c<=e)e=Math.max(u,e);else{var a=[n,e];o.push(a),n=c,e=u}}if(void 0!==n){var f=[n,e];o.push(f)}return o})(t.slice(1)).forEach((function(e){e[0]!==e[1]&&n.push([t[0],e])}))})),n};return function(t,n){var e=n.spacing,r=void 0===e?[20,20]:e,o=n.horizontal,c=void 0!==o&&o,u=p(t);!function t(n){n.forEach((function(n){c?(n.size=[n.size[1],n.size[0]+r[1]],n.spacing=[r[1],r[0]]):(n.size=[n.size[0],n.size[1]+r[1]],n.spacing=r),n.children&&n.children.length&&t(n.children)}))}([u]);var a=j({spacing:r[0]}),f=a.hierarchy(u),l=a(f),s=l.descendants(),h=[],d=[];s.slice(1).forEach((function(t){h.push([t.x,[t.parent.y+t.parent.ySize-r[1]/2,t.y]]),h.push([t.parent.x,[t.parent.y+t.parent.ySize-r[1],t.parent.y+t.parent.ySize-r[1]/2]]),d.push([t.parent.y+t.parent.ySize-r[1]/2,[Math.min(t.x,t.parent.x),Math.max(t.x,t.parent.x)]])})),s.slice(1).filter((function(t){return t.data.isEmpty})).forEach((function(t){h.push([t.x,[t.y,t.y+t.ySize-r[1]]])}));var y=R(h),v=R(d),g=[];y.forEach((function(t){g.push({x1:t[0],y1:t[1][0],x2:t[0],y2:t[1][1]})})),v.forEach((function(t){g.push({x1:t[1][0],y1:t[0],x2:t[1][1],y2:t[0]})}));var b=s.filter((function(t){return!t.data.isEmpty})).map((function(t){return i({},t,{width:t.xSize,height:t.ySize-r[1]})})),x=Math.abs(l.extents.left),_=g.map((function(t){return i({},t,{x1:t.x1+x,x2:t.x2+x})})),m=b.map((function(t){return i({},t,{x:t.x+x})})),w=_.reduce((function(t,n){return c?n.y1===n.y2?t+"M".concat(n.y1," ").concat(n.x1,"V").concat(n.x2):n.x1===n.x2?t+"M".concat(n.y1," ").concat(n.x1,"H").concat(n.y2):t+"M".concat(n.y1," ").concat(n.x1,"L").concat(n.y2," ").concat(n.x2):n.x1===n.x2?t+"M".concat(n.x1," ").concat(n.y1,"V").concat(n.y2):n.y1===n.y2?t+"M".concat(n.x1," ").concat(n.y1,"H").concat(n.x2):t+"M".concat(n.x1," ").concat(n.y1,"L").concat(n.x2," ").concat(n.y2)}),"");if(c)for(var O=0;O<m.length;O++){var E=m[O],z=E.x;E.x=E.y,E.y=z;var S=E.width;E.width=E.height,E.height=S}return{nodesData:m,layoutExtents:c?{x:0,y:0,width:l.extents.bottom-r[1],height:l.extents.right+x}:{x:0,y:0,width:l.extents.right+x,height:l.extents.bottom-r[1]},pathData:w}}}));
