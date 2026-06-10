"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(x,i){
var n=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-expm1/dist'),p=require('@stdlib/math-base-special-ln/dist');function q(e){var r;return n(e)||e<=0?NaN:(r=-v(-e),e*s(-e)/r-p(r))}i.exports=q
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
