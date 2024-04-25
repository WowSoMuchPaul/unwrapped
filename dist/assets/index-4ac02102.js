var vl=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var hg=vl(Ft=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="148",Or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xl=0,sa=1,_l=2,To=1,yl=2,Ti=3,Dn=0,Tt=1,br=2,Wi=3,cn=0,oi=1,aa=2,oa=3,la=4,bl=5,ei=100,Sl=101,wl=102,ca=103,ua=104,Ml=200,Al=201,Pl=202,Tl=203,Eo=204,Lo=205,El=206,Ll=207,Cl=208,Dl=209,Rl=210,Nl=0,zl=1,Fl=2,Ts=3,Ol=4,Il=5,Hl=6,Ul=7,Co=0,Vl=1,kl=2,$t=0,Bl=1,Gl=2,Wl=3,Xl=4,jl=5,Do=300,fi=301,hi=302,Es=303,Ls=304,Sr=306,Cs=1e3,Nt=1001,Ds=1002,ht=1003,fa=1004,Ir=1005,At=1006,ql=1007,Di=1008,Rn=1009,Kl=1010,Zl=1011,Ro=1012,Jl=1013,An=1014,Pn=1015,Ri=1016,Yl=1017,Ql=1018,li=1020,$l=1021,ec=1022,zt=1023,tc=1024,nc=1025,En=1026,di=1027,ic=1028,rc=1029,sc=1030,ac=1031,oc=1033,Hr=33776,Ur=33777,Vr=33778,kr=33779,ha=35840,da=35841,pa=35842,ma=35843,lc=36196,ga=37492,va=37496,xa=37808,_a=37809,ya=37810,ba=37811,Sa=37812,wa=37813,Ma=37814,Aa=37815,Pa=37816,Ta=37817,Ea=37818,La=37819,Ca=37820,Da=37821,Ra=36492,Nn=3e3,We=3001,cc=3200,uc=3201,fc=0,hc=1,Ot="srgb",Ni="srgb-linear",Br=7680,dc=519,Na=35044,za="300 es",Rs=1035;class In{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,Fa=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function pc(i,e){return(i%e+e)%e}function Wr(i,e,t){return(1-t)*i+t*e}function Oa(i){return(i&i-1)===0&&i!==0}function Ns(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bt{constructor(){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],p=r[0],d=r[3],v=r[6],M=r[1],_=r[4],S=r[7],b=r[2],T=r[5],L=r[8];return s[0]=o*p+a*M+c*b,s[3]=o*d+a*_+c*T,s[6]=o*v+a*S+c*L,s[1]=l*p+u*M+f*b,s[4]=l*d+u*_+f*T,s[7]=l*v+u*S+f*L,s[2]=h*p+m*M+g*b,s[5]=h*d+m*_+g*T,s[8]=h*v+m*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*f+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*l-u*n)*p,e[2]=(a*n-r*o)*p,e[3]=h*p,e[4]=(u*t-r*c)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xr.makeScale(e,t)),this}rotate(e){return this.premultiply(Xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new bt;function No(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jr={[Ot]:{[Ni]:Ln},[Ni]:{[Ot]:gr}},ut={legacyMode:!0,get workingColorSpace(){return Ni},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(jr[e]&&jr[e][t]!==void 0){const n=jr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Et={h:0,s:0,l:0},ji={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function qi(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=pc(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qr(o,s,e+1/3),this.g=qr(o,s,e),this.b=qr(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ut.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ut.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ut.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ot){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ut.fromWorkingColorSpace(qi(this,Qe),e),pt(Qe.r*255,0,255)<<16^pt(Qe.g*255,0,255)<<8^pt(Qe.b*255,0,255)<<0}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(qi(this,Qe),t);const n=Qe.r,r=Qe.g,s=Qe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(qi(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=Ot){return ut.fromWorkingColorSpace(qi(this,Qe),e),e!==Ot?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Et),Et.h+=e,Et.s+=t,Et.l+=n,this.setHSL(Et.h,Et.s,Et.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Et),e.getHSL(ji);const n=Wr(Et.h,ji.h,t),r=Wr(Et.s,ji.s,t),s=Wr(Et.l,ji.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=zo;let Hn;class Fo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=zi("canvas")),Hn.width=e.width,Hn.height=e.height;const n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ln(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Oo{constructor(e=null){this.isSource=!0,this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kr(r[o].image)):s.push(Kr(r[o]))}else s=Kr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mc=0;class mt extends In{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Nt,r=Nt,s=At,o=Di,a=zt,c=Rn,l=mt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=mi(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Do;mt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],p=c[2],d=c[6],v=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,S=(m+1)/2,b=(v+1)/2,T=(u+h)/4,L=(f+p)/4,x=(g+d)/4;return _>S&&_>b?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=L/n):S>b?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=x/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=L/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(f-p)/M,this.z=(h-u)/M,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends In{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Io extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ht,this.minFilter=ht,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==g){let d=1-a;const v=c*h+l*m+u*g+f*p,M=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const b=Math.sqrt(_),T=Math.atan2(b,v*M);d=Math.sin(d*T)/b,a=Math.sin(a*T)/b}const S=a*M;if(c=c*d+h*S,l=l*d+m*S,u=u*d+g*S,f=f*d+p*S,d===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*m-l*h,e[t+1]=c*g+u*h+l*f-a*m,e[t+2]=l*g+u*m+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),h=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,f=c*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new C,Ia=new gi;class ki{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)gn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(gn)}else n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox),Jr.applyMatrix4(e.matrixWorld),this.union(Jr);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),Ki.subVectors(this.max,_i),Un.subVectors(e.a,_i),Vn.subVectors(e.b,_i),kn.subVectors(e.c,_i),rn.subVectors(Vn,Un),sn.subVectors(kn,Vn),vn.subVectors(Un,kn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-vn.z,vn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,vn.z,0,-vn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-vn.y,vn.x,0];return!Yr(t,Un,Vn,kn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Un,Vn,kn,Ki))?!1:(Zi.crossVectors(rn,sn),t=[Zi.x,Zi.y,Zi.z],Yr(t,Un,Vn,kn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new C,new C,new C,new C,new C,new C,new C,new C],gn=new C,Jr=new ki,Un=new C,Vn=new C,kn=new C,rn=new C,sn=new C,vn=new C,_i=new C,Ki=new C,Zi=new C,xn=new C;function Yr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){xn.fromArray(i,s);const a=r.x*Math.abs(xn.x)+r.y*Math.abs(xn.y)+r.z*Math.abs(xn.z),c=e.dot(xn),l=t.dot(xn),u=n.dot(xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const vc=new ki,yi=new C,Qr=new C;class js{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Qr)),this.expandByPoint(yi.copy(e.center).sub(Qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new C,$r=new C,Ji=new C,an=new C,es=new C,Yi=new C,ts=new C;class Ho{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$r.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),an.copy(this.origin).sub($r);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),a=an.dot(this.direction),c=-an.dot(Ji),l=an.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ji).multiplyScalar(h).add($r),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),r=qt.dot(qt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,r,s){es.subVectors(t,e),Yi.subVectors(n,e),ts.crossVectors(es,Yi);let o=this.direction.dot(ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);const c=a*this.direction.dot(Yi.crossVectors(an,Yi));if(c<0)return null;const l=a*this.direction.dot(es.cross(an));if(l<0||c+l>o)return null;const u=-a*an.dot(ts);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,u,f,h,m,g,p,d){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=g,v[11]=p,v[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),o=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=h-p*l,t[9]=-a*c,t[2]=p-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,g=l*u,p=l*f;t[0]=h+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,g=l*u,p=l*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xc,e,_c)}lookAt(e,t,n){const r=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),on.crossVectors(n,_t),on.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),on.crossVectors(n,_t)),on.normalize(),Qi.crossVectors(_t,on),r[0]=on.x,r[4]=Qi.x,r[8]=_t.x,r[1]=on.y,r[5]=Qi.y,r[9]=_t.y,r[2]=on.z,r[6]=Qi.z,r[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],v=n[14],M=n[3],_=n[7],S=n[11],b=n[15],T=r[0],L=r[4],x=r[8],P=r[12],D=r[1],U=r[5],le=r[9],z=r[13],R=r[2],X=r[6],Y=r[10],Q=r[14],j=r[3],ie=r[7],$=r[11],I=r[15];return s[0]=o*T+a*D+c*R+l*j,s[4]=o*L+a*U+c*X+l*ie,s[8]=o*x+a*le+c*Y+l*$,s[12]=o*P+a*z+c*Q+l*I,s[1]=u*T+f*D+h*R+m*j,s[5]=u*L+f*U+h*X+m*ie,s[9]=u*x+f*le+h*Y+m*$,s[13]=u*P+f*z+h*Q+m*I,s[2]=g*T+p*D+d*R+v*j,s[6]=g*L+p*U+d*X+v*ie,s[10]=g*x+p*le+d*Y+v*$,s[14]=g*P+p*z+d*Q+v*I,s[3]=M*T+_*D+S*R+b*j,s[7]=M*L+_*U+S*X+b*ie,s[11]=M*x+_*le+S*Y+b*$,s[15]=M*P+_*z+S*Q+b*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],v=e[15];return g*(+s*c*f-r*l*f-s*a*h+n*l*h+r*a*m-n*c*m)+p*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+d*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*u-n*l*u)+v*(-r*a*u-t*c*f+t*a*h+r*o*f-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],v=e[15],M=f*d*l-p*h*l+p*c*m-a*d*m-f*c*v+a*h*v,_=g*h*l-u*d*l-g*c*m+o*d*m+u*c*v-o*h*v,S=u*p*l-g*f*l+g*a*m-o*p*m-u*a*v+o*f*v,b=g*f*c-u*p*c-g*a*h+o*p*h+u*a*d-o*f*d,T=t*M+n*_+r*S+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=M*L,e[1]=(p*h*s-f*d*s-p*r*m+n*d*m+f*r*v-n*h*v)*L,e[2]=(a*d*s-p*c*s+p*r*l-n*d*l-a*r*v+n*c*v)*L,e[3]=(f*c*s-a*h*s-f*r*l+n*h*l+a*r*m-n*c*m)*L,e[4]=_*L,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*v+t*h*v)*L,e[6]=(g*c*s-o*d*s-g*r*l+t*d*l+o*r*v-t*c*v)*L,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*L,e[8]=S*L,e[9]=(g*f*s-u*p*s-g*n*m+t*p*m+u*n*v-t*f*v)*L,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*v+t*a*v)*L,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*m-t*a*m)*L,e[12]=b*L,e[13]=(u*p*r-g*f*r+g*n*h-t*p*h-u*n*d+t*f*d)*L,e[14]=(g*a*r-o*p*r-g*n*c+t*p*c+o*n*d-t*a*d)*L,e[15]=(o*f*r-u*a*r+u*n*c-t*f*c-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,g=s*f,p=o*u,d=o*f,v=a*f,M=c*l,_=c*u,S=c*f,b=n.x,T=n.y,L=n.z;return r[0]=(1-(p+v))*b,r[1]=(m+S)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+v))*T,r[6]=(d+M)*T,r[7]=0,r[8]=(g+_)*L,r[9]=(d-M)*L,r[10]=(1-(h+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bn.set(r[0],r[1],r[2]).length();const o=Bn.set(r[4],r[5],r[6]).length(),a=Bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Lt.copy(this);const l=1/s,u=1/o,f=1/a;return Lt.elements[0]*=l,Lt.elements[1]*=l,Lt.elements[2]*=l,Lt.elements[4]*=u,Lt.elements[5]*=u,Lt.elements[6]*=u,Lt.elements[8]*=f,Lt.elements[9]*=f,Lt.elements[10]*=f,t.setFromRotationMatrix(Lt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),f=(t+e)*c,h=(n+r)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new C,Lt=new st,xc=new C(0,0,0),_c=new C(1,1,1),on=new C,Qi=new C,_t=new C,Ha=new st,Ua=new gi;class Bi{constructor(e=0,t=0,n=0,r=Bi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bi.DefaultOrder="XYZ";Bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class qs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yc=0;const Va=new C,Gn=new gi,Kt=new st,$i=new C,bi=new C,bc=new C,Sc=new gi,ka=new C(1,0,0),Ba=new C(0,1,0),Ga=new C(0,0,1),wc={type:"added"},Wa={type:"removed"};class St extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new C,t=new Bi,n=new gi,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new bt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(ka,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ka,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(bi,$i,this.up):Kt.lookAt($i,bi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Gn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DefaultUp=new C(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const Ct=new C,Zt=new C,ns=new C,Jt=new C,Wn=new C,Xn=new C,Xa=new C,is=new C,rs=new C,ss=new C;class Qt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ct.subVectors(e,t),r.cross(Ct);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ct.subVectors(r,t),Zt.subVectors(n,t),ns.subVectors(e,t);const o=Ct.dot(Ct),a=Ct.dot(Zt),c=Ct.dot(ns),l=Zt.dot(Zt),u=Zt.dot(ns),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Jt),c.set(0,0),c.addScaledVector(s,Jt.x),c.addScaledVector(o,Jt.y),c.addScaledVector(a,Jt.z),c}static isFrontFacing(e,t,n,r){return Ct.subVectors(n,t),Zt.subVectors(e,t),Ct.cross(Zt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Zt.subVectors(this.a,this.b),Ct.cross(Zt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Qt.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Wn.subVectors(r,n),Xn.subVectors(s,n),is.subVectors(e,n);const c=Wn.dot(is),l=Xn.dot(is);if(c<=0&&l<=0)return t.copy(n);rs.subVectors(e,r);const u=Wn.dot(rs),f=Xn.dot(rs);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Wn,o);ss.subVectors(e,s);const m=Wn.dot(ss),g=Xn.dot(ss);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xn,a);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Xa.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Xa,a);const v=1/(d+p+h);return o=p*v,a=h*v,t.copy(n).addScaledVector(Wn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Mc=0;class wr extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=oi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Eo,this.blendDst=Lo,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mr extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new C,er=new ce;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uo extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ac=0;const Mt=new st,as=new St,jn=new C,yt=new ki,Si=new ki,rt=new C;class fn extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?Vo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mt.makeRotationFromQuaternion(e),this.applyMatrix4(Mt),this}rotateX(e){return Mt.makeRotationX(e),this.applyMatrix4(Mt),this}rotateY(e){return Mt.makeRotationY(e),this.applyMatrix4(Mt),this}rotateZ(e){return Mt.makeRotationZ(e),this.applyMatrix4(Mt),this}translate(e,t,n){return Mt.makeTranslation(e,t,n),this.applyMatrix4(Mt),this}scale(e,t,n){return Mt.makeScale(e,t,n),this.applyMatrix4(Mt),this}lookAt(e){return as.lookAt(e),as.updateMatrix(),this.applyMatrix4(as.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];yt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Si.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(yt.min,Si.min),yt.expandByPoint(rt),rt.addVectors(yt.max,Si.max),yt.expandByPoint(rt)):(yt.expandByPoint(Si.min),yt.expandByPoint(Si.max))}yt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rt.fromBufferAttribute(a,l),c&&(jn.fromBufferAttribute(e,l),rt.add(jn)),r=Math.max(r,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let D=0;D<a;D++)l[D]=new C,u[D]=new C;const f=new C,h=new C,m=new C,g=new ce,p=new ce,d=new ce,v=new C,M=new C;function _(D,U,le){f.fromArray(r,D*3),h.fromArray(r,U*3),m.fromArray(r,le*3),g.fromArray(o,D*2),p.fromArray(o,U*2),d.fromArray(o,le*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const z=1/(p.x*d.y-d.x*p.y);isFinite(z)&&(v.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),M.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(z),l[D].add(v),l[U].add(v),l[le].add(v),u[D].add(M),u[U].add(M),u[le].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let D=0,U=S.length;D<U;++D){const le=S[D],z=le.start,R=le.count;for(let X=z,Y=z+R;X<Y;X+=3)_(n[X+0],n[X+1],n[X+2])}const b=new C,T=new C,L=new C,x=new C;function P(D){L.fromArray(s,D*3),x.copy(L);const U=l[D];b.copy(U),b.sub(L.multiplyScalar(L.dot(U))).normalize(),T.crossVectors(x,U);const z=T.dot(u[D])<0?-1:1;c[D*4]=b.x,c[D*4+1]=b.y,c[D*4+2]=b.z,c[D*4+3]=z}for(let D=0,U=S.length;D<U;++D){const le=S[D],z=le.start,R=le.count;for(let X=z,Y=z+R;X<Y;X+=3)P(n[X+0]),P(n[X+1]),P(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,f=new C;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let v=0;v<u;v++)h[g++]=l[m++]}return new kt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new st,qn=new Ho,os=new js,wi=new C,Mi=new C,Ai=new C,ls=new C,tr=new C,nr=new ce,ir=new ce,rr=new ce,cs=new C,sr=new C;class Vt extends St{constructor(e=new fn,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(ls.fromBufferAttribute(f,e),o?tr.addScaledVector(ls,u):tr.addScaledVector(ls.sub(t),u))}t.add(tr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(s),e.ray.intersectsSphere(os)===!1)||(ja.copy(s).invert(),qn.copy(e.ray).applyMatrix4(ja),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,S=M;_<S;_+=3){const b=a.getX(_),T=a.getX(_+1),L=a.getX(_+2);o=ar(this,d,e,qn,l,u,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const v=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);o=ar(this,r,e,qn,l,u,v,M,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const p=f[m],d=r[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let _=v,S=M;_<S;_+=3){const b=_,T=_+1,L=_+2;o=ar(this,d,e,qn,l,u,b,T,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let p=m,d=g;p<d;p+=3){const v=p,M=p+1,_=p+2;o=ar(this,r,e,qn,l,u,v,M,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Pc(i,e,t,n,r,s,o,a){let c;if(e.side===Tt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Dn,a),c===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(sr);return l<t.near||l>t.far?null:{distance:l,point:sr.clone(),object:i}}function ar(i,e,t,n,r,s,o,a,c){i.getVertexPosition(o,wi),i.getVertexPosition(a,Mi),i.getVertexPosition(c,Ai);const l=Pc(i,e,t,n,wi,Mi,Ai,cs);if(l){r&&(nr.fromBufferAttribute(r,o),ir.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,c),l.uv=Qt.getUV(cs,wi,Mi,Ai,nr,ir,rr,new ce)),s&&(nr.fromBufferAttribute(s,o),ir.fromBufferAttribute(s,a),rr.fromBufferAttribute(s,c),l.uv2=Qt.getUV(cs,wi,Mi,Ai,nr,ir,rr,new ce));const u={a:o,b:a,c,normal:new C,materialIndex:0};Qt.getNormal(wi,Mi,Ai,u.normal),l.face=u}return l}class Gi extends fn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(f,2));function g(p,d,v,M,_,S,b,T,L,x,P){const D=S/L,U=b/x,le=S/2,z=b/2,R=T/2,X=L+1,Y=x+1;let Q=0,j=0;const ie=new C;for(let $=0;$<Y;$++){const I=$*U-z;for(let V=0;V<X;V++){const ee=V*D-le;ie[p]=ee*M,ie[d]=I*_,ie[v]=R,l.push(ie.x,ie.y,ie.z),ie[p]=0,ie[d]=0,ie[v]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(V/L),f.push(1-$/x),Q+=1}}for(let $=0;$<x;$++)for(let I=0;I<L;I++){const V=h+I+X*$,ee=h+I+X*($+1),re=h+(I+1)+X*($+1),fe=h+(I+1)+X*$;c.push(V,ee,fe),c.push(ee,re,fe),j+=6}a.addGroup(m,j,P),m+=j,h+=Q}}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Tc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ko(i){return i.getRenderTarget()===null&&i.outputEncoding===We?Ot:Ni}const Ec={clone:pi,merge:ft};var Lc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Tc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bo extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends Bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Zn=1;class Dc extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Pt(Kn,Zn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Pt(Kn,Zn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Pt(Kn,Zn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Pt(Kn,Zn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Pt(Kn,Zn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Pt(Kn,Zn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Go extends mt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rc extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Go(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:cn});s.uniforms.tEquirect.value=t;const o=new Vt(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=At),new Dc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const us=new C,Nc=new C,zc=new bt;class bn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=us.subVectors(n,t).cross(Nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zc.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new js,or=new C;class Wo{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],v=n[13],M=n[14],_=n[15];return t[0].setComponents(a-r,f-c,p-h,_-d).normalize(),t[1].setComponents(a+r,f+c,p+h,_+d).normalize(),t[2].setComponents(a+s,f+l,p+m,_+v).normalize(),t[3].setComponents(a-s,f-l,p-m,_-v).normalize(),t[4].setComponents(a-o,f-u,p-g,_-M).normalize(),t[5].setComponents(a+o,f+u,p+g,_+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(or.x=r.normal.x>0?e.max.x:e.min.x,or.y=r.normal.y>0?e.max.y:e.min.y,or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xo(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,h=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,m=u.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):i.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Ar extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,m=[],g=[],p=[],d=[];for(let v=0;v<u;v++){const M=v*h-o;for(let _=0;_<l;_++){const S=_*f-s;g.push(S,-M,0),p.push(0,0,1),d.push(_/a),d.push(1-v/c)}}for(let v=0;v<c;v++)for(let M=0;M<a;M++){const _=M+l*v,S=M+l*(v+1),b=M+1+l*(v+1),T=M+1+l*v;m.push(_,S,T),m.push(S,b,T)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(p,3)),this.setAttribute("uv",new en(d,2))}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bc="vec3 transformed = vec3( position );",Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ru=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ju=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Af=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ef=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Lf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,th=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ih=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Oc,alphamap_pars_fragment:Ic,alphatest_fragment:Hc,alphatest_pars_fragment:Uc,aomap_fragment:Vc,aomap_pars_fragment:kc,begin_vertex:Bc,beginnormal_vertex:Gc,bsdfs:Wc,iridescence_fragment:Xc,bumpmap_pars_fragment:jc,clipping_planes_fragment:qc,clipping_planes_pars_fragment:Kc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Jc,color_fragment:Yc,color_pars_fragment:Qc,color_pars_vertex:$c,color_vertex:eu,common:tu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:ru,displacementmap_vertex:su,emissivemap_fragment:au,emissivemap_pars_fragment:ou,encodings_fragment:lu,encodings_pars_fragment:cu,envmap_fragment:uu,envmap_common_pars_fragment:fu,envmap_pars_fragment:hu,envmap_pars_vertex:du,envmap_physical_pars_fragment:Au,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:vu,fog_pars_fragment:xu,gradientmap_pars_fragment:_u,lightmap_fragment:yu,lightmap_pars_fragment:bu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:wu,lights_pars_begin:Mu,lights_toon_fragment:Pu,lights_toon_pars_fragment:Tu,lights_phong_fragment:Eu,lights_phong_pars_fragment:Lu,lights_physical_fragment:Cu,lights_physical_pars_fragment:Du,lights_fragment_begin:Ru,lights_fragment_maps:Nu,lights_fragment_end:zu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:Iu,logdepthbuf_vertex:Hu,map_fragment:Uu,map_pars_fragment:Vu,map_particle_fragment:ku,map_particle_pars_fragment:Bu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:Wu,morphcolor_vertex:Xu,morphnormal_vertex:ju,morphtarget_pars_vertex:qu,morphtarget_vertex:Ku,normal_fragment_begin:Zu,normal_fragment_maps:Ju,normal_pars_fragment:Yu,normal_pars_vertex:Qu,normal_vertex:$u,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:sf,output_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:uf,dithering_pars_fragment:ff,roughnessmap_fragment:hf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:vf,skinbase_vertex:xf,skinning_pars_vertex:_f,skinning_vertex:yf,skinnormal_vertex:bf,specularmap_fragment:Sf,specularmap_pars_fragment:wf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Af,transmission_fragment:Pf,transmission_pars_fragment:Tf,uv_pars_fragment:Ef,uv_pars_vertex:Lf,uv_vertex:Cf,uv2_pars_fragment:Df,uv2_pars_vertex:Rf,uv2_vertex:Nf,worldpos_vertex:zf,background_vert:Ff,background_frag:Of,backgroundCube_vert:If,backgroundCube_frag:Hf,cube_vert:Uf,cube_frag:Vf,depth_vert:kf,depth_frag:Bf,distanceRGBA_vert:Gf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:jf,linedashed_vert:qf,linedashed_frag:Kf,meshbasic_vert:Zf,meshbasic_frag:Jf,meshlambert_vert:Yf,meshlambert_frag:Qf,meshmatcap_vert:$f,meshmatcap_frag:eh,meshnormal_vert:th,meshnormal_frag:nh,meshphong_vert:ih,meshphong_frag:rh,meshphysical_vert:sh,meshphysical_frag:ah,meshtoon_vert:oh,meshtoon_frag:lh,points_vert:ch,points_frag:uh,shadow_vert:fh,shadow_frag:hh,sprite_vert:dh,sprite_frag:ph},ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new bt},uv2Transform:{value:new bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new bt}}},Ht={basic:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ft([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ft([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ft([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ft([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ft([ue.points,ue.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ft([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ft([ue.common,ue.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ft([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ft([ue.sprite,ue.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ft([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ft([ue.lights,ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ht.physical={uniforms:ft([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const lr={r:0,b:0,g:0};function mh(i,e,t,n,r,s,o){const a=new qe(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function g(d,v){let M=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const S=i.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(_=null),_===null?p(a,c):_&&_.isColor&&(p(_,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sr)?(u===void 0&&(u=new Vt(new Gi(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:pi(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==We,(f!==_||h!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Vt(new Ar(2,2),new Fn({name:"BackgroundMaterial",uniforms:pi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=_.encoding!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,v){d.getRGB(lr,ko(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(d,v=1){a.set(d),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:g}}function gh(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function f(R,X,Y,Q,j){let ie=!1;if(o){const $=p(Q,Y,X);l!==$&&(l=$,m(l.object)),ie=v(R,Q,Y,j),ie&&M(R,Q,Y,j)}else{const $=X.wireframe===!0;(l.geometry!==Q.id||l.program!==Y.id||l.wireframe!==$)&&(l.geometry=Q.id,l.program=Y.id,l.wireframe=$,ie=!0)}j!==null&&t.update(j,34963),(ie||u)&&(u=!1,x(R,X,Y,Q),j!==null&&i.bindBuffer(34963,t.get(j).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,X,Y){const Q=Y.wireframe===!0;let j=a[R.id];j===void 0&&(j={},a[R.id]=j);let ie=j[X.id];ie===void 0&&(ie={},j[X.id]=ie);let $=ie[Q];return $===void 0&&($=d(h()),ie[Q]=$),$}function d(R){const X=[],Y=[],Q=[];for(let j=0;j<r;j++)X[j]=0,Y[j]=0,Q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:Q,object:R,attributes:{},index:null}}function v(R,X,Y,Q){const j=l.attributes,ie=X.attributes;let $=0;const I=Y.getAttributes();for(const V in I)if(I[V].location>=0){const re=j[V];let fe=ie[V];if(fe===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;$++}return l.attributesNum!==$||l.index!==Q}function M(R,X,Y,Q){const j={},ie=X.attributes;let $=0;const I=Y.getAttributes();for(const V in I)if(I[V].location>=0){let re=ie[V];re===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),j[V]=fe,$++}l.attributes=j,l.attributesNum=$,l.index=Q}function _(){const R=l.newAttributes;for(let X=0,Y=R.length;X<Y;X++)R[X]=0}function S(R){b(R,0)}function b(R,X){const Y=l.newAttributes,Q=l.enabledAttributes,j=l.attributeDivisors;Y[R]=1,Q[R]===0&&(i.enableVertexAttribArray(R),Q[R]=1),j[R]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,X),j[R]=X)}function T(){const R=l.newAttributes,X=l.enabledAttributes;for(let Y=0,Q=X.length;Y<Q;Y++)X[Y]!==R[Y]&&(i.disableVertexAttribArray(Y),X[Y]=0)}function L(R,X,Y,Q,j,ie){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(R,X,Y,j,ie):i.vertexAttribPointer(R,X,Y,Q,j,ie)}function x(R,X,Y,Q){if(n.isWebGL2===!1&&(R.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const j=Q.attributes,ie=Y.getAttributes(),$=X.defaultAttributeValues;for(const I in ie){const V=ie[I];if(V.location>=0){let ee=j[I];if(ee===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const re=ee.normalized,fe=ee.itemSize,G=t.get(ee);if(G===void 0)continue;const O=G.buffer,J=G.type,me=G.bytesPerElement;if(ee.isInterleavedBufferAttribute){const se=ee.data,Pe=se.stride,W=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)b(V.location+Z,se.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<V.locationSize;Z++)S(V.location+Z);i.bindBuffer(34962,O);for(let Z=0;Z<V.locationSize;Z++)L(V.location+Z,fe/V.locationSize,J,re,Pe*me,(W+fe/V.locationSize*Z)*me)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)b(V.location+se,ee.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<V.locationSize;se++)S(V.location+se);i.bindBuffer(34962,O);for(let se=0;se<V.locationSize;se++)L(V.location+se,fe/V.locationSize,J,re,fe*me,fe/V.locationSize*se*me)}}else if($!==void 0){const re=$[I];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(V.location,re);break;case 3:i.vertexAttrib3fv(V.location,re);break;case 4:i.vertexAttrib4fv(V.location,re);break;default:i.vertexAttrib1fv(V.location,re)}}}}T()}function P(){le();for(const R in a){const X=a[R];for(const Y in X){const Q=X[Y];for(const j in Q)g(Q[j].object),delete Q[j];delete X[Y]}delete a[R]}}function D(R){if(a[R.id]===void 0)return;const X=a[R.id];for(const Y in X){const Q=X[Y];for(const j in Q)g(Q[j].object),delete Q[j];delete X[Y]}delete a[R.id]}function U(R){for(const X in a){const Y=a[X];if(Y[R.id]===void 0)continue;const Q=Y[R.id];for(const j in Q)g(Q[j].object),delete Q[j];delete Y[R.id]}}function le(){z(),u=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:le,resetDefaultState:z,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function vh(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(r)h=i,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function xh(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),p=i.getParameter(34921),d=i.getParameter(36347),v=i.getParameter(36348),M=i.getParameter(36349),_=h>0,S=o||e.has("OES_texture_float"),b=_&&S,T=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:T}}function _h(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new bn,a=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,v=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):l();else{const M=s?0:n,_=M*4;let S=v.clippingState||null;c.value=S,S=u(g,h,_,m);for(let b=0;b!==_;++b)S[b]=t[b];v.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const v=m+p*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<v)&&(d=new Float32Array(v));for(let _=0,S=m;_!==p;++_,S+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(d,S),d[S+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function yh(i){let e=new WeakMap;function t(o,a){return a===Es?o.mapping=fi:a===Ls&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Es||a===Ls)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bh extends Bo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,qa=[.125,.215,.35,.446,.526,.582],Mn=20,fs=new bh,Ka=new qe;let hs=null;const Sn=(1+Math.sqrt(5))/2,Yn=1/Sn,Za=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Sn,Yn),new C(0,Sn,-Yn),new C(Yn,0,Sn),new C(-Yn,0,Sn),new C(Sn,Yn,0),new C(-Sn,Yn,0)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){hs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hs),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Ri,format:zt,encoding:Nn,depthBuffer:!1},r=Ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sh(s)),this._blurMaterial=wh(s,e,t)}return r}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,n,r){const a=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ka),u.toneMapping=$t,u.autoClear=!1;const m=new Mr({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new Vt(new Gi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Ka),p=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):M===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const _=this._cubeSize;cr(r,M*_,v>2?_:0,_,_),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fi||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Za[(r-1)%Za.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vt(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Mn;d>Mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Mn}`);const v=[];let M=0;for(let L=0;L<Mn;++L){const x=L/p,P=Math.exp(-x*x/2);v.push(P),L===0?M+=P:L<d&&(M+=2*P)}for(let L=0;L<v.length;L++)v[L]=v[L]/M;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const S=this._sizeLods[r],b=3*S*(r>_-ni?r-_+ni:0),T=4*(this._cubeSize-S);cr(t,b,T,3*S,2*S),c.setRenderTarget(t),c.render(f,fs)}}function Sh(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+qa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ni?c=qa[o-i+ni-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,v=1,M=new Float32Array(p*g*m),_=new Float32Array(d*g*m),S=new Float32Array(v*g*m);for(let T=0;T<m;T++){const L=T%3*2/3-1,x=T>2?0:-1,P=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(P,p*g*T),_.set(h,d*g*T);const D=[T,T,T,T,T,T];S.set(D,v*g*T)}const b=new fn;b.setAttribute("position",new kt(M,p)),b.setAttribute("uv",new kt(_,d)),b.setAttribute("faceIndex",new kt(S,v)),e.push(b),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ya(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wh(i,e,t){const n=new Float32Array(Mn),r=new C(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Qa(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function $a(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Es||c===Ls,u=c===fi||c===hi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ja(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ja(i));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ah(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ph(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,v=p.length;d<v;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let _=0,S=M.length;_<S;_+=3){const b=M[_+0],T=M[_+1],L=M[_+2];h.push(b,T,T,L,L,b)}}else{const M=g.array;p=g.version;for(let _=0,S=M.length/3-1;_<S;_+=3){const b=_+0,T=_+1,L=_+2;h.push(b,T,T,L,L,b)}}const d=new(No(h)?Vo:Uo)(h,1);d.version=p;const v=s.get(f);v&&e.remove(v),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Th(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){i.drawElements(s,m,a,h*c),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function Eh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Lh(i,e){return i[0]-e[0]}function Ch(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Dh(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let v=s.get(u);if(v===void 0||v.count!==d){let Y=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var g=Y;v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let D=0;S===!0&&(D=1),b===!0&&(D=2),T===!0&&(D=3);let U=u.attributes.position.count*D,le=1;U>e.maxTextureSize&&(le=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const z=new Float32Array(U*le*4*d),R=new Io(z,U,le,d);R.type=Pn,R.needsUpdate=!0;const X=D*4;for(let Q=0;Q<d;Q++){const j=L[Q],ie=x[Q],$=P[Q],I=U*le*4*Q;for(let V=0;V<j.count;V++){const ee=V*X;S===!0&&(o.fromBufferAttribute(j,V),z[I+ee+0]=o.x,z[I+ee+1]=o.y,z[I+ee+2]=o.z,z[I+ee+3]=0),b===!0&&(o.fromBufferAttribute(ie,V),z[I+ee+4]=o.x,z[I+ee+5]=o.y,z[I+ee+6]=o.z,z[I+ee+7]=0),T===!0&&(o.fromBufferAttribute($,V),z[I+ee+8]=o.x,z[I+ee+9]=o.y,z[I+ee+10]=o.z,z[I+ee+11]=$.itemSize===4?o.w:1)}}v={count:d,texture:R,size:new ce(U,le)},s.set(u,v),u.addEventListener("dispose",Y)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const _=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",m),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<p;b++){const T=d[b];T[0]=b,T[1]=m[b]}d.sort(Ch);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Lh);const v=u.morphAttributes.position,M=u.morphAttributes.normal;let _=0;for(let b=0;b<8;b++){const T=a[b],L=T[0],x=T[1];L!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+b)!==v[L]&&u.setAttribute("morphTarget"+b,v[L]),M&&u.getAttribute("morphNormal"+b)!==M[L]&&u.setAttribute("morphNormal"+b,M[L]),r[b]=x,_+=x):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),M&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Rh(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const jo=new mt,qo=new Io,Ko=new gc,Zo=new Go,eo=[],to=[],no=new Float32Array(16),io=new Float32Array(9),ro=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=eo[r];if(s===void 0&&(s=new Float32Array(r),eo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function $e(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pr(i,e){let t=to[e];t===void 0&&(t=new Int32Array(e),to[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2fv(this.addr,e),et(t,e)}}function Fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;i.uniform3fv(this.addr,e),et(t,e)}}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4fv(this.addr,e),et(t,e)}}function Ih(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;ro.set(n),i.uniformMatrix2fv(this.addr,!1,ro),et(t,n)}}function Hh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;io.set(n),i.uniformMatrix3fv(this.addr,!1,io),et(t,n)}}function Uh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;no.set(n),i.uniformMatrix4fv(this.addr,!1,no),et(t,n)}}function Vh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2iv(this.addr,e),et(t,e)}}function Bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;i.uniform3iv(this.addr,e),et(t,e)}}function Gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4iv(this.addr,e),et(t,e)}}function Wh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2uiv(this.addr,e),et(t,e)}}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;i.uniform3uiv(this.addr,e),et(t,e)}}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4uiv(this.addr,e),et(t,e)}}function Kh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||jo,r)}function Zh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ko,r)}function Jh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zo,r)}function Yh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qo,r)}function Qh(i){switch(i){case 5126:return Nh;case 35664:return zh;case 35665:return Fh;case 35666:return Oh;case 35674:return Ih;case 35675:return Hh;case 35676:return Uh;case 5124:case 35670:return Vh;case 35667:case 35671:return kh;case 35668:case 35672:return Bh;case 35669:case 35673:return Gh;case 5125:return Wh;case 36294:return Xh;case 36295:return jh;case 36296:return qh;case 35678:case 36198:case 36298:case 36306:case 35682:return Kh;case 35679:case 36299:case 36307:return Zh;case 35680:case 36300:case 36308:case 36293:return Jh;case 36289:case 36303:case 36311:case 36292:return Yh}}function $h(i,e){i.uniform1fv(this.addr,e)}function ed(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function td(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function nd(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function id(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rd(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sd(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ad(i,e){i.uniform1iv(this.addr,e)}function od(i,e){i.uniform2iv(this.addr,e)}function ld(i,e){i.uniform3iv(this.addr,e)}function cd(i,e){i.uniform4iv(this.addr,e)}function ud(i,e){i.uniform1uiv(this.addr,e)}function fd(i,e){i.uniform2uiv(this.addr,e)}function hd(i,e){i.uniform3uiv(this.addr,e)}function dd(i,e){i.uniform4uiv(this.addr,e)}function pd(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);$e(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jo,s[o])}function md(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);$e(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ko,s[o])}function gd(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);$e(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zo,s[o])}function vd(i,e,t){const n=this.cache,r=e.length,s=Pr(t,r);$e(n,s)||(i.uniform1iv(this.addr,s),et(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qo,s[o])}function xd(i){switch(i){case 5126:return $h;case 35664:return ed;case 35665:return td;case 35666:return nd;case 35674:return id;case 35675:return rd;case 35676:return sd;case 5124:case 35670:return ad;case 35667:case 35671:return od;case 35668:case 35672:return ld;case 35669:case 35673:return cd;case 5125:return ud;case 36294:return fd;case 36295:return hd;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return gd;case 36289:case 36303:case 36311:case 36292:return vd}}class _d{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qh(t.type)}}class yd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xd(t.type)}}class bd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ds=/(\w+)(\])?(\[|\.)?/g;function so(i,e){i.seq.push(e),i.map[e.id]=e}function Sd(i,e,t){const n=i.name,r=n.length;for(ds.lastIndex=0;;){const s=ds.exec(n),o=ds.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){so(t,l===void 0?new _d(a,i,e):new yd(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new bd(a),so(t,f)),t=f}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Sd(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ao(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let wd=0;function Md(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ad(i){switch(i){case Nn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function oo(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Md(i.getShaderSource(e),o)}else return r}function Pd(i,e){const t=Ad(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Td(i,e){let t;switch(e){case Bl:t="Linear";break;case Gl:t="Reinhard";break;case Wl:t="OptimizedCineon";break;case Xl:t="ACESFilmic";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ed(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function Ld(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cd(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ei(i){return i!==""}function lo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function co(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(Dd,Rd)}function Rd(i,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zs(t)}const Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uo(i){return i.replace(Nd,zd)}function zd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fo(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Od(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case hi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Id(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case kl:e="ENVMAP_BLENDING_ADD";break}return e}function Ud(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vd(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Fd(t),l=Od(t),u=Id(t),f=Hd(t),h=Ud(t),m=t.isWebGL2?"":Ed(t),g=Ld(s),p=r.createProgram();let d,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ei).join(`
`),d.length>0&&(d+=`
`),v=[m,g].filter(Ei).join(`
`),v.length>0&&(v+=`
`)):(d=[fo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),v=[m,fo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Re.tonemapping_pars_fragment:"",t.toneMapping!==$t?Td("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,Pd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),o=zs(o),o=lo(o,t),o=co(o,t),a=zs(a),a=lo(a,t),a=co(a,t),o=uo(o),a=uo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["#define varying in",t.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=M+d+o,S=M+v+a,b=ao(r,35633,_),T=ao(r,35632,S);if(r.attachShader(p,b),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const P=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(b).trim(),U=r.getShaderInfoLog(T).trim();let le=!0,z=!0;if(r.getProgramParameter(p,35714)===!1){le=!1;const R=oo(r,b,"vertex"),X=oo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+P+`
`+R+`
`+X)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||U==="")&&(z=!1);z&&(this.diagnostics={runnable:le,programLog:P,vertexShader:{log:D,prefix:d},fragmentShader:{log:U,prefix:v}})}r.deleteShader(b),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new vr(r,p)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=Cd(r,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=wd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=T,this}let kd=0;class Bd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gd(e),t.set(e,n)),n}}class Gd{constructor(e){this.id=kd++,this.code=e,this.usedTimes=0}}function Wd(i,e,t,n,r,s,o){const a=new qs,c=new Bd,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,P,D,U,le){const z=U.fog,R=le.geometry,X=x.isMeshStandardMaterial?U.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),Q=Y&&Y.mapping===Sr?Y.image.height:null,j=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const ie=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=ie!==void 0?ie.length:0;let I=0;R.morphAttributes.position!==void 0&&(I=1),R.morphAttributes.normal!==void 0&&(I=2),R.morphAttributes.color!==void 0&&(I=3);let V,ee,re,fe;if(j){const Pe=Ht[j];V=Pe.vertexShader,ee=Pe.fragmentShader}else V=x.vertexShader,ee=x.fragmentShader,c.update(x),re=c.getVertexShaderID(x),fe=c.getFragmentShaderID(x);const G=i.getRenderTarget(),O=x.alphaTest>0,J=x.clearcoat>0,me=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:V,fragmentShader:ee,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:le.isInstancedMesh===!0,instancingColor:le.isInstancedMesh===!0&&le.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?i.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Nn,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===hc,tangentSpaceNormalMap:x.normalMapType===fc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===We,clearcoat:J,clearcoatMap:J&&!!x.clearcoatMap,clearcoatRoughnessMap:J&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!x.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!x.iridescenceMap,iridescenceThicknessMap:me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===oi,alphaMap:!!x.alphaMap,alphaTest:O,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:I,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:$t,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===br,flipSided:x.side===Tt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)P.push(D),P.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(v(P,x),M(P,x),P.push(i.outputEncoding)),P.push(x.customProgramCacheKey),P.join()}function v(x,P){x.push(P.precision),x.push(P.outputEncoding),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.combine),x.push(P.vertexUvs),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numSpotLightMaps),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.numSpotLightShadowsWithMaps),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function M(x,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.map&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.lightMap&&a.enable(7),P.aoMap&&a.enable(8),P.emissiveMap&&a.enable(9),P.bumpMap&&a.enable(10),P.normalMap&&a.enable(11),P.objectSpaceNormalMap&&a.enable(12),P.tangentSpaceNormalMap&&a.enable(13),P.clearcoat&&a.enable(14),P.clearcoatMap&&a.enable(15),P.clearcoatRoughnessMap&&a.enable(16),P.clearcoatNormalMap&&a.enable(17),P.iridescence&&a.enable(18),P.iridescenceMap&&a.enable(19),P.iridescenceThicknessMap&&a.enable(20),P.displacementMap&&a.enable(21),P.specularMap&&a.enable(22),P.roughnessMap&&a.enable(23),P.metalnessMap&&a.enable(24),P.gradientMap&&a.enable(25),P.alphaMap&&a.enable(26),P.alphaTest&&a.enable(27),P.vertexColors&&a.enable(28),P.vertexAlphas&&a.enable(29),P.vertexUvs&&a.enable(30),P.vertexTangents&&a.enable(31),P.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.physicallyCorrectLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.specularIntensityMap&&a.enable(15),P.specularColorMap&&a.enable(16),P.transmission&&a.enable(17),P.transmissionMap&&a.enable(18),P.thicknessMap&&a.enable(19),P.sheen&&a.enable(20),P.sheenColorMap&&a.enable(21),P.sheenRoughnessMap&&a.enable(22),P.decodeVideoTexture&&a.enable(23),P.opaque&&a.enable(24),x.push(a.mask)}function _(x){const P=g[x.type];let D;if(P){const U=Ht[P];D=Ec.clone(U.uniforms)}else D=x.uniforms;return D}function S(x,P){let D;for(let U=0,le=l.length;U<le;U++){const z=l[U];if(z.cacheKey===P){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Vd(i,P,x,s),l.push(D)),D}function b(x){if(--x.usedTimes===0){const P=l.indexOf(x);l[P]=l[l.length-1],l.pop(),x.destroy()}}function T(x){c.remove(x)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:L}}function Xd(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function jd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function po(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,m,g,p,d){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=p,v.group=d),e++,v}function a(f,h,m,g,p,d){const v=o(f,h,m,g,p,d);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function c(f,h,m,g,p,d){const v=o(f,h,m,g,p,d);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function l(f,h){t.length>1&&t.sort(f||jd),n.length>1&&n.sort(h||ho),r.length>1&&r.sort(h||ho)}function u(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function qd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new po,i.set(n,[o])):r>=s.length?(o=new po,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new qe};break;case"SpotLight":t={position:new C,direction:new C,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Zd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jd=0;function Yd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qd(i,e){const t=new Kd,n=Zd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,o=new st,a=new st;function c(u,f){let h=0,m=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let p=0,d=0,v=0,M=0,_=0,S=0,b=0,T=0,L=0,x=0;u.sort(Yd);const P=f!==!0?Math.PI:1;for(let U=0,le=u.length;U<le;U++){const z=u[U],R=z.color,X=z.intensity,Y=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=R.r*X*P,m+=R.g*X*P,g+=R.b*X*P;else if(z.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(z.sh.coefficients[j],X);else if(z.isDirectionalLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*P),z.castShadow){const ie=z.shadow,$=n.get(z);$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,r.directionalShadow[p]=$,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=z.shadow.matrix,S++}r.directional[p]=j,p++}else if(z.isSpotLight){const j=t.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(R).multiplyScalar(X*P),j.distance=Y,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,r.spot[v]=j;const ie=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,ie.updateMatrices(z),z.castShadow&&x++),r.spotLightMatrix[v]=ie.matrix,z.castShadow){const $=n.get(z);$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,r.spotShadow[v]=$,r.spotShadowMap[v]=Q,T++}v++}else if(z.isRectAreaLight){const j=t.get(z);j.color.copy(R).multiplyScalar(X),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=j,M++}else if(z.isPointLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*P),j.distance=z.distance,j.decay=z.decay,z.castShadow){const ie=z.shadow,$=n.get(z);$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,$.shadowCameraNear=ie.camera.near,$.shadowCameraFar=ie.camera.far,r.pointShadow[d]=$,r.pointShadowMap[d]=Q,r.pointShadowMatrix[d]=z.shadow.matrix,b++}r.point[d]=j,d++}else if(z.isHemisphereLight){const j=t.get(z);j.skyColor.copy(z.color).multiplyScalar(X*P),j.groundColor.copy(z.groundColor).multiplyScalar(X*P),r.hemi[_]=j,_++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==v||D.rectAreaLength!==M||D.hemiLength!==_||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==T||D.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=M,r.point.length=d,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+L-x,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=x,D.directionalLength=p,D.pointLength=d,D.spotLength=v,D.rectAreaLength=M,D.hemiLength=_,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=T,D.numSpotMaps=L,r.version=Jd++)}function l(u,f){let h=0,m=0,g=0,p=0,d=0;const v=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const S=u[M];if(S.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),h++}else if(S.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),a.identity(),o.copy(S.matrixWorld),o.premultiply(v),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(v),m++}else if(S.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(v),d++}}}return{setup:c,setupView:l,state:r}}function mo(i,e){const t=new Qd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function $d(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new mo(i,e),t.set(s,[c])):o>=a.length?(c=new mo(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class ep extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rp(i,e,t){let n=new Wo;const r=new ce,s=new ce,o=new at,a=new ep({depthPacking:uc}),c=new tp,l={},u=t.maxTextureSize,f={0:Tt,1:Dn,2:br},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:np,fragmentShader:ip}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Vt(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To,this.render=function(S,b,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const L=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(cn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,le=S.length;U<le;U++){const z=S[U],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const X=R.getFrameExtents();if(r.multiply(X),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,R.mapSize.y=s.y)),R.map===null){const Q=this.type!==Ti?{minFilter:ht,magFilter:ht}:{};R.map=new zn(r.x,r.y,Q),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const Y=R.getViewportCount();for(let Q=0;Q<Y;Q++){const j=R.getViewport(Q);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(o),R.updateMatrices(z,Q),n=R.getFrustum(),_(b,T,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Ti&&v(R,T),R.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(L,x,P)};function v(S,b){const T=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new zn(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(b,null,T,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(b,null,T,m,p,null)}function M(S,b,T,L,x,P){let D=null;const U=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)D=U;else if(D=T.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const le=D.uuid,z=b.uuid;let R=l[le];R===void 0&&(R={},l[le]=R);let X=R[z];X===void 0&&(X=D.clone(),R[z]=X),D=X}return D.visible=b.visible,D.wireframe=b.wireframe,P===Ti?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:f[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=L,D.farDistance=x),D}function _(S,b,T,L,x){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Ti)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const U=e.update(S),le=S.material;if(Array.isArray(le)){const z=U.groups;for(let R=0,X=z.length;R<X;R++){const Y=z[R],Q=le[Y.materialIndex];if(Q&&Q.visible){const j=M(S,Q,L,T.near,T.far,x);i.renderBufferDirect(T,null,U,j,S,Y)}}}else if(le.visible){const z=M(S,le,L,T.near,T.far,x);i.renderBufferDirect(T,null,U,z,S,null)}}const D=S.children;for(let U=0,le=D.length;U<le;U++)_(D[U],b,T,L,x)}}function sp(i,e,t){const n=t.isWebGL2;function r(){let E=!1;const k=new at;let te=null;const ge=new at(0,0,0,0);return{setMask:function(_e){te!==_e&&!E&&(i.colorMask(_e,_e,_e,_e),te=_e)},setLocked:function(_e){E=_e},setClear:function(_e,Ve,nt,ot,hn){hn===!0&&(_e*=ot,Ve*=ot,nt*=ot),k.set(_e,Ve,nt,ot),ge.equals(k)===!1&&(i.clearColor(_e,Ve,nt,ot),ge.copy(k))},reset:function(){E=!1,te=null,ge.set(-1,0,0,0)}}}function s(){let E=!1,k=null,te=null,ge=null;return{setTest:function(_e){_e?O(2929):J(2929)},setMask:function(_e){k!==_e&&!E&&(i.depthMask(_e),k=_e)},setFunc:function(_e){if(te!==_e){switch(_e){case Nl:i.depthFunc(512);break;case zl:i.depthFunc(519);break;case Fl:i.depthFunc(513);break;case Ts:i.depthFunc(515);break;case Ol:i.depthFunc(514);break;case Il:i.depthFunc(518);break;case Hl:i.depthFunc(516);break;case Ul:i.depthFunc(517);break;default:i.depthFunc(515)}te=_e}},setLocked:function(_e){E=_e},setClear:function(_e){ge!==_e&&(i.clearDepth(_e),ge=_e)},reset:function(){E=!1,k=null,te=null,ge=null}}}function o(){let E=!1,k=null,te=null,ge=null,_e=null,Ve=null,nt=null,ot=null,hn=null;return{setTest:function(je){E||(je?O(2960):J(2960))},setMask:function(je){k!==je&&!E&&(i.stencilMask(je),k=je)},setFunc:function(je,Wt,wt){(te!==je||ge!==Wt||_e!==wt)&&(i.stencilFunc(je,Wt,wt),te=je,ge=Wt,_e=wt)},setOp:function(je,Wt,wt){(Ve!==je||nt!==Wt||ot!==wt)&&(i.stencilOp(je,Wt,wt),Ve=je,nt=Wt,ot=wt)},setLocked:function(je){E=je},setClear:function(je){hn!==je&&(i.clearStencil(je),hn=je)},reset:function(){E=!1,k=null,te=null,ge=null,_e=null,Ve=null,nt=null,ot=null,hn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,v=!1,M=null,_=null,S=null,b=null,T=null,L=null,x=null,P=!1,D=null,U=null,le=null,z=null,R=null;const X=i.getParameter(35661);let Y=!1,Q=0;const j=i.getParameter(7938);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=Q>=2);let ie=null,$={};const I=i.getParameter(3088),V=i.getParameter(2978),ee=new at().fromArray(I),re=new at().fromArray(V);function fe(E,k,te){const ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(E,_e),i.texParameteri(E,10241,9728),i.texParameteri(E,10240,9728);for(let Ve=0;Ve<te;Ve++)i.texImage2D(k+Ve,0,6408,1,1,0,6408,5121,ge);return _e}const G={};G[3553]=fe(3553,3553,1),G[34067]=fe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(2929),c.setFunc(Ts),he(!1),Ce(sa),O(2884),ae(cn);function O(E){h[E]!==!0&&(i.enable(E),h[E]=!0)}function J(E){h[E]!==!1&&(i.disable(E),h[E]=!1)}function me(E,k){return m[E]!==k?(i.bindFramebuffer(E,k),m[E]=k,n&&(E===36009&&(m[36160]=k),E===36160&&(m[36009]=k)),!0):!1}function se(E,k){let te=p,ge=!1;if(E)if(te=g.get(k),te===void 0&&(te=[],g.set(k,te)),E.isWebGLMultipleRenderTargets){const _e=E.texture;if(te.length!==_e.length||te[0]!==36064){for(let Ve=0,nt=_e.length;Ve<nt;Ve++)te[Ve]=36064+Ve;te.length=_e.length,ge=!0}}else te[0]!==36064&&(te[0]=36064,ge=!0);else te[0]!==1029&&(te[0]=1029,ge=!0);ge&&(t.isWebGL2?i.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Pe(E){return d!==E?(i.useProgram(E),d=E,!0):!1}const W={[ei]:32774,[Sl]:32778,[wl]:32779};if(n)W[ca]=32775,W[ua]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(W[ca]=E.MIN_EXT,W[ua]=E.MAX_EXT)}const Z={[Ml]:0,[Al]:1,[Pl]:768,[Eo]:770,[Rl]:776,[Cl]:774,[El]:772,[Tl]:769,[Lo]:771,[Dl]:775,[Ll]:773};function ae(E,k,te,ge,_e,Ve,nt,ot){if(E===cn){v===!0&&(J(3042),v=!1);return}if(v===!1&&(O(3042),v=!0),E!==bl){if(E!==M||ot!==P){if((_!==ei||T!==ei)&&(i.blendEquation(32774),_=ei,T=ei),ot)switch(E){case oi:i.blendFuncSeparate(1,771,1,771);break;case aa:i.blendFunc(1,1);break;case oa:i.blendFuncSeparate(0,769,0,1);break;case la:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case oi:i.blendFuncSeparate(770,771,1,771);break;case aa:i.blendFunc(770,1);break;case oa:i.blendFuncSeparate(0,769,0,1);break;case la:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}S=null,b=null,L=null,x=null,M=E,P=ot}return}_e=_e||k,Ve=Ve||te,nt=nt||ge,(k!==_||_e!==T)&&(i.blendEquationSeparate(W[k],W[_e]),_=k,T=_e),(te!==S||ge!==b||Ve!==L||nt!==x)&&(i.blendFuncSeparate(Z[te],Z[ge],Z[Ve],Z[nt]),S=te,b=ge,L=Ve,x=nt),M=E,P=!1}function ve(E,k){E.side===br?J(2884):O(2884);let te=E.side===Tt;k&&(te=!te),he(te),E.blending===oi&&E.transparent===!1?ae(cn):ae(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const ge=E.stencilWrite;l.setTest(ge),ge&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),we(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?O(32926):J(32926)}function he(E){D!==E&&(E?i.frontFace(2304):i.frontFace(2305),D=E)}function Ce(E){E!==xl?(O(2884),E!==U&&(E===sa?i.cullFace(1029):E===_l?i.cullFace(1028):i.cullFace(1032))):J(2884),U=E}function Me(E){E!==le&&(Y&&i.lineWidth(E),le=E)}function we(E,k,te){E?(O(32823),(z!==k||R!==te)&&(i.polygonOffset(k,te),z=k,R=te)):J(32823)}function Ge(E){E?O(3089):J(3089)}function Be(E){E===void 0&&(E=33984+X-1),ie!==E&&(i.activeTexture(E),ie=E)}function A(E,k,te){te===void 0&&(ie===null?te=33984+X-1:te=ie);let ge=$[te];ge===void 0&&(ge={type:void 0,texture:void 0},$[te]=ge),(ge.type!==E||ge.texture!==k)&&(ie!==te&&(i.activeTexture(te),ie=te),i.bindTexture(E,k||G[E]),ge.type=E,ge.texture=k)}function y(){const E=$[ie];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(E){ee.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),ee.copy(E))}function be(E){re.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),re.copy(E))}function He(E,k){let te=f.get(k);te===void 0&&(te=new WeakMap,f.set(k,te));let ge=te.get(E);ge===void 0&&(ge=i.getUniformBlockIndex(k,E.name),te.set(E,ge))}function Xe(E,k){const ge=f.get(k).get(E);u.get(k)!==ge&&(i.uniformBlockBinding(k,ge,E.__bindingPointIndex),u.set(k,ge))}function tt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,$={},m={},g=new WeakMap,p=[],d=null,v=!1,M=null,_=null,S=null,b=null,T=null,L=null,x=null,P=!1,D=null,U=null,le=null,z=null,R=null,ee.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:O,disable:J,bindFramebuffer:me,drawBuffers:se,useProgram:Pe,setBlending:ae,setMaterial:ve,setFlipSided:he,setCullFace:Ce,setLineWidth:Me,setPolygonOffset:we,setScissorTest:Ge,activeTexture:Be,bindTexture:A,unbindTexture:y,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:Te,texImage3D:xe,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:K,texStorage3D:ye,texSubImage2D:oe,texSubImage3D:de,compressedTexSubImage2D:Le,compressedTexSubImage3D:pe,scissor:Ae,viewport:be,reset:tt}}function ap(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,y){return v?new OffscreenCanvas(A,y):zi("canvas")}function _(A,y,H,ne){let oe=1;if((A.width>ne||A.height>ne)&&(oe=ne/Math.max(A.width,A.height)),oe<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const de=y?Ns:Math.floor,Le=de(oe*A.width),pe=de(oe*A.height);p===void 0&&(p=M(Le,pe));const K=H?M(Le,pe):p;return K.width=Le,K.height=pe,K.getContext("2d").drawImage(A,0,0,Le,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Le+"x"+pe+")."),K}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Oa(A.width)&&Oa(A.height)}function b(A){return a?!1:A.wrapS!==Nt||A.wrapT!==Nt||A.minFilter!==ht&&A.minFilter!==At}function T(A,y){return A.generateMipmaps&&y&&A.minFilter!==ht&&A.minFilter!==At}function L(A){i.generateMipmap(A)}function x(A,y,H,ne,oe=!1){if(a===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de=y;return y===6403&&(H===5126&&(de=33326),H===5131&&(de=33325),H===5121&&(de=33321)),y===33319&&(H===5126&&(de=33328),H===5131&&(de=33327),H===5121&&(de=33323)),y===6408&&(H===5126&&(de=34836),H===5131&&(de=34842),H===5121&&(de=ne===We&&oe===!1?35907:32856),H===32819&&(de=32854),H===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function P(A,y,H){return T(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==ht&&A.minFilter!==At?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function D(A){return A===ht||A===fa||A===Ir?9728:9729}function U(A){const y=A.target;y.removeEventListener("dispose",U),z(y),y.isVideoTexture&&g.delete(y)}function le(A){const y=A.target;y.removeEventListener("dispose",le),X(y)}function z(A){const y=n.get(A);if(y.__webglInit===void 0)return;const H=A.source,ne=d.get(H);if(ne){const oe=ne[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(A),Object.keys(ne).length===0&&d.delete(H)}n.remove(A)}function R(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const H=A.source,ne=d.get(H);delete ne[y.__cacheKey],o.memory.textures--}function X(A){const y=A.texture,H=n.get(A),ne=n.get(y);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(H.__webglFramebuffer[oe]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[oe]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let oe=0,de=y.length;oe<de;oe++){const Le=n.get(y[oe]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(y[oe])}n.remove(y),n.remove(A)}let Y=0;function Q(){Y=0}function j(){const A=Y;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),Y+=1,A}function ie(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.encoding),y.join()}function $(A,y){const H=n.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(H,A,y);return}}t.bindTexture(3553,H.__webglTexture,33984+y)}function I(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,y);return}t.bindTexture(35866,H.__webglTexture,33984+y)}function V(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){J(H,A,y);return}t.bindTexture(32879,H.__webglTexture,33984+y)}function ee(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){me(H,A,y);return}t.bindTexture(34067,H.__webglTexture,33984+y)}const re={[Cs]:10497,[Nt]:33071,[Ds]:33648},fe={[ht]:9728,[fa]:9984,[Ir]:9986,[At]:9729,[ql]:9985,[Di]:9987};function G(A,y,H){if(H?(i.texParameteri(A,10242,re[y.wrapS]),i.texParameteri(A,10243,re[y.wrapT]),(A===32879||A===35866)&&i.texParameteri(A,32882,re[y.wrapR]),i.texParameteri(A,10240,fe[y.magFilter]),i.texParameteri(A,10241,fe[y.minFilter])):(i.texParameteri(A,10242,33071),i.texParameteri(A,10243,33071),(A===32879||A===35866)&&i.texParameteri(A,32882,33071),(y.wrapS!==Nt||y.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,10240,D(y.magFilter)),i.texParameteri(A,10241,D(y.minFilter)),y.minFilter!==ht&&y.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===ht||y.minFilter!==Ir&&y.minFilter!==Di||y.type===Pn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ri&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function O(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",U));const ne=y.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const de=ie(y);if(de!==A.__cacheKey){oe[de]===void 0&&(oe[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[de].usedTimes++;const Le=oe[A.__cacheKey];Le!==void 0&&(oe[A.__cacheKey].usedTimes--,Le.usedTimes===0&&R(y)),A.__cacheKey=de,A.__webglTexture=oe[de].texture}return H}function J(A,y,H){let ne=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=35866),y.isData3DTexture&&(ne=32879);const oe=O(A,y),de=y.source;t.bindTexture(ne,A.__webglTexture,33984+H);const Le=n.get(de);if(de.version!==Le.__version||oe===!0){t.activeTexture(33984+H),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const pe=b(y)&&S(y.image)===!1;let K=_(y.image,pe,!1,u);K=Be(y,K);const ye=S(K)||a,Te=s.convert(y.format,y.encoding);let xe=s.convert(y.type),Ae=x(y.internalFormat,Te,xe,y.encoding,y.isVideoTexture);G(ne,y,ye);let be;const He=y.mipmaps,Xe=a&&y.isVideoTexture!==!0,tt=Le.__version===void 0||oe===!0,E=P(y,K,ye);if(y.isDepthTexture)Ae=6402,a?y.type===Pn?Ae=36012:y.type===An?Ae=33190:y.type===li?Ae=35056:Ae=33189:y.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===En&&Ae===6402&&y.type!==Ro&&y.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=An,xe=s.convert(y.type)),y.format===di&&Ae===6402&&(Ae=34041,y.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=li,xe=s.convert(y.type))),tt&&(Xe?t.texStorage2D(3553,1,Ae,K.width,K.height):t.texImage2D(3553,0,Ae,K.width,K.height,0,Te,xe,null));else if(y.isDataTexture)if(He.length>0&&ye){Xe&&tt&&t.texStorage2D(3553,E,Ae,He[0].width,He[0].height);for(let k=0,te=He.length;k<te;k++)be=He[k],Xe?t.texSubImage2D(3553,k,0,0,be.width,be.height,Te,xe,be.data):t.texImage2D(3553,k,Ae,be.width,be.height,0,Te,xe,be.data);y.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(3553,E,Ae,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,Te,xe,K.data)):t.texImage2D(3553,0,Ae,K.width,K.height,0,Te,xe,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&tt&&t.texStorage3D(35866,E,Ae,He[0].width,He[0].height,K.depth);for(let k=0,te=He.length;k<te;k++)be=He[k],y.format!==zt?Te!==null?Xe?t.compressedTexSubImage3D(35866,k,0,0,0,be.width,be.height,K.depth,Te,be.data,0,0):t.compressedTexImage3D(35866,k,Ae,be.width,be.height,K.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,k,0,0,0,be.width,be.height,K.depth,Te,xe,be.data):t.texImage3D(35866,k,Ae,be.width,be.height,K.depth,0,Te,xe,be.data)}else{Xe&&tt&&t.texStorage2D(3553,E,Ae,He[0].width,He[0].height);for(let k=0,te=He.length;k<te;k++)be=He[k],y.format!==zt?Te!==null?Xe?t.compressedTexSubImage2D(3553,k,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(3553,k,Ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,k,0,0,be.width,be.height,Te,xe,be.data):t.texImage2D(3553,k,Ae,be.width,be.height,0,Te,xe,be.data)}else if(y.isDataArrayTexture)Xe?(tt&&t.texStorage3D(35866,E,Ae,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Te,xe,K.data)):t.texImage3D(35866,0,Ae,K.width,K.height,K.depth,0,Te,xe,K.data);else if(y.isData3DTexture)Xe?(tt&&t.texStorage3D(32879,E,Ae,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Te,xe,K.data)):t.texImage3D(32879,0,Ae,K.width,K.height,K.depth,0,Te,xe,K.data);else if(y.isFramebufferTexture){if(tt)if(Xe)t.texStorage2D(3553,E,Ae,K.width,K.height);else{let k=K.width,te=K.height;for(let ge=0;ge<E;ge++)t.texImage2D(3553,ge,Ae,k,te,0,Te,xe,null),k>>=1,te>>=1}}else if(He.length>0&&ye){Xe&&tt&&t.texStorage2D(3553,E,Ae,He[0].width,He[0].height);for(let k=0,te=He.length;k<te;k++)be=He[k],Xe?t.texSubImage2D(3553,k,0,0,Te,xe,be):t.texImage2D(3553,k,Ae,Te,xe,be);y.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(3553,E,Ae,K.width,K.height),t.texSubImage2D(3553,0,0,0,Te,xe,K)):t.texImage2D(3553,0,Ae,Te,xe,K);T(y,ye)&&L(ne),Le.__version=de.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function me(A,y,H){if(y.image.length!==6)return;const ne=O(A,y),oe=y.source;t.bindTexture(34067,A.__webglTexture,33984+H);const de=n.get(oe);if(oe.version!==de.__version||ne===!0){t.activeTexture(33984+H),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,K=[];for(let k=0;k<6;k++)!Le&&!pe?K[k]=_(y.image[k],!1,!0,l):K[k]=pe?y.image[k].image:y.image[k],K[k]=Be(y,K[k]);const ye=K[0],Te=S(ye)||a,xe=s.convert(y.format,y.encoding),Ae=s.convert(y.type),be=x(y.internalFormat,xe,Ae,y.encoding),He=a&&y.isVideoTexture!==!0,Xe=de.__version===void 0||ne===!0;let tt=P(y,ye,Te);G(34067,y,Te);let E;if(Le){He&&Xe&&t.texStorage2D(34067,tt,be,ye.width,ye.height);for(let k=0;k<6;k++){E=K[k].mipmaps;for(let te=0;te<E.length;te++){const ge=E[te];y.format!==zt?xe!==null?He?t.compressedTexSubImage2D(34069+k,te,0,0,ge.width,ge.height,xe,ge.data):t.compressedTexImage2D(34069+k,te,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+k,te,0,0,ge.width,ge.height,xe,Ae,ge.data):t.texImage2D(34069+k,te,be,ge.width,ge.height,0,xe,Ae,ge.data)}}}else{E=y.mipmaps,He&&Xe&&(E.length>0&&tt++,t.texStorage2D(34067,tt,be,K[0].width,K[0].height));for(let k=0;k<6;k++)if(pe){He?t.texSubImage2D(34069+k,0,0,0,K[k].width,K[k].height,xe,Ae,K[k].data):t.texImage2D(34069+k,0,be,K[k].width,K[k].height,0,xe,Ae,K[k].data);for(let te=0;te<E.length;te++){const _e=E[te].image[k].image;He?t.texSubImage2D(34069+k,te+1,0,0,_e.width,_e.height,xe,Ae,_e.data):t.texImage2D(34069+k,te+1,be,_e.width,_e.height,0,xe,Ae,_e.data)}}else{He?t.texSubImage2D(34069+k,0,0,0,xe,Ae,K[k]):t.texImage2D(34069+k,0,be,xe,Ae,K[k]);for(let te=0;te<E.length;te++){const ge=E[te];He?t.texSubImage2D(34069+k,te+1,0,0,xe,Ae,ge.image[k]):t.texImage2D(34069+k,te+1,be,xe,Ae,ge.image[k])}}}T(y,Te)&&L(34067),de.__version=oe.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function se(A,y,H,ne,oe){const de=s.convert(H.format,H.encoding),Le=s.convert(H.type),pe=x(H.internalFormat,de,Le,H.encoding);n.get(y).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,pe,y.width,y.height,y.depth,0,de,Le,null):t.texImage2D(oe,0,pe,y.width,y.height,0,de,Le,null)),t.bindFramebuffer(36160,A),we(y)?h.framebufferTexture2DMultisampleEXT(36160,ne,oe,n.get(H).__webglTexture,0,Me(y)):(oe===3553||oe>=34069&&oe<=34074)&&i.framebufferTexture2D(36160,ne,oe,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(A,y,H){if(i.bindRenderbuffer(36161,A),y.depthBuffer&&!y.stencilBuffer){let ne=33189;if(H||we(y)){const oe=y.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Pn?ne=36012:oe.type===An&&(ne=33190));const de=Me(y);we(y)?h.renderbufferStorageMultisampleEXT(36161,de,ne,y.width,y.height):i.renderbufferStorageMultisample(36161,de,ne,y.width,y.height)}else i.renderbufferStorage(36161,ne,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,A)}else if(y.depthBuffer&&y.stencilBuffer){const ne=Me(y);H&&we(y)===!1?i.renderbufferStorageMultisample(36161,ne,35056,y.width,y.height):we(y)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let oe=0;oe<ne.length;oe++){const de=ne[oe],Le=s.convert(de.format,de.encoding),pe=s.convert(de.type),K=x(de.internalFormat,Le,pe,de.encoding),ye=Me(y);H&&we(y)===!1?i.renderbufferStorageMultisample(36161,ye,K,y.width,y.height):we(y)?h.renderbufferStorageMultisampleEXT(36161,ye,K,y.width,y.height):i.renderbufferStorage(36161,K,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function W(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const ne=n.get(y.depthTexture).__webglTexture,oe=Me(y);if(y.depthTexture.format===En)we(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,oe):i.framebufferTexture2D(36160,36096,3553,ne,0);else if(y.depthTexture.format===di)we(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,oe):i.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Z(A){const y=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");W(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]=i.createRenderbuffer(),Pe(y.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Pe(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ae(A,y,H){const ne=n.get(A);y!==void 0&&se(ne.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&Z(A)}function ve(A){const y=A.texture,H=n.get(A),ne=n.get(y);A.addEventListener("dispose",le),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=y.version,o.memory.textures++);const oe=A.isWebGLCubeRenderTarget===!0,de=A.isWebGLMultipleRenderTargets===!0,Le=S(A)||a;if(oe){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)H.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),de)if(r.drawBuffers){const pe=A.texture;for(let K=0,ye=pe.length;K<ye;K++){const Te=n.get(pe[K]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&we(A)===!1){const pe=de?y:[y];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let K=0;K<pe.length;K++){const ye=pe[K];H.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(36161,H.__webglColorRenderbuffer[K]);const Te=s.convert(ye.format,ye.encoding),xe=s.convert(ye.type),Ae=x(ye.internalFormat,Te,xe,ye.encoding,A.isXRRenderTarget===!0),be=Me(A);i.renderbufferStorageMultisample(36161,be,Ae,A.width,A.height),i.framebufferRenderbuffer(36160,36064+K,36161,H.__webglColorRenderbuffer[K])}i.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,ne.__webglTexture),G(34067,y,Le);for(let pe=0;pe<6;pe++)se(H.__webglFramebuffer[pe],A,y,36064,34069+pe);T(y,Le)&&L(34067),t.unbindTexture()}else if(de){const pe=A.texture;for(let K=0,ye=pe.length;K<ye;K++){const Te=pe[K],xe=n.get(Te);t.bindTexture(3553,xe.__webglTexture),G(3553,Te,Le),se(H.__webglFramebuffer,A,Te,36064+K,3553),T(Te,Le)&&L(3553)}t.unbindTexture()}else{let pe=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?pe=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ne.__webglTexture),G(pe,y,Le),se(H.__webglFramebuffer,A,y,36064,pe),T(y,Le)&&L(pe),t.unbindTexture()}A.depthBuffer&&Z(A)}function he(A){const y=S(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,oe=H.length;ne<oe;ne++){const de=H[ne];if(T(de,y)){const Le=A.isWebGLCubeRenderTarget?34067:3553,pe=n.get(de).__webglTexture;t.bindTexture(Le,pe),L(Le),t.unbindTexture()}}}function Ce(A){if(a&&A.samples>0&&we(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,ne=A.height;let oe=16384;const de=[],Le=A.stencilBuffer?33306:36096,pe=n.get(A),K=A.isWebGLMultipleRenderTargets===!0;if(K)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){de.push(36064+ye),A.depthBuffer&&de.push(Le);const Te=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Te===!1&&(A.depthBuffer&&(oe|=256),A.stencilBuffer&&(oe|=1024)),K&&i.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[ye]),Te===!0&&(i.invalidateFramebuffer(36008,[Le]),i.invalidateFramebuffer(36009,[Le])),K){const xe=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,xe,0)}i.blitFramebuffer(0,0,H,ne,0,0,H,ne,oe,9728),m&&i.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ye,36161,pe.__webglColorRenderbuffer[ye]);const Te=n.get(y[ye]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ye,3553,Te,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function Me(A){return Math.min(f,A.samples)}function we(A){const y=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ge(A){const y=o.render.frame;g.get(A)!==y&&(g.set(A,y),A.update())}function Be(A,y){const H=A.encoding,ne=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Rs||H!==Nn&&(H===We?a===!1?e.has("EXT_sRGB")===!0&&ne===zt?(A.format=Rs,A.minFilter=At,A.generateMipmaps=!1):y=Fo.sRGBToLinear(y):(ne!==zt||oe!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),y}this.allocateTextureUnit=j,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=ae,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=se,this.useMultisampledRTT=we}function op(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Rn)return 5121;if(s===Yl)return 32819;if(s===Ql)return 32820;if(s===Kl)return 5120;if(s===Zl)return 5122;if(s===Ro)return 5123;if(s===Jl)return 5124;if(s===An)return 5125;if(s===Pn)return 5126;if(s===Ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$l)return 6406;if(s===zt)return 6408;if(s===tc)return 6409;if(s===nc)return 6410;if(s===En)return 6402;if(s===di)return 34041;if(s===ec)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Rs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ic)return 6403;if(s===rc)return 36244;if(s===sc)return 33319;if(s===ac)return 33320;if(s===oc)return 36249;if(s===Hr||s===Ur||s===Vr||s===kr)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ha||s===da||s===pa||s===ma)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ha)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ma)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ga||s===va)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ga)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===va)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xa||s===_a||s===ya||s===ba||s===Sa||s===wa||s===Ma||s===Aa||s===Pa||s===Ta||s===Ea||s===La||s===Ca||s===Da)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_a)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ya)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ba)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ma)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Aa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ta)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ea)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===La)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ca)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Da)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ra)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===li?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class lp extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ii=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}};const cp={type:"move"};class ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),v=this._getHandJoint(l,p);d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class up extends mt{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:En,u!==En&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===En&&(n=An),n===void 0&&u===di&&(n=li),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1}}class fp extends In{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const v=[],M=[],_=new Set,S=new Map,b=new Pt;b.layers.enable(1),b.viewport=new at;const T=new Pt;T.layers.enable(2),T.viewport=new at;const L=[b,T],x=new lp;x.layers.enable(1),x.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=v[I];return V===void 0&&(V=new ps,v[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=v[I];return V===void 0&&(V=new ps,v[I]=V),V.getGripSpace()},this.getHand=function(I){let V=v[I];return V===void 0&&(V=new ps,v[I]=V),V.getHandSpace()};function U(I){const V=M.indexOf(I.inputSource);if(V===-1)return;const ee=v[V];ee!==void 0&&ee.dispatchEvent({type:I.type,data:I.inputSource})}function le(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",z);for(let I=0;I<v.length;I++){const V=M[I];V!==null&&(M[I]=null,v[I].disconnect(V))}P=null,D=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",le),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:h}),d=new zn(h.framebufferWidth,h.framebufferHeight,{format:zt,type:Rn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,ee=null,re=null;g.depth&&(re=g.stencil?35056:33190,V=g.stencil?di:En,ee=g.stencil?li:An);const fe={colorFormat:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),d=new zn(f.textureWidth,f.textureHeight,{format:zt,type:Rn,depthTexture:new up(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const G=e.properties.get(d);G.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(I){for(let V=0;V<I.removed.length;V++){const ee=I.removed[V],re=M.indexOf(ee);re>=0&&(M[re]=null,v[re].disconnect(ee))}for(let V=0;V<I.added.length;V++){const ee=I.added[V];let re=M.indexOf(ee);if(re===-1){for(let G=0;G<v.length;G++)if(G>=M.length){M.push(ee),re=G;break}else if(M[G]===null){M[G]=ee,re=G;break}if(re===-1)break}const fe=v[re];fe&&fe.connect(ee)}}const R=new C,X=new C;function Y(I,V,ee){R.setFromMatrixPosition(V.matrixWorld),X.setFromMatrixPosition(ee.matrixWorld);const re=R.distanceTo(X),fe=V.projectionMatrix.elements,G=ee.projectionMatrix.elements,O=fe[14]/(fe[10]-1),J=fe[14]/(fe[10]+1),me=(fe[9]+1)/fe[5],se=(fe[9]-1)/fe[5],Pe=(fe[8]-1)/fe[0],W=(G[8]+1)/G[0],Z=O*Pe,ae=O*W,ve=re/(-Pe+W),he=ve*-Pe;V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(he),I.translateZ(ve),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Ce=O+ve,Me=J+ve,we=Z-he,Ge=ae+(re-he),Be=me*J/Me*Ce,A=se*J/Me*Ce;I.projectionMatrix.makePerspective(we,Ge,Be,A,Ce,Me)}function Q(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;x.near=T.near=b.near=I.near,x.far=T.far=b.far=I.far,(P!==x.near||D!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,D=x.far);const V=I.parent,ee=x.cameras;Q(x,V);for(let fe=0;fe<ee.length;fe++)Q(ee[fe],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),I.matrix.copy(x.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const re=I.children;for(let fe=0,G=re.length;fe<G;fe++)re[fe].updateMatrixWorld(!0);ee.length===2?Y(x,b,T):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(I){f!==null&&(f.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)},this.getPlanes=function(){return _};let j=null;function ie(I,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const ee=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let re=!1;ee.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let fe=0;fe<ee.length;fe++){const G=ee[fe];let O=null;if(h!==null)O=h.getViewport(G);else{const me=u.getViewSubImage(f,G);O=me.viewport,fe===0&&(e.setRenderTargetTextures(d,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(d))}let J=L[fe];J===void 0&&(J=new Pt,J.layers.enable(fe),J.viewport=new at,L[fe]=J),J.matrix.fromArray(G.transform.matrix),J.projectionMatrix.fromArray(G.projectionMatrix),J.viewport.set(O.x,O.y,O.width,O.height),fe===0&&x.matrix.copy(J.matrix),re===!0&&x.cameras.push(J)}}for(let ee=0;ee<v.length;ee++){const re=M[ee],fe=v[ee];re!==null&&fe!==void 0&&fe.update(re,V,c||o)}if(j&&j(I,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let ee=null;for(const re of _)V.detectedPlanes.has(re)||(ee===null&&(ee=[]),ee.push(re));if(ee!==null)for(const re of ee)_.delete(re),S.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of V.detectedPlanes)if(!_.has(re))_.add(re),S.set(re,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const fe=S.get(re);re.lastChangedTime>fe&&(S.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}m=null}const $=new Xo;$.setAnimationLoop(ie),this.setAnimationLoop=function(I){j=I},this.dispose=function(){}}}function hp(i,e){function t(p,d){d.color.getRGB(p.fogColor.value,ko(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,v,M,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,_)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,v,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Tt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Tt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let M;d.map?M=d.map:d.specularMap?M=d.specularMap:d.displacementMap?M=d.displacementMap:d.normalMap?M=d.normalMap:d.bumpMap?M=d.bumpMap:d.roughnessMap?M=d.roughnessMap:d.metalnessMap?M=d.metalnessMap:d.alphaMap?M=d.alphaMap:d.emissiveMap?M=d.emissiveMap:d.clearcoatMap?M=d.clearcoatMap:d.clearcoatNormalMap?M=d.clearcoatNormalMap:d.clearcoatRoughnessMap?M=d.clearcoatRoughnessMap:d.iridescenceMap?M=d.iridescenceMap:d.iridescenceThicknessMap?M=d.iridescenceThicknessMap:d.specularIntensityMap?M=d.specularIntensityMap:d.specularColorMap?M=d.specularColorMap:d.transmissionMap?M=d.transmissionMap:d.thicknessMap?M=d.thicknessMap:d.sheenColorMap?M=d.sheenColorMap:d.sheenRoughnessMap&&(M=d.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,v,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=M*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Tt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function dp(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(M,_){const S=_.program;n.uniformBlockBinding(M,S)}function l(M,_){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",d));const b=_.program;n.updateUBOMapping(M,b);const T=e.render.frame;s[M.id]!==T&&(h(M),s[M.id]=T)}function u(M){const _=f();M.__bindingPointIndex=_;const S=i.createBuffer(),b=M.__size,T=M.usage;return i.bindBuffer(35345,S),i.bufferData(35345,b,T),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const _=r[M.id],S=M.uniforms,b=M.__cache;i.bindBuffer(35345,_);for(let T=0,L=S.length;T<L;T++){const x=S[T];if(m(x,T,b)===!0){const P=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let le=0;le<D.length;le++){const z=D[le],R=p(z);typeof z=="number"?(x.__data[0]=z,i.bufferSubData(35345,P+U,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=z.elements[0],x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=z.elements[0],x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=z.elements[0]):(z.toArray(x.__data,U),U+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,P,x.__data)}}i.bindBuffer(35345,null)}function m(M,_,S){const b=M.value;if(S[_]===void 0){if(typeof b=="number")S[_]=b;else{const T=Array.isArray(b)?b:[b],L=[];for(let x=0;x<T.length;x++)L.push(T[x].clone());S[_]=L}return!0}else if(typeof b=="number"){if(S[_]!==b)return S[_]=b,!0}else{const T=Array.isArray(S[_])?S[_]:[S[_]],L=Array.isArray(b)?b:[b];for(let x=0;x<T.length;x++){const P=T[x];if(P.equals(L[x])===!1)return P.copy(L[x]),!0}}return!1}function g(M){const _=M.uniforms;let S=0;const b=16;let T=0;for(let L=0,x=_.length;L<x;L++){const P=_[L],D={boundary:0,storage:0},U=Array.isArray(P.value)?P.value:[P.value];for(let le=0,z=U.length;le<z;le++){const R=U[le],X=p(R);D.boundary+=X.boundary,D.storage+=X.storage}if(P.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,L>0){T=S%b;const le=b-T;T!==0&&le-D.boundary<0&&(S+=b-T,P.__offset=S)}S+=D.storage}return T=S%b,T>0&&(S+=b-T),M.__size=S,M.__cache={},this}function p(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function d(M){const _=M.target;_.removeEventListener("dispose",d);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function v(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:v}}function pp(){const i=zi("canvas");return i.style.display="block",i}function Jo(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:pp(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Nn,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1;const p=this;let d=!1,v=0,M=0,_=null,S=-1,b=null;const T=new at,L=new at;let x=null,P=e.width,D=e.height,U=1,le=null,z=null;const R=new at(0,0,P,D),X=new at(0,0,P,D);let Y=!1;const Q=new Wo;let j=!1,ie=!1,$=null;const I=new st,V=new ce,ee=new C,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return _===null?U:1}let G=t;function O(w,F){for(let B=0;B<w.length;B++){const N=w[B],q=e.getContext(N,F);if(q!==null)return q}return null}try{const w={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xs}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",He,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),G=O(F,w),G===null)throw O(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,me,se,Pe,W,Z,ae,ve,he,Ce,Me,we,Ge,Be,A,y,H,ne,oe,de,Le,pe,K,ye;function Te(){J=new Ah(G),me=new xh(G,J,i),J.init(me),pe=new op(G,J,me),se=new sp(G,J,me),Pe=new Eh,W=new Xd,Z=new ap(G,J,se,W,me,pe,Pe),ae=new yh(p),ve=new Mh(p),he=new Fc(G,me),K=new gh(G,J,he,me),Ce=new Ph(G,he,Pe,K),Me=new Rh(G,Ce,he,Pe),oe=new Dh(G,me,Z),y=new _h(W),we=new Wd(p,ae,ve,J,me,K,y),Ge=new hp(p,W),Be=new qd,A=new $d(J,me),ne=new mh(p,ae,ve,se,Me,u,o),H=new rp(p,Me,me),ye=new dp(G,Pe,me,se),de=new vh(G,J,Pe,me),Le=new Th(G,J,Pe,me),Pe.programs=we.programs,p.capabilities=me,p.extensions=J,p.properties=W,p.renderLists=Be,p.shadowMap=H,p.state=se,p.info=Pe}Te();const xe=new fp(p,G);this.xr=xe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(P,D,!1))},this.getSize=function(w){return w.set(P,D)},this.setSize=function(w,F,B){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,D=F,e.width=Math.floor(w*U),e.height=Math.floor(F*U),B!==!1&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(P*U,D*U).floor()},this.setDrawingBufferSize=function(w,F,B){P=w,D=F,U=B,e.width=Math.floor(w*B),e.height=Math.floor(F*B),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,F,B,N){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,F,B,N),se.viewport(T.copy(R).multiplyScalar(U).floor())},this.getScissor=function(w){return w.copy(X)},this.setScissor=function(w,F,B,N){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,F,B,N),se.scissor(L.copy(X).multiplyScalar(U).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){se.setScissorTest(Y=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,F=!0,B=!0){let N=0;w&&(N|=16384),F&&(N|=256),B&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",He,!1),Be.dispose(),A.dispose(),W.dispose(),ae.dispose(),ve.dispose(),Me.dispose(),K.dispose(),ye.dispose(),we.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ge),xe.removeEventListener("sessionend",_e),$&&($.dispose(),$=null),Ve.stop()};function Ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Pe.autoReset,F=H.enabled,B=H.autoUpdate,N=H.needsUpdate,q=H.type;Te(),Pe.autoReset=w,H.enabled=F,H.autoUpdate=B,H.needsUpdate=N,H.type=q}function He(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){const F=w.target;F.removeEventListener("dispose",Xe),tt(F)}function tt(w){E(w),W.remove(w)}function E(w){const F=W.get(w).programs;F!==void 0&&(F.forEach(function(B){we.releaseProgram(B)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,B,N,q,Se){F===null&&(F=re);const De=q.isMesh&&q.matrixWorld.determinant()<0,Ne=dl(w,F,B,N,q);se.setMaterial(N,De);let ze=B.index,Ue=1;N.wireframe===!0&&(ze=Ce.getWireframeAttribute(B),Ue=2);const Fe=B.drawRange,Oe=B.attributes.position;let Ze=Fe.start*Ue,gt=(Fe.start+Fe.count)*Ue;Se!==null&&(Ze=Math.max(Ze,Se.start*Ue),gt=Math.min(gt,(Se.start+Se.count)*Ue)),ze!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,ze.count)):Oe!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,Oe.count));const Xt=gt-Ze;if(Xt<0||Xt===1/0)return;K.setup(q,N,Ne,B,ze);let dn,Je=de;if(ze!==null&&(dn=he.get(ze),Je=Le,Je.setIndex(dn)),q.isMesh)N.wireframe===!0?(se.setLineWidth(N.wireframeLinewidth*fe()),Je.setMode(1)):Je.setMode(4);else if(q.isLine){let Ie=N.linewidth;Ie===void 0&&(Ie=1),se.setLineWidth(Ie*fe()),q.isLineSegments?Je.setMode(1):q.isLineLoop?Je.setMode(2):Je.setMode(3)}else q.isPoints?Je.setMode(0):q.isSprite&&Je.setMode(4);if(q.isInstancedMesh)Je.renderInstances(Ze,Xt,q.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Rr=Math.min(B.instanceCount,Ie);Je.renderInstances(Ze,Xt,Rr)}else Je.render(Ze,Xt)},this.compile=function(w,F){function B(N,q,Se){N.transparent===!0&&N.side===Wi?(N.side=Tt,N.needsUpdate=!0,wt(N,q,Se),N.side=Dn,N.needsUpdate=!0,wt(N,q,Se),N.side=Wi):wt(N,q,Se)}h=A.get(w),h.init(),g.push(h),w.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let Se=0;Se<q.length;Se++){const De=q[Se];B(De,w,N)}else B(q,w,N)}),g.pop(),h=null};let k=null;function te(w){k&&k(w)}function ge(){Ve.stop()}function _e(){Ve.start()}const Ve=new Xo;Ve.setAnimationLoop(te),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(w){k=w,xe.setAnimationLoop(w),w===null?Ve.stop():Ve.start()},xe.addEventListener("sessionstart",ge),xe.addEventListener("sessionend",_e),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,F,_),h=A.get(w,g.length),h.init(),g.push(h),I.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(I),ie=this.localClippingEnabled,j=y.init(this.clippingPlanes,ie,F),f=Be.get(w,m.length),f.init(),m.push(f),nt(w,F,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(le,z),j===!0&&y.beginShadows();const B=h.state.shadowsArray;if(H.render(B,w,F),j===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,w),h.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const N=F.cameras;for(let q=0,Se=N.length;q<Se;q++){const De=N[q];ot(f,w,De,De.viewport)}}else ot(f,w,F);_!==null&&(Z.updateMultisampleRenderTarget(_),Z.updateRenderTargetMipmap(_)),w.isScene===!0&&w.onAfterRender(p,w,F),K.resetDefaultState(),S=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function nt(w,F,B,N){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){N&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(I);const De=Me.update(w),Ne=w.material;Ne.visible&&f.push(w,De,Ne,B,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Pe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Pe.render.frame),!w.frustumCulled||Q.intersectsObject(w))){N&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(I);const De=Me.update(w),Ne=w.material;if(Array.isArray(Ne)){const ze=De.groups;for(let Ue=0,Fe=ze.length;Ue<Fe;Ue++){const Oe=ze[Ue],Ze=Ne[Oe.materialIndex];Ze&&Ze.visible&&f.push(w,De,Ze,B,ee.z,Oe)}}else Ne.visible&&f.push(w,De,Ne,B,ee.z,null)}}const Se=w.children;for(let De=0,Ne=Se.length;De<Ne;De++)nt(Se[De],F,B,N)}function ot(w,F,B,N){const q=w.opaque,Se=w.transmissive,De=w.transparent;h.setupLightsView(B),Se.length>0&&hn(q,F,B),N&&se.viewport(T.copy(N)),q.length>0&&je(q,F,B),Se.length>0&&je(Se,F,B),De.length>0&&je(De,F,B),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function hn(w,F,B){const N=me.isWebGL2;$===null&&($=new zn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ri:Rn,minFilter:Di,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(V),N?$.setSize(V.x,V.y):$.setSize(Ns(V.x),Ns(V.y));const q=p.getRenderTarget();p.setRenderTarget($),p.clear();const Se=p.toneMapping;p.toneMapping=$t,je(w,F,B),p.toneMapping=Se,Z.updateMultisampleRenderTarget($),Z.updateRenderTargetMipmap($),p.setRenderTarget(q)}function je(w,F,B){const N=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Se=w.length;q<Se;q++){const De=w[q],Ne=De.object,ze=De.geometry,Ue=N===null?De.material:N,Fe=De.group;Ne.layers.test(B.layers)&&Wt(Ne,F,B,ze,Ue,Fe)}}function Wt(w,F,B,N,q,Se){w.onBeforeRender(p,F,B,N,q,Se),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(p,F,B,N,w,Se),q.transparent===!0&&q.side===Wi?(q.side=Tt,q.needsUpdate=!0,p.renderBufferDirect(B,F,N,q,w,Se),q.side=Dn,q.needsUpdate=!0,p.renderBufferDirect(B,F,N,q,w,Se),q.side=Wi):p.renderBufferDirect(B,F,N,q,w,Se),w.onAfterRender(p,F,B,N,q,Se)}function wt(w,F,B){F.isScene!==!0&&(F=re);const N=W.get(w),q=h.state.lights,Se=h.state.shadowsArray,De=q.state.version,Ne=we.getParameters(w,q.state,Se,F,B),ze=we.getProgramCacheKey(Ne);let Ue=N.programs;N.environment=w.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(w.isMeshStandardMaterial?ve:ae).get(w.envMap||N.environment),Ue===void 0&&(w.addEventListener("dispose",Xe),Ue=new Map,N.programs=Ue);let Fe=Ue.get(ze);if(Fe!==void 0){if(N.currentProgram===Fe&&N.lightsStateVersion===De)return na(w,Ne),Fe}else Ne.uniforms=we.getUniforms(w),w.onBuild(B,Ne,p),w.onBeforeCompile(Ne,p),Fe=we.acquireProgram(Ne,ze),Ue.set(ze,Fe),N.uniforms=Ne.uniforms;const Oe=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=y.uniform),na(w,Ne),N.needsLights=ml(w),N.lightsStateVersion=De,N.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ze=Fe.getUniforms(),gt=vr.seqWithValue(Ze.seq,Oe);return N.currentProgram=Fe,N.uniformsList=gt,Fe}function na(w,F){const B=W.get(w);B.outputEncoding=F.outputEncoding,B.instancing=F.instancing,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function dl(w,F,B,N,q){F.isScene!==!0&&(F=re),Z.resetTextureUnits();const Se=F.fog,De=N.isMeshStandardMaterial?F.environment:null,Ne=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Nn,ze=(N.isMeshStandardMaterial?ve:ae).get(N.envMap||De),Ue=N.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!N.normalMap&&!!B.attributes.tangent,Oe=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,gt=!!B.morphAttributes.color,Xt=N.toneMapped?p.toneMapping:$t,dn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=dn!==void 0?dn.length:0,Ie=W.get(N),Rr=h.state.lights;if(j===!0&&(ie===!0||w!==b)){const vt=w===b&&N.id===S;y.setState(N,w,vt)}let it=!1;N.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Rr.state.version||Ie.outputEncoding!==Ne||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==ze||N.fog===!0&&Ie.fog!==Se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==y.numPlanes||Ie.numIntersection!==y.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Fe||Ie.morphTargets!==Oe||Ie.morphNormals!==Ze||Ie.morphColors!==gt||Ie.toneMapping!==Xt||me.isWebGL2===!0&&Ie.morphTargetsCount!==Je)&&(it=!0):(it=!0,Ie.__version=N.version);let pn=Ie.currentProgram;it===!0&&(pn=wt(N,F,q));let ia=!1,xi=!1,Nr=!1;const ct=pn.getUniforms(),mn=Ie.uniforms;if(se.useProgram(pn.program)&&(ia=!0,xi=!0,Nr=!0),N.id!==S&&(S=N.id,xi=!0),ia||b!==w){if(ct.setValue(G,"projectionMatrix",w.projectionMatrix),me.logarithmicDepthBuffer&&ct.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,xi=!0,Nr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const vt=ct.map.cameraPosition;vt!==void 0&&vt.setValue(G,ee.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ct.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&ct.setValue(G,"viewMatrix",w.matrixWorldInverse)}if(q.isSkinnedMesh){ct.setOptional(G,q,"bindMatrix"),ct.setOptional(G,q,"bindMatrixInverse");const vt=q.skeleton;vt&&(me.floatVertexTextures?(vt.boneTexture===null&&vt.computeBoneTexture(),ct.setValue(G,"boneTexture",vt.boneTexture,Z),ct.setValue(G,"boneTextureSize",vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zr=B.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&me.isWebGL2===!0)&&oe.update(q,B,N,pn),(xi||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,ct.setValue(G,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(mn.envMap.value=ze,mn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),xi&&(ct.setValue(G,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&pl(mn,Nr),Se&&N.fog===!0&&Ge.refreshFogUniforms(mn,Se),Ge.refreshMaterialUniforms(mn,N,U,D,$),vr.upload(G,Ie.uniformsList,mn,Z)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(vr.upload(G,Ie.uniformsList,mn,Z),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ct.setValue(G,"center",q.center),ct.setValue(G,"modelViewMatrix",q.modelViewMatrix),ct.setValue(G,"normalMatrix",q.normalMatrix),ct.setValue(G,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const vt=N.uniformsGroups;for(let Fr=0,gl=vt.length;Fr<gl;Fr++)if(me.isWebGL2){const ra=vt[Fr];ye.update(ra,pn),ye.bind(ra,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function pl(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function ml(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(w,F,B){W.get(w.texture).__webglTexture=F,W.get(w.depthTexture).__webglTexture=B;const N=W.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=B===void 0,N.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const B=W.get(w);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,B=0){_=w,v=F,M=B;let N=!0,q=null,Se=!1,De=!1;if(w){const ze=W.get(w);ze.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),N=!1):ze.__webglFramebuffer===void 0?Z.setupRenderTarget(w):ze.__hasExternalTextures&&Z.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(De=!0);const Fe=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(q=Fe[F],Se=!0):me.isWebGL2&&w.samples>0&&Z.useMultisampledRTT(w)===!1?q=W.get(w).__webglMultisampledFramebuffer:q=Fe,T.copy(w.viewport),L.copy(w.scissor),x=w.scissorTest}else T.copy(R).multiplyScalar(U).floor(),L.copy(X).multiplyScalar(U).floor(),x=Y;if(se.bindFramebuffer(36160,q)&&me.drawBuffers&&N&&se.drawBuffers(w,q),se.viewport(T),se.scissor(L),se.setScissorTest(x),Se){const ze=W.get(w.texture);G.framebufferTexture2D(36160,36064,34069+F,ze.__webglTexture,B)}else if(De){const ze=W.get(w.texture),Ue=F||0;G.framebufferTextureLayer(36160,36064,ze.__webglTexture,B||0,Ue)}S=-1},this.readRenderTargetPixels=function(w,F,B,N,q,Se,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){se.bindFramebuffer(36160,Ne);try{const ze=w.texture,Ue=ze.format,Fe=ze.type;if(Ue!==zt&&pe.convert(Ue)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Ri&&(J.has("EXT_color_buffer_half_float")||me.isWebGL2&&J.has("EXT_color_buffer_float"));if(Fe!==Rn&&pe.convert(Fe)!==G.getParameter(35738)&&!(Fe===Pn&&(me.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-N&&B>=0&&B<=w.height-q&&G.readPixels(F,B,N,q,pe.convert(Ue),pe.convert(Fe),Se)}finally{const ze=_!==null?W.get(_).__webglFramebuffer:null;se.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(w,F,B=0){const N=Math.pow(2,-B),q=Math.floor(F.image.width*N),Se=Math.floor(F.image.height*N);Z.setTexture2D(F,0),G.copyTexSubImage2D(3553,B,0,0,w.x,w.y,q,Se),se.unbindTexture()},this.copyTextureToTexture=function(w,F,B,N=0){const q=F.image.width,Se=F.image.height,De=pe.convert(B.format),Ne=pe.convert(B.type);Z.setTexture2D(B,0),G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,N,w.x,w.y,q,Se,De,Ne,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,N,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,De,F.mipmaps[0].data):G.texSubImage2D(3553,N,w.x,w.y,De,Ne,F.image),N===0&&B.generateMipmaps&&G.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(w,F,B,N,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,ze=pe.convert(N.format),Ue=pe.convert(N.type);let Fe;if(N.isData3DTexture)Z.setTexture3D(N,0),Fe=32879;else if(N.isDataArrayTexture)Z.setTexture2DArray(N,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const Oe=G.getParameter(3314),Ze=G.getParameter(32878),gt=G.getParameter(3316),Xt=G.getParameter(3315),dn=G.getParameter(32877),Je=B.isCompressedTexture?B.mipmaps[0]:B.image;G.pixelStorei(3314,Je.width),G.pixelStorei(32878,Je.height),G.pixelStorei(3316,w.min.x),G.pixelStorei(3315,w.min.y),G.pixelStorei(32877,w.min.z),B.isDataTexture||B.isData3DTexture?G.texSubImage3D(Fe,q,F.x,F.y,F.z,Se,De,Ne,ze,Ue,Je.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Fe,q,F.x,F.y,F.z,Se,De,Ne,ze,Je.data)):G.texSubImage3D(Fe,q,F.x,F.y,F.z,Se,De,Ne,ze,Ue,Je),G.pixelStorei(3314,Oe),G.pixelStorei(32878,Ze),G.pixelStorei(3316,gt),G.pixelStorei(3315,Xt),G.pixelStorei(32877,dn),q===0&&N.generateMipmaps&&G.generateMipmap(Fe),se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){v=0,M=0,_=null,se.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class mp extends Jo{}mp.prototype.isWebGL1Renderer=!0;class gp extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,m=(o-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ce:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,r=[],s=[],o=[],a=new C,c=new st;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(pt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zs extends Gt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ce,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*u-m*f+this.aX,l=h*f+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vp extends Zs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Js(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,m*=u,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ur=new C,ms=new Js,gs=new Js,vs=new Js;class xp extends Gt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new C){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ur.subVectors(r[0],r[1]).add(r[0]),l=ur);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ur.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ur),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),ms.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,p,d),gs.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,p,d),vs.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(ms.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),gs.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),vs.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(ms.calc(c),gs.calc(c),vs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function go(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function _p(i,e){const t=1-i;return t*t*e}function yp(i,e){return 2*(1-i)*i*e}function bp(i,e){return i*i*e}function Li(i,e,t,n){return _p(i,e)+yp(i,t)+bp(i,n)}function Sp(i,e){const t=1-i;return t*t*t*e}function wp(i,e){const t=1-i;return 3*t*t*i*e}function Mp(i,e){return 3*(1-i)*i*i*e}function Ap(i,e){return i*i*i*e}function Ci(i,e,t,n,r){return Sp(i,e)+wp(i,t)+Mp(i,n)+Ap(i,r)}class Yo extends Gt{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ci(e,r.x,s.x,o.x,a.x),Ci(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pp extends Gt{constructor(e=new C,t=new C,n=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ci(e,r.x,s.x,o.x,a.x),Ci(e,r.y,s.y,o.y,a.y),Ci(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ys extends Gt{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ce;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tp extends Gt{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qo extends Gt{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Li(e,r.x,s.x,o.x),Li(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ep extends Gt{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Li(e,r.x,s.x,o.x),Li(e,r.y,s.y,o.y),Li(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $o extends Gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(go(a,c.x,l.x,u.x,f.x),go(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:vp,CatmullRomCurve3:xp,CubicBezierCurve:Yo,CubicBezierCurve3:Pp,EllipseCurve:Zs,LineCurve:Ys,LineCurve3:Tp,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Ep,SplineCurve:$o});class Lp extends Gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ys(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new el[r.type]().fromJSON(r))}return this}}class Fs extends Lp{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ys(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Qo(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Yo(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new Zs(e,t,n,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xr extends Fs{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Fs().fromJSON(r))}return this}}const Cp={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=tl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,f,h,m;if(n&&(s=Fp(i,e,s,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)f=i[g],h=i[g+1],f<a&&(a=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Fi(s,o,t,a,c,m,0),o}};function tl(i,e,t,n,r){let s,o;if(r===jp(i,e,t,n)>0)for(s=e;s<t;s+=n)o=vo(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=vo(s,i[s],i[s+1],o);return o&&Tr(o,o.next)&&(Ii(o),o=o.next),o}function On(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||Ke(t.prev,t,t.next)===0)){if(Ii(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fi(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Vp(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Rp(i,n,r,s):Dp(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ii(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Np(On(i),e,t),Fi(i,e,t,n,r,s,2)):o===2&&zp(i,e,t,n,r,s):Fi(On(i),e,t,n,r,s,1);break}}}function Dp(i){const e=i.prev,t=i,n=i.next;if(Ke(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=r<s?r<o?r:o:s<o?s:o,f=a<c?a<l?a:l:c<l?c:l,h=r>s?r>o?r:o:s>o?s:o,m=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=m&&ri(r,a,s,c,o,l,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rp(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ke(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,h=o.y,m=a<c?a<l?a:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,p=a>c?a>l?a:l:c>l?c:l,d=u>f?u>h?u:h:f>h?f:h,v=Os(m,g,e,t,n),M=Os(p,d,e,t,n);let _=i.prevZ,S=i.nextZ;for(;_&&_.z>=v&&S&&S.z<=M;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==r&&_!==o&&ri(a,u,c,f,l,h,_.x,_.y)&&Ke(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=p&&S.y>=g&&S.y<=d&&S!==r&&S!==o&&ri(a,u,c,f,l,h,S.x,S.y)&&Ke(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=v;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=d&&_!==r&&_!==o&&ri(a,u,c,f,l,h,_.x,_.y)&&Ke(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=M;){if(S.x>=m&&S.x<=p&&S.y>=g&&S.y<=d&&S!==r&&S!==o&&ri(a,u,c,f,l,h,S.x,S.y)&&Ke(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Np(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!Tr(r,s)&&nl(r,n,n.next,s)&&Oi(r,s)&&Oi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ii(n),Ii(n.next),n=i=s),n=n.next}while(n!==i);return On(n)}function zp(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gp(o,a)){let c=il(o,a);o=On(o,o.next),c=On(c,c.next),Fi(o,e,t,n,r,s,0),Fi(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Fp(i,e,t,n){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=tl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(Bp(l));for(r.sort(Op),s=0;s<r.length;s++)t=Ip(r[s],t);return t}function Op(i,e){return i.x-e.x}function Ip(i,e){const t=Hp(i,e);if(!t)return e;const n=il(t,i);return On(n,n.next),On(t,t.next)}function Hp(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&ri(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Oi(t,i)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&Up(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function Up(i,e){return Ke(i.prev,i,e.prev)<0&&Ke(e.next,i,i.next)<0}function Vp(i,e,t,n){let r=i;do r.z===0&&(r.z=Os(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,kp(r)}function kp(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function Os(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ri(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Gp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wp(i,e)&&(Oi(i,e)&&Oi(e,i)&&Xp(i,e)&&(Ke(i.prev,i,e.prev)||Ke(i,e.prev,e))||Tr(i,e)&&Ke(i.prev,i,i.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Tr(i,e){return i.x===e.x&&i.y===e.y}function nl(i,e,t,n){const r=hr(Ke(i,e,t)),s=hr(Ke(i,e,n)),o=hr(Ke(t,n,i)),a=hr(Ke(t,n,e));return!!(r!==s&&o!==a||r===0&&fr(i,t,e)||s===0&&fr(i,n,e)||o===0&&fr(t,i,n)||a===0&&fr(t,e,n))}function fr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hr(i){return i>0?1:i<0?-1:0}function Wp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Oi(i,e){return Ke(i.prev,i,i.next)<0?Ke(i,e,i.next)>=0&&Ke(i,i.prev,e)>=0:Ke(i,e,i.prev)<0||Ke(i,i.next,e)<0}function Xp(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function il(i,e){const t=new Is(i.i,i.x,i.y),n=new Is(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vo(i,e,t,n){const r=new Is(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ii(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Is(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jp(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class ci{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return ci.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];xo(e),_o(n,e);let o=e.length;t.forEach(xo);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,_o(n,t[c]);const a=Cp.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function xo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _o(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Qs extends fn{constructor(e=new xr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new en(r,3)),this.setAttribute("uv",new en(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:qp;let _,S=!1,b,T,L,x;v&&(_=v.getSpacedPoints(u),S=!0,h=!1,b=v.computeFrenetFrames(u,!1),T=new C,L=new C,x=new C),h||(d=0,m=0,g=0,p=0);const P=a.extractPoints(l);let D=P.shape;const U=P.holes;if(!ci.isClockWise(D)){D=D.reverse();for(let W=0,Z=U.length;W<Z;W++){const ae=U[W];ci.isClockWise(ae)&&(U[W]=ae.reverse())}}const z=ci.triangulateShape(D,U),R=D;for(let W=0,Z=U.length;W<Z;W++){const ae=U[W];D=D.concat(ae)}function X(W,Z,ae){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(ae).add(W)}const Y=D.length,Q=z.length;function j(W,Z,ae){let ve,he,Ce;const Me=W.x-Z.x,we=W.y-Z.y,Ge=ae.x-W.x,Be=ae.y-W.y,A=Me*Me+we*we,y=Me*Be-we*Ge;if(Math.abs(y)>Number.EPSILON){const H=Math.sqrt(A),ne=Math.sqrt(Ge*Ge+Be*Be),oe=Z.x-we/H,de=Z.y+Me/H,Le=ae.x-Be/ne,pe=ae.y+Ge/ne,K=((Le-oe)*Be-(pe-de)*Ge)/(Me*Be-we*Ge);ve=oe+Me*K-W.x,he=de+we*K-W.y;const ye=ve*ve+he*he;if(ye<=2)return new ce(ve,he);Ce=Math.sqrt(ye/2)}else{let H=!1;Me>Number.EPSILON?Ge>Number.EPSILON&&(H=!0):Me<-Number.EPSILON?Ge<-Number.EPSILON&&(H=!0):Math.sign(we)===Math.sign(Be)&&(H=!0),H?(ve=-we,he=Me,Ce=Math.sqrt(A)):(ve=Me,he=we,Ce=Math.sqrt(A/2))}return new ce(ve/Ce,he/Ce)}const ie=[];for(let W=0,Z=R.length,ae=Z-1,ve=W+1;W<Z;W++,ae++,ve++)ae===Z&&(ae=0),ve===Z&&(ve=0),ie[W]=j(R[W],R[ae],R[ve]);const $=[];let I,V=ie.concat();for(let W=0,Z=U.length;W<Z;W++){const ae=U[W];I=[];for(let ve=0,he=ae.length,Ce=he-1,Me=ve+1;ve<he;ve++,Ce++,Me++)Ce===he&&(Ce=0),Me===he&&(Me=0),I[ve]=j(ae[ve],ae[Ce],ae[Me]);$.push(I),V=V.concat(I)}for(let W=0;W<d;W++){const Z=W/d,ae=m*Math.cos(Z*Math.PI/2),ve=g*Math.sin(Z*Math.PI/2)+p;for(let he=0,Ce=R.length;he<Ce;he++){const Me=X(R[he],ie[he],ve);O(Me.x,Me.y,-ae)}for(let he=0,Ce=U.length;he<Ce;he++){const Me=U[he];I=$[he];for(let we=0,Ge=Me.length;we<Ge;we++){const Be=X(Me[we],I[we],ve);O(Be.x,Be.y,-ae)}}}const ee=g+p;for(let W=0;W<Y;W++){const Z=h?X(D[W],V[W],ee):D[W];S?(L.copy(b.normals[0]).multiplyScalar(Z.x),T.copy(b.binormals[0]).multiplyScalar(Z.y),x.copy(_[0]).add(L).add(T),O(x.x,x.y,x.z)):O(Z.x,Z.y,0)}for(let W=1;W<=u;W++)for(let Z=0;Z<Y;Z++){const ae=h?X(D[Z],V[Z],ee):D[Z];S?(L.copy(b.normals[W]).multiplyScalar(ae.x),T.copy(b.binormals[W]).multiplyScalar(ae.y),x.copy(_[W]).add(L).add(T),O(x.x,x.y,x.z)):O(ae.x,ae.y,f/u*W)}for(let W=d-1;W>=0;W--){const Z=W/d,ae=m*Math.cos(Z*Math.PI/2),ve=g*Math.sin(Z*Math.PI/2)+p;for(let he=0,Ce=R.length;he<Ce;he++){const Me=X(R[he],ie[he],ve);O(Me.x,Me.y,f+ae)}for(let he=0,Ce=U.length;he<Ce;he++){const Me=U[he];I=$[he];for(let we=0,Ge=Me.length;we<Ge;we++){const Be=X(Me[we],I[we],ve);S?O(Be.x,Be.y+_[u-1].y,_[u-1].x+ae):O(Be.x,Be.y,f+ae)}}}re(),fe();function re(){const W=r.length/3;if(h){let Z=0,ae=Y*Z;for(let ve=0;ve<Q;ve++){const he=z[ve];J(he[2]+ae,he[1]+ae,he[0]+ae)}Z=u+d*2,ae=Y*Z;for(let ve=0;ve<Q;ve++){const he=z[ve];J(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let Z=0;Z<Q;Z++){const ae=z[Z];J(ae[2],ae[1],ae[0])}for(let Z=0;Z<Q;Z++){const ae=z[Z];J(ae[0]+Y*u,ae[1]+Y*u,ae[2]+Y*u)}}n.addGroup(W,r.length/3-W,0)}function fe(){const W=r.length/3;let Z=0;G(R,Z),Z+=R.length;for(let ae=0,ve=U.length;ae<ve;ae++){const he=U[ae];G(he,Z),Z+=he.length}n.addGroup(W,r.length/3-W,1)}function G(W,Z){let ae=W.length;for(;--ae>=0;){const ve=ae;let he=ae-1;he<0&&(he=W.length-1);for(let Ce=0,Me=u+d*2;Ce<Me;Ce++){const we=Y*Ce,Ge=Y*(Ce+1),Be=Z+ve+we,A=Z+he+we,y=Z+he+Ge,H=Z+ve+Ge;me(Be,A,y,H)}}}function O(W,Z,ae){c.push(W),c.push(Z),c.push(ae)}function J(W,Z,ae){se(W),se(Z),se(ae);const ve=r.length/3,he=M.generateTopUV(n,r,ve-3,ve-2,ve-1);Pe(he[0]),Pe(he[1]),Pe(he[2])}function me(W,Z,ae,ve){se(W),se(Z),se(ve),se(Z),se(ae),se(ve);const he=r.length/3,Ce=M.generateSideWallUV(n,r,he-6,he-3,he-2,he-1);Pe(Ce[0]),Pe(Ce[1]),Pe(Ce[3]),Pe(Ce[1]),Pe(Ce[2]),Pe(Ce[3])}function se(W){r.push(c[W*3+0]),r.push(c[W*3+1]),r.push(c[W*3+2])}function Pe(W){s.push(W.x),s.push(W.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kp(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new el[r.type]().fromJSON(r)),new Qs(n,e.options)}}const qp={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ce(s,o),new ce(a,c),new ce(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[r*3],m=e[r*3+1],g=e[r*3+2],p=e[s*3],d=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-f),new ce(h,1-g),new ce(p,1-v)]:[new ce(a,1-c),new ce(u,1-f),new ce(m,1-g),new ce(d,1-v)]}};function Kp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}const _r={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Zp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Jp=new Zp;class Er{constructor(e){this.manager=e!==void 0?e:Jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yt={};class Yp extends Error{constructor(e,t){super(e),this.response=t}}class Qp extends Er{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yt[e]!==void 0){Yt[e].push({onLoad:t,onProgress:n,onError:r});return}Yt[e]=[],Yt[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Yt[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(v){M();function M(){f.read().then(({done:_,value:S})=>{if(_)v.close();else{p+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let T=0,L=u.length;T<L;T++){const x=u[T];x.onProgress&&x.onProgress(b)}v.enqueue(S),M()}})}}});return new Response(d)}else throw new Yp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{_r.add(e,l);const u=Yt[e];delete Yt[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Yt[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yt[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $p extends Er{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=_r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=zi("img");function c(){u(),_r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class em extends Er{constructor(e){super(e)}load(e,t,n,r){const s=new mt,o=new $p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yo(){return(typeof performance>"u"?Date:performance).now()}class nm{constructor(e,t,n=0,r=1/0){this.ray=new Ho(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Hs(e,this,n,t),n.sort(bo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Hs(e[r],this,n,t);return n.sort(bo),n}}function bo(i,e){return i.distance-e.distance}function Hs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Hs(r[s],e,t,!0)}}class im{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const M=[];for(let _=0,S=v.length;_<S;_++){const b=v[_],T=new xr;T.curves=b.curves,M.push(T)}return M}function n(v,M){const _=M.length;let S=!1;for(let b=_-1,T=0;T<_;b=T++){let L=M[b],x=M[T],P=x.x-L.x,D=x.y-L.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(L=M[T],P=-P,x=M[b],D=-D),v.y<L.y||v.y>x.y)continue;if(v.y===L.y){if(v.x===L.x)return!0}else{const U=D*(v.x-L.x)-P*(v.y-L.y);if(U===0)return!0;if(U<0)continue;S=!S}}else{if(v.y!==L.y)continue;if(x.x<=v.x&&v.x<=L.x||L.x<=v.x&&v.x<=x.x)return!0}}return S}const r=ci.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new xr,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let m=[],g=0,p;h[g]=void 0,m[g]=[];for(let v=0,M=s.length;v<M;v++)a=s[v],p=a.getPoints(),o=r(p),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new xr,p},h[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!h[0])return t(s);if(h.length>1){let v=!1,M=0;for(let _=0,S=h.length;_<S;_++)f[_]=[];for(let _=0,S=h.length;_<S;_++){const b=m[_];for(let T=0;T<b.length;T++){const L=b[T];let x=!0;for(let P=0;P<h.length;P++)n(L.p,h[P].p)&&(_!==P&&M++,x?(x=!1,f[P].push(L)):v=!0);x&&f[_].push(L)}}M>0&&v===!1&&(m=f)}let d;for(let v=0,M=h.length;v<M;v++){c=h[v].s,l.push(c),d=m[v];for(let _=0,S=d.length;_<S;_++)c.holes.push(d[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);class rm extends Er{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Qp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=s.parse(JSON.parse(a));t&&t(c)},n,r)}parse(e){return new sm(e)}}class sm{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=am(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function am(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const u=n[l];if(u===`
`)a=0,c-=s;else{const f=om(u,r,a,c,t);a+=f.offsetX,o.push(f.path)}}return o}function om(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new im;let a,c,l,u,f,h,m,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let d=0,v=p.length;d<v;)switch(p[d++]){case"m":a=p[d++]*e+t,c=p[d++]*e+n,o.moveTo(a,c);break;case"l":a=p[d++]*e+t,c=p[d++]*e+n,o.lineTo(a,c);break;case"q":l=p[d++]*e+t,u=p[d++]*e+n,f=p[d++]*e+t,h=p[d++]*e+n,o.quadraticCurveTo(f,h,l,u);break;case"b":l=p[d++]*e+t,u=p[d++]*e+n,f=p[d++]*e+t,h=p[d++]*e+n,m=p[d++]*e+t,g=p[d++]*e+n,o.bezierCurveTo(f,h,m,g,l,u);break}}return{offsetX:s.ha*e,path:o}}class lm extends Qs{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const xs={type:"change"},_s={type:"start"},ys={type:"end"};class Hi extends In{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.target=new C;const s=1e-6,o=new C;let a=1,c=r.NONE,l=r.NONE,u=0,f=0,h=0;const m=new C,g=new ce,p=new ce,d=new C,v=new ce,M=new ce,_=new ce,S=new ce,b=[],T={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const O=n.domElement.getBoundingClientRect(),J=n.domElement.ownerDocument.documentElement;n.screen.left=O.left+window.pageXOffset-J.clientLeft,n.screen.top=O.top+window.pageYOffset-J.clientTop,n.screen.width=O.width,n.screen.height=O.height};const L=function(){const O=new ce;return function(me,se){return O.set((me-n.screen.left)/n.screen.width,(se-n.screen.top)/n.screen.height),O}}(),x=function(){const O=new ce;return function(me,se){return O.set((me-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-se))/n.screen.width),O}}();this.rotateCamera=function(){const O=new C,J=new gi,me=new C,se=new C,Pe=new C,W=new C;return function(){W.set(p.x-g.x,p.y-g.y,0);let ae=W.length();ae?(m.copy(n.object.position).sub(n.target),me.copy(m).normalize(),se.copy(n.object.up).normalize(),Pe.crossVectors(se,me).normalize(),se.setLength(p.y-g.y),Pe.setLength(p.x-g.x),W.copy(se.add(Pe)),O.crossVectors(W,m).normalize(),ae*=n.rotateSpeed,J.setFromAxisAngle(O,ae),m.applyQuaternion(J),n.object.up.applyQuaternion(J),d.copy(O),h=ae):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),m.copy(n.object.position).sub(n.target),J.setFromAxisAngle(d,h),m.applyQuaternion(J),n.object.up.applyQuaternion(J)),g.copy(p)}}(),this.zoomCamera=function(){let O;c===r.TOUCH_ZOOM_PAN?(O=u/f,u=f,n.object.isPerspectiveCamera?m.multiplyScalar(O):n.object.isOrthographicCamera?(n.object.zoom/=O,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(O=1+(M.y-v.y)*n.zoomSpeed,O!==1&&O>0&&(n.object.isPerspectiveCamera?m.multiplyScalar(O):n.object.isOrthographicCamera?(n.object.zoom/=O,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?v.copy(M):v.y+=(M.y-v.y)*this.dynamicDampingFactor)},this.panCamera=function(){const O=new ce,J=new C,me=new C;return function(){if(O.copy(S).sub(_),O.lengthSq()){if(n.object.isOrthographicCamera){const Pe=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,W=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;O.x*=Pe,O.y*=W}O.multiplyScalar(m.length()*n.panSpeed),me.copy(m).cross(n.object.up).setLength(O.x),me.add(J.copy(n.object.up).setLength(O.y)),n.object.position.add(me),n.target.add(me),n.staticMoving?_.copy(S):_.add(O.subVectors(S,_).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(m.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,m.setLength(n.maxDistance)),v.copy(M)),m.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,m.setLength(n.minDistance)),v.copy(M)))},this.update=function(){m.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,m),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(xs),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>s||a!==n.object.zoom)&&(n.dispatchEvent(xs),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),m.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(xs),o.copy(n.object.position),a=n.object.zoom};function P(O){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",U)),ee(O),O.pointerType==="touch"?ie(O):X(O))}function D(O){n.enabled!==!1&&(O.pointerType==="touch"?$(O):Y(O))}function U(O){n.enabled!==!1&&(O.pointerType==="touch"?I(O):Q(),re(O),b.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",U)))}function le(O){re(O)}function z(O){n.enabled!==!1&&(window.removeEventListener("keydown",z),l===r.NONE&&(O.code===n.keys[r.ROTATE]&&!n.noRotate?l=r.ROTATE:O.code===n.keys[r.ZOOM]&&!n.noZoom?l=r.ZOOM:O.code===n.keys[r.PAN]&&!n.noPan&&(l=r.PAN)))}function R(){n.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",z))}function X(O){if(c===r.NONE)switch(O.button){case n.mouseButtons.LEFT:c=r.ROTATE;break;case n.mouseButtons.MIDDLE:c=r.ZOOM;break;case n.mouseButtons.RIGHT:c=r.PAN;break}const J=l!==r.NONE?l:c;J===r.ROTATE&&!n.noRotate?(p.copy(x(O.pageX,O.pageY)),g.copy(p)):J===r.ZOOM&&!n.noZoom?(v.copy(L(O.pageX,O.pageY)),M.copy(v)):J===r.PAN&&!n.noPan&&(_.copy(L(O.pageX,O.pageY)),S.copy(_)),n.dispatchEvent(_s)}function Y(O){const J=l!==r.NONE?l:c;J===r.ROTATE&&!n.noRotate?(g.copy(p),p.copy(x(O.pageX,O.pageY))):J===r.ZOOM&&!n.noZoom?M.copy(L(O.pageX,O.pageY)):J===r.PAN&&!n.noPan&&S.copy(L(O.pageX,O.pageY))}function Q(){c=r.NONE,n.dispatchEvent(ys)}function j(O){if(n.enabled!==!1&&n.noZoom!==!0){switch(O.preventDefault(),O.deltaMode){case 2:v.y-=O.deltaY*.025;break;case 1:v.y-=O.deltaY*.01;break;default:v.y-=O.deltaY*25e-5;break}n.dispatchEvent(_s),n.dispatchEvent(ys)}}function ie(O){switch(fe(O),b.length){case 1:c=r.TOUCH_ROTATE,p.copy(x(b[0].pageX,b[0].pageY)),g.copy(p);break;default:c=r.TOUCH_ZOOM_PAN;const J=b[0].pageX-b[1].pageX,me=b[0].pageY-b[1].pageY;f=u=Math.sqrt(J*J+me*me);const se=(b[0].pageX+b[1].pageX)/2,Pe=(b[0].pageY+b[1].pageY)/2;_.copy(L(se,Pe)),S.copy(_);break}n.dispatchEvent(_s)}function $(O){switch(fe(O),b.length){case 1:g.copy(p),p.copy(x(O.pageX,O.pageY));break;default:const J=G(O),me=O.pageX-J.x,se=O.pageY-J.y;f=Math.sqrt(me*me+se*se);const Pe=(O.pageX+J.x)/2,W=(O.pageY+J.y)/2;S.copy(L(Pe,W));break}}function I(O){switch(b.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,p.copy(x(O.pageX,O.pageY)),g.copy(p);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let J=0;J<b.length;J++)if(b[J].pointerId!==O.pointerId){const me=T[b[J].pointerId];p.copy(x(me.x,me.y)),g.copy(p);break}break}n.dispatchEvent(ys)}function V(O){n.enabled!==!1&&O.preventDefault()}function ee(O){b.push(O)}function re(O){delete T[O.pointerId];for(let J=0;J<b.length;J++)if(b[J].pointerId==O.pointerId){b.splice(J,1);return}}function fe(O){let J=T[O.pointerId];J===void 0&&(J=new ce,T[O.pointerId]=J),J.set(O.pageX,O.pageY)}function G(O){const J=O.pointerId===b[0].pointerId?b[1]:b[0];return T[J.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",le),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",U),window.removeEventListener("keydown",z),window.removeEventListener("keyup",R)},this.domElement.addEventListener("contextmenu",V),this.domElement.addEventListener("pointerdown",P),this.domElement.addEventListener("pointercancel",le),this.domElement.addEventListener("wheel",j,{passive:!1}),window.addEventListener("keydown",z),window.addEventListener("keyup",R),this.handleResize(),this.update()}}var ui=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return this.None(i)},Out:function(i){return this.None(i)},InOut:function(i){return this.None(i)}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var e=1.70158;return i===1?1:i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return i===0?0:--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}}),Bounce:Object.freeze({In:function(i){return 1-ui.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?ui.Bounce.In(i*2)*.5:ui.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(e){return Math.pow(e,i)},Out:function(e){return 1-Math.pow(1-e,i)},InOut:function(e){return e<.5?Math.pow(e*2,i)/2:(1-Math.pow(2-e*2,i))/2+.5}}}}),si=function(){return performance.now()},rl=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=si()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),Tn={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=Tn.Utils.Linear;return e<0?s(i[0],i[1],n):e>1?s(i[t],i[t-1],t-n):s(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,s=Tn.Utils.Bernstein,o=0;o<=n;o++)t+=r(1-e,n-o)*r(e,o)*i[o]*s(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=Tn.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),s(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(s(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(s(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):s(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=Tn.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var s=(t-i)*.5,o=(n-e)*.5,a=r*r,c=r*a;return(2*e-2*t+s+o)*c+(-3*e+3*t-2*s-o)*a+s*r+e}}},$s=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),Us=new rl,cm=function(){function i(e,t){t===void 0&&(t=Us),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ui.Linear.None,this._interpolationFunction=Tn.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=$s.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},i.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},i.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},i.prototype.start=function(e,t){if(e===void 0&&(e=si()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},i.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},i.prototype._setupProperties=function(e,t,n,r,s){for(var o in n){var a=e[o],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(n[o]);if(!(l==="undefined"||l==="function")){if(u){var f=n[o];if(f.length===0)continue;for(var h=[a],m=0,g=f.length;m<g;m+=1){var p=this._handleRelativeValue(a,f[m]);if(isNaN(p)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(p)}u&&(n[o]=h)}if((l==="object"||c)&&a&&!u){t[o]=c?[]:{};var d=a;for(var v in d)t[o][v]=d[v];r[o]=c?[]:{};var f=n[o];if(!this._isDynamic){var M={};for(var v in f)M[v]=f[v];n[o]=f=M}this._setupProperties(d,t[o],f,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),c||(t[o]*=1),u?r[o]=n[o].slice().reverse():r[o]=t[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=si()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=si()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return e===void 0&&(e=Us),this._group=e,this},i.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},i.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},i.prototype.easing=function(e){return e===void 0&&(e=ui.Linear.None),this._easingFunction=e,this},i.prototype.interpolation=function(e){return e===void 0&&(e=Tn.Linear),this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=si()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,a=n[s],c=Array.isArray(e[s]),l=Array.isArray(a),u=!c&&l;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}(),um="21.0.0",fm=$s.nextId,Bt=Us,hm=Bt.getAll.bind(Bt),dm=Bt.removeAll.bind(Bt),pm=Bt.add.bind(Bt),mm=Bt.remove.bind(Bt),gm=Bt.update.bind(Bt),Ft={Easing:ui,Group:rl,Interpolation:Tn,now:si,Sequence:$s,nextId:fm,Tween:cm,VERSION:um,getAll:hm,removeAll:dm,add:pm,remove:mm,update:gm},vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var sl={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(vm,function(){var t=function(){function n(m){return o.appendChild(m.dom),m}function r(m){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===m?"block":"none";s=m}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,u=n(new t.Panel("FPS","#0ff","#002")),f=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){l++;var m=(performance||Date).now();if(f.update(m-a,200),m>c+1e3&&(u.update(1e3*l/(m-c),100),c=m,l=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,s){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,f=48*l,h=3*l,m=2*l,g=3*l,p=15*l,d=74*l,v=30*l,M=document.createElement("canvas");M.width=u,M.height=f,M.style.cssText="width:80px;height:48px";var _=M.getContext("2d");return _.font="bold "+9*l+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=s,_.fillRect(0,0,u,f),_.fillStyle=r,_.fillText(n,h,m),_.fillRect(g,p,d,v),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g,p,d,v),{dom:M,update:function(S,b){o=Math.min(o,S),a=Math.max(a,S),_.fillStyle=s,_.globalAlpha=1,_.fillRect(0,0,u,p),_.fillStyle=r,_.fillText(c(S)+" "+n+" ("+c(o)+"-"+c(a)+")",h,m),_.drawImage(M,g+l,p,d-l,v,g,p,d-l,v),_.fillRect(g+d-l,p,l,v),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g+d-l,p,l,c((1-S/b)*v))}}},t})})(sl);var _m=sl.exports;const ym=xm(_m);var ea="http://localhost:8000/",Lr="b125b5d4ba6f4e619e84880fa7a9a74f",al="72f1c662c0644873a7622402af1b59fd",yr=null,Ui=null,un="long_term",_n=null,bs=null,Ss=null,ws=null,Ms=null,Vs=null;const bm="user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read user-top-read streaming user-read-playback-state user-read-recently-played playlist-read-private playlist-modify-private playlist-modify-public ugc-image-upload",Sm="https://accounts.spotify.com/authorize",wm="https://accounts.spotify.com/api/token",Mm="https://api.spotify.com/v1/me",Am="https://api.spotify.com/v1/me/top/tracks",Pm="https://api.spotify.com/v1/me/top/artists",Tm="https://api.spotify.com/v1/search?q=On%20Repeat&type=playlist",Em="https://api.spotify.com/v1/me/player/recently-played";function ol(){window.location.search.length>0?Lm():localStorage.getItem("access_token")!=null&&localStorage.getItem("refresh_token")!=null&&(yr=localStorage.getItem("access_token"),Ui=localStorage.getItem("refresh_token"),jm())}function Lm(){let i=Cm();Rm(i),window.history.pushState("","",ea)}function Cm(){let i=null;const e=window.location.search;return e.length>0&&(i=new URLSearchParams(e).get("code")),i}function Dm(){console.log("Req gestartet");let i=Sm;i+="?client_id="+Lr,i+="&response_type=code",i+="&redirect_uri="+encodeURI(ea),i+="&show_dialog=true",i+="&scope="+bm,window.location.href=i}function Rm(i){let e="grant_type=authorization_code";e+="&code="+i,e+="&redirect_uri="+encodeURI(ea),e+="&client_id="+Lr,e+="&client_secret="+al,ll(e)}function tn(){Ui=localStorage.getItem("refresh_token");let i="grant_type=refresh_token";i+="&refresh_token="+Ui,i+="&client_id="+Lr,ll(i)}function ll(i){let e=new XMLHttpRequest;e.open("POST",wm,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.setRequestHeader("Authorization","Basic "+btoa(Lr+":"+al)),e.send(i),e.onload=Nm}function Nm(){if(this.status==200){var i=JSON.parse(this.responseText);i.access_token!=null&&(yr=i.access_token,localStorage.setItem("access_token",yr)),i.refresh_token!=null&&(Ui=i.refresh_token,localStorage.setItem("refresh_token",Ui)),ol()}else console.log(this.responseText),alert(this.responseText)}function nn(i,e,t,n){let r=new XMLHttpRequest;r.open(i,e,!0),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Authorization","Bearer "+yr),r.send(t),r.onload=n}function zm(){if(this.status==200){var i=JSON.parse(this.responseText);_n={},_n.name=i.display_name,_n.imageUrl=i.images[1].url,_n.id=i.id,_n.follower=i.followers.total,_n.country=i.country,localStorage.setItem("myProfil",JSON.stringify(_n))}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Fm(){if(this.status==200){var i=JSON.parse(this.responseText);bs=[];for(let e=0;e<20;e++){let t=i.items[e],n={};n.id=t.id,n.uri=t.uri,n.name=t.name,n.albumName=t.album.name,n.imageUrl=t.album.images[1].url,n.artists=[],t.artists.forEach(r=>{let s={};s.id=r.id,s.name=r.name,n.artists.push(s)}),bs.push(n)}localStorage.setItem("topSongs",JSON.stringify(bs))}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Om(){if(this.status==200){var i=JSON.parse(this.responseText);Ss=[];for(let e=0;e<3;e++){let t=i.items[e],n={};n.id=t.id,n.name=t.name,n.imageUrl=t.images[1].url,Ss.push(n)}localStorage.setItem("topArtists",JSON.stringify(Ss))}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Im(){if(this.status==200){var i=JSON.parse(this.responseText);let e=i.playlists.items[0].id;nn("GET","https://api.spotify.com/v1/playlists/"+e,null,Hm)}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Hm(){if(this.status==200){var i=JSON.parse(this.responseText).tracks.items;ws=[];for(let e=0;e<i.length;e++){let t={},n=i[e].track;t.id=n.id,t.uri=n.uri,t.name=n.name,t.artists=[],n.artists.forEach(r=>{let s={};s.id=r.id,s.name=r.name,t.artists.push(s)}),t.image=n.album.images[1].url,ws.push(t)}localStorage.setItem("onRepeat",JSON.stringify(ws))}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Um(){if(this.status==200){var i=JSON.parse(this.responseText).items;Ms=[];for(let e=0;e<i.length;e++){let t={},n=i[e].track;t.id=n.id,t.uri=n.uri,t.name=n.name,t.artists=[],n.artists.forEach(r=>{let s={};s.id=r.id,s.name=r.name,t.artists.push(s)}),t.image=n.album.images[1].url,Ms.push(t)}localStorage.setItem("recentlyPlayed",JSON.stringify(Ms))}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Vm(){if(this.status==201){var i=JSON.parse(this.responseText);Vs=i.id,Ym(Vs)}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function km(){if(this.status==201){JSON.parse(this.responseText);let i="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";nn("PUT","https://api.spotify.com/v1/playlists/"+Vs+"/images",i,Bm)}else this.status==401?tn():(console.log(this.responseText),alert(this.responseText))}function Bm(){this.status==202?console.log("Cover erfolgreich hinzugefuegt."):this.status==401?tn():this.status==503?console.log("Service ist aktuell nicht verfuegbar. Cover konnte nicht geladen werden."):(console.log(this.responseText),alert(this.responseText))}function Gm(){nn("GET",Mm,null,zm)}function Cr(){nn("GET",Am+"?time_range="+un,null,Fm)}function Dr(){nn("GET",Pm+"?time_range="+un,null,Om)}function Wm(){nn("GET",Tm,null,Im)}function Xm(){nn("GET",Em,null,Um)}function jm(){Gm(),Cr(),Dr(),Wm(),Xm()}function qm(){un="long_term",Dr(),Cr(),console.log("time range: Long")}function Km(){un="medium_term",Dr(),Cr(),console.log("time range: Medium")}function Zm(){un="short_term",Dr(),Cr(),console.log("time range: Short")}function Jm(){let i=JSON.parse(localStorage.getItem("myProfil")).id,e=JSON.parse(localStorage.getItem("myProfil")).name+"s Spotify Festival 2023",t="deiner Spotify Erfahrung";un=="long_term"&&(t="deiner gesamten Spotify Erfahrung"),un=="medium_term"&&(t="den letzten 6 Monaten deiner Spotify Erfahrung"),un=="short_term"&&(t="den letzten 4 Wochen deiner Spotify Erfahrung");let n={name:e,description:"Deine Playlist zum Spotify Festival 2023 basierend auf "+t+".",public:"false"};nn("POST","https://api.spotify.com/v1/users/"+i+"/playlists",JSON.stringify(n),Vm)}function Ym(i){let e=[];for(let n=0;n<20;n++){let r=JSON.parse(localStorage.getItem("topSongs"));e.push(r[n].uri)}for(let n=0;n<20;n++){let r=JSON.parse(localStorage.getItem("onRepeat"))[n].uri;e.includes(r)||e.push(r)}for(let n=e.length-1;n>0;n--){let r=Math.floor(Math.random()*(n+1)),s=e[n];e[n]=e[r],e[r]=s}let t={uris:e};nn("POST","https://api.spotify.com/v1/playlists/"+i+"/tracks",JSON.stringify(t),km)}let yn,Vi,ke,ln,It,ks,Cn,ti,wn;var dr=!1,As=!1,Bs=!0;const Ee={},Dt=400,Qn=Dt/2,Rt=100,$n=Rt/1.2,Gs=.3,pr=.02,So=10,cl=100,ta=new ym;document.body.appendChild(ta.dom);const wo=new nm;let Ws=new ce;window.addEventListener("mousemove",i=>{Ws.x=i.clientX/window.innerWidth*2-1,Ws.y=-(i.clientY/window.innerHeight)*2+1},!1);const ai={};Qm();function Qm(){ol(),yn={width:window.innerWidth,height:window.innerHeight},document.querySelector("canvas.webgl"),Vi=new gp,ke=new Pt(75,yn.width/yn.height),ke.position.z=3e3,ke.far=10,ke.focus=1e3,Vi.add(ke),ks=ke.position.z,Ee.profil=ke.position.z-ke.position.z/6,Ee.topArtist=ke.position.z-2*(ke.position.z/6),Ee.topSong=ke.position.z-3*(ke.position.z/6),Ee.onRepeat=ke.position.z-4*(ke.position.z/6),Ee.playlist=ke.position.z-5*(ke.position.z/6),ai.x=0,ai.y=0,ln=new Jo({antialias:!0,alpha:!0}),ln.setClearColor(16777215,0),ln.setPixelRatio(window.devicePixelRatio),ln.setSize(yn.width,yn.height),document.body.appendChild(ln.domElement),It=new Hi(ke,ln.domElement),It.noRotate=!0,It.noPan=!0,It.noZoom=!1,It.zoomSpeed=Gs,It.staticMoving=!1,It.dynamicDampingFactor=.04,window.addEventListener("resize",rg),document.getElementById("closebtn").addEventListener("click",ng),document.getElementById("help").addEventListener("click",ig),document.getElementById("delete").addEventListener("click",Po),document.getElementById("create").addEventListener("click",Ps),document.getElementById("auth").addEventListener("click",Dm),document.getElementById("playlist").addEventListener("click",Jm),document.getElementById("navPlaylist").addEventListener("click",i=>{Pi(i.target)}),document.getElementById("navOnRepeat").addEventListener("click",i=>{Pi(i.target)}),document.getElementById("navSongs").addEventListener("click",i=>{Pi(i.target)}),document.getElementById("navArtists").addEventListener("click",i=>{Pi(i.target)}),document.getElementById("navProfil").addEventListener("click",i=>{Pi(i.target)}),document.getElementById("timeRange").addEventListener("change",function(){Po(),this.value=="long_term"&&qm(),this.value=="medium_term"&&Km(),this.value=="short_term"&&Zm(),setTimeout(function(){Ps()},250)}),window.addEventListener("mousemove",i=>{ai.x=i.clientX/yn.width-.5,ai.y=i.clientY/yn.height-.5}),localStorage.getItem("access_token")!=null&&Ps()}function ul(){return JSON.parse(localStorage.getItem("myProfil"))||[]}function $m(){return JSON.parse(localStorage.getItem("recentlyPlayed"))||[]}function eg(){return JSON.parse(localStorage.getItem("topArtists"))||[]}function tg(){return JSON.parse(localStorage.getItem("onRepeat"))||[]}function ng(){document.getElementById("overlay").style.display="none"}function ig(){document.getElementById("overlay").style.display="block"}function rg(){ke.aspect=window.innerWidth/window.innerHeight,ke.updateProjectionMatrix(),ln.setSize(window.innerWidth,window.innerHeight)}function sg(){const i=Math.round(ke.position.z);i<=Ee.profil+Dt&&i>=Ee.profil-Rt&&mr(i,Ee.profil),i<=Ee.topArtist+Dt&&i>=Ee.topArtist-Rt&&mr(i,Ee.topArtist),i<=Ee.topSong+Dt&&i>=Ee.topSong-Rt&&mr(i,Ee.topSong),i<=Ee.playlist+Dt&&i>=Ee.playlist-Rt&&mr(i,Ee.playlist)}function mr(i,e){i<=e+Dt&&i>=e+Dt-Qn&&(It.zoomSpeed=pr+(i-(e+Dt-Qn))*((pr-Gs)/-Qn)),i<=e+Dt-Qn&&i>=e-Rt+$n&&(dr||(dr=!0),i<=e+Dt-Qn-So&&i>=e-Rt+$n+So&&!As&&(As=!0,Hi.noZoom=!0,new Ft.Tween(ke.position).to({z:e+cl},5e3).easing(Ft.Easing.Exponential.Out).start().onComplete(()=>{Hi.noZoom=!1}))),(i>e+Dt-Qn||i<e-Rt+$n)&&dr&&(dr=!1,As=!1),i>=e-Rt&&i<=e-Rt+$n&&(It.zoomSpeed=pr-(i-(e-Rt+$n))*((pr-Gs)/-$n))}function Pi(i){let e;i.id=="navPlaylist"?e=Ee.playlist:i.id=="navOnRepeat"?e=Ee.onRepeat:i.id=="navSongs"?e=Ee.topSong:i.id=="navArtists"?e=Ee.topArtist:i.id=="navProfil"&&(e=Ee.profil),e+=cl,Bs=!1,Hi.noZoom=!0,new Ft.Tween(ke.position).to({z:e},5e3).easing(Ft.Easing.Exponential.Out).start().onComplete(()=>{Hi.noZoom=!1,Bs=!0})}const ag=new tm;let Mo=0;function og(i){i.isHovered||(new Ft.Tween(i.position).to({z:i.position.z+40},300).easing(Ft.Easing.Exponential.Out).start(),i.isHovered=!0),wn=i}function Ao(i){new Ft.Tween(i.position).to({z:i.position.z-40},300).easing(Ft.Easing.Exponential.Out).start(),i.isHovered=!1}const fl=()=>{ta.begin();const i=ag.getElapsedTime(),e=i-Mo;Mo=i;const t=ai.x*50,n=-ai.y*50;ke.position.x+=(t-ke.position.x)*5*e,ke.position.y+=(n-ke.position.y)*5*e,ks!=Math.round(ke.position.z)&&Bs&&sg(),ks=Math.round(ke.position.z),wo.setFromCamera(Ws,ke);let r=wo.intersectObjects(ti.children);r.length>0?(wn&&wn!==r[0].object&&Ao(wn),og(r[0].object)):wn&&(Ao(wn),wn=null),It.update(),Ft.update(),ln.render(Vi,ke),window.requestAnimationFrame(fl)};function dt(i,e,t,n,r){new rm().load("/fonts/W95FA_Regular.typeface.json",o=>{const a=new lm(i,{font:o,size:e,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:5}),c=new Mr;let l=new Vt(a,c);Cn.add(l),l.position.x=t,l.position.y=n,l.position.z=r})}ta.end();function Ut(i,e,t,n,r,s){const o=new em().load(i),a=new Ar(s,s),c=new Mr({map:o,side:br});let l=new Vt(a,c);return Cn.add(l),l.position.x=e,l.position.y=t,l.position.z=n,l.rotateY(r*(Math.PI/180)),l.isHovered=!1,l}function lg(){let i=ul(),e=$m(),t=0;Ut(i.imageUrl,80,0,Ee.profil,t,50),dt(`Hey 
`+i.name+" !",10,-80,30,Ee.profil),dt("Followers: "+i.follower.toString(),3,55,-30,Ee.profil);let n=-80,r=-17,s=2,o=25,a=0;dt("Recently Played Songs",5,n,r,Ee.profil),Ut(e[0].image,n+13,r-18,Ee.profil,a,o),dt(e[0].name,s,n+1,r-34,Ee.profil),Ut(e[1].image,n+43,r-18,Ee.profil,a,o),dt(e[1].name,s,n+31,r-34,Ee.profil),Ut(e[2].image,n+13,r-48,Ee.profil,a,o),dt(e[2].name,s,n+1,r-64,Ee.profil),Ut(e[3].image,n+43,r-48,Ee.profil,a,o),dt(e[3].name,s,n+31,r-64,Ee.profil)}function cg(){let i=ul(),e=eg(),t=0;for(console.log("createTopArtists, hier sind sie: "+e),console.log("Diese Profil gehört: "+i.name),dt(i.name+"'s",20,-300,110,Ee.topArtist-200),dt(`
Top Artists`,40,-300,110,Ee.topArtist-200);t<e.length;){let n=100+t*-15,r=-60+t*25,s=Ee.topArtist-(100+t*55),o=Ut(e[t].imageUrl,n,r,s,0,65);e[t].mesh=o,dt(e[t].name,5,n+45,r+17,s),t++}}function ug(){const i=tg();ti=new ii,ti.position.z=Ee.onRepeat,Vi.add(ti),Cn.add(ti);const e=i.length;let t=250,n={x:0,y:0,z:0};const r=[];for(let s=0;s<e;s++){let o=2*Math.PI/e*s,a=n.x+t*Math.cos(o),c=n.y+t*Math.sin(o),l=n.z;const u={x:a,y:c,z:l};r.push(u);let f=Ut(i[s].image,r[s].x,r[s].y,r[s].z,25,100);i[s].mesh=f,f.userData.name=i[s].name,ti.add(f)}dt(`Your 
Heavy Rotation`,40,-200,0,Ee.onRepeat-300)}function fg(){let i;if(localStorage.getItem("topSongs")==null){console.log("Top Songs noch nicht ermittelt.");return}else i=JSON.parse(localStorage.getItem("topSongs"));dt("Deine Top 3 Songs",5,-55,15,Ee.topSong),Ut(i[0].imageUrl,0,0,Ee.topSong,0,20),dt("1: "+i[0].name,2,-10,-15,Ee.topSong),Ut(i[1].imageUrl,-30,-5,Ee.topSong,0,20),dt("2: "+i[1].name,2,-40,-20,Ee.topSong),Ut(i[2].imageUrl,30,-10,Ee.topSong,0,20),dt("3: "+i[2].name,2,20,-25,Ee.topSong)}function Ps(){Cn=new ii,Cn.name="inhaltGroup",lg(),cg(),ug(),fg(),Vi.add(Cn)}function Po(){hl(Cn)}function hl(i){for(;i.children.length>0;)hl(i.children[0]),i.remove(i.children[0]);i.geometry&&i.geometry.dispose(),i.material&&(Object.keys(i.material).forEach(e=>{i.material[e]&&i.material[e]!==null&&typeof i.material[e].dispose=="function"&&i.material[e].dispose()}),i.material.dispose())}fl()});export default hg();
//# sourceMappingURL=index-4ac02102.js.map
