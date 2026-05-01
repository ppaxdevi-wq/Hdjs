(()=>{
var fo={compose:function(t){return function(e){return function(n){return t(e(n))}}}}
,Ra=function(t){return t.compose}
;
var B=function(t){return t.identity}
,G={identity:function(t){return t},Semigroupoid0:function(){return fo}}
;
var L_=function(t){return function(e){for(var n=e.length,r=new Array(n),a=0;a<n;a++)r[a]=t(e[a]);return r}}
;
var gt=!0
;
var it=function(t){return function(e){return function(n){return t(n)(e)}}}
,lt=function(t){return function(e){return t}}
;
var Ft=(function(){function t(){}return t.value=new t,t})()
;
var l=function(t){return t.map}
,ce=function(t){var e=l(t);return function(n){return function(r){return e(r)(n)}}}
,Nt=function(t){return l(t)(lt(void 0))}
,qr=function(t){var e=l(t);return function(n){return function(r){return e(lt(r))(n)}}}
,El=function(t){var e=l(t);return function(n){return e(lt(n))}}
;
var Ze={map:Ra(fo)}
,re={map:L_}
;
var S_=function(t){return function(e){return t+e}}
,A_=function(t){return function(e){return t.length===0?e:e.length===0?t:t.concat(e)}}
;
var Vt=function(t){return t.reflectSymbol}
,Il=function(t){return function(e){return{}.hasOwnProperty.call(e,t)}}
,bn=function(t){return function(e){return e[t]}}
;
var ju={append:function(t){return function(e){return void 0}}}
,jf={append:S_}
,Xn={append:A_}
;
var N=function(t){return t.append}
,x_=function(t){var e=N(t);return{append:function(n){return function(r){return function(a){return e(n(a))(r(a))}}}}}
;
var Pt=function(t){return t.alt}
,qy=B(G)
;
var at=function(t){return t.apply}
,Ll=function(t){var e=at(t),n=l(t.Functor0());return function(r){return function(a){return e(n(lt)(r))(a)}}}
,Fn=function(t){var e=at(t),n=l(t.Functor0());return function(r){return function(a){return e(n(lt(qy))(r))(a)}}}
,Bt=function(t){var e=at(t),n=l(t.Functor0());return function(r){return function(a){return function(o){return e(n(r)(a))(o)}}}}
;
var ky=Number.POSITIVE_INFINITY
,By=Number.NEGATIVE_INFINITY
;
var H_=function(t){return function(e){return function(n){return function(r){return function(a){return r<a?t:r===a?e:n}}}}}
,N_=H_
,P_=H_
;
var O_=function(t){return function(e){return t===e}}
,U_=O_
,W_=O_
;
var Ca={eq:U_}
,Sl={eq:W_}
;
var K=function(t){return t.eq}
;
var T=(function(){function t(){}return t.value=new t,t})()
,F=(function(){function t(){}return t.value=new t,t})()
,H=(function(){function t(){}return t.value=new t,t})()
;
var $_=function(t){return function(e){return t-e|0}}
,q_=function(t){return function(e){return t-e}}
;
var k_=function(t){return function(e){return t+e|0}}
,B_=function(t){return function(e){return t*e|0}}
,G_=function(t){return function(e){return t+e}}
,J_=function(t){return function(e){return t*e}}
;
var Tn=function(t){return t.zero}
;
var Yu={add:G_,zero:0,mul:J_,one:1}
,po={add:k_,zero:0,mul:B_,one:1}
;
var Zn=function(t){return t.mul}
,Al=function(t){return t.sub}
;
var Yf={sub:q_,Semiring0:function(){return Yu}}
,Jo={sub:$_,Semiring0:function(){return po}}
;
var Vo=function(t){var e=Al(t),n=Tn(t.Semiring0());return function(r){return e(n)(r)}}
;
var Ut=(function(){return{compare:N_(T.value)(H.value)(F.value),Eq0:function(){return Ca}}})(),Hl=(function(){return{compare:P_(T.value)(H.value)(F.value),Eq0:function(){return Sl}}})()
;
var Q=function(t){return t.compare}
;
var Zf=function(t){var e=Q(t);return function(n){return function(r){var a=e(n)(r);return!(a instanceof T)}}}
;
var ts=function(t){var e=Zf(t);return function(n){var r=Tn(n.Semiring0()),a=Vo(n);return function(o){var u=e(o)(r);return u?o:a(o)}}}
;
var tn=function(t){return t.top}
;
var Pl={top:2147483647,bottom:-2147483648,Ord0:function(){return Ut}}
,mo={top:"\uFFFF",bottom:"\0",Ord0:function(){return Hl}}
;
var Ue=function(t){return t.bottom}
;
var K_=function(t){return t.toString()}
,X_=function(t){var e=t.charCodeAt(0);if(e<32||e===127){switch(t){case"\x07":return"'\\a'";case"\b":return"'\\b'";case"\f":return"'\\f'";case"\n":return"'\\n'";case"\r":return"'\\r'";case"\t":return"'\\t'";case"\v":return"'\\v'"}return"'\\"+e.toString(10)+"'"}return t==="'"||t==="\\"?"'\\"+t+"'":"'"+t+"'"}
,Z_=function(t){var e=t.length;return'"'+t.replace(/[\0-\x1F\x7F"\\]/g,function(n,r){switch(n){case'"':case"\\":return"\\"+n;case"\x07":return"\\a";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v"}var a=r+1,o=a<e&&t[a]>="0"&&t[a]<="9"?"\\&":"";return"\\"+n.charCodeAt(0).toString(10)+o})+'"'}
,tm=function(t){return function(e){for(var n=[],r=0,a=e.length;r<a;r++)n[r]=t(e[r]);return"["+n.join(",")+"]"}}
;
var En={show:Z_}
,ge={show:K_}
,Ol={show:X_}
;
var b=function(t){return t.show}
,zo=function(t){return{show:tm(b(t))}}
;
var d=function(t){return t.pure}
;
var sn=function(t){var e=d(t);return function(n){return function(r){if(n)return r;if(!n)return e(void 0);throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): "+[n.constructor.name,r.constructor.name])}}}
,Xu=function(t){var e=at(t.Apply0()),n=d(t);return function(r){return function(a){return e(n(r))(a)}}}
;
var uw=B(G)
,c=(function(){function t(){}return t.value=new t,t})(),i=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})()
;
var wt=function(t){return function(e){return function(n){if(n instanceof c)return t;if(n instanceof i)return e(n.value0);throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): "+[t.constructor.name,e.constructor.name,n.constructor.name])}}}
,kn=wt(!0)(lt(!1))
,Gr=wt(!1)(lt(!0))
;
var xt={map:function(t){return function(e){return e instanceof i?new i(t(e.value0)):c.value}}}
;
var ae=function(t){return wt(t)(uw)}
,he=function(){return function(t){if(t instanceof i)return t.value0;throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): "+[t.constructor.name])}};
var x=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})(),z=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})()
;
var mr={map:function(t){return function(e){if(e instanceof x)return new x(e.value0);if(e instanceof z)return new z(t(e.value0));throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): "+[e.constructor.name])}}}
,iw=l(mr)
;
var be=function(t){return function(e){return function(n){if(n instanceof x)return t(n.value0);if(n instanceof z)return e(n.value0);throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): "+[t.constructor.name,e.constructor.name,n.constructor.name])}}}
;
var ho={apply:function(t){return function(e){if(t instanceof x)return new x(t.value0);if(t instanceof z)return iw(t.value0)(e);throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): "+[t.constructor.name,e.constructor.name])}},Functor0:function(){return mr}}
;
var rs={bind:be(function(t){return function(e){return new x(t)}})(function(t){return function(e){return e(t)}}),Apply0:function(){return ho}}
;
var Fa=(function(){return{pure:z.create,Apply0:function(){return ho}}})(),Zu={Applicative0:function(){return Fa},Bind1:function(){return rs}}
;
var tr=function(t){return t.defer}
;
var rm=function(t){return Math.min(Math.abs(t),2147483647)}
,am=function(t){return function(e){return e===0?0:e>0?Math.floor(t/e):-Math.floor(t/-e)}}
,om=function(t){return function(e){if(e===0)return 0;var n=Math.abs(e);return(t%n+n)%n}}
;
var um={Ring0:function(){return Jo}}
;
var Jr=function(t){return t.mod}
;
var gr={degree:rm,div:am,mod:om,CommutativeRing0:function(){return um}}
,yo=function(t){return t.div}
;
var Vr={mempty:void 0,Semigroup0:function(){return ju}}
,Ta={mempty:"",Semigroup0:function(){return jf}}
;
var ct=function(t){return t.mempty}
,jo=function(t){var e=ct(t),n=x_(t.Semigroup0());return{mempty:function(r){return e},Semigroup0:function(){return n}}}
;
var f=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})()
;
var Le=function(t){return t.value1}
,We=function(t){return t.value0}
;
var im=B(G)
,$e=function(t){return t.bimap}
,vn=function(t){var e=$e(t);return function(n){return e(n)(im)}}
,ls=function(t){return $e(t)(im)}
;
var Mn={bimap:function(t){return function(e){return function(n){if(n instanceof x)return new x(t(n.value0));if(n instanceof z)return new z(e(n.value0));throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): "+[t.constructor.name,e.constructor.name,n.constructor.name])}}}}
;
function Ea(t){return new Error(t)}
function lm(t){return t.message}
function cm(t){return t.stack}
function cs(t){return function(e){for(var n=e;n!=null;){var r=Object.getPrototypeOf(n),a=r.constructor.name;if(a===t)return e;if(a==="Object")return null;n=r}return null}}
;
var In=function(t){return t.discard}
;
var M=function(t){return t.bind}
,De=function(t){return it(M(t))}
,wo=function(t){var e=De(t);return function(n){return function(r){return function(a){return e(n)(r(a))}}}}
;
var Ln={discard:function(t){return M(t)}}
;
var fs=function(t){return function(){return t}}
,fm=function(t){return function(e){return function(){return e(t())()}}}
;
var xe=function(t){var e=M(t.Bind1()),n=d(t.Applicative0());return function(r){return function(a){return e(r)(function(o){return e(a)(function(u){return n(o(u))})})}}}
;
var vm=function(t,e,n){var r=0,a;return function(o){if(r===2)return a;if(r===1)throw new ReferenceError(t+" was needed before it finished initializing (module "+e+", line "+o+")",e,o);return r=1,a=n(),r=2,a}}
,er={Applicative0:function(){return pn},Bind1:function(){return Gn}}
,Gn={bind:fm,Apply0:function(){return ps(0)}}
,pn={pure:fs,Apply0:function(){return ps(0)}}
,pm=vm("functorEffect","Effect",function(){return{map:Xu(pn)}})
,ps=vm("applyEffect","Effect",function(){return{apply:xe(er),Functor0:function(){return pm(0)}}})
,Rt=pm(20),dm=ps(23),mw=Bt(dm)
,ds=function(t){return{append:mw(N(t))}}
,ei=function(t){var e=ds(t.Semigroup0());return{mempty:fs(ct(t)),Semigroup0:function(){return e}}}
;
function zr(t){return new Error(t)}
function Ul(t){return t.message}
function Qr(t){return function(){throw t}}
function Wl(t){return function(e){return function(){try{return e()}catch(n){return n instanceof Error||Object.prototype.toString.call(n)==="[object Error]"?t(n)():t(new Error(n.toString()))()}}}}
var hw=d(pn),Dw=l(Rt)
,_m=function(t){return Wl(function(e){return hw(x.create(e))})(Dw(z.create)(t))}
,_s=function(t){return Qr(zr(t))}
;
var Fe=function(t){return t.throwError}
;
var nr=function(t){return t.ask}
;
var rr=function(t){return t}
;
var Ia={map:function(t){return function(e){return t(e)}}}
;
var mm={apply:function(t){return function(e){return t(e)}},Functor0:function(){return Ia}}
,ww={bind:function(t){return function(e){return e(t)}},Apply0:function(){return mm}}
,gs={pure:rr,Apply0:function(){return mm}}
,se={Applicative0:function(){return gs},Bind1:function(){return ww}}
;
var oe=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})(),ue=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})(),qe=function(t){return t.tailRecM}
;
var gm=function(t){var e=function(n){var r=!1,a;function o(u){if(u instanceof oe){n=t(u.value0);return}if(u instanceof ue)return r=!0,u.value0;throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 103, column 3 - line 103, column 25): "+[u.constructor.name])}for(;!r;)a=o(n);return a};return function(n){return e(t(n))}}
;
var ri={tailRecM:function(t){var e=function(r){return r},n=gm(function(r){return e(t(r))});return function(r){return rr(n(r))}},Monad0:function(){return se}}
;
var D=function(t){return t}
;
var ar=function(t){return t.state}
,Ko=function(t){var e=ar(t);return function(n){return e(function(r){return new f(void 0,n)})}}
,Ro=function(t){var e=ar(t);return function(n){return e(function(r){return new f(void 0,n(r))})}}
;
var qt=function(t){return t.lift}
,Kt=function(t){return t.liftEffect}
;
var Mw=l(mr)
;
var eu=function(t){return t}
,hs=function(t){var e=l(t);return function(n){return function(r){var a=function(o){return function(u){if(u instanceof z)return new z(u.value0);if(u instanceof x)return new x(o(u.value0));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 43, column 3 - line 43, column 32): "+[o.constructor.name,u.constructor.name])}};return e(a(n))(r)}}}
,Co=function(t){return t}
;
var ui=function(t){return function(e){return t(e)}}
,kl=function(t){var e=l(t);return{map:function(n){return ui(e(Mw(n)))}}}
,Ds=function(t){var e=d(t);return function(n){return eu(e(n))}}
,Rm=function(t){return{Applicative0:function(){return Aa(t)},Bind1:function(){return bo(t)}}}
,bo=function(t){var e=M(t.Bind1()),n=d(t.Applicative0());return{bind:function(r){return function(a){return e(r)(be(function(o){return n(x.create(o))})(function(o){var u=a(o);return u}))}},Apply0:function(){return Bl(t)}}}
,Bl=function(t){var e=kl(t.Bind1().Apply0().Functor0());return{apply:xe(Rm(t)),Functor0:function(){return e}}}
,Aa=function(t){return{pure:(function(){var e=d(t.Applicative0());return function(n){return eu(e(z.create(n)))}})(),Apply0:function(){return Bl(t)}}}
;
var ys=function(t){var e=Rm(t);return{throwError:(function(){var n=d(t.Applicative0());return function(r){return eu(n(x.create(r)))}})(),Monad0:function(){return e}}}
;
var Cm=function(t){var e=N(t);return function(n){var r=n.Bind1(),a=M(r),o=d(n.Applicative0()),u=kl(r.Apply0().Functor0());return{alt:function(_){return function(p){return a(_)(function(R){if(R instanceof z)return o(new z(R.value0));if(R instanceof x)return a(p)(function(P){if(P instanceof z)return o(new z(P.value0));if(P instanceof x)return o(new x(e(R.value0)(P.value0)));throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 87, column 9 - line 89, column 49): "+[P.constructor.name])});throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 83, column 5 - line 89, column 49): "+[R.constructor.name])})}},Functor0:function(){return u}}}}
;
var Gl=function(){return D}
,bm=Gl()
,Xt=function(){return bm}
,Jl=function(){return function(){return function(t){return bm}}}
,Iw=Xt(),Rs=hs(Ia),Fo=function(t){return Iw(Co(t))}
;
function Fm(t,e,n){return t==null?e:n(t)}
function bs(t){return t}
var To=wt(null)(bs),ht=function(t){return Fm(t,c.value,i.create)}
;
function Ha(t){return typeof t}
function nu(t){return Object.prototype.toString.call(t).slice(8,-1)}
function Na(t){return t===null}
function Eo(t){return t===void 0}
;
var Tm=function(t){return function(e){return function(n){return(n|0)===n?t(n):e}}}
,Rr=function(t){return t}
;
var Vl=isFinite
,li=Math.floor
,zl=Math.round
,Em=tn(Pl),Mm=Ue(Pl)
;
var ci=(function(){return Tm(i.create)(c.value)})(),Im=function(t){if(!Vl(t))return 0;if(t>=Rr(Em))return Em;if(t<=Rr(Mm))return Mm;if(gt)return ae(0)(ci(t));throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): "+[t.constructor.name])},Lm=function(t){return Im(zl(t))}
;
var Ql=function(t){return Im(li(t))}
;
var Sm=function(t){return function(e){return function(n){for(var r=e,a=n.length,o=a-1;o>=0;o--)r=t(n[o])(r);return r}}}
,Am=function(t){return function(e){return function(n){for(var r=e,a=n.length,o=0;o<a;o++)r=t(r)(n[o]);return r}}}
;
var de=function(t){return t.empty}
,Zt=function(t){return t.foldr}
;
var or=function(t){var e=Fn(t.Apply0()),n=d(t);return function(r){var a=Zt(r);return function(o){return a(function(u){return e(o(u))})(n(void 0))}}}
,_i=function(t){var e=or(t);return function(n){return it(e(n))}}
;
var Wt=function(t){return t.foldl}
,ea=function(t){var e=Wt(t);return function(n){var r=N(n.Semigroup0()),a=ct(n);return function(o){return function(u){var _=function(p){return function(R){return p.init?{init:!1,acc:R}:{init:!1,acc:r(p.acc)(r(o)(R))}}};return e(_)({init:!0,acc:a})(u).acc}}}}
;
var xn={foldr:function(t){return function(e){return function(n){if(n instanceof c)return e;if(n instanceof i)return t(n.value0)(e);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[t.constructor.name,e.constructor.name,n.constructor.name])}}},foldl:function(t){return function(e){return function(n){if(n instanceof c)return e;if(n instanceof i)return t(e)(n.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[t.constructor.name,e.constructor.name,n.constructor.name])}}},foldMap:function(t){var e=ct(t);return function(n){return function(r){if(r instanceof c)return e;if(r instanceof i)return n(r.value0);throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): "+[n.constructor.name,r.constructor.name])}}}}
;
var Wm=function(t){var e=Zt(t);return function(n){var r=N(n.Semigroup0()),a=ct(n);return function(o){return e(function(u){return function(_){return r(o(u))(_)}})(a)}}}
,Se={foldr:Sm,foldl:Am,foldMap:function(t){return Wm(Se)(t)}}
;
var ie=function(t){return t.foldMap}
;
var ye=function(t){return t.traverse}
;
var ks={traverse:function(t){var e=d(t),n=l(t.Apply0().Functor0());return function(r){return function(a){if(a instanceof c)return e(c.value);if(a instanceof i)return n(i.create)(r(a.value0));throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): "+[r.constructor.name,a.constructor.name])}}},sequence:function(t){var e=d(t),n=l(t.Apply0().Functor0());return function(r){if(r instanceof c)return e(c.value);if(r instanceof i)return n(i.create)(r.value0);throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): "+[r.constructor.name])}},Functor0:function(){return xt},Foldable1:function(){return xn}}
;
var Qm=function(t){return function(e){return function(n){return function(r){return function(a){return function(o){for(var u=[],_=o;;){var p=a(_);if(t(p))return u;var R=e(p);u.push(n(R)),_=r(R)}}}}}}}
;
var jm=function(t){return function(e){return function(n){return function(r){return function(a){return function(o){for(var u=[],_=o;;){var p=a(_);u.push(n(p));var R=r(p);if(t(R))return u;_=e(R)}}}}}}}
;
var qR=he()
,Gs={unfoldr1:jm(kn)(qR)(We)(Le)}
,GR=he(),br=function(t){return t.unfoldr}
,wi={unfoldr:Qm(kn)(GR)(We)(Le),Unfoldable10:function(){return Gs}}
;
var ur=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})()
;
var Ri=function(t){var e=de(t);return function(n){return new ur(n,e)}}
,Qs=function(t){var e=b(t);return function(n){var r=b(n);return{show:function(a){return"(NonEmpty "+(e(a.value0)+(" "+(r(a.value1)+")")))}}}}
,js=function(t){var e=l(t);return{map:function(n){return function(r){return new ur(n(r.value0),e(n)(r.value1))}}}}
;
var St=(function(){function t(){}return t.value=new t,t})(),_t=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})(),nc=function(t){return t},tC=function(t){return new _t(t.value0,t.value1)}
;
var eC=function(t){var e=function(n){return function(r){var a=n,o=!1,u;function _(p,R){if(R instanceof _t&&R.value1 instanceof _t&&R.value1.value1 instanceof _t){a=new _t(R,p),r=R.value1.value1.value1;return}var P=function(Ct){return Ct instanceof _t&&Ct.value1 instanceof _t&&Ct.value1.value1 instanceof St?new _t(t(Ct.value0),new _t(t(Ct.value1.value0),St.value)):Ct instanceof _t&&Ct.value1 instanceof St?new _t(t(Ct.value0),St.value):St.value},j=function(Ct){return function(Et){var zt=Ct,Ee=!1,Ju;function Vu(Yn,Jf){if(Yn instanceof _t&&Yn.value0 instanceof _t&&Yn.value0.value1 instanceof _t&&Yn.value0.value1.value1 instanceof _t){zt=Yn.value1,Et=new _t(t(Yn.value0.value0),new _t(t(Yn.value0.value1.value0),new _t(t(Yn.value0.value1.value1.value0),Jf)));return}return Ee=!0,Jf}for(;!Ee;)Ju=Vu(zt,Et);return Ju}};return o=!0,j(p)(P(R))}for(;!o;)u=_(a,r);return u}};return e(St.value)}
,Ci={map:eC},t1=l(Ci),bi=js(Ci)
;
var Hn={foldr:function(t){return function(e){var n=(function(){var a=function(o){return function(u){var _=o,p=!1,R;function P(j,Ct){if(Ct instanceof St)return p=!0,j;if(Ct instanceof _t){_=new _t(Ct.value0,j),u=Ct.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): "+[j.constructor.name,Ct.constructor.name])}for(;!p;)R=P(_,u);return R}};return a(St.value)})(),r=Wt(Hn)(it(t))(e);return function(a){return r(n(a))}}},foldl:function(t){var e=function(n){return function(r){var a=n,o=!1,u;function _(p,R){if(R instanceof St)return o=!0,p;if(R instanceof _t){a=t(p)(R.value0),r=R.value1;return}throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): "+[R.constructor.name])}for(;!o;)u=_(a,r);return u}};return e},foldMap:function(t){var e=N(t.Semigroup0()),n=ct(t);return function(r){return Wt(Hn)(function(a){var o=e(a);return function(u){return o(r(u))}})(n)}}}
;
var nC=Zt(Hn),rC=ea(Hn)(Ta)
;
var Ys={append:function(t){return function(e){return nC(_t.create)(e)(t)}}}
,rc=N(Ys)
;
var Ks={append:function(t){return function(e){return new ur(t.value0,rc(t.value1)(tC(e)))}}}
,Xs=function(t){var e=b(t);return{show:function(n){return n instanceof St?"Nil":"("+(rC(" : ")(t1(e)(n))+" : Nil)")}}}
,fu=function(t){var e=b(Qs(t)(Xs(t)));return{show:function(n){return"(NonEmptyList "+(e(n)+")")}}}
;
var e1={apply:function(t){return function(e){if(t instanceof St)return St.value;if(t instanceof _t)return rc(t1(t.value0)(e))(at(e1)(t.value1)(e));throw new Error("Failed pattern match at Data.List.Types (line 157, column 1 - line 159, column 48): "+[t.constructor.name,e.constructor.name])}},Functor0:function(){return Ci}},Xm=at(e1)
,aC={apply:function(t){return function(e){return new ur(t.value0(e.value0),rc(Xm(t.value1)(new _t(e.value0,St.value)))(Xm(new _t(t.value0,t.value1))(e.value1)))}},Functor0:function(){return bi}}
;
var oC={alt:rc,Functor0:function(){return Ci}}
,ac=(function(){return{empty:St.value,Alt0:function(){return oC}}})()
;
var n1={pure:(function(){var t=Ri(ac);return function(e){return nc(t(e))}})(),Apply0:function(){return aC}}
;
var cC=Wt(Hn)
;
var tv=function(t){var e=at(t.Applicative0().Apply0()),n=l(t.Plus1().Alt0().Functor0());return function(r){var a=tr(r);return function(o){return e(n(_t.create)(o))(a(function(u){return fC(t)(r)(o)}))}}}
,fC=function(t){var e=Pt(t.Plus1().Alt0()),n=d(t.Applicative0());return function(r){return function(a){return e(tv(t)(r)(a))(n(St.value))}}}
,oc=cC(function(t){return function(e){return t+1|0}})(0)
;
var i1=function(t){return t()}
,l1=function(t){throw new Error(t)}
,c1=function(){return l1}
,dC=c1(),_C=i1,ir=function(t){return _C(function(){return dC(t)})}
;
var vu=(function(){var t=Ri(ac);return function(e){return nc(t(e))}})()
;
var ev=function(t){return t.join("")}
,nv=function(t){return t.split("")}
,rv=function(t){return t}
,ra=function(t){return t.length}
;
var s1=function(t){return function(e){return function(n){return function(r){var a=r.indexOf(n);return a===-1?e:t(a)}}}}
;
var Ua=function(t){return function(e){return e.substring(t)}}
;
var av=function(t){return function(e){return{before:e.substring(0,t),after:e.substring(t)}}}
;
var Wa=function(t){return function(e){if(t>=0&&t<e.length)return e.charAt(t);throw new Error("Data.String.Unsafe.charAt: Invalid index.")}}
;
var ic=function(t){return function(e){var n=av(ra(t))(e),r=n.before===t;return r?new i(n.after):c.value}}
;
var p1=(function(){return s1(i.create)(c.value)})()
;
var $a=function(t){var e=p1(t);return function(n){return Gr(e(n))}}
;
var lc=b(En),wC=b(ge),RC=d(Fa)
;
var cc=(function(){function t(e){this.value0=e}return t.create=function(e){return new t(e)},t})(),ka=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})(),uv=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})(),Ti=(function(){function t(e,n){this.value0=e,this.value1=n}return t.create=function(e){return function(n){return new t(e,n)}},t})(),oa=D,d1=D,qa={show:function(t){if(t instanceof cc)return"(ForeignError "+(lc(t.value0)+")");if(t instanceof uv)return"(ErrorAtIndex "+(wC(t.value0)+(" "+(b(qa)(t.value1)+")")));if(t instanceof Ti)return"(ErrorAtProperty "+(lc(t.value0)+(" "+(b(qa)(t.value1)+")")));if(t instanceof ka)return"(TypeMismatch "+(lc(t.value0)+(" "+(lc(t.value1)+")")));throw new Error("Failed pattern match at Foreign (line 69, column 1 - line 73, column 89): "+[t.constructor.name])}}
;
var _1=function(t){var e=d(Aa(t));return function(n){if(Na(n))return e(c.value);if(gt)return e(new i(n));throw new Error("Failed pattern match at Foreign (line 169, column 1 - line 169, column 98): "+[n.constructor.name])}}
,Ei=function(t){var e=Fe(ys(t));return function(n){return e(vu(n))}}
;
var pu=function(t){var e=d(Aa(t)),n=Ei(t);return function(r){return function(a){if(nu(a)===r)return e(d1(a));if(gt)return n(new ka(r,nu(a)));throw new Error("Failed pattern match at Foreign (line 123, column 1 - line 123, column 104): "+[r.constructor.name,a.constructor.name])}}}
,iv=function(t){return pu(t)("Boolean")}
,m1=function(t){return pu(t)("Number")}
,lv=function(t){var e=l(t.Bind1().Apply0().Functor0()),n=m1(t);return function(r){var a=new x(vu(new ka("Int",nu(r)))),o=(function(){var u=wt(a)(RC);return function(_){return u(ci(_))}})();return ui(e(be(lt(a))(o)))(n(r))}}
,Mi=function(t){return pu(t)("String")}
;
var cv=function(t){return function(e){return ht(cs(t)(oa(e)))}};
var h1=function(){return cm},Ii=cv("Error");
var sc=function(){return lm},bC=sc(),ia=function(t){var e=vn(t);return function(){return function(n){return e(function(r){return Ea(n+(" | "+bC(r)))})}}}
;
function fv(){return self}
;
var Si=(function(){function t(){}return t.value=new t,t})(),du=(function(){function t(){}return t.value=new t,t})()
;
var la=(function(){return du.value})()
;
var _u = "http://127.0.0.1:9999";
;
var dc=function(t){return function(e){return e.split(t)}}
,_c=function(t){return t.trim()}
,So=function(t){return function(e){return e.join(t)}}
,Ai=function(t){return t===""}
;
function y1(t,e,n,r){return r==null?t:e(r[n])}
function w1(t,e){return Object.prototype.hasOwnProperty.call(e,t)}
function R1(t,e){return t in e}
;
var SC=function(t){var e=Ei(t),n=d(Aa(t));return function(r){return function(a){return y1(e(new ka("object",Ha(a))),n,r,a)}}}
,mc=function(t){return SC(t)}
;
var C1=function(t){return t.ix}
,AC=function(t){return t.index}
,b1=function(t){return{ix:function(e){return AC(e)}}}
,xC=function(t){return function(e){return Na(e)||Eo(e)?!1:Ha(e)==="object"||Ha(e)==="function"?R1(t,e):!1}}
,HC=function(t){return function(e){return Na(e)||Eo(e)?!1:Ha(e)==="object"||Ha(e)==="function"?w1(t,e):!1}}
,F1=function(t){return{index:it(mc(t)),hasProperty:xC,hasOwnProperty:HC,errorAt:Ti.create}}
;
function gc(){return chrome.runtime.openOptionsPage()}
function dv(){return chrome.runtime.getManifest()}
function xi(t){return function(){return chrome.runtime.getURL(t)}}
function _v(t){return function(){return chrome.runtime.setUninstallURL(t)}}
;
var mv=chrome.runtime.onMessage,NC=chrome.runtime.onSuspend,PC=chrome.runtime.onUpdateAvailable,OC=chrome.runtime.onInstalled;
;
function mu(t){return function(){return Promise.resolve(t())}}
function hc(t){return function(e){return function(n){return function(){n().then(r=>e(r)(),r=>t(r)())}}}}
function gv(t){return function(e){return function(){return e().then(n=>t(n)())}}}
function Dc(t){return function(e){return function(){return e().catch(n=>t(n)())}}}
function hv(t){return function(e){return function(n){return function(){return n().then(r=>e(r),r=>Promise.reject(t(r)))}}}}
function yc(t){return function(){return Promise.resolve(t)}}
function Hi(t){return function(){return Promise.reject(t)}}
;
var Vn=function(){return D}
;
function $C(t,e){return t==="big"?BigInt(e):e}
var T1=t=>JSON.parse(t,$C);
function qC(t,e){return typeof e=="bigint"?e.toString():e}
var Dv=t=>JSON.stringify(t,qC);
;
var VC=function(t){var e=l(t);return{map:function(n){return function(r){return function(a){return e(function(o){return new f(n(o.value0),o.value1)})(r(a))}}}}}
;
var Pi=function(t){return{Applicative0:function(){return QC(t)},Bind1:function(){return zC(t)}}}
,zC=function(t){var e=M(t.Bind1());return{bind:function(n){return function(r){return function(a){return e(n(a))(function(o){var u=r(o.value0);return u(o.value1)})}}},Apply0:function(){return E1(t)}}}
,E1=function(t){var e=VC(t.Bind1().Apply0().Functor0());return{apply:xe(Pi(t)),Functor0:function(){return e}}}
,QC=function(t){var e=d(t.Applicative0());return{pure:function(n){return function(r){return e(new f(n,r))}},Apply0:function(){return E1(t)}}}
;
var wv=function(t){var e=t.Monad0(),n=M(e.Bind1()),r=d(e.Applicative0()),a=qe(t),o=Pi(e);return{tailRecM:function(u){return function(_){var p=function(R){var P=u(R.value0);return n(P(R.value1))(function(j){return r((function(){if(j.value0 instanceof oe)return new oe(new f(j.value0.value0,j.value1));if(j.value0 instanceof ue)return new ue(new f(j.value0.value0,j.value1));throw new Error("Failed pattern match at Control.Monad.State.Trans (line 88, column 16 - line 90, column 40): "+[j.value0.constructor.name])})())})};return function(R){return a(p)(new f(_,R))}}},Monad0:function(){return o}}}
,Rv=function(t){var e=d(t.Applicative0()),n=Pi(t);return{state:function(r){return function(a){return e(r(a))}},Monad0:function(){return n}}}
;
var XC=Xt()
;
var Cv=function(t){return function(e){return XC(t(e))}}
;
var fa=function(t){var e=null;return function(){return t===void 0||(e=t(),t=void 0),e}}
,xo=function(t){return t()}
;
var tb=function(t,e){if(t<1)return[];var n=new Array(t);return n.fill(e)}
,eb=function(t,e){for(var n=[],r=0,a=0;a<t;a++)n[r++]=e;return n}
,nb=typeof Array.prototype.fill=="function"?tb:eb
;
var Fr=function(t){return t.length}
;
var L1=function(t,e,n,r){for(var a=0,o=r.length;a<o;a++)if(n(r[a]))return t(a);return e}
,Ui=function(t){return function(e,n,r,a,o){return t(e)(n)(r)(a)(o)}}
,Cc=function(t){return function(e){return function(n){return function(r){return function(a){return t(e,n,r,a)}}}}}
