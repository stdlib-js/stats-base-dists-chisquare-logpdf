"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var o=t(function(p,a){
var n=require('@stdlib/stats-base-dists-gamma-logpdf/dist');function f(e,r){return n(e,r/2,.5)}a.exports=f
});var i=t(function(x,u){
var y=require('@stdlib/stats-base-dists-gamma-logpdf/dist').factory;function m(e){return y(e/2,.5)}u.exports=m
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=o(),v=i();q(c,"factory",v);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
