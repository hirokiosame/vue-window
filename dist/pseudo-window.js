!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).PseudoWindow=n()}(this,(function(){"use strict";var e=Object.hasOwnProperty;return{name:"pseudo-window",props:{document:Boolean},render:function(){var e=this.$slots.default;return e&&1===e.length?e[0]:e},data:function(){return{t:[]}},mounted:function(){for(var n in this.$listeners)if(a=this.$listeners,c=n,e.call(a,c)){var t=this.$listeners[n],o=(i=this.document?window.document:window,d=t,s=void 0,f=void 0,u=void 0,s="&"===(r=n)[0],f="~"===(r=s?r.slice(1):r)[0],u="!"===(r=f?r.slice(1):r)[0],{o:i,i:r=u?r.slice(1):r,s:d,u:{once:f,capture:u,passive:s}});o.o.addEventListener(o.i,o.s,o.u),this.t.push(o)}var i,r,d,s,f,u,a,c},destroyed:function(){for(;this.t.length;){var e=this.t.shift();e.o.removeEventListener(e.i,e.s,e.u)}}}}));
