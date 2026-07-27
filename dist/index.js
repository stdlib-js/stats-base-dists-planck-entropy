"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=n(function(f,i){
var s=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-expm1/dist'),q=require('@stdlib/math-base-special-ln/dist');function c(e){var r;return s(e)||e<=0?NaN:(r=-p(-e),e*v(-e)/r-q(r))}i.exports=c
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
