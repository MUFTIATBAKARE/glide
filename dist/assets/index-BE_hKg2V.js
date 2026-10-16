var Oo=Object.defineProperty;var Bo=(i,e,t)=>e in i?Oo(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var q=(i,e,t)=>Bo(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rs="160",zo=0,Ss=1,Go=2,ja=1,ko=2,Jt=3,mn=0,Tt=1,Qt=2,un=0,Qn=1,Xr=2,Es=3,ys=4,Ho=5,bn=100,Vo=101,Wo=102,bs=103,Ts=104,Xo=200,qo=201,Yo=202,Ko=203,qr=204,Yr=205,jo=206,Zo=207,$o=208,Jo=209,Qo=210,el=211,tl=212,nl=213,il=214,rl=0,sl=1,al=2,Zi=3,ol=4,ll=5,cl=6,hl=7,Za=0,dl=1,ul=2,fn=0,fl=1,pl=2,ml=3,gl=4,_l=5,xl=6,$a=300,ti=301,ni=302,Kr=303,jr=304,sr=306,Zr=1e3,Gt=1001,$r=1002,St=1003,ws=1004,mr=1005,Lt=1006,vl=1007,xi=1008,pn=1009,Ml=1010,Sl=1011,ss=1012,Ja=1013,hn=1014,dn=1015,vi=1016,Qa=1017,eo=1018,Rn=1020,El=1021,kt=1023,yl=1024,bl=1025,Cn=1026,ii=1027,Tl=1028,to=1029,wl=1030,no=1031,io=1033,gr=33776,_r=33777,xr=33778,vr=33779,As=35840,Rs=35841,Cs=35842,Ls=35843,ro=36196,Ps=37492,Ds=37496,Us=37808,Is=37809,Ns=37810,Fs=37811,Os=37812,Bs=37813,zs=37814,Gs=37815,ks=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,qs=37821,Mr=36492,Ys=36494,Ks=36495,Al=36283,js=36284,Zs=36285,$s=36286,so=3e3,Ln=3001,Rl=3200,Cl=3201,ao=0,Ll=1,It="",ut="srgb",nn="srgb-linear",as="display-p3",ar="display-p3-linear",$i="linear",Ze="srgb",Ji="rec709",Qi="p3",In=7680,Js=519,Pl=512,Dl=513,Ul=514,oo=515,Il=516,Nl=517,Fl=518,Ol=519,Qs=35044,ea="300 es",Jr=1035,en=2e3,er=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ta=1234567;const mi=Math.PI/180,Mi=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function os(i,e){return(i%e+e)%e}function Bl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function zl(i,e,t){return i!==e?(t-i)/(e-i):0}function gi(i,e,t){return(1-t)*i+t*e}function Gl(i,e,t,n){return gi(i,e,1-Math.exp(-t*n))}function kl(i,e=1){return e-Math.abs(os(i,e*2)-e)}function Hl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xl(i,e){return i+Math.random()*(e-i)}function ql(i){return i*(.5-Math.random())}function Yl(i){i!==void 0&&(ta=i);let e=ta+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kl(i){return i*mi}function jl(i){return i*Mi}function Qr(i){return(i&i-1)===0&&i!==0}function Zl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $l(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),p=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const na={DEG2RAD:mi,RAD2DEG:Mi,generateUUID:ai,clamp:Et,euclideanModulo:os,mapLinear:Bl,inverseLerp:zl,lerp:gi,damp:Gl,pingpong:kl,smoothstep:Hl,smootherstep:Vl,randInt:Wl,randFloat:Xl,randFloatSpread:ql,seededRandom:Yl,degToRad:Kl,radToDeg:jl,isPowerOfTwo:Qr,ceilPowerOfTwo:Zl,floorPowerOfTwo:tr,setQuaternionFromProperEuler:$l,normalize:vt,denormalize:Zn};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],_=n[8],g=r[0],f=r[3],d=r[6],E=r[1],M=r[4],T=r[7],R=r[2],w=r[5],A=r[8];return s[0]=o*g+a*E+l*R,s[3]=o*f+a*M+l*w,s[6]=o*d+a*T+l*A,s[1]=c*g+h*E+u*R,s[4]=c*f+h*M+u*w,s[7]=c*d+h*T+u*A,s[2]=p*g+m*E+_*R,s[5]=p*f+m*M+_*w,s[8]=p*d+m*T+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*s,m=c*s-o*l,_=t*u+n*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=p*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new ze;function lo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jl(){const i=nr("canvas");return i.style.display="block",i}const ia={};function _i(i){i in ia||(ia[i]=!0,console.warn(i))}const ra=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sa=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ti={[nn]:{transfer:$i,primaries:Ji,toReference:i=>i,fromReference:i=>i},[ut]:{transfer:Ze,primaries:Ji,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ar]:{transfer:$i,primaries:Qi,toReference:i=>i.applyMatrix3(sa),fromReference:i=>i.applyMatrix3(ra)},[as]:{transfer:Ze,primaries:Qi,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sa),fromReference:i=>i.applyMatrix3(ra).convertLinearToSRGB()}},Ql=new Set([nn,ar]),qe={enabled:!0,_workingColorSpace:nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ql.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ti[e].toReference,r=Ti[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ti[i].primaries},getTransfer:function(i){return i===It?$i:Ti[i].transfer}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Nn;class co{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Nn===void 0&&(Nn=nr("canvas")),Nn.width=e.width,Nn.height=e.height;const n=Nn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Nn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ec=0;class ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yr(r[o].image)):s.push(yr(r[o]))}else s=yr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tc=0;class wt extends si{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Gt,r=Gt,s=Lt,o=xi,a=kt,l=pn,c=wt.DEFAULT_ANISOTROPY,h=It){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=ai(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ln?ut:It),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$a)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Ln:so}set encoding(e){_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?ut:It}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=$a;wt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],g=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(m+1)/2,R=(d+1)/2,w=(h+p)/4,A=(u+g)/4,B=(_+f)/4;return M>T&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=A/n):T>R?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=w/r,s=B/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=A/s,r=B/s),this.set(n,r,s,t),this}let E=Math.sqrt((f-_)*(f-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(f-_)/E,this.y=(u-g)/E,this.z=(p-h)/E,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nc extends si{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?ut:It),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uo extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==p||c!==m||h!==_){let f=1-a;const d=l*p+c*m+h*_+u*g,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,d*E);f=Math.sin(f*w)/R,a=Math.sin(a*w)/R}const T=a*E;if(l=l*f+p*T,c=c*f+m*T,h=h*f+_*T,u=u*f+g*T,f===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*m-c*p,e[t+1]=l*_+h*p+c*u-a*m,e[t+2]=c*_+h*m+a*p-l*u,e[t+3]=h*_-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),p=l(n/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"YZX":this._x=p*h*u+c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u-p*m*_;break;case"XZY":this._x=p*h*u-c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new P,aa=new Si;class Ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(s,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wi.copy(n.boundingBox)),wi.applyMatrix4(e.matrixWorld),this.union(wi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(di),Ai.subVectors(this.max,di),Fn.subVectors(e.a,di),On.subVectors(e.b,di),Bn.subVectors(e.c,di),rn.subVectors(On,Fn),sn.subVectors(Bn,On),xn.subVectors(Fn,Bn);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-xn.z,xn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,xn.z,0,-xn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-xn.y,xn.x,0];return!Tr(t,Fn,On,Bn,Ai)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,Fn,On,Bn,Ai))?!1:(Ri.crossVectors(rn,sn),t=[Ri.x,Ri.y,Ri.z],Tr(t,Fn,On,Bn,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new P,new P,new P,new P,new P,new P,new P,new P],Nt=new P,wi=new Ei,Fn=new P,On=new P,Bn=new P,rn=new P,sn=new P,xn=new P,di=new P,Ai=new P,Ri=new P,vn=new P;function Tr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vn.fromArray(i,s);const a=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rc=new Ei,ui=new P,wr=new P;class or{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ui,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(wr)),this.expandByPoint(ui.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new P,Ar=new P,Ci=new P,an=new P,Rr=new P,Li=new P,Cr=new P;class fo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ar.copy(e).add(t).multiplyScalar(.5),Ci.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Ar);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ci),a=an.dot(this.direction),l=-an.dot(Ci),c=an.lengthSq(),h=Math.abs(1-o*o);let u,p,m,_;if(h>0)if(u=o*l-a,p=o*a-l,_=s*h,u>=0)if(p>=-_)if(p<=_){const g=1/h;u*=g,p*=g,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ar).addScaledVector(Ci,p),m}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const n=Yt.dot(this.direction),r=Yt.dot(Yt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,r,s){Rr.subVectors(t,e),Li.subVectors(n,e),Cr.crossVectors(Rr,Li);let o=this.direction.dot(Cr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);const l=a*this.direction.dot(Li.crossVectors(an,Li));if(l<0)return null;const c=a*this.direction.dot(Rr.cross(an));if(c<0||l+c>o)return null;const h=-a*an.dot(Cr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,o,a,l,c,h,u,p,m,_,g,f){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,p,m,_,g,f)}set(e,t,n,r,s,o,a,l,c,h,u,p,m,_,g,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=_,d[11]=g,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),o=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+_*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,_=c*h,g=c*u;t[0]=p+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,_=c*h,g=c*u;t[0]=p-g*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-m,t[8]=p*c+g,t[1]=l*u,t[5]=g*c+p,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-p*u,t[8]=_*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+_,t[10]=p-g*u}else if(e.order==="XZY"){const p=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+g,t[5]=o*h,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*h,t[10]=g*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sc,e,ac)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),on.crossVectors(n,Rt),on.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),on.crossVectors(n,Rt)),on.normalize(),Pi.crossVectors(Rt,on),r[0]=on.x,r[4]=Pi.x,r[8]=Rt.x,r[1]=on.y,r[5]=Pi.y,r[9]=Rt.y,r[2]=on.z,r[6]=Pi.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],_=n[2],g=n[6],f=n[10],d=n[14],E=n[3],M=n[7],T=n[11],R=n[15],w=r[0],A=r[4],B=r[8],v=r[12],y=r[1],z=r[5],G=r[9],Z=r[13],L=r[2],U=r[6],V=r[10],Y=r[14],W=r[3],X=r[7],K=r[11],te=r[15];return s[0]=o*w+a*y+l*L+c*W,s[4]=o*A+a*z+l*U+c*X,s[8]=o*B+a*G+l*V+c*K,s[12]=o*v+a*Z+l*Y+c*te,s[1]=h*w+u*y+p*L+m*W,s[5]=h*A+u*z+p*U+m*X,s[9]=h*B+u*G+p*V+m*K,s[13]=h*v+u*Z+p*Y+m*te,s[2]=_*w+g*y+f*L+d*W,s[6]=_*A+g*z+f*U+d*X,s[10]=_*B+g*G+f*V+d*K,s[14]=_*v+g*Z+f*Y+d*te,s[3]=E*w+M*y+T*L+R*W,s[7]=E*A+M*z+T*U+R*X,s[11]=E*B+M*G+T*V+R*K,s[15]=E*v+M*Z+T*Y+R*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],_=e[3],g=e[7],f=e[11],d=e[15];return _*(+s*l*u-r*c*u-s*a*p+n*c*p+r*a*m-n*l*m)+g*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*h-s*l*h)+f*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*h-n*c*h)+d*(-r*a*h-t*l*u+t*a*p+r*o*u-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],_=e[12],g=e[13],f=e[14],d=e[15],E=u*f*c-g*p*c+g*l*m-a*f*m-u*l*d+a*p*d,M=_*p*c-h*f*c-_*l*m+o*f*m+h*l*d-o*p*d,T=h*g*c-_*u*c+_*a*m-o*g*m-h*a*d+o*u*d,R=_*u*l-h*g*l-_*a*p+o*g*p+h*a*f-o*u*f,w=t*E+n*M+r*T+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(g*p*s-u*f*s-g*r*m+n*f*m+u*r*d-n*p*d)*A,e[2]=(a*f*s-g*l*s+g*r*c-n*f*c-a*r*d+n*l*d)*A,e[3]=(u*l*s-a*p*s-u*r*c+n*p*c+a*r*m-n*l*m)*A,e[4]=M*A,e[5]=(h*f*s-_*p*s+_*r*m-t*f*m-h*r*d+t*p*d)*A,e[6]=(_*l*s-o*f*s-_*r*c+t*f*c+o*r*d-t*l*d)*A,e[7]=(o*p*s-h*l*s+h*r*c-t*p*c-o*r*m+t*l*m)*A,e[8]=T*A,e[9]=(_*u*s-h*g*s-_*n*m+t*g*m+h*n*d-t*u*d)*A,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*d+t*a*d)*A,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*A,e[12]=R*A,e[13]=(h*g*r-_*u*r+_*n*p-t*g*p-h*n*f+t*u*f)*A,e[14]=(_*a*r-o*g*r-_*n*l+t*g*l+o*n*f-t*a*f)*A,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,p=s*c,m=s*h,_=s*u,g=o*h,f=o*u,d=a*u,E=l*c,M=l*h,T=l*u,R=n.x,w=n.y,A=n.z;return r[0]=(1-(g+d))*R,r[1]=(m+T)*R,r[2]=(_-M)*R,r[3]=0,r[4]=(m-T)*w,r[5]=(1-(p+d))*w,r[6]=(f+E)*w,r[7]=0,r[8]=(_+M)*A,r[9]=(f-E)*A,r[10]=(1-(p+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zn.set(r[0],r[1],r[2]).length();const o=zn.set(r[4],r[5],r[6]).length(),a=zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ft.copy(this);const c=1/s,h=1/o,u=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=h,Ft.elements[5]*=h,Ft.elements[6]*=h,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=en){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let m,_;if(a===en)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===er)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=en){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),p=(t+e)*c,m=(n+r)*h;let _,g;if(a===en)_=(o+s)*u,g=-2*u;else if(a===er)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new P,Ft=new rt,sc=new P(0,0,0),ac=new P(1,1,1),on=new P,Pi=new P,Rt=new P,oa=new rt,la=new Si;class lr{constructor(e=0,t=0,n=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return la.setFromEuler(this),this.setFromQuaternion(la,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oc=0;const ca=new P,Gn=new Si,Kt=new rt,Di=new P,fi=new P,lc=new P,cc=new Si,ha=new P(1,0,0),da=new P(0,1,0),ua=new P(0,0,1),hc={type:"added"},dc={type:"removed"};class dt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new P,t=new lr,n=new Si,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(da,e)}rotateZ(e){return this.rotateOnAxis(ua,e)}translateOnAxis(e,t){return ca.copy(e).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(da,e)}translateZ(e){return this.translateOnAxis(ua,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(fi,Di,this.up):Kt.lookAt(Di,fi,this.up),this.quaternion.setFromRotationMatrix(Kt),r&&(Kt.extractRotation(r.matrixWorld),Gn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,e,lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,cc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new P,jt=new P,Lr=new P,Zt=new P,kn=new P,Hn=new P,fa=new P,Pr=new P,Dr=new P,Ur=new P;let Ui=!1;class zt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ot.subVectors(r,t),jt.subVectors(n,t),Lr.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(jt),l=Ot.dot(Lr),c=jt.dot(jt),h=jt.dot(Lr),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(c*l-a*h)*p,_=(o*h-a*l)*p;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt)===null?!1:Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,r,s,o,a,l){return Ui===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ui=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Zt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zt.x),l.addScaledVector(o,Zt.y),l.addScaledVector(a,Zt.z),l)}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),jt.subVectors(e,t),Ot.cross(jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ot.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ui===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ui=!0),zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;kn.subVectors(r,n),Hn.subVectors(s,n),Pr.subVectors(e,n);const l=kn.dot(Pr),c=Hn.dot(Pr);if(l<=0&&c<=0)return t.copy(n);Dr.subVectors(e,r);const h=kn.dot(Dr),u=Hn.dot(Dr);if(h>=0&&u<=h)return t.copy(r);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(kn,o);Ur.subVectors(e,s);const m=kn.dot(Ur),_=Hn.dot(Ur);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Hn,a);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return fa.subVectors(s,r),a=(u-h)/(u-h+(m-_)),t.copy(r).addScaledVector(fa,a);const d=1/(f+g+p);return o=g*d,a=p*d,t.copy(n).addScaledVector(kn,o).addScaledVector(Hn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function Ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qe.workingColorSpace){if(e=os(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ir(o,s,e+1/3),this.g=Ir(o,s,e),this.b=Ir(o,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=mo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return qe.fromWorkingColorSpace(mt.copy(this),e),Math.round(Et(mt.r*255,0,255))*65536+Math.round(Et(mt.g*255,0,255))*256+Math.round(Et(mt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=ut){qe.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ln),this.setHSL(ln.h+e,ln.s+t,ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Ii);const n=gi(ln.h,Ii.h,t),r=gi(ln.s,Ii.s,t),s=gi(ln.l,Ii.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new _e;_e.NAMES=mo;let uc=0;class oi extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Qn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(n.stencilFail=this.stencilFail),this.stencilZFail!==In&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new P,Ni=new ke;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ni.fromBufferAttribute(this,t),Ni.applyMatrix3(e),this.setXY(t,Ni.x,Ni.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qs&&(e.usage=this.usage),e}}class go extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _o extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fc=0;const Dt=new rt,Nr=new dt,Vn=new P,Ct=new Ei,pi=new Ei,ct=new P;class bt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lo(e)?_o:go)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Ct.min,pi.min),Ct.expandByPoint(ct),ct.addVectors(Ct.max,pi.max),Ct.expandByPoint(ct)):(Ct.expandByPoint(pi.min),Ct.expandByPoint(pi.max))}Ct.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ct.fromBufferAttribute(a,c),l&&(Vn.fromBufferAttribute(e,c),ct.add(Vn)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<a;y++)c[y]=new P,h[y]=new P;const u=new P,p=new P,m=new P,_=new ke,g=new ke,f=new ke,d=new P,E=new P;function M(y,z,G){u.fromArray(r,y*3),p.fromArray(r,z*3),m.fromArray(r,G*3),_.fromArray(o,y*2),g.fromArray(o,z*2),f.fromArray(o,G*2),p.sub(u),m.sub(u),g.sub(_),f.sub(_);const Z=1/(g.x*f.y-f.x*g.y);isFinite(Z)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(Z),E.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(Z),c[y].add(d),c[z].add(d),c[G].add(d),h[y].add(E),h[z].add(E),h[G].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,z=T.length;y<z;++y){const G=T[y],Z=G.start,L=G.count;for(let U=Z,V=Z+L;U<V;U+=3)M(n[U+0],n[U+1],n[U+2])}const R=new P,w=new P,A=new P,B=new P;function v(y){A.fromArray(s,y*3),B.copy(A);const z=c[y];R.copy(z),R.sub(A.multiplyScalar(A.dot(z))).normalize(),w.crossVectors(B,z);const Z=w.dot(h[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=Z}for(let y=0,z=T.length;y<z;++y){const G=T[y],Z=G.start,L=G.count;for(let U=Z,V=Z+L;U<V;U+=3)v(n[U+0]),v(n[U+1]),v(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let d=0;d<h;d++)p[_++]=c[m++]}return new yt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new rt,Mn=new fo,Fi=new or,ma=new P,Wn=new P,Xn=new P,qn=new P,Fr=new P,Oi=new P,Bi=new ke,zi=new ke,Gi=new ke,ga=new P,_a=new P,xa=new P,ki=new P,Hi=new P;class Xe extends dt{constructor(e=new bt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Fr.fromBufferAttribute(u,e),o?Oi.addScaledVector(Fr,h):Oi.addScaledVector(Fr.sub(t),h))}t.add(Oi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(s),Mn.copy(e.ray).recast(e.near),!(Fi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Fi,ma)===null||Mn.origin.distanceToSquared(ma)>(e.far-e.near)**2))&&(pa.copy(s).invert(),Mn.copy(e.ray).applyMatrix4(pa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const f=p[_],d=o[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,R=M;T<R;T+=3){const w=a.getX(T),A=a.getX(T+1),B=a.getX(T+2);r=Vi(this,d,e,n,c,h,u,w,A,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=_,d=g;f<d;f+=3){const E=a.getX(f),M=a.getX(f+1),T=a.getX(f+2);r=Vi(this,o,e,n,c,h,u,E,M,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const f=p[_],d=o[f.materialIndex],E=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,R=M;T<R;T+=3){const w=T,A=T+1,B=T+2;r=Vi(this,d,e,n,c,h,u,w,A,B),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=_,d=g;f<d;f+=3){const E=f,M=f+1,T=f+2;r=Vi(this,o,e,n,c,h,u,E,M,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function pc(i,e,t,n,r,s,o,a){let l;if(e.side===Tt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===mn,a),l===null)return null;Hi.copy(a),Hi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hi);return c<t.near||c>t.far?null:{distance:c,point:Hi.clone(),object:i}}function Vi(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Wn),i.getVertexPosition(l,Xn),i.getVertexPosition(c,qn);const h=pc(i,e,t,n,Wn,Xn,qn,ki);if(h){r&&(Bi.fromBufferAttribute(r,a),zi.fromBufferAttribute(r,l),Gi.fromBufferAttribute(r,c),h.uv=zt.getInterpolation(ki,Wn,Xn,qn,Bi,zi,Gi,new ke)),s&&(Bi.fromBufferAttribute(s,a),zi.fromBufferAttribute(s,l),Gi.fromBufferAttribute(s,c),h.uv1=zt.getInterpolation(ki,Wn,Xn,qn,Bi,zi,Gi,new ke),h.uv2=h.uv1),o&&(ga.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),xa.fromBufferAttribute(o,c),h.normal=zt.getInterpolation(ki,Wn,Xn,qn,ga,_a,xa,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};zt.getNormal(Wn,Xn,qn,u.normal),h.face=u}return h}class li extends bt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function _(g,f,d,E,M,T,R,w,A,B,v){const y=T/A,z=R/B,G=T/2,Z=R/2,L=w/2,U=A+1,V=B+1;let Y=0,W=0;const X=new P;for(let K=0;K<V;K++){const te=K*z-Z;for(let ne=0;ne<U;ne++){const H=ne*y-G;X[g]=H*E,X[f]=te*M,X[d]=L,c.push(X.x,X.y,X.z),X[g]=0,X[f]=0,X[d]=w>0?1:-1,h.push(X.x,X.y,X.z),u.push(ne/A),u.push(1-K/B),Y+=1}}for(let K=0;K<B;K++)for(let te=0;te<A;te++){const ne=p+te+U*K,H=p+te+U*(K+1),j=p+(te+1)+U*(K+1),oe=p+(te+1)+U*K;l.push(ne,H,oe),l.push(H,j,oe),W+=6}a.addGroup(m,W,v),m+=W,p+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=ri(i[t]);for(const r in n)e[r]=n[r]}return e}function mc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xo(i){return i.getRenderTarget()===null?i.outputColorSpace:qe.workingColorSpace}const gc={clone:ri,merge:Mt};var _c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_c,this.fragmentShader=xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=mc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vo extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=en}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(mi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=-90,Kn=1;class vc extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(Yn,Kn,e,t);r.layers=this.layers,this.add(r);const s=new Ut(Yn,Kn,e,t);s.layers=this.layers,this.add(s);const o=new Ut(Yn,Kn,e,t);o.layers=this.layers,this.add(o);const a=new Ut(Yn,Kn,e,t);a.layers=this.layers,this.add(a);const l=new Ut(Yn,Kn,e,t);l.layers=this.layers,this.add(l);const c=new Ut(Yn,Kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Mo extends wt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ti,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mc extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?ut:It),this.texture=new Mo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new li(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:un});s.uniforms.tEquirect.value=t;const o=new Xe(r,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Lt),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Or=new P,Sc=new P,Ec=new ze;class En{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Or.subVectors(n,t).cross(Sc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Or),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ec.getNormalMatrix(e),r=this.coplanarPoint(Or).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new or,Wi=new P;class ls{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,o=new En){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],p=r[7],m=r[8],_=r[9],g=r[10],f=r[11],d=r[12],E=r[13],M=r[14],T=r[15];if(n[0].setComponents(l-s,p-c,f-m,T-d).normalize(),n[1].setComponents(l+s,p+c,f+m,T+d).normalize(),n[2].setComponents(l+o,p+h,f+_,T+E).normalize(),n[3].setComponents(l-o,p-h,f-_,T-E).normalize(),n[4].setComponents(l-a,p-u,f-g,T-M).normalize(),t===en)n[5].setComponents(l+a,p+u,f+g,T+M).normalize();else if(t===er)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wi.x=r.normal.x>0?e.max.x:e.min.x,Wi.y=r.normal.y>0?e.max.y:e.min.y,Wi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function So(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,p=c.usage,m=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,u){const p=h.array,m=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&_.length===0&&i.bufferSubData(u,0,p),_.length!==0){for(let g=0,f=_.length;g<f;g++){const d=_[g];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class cs extends bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,p=t/l,m=[],_=[],g=[],f=[];for(let d=0;d<h;d++){const E=d*p-o;for(let M=0;M<c;M++){const T=M*u-s;_.push(T,-E,0),g.push(0,0,1),f.push(M/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,T=E+c*(d+1),R=E+1+c*(d+1),w=E+1+c*d;m.push(M,T,w),m.push(T,R,w)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var bc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ic=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oc=`#ifdef USE_IRIDESCENCE
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
#endif`,Bc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yc=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nh=`#ifdef USE_ENVMAP
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
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dh=`#ifdef USE_GRADIENTMAP
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
}`,uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,_h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yh=`struct PhysicalMaterial {
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ih=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
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
#endif`,zh=`#ifdef USE_MORPHTARGETS
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
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,ld=`float getShadowMask() {
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
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bd=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Dd=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Hd=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qd=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tu=`uniform float rotation;
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
}`,nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:bc,alphahash_pars_fragment:Tc,alphamap_fragment:wc,alphamap_pars_fragment:Ac,alphatest_fragment:Rc,alphatest_pars_fragment:Cc,aomap_fragment:Lc,aomap_pars_fragment:Pc,batching_pars_vertex:Dc,batching_vertex:Uc,begin_vertex:Ic,beginnormal_vertex:Nc,bsdfs:Fc,iridescence_fragment:Oc,bumpmap_pars_fragment:Bc,clipping_planes_fragment:zc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:kc,clipping_planes_vertex:Hc,color_fragment:Vc,color_pars_fragment:Wc,color_pars_vertex:Xc,color_vertex:qc,common:Yc,cube_uv_reflection_fragment:Kc,defaultnormal_vertex:jc,displacementmap_pars_vertex:Zc,displacementmap_vertex:$c,emissivemap_fragment:Jc,emissivemap_pars_fragment:Qc,colorspace_fragment:eh,colorspace_pars_fragment:th,envmap_fragment:nh,envmap_common_pars_fragment:ih,envmap_pars_fragment:rh,envmap_pars_vertex:sh,envmap_physical_pars_fragment:_h,envmap_vertex:ah,fog_vertex:oh,fog_pars_vertex:lh,fog_fragment:ch,fog_pars_fragment:hh,gradientmap_pars_fragment:dh,lightmap_fragment:uh,lightmap_pars_fragment:fh,lights_lambert_fragment:ph,lights_lambert_pars_fragment:mh,lights_pars_begin:gh,lights_toon_fragment:xh,lights_toon_pars_fragment:vh,lights_phong_fragment:Mh,lights_phong_pars_fragment:Sh,lights_physical_fragment:Eh,lights_physical_pars_fragment:yh,lights_fragment_begin:bh,lights_fragment_maps:Th,lights_fragment_end:wh,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Ch,logdepthbuf_vertex:Lh,map_fragment:Ph,map_pars_fragment:Dh,map_particle_fragment:Uh,map_particle_pars_fragment:Ih,metalnessmap_fragment:Nh,metalnessmap_pars_fragment:Fh,morphcolor_vertex:Oh,morphnormal_vertex:Bh,morphtarget_pars_vertex:zh,morphtarget_vertex:Gh,normal_fragment_begin:kh,normal_fragment_maps:Hh,normal_pars_fragment:Vh,normal_pars_vertex:Wh,normal_vertex:Xh,normalmap_pars_fragment:qh,clearcoat_normal_fragment_begin:Yh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:Zh,opaque_fragment:$h,packing:Jh,premultiplied_alpha_fragment:Qh,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:rd,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:ad,shadowmap_vertex:od,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:hd,skinning_vertex:dd,skinnormal_vertex:ud,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:xd,uv_pars_fragment:vd,uv_pars_vertex:Md,uv_vertex:Sd,worldpos_vertex:Ed,background_vert:yd,background_frag:bd,backgroundCube_vert:Td,backgroundCube_frag:wd,cube_vert:Ad,cube_frag:Rd,depth_vert:Cd,depth_frag:Ld,distanceRGBA_vert:Pd,distanceRGBA_frag:Dd,equirect_vert:Ud,equirect_frag:Id,linedashed_vert:Nd,linedashed_frag:Fd,meshbasic_vert:Od,meshbasic_frag:Bd,meshlambert_vert:zd,meshlambert_frag:Gd,meshmatcap_vert:kd,meshmatcap_frag:Hd,meshnormal_vert:Vd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:Kd,meshtoon_vert:jd,meshtoon_frag:Zd,points_vert:$d,points_frag:Jd,shadow_vert:Qd,shadow_frag:eu,sprite_vert:tu,sprite_frag:nu},re={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Wt={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Wt.physical={uniforms:Mt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Xi={r:0,b:0,g:0};function iu(i,e,t,n,r,s,o){const a=new _e(0);let l=s===!0?0:1,c,h,u=null,p=0,m=null;function _(f,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===sr)?(h===void 0&&(h=new Xe(new li(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ri(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=qe.getTransfer(M.colorSpace)!==Ze,(u!==M||p!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xe(new cs(2,2),new Un({name:"BackgroundMaterial",uniforms:ri(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=qe.getTransfer(M.colorSpace)!==Ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,d){f.getRGB(Xi,xo(i)),n.buffers.color.setClear(Xi.r,Xi.g,Xi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(f,d=1){a.set(f),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:_}}function ru(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function u(L,U,V,Y,W){let X=!1;if(o){const K=g(Y,V,U);c!==K&&(c=K,m(c.object)),X=d(L,Y,V,W),X&&E(L,Y,V,W)}else{const K=U.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==K)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=K,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,B(L,U,V,Y),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,U,V){const Y=V.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let X=W[U.id];X===void 0&&(X={},W[U.id]=X);let K=X[Y];return K===void 0&&(K=f(p()),X[Y]=K),K}function f(L){const U=[],V=[],Y=[];for(let W=0;W<r;W++)U[W]=0,V[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function d(L,U,V,Y){const W=c.attributes,X=U.attributes;let K=0;const te=V.getAttributes();for(const ne in te)if(te[ne].location>=0){const j=W[ne];let oe=X[ne];if(oe===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;K++}return c.attributesNum!==K||c.index!==Y}function E(L,U,V,Y){const W={},X=U.attributes;let K=0;const te=V.getAttributes();for(const ne in te)if(te[ne].location>=0){let j=X[ne];j===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),W[ne]=oe,K++}c.attributes=W,c.attributesNum=K,c.index=Y}function M(){const L=c.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function T(L){R(L,0)}function R(L,U){const V=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;V[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),W[L]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),W[L]=U)}function w(){const L=c.newAttributes,U=c.enabledAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]!==L[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function A(L,U,V,Y,W,X,K){K===!0?i.vertexAttribIPointer(L,U,V,W,X):i.vertexAttribPointer(L,U,V,Y,W,X)}function B(L,U,V,Y){if(n.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=Y.attributes,X=V.getAttributes(),K=U.defaultAttributeValues;for(const te in X){const ne=X[te];if(ne.location>=0){let H=W[te];if(H===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const j=H.normalized,oe=H.itemSize,ge=t.get(H);if(ge===void 0)continue;const me=ge.buffer,Ce=ge.type,Pe=ge.bytesPerElement,ye=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||H.gpuType===Ja);if(H.isInterleavedBufferAttribute){const He=H.data,I=He.stride,gt=H.offset;if(He.isInstancedInterleavedBuffer){for(let ve=0;ve<ne.locationSize;ve++)R(ne.location+ve,He.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ve=0;ve<ne.locationSize;ve++)T(ne.location+ve);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ve=0;ve<ne.locationSize;ve++)A(ne.location+ve,oe/ne.locationSize,Ce,j,I*Pe,(gt+oe/ne.locationSize*ve)*Pe,ye)}else{if(H.isInstancedBufferAttribute){for(let He=0;He<ne.locationSize;He++)R(ne.location+He,H.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let He=0;He<ne.locationSize;He++)T(ne.location+He);i.bindBuffer(i.ARRAY_BUFFER,me);for(let He=0;He<ne.locationSize;He++)A(ne.location+He,oe/ne.locationSize,Ce,j,oe*Pe,oe/ne.locationSize*He*Pe,ye)}}else if(K!==void 0){const j=K[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ne.location,j);break;case 3:i.vertexAttrib3fv(ne.location,j);break;case 4:i.vertexAttrib4fv(ne.location,j);break;default:i.vertexAttrib1fv(ne.location,j)}}}}w()}function v(){G();for(const L in a){const U=a[L];for(const V in U){const Y=U[V];for(const W in Y)_(Y[W].object),delete Y[W];delete U[V]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const V in U){const Y=U[V];for(const W in Y)_(Y[W].object),delete Y[W];delete U[V]}delete a[L.id]}function z(L){for(const U in a){const V=a[U];if(V[L.id]===void 0)continue;const Y=V[L.id];for(const W in Y)_(Y[W].object),delete Y[W];delete V[L.id]}}function G(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:T,disableUnusedAttributes:w}}function su(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function a(h,u){i.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,p){if(p===0)return;let m,_;if(r)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,h,u,p),t.update(u,s,p)}function c(h,u,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(s,h,0,u,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function au(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,T=o||e.has("OES_texture_float"),R=M&&T,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:w}}function ou(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new En,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const _=u.clippingPlanes,g=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!r||_===null||_.length===0||s&&!f)s?h(null):c();else{const E=s?0:n,M=E*4;let T=d.clippingState||null;l.value=T,T=h(_,p,M,m);for(let R=0;R!==M;++R)T[R]=t[R];d.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,_){const g=u!==null?u.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const d=m+g*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<d)&&(f=new Float32Array(d));for(let M=0,T=m;M!==g;++M,T+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function lu(i){let e=new WeakMap;function t(o,a){return a===Kr?o.mapping=ti:a===jr&&(o.mapping=ni),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kr||a===jr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Eo extends vo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $n=4,va=[.125,.215,.35,.446,.526,.582],Tn=20,Br=new Eo,Ma=new _e;let zr=null,Gr=0,kr=0;const yn=(1+Math.sqrt(5))/2,jn=1/yn,Sa=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yn,jn),new P(0,yn,-jn),new P(jn,0,yn),new P(-jn,0,yn),new P(yn,jn,0),new P(-yn,jn,0)];class Ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){zr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Gr,kr),e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ti||e.mapping===ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:vi,format:kt,colorSpace:nn,depthBuffer:!1},r=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cu(s)),this._blurMaterial=hu(s,e,t)}return r}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,r){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Ma),h.toneMapping=fn,h.autoClear=!1;const m=new Pn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),_=new Xe(new li,m);let g=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(Ma),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;qi(r,E*M,d>2?M:0,M,M),h.setRenderTarget(r),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ti||e.mapping===ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sa[(r-1)%Sa.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xe(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tn-1),g=s/_,f=isFinite(s)?1+Math.floor(h*g):Tn;f>Tn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Tn}`);const d=[];let E=0;for(let A=0;A<Tn;++A){const B=A/g,v=Math.exp(-B*B/2);d.push(v),A===0?E+=v:A<f&&(E+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;const T=this._sizeLods[r],R=3*T*(r>M-$n?r-M+$n:0),w=4*(this._cubeSize-T);qi(t,R,w,3*T,2*T),l.setRenderTarget(t),l.render(u,Br)}}function cu(i){const e=[],t=[],n=[];let r=i;const s=i-$n+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-$n?l=va[o-i+$n-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,f=2,d=1,E=new Float32Array(g*_*m),M=new Float32Array(f*_*m),T=new Float32Array(d*_*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,B=w>2?0:-1,v=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];E.set(v,g*_*w),M.set(p,f*_*w);const y=[w,w,w,w,w,w];T.set(y,d*_*w)}const R=new bt;R.setAttribute("position",new yt(E,g)),R.setAttribute("uv",new yt(M,f)),R.setAttribute("faceIndex",new yt(T,d)),e.push(R),r>$n&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hu(i,e,t){const n=new Float32Array(Tn),r=new P(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hs(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function ba(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ta(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function hs(){return`

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
	`}function du(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kr||l===jr,h=l===ti||l===ni;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ea(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Ea(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fu(i,e,t,n){const r={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let f=0,d=g.length;f<d;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let f=0,d=g.length;f<d;f++)e.update(g[f],i.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let M=0,T=E.length;M<T;M+=3){const R=E[M+0],w=E[M+1],A=E[M+2];p.push(R,w,w,A,A,R)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const R=M+0,w=M+1,A=M+2;p.push(R,w,w,A,A,R)}}else return;const f=new(lo(p)?_o:go)(p,1);f.version=g;const d=s.get(u);d&&e.remove(d),s.set(u,f)}function h(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function pu(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(s,_,a,m*l),t.update(_,s,1)}function u(m,_,g){if(g===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,_,a,m*l,g),t.update(_,s,g)}function p(m,_,g){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{f.multiDrawElementsWEBGL(s,_,0,a,m,0,g);let d=0;for(let E=0;E<g;E++)d+=_[E];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function mu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gu(i,e){return i[0]-e[0]}function _u(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xu(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let f=s.get(h);if(f===void 0||f.count!==g){let U=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let v=0;M===!0&&(v=1),T===!0&&(v=2),R===!0&&(v=3);let y=h.attributes.position.count*v,z=1;y>e.maxTextureSize&&(z=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const G=new Float32Array(y*z*4*g),Z=new uo(G,y,z,g);Z.type=dn,Z.needsUpdate=!0;const L=v*4;for(let V=0;V<g;V++){const Y=w[V],W=A[V],X=B[V],K=y*z*4*V;for(let te=0;te<Y.count;te++){const ne=te*L;M===!0&&(o.fromBufferAttribute(Y,te),G[K+ne+0]=o.x,G[K+ne+1]=o.y,G[K+ne+2]=o.z,G[K+ne+3]=0),T===!0&&(o.fromBufferAttribute(W,te),G[K+ne+4]=o.x,G[K+ne+5]=o.y,G[K+ne+6]=o.z,G[K+ne+7]=0),R===!0&&(o.fromBufferAttribute(X,te),G[K+ne+8]=o.x,G[K+ne+9]=o.y,G[K+ne+10]=o.z,G[K+ne+11]=X.itemSize===4?o.w:1)}}f={count:g,texture:Z,size:new ke(y,z)},s.set(h,f),h.addEventListener("dispose",U)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const _=p===void 0?0:p.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[h.id]=g}for(let T=0;T<_;T++){const R=g[T];R[0]=T,R[1]=p[T]}g.sort(_u);for(let T=0;T<8;T++)T<_&&g[T][1]?(a[T][0]=g[T][0],a[T][1]=g[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(gu);const f=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const R=a[T],w=R[0],A=R[1];w!==Number.MAX_SAFE_INTEGER&&A?(f&&h.getAttribute("morphTarget"+T)!==f[w]&&h.setAttribute("morphTarget"+T,f[w]),d&&h.getAttribute("morphNormal"+T)!==d[w]&&h.setAttribute("morphNormal"+T,d[w]),r[T]=A,E+=A):(f&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),d&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),r[T]=0)}const M=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function vu(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class yo extends wt{constructor(e,t,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:Cn,h!==Cn&&h!==ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cn&&(n=hn),n===void 0&&h===ii&&(n=Rn),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bo=new wt,To=new yo(1,1);To.compareFunction=oo;const wo=new uo,Ao=new ic,Ro=new Mo,wa=[],Aa=[],Ra=new Float32Array(16),Ca=new Float32Array(9),La=new Float32Array(4);function ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wa[r];if(s===void 0&&(s=new Float32Array(r),wa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cr(i,e){let t=Aa[e];t===void 0&&(t=new Int32Array(e),Aa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Su(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function Eu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function bu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;La.set(n),i.uniformMatrix2fv(this.addr,!1,La),at(t,n)}}function Tu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ca.set(n),i.uniformMatrix3fv(this.addr,!1,Ca),at(t,n)}}function wu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ra.set(n),i.uniformMatrix4fv(this.addr,!1,Ra),at(t,n)}}function Au(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ru(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Cu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function Lu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function Pu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Du(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function Uu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function Nu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?To:bo;t.setTexture2D(e||s,r)}function Fu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ao,r)}function Ou(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ro,r)}function Bu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wo,r)}function zu(i){switch(i){case 5126:return Mu;case 35664:return Su;case 35665:return Eu;case 35666:return yu;case 35674:return bu;case 35675:return Tu;case 35676:return wu;case 5124:case 35670:return Au;case 35667:case 35671:return Ru;case 35668:case 35672:return Cu;case 35669:case 35673:return Lu;case 5125:return Pu;case 36294:return Du;case 36295:return Uu;case 36296:return Iu;case 35678:case 36198:case 36298:case 36306:case 35682:return Nu;case 35679:case 36299:case 36307:return Fu;case 35680:case 36300:case 36308:case 36293:return Ou;case 36289:case 36303:case 36311:case 36292:return Bu}}function Gu(i,e){i.uniform1fv(this.addr,e)}function ku(i,e){const t=ci(e,this.size,2);i.uniform2fv(this.addr,t)}function Hu(i,e){const t=ci(e,this.size,3);i.uniform3fv(this.addr,t)}function Vu(i,e){const t=ci(e,this.size,4);i.uniform4fv(this.addr,t)}function Wu(i,e){const t=ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xu(i,e){const t=ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qu(i,e){const t=ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yu(i,e){i.uniform1iv(this.addr,e)}function Ku(i,e){i.uniform2iv(this.addr,e)}function ju(i,e){i.uniform3iv(this.addr,e)}function Zu(i,e){i.uniform4iv(this.addr,e)}function $u(i,e){i.uniform1uiv(this.addr,e)}function Ju(i,e){i.uniform2uiv(this.addr,e)}function Qu(i,e){i.uniform3uiv(this.addr,e)}function ef(i,e){i.uniform4uiv(this.addr,e)}function tf(i,e,t){const n=this.cache,r=e.length,s=cr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bo,s[o])}function nf(i,e,t){const n=this.cache,r=e.length,s=cr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ao,s[o])}function rf(i,e,t){const n=this.cache,r=e.length,s=cr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ro,s[o])}function sf(i,e,t){const n=this.cache,r=e.length,s=cr(t,r);st(n,s)||(i.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wo,s[o])}function af(i){switch(i){case 5126:return Gu;case 35664:return ku;case 35665:return Hu;case 35666:return Vu;case 35674:return Wu;case 35675:return Xu;case 35676:return qu;case 5124:case 35670:return Yu;case 35667:case 35671:return Ku;case 35668:case 35672:return ju;case 35669:case 35673:return Zu;case 5125:return $u;case 36294:return Ju;case 36295:return Qu;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return rf;case 36289:case 36303:case 36311:case 36292:return sf}}class of{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zu(t.type)}}class lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=af(t.type)}}class cf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function Pa(i,e){i.seq.push(e),i.map[e.id]=e}function hf(i,e,t){const n=i.name,r=n.length;for(Hr.lastIndex=0;;){const s=Hr.exec(n),o=Hr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Pa(t,c===void 0?new of(a,i,e):new lf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new cf(a),Pa(t,u)),t=u}}}class ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Da(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const df=37297;let uf=0;function ff(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pf(i){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(i);let n;switch(e===t?n="":e===Qi&&t===Ji?n="LinearDisplayP3ToLinearSRGB":e===Ji&&t===Qi&&(n="LinearSRGBToLinearDisplayP3"),i){case nn:case ar:return[n,"LinearTransferOETF"];case ut:case as:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ua(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ff(i.getShaderSource(e),o)}else return r}function mf(i,e){const t=pf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gf(i,e){let t;switch(e){case fl:t="Linear";break;case pl:t="Reinhard";break;case ml:t="OptimizedCineon";break;case gl:t="ACESFilmic";break;case xl:t="AgX";break;case _l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _f(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jn).join(`
`)}function xf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jn).join(`
`)}function vf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jn(i){return i!==""}function Ia(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Na(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sf=/^[ \t]*#include +<([\w\d./]+)>/gm;function es(i){return i.replace(Sf,yf)}const Ef=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yf(i,e){let t=Ue[e];if(t===void 0){const n=Ef.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return es(t)}const bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fa(i){return i.replace(bf,Tf)}function Tf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jt&&(e="SHADOWMAP_TYPE_VSM"),e}function Af(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ti:case ni:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Cf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Za:e="ENVMAP_BLENDING_MULTIPLY";break;case dl:e="ENVMAP_BLENDING_MIX";break;case ul:e="ENVMAP_BLENDING_ADD";break}return e}function Lf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pf(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wf(t),c=Af(t),h=Rf(t),u=Cf(t),p=Lf(t),m=t.isWebGL2?"":_f(t),_=xf(t),g=vf(s),f=r.createProgram();let d,E,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jn).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jn).join(`
`),E.length>0&&(E+=`
`)):(d=[Oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),E=[m,Oa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==fn?gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,mf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jn).join(`
`)),o=es(o),o=Ia(o,t),o=Na(o,t),a=es(a),a=Ia(a,t),a=Na(a,t),o=Fa(o),a=Fa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=M+d+o,R=M+E+a,w=Da(r,r.VERTEX_SHADER,T),A=Da(r,r.FRAGMENT_SHADER,R);r.attachShader(f,w),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function B(G){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(f).trim(),L=r.getShaderInfoLog(w).trim(),U=r.getShaderInfoLog(A).trim();let V=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,w,A);else{const W=Ua(r,w,"vertex"),X=Ua(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+W+`
`+X)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||U==="")&&(Y=!1);Y&&(G.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:E}})}r.deleteShader(w),r.deleteShader(A),v=new ji(r,f),y=Mf(r,f)}let v;this.getUniforms=function(){return v===void 0&&B(this),v};let y;this.getAttributes=function(){return y===void 0&&B(this),y};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(f,df)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uf++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=A,this}let Df=0;class Uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new If(e),t.set(e,n)),n}}class If{constructor(e){this.id=Df++,this.code=e,this.usedTimes=0}}function Nf(i,e,t,n,r,s,o){const a=new po,l=new Uf,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function f(v,y,z,G,Z){const L=G.fog,U=Z.geometry,V=v.isMeshStandardMaterial?G.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),W=Y&&Y.mapping===sr?Y.image.height:null,X=_[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,te=K!==void 0?K.length:0;let ne=0;U.morphAttributes.position!==void 0&&(ne=1),U.morphAttributes.normal!==void 0&&(ne=2),U.morphAttributes.color!==void 0&&(ne=3);let H,j,oe,ge;if(X){const _t=Wt[X];H=_t.vertexShader,j=_t.fragmentShader}else H=v.vertexShader,j=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),ge=l.getFragmentShaderID(v);const me=i.getRenderTarget(),Ce=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,ye=!!v.map,He=!!v.matcap,I=!!Y,gt=!!v.aoMap,ve=!!v.lightMap,Ae=!!v.bumpMap,ue=!!v.normalMap,$e=!!v.displacementMap,Ie=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,F=v.anisotropy>0,Q=v.clearcoat>0,J=v.iridescence>0,ee=v.sheen>0,fe=v.transmission>0,le=F&&!!v.anisotropyMap,he=Q&&!!v.clearcoatMap,Ee=Q&&!!v.clearcoatNormalMap,Ne=Q&&!!v.clearcoatRoughnessMap,$=J&&!!v.iridescenceMap,We=J&&!!v.iridescenceThicknessMap,Ge=ee&&!!v.sheenColorMap,we=ee&&!!v.sheenRoughnessMap,xe=!!v.specularMap,de=!!v.specularColorMap,De=!!v.specularIntensityMap,Ve=fe&&!!v.transmissionMap,Qe=fe&&!!v.thicknessMap,Oe=!!v.gradientMap,ie=!!v.alphaMap,C=v.alphaTest>0,se=!!v.alphaHash,ae=!!v.extensions,be=!!U.attributes.uv1,Me=!!U.attributes.uv2,Ye=!!U.attributes.uv3;let Ke=fn;return v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:j,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Pe,instancing:Ce,instancingColor:Ce&&Z.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:nn,map:ye,matcap:He,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:W,aoMap:gt,lightMap:ve,bumpMap:Ae,normalMap:ue,displacementMap:p&&$e,emissiveMap:Ie,normalMapObjectSpace:ue&&v.normalMapType===Ll,normalMapTangentSpace:ue&&v.normalMapType===ao,metalnessMap:b,roughnessMap:x,anisotropy:F,anisotropyMap:le,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ne,iridescence:J,iridescenceMap:$,iridescenceThicknessMap:We,sheen:ee,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:xe,specularColorMap:de,specularIntensityMap:De,transmission:fe,transmissionMap:Ve,thicknessMap:Qe,gradientMap:Oe,opaque:v.transparent===!1&&v.blending===Qn,alphaMap:ie,alphaTest:C,alphaHash:se,combine:v.combine,mapUv:ye&&g(v.map.channel),aoMapUv:gt&&g(v.aoMap.channel),lightMapUv:ve&&g(v.lightMap.channel),bumpMapUv:Ae&&g(v.bumpMap.channel),normalMapUv:ue&&g(v.normalMap.channel),displacementMapUv:$e&&g(v.displacementMap.channel),emissiveMapUv:Ie&&g(v.emissiveMap.channel),metalnessMapUv:b&&g(v.metalnessMap.channel),roughnessMapUv:x&&g(v.roughnessMap.channel),anisotropyMapUv:le&&g(v.anisotropyMap.channel),clearcoatMapUv:he&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(v.sheenRoughnessMap.channel),specularMapUv:xe&&g(v.specularMap.channel),specularColorMapUv:de&&g(v.specularColorMap.channel),specularIntensityMapUv:De&&g(v.specularIntensityMap.channel),transmissionMapUv:Ve&&g(v.transmissionMap.channel),thicknessMapUv:Qe&&g(v.thicknessMap.channel),alphaMapUv:ie&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Me,vertexUv3s:Ye,pointsUvs:Z.isPoints===!0&&!!U.attributes.uv&&(ye||ie),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qt,flipSided:v.side===Tt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ae&&v.extensions.derivatives===!0,extensionFragDepth:ae&&v.extensions.fragDepth===!0,extensionDrawBuffers:ae&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)y.push(z),y.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(E(y,v),M(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function E(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function T(v){const y=_[v.type];let z;if(y){const G=Wt[y];z=gc.clone(G.uniforms)}else z=v.uniforms;return z}function R(v,y){let z;for(let G=0,Z=c.length;G<Z;G++){const L=c[G];if(L.cacheKey===y){z=L,++z.usedTimes;break}}return z===void 0&&(z=new Pf(i,y,v,s),c.push(z)),z}function w(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function B(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:T,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:B}}function Ff(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Of(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ba(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function za(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,p,m,_,g,f){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:f},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=f),e++,d}function a(u,p,m,_,g,f){const d=o(u,p,m,_,g,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,p,m,_,g,f){const d=o(u,p,m,_,g,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||Of),n.length>1&&n.sort(p||Ba),r.length>1&&r.sort(p||Ba)}function h(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Bf(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new za,i.set(n,[o])):r>=s.length?(o=new za,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new _e};break;case"SpotLight":t={position:new P,direction:new P,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Gf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kf=0;function Hf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vf(i,e){const t=new zf,n=Gf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,o=new rt,a=new rt;function l(h,u){let p=0,m=0,_=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let g=0,f=0,d=0,E=0,M=0,T=0,R=0,w=0,A=0,B=0,v=0;h.sort(Hf);const y=u===!0?Math.PI:1;for(let G=0,Z=h.length;G<Z;G++){const L=h[G],U=L.color,V=L.intensity,Y=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=U.r*V*y,m+=U.g*V*y,_+=U.b*V*y;else if(L.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(L.sh.coefficients[X],V);v++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const K=L.shadow,te=n.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.directionalShadow[g]=te,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=L.shadow.matrix,T++}r.directional[g]=X,g++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(V*y),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,r.spot[d]=X;const K=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&B++),r.spotLightMatrix[d]=K.matrix,L.castShadow){const te=n.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.spotShadow[d]=te,r.spotShadowMap[d]=W,w++}d++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(U).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=X,E++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*y),X.distance=L.distance,X.decay=L.decay,L.castShadow){const K=L.shadow,te=n.get(L);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=W,r.pointShadowMatrix[f]=L.shadow.matrix,R++}r.point[f]=X,f++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(V*y),X.groundColor.copy(L.groundColor).multiplyScalar(V*y),r.hemi[M]=X,M++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==g||z.pointLength!==f||z.spotLength!==d||z.rectAreaLength!==E||z.hemiLength!==M||z.numDirectionalShadows!==T||z.numPointShadows!==R||z.numSpotShadows!==w||z.numSpotMaps!==A||z.numLightProbes!==v)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=E,r.point.length=f,r.hemi.length=M,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+A-B,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=v,z.directionalLength=g,z.pointLength=f,z.spotLength=d,z.rectAreaLength=E,z.hemiLength=M,z.numDirectionalShadows=T,z.numPointShadows=R,z.numSpotShadows=w,z.numSpotMaps=A,z.numLightProbes=v,r.version=kf++)}function c(h,u){let p=0,m=0,_=0,g=0,f=0;const d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const T=h[E];if(T.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),p++}else if(T.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),_++}else if(T.isRectAreaLight){const R=r.rectArea[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const R=r.hemi[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:r}}function Ga(i,e){const t=new Vf(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wf(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ga(i,e),t.set(s,[l])):o>=a.length?(l=new Ga(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xf extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qf extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kf=`uniform sampler2D shadow_pass;
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
}`;function jf(i,e,t){let n=new ls;const r=new ke,s=new ke,o=new ht,a=new Xf({depthPacking:Cl}),l=new qf,c={},h=t.maxTextureSize,u={[mn]:Tt,[Tt]:mn,[Qt]:Qt},p=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Yf,fragmentShader:Kf}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new bt;_.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Xe(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let d=this.type;this.render=function(w,A,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const v=i.getRenderTarget(),y=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),G=i.state;G.setBlending(un),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=d!==Jt&&this.type===Jt,L=d===Jt&&this.type!==Jt;for(let U=0,V=w.length;U<V;U++){const Y=w[U],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Z===!0||L===!0){const te=this.type!==Jt?{minFilter:St,magFilter:St}:{};W.map!==null&&W.map.dispose(),W.map=new Dn(r.x,r.y,te),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const K=W.getViewportCount();for(let te=0;te<K;te++){const ne=W.getViewport(te);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),G.viewport(o),W.updateMatrices(Y,te),n=W.getFrustum(),T(A,B,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Jt&&E(W,B),W.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(v,y,z)};function E(w,A){const B=e.update(g);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,B,p,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,B,m,g,null)}function M(w,A,B,v){let y=null;const z=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)y=z;else if(y=B.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=y.uuid,Z=A.uuid;let L=c[G];L===void 0&&(L={},c[G]=L);let U=L[Z];U===void 0&&(U=y.clone(),L[Z]=U,A.addEventListener("dispose",R)),y=U}if(y.visible=A.visible,y.wireframe=A.wireframe,v===Jt?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=B}return y}function T(w,A,B,v,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Jt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const U=Z.groups;for(let V=0,Y=U.length;V<Y;V++){const W=U[V],X=L[W.materialIndex];if(X&&X.visible){const K=M(w,X,v,y);w.onBeforeShadow(i,w,A,B,Z,K,W),i.renderBufferDirect(B,null,Z,K,w,W),w.onAfterShadow(i,w,A,B,Z,K,W)}}}else if(L.visible){const U=M(w,L,v,y);w.onBeforeShadow(i,w,A,B,Z,U,null),i.renderBufferDirect(B,null,Z,U,w,null),w.onAfterShadow(i,w,A,B,Z,U,null)}}const G=w.children;for(let Z=0,L=G.length;Z<L;Z++)T(G[Z],A,B,v,y)}function R(w){w.target.removeEventListener("dispose",R);for(const B in c){const v=c[B],y=w.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function Zf(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const se=new ht;let ae=null;const be=new ht(0,0,0,0);return{setMask:function(Me){ae!==Me&&!C&&(i.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){C=Me},setClear:function(Me,Ye,Ke,ot,_t){_t===!0&&(Me*=ot,Ye*=ot,Ke*=ot),se.set(Me,Ye,Ke,ot),be.equals(se)===!1&&(i.clearColor(Me,Ye,Ke,ot),be.copy(se))},reset:function(){C=!1,ae=null,be.set(-1,0,0,0)}}}function s(){let C=!1,se=null,ae=null,be=null;return{setTest:function(Me){Me?Pe(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Me){se!==Me&&!C&&(i.depthMask(Me),se=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){C=Me},setClear:function(Me){be!==Me&&(i.clearDepth(Me),be=Me)},reset:function(){C=!1,se=null,ae=null,be=null}}}function o(){let C=!1,se=null,ae=null,be=null,Me=null,Ye=null,Ke=null,ot=null,_t=null;return{setTest:function(je){C||(je?Pe(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(je){se!==je&&!C&&(i.stencilMask(je),se=je)},setFunc:function(je,xt,Vt){(ae!==je||be!==xt||Me!==Vt)&&(i.stencilFunc(je,xt,Vt),ae=je,be=xt,Me=Vt)},setOp:function(je,xt,Vt){(Ye!==je||Ke!==xt||ot!==Vt)&&(i.stencilOp(je,xt,Vt),Ye=je,Ke=xt,ot=Vt)},setLocked:function(je){C=je},setClear:function(je){_t!==je&&(i.clearStencil(je),_t=je)},reset:function(){C=!1,se=null,ae=null,be=null,Me=null,Ye=null,Ke=null,ot=null,_t=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let p={},m={},_=new WeakMap,g=[],f=null,d=!1,E=null,M=null,T=null,R=null,w=null,A=null,B=null,v=new _e(0,0,0),y=0,z=!1,G=null,Z=null,L=null,U=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=X>=2);let te=null,ne={};const H=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),oe=new ht().fromArray(H),ge=new ht().fromArray(j);function me(C,se,ae,be){const Me=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(C,Ye),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ae;Ke++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(se+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ye}const Ce={};Ce[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(Zi),Ie(!1),b(Ss),Pe(i.CULL_FACE),ue(un);function Pe(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function ye(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function He(C,se){return m[C]!==se?(i.bindFramebuffer(C,se),m[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(C,se){let ae=g,be=!1;if(C)if(ae=_.get(se),ae===void 0&&(ae=[],_.set(se,ae)),C.isWebGLMultipleRenderTargets){const Me=C.texture;if(ae.length!==Me.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,Ke=Me.length;Ye<Ke;Ye++)ae[Ye]=i.COLOR_ATTACHMENT0+Ye;ae.length=Me.length,be=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,be=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,be=!0);be&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function gt(C){return f!==C?(i.useProgram(C),f=C,!0):!1}const ve={[bn]:i.FUNC_ADD,[Vo]:i.FUNC_SUBTRACT,[Wo]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[bs]=i.MIN,ve[Ts]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(ve[bs]=C.MIN_EXT,ve[Ts]=C.MAX_EXT)}const Ae={[Xo]:i.ZERO,[qo]:i.ONE,[Yo]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[Qo]:i.SRC_ALPHA_SATURATE,[$o]:i.DST_COLOR,[jo]:i.DST_ALPHA,[Ko]:i.ONE_MINUS_SRC_COLOR,[Yr]:i.ONE_MINUS_SRC_ALPHA,[Jo]:i.ONE_MINUS_DST_COLOR,[Zo]:i.ONE_MINUS_DST_ALPHA,[el]:i.CONSTANT_COLOR,[tl]:i.ONE_MINUS_CONSTANT_COLOR,[nl]:i.CONSTANT_ALPHA,[il]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(C,se,ae,be,Me,Ye,Ke,ot,_t,je){if(C===un){d===!0&&(ye(i.BLEND),d=!1);return}if(d===!1&&(Pe(i.BLEND),d=!0),C!==Ho){if(C!==E||je!==z){if((M!==bn||w!==bn)&&(i.blendEquation(i.FUNC_ADD),M=bn,w=bn),je)switch(C){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ys:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ys:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,R=null,A=null,B=null,v.set(0,0,0),y=0,E=C,z=je}return}Me=Me||se,Ye=Ye||ae,Ke=Ke||be,(se!==M||Me!==w)&&(i.blendEquationSeparate(ve[se],ve[Me]),M=se,w=Me),(ae!==T||be!==R||Ye!==A||Ke!==B)&&(i.blendFuncSeparate(Ae[ae],Ae[be],Ae[Ye],Ae[Ke]),T=ae,R=be,A=Ye,B=Ke),(ot.equals(v)===!1||_t!==y)&&(i.blendColor(ot.r,ot.g,ot.b,_t),v.copy(ot),y=_t),E=C,z=!1}function $e(C,se){C.side===Qt?ye(i.CULL_FACE):Pe(i.CULL_FACE);let ae=C.side===Tt;se&&(ae=!ae),Ie(ae),C.blending===Qn&&C.transparent===!1?ue(un):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const be=C.stencilWrite;c.setTest(be),be&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(C){G!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),G=C)}function b(C){C!==zo?(Pe(i.CULL_FACE),C!==Z&&(C===Ss?i.cullFace(i.BACK):C===Go?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),Z=C}function x(C){C!==L&&(W&&i.lineWidth(C),L=C)}function F(C,se,ae){C?(Pe(i.POLYGON_OFFSET_FILL),(U!==se||V!==ae)&&(i.polygonOffset(se,ae),U=se,V=ae)):ye(i.POLYGON_OFFSET_FILL)}function Q(C){C?Pe(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+Y-1),te!==C&&(i.activeTexture(C),te=C)}function ee(C,se,ae){ae===void 0&&(te===null?ae=i.TEXTURE0+Y-1:ae=te);let be=ne[ae];be===void 0&&(be={type:void 0,texture:void 0},ne[ae]=be),(be.type!==C||be.texture!==se)&&(te!==ae&&(i.activeTexture(ae),te=ae),i.bindTexture(C,se||Ce[C]),be.type=C,be.texture=se)}function fe(){const C=ne[te];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(C){oe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function Ve(C){ge.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function Qe(C,se){let ae=u.get(se);ae===void 0&&(ae=new WeakMap,u.set(se,ae));let be=ae.get(C);be===void 0&&(be=i.getUniformBlockIndex(se,C.name),ae.set(C,be))}function Oe(C,se){const be=u.get(se).get(C);h.get(se)!==be&&(i.uniformBlockBinding(se,be,C.__bindingPointIndex),h.set(se,be))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},te=null,ne={},m={},_=new WeakMap,g=[],f=null,d=!1,E=null,M=null,T=null,R=null,w=null,A=null,B=null,v=new _e(0,0,0),y=0,z=!1,G=null,Z=null,L=null,U=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:ye,bindFramebuffer:He,drawBuffers:I,useProgram:gt,setBlending:ue,setMaterial:$e,setFlipSided:Ie,setCullFace:b,setLineWidth:x,setPolygonOffset:F,setScissorTest:Q,activeTexture:J,bindTexture:ee,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:xe,texImage3D:de,updateUBOMapping:Qe,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:we,texSubImage2D:Ee,texSubImage3D:Ne,compressedTexSubImage2D:$,compressedTexSubImage3D:We,scissor:De,viewport:Ve,reset:ie}}function $f(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return m?new OffscreenCanvas(b,x):nr("canvas")}function g(b,x,F,Q){let J=1;if((b.width>Q||b.height>Q)&&(J=Q/Math.max(b.width,b.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ee=x?tr:Math.floor,fe=ee(J*b.width),le=ee(J*b.height);u===void 0&&(u=_(fe,le));const he=F?_(fe,le):u;return he.width=fe,he.height=le,he.getContext("2d").drawImage(b,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+le+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return Qr(b.width)&&Qr(b.height)}function d(b){return a?!1:b.wrapS!==Gt||b.wrapT!==Gt||b.minFilter!==St&&b.minFilter!==Lt}function E(b,x){return b.generateMipmaps&&x&&b.minFilter!==St&&b.minFilter!==Lt}function M(b){i.generateMipmap(b)}function T(b,x,F,Q,J=!1){if(a===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=x;if(x===i.RED&&(F===i.FLOAT&&(ee=i.R32F),F===i.HALF_FLOAT&&(ee=i.R16F),F===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ee=i.R8UI),F===i.UNSIGNED_SHORT&&(ee=i.R16UI),F===i.UNSIGNED_INT&&(ee=i.R32UI),F===i.BYTE&&(ee=i.R8I),F===i.SHORT&&(ee=i.R16I),F===i.INT&&(ee=i.R32I)),x===i.RG&&(F===i.FLOAT&&(ee=i.RG32F),F===i.HALF_FLOAT&&(ee=i.RG16F),F===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RGBA){const fe=J?$i:qe.getTransfer(Q);F===i.FLOAT&&(ee=i.RGBA32F),F===i.HALF_FLOAT&&(ee=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ee=fe===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(b,x,F){return E(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==St&&b.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){return b===St||b===ws||b===mr?i.NEAREST:i.LINEAR}function A(b){const x=b.target;x.removeEventListener("dispose",A),v(x),x.isVideoTexture&&h.delete(x)}function B(b){const x=b.target;x.removeEventListener("dispose",B),z(x)}function v(b){const x=n.get(b);if(x.__webglInit===void 0)return;const F=b.source,Q=p.get(F);if(Q){const J=Q[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(b),Object.keys(Q).length===0&&p.delete(F)}n.remove(b)}function y(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const F=b.source,Q=p.get(F);delete Q[x.__cacheKey],o.memory.textures--}function z(b){const x=b.texture,F=n.get(b),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ee=0;ee<F.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)i.deleteFramebuffer(F.__webglFramebuffer[J]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ee=x.length;J<ee;J++){const fe=n.get(x[J]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(b)}let G=0;function Z(){G=0}function L(){const b=G;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),G+=1,b}function U(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function V(b,x){const F=n.get(b);if(b.isVideoTexture&&$e(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,b,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Y(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function W(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){oe(F,b,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function X(b,x){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ge(F,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const K={[Zr]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},te={[St]:i.NEAREST,[ws]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[vl]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},ne={[Pl]:i.NEVER,[Ol]:i.ALWAYS,[Dl]:i.LESS,[oo]:i.LEQUAL,[Ul]:i.EQUAL,[Fl]:i.GEQUAL,[Il]:i.GREATER,[Nl]:i.NOTEQUAL};function H(b,x,F){if(F?(i.texParameteri(b,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,K[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,te[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,te[x.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Gt||x.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==St&&x.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===St||x.minFilter!==mr&&x.minFilter!==xi||x.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function j(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const Q=x.source;let J=p.get(Q);J===void 0&&(J={},p.set(Q,J));const ee=U(x);if(ee!==b.__cacheKey){J[ee]===void 0&&(J[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[ee].usedTimes++;const fe=J[b.__cacheKey];fe!==void 0&&(J[b.__cacheKey].usedTimes--,fe.usedTimes===0&&y(x)),b.__cacheKey=ee,b.__webglTexture=J[ee].texture}return F}function oe(b,x,F){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const J=j(b,x),ee=x.source;t.bindTexture(Q,b.__webglTexture,i.TEXTURE0+F);const fe=n.get(ee);if(ee.version!==fe.__version||J===!0){t.activeTexture(i.TEXTURE0+F);const le=qe.getPrimaries(qe.workingColorSpace),he=x.colorSpace===It?null:qe.getPrimaries(x.colorSpace),Ee=x.colorSpace===It||le===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=d(x)&&f(x.image)===!1;let $=g(x.image,Ne,!1,r.maxTextureSize);$=Ie(x,$);const We=f($)||a,Ge=s.convert(x.format,x.colorSpace);let we=s.convert(x.type),xe=T(x.internalFormat,Ge,we,x.colorSpace,x.isVideoTexture);H(Q,x,We);let de;const De=x.mipmaps,Ve=a&&x.isVideoTexture!==!0&&xe!==ro,Qe=fe.__version===void 0||J===!0,Oe=R(x,$,We);if(x.isDepthTexture)xe=i.DEPTH_COMPONENT,a?x.type===dn?xe=i.DEPTH_COMPONENT32F:x.type===hn?xe=i.DEPTH_COMPONENT24:x.type===Rn?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:x.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cn&&xe===i.DEPTH_COMPONENT&&x.type!==ss&&x.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=hn,we=s.convert(x.type)),x.format===ii&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,x.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Rn,we=s.convert(x.type))),Qe&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,Ge,we,null));else if(x.isDataTexture)if(De.length>0&&We){Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,xe,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)de=De[ie],Ve?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ge,we,de.data):t.texImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,Ge,we,de.data);x.generateMipmaps=!1}else Ve?(Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Ge,we,$.data)):t.texImage2D(i.TEXTURE_2D,0,xe,$.width,$.height,0,Ge,we,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,xe,De[0].width,De[0].height,$.depth);for(let ie=0,C=De.length;ie<C;ie++)de=De[ie],x.format!==kt?Ge!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,Ge,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,$.depth,Ge,we,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,$.depth,0,Ge,we,de.data)}else{Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,xe,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)de=De[ie],x.format!==kt?Ge!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ge,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,de.width,de.height,Ge,we,de.data):t.texImage2D(i.TEXTURE_2D,ie,xe,de.width,de.height,0,Ge,we,de.data)}else if(x.isDataArrayTexture)Ve?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ge,we,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,Ge,we,$.data);else if(x.isData3DTexture)Ve?(Qe&&t.texStorage3D(i.TEXTURE_3D,Oe,xe,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ge,we,$.data)):t.texImage3D(i.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,Ge,we,$.data);else if(x.isFramebufferTexture){if(Qe)if(Ve)t.texStorage2D(i.TEXTURE_2D,Oe,xe,$.width,$.height);else{let ie=$.width,C=$.height;for(let se=0;se<Oe;se++)t.texImage2D(i.TEXTURE_2D,se,xe,ie,C,0,Ge,we,null),ie>>=1,C>>=1}}else if(De.length>0&&We){Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,xe,De[0].width,De[0].height);for(let ie=0,C=De.length;ie<C;ie++)de=De[ie],Ve?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ge,we,de):t.texImage2D(i.TEXTURE_2D,ie,xe,Ge,we,de);x.generateMipmaps=!1}else Ve?(Qe&&t.texStorage2D(i.TEXTURE_2D,Oe,xe,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,we,$)):t.texImage2D(i.TEXTURE_2D,0,xe,Ge,we,$);E(x,We)&&M(Q),fe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ge(b,x,F){if(x.image.length!==6)return;const Q=j(b,x),J=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const ee=n.get(J);if(J.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const fe=qe.getPrimaries(qe.workingColorSpace),le=x.colorSpace===It?null:qe.getPrimaries(x.colorSpace),he=x.colorSpace===It||fe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,$=[];for(let ie=0;ie<6;ie++)!Ee&&!Ne?$[ie]=g(x.image[ie],!1,!0,r.maxCubemapSize):$[ie]=Ne?x.image[ie].image:x.image[ie],$[ie]=Ie(x,$[ie]);const We=$[0],Ge=f(We)||a,we=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),de=T(x.internalFormat,we,xe,x.colorSpace),De=a&&x.isVideoTexture!==!0,Ve=ee.__version===void 0||Q===!0;let Qe=R(x,We,Ge);H(i.TEXTURE_CUBE_MAP,x,Ge);let Oe;if(Ee){De&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,We.width,We.height);for(let ie=0;ie<6;ie++){Oe=$[ie].mipmaps;for(let C=0;C<Oe.length;C++){const se=Oe[C];x.format!==kt?we!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,se.width,se.height,we,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,de,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,se.width,se.height,we,xe,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,de,se.width,se.height,0,we,xe,se.data)}}}else{Oe=x.mipmaps,De&&Ve&&(Oe.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,de,$[0].width,$[0].height));for(let ie=0;ie<6;ie++)if(Ne){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,$[ie].width,$[ie].height,we,xe,$[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,$[ie].width,$[ie].height,0,we,xe,$[ie].data);for(let C=0;C<Oe.length;C++){const ae=Oe[C].image[ie].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,ae.width,ae.height,we,xe,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,de,ae.width,ae.height,0,we,xe,ae.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,xe,$[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,we,xe,$[ie]);for(let C=0;C<Oe.length;C++){const se=Oe[C];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,we,xe,se.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,de,we,xe,se.image[ie])}}}E(x,Ge)&&M(i.TEXTURE_CUBE_MAP),ee.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function me(b,x,F,Q,J,ee){const fe=s.convert(F.format,F.colorSpace),le=s.convert(F.type),he=T(F.internalFormat,fe,le,F.colorSpace);if(!n.get(x).__hasExternalTextures){const Ne=Math.max(1,x.width>>ee),$=Math.max(1,x.height>>ee);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,he,Ne,$,x.depth,0,fe,le,null):t.texImage2D(J,ee,he,Ne,$,0,fe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,0,Ae(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,n.get(F).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(b,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||ue(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===dn?Q=i.DEPTH_COMPONENT32F:J.type===hn&&(Q=i.DEPTH_COMPONENT24));const ee=Ae(x);ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const Q=Ae(x);F&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<Q.length;J++){const ee=Q[J],fe=s.convert(ee.format,ee.colorSpace),le=s.convert(ee.type),he=T(ee.internalFormat,fe,le,ee.colorSpace),Ee=Ae(x);F&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,x.width,x.height):ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,J=Ae(x);if(x.depthTexture.format===Cn)ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===ii)ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(b){const x=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Ce(x.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ce(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(b,x,F){const Q=n.get(b);x!==void 0&&me(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ye(b)}function I(b){const x=b.texture,F=n.get(b),Q=n.get(x);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,fe=f(b)||a;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let he=0;he<x.mipmaps.length;he++)F.__webglFramebuffer[le][he]=i.createFramebuffer()}else F.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)F.__webglFramebuffer[le]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ee)if(r.drawBuffers){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=n.get(le[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ue(b)===!1){const le=ee?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){const Ee=le[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Ne=s.convert(Ee.format,Ee.colorSpace),$=s.convert(Ee.type),We=T(Ee.internalFormat,Ne,$,Ee.colorSpace,b.isXRRenderTarget===!0),Ge=Ae(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,We,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),H(i.TEXTURE_CUBE_MAP,x,fe);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[le][he],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else me(F.__webglFramebuffer[le],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);E(x,fe)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const le=b.texture;for(let he=0,Ee=le.length;he<Ee;he++){const Ne=le[he],$=n.get(Ne);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),H(i.TEXTURE_2D,Ne,fe),me(F.__webglFramebuffer,b,Ne,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),E(Ne,fe)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,Q.__webglTexture),H(le,x,fe),a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)me(F.__webglFramebuffer[he],b,x,i.COLOR_ATTACHMENT0,le,he);else me(F.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,le,0);E(x,fe)&&M(le),t.unbindTexture()}b.depthBuffer&&ye(b)}function gt(b){const x=f(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,J=F.length;Q<J;Q++){const ee=F[Q];if(E(ee,x)){const fe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ee).__webglTexture;t.bindTexture(fe,le),M(fe),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&ue(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,Q=b.height;let J=i.COLOR_BUFFER_BIT;const ee=[],fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),he=b.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){ee.push(i.COLOR_ATTACHMENT0+Ee),b.depthBuffer&&ee.push(fe);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),he){const $=n.get(x[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ne=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ae(b){return Math.min(r.maxSamples,b.samples)}function ue(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ie(b,x){const F=b.colorSpace,Q=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Jr||F!==nn&&F!==It&&(qe.getTransfer(F)===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===kt?(b.format=Jr,b.minFilter=Lt,b.generateMipmaps=!1):x=co.sRGBToLinear(x):(Q!==kt||J!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=I,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function Jf(i,e,t){const n=t.isWebGL2;function r(s,o=It){let a;const l=qe.getTransfer(o);if(s===pn)return i.UNSIGNED_BYTE;if(s===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(s===eo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ml)return i.BYTE;if(s===Sl)return i.SHORT;if(s===ss)return i.UNSIGNED_SHORT;if(s===Ja)return i.INT;if(s===hn)return i.UNSIGNED_INT;if(s===dn)return i.FLOAT;if(s===vi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===El)return i.ALPHA;if(s===kt)return i.RGBA;if(s===yl)return i.LUMINANCE;if(s===bl)return i.LUMINANCE_ALPHA;if(s===Cn)return i.DEPTH_COMPONENT;if(s===ii)return i.DEPTH_STENCIL;if(s===Jr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Tl)return i.RED;if(s===to)return i.RED_INTEGER;if(s===wl)return i.RG;if(s===no)return i.RG_INTEGER;if(s===io)return i.RGBA_INTEGER;if(s===gr||s===_r||s===xr||s===vr)if(l===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===As||s===Rs||s===Cs||s===Ls)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===As)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ls)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ro)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ps||s===Ds)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ps)return l===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ds)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Us||s===Is||s===Ns||s===Fs||s===Os||s===Bs||s===zs||s===Gs||s===ks||s===Hs||s===Vs||s===Ws||s===Xs||s===qs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Us)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Is)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ns)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Os)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ks)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ws)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mr||s===Ys||s===Ks)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mr)return l===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ks)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Al||s===js||s===Zs||s===$s)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===js)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$s)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Qf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),d=this._getHandJoint(c,g);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tp extends si{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,_=null;const g=t.getContextAttributes();let f=null,d=null;const E=[],M=[],T=new ke;let R=null;const w=new Ut;w.layers.enable(1),w.viewport=new ht;const A=new Ut;A.layers.enable(2),A.viewport=new ht;const B=[w,A],v=new Qf;v.layers.enable(1),v.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=E[H];return j===void 0&&(j=new Vr,E[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=E[H];return j===void 0&&(j=new Vr,E[H]=j),j.getGripSpace()},this.getHand=function(H){let j=E[H];return j===void 0&&(j=new Vr,E[H]=j),j.getHandSpace()};function G(H){const j=M.indexOf(H.inputSource);if(j===-1)return;const oe=E[j];oe!==void 0&&(oe.update(H.inputSource,H.frame,c||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let H=0;H<E.length;H++){const j=M[H];j!==null&&(M[H]=null,E[H].disconnect(j))}y=null,z=null,e.setRenderTarget(f),m=null,p=null,u=null,r=null,d=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Dn(m.framebufferWidth,m.framebufferHeight,{format:kt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,oe=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?ii:Cn,oe=g.stencil?Rn:hn);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(me),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Dn(p.textureWidth,p.textureHeight,{format:kt,type:pn,depthTexture:new yo(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ce=e.properties.get(d);Ce.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(H){for(let j=0;j<H.removed.length;j++){const oe=H.removed[j],ge=M.indexOf(oe);ge>=0&&(M[ge]=null,E[ge].disconnect(oe))}for(let j=0;j<H.added.length;j++){const oe=H.added[j];let ge=M.indexOf(oe);if(ge===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=M.length){M.push(oe),ge=Ce;break}else if(M[Ce]===null){M[Ce]=oe,ge=Ce;break}if(ge===-1)break}const me=E[ge];me&&me.connect(oe)}}const U=new P,V=new P;function Y(H,j,oe){U.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const ge=U.distanceTo(V),me=j.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Pe=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),He=(me[9]+1)/me[5],I=(me[9]-1)/me[5],gt=(me[8]-1)/me[0],ve=(Ce[8]+1)/Ce[0],Ae=Pe*gt,ue=Pe*ve,$e=ge/(-gt+ve),Ie=$e*-gt;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ie),H.translateZ($e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const b=Pe+$e,x=ye+$e,F=Ae-Ie,Q=ue+(ge-Ie),J=He*ye/x*b,ee=I*ye/x*b;H.projectionMatrix.makePerspective(F,Q,J,ee,b,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;v.near=A.near=w.near=H.near,v.far=A.far=w.far=H.far,(y!==v.near||z!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,z=v.far);const j=H.parent,oe=v.cameras;W(v,j);for(let ge=0;ge<oe.length;ge++)W(oe[ge],j);oe.length===2?Y(v,w,A):v.projectionMatrix.copy(w.projectionMatrix),X(H,v,j)};function X(H,j,oe){oe===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Mi*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let K=null;function te(H,j){if(h=j.getViewerPose(c||o),_=j,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ge=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){const Ce=oe[me];let Pe=null;if(m!==null)Pe=m.getViewport(Ce);else{const He=u.getViewSubImage(p,Ce);Pe=He.viewport,me===0&&(e.setRenderTargetTextures(d,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(d))}let ye=B[me];ye===void 0&&(ye=new Ut,ye.layers.enable(me),ye.viewport=new ht,B[me]=ye),ye.matrix.fromArray(Ce.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ce.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(v.matrix.copy(ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(ye)}}for(let oe=0;oe<E.length;oe++){const ge=M[oe],me=E[oe];ge!==null&&me!==void 0&&me.update(ge,j,c||o)}K&&K(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const ne=new So;ne.setAnimationLoop(te),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}function np(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,xo(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,E,M,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),u(f,d)):d.isMeshPhongMaterial?(s(f,d),h(f,d)):d.isMeshStandardMaterial?(s(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,T)):d.isMeshMatcapMaterial?(s(f,d),_(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),g(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,E,M):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Tt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Tt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(f.envMap.value=E,f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,E,M){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*E,f.scale.value=M*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,E){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){const E=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ip(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=r[E.id];T===void 0&&(_(E),T=h(E),r[E.id]=T,E.addEventListener("dispose",f));const R=M.program;n.updateUBOMapping(E,R);const w=e.render.frame;s[E.id]!==w&&(p(E),s[E.id]=w)}function h(E){const M=u();E.__bindingPointIndex=M;const T=i.createBuffer(),R=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const M=r[E.id],T=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=T.length;w<A;w++){const B=Array.isArray(T[w])?T[w]:[T[w]];for(let v=0,y=B.length;v<y;v++){const z=B[v];if(m(z,w,v,R)===!0){const G=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let L=0;for(let U=0;U<Z.length;U++){const V=Z[U],Y=g(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+L,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,M,T,R){const w=E.value,A=M+"_"+T;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const B=R[A];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return R[A]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function _(E){const M=E.uniforms;let T=0;const R=16;for(let A=0,B=M.length;A<B;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,z=v.length;y<z;y++){const G=v[y],Z=Array.isArray(G.value)?G.value:[G.value];for(let L=0,U=Z.length;L<U;L++){const V=Z[L],Y=g(V),W=T%R;W!==0&&R-W<Y.boundary&&(T+=R-W),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Y.storage}}}const w=T%R;return w>0&&(T+=R-w),E.__size=T,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Co{constructor(e={}){const{canvas:t=Jl(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const M=this;let T=!1,R=0,w=0,A=null,B=-1,v=null;const y=new ht,z=new ht;let G=null;const Z=new _e(0);let L=0,U=t.width,V=t.height,Y=1,W=null,X=null;const K=new ht(0,0,U,V),te=new ht(0,0,U,V);let ne=!1;const H=new ls;let j=!1,oe=!1,ge=null;const me=new rt,Ce=new ke,Pe=new P,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?Y:1}let I=n;function gt(S,D){for(let O=0;O<S.length;O++){const k=S[O],N=t.getContext(k,D);if(N!==null)return N}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rs}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&D.shift(),I=gt(D,S),I===null)throw gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ve,Ae,ue,$e,Ie,b,x,F,Q,J,ee,fe,le,he,Ee,Ne,$,We,Ge,we,xe,de,De,Ve;function Qe(){ve=new uu(I),Ae=new au(I,ve,e),ve.init(Ae),de=new Jf(I,ve,Ae),ue=new Zf(I,ve,Ae),$e=new mu(I),Ie=new Ff,b=new $f(I,ve,ue,Ie,Ae,de,$e),x=new lu(M),F=new du(M),Q=new yc(I,Ae),De=new ru(I,ve,Q,Ae),J=new fu(I,Q,$e,De),ee=new vu(I,J,Q,$e),Ge=new xu(I,Ae,b),Ne=new ou(Ie),fe=new Nf(M,x,F,ve,Ae,De,Ne),le=new np(M,Ie),he=new Bf,Ee=new Wf(ve,Ae),We=new iu(M,x,F,ue,ee,p,l),$=new jf(M,ee,Ae),Ve=new ip(I,$e,Ae,ue),we=new su(I,ve,$e,Ae),xe=new pu(I,ve,$e,Ae),$e.programs=fe.programs,M.capabilities=Ae,M.extensions=ve,M.properties=Ie,M.renderLists=he,M.shadowMap=$,M.state=ue,M.info=$e}Qe();const Oe=new tp(M,I);this.xr=Oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(U,V,!1))},this.getSize=function(S){return S.set(U,V)},this.setSize=function(S,D,O=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,V=D,t.width=Math.floor(S*Y),t.height=Math.floor(D*Y),O===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(U*Y,V*Y).floor()},this.setDrawingBufferSize=function(S,D,O){U=S,V=D,Y=O,t.width=Math.floor(S*O),t.height=Math.floor(D*O),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,D,O,k){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,D,O,k),ue.viewport(y.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(S){return S.copy(te)},this.setScissor=function(S,D,O,k){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,D,O,k),ue.scissor(z.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){ue.setScissorTest(ne=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(S=!0,D=!0,O=!0){let k=0;if(S){let N=!1;if(A!==null){const ce=A.texture.format;N=ce===io||ce===no||ce===to}if(N){const ce=A.texture.type,pe=ce===pn||ce===hn||ce===ss||ce===Rn||ce===Qa||ce===eo,Se=We.getClearColor(),Te=We.getClearAlpha(),Fe=Se.r,Re=Se.g,Le=Se.b;pe?(m[0]=Fe,m[1]=Re,m[2]=Le,m[3]=Te,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Fe,_[1]=Re,_[2]=Le,_[3]=Te,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}D&&(k|=I.DEPTH_BUFFER_BIT),O&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),Ee.dispose(),Ie.dispose(),x.dispose(),F.dispose(),ee.dispose(),De.dispose(),Ve.dispose(),fe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",_t),Oe.removeEventListener("sessionend",je),ge&&(ge.dispose(),ge=null),xt.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=$e.autoReset,D=$.enabled,O=$.autoUpdate,k=$.needsUpdate,N=$.type;Qe(),$e.autoReset=S,$.enabled=D,$.autoUpdate=O,$.needsUpdate=k,$.type=N}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){const D=S.target;D.removeEventListener("dispose",ae),be(D)}function be(S){Me(S),Ie.remove(S)}function Me(S){const D=Ie.get(S).programs;D!==void 0&&(D.forEach(function(O){fe.releaseProgram(O)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,O,k,N,ce){D===null&&(D=ye);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Se=Uo(S,D,O,k,N);ue.setMaterial(k,pe);let Te=O.index,Fe=1;if(k.wireframe===!0){if(Te=J.getWireframeAttribute(O),Te===void 0)return;Fe=2}const Re=O.drawRange,Le=O.attributes.position;let nt=Re.start*Fe,At=(Re.start+Re.count)*Fe;ce!==null&&(nt=Math.max(nt,ce.start*Fe),At=Math.min(At,(ce.start+ce.count)*Fe)),Te!==null?(nt=Math.max(nt,0),At=Math.min(At,Te.count)):Le!=null&&(nt=Math.max(nt,0),At=Math.min(At,Le.count));const lt=At-nt;if(lt<0||lt===1/0)return;De.setup(N,k,Se,O,Te);let Xt,Je=we;if(Te!==null&&(Xt=Q.get(Te),Je=xe,Je.setIndex(Xt)),N.isMesh)k.wireframe===!0?(ue.setLineWidth(k.wireframeLinewidth*He()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(N.isLine){let Be=k.linewidth;Be===void 0&&(Be=1),ue.setLineWidth(Be*He()),N.isLineSegments?Je.setMode(I.LINES):N.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else N.isPoints?Je.setMode(I.POINTS):N.isSprite&&Je.setMode(I.TRIANGLES);if(N.isBatchedMesh)Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Je.renderInstances(nt,lt,N.count);else if(O.isInstancedBufferGeometry){const Be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,dr=Math.min(O.instanceCount,Be);Je.renderInstances(nt,lt,dr)}else Je.render(nt,lt)};function Ye(S,D,O){S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=Tt,S.needsUpdate=!0,bi(S,D,O),S.side=mn,S.needsUpdate=!0,bi(S,D,O),S.side=Qt):bi(S,D,O)}this.compile=function(S,D,O=null){O===null&&(O=S),f=Ee.get(O),f.init(),E.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(M._useLegacyLights);const k=new Set;return S.traverse(function(N){const ce=N.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const Se=ce[pe];Ye(Se,O,N),k.add(Se)}else Ye(ce,O,N),k.add(ce)}),E.pop(),f=null,k},this.compileAsync=function(S,D,O=null){const k=this.compile(S,D,O);return new Promise(N=>{function ce(){if(k.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){N(S);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ke=null;function ot(S){Ke&&Ke(S)}function _t(){xt.stop()}function je(){xt.start()}const xt=new So;xt.setAnimationLoop(ot),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(S){Ke=S,Oe.setAnimationLoop(S),S===null?xt.stop():xt.start()},Oe.addEventListener("sessionstart",_t),Oe.addEventListener("sessionend",je),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(D),D=Oe.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,D,A),f=Ee.get(S,E.length),f.init(),E.push(f),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(me),oe=this.localClippingEnabled,j=Ne.init(this.clippingPlanes,oe),g=he.get(S,d.length),g.init(),d.push(g),Vt(S,D,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,j===!0&&Ne.beginShadows();const O=f.state.shadowsArray;if($.render(O,S,D),j===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,S),f.setupLights(M._useLegacyLights),D.isArrayCamera){const k=D.cameras;for(let N=0,ce=k.length;N<ce;N++){const pe=k[N];ms(g,S,pe,pe.viewport)}}else ms(g,S,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,D),De.resetDefaultState(),B=-1,v=null,E.pop(),E.length>0?f=E[E.length-1]:f=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Vt(S,D,O,k){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){k&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const pe=ee.update(S),Se=S.material;Se.visible&&g.push(S,pe,Se,O,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const pe=ee.update(S),Se=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const Te=pe.groups;for(let Fe=0,Re=Te.length;Fe<Re;Fe++){const Le=Te[Fe],nt=Se[Le.materialIndex];nt&&nt.visible&&g.push(S,pe,nt,O,Pe.z,Le)}}else Se.visible&&g.push(S,pe,Se,O,Pe.z,null)}}const ce=S.children;for(let pe=0,Se=ce.length;pe<Se;pe++)Vt(ce[pe],D,O,k)}function ms(S,D,O,k){const N=S.opaque,ce=S.transmissive,pe=S.transparent;f.setupLightsView(O),j===!0&&Ne.setGlobalState(M.clippingPlanes,O),ce.length>0&&Do(N,ce,D,O),k&&ue.viewport(y.copy(k)),N.length>0&&yi(N,D,O),ce.length>0&&yi(ce,D,O),pe.length>0&&yi(pe,D,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Do(S,D,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ce=Ae.isWebGL2;ge===null&&(ge=new Dn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?vi:pn,minFilter:xi,samples:ce?4:0})),M.getDrawingBufferSize(Ce),ce?ge.setSize(Ce.x,Ce.y):ge.setSize(tr(Ce.x),tr(Ce.y));const pe=M.getRenderTarget();M.setRenderTarget(ge),M.getClearColor(Z),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const Se=M.toneMapping;M.toneMapping=fn,yi(S,O,k),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge);let Te=!1;for(let Fe=0,Re=D.length;Fe<Re;Fe++){const Le=D[Fe],nt=Le.object,At=Le.geometry,lt=Le.material,Xt=Le.group;if(lt.side===Qt&&nt.layers.test(k.layers)){const Je=lt.side;lt.side=Tt,lt.needsUpdate=!0,gs(nt,O,k,At,lt,Xt),lt.side=Je,lt.needsUpdate=!0,Te=!0}}Te===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge)),M.setRenderTarget(pe),M.setClearColor(Z,L),M.toneMapping=Se}function yi(S,D,O){const k=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ce=S.length;N<ce;N++){const pe=S[N],Se=pe.object,Te=pe.geometry,Fe=k===null?pe.material:k,Re=pe.group;Se.layers.test(O.layers)&&gs(Se,D,O,Te,Fe,Re)}}function gs(S,D,O,k,N,ce){S.onBeforeRender(M,D,O,k,N,ce),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,D,O,k,S,ce),N.transparent===!0&&N.side===Qt&&N.forceSinglePass===!1?(N.side=Tt,N.needsUpdate=!0,M.renderBufferDirect(O,D,k,N,S,ce),N.side=mn,N.needsUpdate=!0,M.renderBufferDirect(O,D,k,N,S,ce),N.side=Qt):M.renderBufferDirect(O,D,k,N,S,ce),S.onAfterRender(M,D,O,k,N,ce)}function bi(S,D,O){D.isScene!==!0&&(D=ye);const k=Ie.get(S),N=f.state.lights,ce=f.state.shadowsArray,pe=N.state.version,Se=fe.getParameters(S,N.state,ce,D,O),Te=fe.getProgramCacheKey(Se);let Fe=k.programs;k.environment=S.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||k.environment),Fe===void 0&&(S.addEventListener("dispose",ae),Fe=new Map,k.programs=Fe);let Re=Fe.get(Te);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===pe)return xs(S,Se),Re}else Se.uniforms=fe.getUniforms(S),S.onBuild(O,Se,M),S.onBeforeCompile(Se,M),Re=fe.acquireProgram(Se,Te),Fe.set(Te,Re),k.uniforms=Se.uniforms;const Le=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=Ne.uniform),xs(S,Se),k.needsLights=No(S),k.lightsStateVersion=pe,k.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function _s(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=ji.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function xs(S,D){const O=Ie.get(S);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Uo(S,D,O,k,N){D.isScene!==!0&&(D=ye),b.resetTextureUnits();const ce=D.fog,pe=k.isMeshStandardMaterial?D.environment:null,Se=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nn,Te=(k.isMeshStandardMaterial?F:x).get(k.envMap||pe),Fe=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!O.morphAttributes.position,nt=!!O.morphAttributes.normal,At=!!O.morphAttributes.color;let lt=fn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(lt=M.toneMapping);const Xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=Xt!==void 0?Xt.length:0,Be=Ie.get(k),dr=f.state.lights;if(j===!0&&(oe===!0||S!==v)){const Pt=S===v&&k.id===B;Ne.setState(k,S,Pt)}let et=!1;k.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==dr.state.version||Be.outputColorSpace!==Se||N.isBatchedMesh&&Be.batching===!1||!N.isBatchedMesh&&Be.batching===!0||N.isInstancedMesh&&Be.instancing===!1||!N.isInstancedMesh&&Be.instancing===!0||N.isSkinnedMesh&&Be.skinning===!1||!N.isSkinnedMesh&&Be.skinning===!0||N.isInstancedMesh&&Be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Be.instancingColor===!1&&N.instanceColor!==null||Be.envMap!==Te||k.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Re||Be.morphTargets!==Le||Be.morphNormals!==nt||Be.morphColors!==At||Be.toneMapping!==lt||Ae.isWebGL2===!0&&Be.morphTargetsCount!==Je)&&(et=!0):(et=!0,Be.__version=k.version);let gn=Be.currentProgram;et===!0&&(gn=bi(k,D,N));let vs=!1,hi=!1,ur=!1;const ft=gn.getUniforms(),_n=Be.uniforms;if(ue.useProgram(gn.program)&&(vs=!0,hi=!0,ur=!0),k.id!==B&&(B=k.id,hi=!0),vs||v!==S){ft.setValue(I,"projectionMatrix",S.projectionMatrix),ft.setValue(I,"viewMatrix",S.matrixWorldInverse);const Pt=ft.map.cameraPosition;Pt!==void 0&&Pt.setValue(I,Pe.setFromMatrixPosition(S.matrixWorld)),Ae.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,hi=!0,ur=!0)}if(N.isSkinnedMesh){ft.setOptional(I,N,"bindMatrix"),ft.setOptional(I,N,"bindMatrixInverse");const Pt=N.skeleton;Pt&&(Ae.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(I,"boneTexture",Pt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ft.setOptional(I,N,"batchingTexture"),ft.setValue(I,"batchingTexture",N._matricesTexture,b));const fr=O.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&Ae.isWebGL2===!0)&&Ge.update(N,O,gn),(hi||Be.receiveShadow!==N.receiveShadow)&&(Be.receiveShadow=N.receiveShadow,ft.setValue(I,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_n.envMap.value=Te,_n.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),hi&&(ft.setValue(I,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&Io(_n,ur),ce&&k.fog===!0&&le.refreshFogUniforms(_n,ce),le.refreshMaterialUniforms(_n,k,Y,V,ge),ji.upload(I,_s(Be),_n,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ji.upload(I,_s(Be),_n,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(I,"center",N.center),ft.setValue(I,"modelViewMatrix",N.modelViewMatrix),ft.setValue(I,"normalMatrix",N.normalMatrix),ft.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Pt=k.uniformsGroups;for(let pr=0,Fo=Pt.length;pr<Fo;pr++)if(Ae.isWebGL2){const Ms=Pt[pr];Ve.update(Ms,gn),Ve.bind(Ms,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function Io(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function No(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,O){Ie.get(S.texture).__webglTexture=D,Ie.get(S.depthTexture).__webglTexture=O;const k=Ie.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const O=Ie.get(S);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,O=0){A=S,R=D,w=O;let k=!0,N=null,ce=!1,pe=!1;if(S){const Te=Ie.get(S);Te.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),k=!1):Te.__webglFramebuffer===void 0?b.setupRenderTarget(S):Te.__hasExternalTextures&&b.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const Re=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][O]:N=Re[D],ce=!0):Ae.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?N=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[O]:N=Re,y.copy(S.viewport),z.copy(S.scissor),G=S.scissorTest}else y.copy(K).multiplyScalar(Y).floor(),z.copy(te).multiplyScalar(Y).floor(),G=ne;if(ue.bindFramebuffer(I.FRAMEBUFFER,N)&&Ae.drawBuffers&&k&&ue.drawBuffers(S,N),ue.viewport(y),ue.scissor(z),ue.setScissorTest(G),ce){const Te=Ie.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,O)}else if(pe){const Te=Ie.get(S.texture),Fe=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.__webglTexture,O||0,Fe)}B=-1},this.readRenderTargetPixels=function(S,D,O,k,N,ce,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){ue.bindFramebuffer(I.FRAMEBUFFER,Se);try{const Te=S.texture,Fe=Te.format,Re=Te.type;if(Fe!==kt&&de.convert(Fe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===vi&&(ve.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Re!==pn&&de.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===dn&&(Ae.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-k&&O>=0&&O<=S.height-N&&I.readPixels(D,O,k,N,de.convert(Fe),de.convert(Re),ce)}finally{const Te=A!==null?Ie.get(A).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(S,D,O=0){const k=Math.pow(2,-O),N=Math.floor(D.image.width*k),ce=Math.floor(D.image.height*k);b.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,S.x,S.y,N,ce),ue.unbindTexture()},this.copyTextureToTexture=function(S,D,O,k=0){const N=D.image.width,ce=D.image.height,pe=de.convert(O.format),Se=de.convert(O.type);b.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,S.x,S.y,N,ce,pe,Se,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,k,S.x,S.y,pe,Se,D.image),k===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,D,O,k,N=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,Se=S.max.z-S.min.z+1,Te=de.convert(k.format),Fe=de.convert(k.type);let Re;if(k.isData3DTexture)b.setTexture3D(k,0),Re=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),At=I.getParameter(I.UNPACK_SKIP_PIXELS),lt=I.getParameter(I.UNPACK_SKIP_ROWS),Xt=I.getParameter(I.UNPACK_SKIP_IMAGES),Je=O.isCompressedTexture?O.mipmaps[N]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Re,N,D.x,D.y,D.z,ce,pe,Se,Te,Fe,Je.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Re,N,D.x,D.y,D.z,ce,pe,Se,Te,Je.data)):I.texSubImage3D(Re,N,D.x,D.y,D.z,ce,pe,Se,Te,Fe,Je),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt),N===0&&k.generateMipmaps&&I.generateMipmap(Re),ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,ue.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===as?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===ar?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Ln:so}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?ut:nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rp extends Co{}rp.prototype.isWebGL1Renderer=!0;class ds{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new ds(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sp extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Lo extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ka=new rt,ts=new fo,Yi=new or,Ki=new P;class ap extends dt{constructor(e=new bt,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(r),Yi.radius+=s,e.ray.intersectsSphere(Yi)===!1)return;ka.copy(r).invert(),ts.copy(e.ray).applyMatrix4(ka);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=p,g=m;_<g;_++){const f=c.getX(_);Ki.fromBufferAttribute(u,f),Ha(Ki,f,l,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=p,g=m;_<g;_++)Ki.fromBufferAttribute(u,_),Ha(Ki,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ha(i,e,t,n,r,s,o){const a=ts.distanceSqToPoint(i);if(a<t){const l=new P;ts.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class op extends wt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hr extends bt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],p=[],m=[];let _=0;const g=[],f=n/2;let d=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function E(){const T=new P,R=new P;let w=0;const A=(t-e)/n;for(let B=0;B<=s;B++){const v=[],y=B/s,z=y*(t-e)+e;for(let G=0;G<=r;G++){const Z=G/r,L=Z*l+a,U=Math.sin(L),V=Math.cos(L);R.x=z*U,R.y=-y*n+f,R.z=z*V,u.push(R.x,R.y,R.z),T.set(U,A,V).normalize(),p.push(T.x,T.y,T.z),m.push(Z,1-y),v.push(_++)}g.push(v)}for(let B=0;B<r;B++)for(let v=0;v<s;v++){const y=g[v][B],z=g[v+1][B],G=g[v+1][B+1],Z=g[v][B+1];h.push(y,z,Z),h.push(z,G,Z),w+=6}c.addGroup(d,w,0),d+=w}function M(T){const R=_,w=new ke,A=new P;let B=0;const v=T===!0?e:t,y=T===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,f*y,0),p.push(0,y,0),m.push(.5,.5),_++;const z=_;for(let G=0;G<=r;G++){const L=G/r*l+a,U=Math.cos(L),V=Math.sin(L);A.x=v*V,A.y=f*y,A.z=v*U,u.push(A.x,A.y,A.z),p.push(0,y,0),w.x=U*.5+.5,w.y=V*.5*y+.5,m.push(w.x,w.y),_++}for(let G=0;G<r;G++){const Z=R+G,L=z+G;T===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),B+=3}c.addGroup(d,B,T===!0?1:2),d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends hr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fs extends bt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),h(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new P,T=new P,R=new P;for(let w=0;w<t.length;w+=3)m(t[w+0],M),m(t[w+1],T),m(t[w+2],R),l(M,T,R,E)}function l(E,M,T,R){const w=R+1,A=[];for(let B=0;B<=w;B++){A[B]=[];const v=E.clone().lerp(T,B/w),y=M.clone().lerp(T,B/w),z=w-B;for(let G=0;G<=z;G++)G===0&&B===w?A[B][G]=v:A[B][G]=v.clone().lerp(y,G/z)}for(let B=0;B<w;B++)for(let v=0;v<2*(w-B)-1;v++){const y=Math.floor(v/2);v%2===0?(p(A[B][y+1]),p(A[B+1][y]),p(A[B][y])):(p(A[B][y+1]),p(A[B+1][y+1]),p(A[B+1][y]))}}function c(E){const M=new P;for(let T=0;T<s.length;T+=3)M.x=s[T+0],M.y=s[T+1],M.z=s[T+2],M.normalize().multiplyScalar(E),s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}function h(){const E=new P;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const T=f(E)/2/Math.PI+.5,R=d(E)/Math.PI+.5;o.push(T,1-R)}_(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],T=o[E+2],R=o[E+4],w=Math.max(M,T,R),A=Math.min(M,T,R);w>.9&&A<.1&&(M<.2&&(o[E+0]+=1),T<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function p(E){s.push(E.x,E.y,E.z)}function m(E,M){const T=E*3;M.x=e[T+0],M.y=e[T+1],M.z=e[T+2]}function _(){const E=new P,M=new P,T=new P,R=new P,w=new ke,A=new ke,B=new ke;for(let v=0,y=0;v<s.length;v+=9,y+=6){E.set(s[v+0],s[v+1],s[v+2]),M.set(s[v+3],s[v+4],s[v+5]),T.set(s[v+6],s[v+7],s[v+8]),w.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),B.set(o[y+4],o[y+5]),R.copy(E).add(M).add(T).divideScalar(3);const z=f(R);g(w,y+0,E,z),g(A,y+2,M,z),g(B,y+4,T,z)}}function g(E,M,T,R){R<0&&E.x===1&&(o[M]=E.x-1),T.x===0&&T.z===0&&(o[M]=R/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.vertices,e.indices,e.radius,e.details)}}class ps extends fs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ps(e.radius,e.detail)}}class ir extends bt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const p=(t-e)/r,m=new P,_=new ke;for(let g=0;g<=r;g++){for(let f=0;f<=n;f++){const d=s+f/n*o;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}u+=p}for(let g=0;g<r;g++){const f=g*(n+1);for(let d=0;d<n;d++){const E=d+f,M=E,T=E+n+1,R=E+n+2,w=E+1;a.push(M,T,w),a.push(T,R,w)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rr extends bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,p=new P,m=[],_=[],g=[],f=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const w=R/t;u.x=-e*Math.cos(r+w*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(r+w*s)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),f.push(w+T,1-M),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const M=h[d][E+1],T=h[d][E],R=h[d+1][E],w=h[d+1][E+1];(d!==0||o>0)&&m.push(M,T,w),(d!==n-1||l<Math.PI)&&m.push(T,R,w)}this.setIndex(m),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cn extends bt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new P,u=new P,p=new P;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const g=_/r*s,f=m/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const g=(r+1)*m+_-1,f=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,E=(r+1)*m+_;o.push(g,f,E),o.push(f,d,E)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Bt extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Po extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wr=new rt,Va=new P,Wa=new P;class lp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Va.setFromMatrixPosition(e.matrixWorld),t.position.copy(Va),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cp extends lp{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xa extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new cp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hp extends Po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rs);class dp{constructor(e={}){q(this,"scene");q(this,"camera");q(this,"renderer");q(this,"container");this.container=e.container||document.getElementById("app")||document.body,this.scene=new sp,this.scene.background=new _e(461075);const t=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight,r=t/n;this.camera=new Ut(e.fov??55,r,e.near??.1,e.far??1e3),this.camera.position.set(0,7,12),this.camera.lookAt(0,0,0),this.renderer=new Co({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(t,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.classList.add("glide-canvas"),this.container.appendChild(this.renderer.domElement)}resize(e,t){const n=e??this.container.clientWidth??window.innerWidth,r=t??this.container.clientHeight??window.innerHeight;r!==0&&(this.camera.aspect=n/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,r),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)))}render(){this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}class up{constructor(e={}){q(this,"isRunning",!1);q(this,"animationFrameId",null);q(this,"lastTime",0);q(this,"totalElapsed",0);q(this,"maxDelta",.1);q(this,"onUpdate");q(this,"onRender");q(this,"onResize");q(this,"boundHandleResize");this.onUpdate=e.onUpdate,this.onRender=e.onRender,this.onResize=e.onResize,this.boundHandleResize=this.handleWindowResize.bind(this),window.addEventListener("resize",this.boundHandleResize,{passive:!0})}start(){this.isRunning||(this.isRunning=!0,this.lastTime=performance.now(),this.animationFrameId=requestAnimationFrame(this.tick.bind(this)))}stop(){this.isRunning=!1,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}tick(e){if(!this.isRunning)return;const t=(e-this.lastTime)/1e3,n=Math.min(Math.max(t,0),this.maxDelta);this.lastTime=e,this.totalElapsed+=n,this.onUpdate&&this.onUpdate(n,this.totalElapsed),this.onRender&&this.onRender(),this.animationFrameId=requestAnimationFrame(this.tick.bind(this))}handleWindowResize(){this.onResize&&this.onResize(window.innerWidth,window.innerHeight)}dispose(){this.stop(),window.removeEventListener("resize",this.boundHandleResize),this.onUpdate=void 0,this.onRender=void 0,this.onResize=void 0}}const qa={name:"Cyber Runner",account:"guest_runner",face:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%230b1326'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2300f0ff' stroke-width='2'/><circle cx='24' cy='28' r='4' fill='%2300f0ff'/><circle cx='40' cy='28' r='4' fill='%2300f0ff'/><path d='M 22 42 Q 32 50 42 42' stroke='%23ff0077' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",guest:!0,style:{primaryColor:"#00f0ff",secondaryColor:"#ff0077",skinColor:"#ffd1a4",hairColor:"#00e5ff",hat:"crown",accessory:"glasses"}},Ya=[{rank:1,name:"NeonPhantom",account:"phantom",color:"#ff0077",face:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%231a0933'/><circle cx='32' cy='32' r='28' fill='none' stroke='%23ff0077' stroke-width='2'/><polygon points='32,16 42,44 22,44' fill='%23ff0077'/></svg>",stats:{distance:18450,packets:342}},{rank:2,name:"PulseDrifter",account:"drifter",color:"#00f0ff",face:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%23062629'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2300f0ff' stroke-width='2'/><circle cx='32' cy='32' r='12' fill='%2300f0ff'/></svg>",stats:{distance:14220,packets:280}},{rank:3,name:"ByteVector",account:"vector",color:"#39ff14",face:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='%231a2010'/><circle cx='32' cy='32' r='28' fill='none' stroke='%2339ff14' stroke-width='2'/><rect x='22' y='22' width='20' height='20' fill='%2339ff14'/></svg>",stats:{distance:11090,packets:195}}],wn=class wn{constructor(){q(this,"connectUrl","https://start.ng/connect");q(this,"targetOrigin","https://start.ng");q(this,"iframe",null);q(this,"isIframeReady",!1);q(this,"pendingInitPromise",null);q(this,"currentPlayer",null);q(this,"playerChangeListeners",[]);this.initIframe(),this.initEventListeners()}get isReady(){return this.isIframeReady}static getInstance(){return wn.instance||(wn.instance=new wn),wn.instance}initIframe(){return this.pendingInitPromise?this.pendingInitPromise:typeof window>"u"||typeof document>"u"?Promise.resolve():(this.pendingInitPromise=new Promise(e=>{const t=document.getElementById("startng-connect-frame");if(t){this.iframe=t,this.isIframeReady=!0,e();return}const n=document.createElement("iframe");n.id="startng-connect-frame",n.src=this.connectUrl,n.title="start.ng communication bridge",n.setAttribute("aria-hidden","true"),n.tabIndex=-1,n.style.position="fixed",n.style.top="-9999px",n.style.left="-9999px",n.style.width="1px",n.style.height="1px",n.style.opacity="0",n.style.pointerEvents="none",n.style.border="none";let r=!1;const s=()=>{r||(r=!0,this.isIframeReady=!0,e())};n.onload=s,n.onerror=s,setTimeout(s,1200);const o=()=>{document.body?(document.body.appendChild(n),this.iframe=n):window.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(n),this.iframe=n})};document.readyState==="loading"?window.addEventListener("DOMContentLoaded",o):o()}),this.pendingInitPromise)}initEventListeners(){typeof window>"u"||(window.addEventListener("focus",()=>{this.whoAmI().catch(()=>{})}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.whoAmI().catch(()=>{})}))}onPlayerChange(e){if(this.playerChangeListeners.push(e),this.currentPlayer)try{e(this.currentPlayer)}catch(t){console.error("Error invoking player change listener:",t)}return()=>{this.playerChangeListeners=this.playerChangeListeners.filter(t=>t!==e)}}notifyPlayerChange(e){this.currentPlayer=e;for(const t of this.playerChangeListeners)try{t(e)}catch(n){console.error("Error in onPlayerChange listener:",n)}}getSignInUrl(){return`https://start.ng/?return_to=${encodeURIComponent(window.location.origin+window.location.pathname)}`}async askStartNg(e,t,n=1800){return await this.initIframe(),new Promise((r,s)=>{const o=`req_${Date.now()}_${Math.random().toString(36).substring(2,9)}`;let a=null;const l=h=>{if(h.origin!==this.targetOrigin&&!window.location.hostname.match(/localhost|127\.0\.0\.1/))return;const u=h.data;!u||typeof u!="object"||(u.requestId===o||u.type===t)&&(c(),r(u))},c=()=>{a!==null&&(clearTimeout(a),a=null),window.removeEventListener("message",l)};window.addEventListener("message",l),a=window.setTimeout(()=>{c(),s(new Error(`Timeout waiting for response to ${e.type} (requestId: ${o})`))},n);try{this.iframe&&this.iframe.contentWindow?this.iframe.contentWindow.postMessage({...e,requestId:o},"*"):(c(),s(new Error("start.ng bridge iframe not available")))}catch(h){c(),s(h)}})}async whoAmI(){try{const n=await this.askStartNg({type:"startng:whoami"},"startng:user",1500);if(n&&n.user)return this.notifyPlayerChange(n.user),n.user}catch{}const t=this.loadLocalUser()||qa;return this.notifyPlayerChange(t),t}async saveScore(e,t){var r;const n={distance:Math.floor(Math.max(0,e)),packets:Math.floor(Math.max(0,t))};if(this.recordLocalScore(n),(r=this.currentPlayer)!=null&&r.guest)return{success:!0};try{return await this.askStartNg({type:"startng:score",stats:n},"startng:scoreSaved",2500),{success:!0}}catch{return{success:!1}}}async getLeaderboard(e=10){try{const t=await this.askStartNg({type:"startng:leaderboard",limit:e},"startng:leaderboardData",2e3);if(t&&Array.isArray(t.leaderboard))return t.leaderboard.slice(0,e)}catch{}return this.getLocalLeaderboard(e)}loadLocalUser(){try{const e=localStorage.getItem("glide_mock_user");return e?JSON.parse(e):null}catch{return null}}recordLocalScore(e){try{const t="glide_local_scores",n=localStorage.getItem(t),r=n?JSON.parse(n):[];r.push(e),r.sort((s,o)=>o.distance-s.distance),localStorage.setItem(t,JSON.stringify(r.slice(0,50)))}catch{}}getLocalLeaderboard(e){try{const t=localStorage.getItem("glide_local_scores");if(t){const n=JSON.parse(t);if(n.length>0){const r=this.currentPlayer||qa,s=[...Ya,...n.map((o,a)=>{var l;return{rank:a+4,name:r.name,account:r.account,face:r.face,color:((l=r.style)==null?void 0:l.primaryColor)||"#00f0ff",stats:o}})];return s.sort((o,a)=>a.stats.distance-o.stats.distance),s.slice(0,e).map((o,a)=>({...o,rank:a+1}))}}}catch{}return Ya.slice(0,e)}};q(wn,"instance");let ns=wn;const tn=ns.getInstance(),An=class An{constructor(){q(this,"ctx",null);q(this,"isMuted",!1);q(this,"isUnlocked",!1);q(this,"rollOsc",null);q(this,"rollGain",null);q(this,"rollFilter",null);this.setupGestureUnlock()}get audioUnlocked(){return this.isUnlocked}static getInstance(){return An.instance||(An.instance=new An),An.instance}initContext(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}catch(e){console.warn("Web Audio API not supported on this platform:",e)}}setupGestureUnlock(){const e=()=>{this.initContext(),this.ctx&&this.ctx.state==="suspended"?this.ctx.resume().then(()=>{this.isUnlocked=!0,this.initRollHum()}).catch(()=>{}):this.ctx&&(this.isUnlocked=!0,this.initRollHum()),window.removeEventListener("keydown",e),window.removeEventListener("pointerdown",e),window.removeEventListener("touchstart",e)};window.addEventListener("keydown",e,{once:!0,passive:!0}),window.addEventListener("pointerdown",e,{once:!0,passive:!0}),window.addEventListener("touchstart",e,{once:!0,passive:!0})}initRollHum(){if(!(!this.ctx||this.rollOsc))try{this.rollOsc=this.ctx.createOscillator(),this.rollOsc.type="triangle",this.rollOsc.frequency.setValueAtTime(65,this.ctx.currentTime),this.rollFilter=this.ctx.createBiquadFilter(),this.rollFilter.type="lowpass",this.rollFilter.frequency.setValueAtTime(140,this.ctx.currentTime),this.rollGain=this.ctx.createGain(),this.rollGain.gain.setValueAtTime(0,this.ctx.currentTime),this.rollOsc.connect(this.rollFilter),this.rollFilter.connect(this.rollGain),this.rollGain.connect(this.ctx.destination),this.rollOsc.start()}catch(e){console.warn("Failed to start roll hum oscillator:",e)}}updateRollHum(e,t){if(!this.ctx||!this.rollGain||!this.rollOsc||!this.rollFilter||this.isMuted)return;const n=this.ctx.currentTime;if(!t||e<=.1)this.rollGain.gain.setTargetAtTime(0,n,.05);else{const r=Math.min(.08,e/30*.07),s=55+Math.min(50,e/30*45);this.rollGain.gain.setTargetAtTime(r,n,.08),this.rollOsc.frequency.setTargetAtTime(s,n,.08),this.rollFilter.frequency.setTargetAtTime(s*2.5,n,.08)}}playPacketPickup(){if(!(!this.ctx||this.isMuted))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.exponentialRampToValueAtTime(1760,e+.14),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.18);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(1320,e+.03),r.frequency.exponentialRampToValueAtTime(2200,e+.16),s.gain.setValueAtTime(.12,e+.03),s.gain.exponentialRampToValueAtTime(.001,e+.2),r.connect(s),s.connect(this.ctx.destination),r.start(e+.03),r.stop(e+.2)}catch{}}playFallOff(){if(!(!this.ctx||this.isMuted))try{const e=this.ctx.currentTime;this.rollGain&&this.rollGain.gain.setValueAtTime(0,e);const t=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),r=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(360,e),t.frequency.exponentialRampToValueAtTime(45,e+.85),n.type="lowpass",n.frequency.setValueAtTime(800,e),n.frequency.exponentialRampToValueAtTime(90,e+.85),r.gain.setValueAtTime(.24,e),r.gain.exponentialRampToValueAtTime(.001,e+.85),t.connect(n),n.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.85)}catch{}}playStartChime(){if(!(!this.ctx||this.isMuted))try{const e=this.ctx.currentTime;[440,554.37,659.25,880].forEach((n,r)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e+r*.06),o.gain.setValueAtTime(.12,e+r*.06),o.gain.exponentialRampToValueAtTime(.001,e+r*.06+.15),s.connect(o),o.connect(this.ctx.destination),s.start(e+r*.06),s.stop(e+r*.06+.15)})}catch{}}setMuted(e){this.isMuted=e,this.isMuted&&this.rollGain&&this.ctx&&this.rollGain.gain.setValueAtTime(0,this.ctx.currentTime)}toggleMute(){return this.setMuted(!this.isMuted),this.isMuted}};q(An,"instance");let is=An;const $t=is.getInstance();class fp{constructor(e){q(this,"container");q(this,"cardElement",null);q(this,"unsubscribe",null);this.container=e||document.getElementById("app")||document.body}mount(){this.cardElement||(this.injectStyles(),this.cardElement=document.createElement("div"),this.cardElement.className="glide-profile-card",this.container.appendChild(this.cardElement),tn.currentPlayer?this.render(tn.currentPlayer):this.renderLoading(),this.unsubscribe=tn.onPlayerChange(e=>{this.render(e)}))}update(e){this.render(e)}renderLoading(){this.cardElement&&(this.cardElement.innerHTML=`
      <div class="profile-inner">
        <div class="avatar-shimmer"></div>
        <div class="info-group">
          <div class="name-shimmer"></div>
          <div class="handle-shimmer"></div>
        </div>
      </div>
    `)}render(e){var c,h;if(!this.cardElement)return;const t=!!e.guest,n=tn.getSignInUrl(),r=((c=e.style)==null?void 0:c.primaryColor)||"#00f0ff",s=((h=e.style)==null?void 0:h.secondaryColor)||"#ff0077",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='18' fill='%230e1629' stroke='%2300f0ff' stroke-width='2'/><circle cx='20' cy='15' r='7' fill='%2300f0ff'/><path d='M 8 34 Q 20 22 32 34' fill='%2300f0ff'/></svg>";let a=e.face?e.face.trim():"";a?a.startsWith("data:image/svg+xml")&&(a=a.replace(/"/g,"'")):a=o,this.cardElement.style.setProperty("--user-primary",r),this.cardElement.style.setProperty("--user-secondary",s),this.cardElement.innerHTML=`
      <div class="profile-inner">
        <div class="avatar-wrapper">
          <img id="player-face" src="${a}" alt="${this.escapeHtml(e.name||"Player")}" class="profile-avatar" />
          <div class="status-indicator ${t?"guest":"online"}"></div>
        </div>
        <div class="info-group">
          <div class="name-row">
            <span class="player-name">${this.escapeHtml(e.name)}</span>
            <span class="user-badge ${t?"badge-guest":"badge-pilot"}">
              ${t?"GUEST":"PILOT"}
            </span>
          </div>
          <div class="player-account">@${this.escapeHtml(e.account)}</div>
        </div>
        ${t?`
          <a class="signin-button" href="${n}" target="_top" title="Sign in to save scores to leaderboard">
            <span class="signin-text">Sign In</span>
            <svg class="signin-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a.5.5 0 0 1 0-1h5A1.5 1.5 0 0 0 13 10.5v-5A1.5 1.5 0 0 0 11.5 4h-5a.5.5 0 0 1-.5-.5z"/>
              <path fill-rule="evenodd" d="M8.354 5.646a.5.5 0 0 1 0 .708L6.207 8.5H1.5a.5.5 0 0 1 0-1h4.707L8.354 5.646a.5.5 0 0 1 .708 0z"/>
            </svg>
          </a>
        `:""}
      </div>
    `;const l=this.cardElement.querySelector("#player-face");l&&(l.onerror=()=>{l.onerror=null,l.src=o})}escapeHtml(e){const t=document.createElement("div");return t.innerText=e,t.innerHTML}injectStyles(){const e="glide-profile-card-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .glide-profile-card {
        --user-primary: #00f0ff;
        --user-secondary: #ff0077;
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 100;
        pointer-events: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      }

      .glide-profile-card .profile-inner {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 14px 8px 10px;
        background: rgba(10, 16, 30, 0.78);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 240, 255, 0.28);
        border-radius: 40px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.45), 0 0 12px rgba(0, 240, 255, 0.12);
        transition: all 0.25s ease;
      }

      .glide-profile-card .profile-inner:hover {
        border-color: var(--user-primary);
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.55), 0 0 18px rgba(0, 240, 255, 0.25);
      }

      .glide-profile-card .avatar-wrapper {
        position: relative;
        width: 42px;
        height: 42px;
        flex-shrink: 0;
      }

      .glide-profile-card .profile-avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        background: #0d1527;
        border: 2px solid var(--user-primary);
        box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
      }

      .glide-profile-card .status-indicator {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        border: 2px solid #0a101e;
      }

      .glide-profile-card .status-indicator.online {
        background-color: #39ff14;
        box-shadow: 0 0 6px #39ff14;
      }

      .glide-profile-card .status-indicator.guest {
        background-color: #ffaa00;
        box-shadow: 0 0 6px #ffaa00;
      }

      .glide-profile-card .info-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 90px;
      }

      .glide-profile-card .name-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .glide-profile-card .player-name {
        font-weight: 700;
        font-size: 13.5px;
        letter-spacing: 0.3px;
        color: #ffffff;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        white-space: nowrap;
        max-width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .glide-profile-card .user-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.6px;
        padding: 1px 6px;
        border-radius: 10px;
        text-transform: uppercase;
      }

      .glide-profile-card .badge-guest {
        background: rgba(255, 170, 0, 0.18);
        color: #ffaa00;
        border: 1px solid rgba(255, 170, 0, 0.4);
      }

      .glide-profile-card .badge-pilot {
        background: rgba(0, 240, 255, 0.18);
        color: var(--user-primary);
        border: 1px solid rgba(0, 240, 255, 0.4);
      }

      .glide-profile-card .player-account {
        font-size: 11px;
        color: #8da4be;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        letter-spacing: 0.2px;
      }

      .glide-profile-card .signin-button {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 6px 12px;
        margin-left: 6px;
        background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 119, 0.2));
        color: #00f0ff;
        text-decoration: none;
        border: 1px solid rgba(0, 240, 255, 0.5);
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.4px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-shadow: 0 0 6px rgba(0, 240, 255, 0.6);
        box-shadow: 0 0 10px rgba(0, 240, 255, 0.15);
      }

      .glide-profile-card .signin-button:hover {
        background: linear-gradient(135deg, rgba(0, 240, 255, 0.35), rgba(255, 0, 119, 0.35));
        border-color: #00f0ff;
        color: #ffffff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
        transform: translateY(-1px);
      }

      .glide-profile-card .signin-button:active {
        transform: translateY(0);
      }

      .glide-profile-card .avatar-shimmer {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: #152238;
      }

      .glide-profile-card .name-shimmer {
        width: 80px;
        height: 14px;
        background: #152238;
        border-radius: 4px;
        margin-bottom: 5px;
      }

      .glide-profile-card .handle-shimmer {
        width: 50px;
        height: 10px;
        background: #152238;
        border-radius: 4px;
      }

      @media (max-width: 480px) {
        .glide-profile-card {
          top: 10px;
          left: 10px;
        }
        .glide-profile-card .player-name {
          max-width: 90px;
        }
      }
    `,document.head.appendChild(t)}destroy(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null),this.cardElement&&this.cardElement.parentElement&&(this.cardElement.parentElement.removeChild(this.cardElement),this.cardElement=null)}}class pp{constructor(e={}){q(this,"container");q(this,"hudElement",null);q(this,"distValueEl",null);q(this,"pktValueEl",null);q(this,"soundBtnEl",null);q(this,"helpBtnEl",null);q(this,"onHelpClick");q(this,"onSoundToggle");q(this,"isMuted",!1);this.container=e.container||document.getElementById("app")||document.body,this.onHelpClick=e.onHelpClick,this.onSoundToggle=e.onSoundToggle,this.injectStyles(),this.mount()}mount(){var e,t;this.hudElement||(this.hudElement=document.createElement("div"),this.hudElement.className="glide-hud-container",this.hudElement.innerHTML=`
      <div class="hud-stat hud-distance">
        <span class="hud-label">DISTANCE</span>
        <span class="hud-val" id="glide-hud-dist">0 <span class="hud-unit">m</span></span>
      </div>
      <div class="hud-stat hud-packets">
        <span class="hud-label">PACKETS</span>
        <span class="hud-val" id="glide-hud-pkts">0</span>
      </div>
      <div class="hud-controls">
        <button class="hud-btn hud-sound-btn" id="glide-sound-btn" title="Toggle Audio (M)" aria-label="Toggle Sound">
          <svg class="sound-on-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <svg class="sound-off-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display:none;">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        </button>
        <button class="hud-btn hud-help-btn" id="glide-help-btn" title="How to Play" aria-label="How to Play">
          <span class="help-symbol">?</span>
        </button>
      </div>
    `,this.container.appendChild(this.hudElement),this.distValueEl=this.hudElement.querySelector("#glide-hud-dist"),this.pktValueEl=this.hudElement.querySelector("#glide-hud-pkts"),this.soundBtnEl=this.hudElement.querySelector("#glide-sound-btn"),this.helpBtnEl=this.hudElement.querySelector("#glide-help-btn"),(e=this.soundBtnEl)==null||e.addEventListener("click",n=>{n.stopPropagation(),this.onSoundToggle&&(this.isMuted=this.onSoundToggle(),this.updateSoundIcon())}),(t=this.helpBtnEl)==null||t.addEventListener("click",n=>{n.stopPropagation(),this.onHelpClick&&this.onHelpClick()}))}setSoundMuted(e){this.isMuted=e,this.updateSoundIcon()}updateSoundIcon(){if(!this.soundBtnEl)return;const e=this.soundBtnEl.querySelector(".sound-on-icon"),t=this.soundBtnEl.querySelector(".sound-off-icon");e&&t&&(e.style.display=this.isMuted?"none":"block",t.style.display=this.isMuted?"block":"none")}update(e,t){this.distValueEl&&(this.distValueEl.innerHTML=`${Math.floor(e).toLocaleString()} <span class="hud-unit">m</span>`),this.pktValueEl&&(this.pktValueEl.innerText=t.toString())}setVisible(e){this.hudElement&&(this.hudElement.style.display=e?"flex":"none")}injectStyles(){const e="glide-hud-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .glide-hud-container {
        position: absolute;
        top: 16px;
        right: 16px;
        z-index: 100;
        display: flex;
        align-items: center;
        gap: 10px;
        pointer-events: none;
        user-select: none;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      }

      .hud-stat {
        background: rgba(10, 16, 32, 0.8);
        border: 1px solid rgba(0, 240, 255, 0.3);
        border-radius: 12px;
        padding: 8px 14px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      }

      .hud-distance {
        border-right: 3px solid #00f0ff;
      }

      .hud-packets {
        border-right: 3px solid #ff0077;
      }

      .hud-label {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #8da4be;
      }

      .hud-val {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
      }

      .hud-unit {
        font-size: 12px;
        color: #00f0ff;
      }

      .hud-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: auto;
      }

      .hud-btn {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: rgba(10, 16, 32, 0.8);
        border: 1px solid rgba(0, 240, 255, 0.35);
        color: #00f0ff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.2s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        padding: 0;
      }

      .hud-btn:hover {
        border-color: #00f0ff;
        background: rgba(0, 240, 255, 0.15);
        color: #ffffff;
        box-shadow: 0 0 16px rgba(0, 240, 255, 0.4);
        transform: translateY(-1px);
      }

      .hud-btn:active {
        transform: translateY(0);
      }

      .hud-help-btn {
        border-color: rgba(255, 0, 119, 0.4);
        color: #ff0077;
      }

      .hud-help-btn:hover {
        border-color: #ff0077;
        background: rgba(255, 0, 119, 0.15);
        color: #ffffff;
        box-shadow: 0 0 16px rgba(255, 0, 119, 0.4);
      }

      .help-symbol {
        font-size: 17px;
        font-weight: 900;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      @media (max-width: 600px) {
        .glide-hud-container {
          top: 10px;
          right: 10px;
          gap: 6px;
        }
        .hud-stat {
          padding: 6px 10px;
        }
        .hud-val {
          font-size: 15px;
        }
        .hud-btn {
          width: 32px;
          height: 32px;
        }
        .help-symbol {
          font-size: 15px;
        }
      }
    `,document.head.appendChild(t)}destroy(){this.hudElement&&this.hudElement.parentElement&&(this.hudElement.parentElement.removeChild(this.hudElement),this.hudElement=null)}}class mp{constructor(e={}){q(this,"container");q(this,"modalElement",null);q(this,"onRestartCallback",null);q(this,"boundKeyHandler");this.container=e.container||document.getElementById("app")||document.body,this.boundKeyHandler=this.handleKeyDown.bind(this),this.injectStyles()}async show(e,t,n){this.onRestartCallback=n,window.addEventListener("keydown",this.boundKeyHandler),this.modalElement||(this.modalElement=document.createElement("div"),this.modalElement.className="glide-gameover-backdrop",this.container.appendChild(this.modalElement));const r=Math.floor(Math.max(0,e));tn.saveScore(r,t).catch(()=>{}),this.render(r,t,null,!0);try{const s=await tn.getLeaderboard(10);this.render(r,t,s,!1)}catch{this.render(r,t,[],!1)}}hide(){window.removeEventListener("keydown",this.boundKeyHandler),this.modalElement&&(this.modalElement.classList.remove("active"),setTimeout(()=>{this.modalElement&&this.modalElement.parentElement&&(this.modalElement.parentElement.removeChild(this.modalElement),this.modalElement=null)},300))}render(e,t,n,r){if(!this.modalElement)return;let s="SCORE TRANSMITTED";const o=tn.currentPlayer;if(n&&o){const l=n.find(c=>c.account===o.account||c.name===o.name&&c.stats.distance<=e);l?s=`NEW RANK: #${l.rank}`:n.length>0&&e>=n[n.length-1].stats.distance&&(s="TOP 10 PILOT!")}this.modalElement.innerHTML=`
      <div class="glide-gameover-card">
        <div class="gameover-header">
          <div class="glitch-title" data-text="RUN TERMINATED">RUN TERMINATED</div>
          <div class="rank-tag">${s}</div>
        </div>

        <div class="stats-row">
          <div class="stat-box distance-box">
            <span class="stat-label">DISTANCE</span>
            <div class="stat-value">${e.toLocaleString()} <span class="stat-unit">m</span></div>
          </div>
          <div class="stat-box packets-box">
            <span class="stat-label">PACKETS ROUTED</span>
            <div class="stat-value">${t.toLocaleString()}</div>
          </div>
        </div>

        <div class="leaderboard-section">
          <div class="leaderboard-title">START.NG TOP PILOTS</div>
          <div class="leaderboard-table-container">
            ${r?'<div class="leaderboard-loading">Retrieving telemetry data...</div>':this.renderLeaderboardTable(n||[])}
          </div>
        </div>

        <button class="play-again-button" id="glide-play-again-btn">
          <span class="button-glow"></span>
          <span class="button-label">PLAY AGAIN</span>
          <span class="button-shortcut">(Space / Enter)</span>
        </button>
      </div>
    `,requestAnimationFrame(()=>{var l;(l=this.modalElement)==null||l.classList.add("active")});const a=this.modalElement.querySelector("#glide-play-again-btn");a&&a.addEventListener("click",()=>{this.triggerRestart()})}renderLeaderboardTable(e){return!e||e.length===0?'<div class="no-records">No telemetry recorded yet. Be the first!</div>':`
      <div class="leaderboard-list">
        ${e.slice(0,10).map((n,r)=>{const s=n.rank||r+1;return`
          <div class="leaderboard-row ${s===1?"rank-1":s===2?"rank-2":s===3?"rank-3":""}">
            <div class="row-rank">#${s}</div>
            <div class="row-pilot">
              <span class="pilot-badge" style="background-color: ${n.color||"#4b7bec"}">${(n.name||"?").charAt(0).toUpperCase()}</span>
              <div class="pilot-details">
                <span class="pilot-name">${this.escapeHtml(n.name)}</span>
                <span class="pilot-account">@${this.escapeHtml(n.account)}</span>
              </div>
            </div>
            <div class="row-stat stat-dist">${n.stats.distance.toLocaleString()}m</div>
            <div class="row-stat stat-pkts">${n.stats.packets} pkts</div>
          </div>
        `}).join("")}
      </div>
    `}handleKeyDown(e){(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),this.triggerRestart())}triggerRestart(){if(this.onRestartCallback){const e=this.onRestartCallback;this.onRestartCallback=null,this.hide(),e()}}escapeHtml(e){const t=document.createElement("div");return t.innerText=e,t.innerHTML}injectStyles(){const e="glide-gameover-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .glide-gameover-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(4, 7, 18, 0.88);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 16px;
        pointer-events: auto;
      }

      .glide-gameover-backdrop.active {
        opacity: 1;
      }

      .glide-gameover-card {
        width: 100%;
        max-width: 520px;
        background: rgba(10, 16, 32, 0.95);
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 20px;
        padding: 24px 28px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 240, 255, 0.2);
        display: flex;
        flex-direction: column;
        gap: 18px;
        transform: translateY(20px) scale(0.96);
        transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }

      .glide-gameover-backdrop.active .glide-gameover-card {
        transform: translateY(0) scale(1);
      }

      .gameover-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 240, 255, 0.2);
        padding-bottom: 12px;
      }

      .glitch-title {
        font-size: 22px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ff0077;
        text-shadow: 0 0 10px rgba(255, 0, 119, 0.6), 0 0 20px rgba(255, 0, 119, 0.3);
      }

      .rank-tag {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #00f0ff;
        background: rgba(0, 240, 255, 0.15);
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 12px;
        padding: 4px 10px;
        text-shadow: 0 0 6px rgba(0, 240, 255, 0.5);
      }

      .stats-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .stat-box {
        background: rgba(14, 23, 44, 0.75);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .distance-box {
        border-left: 3px solid #00f0ff;
      }

      .packets-box {
        border-left: 3px solid #ff0077;
      }

      .stat-label {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1px;
        color: #8da4be;
      }

      .stat-value {
        font-size: 24px;
        font-weight: 800;
        color: #ffffff;
        font-family: ui-monospace, monospace;
      }

      .stat-unit {
        font-size: 14px;
        color: #00f0ff;
        font-weight: 600;
      }

      .leaderboard-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .leaderboard-title {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #8da4be;
      }

      .leaderboard-table-container {
        max-height: 180px;
        overflow-y: auto;
        border-radius: 8px;
        background: rgba(7, 12, 24, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .leaderboard-list {
        display: flex;
        flex-direction: column;
      }

      .leaderboard-row {
        display: grid;
        grid-template-columns: 36px 1fr 90px 70px;
        align-items: center;
        padding: 8px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        font-size: 12px;
      }

      .leaderboard-row:last-child {
        border-bottom: none;
      }

      .leaderboard-row.rank-1 {
        background: rgba(255, 215, 0, 0.08);
        color: #ffd700;
      }

      .leaderboard-row.rank-2 {
        background: rgba(192, 192, 192, 0.08);
        color: #e0e0e0;
      }

      .leaderboard-row.rank-3 {
        background: rgba(205, 127, 50, 0.08);
        color: #cd7f32;
      }

      .row-rank {
        font-weight: 800;
        font-family: ui-monospace, monospace;
      }

      .row-pilot {
        display: flex;
        align-items: center;
        gap: 8px;
        overflow: hidden;
      }

      .pilot-badge {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 11px;
        color: #ffffff;
        flex-shrink: 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }

      .pilot-details {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .pilot-name {
        font-weight: 600;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .pilot-account {
        font-size: 10px;
        color: #8da4be;
      }

      .row-stat {
        text-align: right;
        font-family: ui-monospace, monospace;
        font-size: 11px;
      }

      .stat-dist {
        color: #00f0ff;
      }

      .stat-pkts {
        color: #ff0077;
      }

      .leaderboard-loading, .no-records {
        padding: 24px;
        text-align: center;
        font-size: 12px;
        color: #8da4be;
      }

      .play-again-button {
        position: relative;
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #00f0ff, #0077ff);
        color: #050a18;
        font-weight: 900;
        font-size: 15px;
        letter-spacing: 1px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
        transition: all 0.2s ease;
      }

      .play-again-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 28px rgba(0, 240, 255, 0.6);
        background: linear-gradient(135deg, #33f3ff, #1a8cff);
      }

      .play-again-button:active {
        transform: translateY(0);
      }

      .button-shortcut {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.75;
      }

      @media (max-width: 480px) {
        .glide-gameover-card {
          padding: 18px 16px;
        }
        .leaderboard-row {
          grid-template-columns: 28px 1fr 70px 50px;
          font-size: 11px;
        }
        .stat-value {
          font-size: 20px;
        }
      }
    `,document.head.appendChild(t)}destroy(){window.removeEventListener("keydown",this.boundKeyHandler),this.modalElement&&this.modalElement.parentElement&&(this.modalElement.parentElement.removeChild(this.modalElement),this.modalElement=null)}}class gp{constructor(e={}){q(this,"container");q(this,"modalElement",null);q(this,"isModalOpen",!1);q(this,"onCloseCallback",null);q(this,"boundKeyHandler");q(this,"storageKey","hasSeenTutorial");this.container=e.container||document.getElementById("app")||document.body,this.boundKeyHandler=this.handleKeyDown.bind(this),this.injectStyles()}checkFirstVisit(e){try{if(!localStorage.getItem(this.storageKey))return this.show(e),!0}catch{}return!1}isOpen(){return this.isModalOpen}show(e){this.isModalOpen||(this.isModalOpen=!0,this.onCloseCallback=e||null,window.addEventListener("keydown",this.boundKeyHandler),this.modalElement||(this.modalElement=document.createElement("div"),this.modalElement.className="glide-instructions-backdrop",this.container.appendChild(this.modalElement)),this.render(),requestAnimationFrame(()=>{var t;(t=this.modalElement)==null||t.classList.add("active")}))}hide(){if(this.isModalOpen){try{localStorage.setItem(this.storageKey,"true")}catch{}if(this.isModalOpen=!1,window.removeEventListener("keydown",this.boundKeyHandler),this.modalElement&&(this.modalElement.classList.remove("active"),setTimeout(()=>{this.modalElement&&this.modalElement.parentElement&&(this.modalElement.parentElement.removeChild(this.modalElement),this.modalElement=null)},250)),this.onCloseCallback){const e=this.onCloseCallback;this.onCloseCallback=null,e()}}}render(){var e,t;this.modalElement&&(this.modalElement.innerHTML=`
      <div class="glide-instructions-card">
        <div class="instructions-header">
          <div class="header-tag">NEURAL INTERFACE // GLIDE</div>
          <button class="instructions-close-btn" id="glide-inst-close" aria-label="Close instructions">&times;</button>
        </div>

        <h2 class="instructions-title">HOW TO PLAY</h2>

        <div class="instructions-objective">
          <div class="obj-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00f0ff" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <p class="obj-text">
            <strong>OBJECTIVE:</strong> Route data through the grid, collect packets, and avoid the void.
          </p>
        </div>

        <div class="controls-grid">
          <!-- Desktop Controls -->
          <div class="control-box">
            <div class="control-badge">DESKTOP</div>
            <div class="keys-display">
              <div class="key-group">
                <span class="keycap">A</span>
                <span class="keycap">D</span>
              </div>
              <span class="keys-or">or</span>
              <div class="key-group">
                <span class="keycap">&larr;</span>
                <span class="keycap">&rarr;</span>
              </div>
            </div>
            <div class="control-desc">Steer Left &amp; Right</div>
          </div>

          <!-- Mobile Controls -->
          <div class="control-box">
            <div class="control-badge">MOBILE &amp; TOUCH</div>
            <div class="touch-display">
              <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#00f0ff" stroke-width="2">
                <path d="M10 16 L22 16" stroke-dasharray="2 2"/>
                <polyline points="14 12 10 16 14 20"/>
                <polyline points="18 12 22 16 18 20"/>
                <circle cx="16" cy="16" r="4" fill="#ff0077"/>
              </svg>
            </div>
            <div class="control-desc">Drag / Swipe Across Screen</div>
          </div>
        </div>

        <div class="legend-section">
          <div class="legend-item packet-legend">
            <div class="legend-icon packet-icon">
              <div class="gem-shape"></div>
            </div>
            <div class="legend-info">
              <span class="legend-name">DATA PACKETS</span>
              <span class="legend-detail">+Score &bull; Leaderboard Routing</span>
            </div>
          </div>

          <div class="legend-item void-legend">
            <div class="legend-icon void-icon">
              <div class="hazard-shape">&times;</div>
            </div>
            <div class="legend-info">
              <span class="legend-name">GRID BOUNDARIES</span>
              <span class="legend-detail">Instant Fall into the Void</span>
            </div>
          </div>
        </div>

        <button class="start-btn" id="glide-inst-start">
          <span class="btn-text">GOT IT / START</span>
          <span class="btn-sub">(Space / Enter)</span>
        </button>
      </div>
    `,(e=this.modalElement.querySelector("#glide-inst-close"))==null||e.addEventListener("click",n=>{n.stopPropagation(),this.hide()}),(t=this.modalElement.querySelector("#glide-inst-start"))==null||t.addEventListener("click",n=>{n.stopPropagation(),this.hide()}),this.modalElement.addEventListener("click",n=>{n.target===this.modalElement&&this.hide()}))}handleKeyDown(e){this.isModalOpen&&(e.code==="Space"||e.code==="Enter"||e.code==="Escape")&&(e.preventDefault(),e.stopPropagation(),this.hide())}injectStyles(){const e="glide-instructions-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .glide-instructions-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(4, 7, 18, 0.88);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1100;
        opacity: 0;
        transition: opacity 0.25s ease;
        padding: 16px;
        pointer-events: auto;
      }

      .glide-instructions-backdrop.active {
        opacity: 1;
      }

      .glide-instructions-card {
        width: 100%;
        max-width: 500px;
        background: rgba(10, 16, 32, 0.96);
        border: 1px solid rgba(0, 240, 255, 0.35);
        border-radius: 20px;
        padding: 24px 26px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.75), 0 0 30px rgba(0, 240, 255, 0.18);
        display: flex;
        flex-direction: column;
        gap: 16px;
        transform: translateY(20px) scale(0.96);
        transition: transform 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .glide-instructions-backdrop.active .glide-instructions-card {
        transform: translateY(0) scale(1);
      }

      .instructions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header-tag {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #00f0ff;
        font-family: ui-monospace, monospace;
      }

      .instructions-close-btn {
        background: none;
        border: none;
        color: #8da4be;
        font-size: 24px;
        line-height: 1;
        cursor: pointer;
        padding: 0 4px;
        transition: color 0.15s ease;
      }

      .instructions-close-btn:hover {
        color: #ffffff;
      }

      .instructions-title {
        font-size: 24px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
        text-shadow: 0 0 14px rgba(0, 240, 255, 0.4);
        margin: 0;
      }

      .instructions-objective {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(0, 240, 255, 0.08);
        border: 1px solid rgba(0, 240, 255, 0.22);
        border-radius: 12px;
        padding: 12px 14px;
      }

      .obj-icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .obj-text {
        font-size: 13px;
        line-height: 1.45;
        color: #d0e4f7;
        margin: 0;
      }

      .obj-text strong {
        color: #00f0ff;
        letter-spacing: 0.5px;
      }

      .controls-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .control-box {
        background: rgba(14, 23, 44, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 14px 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 8px;
      }

      .control-badge {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #8da4be;
        font-family: ui-monospace, monospace;
      }

      .keys-display {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .key-group {
        display: flex;
        gap: 4px;
      }

      .keycap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        background: #17243e;
        border: 1px solid rgba(0, 240, 255, 0.4);
        border-radius: 6px;
        font-weight: 800;
        font-size: 13px;
        color: #00f0ff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }

      .keys-or {
        font-size: 11px;
        color: #8da4be;
      }

      .touch-display {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
      }

      .control-desc {
        font-size: 11.5px;
        font-weight: 600;
        color: #d0e4f7;
      }

      .legend-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 10px;
        background: rgba(14, 23, 44, 0.55);
        border: 1px solid rgba(255, 255, 255, 0.06);
        border-radius: 10px;
        padding: 8px 10px;
      }

      .legend-icon {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .packet-icon {
        background: rgba(0, 240, 255, 0.15);
        border: 1px solid rgba(0, 240, 255, 0.4);
      }

      .gem-shape {
        width: 14px;
        height: 14px;
        background: #00f0ff;
        transform: rotate(45deg);
        box-shadow: 0 0 8px #00f0ff;
      }

      .void-icon {
        background: rgba(255, 0, 119, 0.15);
        border: 1px solid rgba(255, 0, 119, 0.4);
      }

      .hazard-shape {
        font-size: 18px;
        font-weight: 900;
        color: #ff0077;
        line-height: 1;
        text-shadow: 0 0 8px #ff0077;
      }

      .legend-info {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .legend-name {
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #ffffff;
      }

      .legend-detail {
        font-size: 10px;
        color: #8da4be;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .start-btn {
        width: 100%;
        padding: 13px;
        background: linear-gradient(135deg, #00f0ff, #0077ff);
        color: #050a18;
        font-weight: 900;
        font-size: 14px;
        letter-spacing: 1px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
        transition: all 0.2s ease;
        margin-top: 4px;
      }

      .start-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 28px rgba(0, 240, 255, 0.55);
        background: linear-gradient(135deg, #33f3ff, #1a8cff);
      }

      .start-btn:active {
        transform: translateY(0);
      }

      .btn-sub {
        font-size: 11px;
        font-weight: 600;
        opacity: 0.75;
      }

      @media (max-width: 480px) {
        .glide-instructions-card {
          padding: 18px 16px;
          gap: 12px;
        }
        .controls-grid, .legend-section {
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .instructions-title {
          font-size: 20px;
        }
        .keycap {
          width: 24px;
          height: 24px;
          font-size: 11px;
        }
      }
    `,document.head.appendChild(t)}destroy(){window.removeEventListener("keydown",this.boundKeyHandler),this.modalElement&&this.modalElement.parentElement&&(this.modalElement.parentElement.removeChild(this.modalElement),this.modalElement=null)}}class _p{constructor(e,t){q(this,"mesh");q(this,"radius",.75);q(this,"coreMesh");q(this,"coreMaterial");q(this,"outerRingsGroup");q(this,"ring1Material");q(this,"ring2Material");q(this,"satellitesGroup");q(this,"satellite1Mesh");q(this,"satellite2Mesh");q(this,"sat1Material");q(this,"sat2Material");q(this,"hatGroup");q(this,"accessoryGroup");q(this,"trailPoints");q(this,"trailGeometry");q(this,"trailMaterial");q(this,"trailPositions");q(this,"trailAlphas");q(this,"trailSizes");q(this,"maxTrailParticles",180);q(this,"trailHeadIndex",0);q(this,"trailSpawnTimer",0);q(this,"position",new P(0,.75,0));q(this,"velocity",new P(0,0,0));q(this,"currentTrackSpeed",24);q(this,"lateralBoundary",4.2);q(this,"lateralSpeed",18);q(this,"lateralDamping",12);q(this,"targetTilt",0);q(this,"currentTilt",0);q(this,"inputState",{steerLeft:!1,steerRight:!1,accelerate:!1,brake:!1,touchSteerRatio:0,isTouching:!1});q(this,"boundKeyDown");q(this,"boundKeyUp");q(this,"boundPointerDown");q(this,"boundPointerMove");q(this,"boundPointerUp");q(this,"activeStyle");q(this,"sceneRef");this.sceneRef=e,this.mesh=new Ht,this.mesh.position.copy(this.position),this.activeStyle={primaryColor:(t==null?void 0:t.primaryColor)||"#00f0ff",secondaryColor:(t==null?void 0:t.secondaryColor)||"#ff0077",skinColor:(t==null?void 0:t.skinColor)||"#ffd1a4",hairColor:(t==null?void 0:t.hairColor)||"#00e5ff",hat:(t==null?void 0:t.hat)||"crown",accessory:(t==null?void 0:t.accessory)||"backpack"};const n=new rr(this.radius,32,24);this.coreMaterial=new Bt({color:new _e(this.activeStyle.primaryColor),emissive:new _e(this.activeStyle.primaryColor),emissiveIntensity:.45,roughness:.2,metalness:.85,wireframe:!1}),this.coreMesh=new Xe(n,this.coreMaterial),this.mesh.add(this.coreMesh),this.outerRingsGroup=new Ht;const r=new cn(1.05,.04,16,64);this.ring1Material=new Bt({color:new _e(this.activeStyle.secondaryColor),emissive:new _e(this.activeStyle.secondaryColor),emissiveIntensity:.6,roughness:.1,metalness:.9});const s=new Xe(r,this.ring1Material);this.outerRingsGroup.add(s);const o=new cn(1.15,.03,16,64);this.ring2Material=new Pn({color:new _e(this.activeStyle.secondaryColor),wireframe:!0,transparent:!0,opacity:.75});const a=new Xe(o,this.ring2Material);a.rotation.x=Math.PI/2,this.outerRingsGroup.add(a),this.mesh.add(this.outerRingsGroup),this.satellitesGroup=new Ht;const l=new rr(.12,16,16);this.sat1Material=new Bt({color:new _e(this.activeStyle.skinColor),emissive:new _e(this.activeStyle.skinColor),emissiveIntensity:.5,roughness:.3}),this.satellite1Mesh=new Xe(l,this.sat1Material),this.satellite1Mesh.position.set(1.35,0,0),this.satellitesGroup.add(this.satellite1Mesh),this.sat2Material=new Bt({color:new _e(this.activeStyle.hairColor),emissive:new _e(this.activeStyle.hairColor),emissiveIntensity:.5,roughness:.3}),this.satellite2Mesh=new Xe(l,this.sat2Material),this.satellite2Mesh.position.set(-1.35,0,0),this.satellitesGroup.add(this.satellite2Mesh),this.mesh.add(this.satellitesGroup),this.hatGroup=new Ht,this.accessoryGroup=new Ht,this.mesh.add(this.hatGroup),this.mesh.add(this.accessoryGroup),this.buildAttachments(),this.trailPositions=new Float32Array(this.maxTrailParticles*3),this.trailAlphas=new Float32Array(this.maxTrailParticles),this.trailSizes=new Float32Array(this.maxTrailParticles);for(let h=0;h<this.maxTrailParticles;h++)this.trailPositions[h*3+0]=0,this.trailPositions[h*3+1]=-100,this.trailPositions[h*3+2]=0,this.trailAlphas[h]=0,this.trailSizes[h]=0;this.trailGeometry=new bt,this.trailGeometry.setAttribute("position",new yt(this.trailPositions,3)),this.trailGeometry.setAttribute("alpha",new yt(this.trailAlphas,1));const c=this.createParticleTexture();this.trailMaterial=new Lo({color:new _e(this.activeStyle.primaryColor),size:.45,map:c,transparent:!0,blending:Xr,depthWrite:!1}),this.trailPoints=new ap(this.trailGeometry,this.trailMaterial),this.trailPoints.frustumCulled=!1,e.add(this.trailPoints),e.add(this.mesh),this.boundKeyDown=this.handleKeyDown.bind(this),this.boundKeyUp=this.handleKeyUp.bind(this),this.boundPointerDown=this.handlePointerDown.bind(this),this.boundPointerMove=this.handlePointerMove.bind(this),this.boundPointerUp=this.handlePointerUp.bind(this),this.attachEventListeners()}buildAttachments(){var e,t;for(;this.hatGroup.children.length>0;){const n=this.hatGroup.children[0];(e=n.geometry)==null||e.dispose(),this.hatGroup.remove(n)}for(;this.accessoryGroup.children.length>0;){const n=this.accessoryGroup.children[0];(t=n.geometry)==null||t.dispose(),this.accessoryGroup.remove(n)}if(this.activeStyle.hat==="crown"||!this.activeStyle.hat){const n=new cn(.55,.035,8,32),r=new Bt({color:new _e(this.activeStyle.secondaryColor),emissive:new _e(this.activeStyle.secondaryColor),emissiveIntensity:.6,metalness:.9}),s=new Xe(n,r);s.rotation.x=Math.PI/2,s.position.y=.92,this.hatGroup.add(s);const o=new us(.06,.22,5),a=new Bt({color:new _e(this.activeStyle.primaryColor),emissive:new _e(this.activeStyle.primaryColor),emissiveIntensity:.4});for(let l=0;l<6;l++){const c=l/6*Math.PI*2,h=new Xe(o,a);h.position.set(Math.cos(c)*.55,1.05,Math.sin(c)*.55),this.hatGroup.add(h)}}else if(this.activeStyle.hat==="visor"){const n=new cn(.72,.06,8,24,Math.PI*.65),r=new Bt({color:new _e(this.activeStyle.primaryColor),emissive:new _e(this.activeStyle.primaryColor),emissiveIntensity:.8,roughness:.1}),s=new Xe(n,r);s.rotation.y=-Math.PI*.325,s.position.set(0,.15,-.4),this.hatGroup.add(s)}if(this.activeStyle.accessory==="backpack"||!this.activeStyle.accessory){const n=new hr(.12,.16,.45,12),r=new Bt({color:1712691,metalness:.9,roughness:.2}),s=new Pn({color:new _e(this.activeStyle.primaryColor)}),o=new Xe(n,r);o.rotation.x=Math.PI/2,o.position.set(-.35,.1,.65),this.accessoryGroup.add(o);const a=new Xe(new ir(.04,.14,12),s);a.position.set(-.35,.1,.88),this.accessoryGroup.add(a);const l=new Xe(n,r);l.rotation.x=Math.PI/2,l.position.set(.35,.1,.65),this.accessoryGroup.add(l);const c=new Xe(new ir(.04,.14,12),s);c.position.set(.35,.1,.88),this.accessoryGroup.add(c)}else if(this.activeStyle.accessory==="glasses"){const n=new cn(.16,.03,8,20),r=new Bt({color:new _e(this.activeStyle.secondaryColor),emissive:new _e(this.activeStyle.secondaryColor),emissiveIntensity:.5}),s=new Xe(n,r);s.position.set(-.25,.2,-.72),this.accessoryGroup.add(s);const o=new Xe(n,r);o.position.set(.25,.2,-.72),this.accessoryGroup.add(o)}}createParticleTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.3,"rgba(0, 240, 255, 0.8)"),n.addColorStop(.7,"rgba(0, 240, 255, 0.2)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const r=new op(e);return r.generateMipmaps=!1,r.minFilter=Lt,r}updateStyle(e){e.primaryColor&&(this.activeStyle.primaryColor=e.primaryColor,this.coreMaterial.color.set(e.primaryColor),this.coreMaterial.emissive.set(e.primaryColor),this.trailMaterial.color.set(e.primaryColor)),e.secondaryColor&&(this.activeStyle.secondaryColor=e.secondaryColor,this.ring1Material.color.set(e.secondaryColor),this.ring1Material.emissive.set(e.secondaryColor),this.ring2Material.color.set(e.secondaryColor)),e.skinColor&&(this.activeStyle.skinColor=e.skinColor,this.sat1Material.color.set(e.skinColor),this.sat1Material.emissive.set(e.skinColor)),e.hairColor&&(this.activeStyle.hairColor=e.hairColor,this.sat2Material.color.set(e.hairColor),this.sat2Material.emissive.set(e.hairColor)),e.hat!==void 0&&(this.activeStyle.hat=e.hat),e.accessory!==void 0&&(this.activeStyle.accessory=e.accessory),this.buildAttachments()}update(e,t,n=0){let r=0;this.inputState.steerLeft&&(r-=1),this.inputState.steerRight&&(r+=1),this.inputState.isTouching&&(r+=this.inputState.touchSteerRatio,r=Math.max(-1,Math.min(1,r)));const s=r*this.lateralSpeed;this.velocity.x+=(s-this.velocity.x)*Math.min(e*this.lateralDamping,1),this.position.x+=this.velocity.x*e,this.position.x<-this.lateralBoundary?(this.position.x=-this.lateralBoundary,this.velocity.x=0):this.position.x>this.lateralBoundary&&(this.position.x=this.lateralBoundary,this.velocity.x=0),this.position.z+=n,this.mesh.position.copy(this.position),this.targetTilt=-this.velocity.x/this.lateralSpeed*.45,this.currentTilt+=(this.targetTilt-this.currentTilt)*Math.min(e*10,1),this.mesh.rotation.z=this.currentTilt,this.mesh.rotation.y=this.currentTilt*.5;const o=n!==0?Math.abs(n)/this.radius:e*12;this.coreMesh.rotation.x-=o,this.outerRingsGroup.rotation.x+=e*1.8,this.outerRingsGroup.rotation.y+=e*2.2;const a=t*3.5;this.satellitesGroup.rotation.y=a,this.satellitesGroup.rotation.x=Math.sin(t*1.5)*.35,this.updateTrail(e)}updateTrail(e){if(this.trailSpawnTimer+=e,this.trailSpawnTimer>=.02){this.trailSpawnTimer=0;for(let t=0;t<2;t++){const n=this.trailHeadIndex,r=(Math.random()-.5)*.25;this.trailPositions[n*3+0]=this.position.x+r,this.trailPositions[n*3+1]=this.position.y+(Math.random()-.5)*.15,this.trailPositions[n*3+2]=this.position.z+.65,this.trailAlphas[n]=1,this.trailHeadIndex=(this.trailHeadIndex+1)%this.maxTrailParticles}}for(let t=0;t<this.maxTrailParticles;t++)this.trailAlphas[t]>0&&(this.trailAlphas[t]-=e*3.2,this.trailAlphas[t]<=0?(this.trailAlphas[t]=0,this.trailPositions[t*3+1]=-100):this.trailPositions[t*3+2]+=e*1.5);this.trailGeometry.attributes.position.needsUpdate=!0}attachEventListeners(){window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),window.addEventListener("pointerdown",this.boundPointerDown,{passive:!1}),window.addEventListener("pointermove",this.boundPointerMove,{passive:!1}),window.addEventListener("pointerup",this.boundPointerUp),window.addEventListener("pointercancel",this.boundPointerUp)}removeEventListeners(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp),window.removeEventListener("pointerdown",this.boundPointerDown),window.removeEventListener("pointermove",this.boundPointerMove),window.removeEventListener("pointerup",this.boundPointerUp),window.removeEventListener("pointercancel",this.boundPointerUp)}handleKeyDown(e){switch(e.code){case"ArrowLeft":case"KeyA":this.inputState.steerLeft=!0;break;case"ArrowRight":case"KeyD":this.inputState.steerRight=!0;break;case"ArrowUp":case"KeyW":case"Space":this.inputState.accelerate=!0;break;case"ArrowDown":case"KeyS":this.inputState.brake=!0;break}}handleKeyUp(e){switch(e.code){case"ArrowLeft":case"KeyA":this.inputState.steerLeft=!1;break;case"ArrowRight":case"KeyD":this.inputState.steerRight=!1;break;case"ArrowUp":case"KeyW":case"Space":this.inputState.accelerate=!1;break;case"ArrowDown":case"KeyS":this.inputState.brake=!1;break}}handlePointerDown(e){var t,n;(n=(t=e.target)==null?void 0:t.closest)!=null&&n.call(t,".glide-profile-card, button, a")||(this.inputState.isTouching=!0,this.updatePointerRatio(e.clientX))}handlePointerMove(e){this.inputState.isTouching&&this.updatePointerRatio(e.clientX)}handlePointerUp(){this.inputState.isTouching=!1,this.inputState.touchSteerRatio=0}updatePointerRatio(e){const n=window.innerWidth/2,r=(e-n)/(n*.75);this.inputState.touchSteerRatio=Math.max(-1,Math.min(1,r))}reset(e=new P(0,.75,0)){this.position.copy(e),this.velocity.set(0,0,0),this.currentTilt=0,this.targetTilt=0,this.mesh.position.copy(this.position),this.mesh.rotation.set(0,0,0);for(let t=0;t<this.maxTrailParticles;t++)this.trailPositions[t*3+1]=-100,this.trailAlphas[t]=0;this.trailGeometry.attributes.position.needsUpdate=!0}dispose(){this.removeEventListeners(),this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.sceneRef.remove(this.mesh),this.sceneRef.remove(this.trailPoints),this.coreMesh.geometry.dispose(),this.coreMaterial.dispose(),this.ring1Material.dispose(),this.ring2Material.dispose(),this.satellite1Mesh.geometry.dispose(),this.sat1Material.dispose(),this.sat2Material.dispose(),this.trailGeometry.dispose(),this.trailMaterial.dispose(),this.trailMaterial.map&&this.trailMaterial.map.dispose()}}class xp{constructor(e){q(this,"scene");q(this,"segments",[]);q(this,"segmentLength",20);q(this,"maxVisibleSegments",22);q(this,"currentSegmentIndex",0);q(this,"cursorX",0);q(this,"cursorY",0);q(this,"cursorZ",15);q(this,"packetGemGeo");q(this,"packetRingGeo");q(this,"packetMaterial");q(this,"packetRingMaterial");this.scene=e,this.packetGemGeo=new ps(.38,0),this.packetRingGeo=new cn(.55,.04,8,20),this.packetMaterial=new Bt({color:61695,emissive:61695,emissiveIntensity:.8,roughness:.1,metalness:.9}),this.packetRingMaterial=new Pn({color:16711799,wireframe:!0}),this.initInitialTrack()}initInitialTrack(){for(let e=0;e<5;e++)this.createSegment({forceStraight:!0,forceFlat:!0,spawnPackets:e>1});for(;this.segments.length<this.maxVisibleSegments;)this.createNextProceduralSegment()}createNextProceduralSegment(){const e=Math.random()<.45,t=Math.random()<.35;let n=0,r=0;e&&(n=(Math.random()*2-1)*3.5,this.cursorX+n>14&&(n=-Math.abs(n)),this.cursorX+n<-14&&(n=Math.abs(n))),t?r=-(Math.random()*2.5+1.2):Math.random()<.2&&this.cursorY<-10&&(r=Math.random()*1.5),this.createSegment({deltaX:n,deltaY:r,spawnPackets:Math.random()<.75})}createSegment(e){const t=this.cursorX,n=this.cursorY,r=this.cursorZ,s=e.forceStraight?0:e.deltaX||0,o=e.forceFlat?0:e.deltaY||0,a=t+s,l=n+o,c=r-this.segmentLength,h=8.5,u=new Ht,p=[],m=[],_=[],g=new bt,f=h/2,d=new Float32Array([t-f,n,r,t+f,n,r,a-f,l,c,t+f,n,r,a+f,l,c,a-f,l,c]),E=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),M=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]);g.setAttribute("position",new yt(d,3)),g.setAttribute("normal",new yt(E,3)),g.setAttribute("uv",new yt(M,3)),p.push(g);const T=new Bt({color:593693,roughness:.35,metalness:.8});m.push(T);const R=new Xe(g,T);u.add(R);const w=new Pn({color:61695});m.push(w);const A=this.createRailGeometry(new P(t-f,n+.12,r),new P(a-f,l+.12,c),.15);p.push(A);const B=new Xe(A,w);u.add(B);const v=this.createRailGeometry(new P(t+f,n+.12,r),new P(a+f,l+.12,c),.15);p.push(v);const y=new Xe(v,w);u.add(y);const z=new Pn({color:16711799,transparent:!0,opacity:.6});m.push(z);const G=this.createRailGeometry(new P(t,n+.04,r),new P(a,l+.04,c),.08);p.push(G);const Z=new Xe(G,z);if(u.add(Z),e.spawnPackets){const U=Math.floor(Math.random()*3)+1,V=[-2.2,0,2.2],Y=V[Math.floor(Math.random()*V.length)];for(let W=0;W<U;W++){const X=(W+1)/(U+1),K=t+s*X+Y,te=n+o*X+.75,ne=r-this.segmentLength*X,H=new Ht;H.position.set(K,te,ne);const j=new Xe(this.packetGemGeo,this.packetMaterial),oe=new Xe(this.packetRingGeo,this.packetRingMaterial);H.add(j),H.add(oe),u.add(H),_.push({mesh:H,gemMesh:j,ringMesh:oe,position:new P(K,te,ne),collected:!1})}}this.scene.add(u);const L={index:this.currentSegmentIndex++,startZ:r,endZ:c,startX:t,endX:a,startY:n,endY:l,width:h,meshGroup:u,packets:_,geometries:p,materials:m};this.segments.push(L),this.cursorX=a,this.cursorY=l,this.cursorZ=c}createRailGeometry(e,t,n){const s=new P().subVectors(t,e).length(),o=new li(n,n,s);o.translate(0,0,s/2);const a=new dt;return a.position.copy(e),a.lookAt(t),a.updateMatrix(),o.applyMatrix4(a.matrix),o}update(e,t,n){for(const r of this.segments)for(const s of r.packets)s.collected||(s.gemMesh.rotation.y+=t*3.5,s.gemMesh.rotation.x+=t*1.5,s.ringMesh.rotation.z+=t*2.2,s.ringMesh.rotation.x=Math.PI/2+Math.sin(n*3)*.2,s.mesh.position.y=s.position.y+Math.sin(n*4+s.position.z)*.12);for(;this.segments.length>0&&this.segments[0].endZ>e+30;)this.recycleOldestSegment();for(;this.segments.length<this.maxVisibleSegments;)this.createNextProceduralSegment()}recycleOldestSegment(){const e=this.segments.shift();if(e){this.scene.remove(e.meshGroup);for(const t of e.geometries)t.dispose();for(const t of e.materials)t.dispose();for(;e.meshGroup.children.length>0;){const t=e.meshGroup.children[0];e.meshGroup.remove(t)}}}getTrackAt(e){for(const t of this.segments)if(e<=t.startZ&&e>=t.endZ){const n=(t.startZ-e)/(t.startZ-t.endZ),r=na.lerp(t.startX,t.endX,n),s=na.lerp(t.startY,t.endY,n);return{x:r,y:s,width:t.width,exists:!0}}return{x:0,y:0,width:8.5,exists:!1}}checkMarbleStatus(e,t){const n=this.getTrackAt(e.z);let r=0;if(!n.exists)return{isOnTrack:!1,trackY:e.y,collectedPackets:0};const s=n.width/2,a=Math.abs(e.x-n.x)<=s,l=t+.7;for(const c of this.segments)if(Math.abs(c.startZ-e.z)<this.segmentLength*1.5)for(const h of c.packets)h.collected||e.distanceTo(h.mesh.position)<l&&(h.collected=!0,h.mesh.visible=!1,r++);return{isOnTrack:a,trackY:n.y,collectedPackets:r}}reset(){for(;this.segments.length>0;)this.recycleOldestSegment();this.currentSegmentIndex=0,this.cursorX=0,this.cursorY=0,this.cursorZ=15,this.initInitialTrack()}dispose(){this.reset(),this.packetGemGeo.dispose(),this.packetRingGeo.dispose(),this.packetMaterial.dispose(),this.packetRingMaterial.dispose()}}function Ka(){const i=document.getElementById("app")??document.body,e=new dp({container:i}),t=new hp(2241348,2);e.scene.add(t);const n=new Xa(61695,3.2);n.position.set(8,16,10),e.scene.add(n);const r=new Xa(16711799,1.8);r.position.set(-8,10,-6),e.scene.add(r),e.scene.fog=new ds(461075,.0075);const s=new xp(e.scene),o=new _p(e.scene);new fp(i).mount();const l=new gp({container:i});let c="PLAYING",h=0,u=0,p=0;const m=24;function _(){if(c==="GAMEOVER")return;const R=c;c="PAUSED",$t.updateRollHum(0,!1),l.show(()=>{c=R})}const g=new pp({container:i,onHelpClick:()=>{_()},onSoundToggle:()=>$t.toggleMute()}),f=new mp({container:i});l.checkFirstVisit(()=>{c="PLAYING"})&&(c="PAUSED",$t.updateRollHum(0,!1));const E=R=>{if(!(R.target instanceof HTMLInputElement||R.target instanceof HTMLTextAreaElement))if(R.code==="KeyM"){const w=$t.toggleMute();g.setSoundMuted(w)}else R.code==="KeyH"&&!l.isOpen()&&_()};window.addEventListener("keydown",E),tn.onPlayerChange(R=>{R.style&&o.updateStyle(R.style)}),tn.whoAmI().catch(R=>{console.warn("Initial whoAmI fallback active:",R)});function M(){h=0,u=0,p=0,c="PLAYING",s.reset(),o.reset(new P(0,.75,0)),g.update(0,0),g.setVisible(!0),$t.playStartChime()}new up({onUpdate:(R,w)=>{if(c==="GAMEOVER"||c==="PAUSED")return;const A=1+Math.min(h/5e3,.6),B=m*A;if(c==="PLAYING"){const G=-B*R;h+=B*R,o.update(R,w,G),s.update(o.position.z,R,w);const Z=s.checkMarbleStatus(o.position,o.radius);if(Z.collectedPackets>0&&(u+=Z.collectedPackets,$t.playPacketPickup()),Z.isOnTrack){const L=Z.trackY+o.radius;o.position.y+=(L-o.position.y)*Math.min(R*22,1),$t.updateRollHum(B,!0)}else c="FALLING",p=-2,$t.playFallOff();g.update(h,u)}else if(c==="FALLING"){p-=42*R,o.position.y+=p*R;const G=-B*.4*R;o.update(R,w,G),s.update(o.position.z,R,w),o.position.y<-16&&(c="GAMEOVER",g.setVisible(!1),$t.updateRollHum(0,!1),f.show(h,u,M))}const v=o.position.x*.45,y=Math.max(o.position.y+4.8,3.5),z=o.position.z+10.5;e.camera.position.x+=(v-e.camera.position.x)*Math.min(R*8,1),e.camera.position.y+=(y-e.camera.position.y)*Math.min(R*8,1),e.camera.position.z+=(z-e.camera.position.z)*Math.min(R*8,1),e.camera.lookAt(o.position.x*.35,Math.max(o.position.y+.5,0),o.position.z-6)},onRender:()=>{e.render()},onResize:(R,w)=>{e.resize(R,w)}}).start()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ka):Ka();
//# sourceMappingURL=index-BE_hKg2V.js.map
