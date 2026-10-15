(()=>{var Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bc=0,La=1,zc=2;var ic=1,pa=2,cn=3,Tn=0,yt=1,ln=2;var bn=0,di=1,Ia=2,Da=3,Ua=4,kc=5,Un=100,Hc=101,Vc=102,Na=103,Oa=104,Gc=200,Wc=201,Xc=202,qc=203,Ur=204,Nr=205,Yc=206,Zc=207,Jc=208,Kc=209,$c=210,jc=211,Qc=212,el=213,tl=214,nl=0,il=1,sl=2,_s=3,rl=4,al=5,ol=6,cl=7,sc=0,ll=1,hl=2,En=0,ul=1,dl=2,fl=3,ma=4,pl=5,ml=6;var rc=300,mi=301,gi=302,Or=303,Fr=304,qs=306,Ni=1e3,Ht=1001,Br=1002,wt=1003,Fa=1004;var ir=1005;var Dt=1006,gl=1007;var Oi=1008;var wn=1009,_l=1010,xl=1011,ga=1012,ac=1013,Mn=1014,Sn=1015,Fi=1016,oc=1017,cc=1018,On=1020,vl=1021,Vt=1023,yl=1024,Ml=1025,Fn=1026,_i=1027,Sl=1028,lc=1029,bl=1030,hc=1031,uc=1033,sr=33776,rr=33777,ar=33778,or=33779,Ba=35840,za=35841,ka=35842,Ha=35843,dc=36196,Va=37492,Ga=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,Ka=37814,$a=37815,ja=37816,Qa=37817,eo=37818,to=37819,no=37820,io=37821,cr=36492,so=36494,ro=36495,El=36283,ao=36284,oo=36285,co=36286;var xs=2300,vs=2301,lr=2302,lo=2400,ho=2401,uo=2402;var fc=3e3,Bn=3001,wl=3200,Tl=3201,pc=0,Al=1,Ut="",ot="srgb",un="srgb-linear",_a="display-p3",Ys="display-p3-linear",ys="linear",Qe="srgb",Ms="rec709",Ss="p3";var qn=7680;var fo=519,Rl=512,Cl=513,Pl=514,mc=515,Ll=516,Il=517,Dl=518,Ul=519,po=35044;var mo="300 es",zr=1035,hn=2e3,bs=2001,Kt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=1234567,Li=Math.PI/180,Bi=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function xa(i,e){return(i%e+e)%e}function Nl(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ol(i,e,t){return i!==e?(t-i)/(e-i):0}function Ii(i,e,t){return(1-t)*i+t*e}function Fl(i,e,t,n){return Ii(i,e,1-Math.exp(-t*n))}function Bl(i,e=1){return e-Math.abs(xa(i,e*2)-e)}function zl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vl(i,e){return i+Math.random()*(e-i)}function Gl(i){return i*(.5-Math.random())}function Wl(i){i!==void 0&&(go=i);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xl(i){return i*Li}function ql(i){return i*Bi}function kr(i){return(i&i-1)===0&&i!==0}function Yl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Es(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zl(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gc={DEG2RAD:Li,RAD2DEG:Bi,generateUUID:Si,clamp:xt,euclideanModulo:xa,mapLinear:Nl,inverseLerp:Ol,lerp:Ii,damp:Fl,pingpong:Bl,smoothstep:zl,smootherstep:kl,randInt:Hl,randFloat:Vl,randFloatSpread:Gl,seededRandom:Wl,degToRad:Xl,radToDeg:ql,isPowerOfTwo:kr,ceilPowerOfTwo:Yl,floorPowerOfTwo:Es,setQuaternionFromProperEuler:Zl,normalize:bt,denormalize:ci},Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],m=n[5],g=n[8],_=s[0],d=s[3],u=s[6],w=s[1],v=s[4],L=s[7],N=s[2],I=s[5],C=s[8];return r[0]=o*_+a*w+c*N,r[3]=o*d+a*v+c*I,r[6]=o*u+a*L+c*C,r[1]=l*_+h*w+f*N,r[4]=l*d+h*v+f*I,r[7]=l*u+h*L+f*C,r[2]=p*_+m*w+g*N,r[5]=p*d+m*v+g*I,r[8]=p*u+m*L+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,p=a*c-h*r,m=l*r-o*c,g=t*f+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hr.makeScale(e,t)),this}rotate(e){return this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hr=new Ve;function _c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jl(){let i=ws("canvas");return i.style.display="block",i}var _o={};function Di(i){i in _o||(_o[i]=!0,console.warn(i))}var xo=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[un]:{transfer:ys,primaries:Ms,toReference:i=>i,fromReference:i=>i},[ot]:{transfer:Qe,primaries:Ms,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ys]:{transfer:ys,primaries:Ss,toReference:i=>i.applyMatrix3(vo),fromReference:i=>i.applyMatrix3(xo)},[_a]:{transfer:Qe,primaries:Ss,toReference:i=>i.convertSRGBToLinear().applyMatrix3(vo),fromReference:i=>i.applyMatrix3(xo).convertLinearToSRGB()}},Kl=new Set([un,Ys]),Je={enabled:!0,_workingColorSpace:un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Zi[e].toReference,s=Zi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Zi[i].primaries},getTransfer:function(i){return i===Ut?ys:Zi[i].transfer}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yn,Ts=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=ws("canvas")),Yn.width=e.width,Yn.height=e.height;let n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$l=0,As=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dr(s[o].image)):r.push(dr(s[o]))}else r=dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ts.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jl=0,Ot=class i extends Kt{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ht,s=Ht,r=Dt,o=Oi,a=Vt,c=wn,l=i.DEFAULT_ANISOTROPY,h=Ut){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Si(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bn?ot:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Bn:fc}set encoding(e){Di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Bn?ot:Ut}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=rc;Ot.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],m=c[5],g=c[9],_=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,L=(m+1)/2,N=(u+1)/2,I=(h+p)/4,C=(f+_)/4,J=(g+d)/4;return v>L&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=I/n,r=C/n):L>N?L<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),n=I/s,r=J/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=C/r,s=J/r),this.set(n,s,r,t),this}let w=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(f-_)/w,this.z=(p-h)/w,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hr=class extends Kt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bn?ot:Ut),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new As(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Hr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rs=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==p||l!==m||h!==g){let d=1-a,u=c*p+l*m+h*g+f*_,w=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let N=Math.sqrt(v),I=Math.atan2(N,u*w);d=Math.sin(d*I)/N,a=Math.sin(a*I)/N}let L=a*w;if(c=c*d+p*L,l=l*d+m*L,h=h*d+g*L,f=f*d+_*L,d===1-a){let N=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=N,l*=N,h*=N,f*=N}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*m-l*p,e[t+1]=c*g+h*p+l*f-a*m,e[t+2]=l*g+h*m+a*p-c*f,e[t+3]=h*g-a*f-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),p=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*f+l*m*g,this._y=l*m*f-p*h*g,this._z=l*h*g+p*m*f,this._w=l*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+l*m*g,this._y=l*m*f-p*h*g,this._z=l*h*g-p*m*f,this._w=l*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-l*m*g,this._y=l*m*f+p*h*g,this._z=l*h*g+p*m*f,this._w=l*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-l*m*g,this._y=l*m*f+p*h*g,this._z=l*h*g-p*m*f,this._w=l*h*f+p*m*g;break;case"YZX":this._x=p*h*f+l*m*g,this._y=l*m*f+p*h*g,this._z=l*h*g-p*m*f,this._w=l*h*f-p*m*g;break;case"XZY":this._x=p*h*f-l*m*g,this._y=l*m*f-p*h*g,this._z=l*h*g+p*m*f,this._w=l*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>f){let m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fr.copy(this).projectOnVector(e),this.sub(fr)}reflect(e){return this.sub(fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fr=new O,yo=new Gt,zn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ft):Ft.fromBufferAttribute(r,o),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Ki.subVectors(this.max,Ti),Zn.subVectors(e.a,Ti),Jn.subVectors(e.b,Ti),Kn.subVectors(e.c,Ti),gn.subVectors(Jn,Zn),_n.subVectors(Kn,Jn),Cn.subVectors(Zn,Kn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Cn.z,Cn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Cn.z,0,-Cn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Cn.y,Cn.x,0];return!pr(t,Zn,Jn,Kn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,Zn,Jn,Kn,Ki))?!1:($i.crossVectors(gn,_n),t=[$i.x,$i.y,$i.z],pr(t,Zn,Jn,Kn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},nn=[new O,new O,new O,new O,new O,new O,new O,new O],Ft=new O,Ji=new zn,Zn=new O,Jn=new O,Kn=new O,gn=new O,_n=new O,Cn=new O,Ti=new O,Ki=new O,$i=new O,Pn=new O;function pr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pn.fromArray(i,r);let a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),c=e.dot(Pn),l=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ql=new zn,Ai=new O,mr=new O,zi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ql.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);let t=Ai.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(mr)),this.expandByPoint(Ai.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},sn=new O,gr=new O,ji=new O,xn=new O,_r=new O,Qi=new O,xr=new O,ki=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(gr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ji),a=xn.dot(this.direction),c=-xn.dot(ji),l=xn.lengthSq(),h=Math.abs(1-o*o),f,p,m,g;if(h>0)if(f=o*c-a,p=o*a-c,g=r*h,f>=0)if(p>=-g)if(p<=g){let _=1/h;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l):p<=g?(f=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(gr).addScaledVector(ji,p),m}intersectSphere(e,t){sn.subVectors(e.center,this.origin);let n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,s,r){_r.subVectors(t,e),Qi.subVectors(n,e),xr.crossVectors(_r,Qi);let o=this.direction.dot(xr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);let c=a*this.direction.dot(Qi.crossVectors(xn,Qi));if(c<0)return null;let l=a*this.direction.dot(_r.cross(xn));if(l<0||c+l>o)return null;let h=-a*xn.dot(xr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,p,m,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,p,m,g,_,d)}set(e,t,n,s,r,o,a,c,l,h,f,p,m,g,_,d){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=g,u[11]=_,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,m=c*f,g=l*h,_=l*f;t[0]=p+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,m=c*f,g=l*h,_=l*f;t[0]=p-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,m=o*f,g=a*h,_=a*f;t[0]=c*h,t[4]=g*l-m,t[8]=p*l+_,t[1]=c*f,t[5]=_*l+p,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-p*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+g,t[10]=p-_*f}else if(e.order==="XZY"){let p=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eh,e,th)}lookAt(e,t,n){let s=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),vn.crossVectors(n,Rt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),vn.crossVectors(n,Rt)),vn.normalize(),es.crossVectors(Rt,vn),s[0]=vn.x,s[4]=es.x,s[8]=Rt.x,s[1]=vn.y,s[5]=es.y,s[9]=Rt.y,s[2]=vn.z,s[6]=es.z,s[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],m=n[13],g=n[2],_=n[6],d=n[10],u=n[14],w=n[3],v=n[7],L=n[11],N=n[15],I=s[0],C=s[4],J=s[8],y=s[12],T=s[1],E=s[5],P=s[9],V=s[13],b=s[2],A=s[6],U=s[10],W=s[14],X=s[3],Y=s[7],Z=s[11],$=s[15];return r[0]=o*I+a*T+c*b+l*X,r[4]=o*C+a*E+c*A+l*Y,r[8]=o*J+a*P+c*U+l*Z,r[12]=o*y+a*V+c*W+l*$,r[1]=h*I+f*T+p*b+m*X,r[5]=h*C+f*E+p*A+m*Y,r[9]=h*J+f*P+p*U+m*Z,r[13]=h*y+f*V+p*W+m*$,r[2]=g*I+_*T+d*b+u*X,r[6]=g*C+_*E+d*A+u*Y,r[10]=g*J+_*P+d*U+u*Z,r[14]=g*y+_*V+d*W+u*$,r[3]=w*I+v*T+L*b+N*X,r[7]=w*C+v*E+L*A+N*Y,r[11]=w*J+v*P+L*U+N*Z,r[15]=w*y+v*V+L*W+N*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],m=e[14],g=e[3],_=e[7],d=e[11],u=e[15];return g*(+r*c*f-s*l*f-r*a*p+n*l*p+s*a*m-n*c*m)+_*(+t*c*m-t*l*p+r*o*p-s*o*m+s*l*h-r*c*h)+d*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+u*(-s*a*h-t*c*f+t*a*p+s*o*f-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],m=e[11],g=e[12],_=e[13],d=e[14],u=e[15],w=f*d*l-_*p*l+_*c*m-a*d*m-f*c*u+a*p*u,v=g*p*l-h*d*l-g*c*m+o*d*m+h*c*u-o*p*u,L=h*_*l-g*f*l+g*a*m-o*_*m-h*a*u+o*f*u,N=g*f*c-h*_*c-g*a*p+o*_*p+h*a*d-o*f*d,I=t*w+n*v+s*L+r*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return e[0]=w*C,e[1]=(_*p*r-f*d*r-_*s*m+n*d*m+f*s*u-n*p*u)*C,e[2]=(a*d*r-_*c*r+_*s*l-n*d*l-a*s*u+n*c*u)*C,e[3]=(f*c*r-a*p*r-f*s*l+n*p*l+a*s*m-n*c*m)*C,e[4]=v*C,e[5]=(h*d*r-g*p*r+g*s*m-t*d*m-h*s*u+t*p*u)*C,e[6]=(g*c*r-o*d*r-g*s*l+t*d*l+o*s*u-t*c*u)*C,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*m+t*c*m)*C,e[8]=L*C,e[9]=(g*f*r-h*_*r-g*n*m+t*_*m+h*n*u-t*f*u)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*u+t*a*u)*C,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*m-t*a*m)*C,e[12]=N*C,e[13]=(h*_*s-g*f*s+g*n*p-t*_*p-h*n*d+t*f*d)*C,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*d-t*a*d)*C,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*p+t*a*p)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,p=r*l,m=r*h,g=r*f,_=o*h,d=o*f,u=a*f,w=c*l,v=c*h,L=c*f,N=n.x,I=n.y,C=n.z;return s[0]=(1-(_+u))*N,s[1]=(m+L)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(m-L)*I,s[5]=(1-(p+u))*I,s[6]=(d+w)*I,s[7]=0,s[8]=(g+v)*C,s[9]=(d-w)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=$n.set(s[0],s[1],s[2]).length(),o=$n.set(s[4],s[5],s[6]).length(),a=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bt.copy(this);let l=1/r,h=1/o,f=1/a;return Bt.elements[0]*=l,Bt.elements[1]*=l,Bt.elements[2]*=l,Bt.elements[4]*=h,Bt.elements[5]*=h,Bt.elements[6]*=h,Bt.elements[8]*=f,Bt.elements[9]*=f,Bt.elements[10]*=f,t.setFromRotationMatrix(Bt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),m,g;if(a===hn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hn){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),p=(t+e)*l,m=(n+s)*h,g,_;if(a===hn)g=(o+r)*f,_=-2*f;else if(a===bs)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$n=new O,Bt=new ct,eh=new O(0,0,0),th=new O(1,1,1),vn=new O,es=new O,Rt=new O,Mo=new ct,So=new Gt,Cs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cs.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nh=0,bo=new O,jn=new Gt,rn=new ct,ts=new O,Ri=new O,ih=new O,sh=new Gt,Eo=new O(1,0,0),wo=new O(0,1,0),To=new O(0,0,1),rh={type:"added"},ah={type:"removed"},Tt=class i extends Kt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Cs,n=new Gt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ve}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return bo.copy(e).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ri,ts,this.up):rn.lookAt(ts,Ri,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(rn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ah)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Tt.DEFAULT_UP=new O(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=new O,an=new O,vr=new O,on=new O,Qn=new O,ei=new O,Ao=new O,yr=new O,Mr=new O,Sr=new O,ns=!1,li=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zt.subVectors(e,t),s.cross(zt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zt.subVectors(s,t),an.subVectors(n,t),vr.subVectors(e,t);let o=zt.dot(zt),a=zt.dot(an),c=zt.dot(vr),l=an.dot(an),h=an.dot(vr),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,s,r,o,a,c){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static isFrontFacing(e,t,n,s){return zt.subVectors(n,t),an.subVectors(e,t),zt.cross(an).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),zt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ns===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ns=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Qn.subVectors(s,n),ei.subVectors(r,n),yr.subVectors(e,n);let c=Qn.dot(yr),l=ei.dot(yr);if(c<=0&&l<=0)return t.copy(n);Mr.subVectors(e,s);let h=Qn.dot(Mr),f=ei.dot(Mr);if(h>=0&&f<=h)return t.copy(s);let p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qn,o);Sr.subVectors(e,r);let m=Qn.dot(Sr),g=ei.dot(Sr);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ei,a);let d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return Ao.subVectors(r,s),a=(f-h)/(f-h+(m-g)),t.copy(s).addScaledVector(Ao,a);let u=1/(d+_+p);return o=_*u,a=p*u,t.copy(n).addScaledVector(Qn,o).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},is={h:0,s:0,l:0};function br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=xa(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=br(o,r,e+1/3),this.g=br(o,r,e),this.b=br(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Je.fromWorkingColorSpace(_t.copy(this),e),Math.round(xt(_t.r*255,0,255))*65536+Math.round(xt(_t.g*255,0,255))*256+Math.round(xt(_t.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(_t.copy(this),t);let n=_t.r,s=_t.g,r=_t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=ot){Je.fromWorkingColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,s=_t.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(is);let n=Ii(yn.h,is.h,t),s=Ii(yn.s,is.s,t),r=Ii(yn.l,is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Ge;Ge.NAMES=xc;var oh=0,kn=class extends Kt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=di,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ur&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wt=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var at=new O,ss=new Ce,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}};var Ls=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Is=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ch=0,It=new ct,Er=new Tt,ti=new O,Ct=new zn,Ci=new zn,ft=new O,Xt=class i extends Kt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?Is:Ls)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ct.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Ct.min,Ci.min),Ct.expandByPoint(ft),ft.addVectors(Ct.max,Ci.max),Ct.expandByPoint(ft)):(Ct.expandByPoint(Ci.min),Ct.expandByPoint(Ci.max))}Ct.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ft.fromBufferAttribute(a,l),c&&(ti.fromBufferAttribute(e,l),ft.add(ti)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new O,h[T]=new O;let f=new O,p=new O,m=new O,g=new Ce,_=new Ce,d=new Ce,u=new O,w=new O;function v(T,E,P){f.fromArray(s,T*3),p.fromArray(s,E*3),m.fromArray(s,P*3),g.fromArray(o,T*2),_.fromArray(o,E*2),d.fromArray(o,P*2),p.sub(f),m.sub(f),_.sub(g),d.sub(g);let V=1/(_.x*d.y-d.x*_.y);isFinite(V)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(m,-_.y).multiplyScalar(V),w.copy(m).multiplyScalar(_.x).addScaledVector(p,-d.x).multiplyScalar(V),l[T].add(u),l[E].add(u),l[P].add(u),h[T].add(w),h[E].add(w),h[P].add(w))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let T=0,E=L.length;T<E;++T){let P=L[T],V=P.start,b=P.count;for(let A=V,U=V+b;A<U;A+=3)v(n[A+0],n[A+1],n[A+2])}let N=new O,I=new O,C=new O,J=new O;function y(T){C.fromArray(r,T*3),J.copy(C);let E=l[T];N.copy(E),N.sub(C.multiplyScalar(C.dot(E))).normalize(),I.crossVectors(J,E);let V=I.dot(h[T])<0?-1:1;c[T*4]=N.x,c[T*4+1]=N.y,c[T*4+2]=N.z,c[T*4+3]=V}for(let T=0,E=L.length;T<E;++T){let P=L[T],V=P.start,b=P.count;for(let A=V,U=V+b;A<U;A+=3)y(n[A+0]),y(n[A+1]),y(n[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,f=new O;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),_=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h),m=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[m++]}return new Nt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let p=l[h],m=e(p,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=new ct,Ln=new ki,rs=new zi,Co=new O,ni=new O,ii=new O,si=new O,wr=new O,as=new O,os=new Ce,cs=new Ce,ls=new Ce,Po=new O,Lo=new O,Io=new O,hs=new O,us=new O,ze=class extends Tt{constructor(e=new Xt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){as.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(wr.fromBufferAttribute(f,e),o?as.addScaledVector(wr,h):as.addScaledVector(wr.sub(t),h))}t.add(as)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),!(rs.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(rs,Co)===null||Ln.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ro.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],u=o[d.materialIndex],w=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let L=w,N=v;L<N;L+=3){let I=a.getX(L),C=a.getX(L+1),J=a.getX(L+2);s=ds(this,u,e,n,l,h,f,I,C,J),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,u=_;d<u;d+=3){let w=a.getX(d),v=a.getX(d+1),L=a.getX(d+2);s=ds(this,o,e,n,l,h,f,w,v,L),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let d=p[g],u=o[d.materialIndex],w=Math.max(d.start,m.start),v=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let L=w,N=v;L<N;L+=3){let I=L,C=L+1,J=L+2;s=ds(this,u,e,n,l,h,f,I,C,J),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,u=_;d<u;d+=3){let w=d,v=d+1,L=d+2;s=ds(this,o,e,n,l,h,f,w,v,L),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function lh(i,e,t,n,s,r,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Tn,a),c===null)return null;us.copy(a),us.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(us);return l<t.near||l>t.far?null:{distance:l,point:us.clone(),object:i}}function ds(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ni),i.getVertexPosition(c,ii),i.getVertexPosition(l,si);let h=lh(i,e,t,n,ni,ii,si,hs);if(h){s&&(os.fromBufferAttribute(s,a),cs.fromBufferAttribute(s,c),ls.fromBufferAttribute(s,l),h.uv=li.getInterpolation(hs,ni,ii,si,os,cs,ls,new Ce)),r&&(os.fromBufferAttribute(r,a),cs.fromBufferAttribute(r,c),ls.fromBufferAttribute(r,l),h.uv1=li.getInterpolation(hs,ni,ii,si,os,cs,ls,new Ce),h.uv2=h.uv1),o&&(Po.fromBufferAttribute(o,a),Lo.fromBufferAttribute(o,c),Io.fromBufferAttribute(o,l),h.normal=li.getInterpolation(hs,ni,ii,si,Po,Lo,Io,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};li.getNormal(ni,ii,si,f.normal),h.face=f}return h}var fn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function g(_,d,u,w,v,L,N,I,C,J,y){let T=L/C,E=N/J,P=L/2,V=N/2,b=I/2,A=C+1,U=J+1,W=0,X=0,Y=new O;for(let Z=0;Z<U;Z++){let $=Z*E-V;for(let j=0;j<A;j++){let F=j*T-P;Y[_]=F*w,Y[d]=$*v,Y[u]=b,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[d]=0,Y[u]=I>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(j/C),f.push(1-Z/J),W+=1}}for(let Z=0;Z<J;Z++)for(let $=0;$<C;$++){let j=p+$+A*Z,F=p+$+A*(Z+1),K=p+($+1)+A*(Z+1),re=p+($+1)+A*Z;c.push(j,F,re),c.push(F,K,re),X+=6}a.addGroup(m,X,y),m+=X,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Et(i){let e={};for(let t=0;t<i.length;t++){let n=xi(i[t]);for(let s in n)e[s]=n[s]}return e}function hh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vc(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}var uh={clone:xi,merge:Et},dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=hh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ds=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vt=class extends Ds{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Li*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ri=-90,ai=1,Gr=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(ri,ai,e,t);s.layers=this.layers,this.add(s);let r=new vt(ri,ai,e,t);r.layers=this.layers,this.add(r);let o=new vt(ri,ai,e,t);o.layers=this.layers,this.add(o);let a=new vt(ri,ai,e,t);a.layers=this.layers,this.add(a);let c=new vt(ri,ai,e,t);c.layers=this.layers,this.add(c);let l=new vt(ri,ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Us=class extends Ot{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wr=class extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Bn?ot:Ut),this.texture=new Us(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fn(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:bn});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Dt),new Gr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Tr=new O,ph=new O,mh=new Ve,kt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Tr.subVectors(n,t).cross(ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mh.getNormalMatrix(e),s=this.coplanarPoint(Tr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new zi,fs=new O,Hi=class{constructor(e=new kt,t=new kt,n=new kt,s=new kt,r=new kt,o=new kt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],p=s[7],m=s[8],g=s[9],_=s[10],d=s[11],u=s[12],w=s[13],v=s[14],L=s[15];if(n[0].setComponents(c-r,p-l,d-m,L-u).normalize(),n[1].setComponents(c+r,p+l,d+m,L+u).normalize(),n[2].setComponents(c+o,p+h,d+g,L+w).normalize(),n[3].setComponents(c-o,p-h,d-g,L-w).normalize(),n[4].setComponents(c-a,p-f,d-_,L-v).normalize(),t===hn)n[5].setComponents(c+a,p+f,d+_,L+v).normalize();else if(t===bs)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fs.x=s.normal.x>0?e.max.x:e.min.x,fs.y=s.normal.y>0?e.max.y:e.min.y,fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let f=l.array,p=l.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,p),l.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,f){let p=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(f,l),m.count===-1&&g.length===0&&i.bufferSubData(f,0,p),g.length!==0){for(let _=0,d=g.length;_<d;_++){let u=g[_];t?i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,s(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}var Hn=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,p=t/c,m=[],g=[],_=[],d=[];for(let u=0;u<h;u++){let w=u*p-o;for(let v=0;v<l;v++){let L=v*f-r;g.push(L,-w,0),_.push(0,0,1),d.push(v/a),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<a;w++){let v=w+l*u,L=w+l*(u+1),N=w+1+l*(u+1),I=w+1+l*u;m.push(v,L,I),m.push(L,N,I)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
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
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
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
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
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
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
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
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vh=`vec3 transformedNormal = objectNormal;
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
#endif`,Gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zh=`
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
}`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
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
}`,ru=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
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
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
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
#endif`,gu=`struct PhysicalMaterial {
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
}`,_u=`
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
#endif`,xu=`#if defined( RE_IndirectDiffuse )
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
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
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
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
#endif`,ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,td=`float getShadowMask() {
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
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
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
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
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
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
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
}`,bd=`#if DEPTH_PACKING == 3200
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
}`,Ed=`#define DISTANCE
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
}`,wd=`#define DISTANCE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Id=`#define LAMBERT
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
}`,Dd=`#define LAMBERT
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
}`,Ud=`#define MATCAP
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
}`,Nd=`#define MATCAP
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
}`,Od=`#define NORMAL
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
}`,Fd=`#define NORMAL
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
}`,Bd=`#define PHONG
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
}`,zd=`#define PHONG
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
}`,kd=`#define STANDARD
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
}`,Hd=`#define STANDARD
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
}`,Vd=`#define TOON
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
}`,Gd=`#define TOON
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
}`,Wd=`uniform float size;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 color;
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
}`,Zd=`uniform float rotation;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:_h,alphahash_pars_fragment:xh,alphamap_fragment:vh,alphamap_pars_fragment:yh,alphatest_fragment:Mh,alphatest_pars_fragment:Sh,aomap_fragment:bh,aomap_pars_fragment:Eh,batching_pars_vertex:wh,batching_vertex:Th,begin_vertex:Ah,beginnormal_vertex:Rh,bsdfs:Ch,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Oh,color_pars_fragment:Fh,color_pars_vertex:Bh,color_vertex:zh,common:kh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Gh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Zh,envmap_fragment:Jh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:$h,envmap_pars_vertex:jh,envmap_physical_pars_fragment:hu,envmap_vertex:Qh,fog_vertex:eu,fog_pars_vertex:tu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:su,lightmap_fragment:ru,lightmap_pars_fragment:au,lights_lambert_fragment:ou,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:uu,lights_toon_pars_fragment:du,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:xu,lights_fragment_end:vu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:bu,map_fragment:Eu,map_pars_fragment:wu,map_particle_fragment:Tu,map_particle_pars_fragment:Au,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphcolor_vertex:Pu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Du,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Ou,normal_pars_vertex:Fu,normal_vertex:Bu,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:ku,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Gu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:Ju,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:ed,shadowmask_pars_fragment:td,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:ad,specularmap_pars_fragment:od,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:dd,uv_pars_vertex:fd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:xd,backgroundCube_frag:vd,cube_vert:yd,cube_frag:Md,depth_vert:Sd,depth_frag:bd,distanceRGBA_vert:Ed,distanceRGBA_frag:wd,equirect_vert:Td,equirect_frag:Ad,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Ld,meshlambert_vert:Id,meshlambert_frag:Dd,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Od,meshnormal_frag:Fd,meshphong_vert:Bd,meshphong_frag:zd,meshphysical_vert:kd,meshphysical_frag:Hd,meshtoon_vert:Vd,meshtoon_frag:Gd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:Zd,sprite_frag:Jd},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Jt={basic:{uniforms:Et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Et([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Et([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Et([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Et([he.points,he.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Et([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Et([he.common,he.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Et([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Et([he.sprite,he.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Et([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Et([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Jt.physical={uniforms:Et([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ps={r:0,b:0,g:0};function Kd(i,e,t,n,s,r,o){let a=new Ge(0),c=r===!0?0:1,l,h,f=null,p=0,m=null;function g(d,u){let w=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),w=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qs)?(h===void 0&&(h=new ze(new fn(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:xi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Je.getTransfer(v.colorSpace)!==Qe,(f!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ze(new Hn(2,2),new pn({name:"BackgroundMaterial",uniforms:xi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,u){d.getRGB(ps,vc(i)),n.buffers.color.setClear(ps.r,ps.g,ps.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),c=u,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,_(a,c)},render:g}}function $d(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=d(null),l=c,h=!1;function f(b,A,U,W,X){let Y=!1;if(o){let Z=_(W,U,A);l!==Z&&(l=Z,m(l.object)),Y=u(b,W,U,X),Y&&w(b,W,U,X)}else{let Z=A.wireframe===!0;(l.geometry!==W.id||l.program!==U.id||l.wireframe!==Z)&&(l.geometry=W.id,l.program=U.id,l.wireframe=Z,Y=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,J(b,A,U,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(b){return n.isWebGL2?i.bindVertexArray(b):r.bindVertexArrayOES(b)}function g(b){return n.isWebGL2?i.deleteVertexArray(b):r.deleteVertexArrayOES(b)}function _(b,A,U){let W=U.wireframe===!0,X=a[b.id];X===void 0&&(X={},a[b.id]=X);let Y=X[A.id];Y===void 0&&(Y={},X[A.id]=Y);let Z=Y[W];return Z===void 0&&(Z=d(p()),Y[W]=Z),Z}function d(b){let A=[],U=[],W=[];for(let X=0;X<s;X++)A[X]=0,U[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:W,object:b,attributes:{},index:null}}function u(b,A,U,W){let X=l.attributes,Y=A.attributes,Z=0,$=U.getAttributes();for(let j in $)if($[j].location>=0){let K=X[j],re=Y[j];if(re===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;Z++}return l.attributesNum!==Z||l.index!==W}function w(b,A,U,W){let X={},Y=A.attributes,Z=0,$=U.getAttributes();for(let j in $)if($[j].location>=0){let K=Y[j];K===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));let re={};re.attribute=K,K&&K.data&&(re.data=K.data),X[j]=re,Z++}l.attributes=X,l.attributesNum=Z,l.index=W}function v(){let b=l.newAttributes;for(let A=0,U=b.length;A<U;A++)b[A]=0}function L(b){N(b,0)}function N(b,A){let U=l.newAttributes,W=l.enabledAttributes,X=l.attributeDivisors;U[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),X[b]!==A&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,A),X[b]=A)}function I(){let b=l.newAttributes,A=l.enabledAttributes;for(let U=0,W=A.length;U<W;U++)A[U]!==b[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function C(b,A,U,W,X,Y,Z){Z===!0?i.vertexAttribIPointer(b,A,U,X,Y):i.vertexAttribPointer(b,A,U,W,X,Y)}function J(b,A,U,W){if(n.isWebGL2===!1&&(b.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let X=W.attributes,Y=U.getAttributes(),Z=A.defaultAttributeValues;for(let $ in Y){let j=Y[$];if(j.location>=0){let F=X[$];if(F===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),F!==void 0){let K=F.normalized,re=F.itemSize,fe=t.get(F);if(fe===void 0)continue;let ge=fe.buffer,pe=fe.type,Te=fe.bytesPerElement,be=n.isWebGL2===!0&&(pe===i.INT||pe===i.UNSIGNED_INT||F.gpuType===ac);if(F.isInterleavedBufferAttribute){let Ae=F.data,z=Ae.stride,Ze=F.offset;if(Ae.isInstancedInterleavedBuffer){for(let ve=0;ve<j.locationSize;ve++)N(j.location+ve,Ae.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let ve=0;ve<j.locationSize;ve++)L(j.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ve=0;ve<j.locationSize;ve++)C(j.location+ve,re/j.locationSize,pe,K,z*Te,(Ze+re/j.locationSize*ve)*Te,be)}else{if(F.isInstancedBufferAttribute){for(let Ae=0;Ae<j.locationSize;Ae++)N(j.location+Ae,F.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)L(j.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Ae=0;Ae<j.locationSize;Ae++)C(j.location+Ae,re/j.locationSize,pe,K,re*Te,re/j.locationSize*Ae*Te,be)}}else if(Z!==void 0){let K=Z[$];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(j.location,K);break;case 3:i.vertexAttrib3fv(j.location,K);break;case 4:i.vertexAttrib4fv(j.location,K);break;default:i.vertexAttrib1fv(j.location,K)}}}}I()}function y(){P();for(let b in a){let A=a[b];for(let U in A){let W=A[U];for(let X in W)g(W[X].object),delete W[X];delete A[U]}delete a[b]}}function T(b){if(a[b.id]===void 0)return;let A=a[b.id];for(let U in A){let W=A[U];for(let X in W)g(W[X].object),delete W[X];delete A[U]}delete a[b.id]}function E(b){for(let A in a){let U=a[A];if(U[b.id]===void 0)continue;let W=U[b.id];for(let X in W)g(W[X].object),delete W[X];delete U[b.id]}}function P(){V(),h=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:P,resetDefaultState:V,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:L,disableUnusedAttributes:I}}function jd(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function c(h,f,p){if(p===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,f,p),t.update(f,r,p)}function l(h,f,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qd(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,L=o||e.has("OES_texture_float"),N=v&&L,I=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:L,floatVertexTextures:N,maxSamples:I}}function ef(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kt,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{let w=r?0:n,v=w*4,L=u.clippingState||null;c.value=L,L=h(g,p,v,m);for(let N=0;N!==v;++N)L[N]=t[N];u.clippingState=L,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,m,g){let _=f!==null?f.length:0,d=null;if(_!==0){if(d=c.value,g!==!0||d===null){let u=m+_*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,L=m;v!==_;++v,L+=4)o.copy(f[v]).applyMatrix4(w,a),o.normal.toArray(d,L),d[L+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function tf(i){let e=new WeakMap;function t(o,a){return a===Or?o.mapping=mi:a===Fr&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Or||a===Fr)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wr(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ns=class extends Ds{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hi=4,Do=[.125,.215,.35,.446,.526,.582],Nn=20,Ar=new Ns,Uo=new Ge,Rr=null,Cr=0,Pr=0,Dn=(1+Math.sqrt(5))/2,oi=1/Dn,No=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Dn,oi),new O(0,Dn,-oi),new O(oi,0,Dn),new O(-oi,0,Dn),new O(Dn,oi,0),new O(-Dn,oi,0)],vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rr,Cr,Pr),e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Fi,format:Vt,colorSpace:un,depthBuffer:!1},s=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(r)),this._blurMaterial=sf(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,n,s){let a=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Uo),h.toneMapping=En,h.autoClear=!1;let m=new Wt({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new ze(new fn,m),_=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,_=!0):(m.color.copy(Uo),_=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):w===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let v=this._cubeSize;ms(s,w*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ar)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=No[(s-1)%No.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ze(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):Nn;d>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nn}`);let u=[],w=0;for(let C=0;C<Nn;++C){let J=C/_,y=Math.exp(-J*J/2);u.push(y),C===0?w+=y:C<d&&(w+=2*y)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;let L=this._sizeLods[s],N=3*L*(s>v-hi?s-v+hi:0),I=4*(this._cubeSize-L);ms(t,N,I,3*L,2*L),c.setRenderTarget(t),c.render(f,Ar)}};function nf(i){let e=[],t=[],n=[],s=i,r=i-hi+1+Do.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hi?c=Do[o-i+hi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,d=2,u=1,w=new Float32Array(_*g*m),v=new Float32Array(d*g*m),L=new Float32Array(u*g*m);for(let I=0;I<m;I++){let C=I%3*2/3-1,J=I>2?0:-1,y=[C,J,0,C+2/3,J,0,C+2/3,J+1,0,C,J,0,C+2/3,J+1,0,C,J+1,0];w.set(y,_*g*I),v.set(p,d*g*I);let T=[I,I,I,I,I,I];L.set(T,u*g*I)}let N=new Xt;N.setAttribute("position",new Nt(w,_)),N.setAttribute("uv",new Nt(v,d)),N.setAttribute("faceIndex",new Nt(L,u)),e.push(N),s>hi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(i,e,t){let n=new dn(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sf(i,e,t){let n=new Float32Array(Nn),s=new O(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Fo(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Bo(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function rf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Or||c===Fr,h=c===mi||c===gi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new vi(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new vi(i));let p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function af(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function of(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let d=0,u=_.length;d<u;d++)e.remove(_[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let _=m[g];for(let d=0,u=_.length;d<u;d++)e.update(_[d],i.ARRAY_BUFFER)}}function l(f){let p=[],m=f.index,g=f.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let v=0,L=w.length;v<L;v+=3){let N=w[v+0],I=w[v+1],C=w[v+2];p.push(N,I,I,C,C,N)}}else if(g!==void 0){let w=g.array;_=g.version;for(let v=0,L=w.length/3-1;v<L;v+=3){let N=v+0,I=v+1,C=v+2;p.push(N,I,I,C,C,N)}}else return;let d=new(_c(p)?Is:Ls)(p,1);d.version=_;let u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function cf(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*c),t.update(g,r,1)}function f(m,g,_){if(_===0)return;let d,u;if(s)d=i,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,g,a,m*c,_),t.update(g,r,_)}function p(m,g,_){if(_===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{d.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let w=0;w<_;w++)u+=g[w];t.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function lf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hf(i,e){return i[0]-e[0]}function uf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function df(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){let p=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let b=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();let w=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],C=h.morphAttributes.color||[],J=0;w===!0&&(J=1),v===!0&&(J=2),L===!0&&(J=3);let y=h.attributes.position.count*J,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*g),P=new Rs(E,y,T,g);P.type=Sn,P.needsUpdate=!0;let V=J*4;for(let A=0;A<g;A++){let U=N[A],W=I[A],X=C[A],Y=y*T*4*A;for(let Z=0;Z<U.count;Z++){let $=Z*V;w===!0&&(o.fromBufferAttribute(U,Z),E[Y+$+0]=o.x,E[Y+$+1]=o.y,E[Y+$+2]=o.z,E[Y+$+3]=0),v===!0&&(o.fromBufferAttribute(W,Z),E[Y+$+4]=o.x,E[Y+$+5]=o.y,E[Y+$+6]=o.z,E[Y+$+7]=0),L===!0&&(o.fromBufferAttribute(X,Z),E[Y+$+8]=o.x,E[Y+$+9]=o.y,E[Y+$+10]=o.z,E[Y+$+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:P,size:new Ce(y,T)},r.set(h,_),h.addEventListener("dispose",b)}let d=0;for(let w=0;w<p.length;w++)d+=p[w];let u=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",u),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=p===void 0?0:p.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let L=g[v];L[0]=v,L[1]=p[v]}g.sort(uf);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hf);let _=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let L=a[v],N=L[0],I=L[1];N!==Number.MAX_SAFE_INTEGER&&I?(_&&h.getAttribute("morphTarget"+v)!==_[N]&&h.setAttribute("morphTarget"+v,_[N]),d&&h.getAttribute("morphNormal"+v)!==d[N]&&h.setAttribute("morphNormal"+v,d[N]),s[v]=I,u+=I):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let w=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",w),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function ff(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Os=class extends Ot{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=Mn),n===void 0&&h===_i&&(n=On),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mc=new Ot,Sc=new Os(1,1);Sc.compareFunction=mc;var bc=new Rs,Ec=new Vr,wc=new Us,zo=[],ko=[],Ho=new Float32Array(16),Vo=new Float32Array(9),Go=new Float32Array(4);function bi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=zo[s];if(r===void 0&&(r=new Float32Array(s),zo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=ko[e];t===void 0&&(t=new Int32Array(e),ko[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function gf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function _f(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function xf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Go.set(n),i.uniformMatrix2fv(this.addr,!1,Go),ht(t,n)}}function vf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),ht(t,n)}}function yf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(lt(t,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),ht(t,n)}}function Mf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function bf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Ef(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function wf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function Af(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function Rf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function Cf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Sc:Mc;t.setTexture2D(e||r,s)}function Pf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ec,s)}function Lf(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wc,s)}function If(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bc,s)}function Df(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return xf;case 35675:return vf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return bf;case 35669:case 35673:return Ef;case 5125:return wf;case 36294:return Tf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}function Uf(i,e){i.uniform1fv(this.addr,e)}function Nf(i,e){let t=bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Of(i,e){let t=bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Ff(i,e){let t=bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Bf(i,e){let t=bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zf(i,e){let t=bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kf(i,e){let t=bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hf(i,e){i.uniform1iv(this.addr,e)}function Vf(i,e){i.uniform2iv(this.addr,e)}function Gf(i,e){i.uniform3iv(this.addr,e)}function Wf(i,e){i.uniform4iv(this.addr,e)}function Xf(i,e){i.uniform1uiv(this.addr,e)}function qf(i,e){i.uniform2uiv(this.addr,e)}function Yf(i,e){i.uniform3uiv(this.addr,e)}function Zf(i,e){i.uniform4uiv(this.addr,e)}function Jf(i,e,t){let n=this.cache,s=e.length,r=Zs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mc,r[o])}function Kf(i,e,t){let n=this.cache,s=e.length,r=Zs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ec,r[o])}function $f(i,e,t){let n=this.cache,s=e.length,r=Zs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wc,r[o])}function jf(i,e,t){let n=this.cache,s=e.length,r=Zs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bc,r[o])}function Qf(i){switch(i){case 5126:return Uf;case 35664:return Nf;case 35665:return Of;case 35666:return Ff;case 35674:return Bf;case 35675:return zf;case 35676:return kf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return Gf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return jf}}var Xr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Df(t.type)}},qr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qf(t.type)}},Yr=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Lr=/(\w+)(\])?(\[|\.)?/g;function Wo(i,e){i.seq.push(e),i.map[e.id]=e}function ep(i,e,t){let n=i.name,s=n.length;for(Lr.lastIndex=0;;){let r=Lr.exec(n),o=Lr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wo(t,l===void 0?new Xr(a,i,e):new qr(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Yr(a),Wo(t,f)),t=f}}}var pi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ep(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Xo(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var tp=37297,np=0;function ip(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sp(i){let e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i),n;switch(e===t?n="":e===Ss&&t===Ms?n="LinearDisplayP3ToLinearSRGB":e===Ms&&t===Ss&&(n="LinearSRGBToLinearDisplayP3"),i){case un:case Ys:return[n,"LinearTransferOETF"];case ot:case _a:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qo(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ip(i.getShaderSource(e),o)}else return s}function rp(i,e){let t=sp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ap(i,e){let t;switch(e){case ul:t="Linear";break;case dl:t="Reinhard";break;case fl:t="OptimizedCineon";break;case ma:t="ACESFilmic";break;case ml:t="AgX";break;case pl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function op(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ui).join(`
`)}function lp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ui(i){return i!==""}function Yo(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(i){return i.replace(up,fp)}var dp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fp(i,e){let t=Oe[e];if(t===void 0){let n=dp.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zr(t)}var pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(i){return i.replace(pp,mp)}function mp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ko(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function _p(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gi&&(e="ENVMAP_MODE_REFRACTION"),e}function vp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case ll:e="ENVMAP_BLENDING_MIX";break;case hl:e="ENVMAP_BLENDING_ADD";break}return e}function yp(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=gp(t),l=_p(t),h=xp(t),f=vp(t),p=yp(t),m=t.isWebGL2?"":op(t),g=cp(t),_=lp(r),d=s.createProgram(),u,w,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ui).join(`
`),u.length>0&&(u+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ui).join(`
`),w.length>0&&(w+=`
`)):(u=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),w=[m,Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Oe.tonemapping_pars_fragment:"",t.toneMapping!==En?ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,rp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ui).join(`
`)),o=Zr(o),o=Yo(o,t),o=Zo(o,t),a=Zr(a),a=Yo(a,t),a=Zo(a,t),o=Jo(o),a=Jo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let L=v+u+o,N=v+w+a,I=Xo(s,s.VERTEX_SHADER,L),C=Xo(s,s.FRAGMENT_SHADER,N);s.attachShader(d,I),s.attachShader(d,C),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function J(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(d).trim(),b=s.getShaderInfoLog(I).trim(),A=s.getShaderInfoLog(C).trim(),U=!0,W=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,I,C);else{let X=qo(s,I,"vertex"),Y=qo(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+X+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(b===""||A==="")&&(W=!1);W&&(P.diagnostics={runnable:U,programLog:V,vertexShader:{log:b,prefix:u},fragmentShader:{log:A,prefix:w}})}s.deleteShader(I),s.deleteShader(C),y=new pi(s,d),T=hp(s,d)}let y;this.getUniforms=function(){return y===void 0&&J(this),y};let T;this.getAttributes=function(){return T===void 0&&J(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(d,tp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=np++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=I,this.fragmentShader=C,this}var Sp=0,Jr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kr(e),t.set(e,n)),n}},Kr=class{constructor(e){this.id=Sp++,this.code=e,this.usedTimes=0}};function bp(i,e,t,n,s,r,o){let a=new Ps,c=new Jr,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function d(y,T,E,P,V){let b=P.fog,A=V.geometry,U=y.isMeshStandardMaterial?P.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),X=W&&W.mapping===qs?W.image.height:null,Y=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let Z=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,$=Z!==void 0?Z.length:0,j=0;A.morphAttributes.position!==void 0&&(j=1),A.morphAttributes.normal!==void 0&&(j=2),A.morphAttributes.color!==void 0&&(j=3);let F,K,re,fe;if(Y){let Mt=Jt[Y];F=Mt.vertexShader,K=Mt.fragmentShader}else F=y.vertexShader,K=y.fragmentShader,c.update(y),re=c.getVertexShaderID(y),fe=c.getFragmentShaderID(y);let ge=i.getRenderTarget(),pe=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,be=!!y.map,Ae=!!y.matcap,z=!!W,Ze=!!y.aoMap,ve=!!y.lightMap,Pe=!!y.bumpMap,_e=!!y.normalMap,je=!!y.displacementMap,Ie=!!y.emissiveMap,S=!!y.metalnessMap,x=!!y.roughnessMap,k=y.anisotropy>0,ie=y.clearcoat>0,te=y.iridescence>0,ne=y.sheen>0,xe=y.transmission>0,ue=k&&!!y.anisotropyMap,me=ie&&!!y.clearcoatMap,we=ie&&!!y.clearcoatNormalMap,Ue=ie&&!!y.clearcoatRoughnessMap,ee=te&&!!y.iridescenceMap,We=te&&!!y.iridescenceThicknessMap,R=ne&&!!y.sheenColorMap,Q=ne&&!!y.sheenRoughnessMap,le=!!y.specularMap,se=!!y.specularColorMap,ye=!!y.specularIntensityMap,ke=xe&&!!y.transmissionMap,Xe=xe&&!!y.thicknessMap,Fe=!!y.gradientMap,ce=!!y.alphaMap,D=y.alphaTest>0,ae=!!y.alphaHash,oe=!!y.extensions,Ee=!!A.attributes.uv1,Me=!!A.attributes.uv2,qe=!!A.attributes.uv3,Ye=En;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:F,fragmentShader:K,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Te,instancing:pe,instancingColor:pe&&V.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:un,map:be,matcap:Ae,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:X,aoMap:Ze,lightMap:ve,bumpMap:Pe,normalMap:_e,displacementMap:p&&je,emissiveMap:Ie,normalMapObjectSpace:_e&&y.normalMapType===Al,normalMapTangentSpace:_e&&y.normalMapType===pc,metalnessMap:S,roughnessMap:x,anisotropy:k,anisotropyMap:ue,clearcoat:ie,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:Ue,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:We,sheen:ne,sheenColorMap:R,sheenRoughnessMap:Q,specularMap:le,specularColorMap:se,specularIntensityMap:ye,transmission:xe,transmissionMap:ke,thicknessMap:Xe,gradientMap:Fe,opaque:y.transparent===!1&&y.blending===di,alphaMap:ce,alphaTest:D,alphaHash:ae,combine:y.combine,mapUv:be&&_(y.map.channel),aoMapUv:Ze&&_(y.aoMap.channel),lightMapUv:ve&&_(y.lightMap.channel),bumpMapUv:Pe&&_(y.bumpMap.channel),normalMapUv:_e&&_(y.normalMap.channel),displacementMapUv:je&&_(y.displacementMap.channel),emissiveMapUv:Ie&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Q&&_(y.sheenRoughnessMap.channel),specularMapUv:le&&_(y.specularMap.channel),specularColorMapUv:se&&_(y.specularColorMap.channel),specularIntensityMapUv:ye&&_(y.specularIntensityMap.channel),transmissionMapUv:ke&&_(y.transmissionMap.channel),thicknessMapUv:Xe&&_(y.thicknessMap.channel),alphaMapUv:ce&&_(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(_e||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:Me,vertexUv3s:qe,pointsUvs:V.isPoints===!0&&!!A.attributes.uv&&(be||ce),fog:!!b,useFog:y.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:j,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)T.push(E),T.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(w(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function w(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function L(y){let T=g[y.type],E;if(T){let P=Jt[T];E=uh.clone(P.uniforms)}else E=y.uniforms;return E}function N(y,T){let E;for(let P=0,V=l.length;P<V;P++){let b=l[P];if(b.cacheKey===T){E=b,++E.usedTimes;break}}return E===void 0&&(E=new Mp(i,T,y,r),l.push(E)),E}function I(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),y.destroy()}}function C(y){c.remove(y)}function J(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:L,acquireProgram:N,releaseProgram:I,releaseShaderCache:C,programs:l,dispose:J}}function Ep(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $o(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jo(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,m,g,_,d){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=d),e++,u}function a(f,p,m,g,_,d){let u=o(f,p,m,g,_,d);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function c(f,p,m,g,_,d){let u=o(f,p,m,g,_,d);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||wp),n.length>1&&n.sort(p||$o),s.length>1&&s.sort(p||$o)}function h(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Tp(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jo,i.set(n,[o])):s>=r.length?(o=new jo,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ap(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Rp(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Cp=0;function Pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lp(i,e){let t=new Ap,n=Rp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new ct,a=new ct;function c(h,f){let p=0,m=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let _=0,d=0,u=0,w=0,v=0,L=0,N=0,I=0,C=0,J=0,y=0;h.sort(Pp);let T=f===!0?Math.PI:1;for(let P=0,V=h.length;P<V;P++){let b=h[P],A=b.color,U=b.intensity,W=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)p+=A.r*U*T,m+=A.g*U*T,g+=A.b*U*T;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(b.sh.coefficients[Y],U);y++}else if(b.isDirectionalLight){let Y=t.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){let Z=b.shadow,$=n.get(b);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,s.directionalShadow[_]=$,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=b.shadow.matrix,L++}s.directional[_]=Y,_++}else if(b.isSpotLight){let Y=t.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(A).multiplyScalar(U*T),Y.distance=W,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,s.spot[u]=Y;let Z=b.shadow;if(b.map&&(s.spotLightMap[C]=b.map,C++,Z.updateMatrices(b),b.castShadow&&J++),s.spotLightMatrix[u]=Z.matrix,b.castShadow){let $=n.get(b);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,s.spotShadow[u]=$,s.spotShadowMap[u]=X,I++}u++}else if(b.isRectAreaLight){let Y=t.get(b);Y.color.copy(A).multiplyScalar(U),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),s.rectArea[w]=Y,w++}else if(b.isPointLight){let Y=t.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity*T),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){let Z=b.shadow,$=n.get(b);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,s.pointShadow[d]=$,s.pointShadowMap[d]=X,s.pointShadowMatrix[d]=b.shadow.matrix,N++}s.point[d]=Y,d++}else if(b.isHemisphereLight){let Y=t.get(b);Y.skyColor.copy(b.color).multiplyScalar(U*T),Y.groundColor.copy(b.groundColor).multiplyScalar(U*T),s.hemi[v]=Y,v++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;let E=s.hash;(E.directionalLength!==_||E.pointLength!==d||E.spotLength!==u||E.rectAreaLength!==w||E.hemiLength!==v||E.numDirectionalShadows!==L||E.numPointShadows!==N||E.numSpotShadows!==I||E.numSpotMaps!==C||E.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=w,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=I+C-J,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=J,s.numLightProbes=y,E.directionalLength=_,E.pointLength=d,E.spotLength=u,E.rectAreaLength=w,E.hemiLength=v,E.numDirectionalShadows=L,E.numPointShadows=N,E.numSpotShadows=I,E.numSpotMaps=C,E.numLightProbes=y,s.version=Cp++)}function l(h,f){let p=0,m=0,g=0,_=0,d=0,u=f.matrixWorldInverse;for(let w=0,v=h.length;w<v;w++){let L=h[w];if(L.isDirectionalLight){let N=s.directional[p];N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(u),p++}else if(L.isSpotLight){let N=s.spot[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(u),N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(u),g++}else if(L.isRectAreaLight){let N=s.rectArea[_];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(u),a.identity(),o.copy(L.matrixWorld),o.premultiply(u),a.extractRotation(o),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),_++}else if(L.isPointLight){let N=s.point[m];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(u),m++}else if(L.isHemisphereLight){let N=s.hemi[d];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(u),d++}}}return{setup:c,setupView:l,state:s}}function Qo(i,e){let t=new Lp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ip(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Qo(i,e),t.set(r,[c])):o>=a.length?(c=new Qo(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var $r=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jr=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Up=`uniform sampler2D shadow_pass;
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
}`;function Np(i,e,t){let n=new Hi,s=new Ce,r=new Ce,o=new tt,a=new $r({depthPacking:Tl}),c=new jr,l={},h=t.maxTextureSize,f={[Tn]:yt,[yt]:Tn,[ln]:ln},p=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Dp,fragmentShader:Up}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let u=this.type;this.render=function(I,C,J){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||I.length===0)return;let y=i.getRenderTarget(),T=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(bn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let V=u!==cn&&this.type===cn,b=u===cn&&this.type!==cn;for(let A=0,U=I.length;A<U;A++){let W=I[A],X=W.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let Y=X.getFrameExtents();if(s.multiply(Y),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||V===!0||b===!0){let $=this.type!==cn?{minFilter:wt,magFilter:wt}:{};X.map!==null&&X.map.dispose(),X.map=new dn(s.x,s.y,$),X.map.texture.name=W.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Z=X.getViewportCount();for(let $=0;$<Z;$++){let j=X.getViewport($);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),P.viewport(o),X.updateMatrices(W,$),n=X.getFrustum(),L(C,J,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===cn&&w(X,J),X.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(y,T,E)};function w(I,C){let J=e.update(_);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new dn(s.x,s.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,J,p,_,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,J,m,_,null)}function v(I,C,J,y){let T=null,E=J.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(E!==void 0)T=E;else if(T=J.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let P=T.uuid,V=C.uuid,b=l[P];b===void 0&&(b={},l[P]=b);let A=b[V];A===void 0&&(A=T.clone(),b[V]=A,C.addEventListener("dispose",N)),T=A}if(T.visible=C.visible,T.wireframe=C.wireframe,y===cn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,J.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=J}return T}function L(I,C,J,y,T){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===cn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld);let V=e.update(I),b=I.material;if(Array.isArray(b)){let A=V.groups;for(let U=0,W=A.length;U<W;U++){let X=A[U],Y=b[X.materialIndex];if(Y&&Y.visible){let Z=v(I,Y,y,T);I.onBeforeShadow(i,I,C,J,V,Z,X),i.renderBufferDirect(J,null,V,Z,I,X),I.onAfterShadow(i,I,C,J,V,Z,X)}}}else if(b.visible){let A=v(I,b,y,T);I.onBeforeShadow(i,I,C,J,V,A,null),i.renderBufferDirect(J,null,V,A,I,null),I.onAfterShadow(i,I,C,J,V,A,null)}}let P=I.children;for(let V=0,b=P.length;V<b;V++)L(P[V],C,J,y,T)}function N(I){I.target.removeEventListener("dispose",N);for(let J in l){let y=l[J],T=I.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}function Op(i,e,t){let n=t.isWebGL2;function s(){let D=!1,ae=new tt,oe=null,Ee=new tt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!D&&(i.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){D=Me},setClear:function(Me,qe,Ye,ut,Mt){Mt===!0&&(Me*=ut,qe*=ut,Ye*=ut),ae.set(Me,qe,Ye,ut),Ee.equals(ae)===!1&&(i.clearColor(Me,qe,Ye,ut),Ee.copy(ae))},reset:function(){D=!1,oe=null,Ee.set(-1,0,0,0)}}}function r(){let D=!1,ae=null,oe=null,Ee=null;return{setTest:function(Me){Me?Te(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!D&&(i.depthMask(Me),ae=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Me}},setLocked:function(Me){D=Me},setClear:function(Me){Ee!==Me&&(i.clearDepth(Me),Ee=Me)},reset:function(){D=!1,ae=null,oe=null,Ee=null}}}function o(){let D=!1,ae=null,oe=null,Ee=null,Me=null,qe=null,Ye=null,ut=null,Mt=null;return{setTest:function(Ke){D||(Ke?Te(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!D&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,St,Zt){(oe!==Ke||Ee!==St||Me!==Zt)&&(i.stencilFunc(Ke,St,Zt),oe=Ke,Ee=St,Me=Zt)},setOp:function(Ke,St,Zt){(qe!==Ke||Ye!==St||ut!==Zt)&&(i.stencilOp(Ke,St,Zt),qe=Ke,Ye=St,ut=Zt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){Mt!==Ke&&(i.clearStencil(Ke),Mt=Ke)},reset:function(){D=!1,ae=null,oe=null,Ee=null,Me=null,qe=null,Ye=null,ut=null,Mt=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,f=new WeakMap,p={},m={},g=new WeakMap,_=[],d=null,u=!1,w=null,v=null,L=null,N=null,I=null,C=null,J=null,y=new Ge(0,0,0),T=0,E=!1,P=null,V=null,b=null,A=null,U=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=Y>=2);let $=null,j={},F=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),re=new tt().fromArray(F),fe=new tt().fromArray(K);function ge(D,ae,oe,Ee){let Me=new Uint8Array(4),qe=i.createTexture();i.bindTexture(D,qe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<oe;Ye++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return qe}let pe={};pe[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Te(i.DEPTH_TEST),c.setFunc(_s),Ie(!1),S(La),Te(i.CULL_FACE),_e(bn);function Te(D){p[D]!==!0&&(i.enable(D),p[D]=!0)}function be(D){p[D]!==!1&&(i.disable(D),p[D]=!1)}function Ae(D,ae){return m[D]!==ae?(i.bindFramebuffer(D,ae),m[D]=ae,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(D,ae){let oe=_,Ee=!1;if(D)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),D.isWebGLMultipleRenderTargets){let Me=D.texture;if(oe.length!==Me.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ye=Me.length;qe<Ye;qe++)oe[qe]=i.COLOR_ATTACHMENT0+qe;oe.length=Me.length,Ee=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ee=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ze(D){return d!==D?(i.useProgram(D),d=D,!0):!1}let ve={[Un]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Vc]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Na]=i.MIN,ve[Oa]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(ve[Na]=D.MIN_EXT,ve[Oa]=D.MAX_EXT)}let Pe={[Gc]:i.ZERO,[Wc]:i.ONE,[Xc]:i.SRC_COLOR,[Ur]:i.SRC_ALPHA,[$c]:i.SRC_ALPHA_SATURATE,[Jc]:i.DST_COLOR,[Yc]:i.DST_ALPHA,[qc]:i.ONE_MINUS_SRC_COLOR,[Nr]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Zc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[Qc]:i.ONE_MINUS_CONSTANT_COLOR,[el]:i.CONSTANT_ALPHA,[tl]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(D,ae,oe,Ee,Me,qe,Ye,ut,Mt,Ke){if(D===bn){u===!0&&(be(i.BLEND),u=!1);return}if(u===!1&&(Te(i.BLEND),u=!0),D!==kc){if(D!==w||Ke!==E){if((v!==Un||I!==Un)&&(i.blendEquation(i.FUNC_ADD),v=Un,I=Un),Ke)switch(D){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}L=null,N=null,C=null,J=null,y.set(0,0,0),T=0,w=D,E=Ke}return}Me=Me||ae,qe=qe||oe,Ye=Ye||Ee,(ae!==v||Me!==I)&&(i.blendEquationSeparate(ve[ae],ve[Me]),v=ae,I=Me),(oe!==L||Ee!==N||qe!==C||Ye!==J)&&(i.blendFuncSeparate(Pe[oe],Pe[Ee],Pe[qe],Pe[Ye]),L=oe,N=Ee,C=qe,J=Ye),(ut.equals(y)===!1||Mt!==T)&&(i.blendColor(ut.r,ut.g,ut.b,Mt),y.copy(ut),T=Mt),w=D,E=!1}function je(D,ae){D.side===ln?be(i.CULL_FACE):Te(i.CULL_FACE);let oe=D.side===yt;ae&&(oe=!oe),Ie(oe),D.blending===di&&D.transparent===!1?_e(bn):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let Ee=D.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function S(D){D!==Bc?(Te(i.CULL_FACE),D!==V&&(D===La?i.cullFace(i.BACK):D===zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),V=D}function x(D){D!==b&&(X&&i.lineWidth(D),b=D)}function k(D,ae,oe){D?(Te(i.POLYGON_OFFSET_FILL),(A!==ae||U!==oe)&&(i.polygonOffset(ae,oe),A=ae,U=oe)):be(i.POLYGON_OFFSET_FILL)}function ie(D){D?Te(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function te(D){D===void 0&&(D=i.TEXTURE0+W-1),$!==D&&(i.activeTexture(D),$=D)}function ne(D,ae,oe){oe===void 0&&($===null?oe=i.TEXTURE0+W-1:oe=$);let Ee=j[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},j[oe]=Ee),(Ee.type!==D||Ee.texture!==ae)&&($!==oe&&(i.activeTexture(oe),$=oe),i.bindTexture(D,ae||pe[D]),Ee.type=D,Ee.texture=ae)}function xe(){let D=j[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){re.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function ke(D){fe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),fe.copy(D))}function Xe(D,ae){let oe=f.get(ae);oe===void 0&&(oe=new WeakMap,f.set(ae,oe));let Ee=oe.get(D);Ee===void 0&&(Ee=i.getUniformBlockIndex(ae,D.name),oe.set(D,Ee))}function Fe(D,ae){let Ee=f.get(ae).get(D);h.get(ae)!==Ee&&(i.uniformBlockBinding(ae,Ee,D.__bindingPointIndex),h.set(ae,Ee))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},$=null,j={},m={},g=new WeakMap,_=[],d=null,u=!1,w=null,v=null,L=null,N=null,I=null,C=null,J=null,y=new Ge(0,0,0),T=0,E=!1,P=null,V=null,b=null,A=null,U=null,re.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Te,disable:be,bindFramebuffer:Ae,drawBuffers:z,useProgram:Ze,setBlending:_e,setMaterial:je,setFlipSided:Ie,setCullFace:S,setLineWidth:x,setPolygonOffset:k,setScissorTest:ie,activeTexture:te,bindTexture:ne,unbindTexture:xe,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:le,texImage3D:se,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:R,texStorage3D:Q,texSubImage2D:we,texSubImage3D:Ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:We,scissor:ye,viewport:ke,reset:ce}}function Fp(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):ws("canvas")}function _(S,x,k,ie){let te=1;if((S.width>ie||S.height>ie)&&(te=ie/Math.max(S.width,S.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ne=x?Es:Math.floor,xe=ne(te*S.width),ue=ne(te*S.height);f===void 0&&(f=g(xe,ue));let me=k?g(xe,ue):f;return me.width=xe,me.height=ue,me.getContext("2d").drawImage(S,0,0,xe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+ue+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function d(S){return kr(S.width)&&kr(S.height)}function u(S){return a?!1:S.wrapS!==Ht||S.wrapT!==Ht||S.minFilter!==wt&&S.minFilter!==Dt}function w(S,x){return S.generateMipmaps&&x&&S.minFilter!==wt&&S.minFilter!==Dt}function v(S){i.generateMipmap(S)}function L(S,x,k,ie,te=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ne=x;if(x===i.RED&&(k===i.FLOAT&&(ne=i.R32F),k===i.HALF_FLOAT&&(ne=i.R16F),k===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.R8UI),k===i.UNSIGNED_SHORT&&(ne=i.R16UI),k===i.UNSIGNED_INT&&(ne=i.R32UI),k===i.BYTE&&(ne=i.R8I),k===i.SHORT&&(ne=i.R16I),k===i.INT&&(ne=i.R32I)),x===i.RG&&(k===i.FLOAT&&(ne=i.RG32F),k===i.HALF_FLOAT&&(ne=i.RG16F),k===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RGBA){let xe=te?ys:Je.getTransfer(ie);k===i.FLOAT&&(ne=i.RGBA32F),k===i.HALF_FLOAT&&(ne=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ne=xe===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function N(S,x,k){return w(S,k)===!0||S.isFramebufferTexture&&S.minFilter!==wt&&S.minFilter!==Dt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){return S===wt||S===Fa||S===ir?i.NEAREST:i.LINEAR}function C(S){let x=S.target;x.removeEventListener("dispose",C),y(x),x.isVideoTexture&&h.delete(x)}function J(S){let x=S.target;x.removeEventListener("dispose",J),E(x)}function y(S){let x=n.get(S);if(x.__webglInit===void 0)return;let k=S.source,ie=p.get(k);if(ie){let te=ie[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(S),Object.keys(ie).length===0&&p.delete(k)}n.remove(S)}function T(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let k=S.source,ie=p.get(k);delete ie[x.__cacheKey],o.memory.textures--}function E(S){let x=S.texture,k=n.get(S),ie=n.get(x);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(k.__webglFramebuffer[te]))for(let ne=0;ne<k.__webglFramebuffer[te].length;ne++)i.deleteFramebuffer(k.__webglFramebuffer[te][ne]);else i.deleteFramebuffer(k.__webglFramebuffer[te]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[te])}else{if(Array.isArray(k.__webglFramebuffer))for(let te=0;te<k.__webglFramebuffer.length;te++)i.deleteFramebuffer(k.__webglFramebuffer[te]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,ne=x.length;te<ne;te++){let xe=n.get(x[te]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(x[te])}n.remove(x),n.remove(S)}let P=0;function V(){P=0}function b(){let S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function A(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function U(S,x){let k=n.get(S);if(S.isVideoTexture&&je(S),S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){let ie=S.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,S,x);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function W(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){re(k,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function X(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){re(k,S,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function Y(S,x){let k=n.get(S);if(S.version>0&&k.__version!==S.version){fe(k,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let Z={[Ni]:i.REPEAT,[Ht]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},$={[wt]:i.NEAREST,[Fa]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},j={[Rl]:i.NEVER,[Ul]:i.ALWAYS,[Cl]:i.LESS,[mc]:i.LEQUAL,[Pl]:i.EQUAL,[Dl]:i.GEQUAL,[Ll]:i.GREATER,[Il]:i.NOTEQUAL};function F(S,x,k){if(k?(i.texParameteri(S,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Z[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,$[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Ht||x.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,I(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,I(x.minFilter)),x.minFilter!==wt&&x.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,j[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===wt||x.minFilter!==ir&&x.minFilter!==Oi||x.type===Sn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function K(S,x){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",C));let ie=x.source,te=p.get(ie);te===void 0&&(te={},p.set(ie,te));let ne=A(x);if(ne!==S.__cacheKey){te[ne]===void 0&&(te[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ne].usedTimes++;let xe=te[S.__cacheKey];xe!==void 0&&(te[S.__cacheKey].usedTimes--,xe.usedTimes===0&&T(x)),S.__cacheKey=ne,S.__webglTexture=te[ne].texture}return k}function re(S,x,k){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);let te=K(S,x),ne=x.source;t.bindTexture(ie,S.__webglTexture,i.TEXTURE0+k);let xe=n.get(ne);if(ne.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+k);let ue=Je.getPrimaries(Je.workingColorSpace),me=x.colorSpace===Ut?null:Je.getPrimaries(x.colorSpace),we=x.colorSpace===Ut||ue===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ue=u(x)&&d(x.image)===!1,ee=_(x.image,Ue,!1,s.maxTextureSize);ee=Ie(x,ee);let We=d(ee)||a,R=r.convert(x.format,x.colorSpace),Q=r.convert(x.type),le=L(x.internalFormat,R,Q,x.colorSpace,x.isVideoTexture);F(ie,x,We);let se,ye=x.mipmaps,ke=a&&x.isVideoTexture!==!0&&le!==dc,Xe=xe.__version===void 0||te===!0,Fe=N(x,ee,We);if(x.isDepthTexture)le=i.DEPTH_COMPONENT,a?x.type===Sn?le=i.DEPTH_COMPONENT32F:x.type===Mn?le=i.DEPTH_COMPONENT24:x.type===On?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:x.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Fn&&le===i.DEPTH_COMPONENT&&x.type!==ga&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Q=r.convert(x.type)),x.format===_i&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,x.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=On,Q=r.convert(x.type))),Xe&&(ke?t.texStorage2D(i.TEXTURE_2D,1,le,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,R,Q,null));else if(x.isDataTexture)if(ye.length>0&&We){ke&&Xe&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let ce=0,D=ye.length;ce<D;ce++)se=ye[ce],ke?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,R,Q,se.data):t.texImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,R,Q,se.data);x.generateMipmaps=!1}else ke?(Xe&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,R,Q,ee.data)):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,R,Q,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ke&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,ye[0].width,ye[0].height,ee.depth);for(let ce=0,D=ye.length;ce<D;ce++)se=ye[ce],x.format!==Vt?R!==null?ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,ee.depth,R,se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,le,se.width,se.height,ee.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,ee.depth,R,Q,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,le,se.width,se.height,ee.depth,0,R,Q,se.data)}else{ke&&Xe&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let ce=0,D=ye.length;ce<D;ce++)se=ye[ce],x.format!==Vt?R!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,R,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,R,Q,se.data):t.texImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,R,Q,se.data)}else if(x.isDataArrayTexture)ke?(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,R,Q,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,ee.width,ee.height,ee.depth,0,R,Q,ee.data);else if(x.isData3DTexture)ke?(Xe&&t.texStorage3D(i.TEXTURE_3D,Fe,le,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,R,Q,ee.data)):t.texImage3D(i.TEXTURE_3D,0,le,ee.width,ee.height,ee.depth,0,R,Q,ee.data);else if(x.isFramebufferTexture){if(Xe)if(ke)t.texStorage2D(i.TEXTURE_2D,Fe,le,ee.width,ee.height);else{let ce=ee.width,D=ee.height;for(let ae=0;ae<Fe;ae++)t.texImage2D(i.TEXTURE_2D,ae,le,ce,D,0,R,Q,null),ce>>=1,D>>=1}}else if(ye.length>0&&We){ke&&Xe&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ye[0].width,ye[0].height);for(let ce=0,D=ye.length;ce<D;ce++)se=ye[ce],ke?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,R,Q,se):t.texImage2D(i.TEXTURE_2D,ce,le,R,Q,se);x.generateMipmaps=!1}else ke?(Xe&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,R,Q,ee)):t.texImage2D(i.TEXTURE_2D,0,le,R,Q,ee);w(x,We)&&v(ie),xe.__version=ne.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function fe(S,x,k){if(x.image.length!==6)return;let ie=K(S,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+k);let ne=n.get(te);if(te.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);let xe=Je.getPrimaries(Je.workingColorSpace),ue=x.colorSpace===Ut?null:Je.getPrimaries(x.colorSpace),me=x.colorSpace===Ut||xe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let we=x.isCompressedTexture||x.image[0].isCompressedTexture,Ue=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let ce=0;ce<6;ce++)!we&&!Ue?ee[ce]=_(x.image[ce],!1,!0,s.maxCubemapSize):ee[ce]=Ue?x.image[ce].image:x.image[ce],ee[ce]=Ie(x,ee[ce]);let We=ee[0],R=d(We)||a,Q=r.convert(x.format,x.colorSpace),le=r.convert(x.type),se=L(x.internalFormat,Q,le,x.colorSpace),ye=a&&x.isVideoTexture!==!0,ke=ne.__version===void 0||ie===!0,Xe=N(x,We,R);F(i.TEXTURE_CUBE_MAP,x,R);let Fe;if(we){ye&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,se,We.width,We.height);for(let ce=0;ce<6;ce++){Fe=ee[ce].mipmaps;for(let D=0;D<Fe.length;D++){let ae=Fe[D];x.format!==Vt?Q!==null?ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,ae.width,ae.height,Q,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,ae.width,ae.height,Q,le,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,se,ae.width,ae.height,0,Q,le,ae.data)}}}else{Fe=x.mipmaps,ye&&ke&&(Fe.length>0&&Xe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,se,ee[0].width,ee[0].height));for(let ce=0;ce<6;ce++)if(Ue){ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ee[ce].width,ee[ce].height,Q,le,ee[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,ee[ce].width,ee[ce].height,0,Q,le,ee[ce].data);for(let D=0;D<Fe.length;D++){let oe=Fe[D].image[ce].image;ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,oe.width,oe.height,Q,le,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,se,oe.width,oe.height,0,Q,le,oe.data)}}else{ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Q,le,ee[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,Q,le,ee[ce]);for(let D=0;D<Fe.length;D++){let ae=Fe[D];ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,Q,le,ae.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,se,Q,le,ae.image[ce])}}}w(x,R)&&v(i.TEXTURE_CUBE_MAP),ne.__version=te.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ge(S,x,k,ie,te,ne){let xe=r.convert(k.format,k.colorSpace),ue=r.convert(k.type),me=L(k.internalFormat,xe,ue,k.colorSpace);if(!n.get(x).__hasExternalTextures){let Ue=Math.max(1,x.width>>ne),ee=Math.max(1,x.height>>ne);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,me,Ue,ee,x.depth,0,xe,ue,null):t.texImage2D(te,ne,me,Ue,ee,0,xe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(k).__webglTexture,0,Pe(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(k).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(S,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||_e(x)){let te=x.depthTexture;te&&te.isDepthTexture&&(te.type===Sn?ie=i.DEPTH_COMPONENT32F:te.type===Mn&&(ie=i.DEPTH_COMPONENT24));let ne=Pe(x);_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ie,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ie,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let ie=Pe(x);k&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,x.width,x.height):_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let ie=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let te=0;te<ie.length;te++){let ne=ie[te],xe=r.convert(ne.format,ne.colorSpace),ue=r.convert(ne.type),me=L(ne.internalFormat,xe,ue,ne.colorSpace),we=Pe(x);k&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,me,x.width,x.height):_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U(x.depthTexture,0);let ie=n.get(x.depthTexture).__webglTexture,te=Pe(x);if(x.depthTexture.format===Fn)_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(x.depthTexture.format===_i)_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function be(S){let x=n.get(S),k=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,S)}else if(k){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[ie],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(S,x,k){let ie=n.get(S);x!==void 0&&ge(ie.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&be(S)}function z(S){let x=S.texture,k=n.get(S),ie=n.get(x);S.addEventListener("dispose",J),S.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,o.memory.textures++);let te=S.isWebGLCubeRenderTarget===!0,ne=S.isWebGLMultipleRenderTargets===!0,xe=d(S)||a;if(te){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let me=0;me<x.mipmaps.length;me++)k.__webglFramebuffer[ue][me]=i.createFramebuffer()}else k.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)k.__webglFramebuffer[ue]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ne)if(s.drawBuffers){let ue=S.texture;for(let me=0,we=ue.length;me<we;me++){let Ue=n.get(ue[me]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&_e(S)===!1){let ue=ne?x:[x];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){let we=ue[me];k.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[me]);let Ue=r.convert(we.format,we.colorSpace),ee=r.convert(we.type),We=L(we.internalFormat,Ue,ee,we.colorSpace,S.isXRRenderTarget===!0),R=Pe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,We,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,k.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(k.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),F(i.TEXTURE_CUBE_MAP,x,xe);for(let ue=0;ue<6;ue++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)ge(k.__webglFramebuffer[ue][me],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else ge(k.__webglFramebuffer[ue],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);w(x,xe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let ue=S.texture;for(let me=0,we=ue.length;me<we;me++){let Ue=ue[me],ee=n.get(Ue);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),F(i.TEXTURE_2D,Ue,xe),ge(k.__webglFramebuffer,S,Ue,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),w(Ue,xe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ue=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ie.__webglTexture),F(ue,x,xe),a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)ge(k.__webglFramebuffer[me],S,x,i.COLOR_ATTACHMENT0,ue,me);else ge(k.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,ue,0);w(x,xe)&&v(ue),t.unbindTexture()}S.depthBuffer&&be(S)}function Ze(S){let x=d(S)||a,k=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0,te=k.length;ie<te;ie++){let ne=k[ie];if(w(ne,x)){let xe=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ue=n.get(ne).__webglTexture;t.bindTexture(xe,ue),v(xe),t.unbindTexture()}}}function ve(S){if(a&&S.samples>0&&_e(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],k=S.width,ie=S.height,te=i.COLOR_BUFFER_BIT,ne=[],xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(S),me=S.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<x.length;we++){ne.push(i.COLOR_ATTACHMENT0+we),S.depthBuffer&&ne.push(xe);let Ue=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ue===!1&&(S.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[we]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[xe])),me){let ee=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,te,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);let Ue=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(S){return Math.min(s.maxSamples,S.samples)}function _e(S){let x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Ie(S,x){let k=S.colorSpace,ie=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===zr||k!==un&&k!==Ut&&(Je.getTransfer(k)===Qe?a===!1?e.has("EXT_sRGB")===!0&&ie===Vt?(S.format=zr,S.minFilter=Dt,S.generateMipmaps=!1):x=Ts.sRGBToLinear(x):(ie!==Vt||te!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}this.allocateTextureUnit=b,this.resetTextureUnits=V,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_e}function Bp(i,e,t){let n=t.isWebGL2;function s(r,o=Ut){let a,c=Je.getTransfer(o);if(r===wn)return i.UNSIGNED_BYTE;if(r===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_l)return i.BYTE;if(r===xl)return i.SHORT;if(r===ga)return i.UNSIGNED_SHORT;if(r===ac)return i.INT;if(r===Mn)return i.UNSIGNED_INT;if(r===Sn)return i.FLOAT;if(r===Fi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vl)return i.ALPHA;if(r===Vt)return i.RGBA;if(r===yl)return i.LUMINANCE;if(r===Ml)return i.LUMINANCE_ALPHA;if(r===Fn)return i.DEPTH_COMPONENT;if(r===_i)return i.DEPTH_STENCIL;if(r===zr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sl)return i.RED;if(r===lc)return i.RED_INTEGER;if(r===bl)return i.RG;if(r===hc)return i.RG_INTEGER;if(r===uc)return i.RGBA_INTEGER;if(r===sr||r===rr||r===ar||r===or)if(c===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ar)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===or)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ba||r===za||r===ka||r===Ha)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ba)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ka)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ha)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Va||r===Ga)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Va)return c===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ga)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wa||r===Xa||r===qa||r===Ya||r===Za||r===Ja||r===Ka||r===$a||r===ja||r===Qa||r===eo||r===to||r===no||r===io)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wa)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xa)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qa)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ya)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Za)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ja)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ka)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$a)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ja)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qa)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eo)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===to)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===no)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return c===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cr||r===so||r===ro)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cr)return c===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===so)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===El||r===ao||r===oo||r===co)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===cr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qr=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pt=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zp={type:"move"},Ui=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let d=t.getJointPose(_,n),u=this._getHandJoint(l,_);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ea=class extends Kt{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,m=null,g=null,_=t.getContextAttributes(),d=null,u=null,w=[],v=[],L=new Ce,N=null,I=new vt;I.layers.enable(1),I.viewport=new tt;let C=new vt;C.layers.enable(2),C.viewport=new tt;let J=[I,C],y=new Qr;y.layers.enable(1),y.layers.enable(2);let T=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=w[F];return K===void 0&&(K=new Ui,w[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=w[F];return K===void 0&&(K=new Ui,w[F]=K),K.getGripSpace()},this.getHand=function(F){let K=w[F];return K===void 0&&(K=new Ui,w[F]=K),K.getHandSpace()};function P(F){let K=v.indexOf(F.inputSource);if(K===-1)return;let re=w[K];re!==void 0&&(re.update(F.inputSource,F.frame,l||o),re.dispatchEvent({type:F.type,data:F.inputSource}))}function V(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",b);for(let F=0;F<w.length;F++){let K=v[F];K!==null&&(v[F]=null,w[F].disconnect(K))}T=null,E=null,e.setRenderTarget(d),m=null,p=null,f=null,s=null,u=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",V),s.addEventListener("inputsourceschange",b),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new dn(m.framebufferWidth,m.framebufferHeight,{format:Vt,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,re=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?_i:Fn,re=_.stencil?On:Mn);let ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(ge),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new dn(p.textureWidth,p.textureHeight,{format:Vt,type:wn,depthTexture:new Os(p.textureWidth,p.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let pe=e.properties.get(u);pe.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function b(F){for(let K=0;K<F.removed.length;K++){let re=F.removed[K],fe=v.indexOf(re);fe>=0&&(v[fe]=null,w[fe].disconnect(re))}for(let K=0;K<F.added.length;K++){let re=F.added[K],fe=v.indexOf(re);if(fe===-1){for(let pe=0;pe<w.length;pe++)if(pe>=v.length){v.push(re),fe=pe;break}else if(v[pe]===null){v[pe]=re,fe=pe;break}if(fe===-1)break}let ge=w[fe];ge&&ge.connect(re)}}let A=new O,U=new O;function W(F,K,re){A.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(re.matrixWorld);let fe=A.distanceTo(U),ge=K.projectionMatrix.elements,pe=re.projectionMatrix.elements,Te=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Ae=(ge[9]+1)/ge[5],z=(ge[9]-1)/ge[5],Ze=(ge[8]-1)/ge[0],ve=(pe[8]+1)/pe[0],Pe=Te*Ze,_e=Te*ve,je=fe/(-Ze+ve),Ie=je*-Ze;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ie),F.translateZ(je),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();let S=Te+je,x=be+je,k=Pe-Ie,ie=_e+(fe-Ie),te=Ae*be/x*S,ne=z*be/x*S;F.projectionMatrix.makePerspective(k,ie,te,ne,S,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function X(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;y.near=C.near=I.near=F.near,y.far=C.far=I.far=F.far,(T!==y.near||E!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,E=y.far);let K=F.parent,re=y.cameras;X(y,K);for(let fe=0;fe<re.length;fe++)X(re[fe],K);re.length===2?W(y,I,C):y.projectionMatrix.copy(I.projectionMatrix),Y(F,y,K)};function Y(F,K,re){re===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Bi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(F){c=F,p!==null&&(p.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let Z=null;function $(F,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let re=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let fe=!1;re.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let ge=0;ge<re.length;ge++){let pe=re[ge],Te=null;if(m!==null)Te=m.getViewport(pe);else{let Ae=f.getViewSubImage(p,pe);Te=Ae.viewport,ge===0&&(e.setRenderTargetTextures(u,Ae.colorTexture,p.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(u))}let be=J[ge];be===void 0&&(be=new vt,be.layers.enable(ge),be.viewport=new tt,J[ge]=be),be.matrix.fromArray(pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Te.x,Te.y,Te.width,Te.height),ge===0&&(y.matrix.copy(be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(be)}}for(let re=0;re<w.length;re++){let fe=v[re],ge=w[re];fe!==null&&ge!==void 0&&ge.update(fe,K,l||o)}Z&&Z(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let j=new yc;j.setAnimationLoop($),this.setAnimationLoop=function(F){Z=F},this.dispose=function(){}}};function kp(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,vc(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,w,v,L){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,L)):u.isMeshMatcapMaterial?(r(d,u),g(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),_(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?c(d,u,w,v):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===yt&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===yt&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let w=e.get(u).envMap;if(w&&(d.envMap.value=w,d.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,w,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*w,d.scale.value=v*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,w){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=w.texture,d.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function _(d,u){let w=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(w.matrixWorld),d.nearDistance.value=w.shadow.camera.near,d.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hp(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,v){let L=v.program;n.uniformBlockBinding(w,L)}function l(w,v){let L=s[w.id];L===void 0&&(g(w),L=h(w),s[w.id]=L,w.addEventListener("dispose",d));let N=v.program;n.updateUBOMapping(w,N);let I=e.render.frame;r[w.id]!==I&&(p(w),r[w.id]=I)}function h(w){let v=f();w.__bindingPointIndex=v;let L=i.createBuffer(),N=w.__size,I=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,N,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,L),L}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let v=s[w.id],L=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let I=0,C=L.length;I<C;I++){let J=Array.isArray(L[I])?L[I]:[L[I]];for(let y=0,T=J.length;y<T;y++){let E=J[y];if(m(E,I,y,N)===!0){let P=E.__offset,V=Array.isArray(E.value)?E.value:[E.value],b=0;for(let A=0;A<V.length;A++){let U=V[A],W=_(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,P+b,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,b),b+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,v,L,N){let I=w.value,C=v+"_"+L;if(N[C]===void 0)return typeof I=="number"||typeof I=="boolean"?N[C]=I:N[C]=I.clone(),!0;{let J=N[C];if(typeof I=="number"||typeof I=="boolean"){if(J!==I)return N[C]=I,!0}else if(J.equals(I)===!1)return J.copy(I),!0}return!1}function g(w){let v=w.uniforms,L=0,N=16;for(let C=0,J=v.length;C<J;C++){let y=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,E=y.length;T<E;T++){let P=y[T],V=Array.isArray(P.value)?P.value:[P.value];for(let b=0,A=V.length;b<A;b++){let U=V[b],W=_(U),X=L%N;X!==0&&N-X<W.boundary&&(L+=N-X),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=L,L+=W.storage}}}let I=L%N;return I>0&&(L+=N-I),w.__size=L,w.__cache={},this}function _(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function d(w){let v=w.target;v.removeEventListener("dispose",d);let L=o.indexOf(v.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Vi=class{constructor(e={}){let{canvas:t=Jl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,d=null,u=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;let v=this,L=!1,N=0,I=0,C=null,J=-1,y=null,T=new tt,E=new tt,P=null,V=new Ge(0),b=0,A=t.width,U=t.height,W=1,X=null,Y=null,Z=new tt(0,0,A,U),$=new tt(0,0,A,U),j=!1,F=new Hi,K=!1,re=!1,fe=null,ge=new ct,pe=new Ce,Te=new O,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return C===null?W:1}let z=n;function Ze(M,B){for(let G=0;G<M.length;G++){let q=M[G],H=t.getContext(q,B);if(H!==null)return H}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),z=Ze(B,M),z===null)throw Ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,Pe,_e,je,Ie,S,x,k,ie,te,ne,xe,ue,me,we,Ue,ee,We,R,Q,le,se,ye,ke;function Xe(){ve=new af(z),Pe=new Qd(z,ve,e),ve.init(Pe),se=new Bp(z,ve,Pe),_e=new Op(z,ve,Pe),je=new lf(z),Ie=new Ep,S=new Fp(z,ve,_e,Ie,Pe,se,je),x=new tf(v),k=new rf(v),ie=new gh(z,Pe),ye=new $d(z,ve,ie,Pe),te=new of(z,ie,je,ye),ne=new ff(z,te,ie,je),R=new df(z,Pe,S),Ue=new ef(Ie),xe=new bp(v,x,k,ve,Pe,ye,Ue),ue=new kp(v,Ie),me=new Tp,we=new Ip(ve,Pe),We=new Kd(v,x,k,_e,ne,p,c),ee=new Np(v,ne,Pe),ke=new Hp(z,je,Pe,_e),Q=new jd(z,ve,je,Pe),le=new cf(z,ve,je,Pe),je.programs=xe.programs,v.capabilities=Pe,v.extensions=ve,v.properties=Ie,v.renderLists=me,v.shadowMap=ee,v.state=_e,v.info=je}Xe();let Fe=new ea(v,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(A,U,!1))},this.getSize=function(M){return M.set(A,U)},this.setSize=function(M,B,G=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,U=B,t.width=Math.floor(M*W),t.height=Math.floor(B*W),G===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(A*W,U*W).floor()},this.setDrawingBufferSize=function(M,B,G){A=M,U=B,W=G,t.width=Math.floor(M*G),t.height=Math.floor(B*G),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,B,G,q){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,B,G,q),_e.viewport(T.copy(Z).multiplyScalar(W).floor())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,B,G,q){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,B,G,q),_e.scissor(E.copy($).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){_e.setScissorTest(j=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(M=!0,B=!0,G=!0){let q=0;if(M){let H=!1;if(C!==null){let de=C.texture.format;H=de===uc||de===hc||de===lc}if(H){let de=C.texture.type,Se=de===wn||de===Mn||de===ga||de===On||de===oc||de===cc,Re=We.getClearColor(),Le=We.getClearAlpha(),Be=Re.r,De=Re.g,Ne=Re.b;Se?(m[0]=Be,m[1]=De,m[2]=Ne,m[3]=Le,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=Be,g[1]=De,g[2]=Ne,g[3]=Le,z.clearBufferiv(z.COLOR,0,g))}else q|=z.COLOR_BUFFER_BIT}B&&(q|=z.DEPTH_BUFFER_BIT),G&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),we.dispose(),Ie.dispose(),x.dispose(),k.dispose(),ne.dispose(),ye.dispose(),ke.dispose(),xe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Mt),Fe.removeEventListener("sessionend",Ke),fe&&(fe.dispose(),fe=null),St.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let M=je.autoReset,B=ee.enabled,G=ee.autoUpdate,q=ee.needsUpdate,H=ee.type;Xe(),je.autoReset=M,ee.enabled=B,ee.autoUpdate=G,ee.needsUpdate=q,ee.type=H}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let B=M.target;B.removeEventListener("dispose",oe),Ee(B)}function Ee(M){Me(M),Ie.remove(M)}function Me(M){let B=Ie.get(M).programs;B!==void 0&&(B.forEach(function(G){xe.releaseProgram(G)}),M.isShaderMaterial&&xe.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,G,q,H,de){B===null&&(B=be);let Se=H.isMesh&&H.matrixWorld.determinant()<0,Re=Uc(M,B,G,q,H);_e.setMaterial(q,Se);let Le=G.index,Be=1;if(q.wireframe===!0){if(Le=te.getWireframeAttribute(G),Le===void 0)return;Be=2}let De=G.drawRange,Ne=G.attributes.position,st=De.start*Be,At=(De.start+De.count)*Be;de!==null&&(st=Math.max(st,de.start*Be),At=Math.min(At,(de.start+de.count)*Be)),Le!==null?(st=Math.max(st,0),At=Math.min(At,Le.count)):Ne!=null&&(st=Math.max(st,0),At=Math.min(At,Ne.count));let dt=At-st;if(dt<0||dt===1/0)return;ye.setup(H,q,Re,G,Le);let tn,nt=Q;if(Le!==null&&(tn=ie.get(Le),nt=le,nt.setIndex(tn)),H.isMesh)q.wireframe===!0?(_e.setLineWidth(q.wireframeLinewidth*Ae()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(H.isLine){let He=q.linewidth;He===void 0&&(He=1),_e.setLineWidth(He*Ae()),H.isLineSegments?nt.setMode(z.LINES):H.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else H.isPoints?nt.setMode(z.POINTS):H.isSprite&&nt.setMode(z.TRIANGLES);if(H.isBatchedMesh)nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)nt.renderInstances(st,dt,H.count);else if(G.isInstancedBufferGeometry){let He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Qs=Math.min(G.instanceCount,He);nt.renderInstances(st,dt,Qs)}else nt.render(st,dt)};function qe(M,B,G){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=yt,M.needsUpdate=!0,Yi(M,B,G),M.side=Tn,M.needsUpdate=!0,Yi(M,B,G),M.side=ln):Yi(M,B,G)}this.compile=function(M,B,G=null){G===null&&(G=M),d=we.get(G),d.init(),w.push(d),G.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),M!==G&&M.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(v._useLegacyLights);let q=new Set;return M.traverse(function(H){let de=H.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Re=de[Se];qe(Re,G,H),q.add(Re)}else qe(de,G,H),q.add(de)}),w.pop(),d=null,q},this.compileAsync=function(M,B,G=null){let q=this.compile(M,B,G);return new Promise(H=>{function de(){if(q.forEach(function(Se){Ie.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){H(M);return}setTimeout(de,10)}ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ye=null;function ut(M){Ye&&Ye(M)}function Mt(){St.stop()}function Ke(){St.start()}let St=new yc;St.setAnimationLoop(ut),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(M){Ye=M,Fe.setAnimationLoop(M),M===null?St.stop():St.start()},Fe.addEventListener("sessionstart",Mt),Fe.addEventListener("sessionend",Ke),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(B),B=Fe.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,B,C),d=we.get(M,w.length),d.init(),w.push(d),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),F.setFromProjectionMatrix(ge),re=this.localClippingEnabled,K=Ue.init(this.clippingPlanes,re),_=me.get(M,u.length),_.init(),u.push(_),Zt(M,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,K===!0&&Ue.beginShadows();let G=d.state.shadowsArray;if(ee.render(G,M,B),K===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(_,M),d.setupLights(v._useLegacyLights),B.isArrayCamera){let q=B.cameras;for(let H=0,de=q.length;H<de;H++){let Se=q[H];wa(_,M,Se,Se.viewport)}}else wa(_,M,B);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(v,M,B),ye.resetDefaultState(),J=-1,y=null,w.pop(),w.length>0?d=w[w.length-1]:d=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Zt(M,B,G,q){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||F.intersectsSprite(M)){q&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let Se=ne.update(M),Re=M.material;Re.visible&&_.push(M,Se,Re,G,Te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||F.intersectsObject(M))){let Se=ne.update(M),Re=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Te.copy(Se.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Re)){let Le=Se.groups;for(let Be=0,De=Le.length;Be<De;Be++){let Ne=Le[Be],st=Re[Ne.materialIndex];st&&st.visible&&_.push(M,Se,st,G,Te.z,Ne)}}else Re.visible&&_.push(M,Se,Re,G,Te.z,null)}}let de=M.children;for(let Se=0,Re=de.length;Se<Re;Se++)Zt(de[Se],B,G,q)}function wa(M,B,G,q){let H=M.opaque,de=M.transmissive,Se=M.transparent;d.setupLightsView(G),K===!0&&Ue.setGlobalState(v.clippingPlanes,G),de.length>0&&Dc(H,de,B,G),q&&_e.viewport(T.copy(q)),H.length>0&&qi(H,B,G),de.length>0&&qi(de,B,G),Se.length>0&&qi(Se,B,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Dc(M,B,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let de=Pe.isWebGL2;fe===null&&(fe=new dn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Fi:wn,minFilter:Oi,samples:de?4:0})),v.getDrawingBufferSize(pe),de?fe.setSize(pe.x,pe.y):fe.setSize(Es(pe.x),Es(pe.y));let Se=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(V),b=v.getClearAlpha(),b<1&&v.setClearColor(16777215,.5),v.clear();let Re=v.toneMapping;v.toneMapping=En,qi(M,G,q),S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe);let Le=!1;for(let Be=0,De=B.length;Be<De;Be++){let Ne=B[Be],st=Ne.object,At=Ne.geometry,dt=Ne.material,tn=Ne.group;if(dt.side===ln&&st.layers.test(q.layers)){let nt=dt.side;dt.side=yt,dt.needsUpdate=!0,Ta(st,G,q,At,dt,tn),dt.side=nt,dt.needsUpdate=!0,Le=!0}}Le===!0&&(S.updateMultisampleRenderTarget(fe),S.updateRenderTargetMipmap(fe)),v.setRenderTarget(Se),v.setClearColor(V,b),v.toneMapping=Re}function qi(M,B,G){let q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,de=M.length;H<de;H++){let Se=M[H],Re=Se.object,Le=Se.geometry,Be=q===null?Se.material:q,De=Se.group;Re.layers.test(G.layers)&&Ta(Re,B,G,Le,Be,De)}}function Ta(M,B,G,q,H,de){M.onBeforeRender(v,B,G,q,H,de),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(v,B,G,q,M,de),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=yt,H.needsUpdate=!0,v.renderBufferDirect(G,B,q,H,M,de),H.side=Tn,H.needsUpdate=!0,v.renderBufferDirect(G,B,q,H,M,de),H.side=ln):v.renderBufferDirect(G,B,q,H,M,de),M.onAfterRender(v,B,G,q,H,de)}function Yi(M,B,G){B.isScene!==!0&&(B=be);let q=Ie.get(M),H=d.state.lights,de=d.state.shadowsArray,Se=H.state.version,Re=xe.getParameters(M,H.state,de,B,G),Le=xe.getProgramCacheKey(Re),Be=q.programs;q.environment=M.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(M.isMeshStandardMaterial?k:x).get(M.envMap||q.environment),Be===void 0&&(M.addEventListener("dispose",oe),Be=new Map,q.programs=Be);let De=Be.get(Le);if(De!==void 0){if(q.currentProgram===De&&q.lightsStateVersion===Se)return Ra(M,Re),De}else Re.uniforms=xe.getUniforms(M),M.onBuild(G,Re,v),M.onBeforeCompile(Re,v),De=xe.acquireProgram(Re,Le),Be.set(Le,De),q.uniforms=Re.uniforms;let Ne=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),Ra(M,Re),q.needsLights=Oc(M),q.lightsStateVersion=Se,q.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=De,q.uniformsList=null,De}function Aa(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=pi.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Ra(M,B){let G=Ie.get(M);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Uc(M,B,G,q,H){B.isScene!==!0&&(B=be),S.resetTextureUnits();let de=B.fog,Se=q.isMeshStandardMaterial?B.environment:null,Re=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:un,Le=(q.isMeshStandardMaterial?k:x).get(q.envMap||Se),Be=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,At=!!G.morphAttributes.color,dt=En;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=v.toneMapping);let tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=tn!==void 0?tn.length:0,He=Ie.get(q),Qs=d.state.lights;if(K===!0&&(re===!0||M!==y)){let Lt=M===y&&q.id===J;Ue.setState(q,M,Lt)}let it=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Qs.state.version||He.outputColorSpace!==Re||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||He.envMap!==Le||q.fog===!0&&He.fog!==de||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ue.numPlanes||He.numIntersection!==Ue.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==De||He.morphTargets!==Ne||He.morphNormals!==st||He.morphColors!==At||He.toneMapping!==dt||Pe.isWebGL2===!0&&He.morphTargetsCount!==nt)&&(it=!0):(it=!0,He.__version=q.version);let An=He.currentProgram;it===!0&&(An=Yi(q,B,H));let Ca=!1,wi=!1,er=!1,mt=An.getUniforms(),Rn=He.uniforms;if(_e.useProgram(An.program)&&(Ca=!0,wi=!0,er=!0),q.id!==J&&(J=q.id,wi=!0),Ca||y!==M){mt.setValue(z,"projectionMatrix",M.projectionMatrix),mt.setValue(z,"viewMatrix",M.matrixWorldInverse);let Lt=mt.map.cameraPosition;Lt!==void 0&&Lt.setValue(z,Te.setFromMatrixPosition(M.matrixWorld)),Pe.logarithmicDepthBuffer&&mt.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,wi=!0,er=!0)}if(H.isSkinnedMesh){mt.setOptional(z,H,"bindMatrix"),mt.setOptional(z,H,"bindMatrixInverse");let Lt=H.skeleton;Lt&&(Pe.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(z,"boneTexture",Lt.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(mt.setOptional(z,H,"batchingTexture"),mt.setValue(z,"batchingTexture",H._matricesTexture,S));let tr=G.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&Pe.isWebGL2===!0)&&R.update(H,G,An),(wi||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,mt.setValue(z,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Rn.envMap.value=Le,Rn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),wi&&(mt.setValue(z,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Nc(Rn,er),de&&q.fog===!0&&ue.refreshFogUniforms(Rn,de),ue.refreshMaterialUniforms(Rn,q,W,U,fe),pi.upload(z,Aa(He),Rn,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pi.upload(z,Aa(He),Rn,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(z,"center",H.center),mt.setValue(z,"modelViewMatrix",H.modelViewMatrix),mt.setValue(z,"normalMatrix",H.normalMatrix),mt.setValue(z,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Lt=q.uniformsGroups;for(let nr=0,Fc=Lt.length;nr<Fc;nr++)if(Pe.isWebGL2){let Pa=Lt[nr];ke.update(Pa,An),ke.bind(Pa,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Nc(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Oc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,B,G){Ie.get(M.texture).__webglTexture=B,Ie.get(M.depthTexture).__webglTexture=G;let q=Ie.get(M);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,B){let G=Ie.get(M);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,G=0){C=M,N=B,I=G;let q=!0,H=null,de=!1,Se=!1;if(M){let Le=Ie.get(M);Le.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(z.FRAMEBUFFER,null),q=!1):Le.__webglFramebuffer===void 0?S.setupRenderTarget(M):Le.__hasExternalTextures&&S.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);let Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);let De=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[B])?H=De[B][G]:H=De[B],de=!0):Pe.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?H=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[G]:H=De,T.copy(M.viewport),E.copy(M.scissor),P=M.scissorTest}else T.copy(Z).multiplyScalar(W).floor(),E.copy($).multiplyScalar(W).floor(),P=j;if(_e.bindFramebuffer(z.FRAMEBUFFER,H)&&Pe.drawBuffers&&q&&_e.drawBuffers(M,H),_e.viewport(T),_e.scissor(E),_e.setScissorTest(P),de){let Le=Ie.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,G)}else if(Se){let Le=Ie.get(M.texture),Be=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,G||0,Be)}J=-1},this.readRenderTargetPixels=function(M,B,G,q,H,de,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){_e.bindFramebuffer(z.FRAMEBUFFER,Re);try{let Le=M.texture,Be=Le.format,De=Le.type;if(Be!==Vt&&se.convert(Be)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ne=De===Fi&&(ve.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(De!==wn&&se.convert(De)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Sn&&(Pe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-q&&G>=0&&G<=M.height-H&&z.readPixels(B,G,q,H,se.convert(Be),se.convert(De),de)}finally{let Le=C!==null?Ie.get(C).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(M,B,G=0){let q=Math.pow(2,-G),H=Math.floor(B.image.width*q),de=Math.floor(B.image.height*q);S.setTexture2D(B,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,M.x,M.y,H,de),_e.unbindTexture()},this.copyTextureToTexture=function(M,B,G,q=0){let H=B.image.width,de=B.image.height,Se=se.convert(G.format),Re=se.convert(G.type);S.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),B.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,M.x,M.y,H,de,Se,Re,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,M.x,M.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,q,M.x,M.y,Se,Re,B.image),q===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(M,B,G,q,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,Re=M.max.z-M.min.z+1,Le=se.convert(q.format),Be=se.convert(q.type),De;if(q.isData3DTexture)S.setTexture3D(q,0),De=z.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)S.setTexture2DArray(q,0),De=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);let Ne=z.getParameter(z.UNPACK_ROW_LENGTH),st=z.getParameter(z.UNPACK_IMAGE_HEIGHT),At=z.getParameter(z.UNPACK_SKIP_PIXELS),dt=z.getParameter(z.UNPACK_SKIP_ROWS),tn=z.getParameter(z.UNPACK_SKIP_IMAGES),nt=G.isCompressedTexture?G.mipmaps[H]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(De,H,B.x,B.y,B.z,de,Se,Re,Le,Be,nt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(De,H,B.x,B.y,B.z,de,Se,Re,Le,nt.data)):z.texSubImage3D(De,H,B.x,B.y,B.z,de,Se,Re,Le,Be,nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),z.pixelStorei(z.UNPACK_SKIP_PIXELS,At),z.pixelStorei(z.UNPACK_SKIP_ROWS,dt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,tn),H===0&&q.generateMipmaps&&z.generateMipmap(De),_e.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){N=0,I=0,C=null,_e.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_a?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Bn:fc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Bn?ot:un}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ta=class extends Vi{};ta.prototype.isWebGL1Renderer=!0;var yi=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Fs=class extends Ot{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $t=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],m=[],g=0,_=[],d=n/2,u=0;w(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(m,2));function w(){let L=new O,N=new O,I=0,C=(t-e)/n;for(let J=0;J<=r;J++){let y=[],T=J/r,E=T*(t-e)+e;for(let P=0;P<=s;P++){let V=P/s,b=V*c+a,A=Math.sin(b),U=Math.cos(b);N.x=E*A,N.y=-T*n+d,N.z=E*U,f.push(N.x,N.y,N.z),L.set(A,C,U).normalize(),p.push(L.x,L.y,L.z),m.push(V,1-T),y.push(g++)}_.push(y)}for(let J=0;J<s;J++)for(let y=0;y<r;y++){let T=_[y][J],E=_[y+1][J],P=_[y+1][J+1],V=_[y][J+1];h.push(T,E,V),h.push(E,P,V),I+=6}l.addGroup(u,I,0),u+=I}function v(L){let N=g,I=new Ce,C=new O,J=0,y=L===!0?e:t,T=L===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,d*T,0),p.push(0,T,0),m.push(.5,.5),g++;let E=g;for(let P=0;P<=s;P++){let b=P/s*c+a,A=Math.cos(b),U=Math.sin(b);C.x=y*U,C.y=d*T,C.z=y*A,f.push(C.x,C.y,C.z),p.push(0,T,0),I.x=A*.5+.5,I.y=U*.5*T+.5,m.push(I.x,I.y),g++}for(let P=0;P<s;P++){let V=N+P,b=E+P;L===!0?h.push(b,b+1,V):h.push(b+1,b,V),J+=3}l.addGroup(u,J,L===!0?1:2),u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class i extends $t{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var zs=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=e,p=(t-e)/s,m=new O,g=new Ce;for(let _=0;_<=s;_++){for(let d=0;d<=n;d++){let u=r+d/n*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){let d=_*(n+1);for(let u=0;u<n;u++){let w=u+d,v=w,L=w+n+1,N=w+n+2,I=w+1;a.push(v,L,I),a.push(L,N,I)}}this.setIndex(a),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ks=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new O,p=new O,m=[],g=[],_=[],d=[];for(let u=0;u<=n;u++){let w=[],v=u/n,L=0;u===0&&o===0?L=.5/t:u===n&&c===Math.PI&&(L=-.5/t);for(let N=0;N<=t;N++){let I=N/t;f.x=-e*Math.cos(s+I*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+I*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),d.push(I+L,1-v),w.push(l++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){let v=h[u][w+1],L=h[u][w],N=h[u+1][w],I=h[u+1][w+1];(u!==0||o>0)&&m.push(v,L,I),(u!==n-1||c<Math.PI)&&m.push(L,N,I)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hs=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,f=new O,p=new O;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,d=m/n*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(_),f.y=(e+t*Math.cos(d))*Math.sin(_),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,w=(s+1)*m+g;o.push(_,d,w),o.push(d,u,w)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $e=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function gs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},na=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lo,endingEnd:lo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ho:r=e,a=2*t-n;break;case uo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ho:o=e,c=2*n-t;break;case uo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,d=_*g,u=-p*d+2*p*_-p*g,w=(1+p)*d+(-1.5-2*p)*_+(-.5+p)*g+1,v=(-1-m)*d+(1.5+m)*_+.5*g,L=m*d-m*_;for(let N=0;N!==a;++N)r[N]=u*o[h+N]+w*o[l+N]+v*o[c+N]+L*o[f+N];return r}},ia=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[c+p]*h;return r}},sa=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new na(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case vs:t=this.InterpolantFactoryMethodLinear;break;case lr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return lr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Vp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,p=f-n,m=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[p+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=vs;var Vn=class extends qt{};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=xs;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends qt{};ra.prototype.ValueTypeName="color";var aa=class extends qt{};aa.prototype.ValueTypeName="number";var oa=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Gt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gi=class extends qt{InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=vs;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends qt{};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=xs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends qt{};ca.prototype.ValueTypeName="vector";var la=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Gp=new la,ha=class{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Vs=class extends Wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ir=new ct,ec=new O,tc=new O,Gs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(ec),tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tc),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nc=new ct,Pi=new O,Dr=new O,ua=class extends Gs{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pi),Dr.copy(n.position),Dr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dr),n.updateMatrixWorld(),s.makeTranslation(-Pi.x,-Pi.y,-Pi.z),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}},Ws=class extends Wi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ua}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},da=class extends Gs{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new da}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ya="\\[\\]\\.:\\/",Wp=new RegExp("["+ya+"]","g"),Ma="[^"+ya+"]",Xp="[^"+ya.replace("\\.","")+"]",qp=/((?:WC+[\/:])*)/.source.replace("WC",Ma),Yp=/(WCOD+)?/.source.replace("WCOD",Xp),Zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ma),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ma),Kp=new RegExp("^"+qp+Yp+Zp+Jp+"$"),$p=["material","materials","bones","map"],fa=class{constructor(e,t,n){let s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){let t=Kp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=fa;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nm=new Float32Array(1);var Xi=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Tc={type:"change"},Sa={type:"start"},Ac={type:"end"},Js=new ki,Rc=new kt,Qp=Math.cos(70*gc.DEG2RAD),Ks=class extends Kt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",ne),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Tc),n.update(),r=s.NONE},this.update=(function(){let R=new O,Q=new Gt().setFromUnitVectors(e.up,new O(0,1,0)),le=Q.clone().invert(),se=new O,ye=new Gt,ke=new O,Xe=2*Math.PI;return function(ce=null){let D=n.object.position;R.copy(D).sub(n.target),R.applyQuaternion(Q),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&E(y(ce)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ae=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ae)&&isFinite(oe)&&(ae<-Math.PI?ae+=Xe:ae>Math.PI&&(ae-=Xe),oe<-Math.PI?oe+=Xe:oe>Math.PI&&(oe-=Xe),ae<=oe?a.theta=Math.max(ae,Math.min(oe,a.theta)):a.theta=a.theta>(ae+oe)/2?Math.max(ae,a.theta):Math.min(oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&I||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*l),R.setFromSpherical(a),R.applyQuaternion(le),D.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ee=!1;if(n.zoomToCursor&&I){let Me=null;if(n.object.isPerspectiveCamera){let qe=R.length();Me=Y(qe*l);let Ye=qe-Me;n.object.position.addScaledVector(L,Ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let qe=new O(N.x,N.y,0);qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ee=!0;let Ye=new O(N.x,N.y,0);Ye.unproject(n.object),n.object.position.sub(Ye).add(qe),n.object.updateMatrixWorld(),Me=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Me!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Me).add(n.object.position):(Js.origin.copy(n.object.position),Js.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Js.direction))<Qp?e.lookAt(n.target):(Rc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Js.intersectPlane(Rc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ee=!0);return l=1,I=!1,Ee||se.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||ke.distanceToSquared(n.target)>0?(n.dispatchEvent(Tc),se.copy(n.object.position),ye.copy(n.object.quaternion),ke.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ne),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Xi,c=new Xi,l=1,h=new O,f=new Ce,p=new Ce,m=new Ce,g=new Ce,_=new Ce,d=new Ce,u=new Ce,w=new Ce,v=new Ce,L=new O,N=new Ce,I=!1,C=[],J={};function y(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function T(R){let Q=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Q)}function E(R){c.theta-=R}function P(R){c.phi-=R}let V=(function(){let R=new O;return function(le,se){R.setFromMatrixColumn(se,0),R.multiplyScalar(-le),h.add(R)}})(),b=(function(){let R=new O;return function(le,se){n.screenSpacePanning===!0?R.setFromMatrixColumn(se,1):(R.setFromMatrixColumn(se,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(le),h.add(R)}})(),A=(function(){let R=new O;return function(le,se){let ye=n.domElement;if(n.object.isPerspectiveCamera){let ke=n.object.position;R.copy(ke).sub(n.target);let Xe=R.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),V(2*le*Xe/ye.clientHeight,n.object.matrix),b(2*se*Xe/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(le*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),b(se*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function U(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R,Q){if(!n.zoomToCursor)return;I=!0;let le=n.domElement.getBoundingClientRect(),se=R-le.left,ye=Q-le.top,ke=le.width,Xe=le.height;N.x=se/ke*2-1,N.y=-(ye/Xe)*2+1,L.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function Z(R){f.set(R.clientX,R.clientY)}function $(R){X(R.clientX,R.clientX),u.set(R.clientX,R.clientY)}function j(R){g.set(R.clientX,R.clientY)}function F(R){p.set(R.clientX,R.clientY),m.subVectors(p,f).multiplyScalar(n.rotateSpeed);let Q=n.domElement;E(2*Math.PI*m.x/Q.clientHeight),P(2*Math.PI*m.y/Q.clientHeight),f.copy(p),n.update()}function K(R){w.set(R.clientX,R.clientY),v.subVectors(w,u),v.y>0?U(T(v.y)):v.y<0&&W(T(v.y)),u.copy(w),n.update()}function re(R){_.set(R.clientX,R.clientY),d.subVectors(_,g).multiplyScalar(n.panSpeed),A(d.x,d.y),g.copy(_),n.update()}function fe(R){X(R.clientX,R.clientY),R.deltaY<0?W(T(R.deltaY)):R.deltaY>0&&U(T(R.deltaY)),n.update()}function ge(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function pe(R){if(C.length===1)f.set(R.pageX,R.pageY);else{let Q=We(R),le=.5*(R.pageX+Q.x),se=.5*(R.pageY+Q.y);f.set(le,se)}}function Te(R){if(C.length===1)g.set(R.pageX,R.pageY);else{let Q=We(R),le=.5*(R.pageX+Q.x),se=.5*(R.pageY+Q.y);g.set(le,se)}}function be(R){let Q=We(R),le=R.pageX-Q.x,se=R.pageY-Q.y,ye=Math.sqrt(le*le+se*se);u.set(0,ye)}function Ae(R){n.enableZoom&&be(R),n.enablePan&&Te(R)}function z(R){n.enableZoom&&be(R),n.enableRotate&&pe(R)}function Ze(R){if(C.length==1)p.set(R.pageX,R.pageY);else{let le=We(R),se=.5*(R.pageX+le.x),ye=.5*(R.pageY+le.y);p.set(se,ye)}m.subVectors(p,f).multiplyScalar(n.rotateSpeed);let Q=n.domElement;E(2*Math.PI*m.x/Q.clientHeight),P(2*Math.PI*m.y/Q.clientHeight),f.copy(p)}function ve(R){if(C.length===1)_.set(R.pageX,R.pageY);else{let Q=We(R),le=.5*(R.pageX+Q.x),se=.5*(R.pageY+Q.y);_.set(le,se)}d.subVectors(_,g).multiplyScalar(n.panSpeed),A(d.x,d.y),g.copy(_)}function Pe(R){let Q=We(R),le=R.pageX-Q.x,se=R.pageY-Q.y,ye=Math.sqrt(le*le+se*se);w.set(0,ye),v.set(0,Math.pow(w.y/u.y,n.zoomSpeed)),U(v.y),u.copy(w);let ke=(R.pageX+Q.x)*.5,Xe=(R.pageY+Q.y)*.5;X(ke,Xe)}function _e(R){n.enableZoom&&Pe(R),n.enablePan&&ve(R)}function je(R){n.enableZoom&&Pe(R),n.enableRotate&&Ze(R)}function Ie(R){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",x)),we(R),R.pointerType==="touch"?xe(R):k(R))}function S(R){n.enabled!==!1&&(R.pointerType==="touch"?ue(R):ie(R))}function x(R){Ue(R),C.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",x)),n.dispatchEvent(Ac),r=s.NONE}function k(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Wn.DOLLY:if(n.enableZoom===!1)return;$(R),r=s.DOLLY;break;case Wn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;j(R),r=s.PAN}else{if(n.enableRotate===!1)return;Z(R),r=s.ROTATE}break;case Wn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Z(R),r=s.ROTATE}else{if(n.enablePan===!1)return;j(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sa)}function ie(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;F(R);break;case s.DOLLY:if(n.enableZoom===!1)return;K(R);break;case s.PAN:if(n.enablePan===!1)return;re(R);break}}function te(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Sa),fe(R),n.dispatchEvent(Ac))}function ne(R){n.enabled===!1||n.enablePan===!1||ge(R)}function xe(R){switch(ee(R),C.length){case 1:switch(n.touches.ONE){case Xn.ROTATE:if(n.enableRotate===!1)return;pe(R),r=s.TOUCH_ROTATE;break;case Xn.PAN:if(n.enablePan===!1)return;Te(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Xn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(R),r=s.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Sa)}function ue(R){switch(ee(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ze(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ve(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(R),n.update();break;default:r=s.NONE}}function me(R){n.enabled!==!1&&R.preventDefault()}function we(R){C.push(R.pointerId)}function Ue(R){delete J[R.pointerId];for(let Q=0;Q<C.length;Q++)if(C[Q]==R.pointerId){C.splice(Q,1);return}}function ee(R){let Q=J[R.pointerId];Q===void 0&&(Q=new Ce,J[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function We(R){let Q=R.pointerId===C[0]?C[1]:C[0];return J[Q]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",te,{passive:!1}),this.update()}};var $s=class extends yi{constructor(e=null){super();let t=new fn;t.deleteAttribute("uv");let n=new $e({side:yt}),s=new $e,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ws(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ze(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new ze(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new ze(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new ze(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ze(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ze(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new ze(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new ze(t,Ei(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new ze(t,Ei(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let d=new ze(t,Ei(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new ze(t,Ei(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let w=new ze(t,Ei(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,.1),this.add(w);let v=new ze(t,Ei(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ei(i){let e=new Wt;return e.color.setScalar(i),e}var pt=.1,jt=.04,Qt=.004,mn=1.45,Yt=.72,em=2.16;function Ea(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Fs(n);return s.colorSpace=ot,s.wrapS=s.wrapT=Ni,s.anisotropy=8,s}var en=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function js(i,e){return Ea(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let o=en()*s,a=.04+en()*.12;t.strokeStyle=`rgba(${e},${a})`,t.lineWidth=.5+en()*2.2,t.beginPath(),t.moveTo(0,o);for(let c=0;c<=n;c+=32)t.lineTo(c,o+Math.sin(c/90+r)*3+(en()-.5)*2);t.stroke()}})}function ba(i,e,t=!0){return Ea(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=n.getImageData(0,0,s,r),a=o.data;for(let c=0;c<a.length;c+=4){let l=(en()-.5)*14;a[c]+=l,a[c+1]+=l,a[c+2]+=l}if(n.putImageData(o,0,0),t)for(let c=0;c<14;c++){n.strokeStyle=e,n.globalAlpha=.25+en()*.5,n.lineWidth=.6+en()*2,n.beginPath();let l=en()*s,h=0;for(n.moveTo(l,h);h<r;)l+=(en()-.45)*60,h+=20+en()*30,n.lineTo(l,h);n.stroke()}n.globalAlpha=1})}function Cc(i,e){return Ea(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var Pc={eiche:()=>({map:js("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:js("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:ba("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:ba("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:ba("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},Lc={eiche:()=>{let i=js("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=Cc("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=Cc("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=js("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},Ic={matt:.62,seide:.38,glanz:.12};function tm(i,e={}){let t=new Vi({antialias:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(2,devicePixelRatio||1)),t.outputColorSpace=ot,t.toneMapping=ma,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=pa,i.appendChild(t.domElement);let n=new yi;n.background=new Ge("#ebe6de");let s=new vi(t);n.environment=s.fromScene(new $s(t),.04).texture;let r=new vt(40,1,.05,80),o=new Ks(r,t.domElement);o.enableDamping=!0,o.minPolarAngle=.2,o.maxPolarAngle=1.45,o.minDistance=1.5,o.maxDistance=16,o.screenSpacePanning=!0;let a=!1,c="perspektive";t.domElement.addEventListener("pointerdown",()=>{a=!0,e.onInteract&&e.onInteract()});let l=new Xs("#fff6ea",2);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.bias=-4e-4,l.shadow.radius=4,n.add(l,l.target),n.add(new Vs("#ffffff","#bfae98",.55));let h={},f=(E,P)=>h[E]||(h[E]=P()),p=null,m="",g={w:4.8,d:3.8},_=new fn(1,1,1);function d(E,P,V,b,A,U,W,X,Y=!0){let Z=new ze(_,b);return Z.scale.set(Math.max(E,.001),Math.max(P,.001),Math.max(V,.001)),Z.position.set(A,U,W),Z.castShadow=Y,Z.receiveShadow=!0,X.add(Z),Z}function u(E){let P=JSON.stringify([E.front,E.finish,E.wood,E.top,E.handle,E.wall,E.floor,E.accent]);if(u.k===P)return u.m;u.k=P;let V=new $e({color:E.front,roughness:Ic[E.finish]??.5,envMapIntensity:.9}),b=E.wood?new $e({...f("w"+E.wood,()=>Pc[E.wood]()),roughness:.6}):null,A=E.accent?new $e({color:E.accent,roughness:Ic[E.finish]??.5}):null,U=new $e({color:"#c8c8c8",roughness:.25,metalness:1});return u.m={F:b||V,FA:A||b||V,carcass:new $e({color:"#2a2a2a",roughness:.8}),inner:new $e({color:"#efece6",roughness:.8}),plinth:new $e({color:"#1e1e1e",roughness:.7}),top:new $e({...f("t"+E.top,()=>Pc[E.top]())}),steel:U,black:new $e({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new $e({color:"#111",roughness:.05,metalness:.5}),glassClear:new $e({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:E.handle==="gold"?new $e({color:"#b08a4a",roughness:.3,metalness:1}):E.handle==="schwarz"?new $e({color:"#111",roughness:.4,metalness:.6}):U,wall:new $e({color:E.wall||"#f2eee8",roughness:.95}),floor:new $e({...f("f"+E.floor,()=>(Lc[E.floor]||Lc.eiche)())}),frame:new $e({color:"#ffffff",roughness:.5}),sky:new Wt({color:"#dcefff"}),door:new $e({color:"#d8d2c8",roughness:.7}),led:new Wt({color:"#fff3d6"}),stool:new $e({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new $e({color:"#8a6a4a",roughness:.6}),glow:new Wt({color:"#ffe7b8"}),fridge:new $e({color:"#bfc2c4",roughness:.3,metalness:.8})},u.m}function w(E,P,V,b,A,U,W,X,Y,Z={}){let $=A+U;X.forEach(j=>{let F=U*j;d(V-Qt*2,F-Qt,.02,Z.mat||P.F,b,$-F/2,W,E),Y.handle!=="grifflos"&&!Z.noHandle&&(Z.vertical?d(.02,Math.min(.5,F*.5),.025,P.handle,b+(Z.side||1)*(V/2-.06),$-F*.3,W+.02,E):d(Math.min(.4,V*.6),.015,.025,P.handle,b,$-.05,W+.02,E)),$-=F}),Y.handle==="grifflos"&&!Z.noHandle&&d(V,.02,.01,P.steel,b,A+U-.012,W-.004,E,!1)}function v(E,P,V,b,A,U={}){let W=.9-jt-pt;if(d(b-Qt,W,A-.02,P.carcass,0,pt+W/2,-.01,E),d(b,pt,A-.06,P.plinth,0,pt/2,-.03,E),U.noFront||w(E,P,b,0,pt,W-Qt,A/2-.01,U.parts||[.25,.375,.375],V,U),!U.noTop){let X=d(b+.002,jt,A+.02,P.top,0,.9-jt/2,.01,E)}}function L(E,P,V,b){d(Math.min(.55,V-.2),.012,.42,P.black,0,.9+.001,-.02,E,!1);let A=new ze(new $t(.015,.018,.3,16),P.steel);A.position.set(0,.9+.15,-b/2+.1),A.castShadow=!0,E.add(A);let U=new ze(new Hs(.09,.012,10,24,Math.PI),P.steel);U.position.set(0,.9+.3,-b/2+.19),U.rotation.y=Math.PI/2,E.add(U)}function N(E,P,V,b,A=.9,U=-.02){d(Math.min(.8,V-.08),.008,.52,P.glass,0,A+.004,U,E,!1);let W=f("ringgeo",()=>new zs(.06,.068,32)),X=f("ringmat",()=>new Wt({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([Y,Z])=>{let $=new ze(W,X);$.rotation.x=-Math.PI/2,$.position.set(Y*Math.min(1,V/.8),A+.009,U+Z),E.add($)}),b&&d(.1,.006,.5,P.steel,0,A+.011,U,E,!1)}let I={us:(E,P,V,b)=>v(E,P,V,b.w/100,.6,{parts:b.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(E,P,V,b)=>{v(E,P,V,b.w/100,.6,{parts:[1]}),L(E,P,b.w/100,.6)},kf:(E,P,V,b)=>{v(E,P,V,b.w/100,.6,{parts:[.25,.375,.375]}),N(E,P,b.w/100,b.v!=="normal")},gs:(E,P,V,b)=>v(E,P,V,b.w/100,.6,{parts:[1],noHandle:V.handle==="grifflos"}),ec:(E,P,V,b)=>v(E,P,V,b.w/100,.6,{parts:[.18,.82]}),hs:(E,P,V,b)=>{let A=b.w/100,U=.6,W=em-pt;d(A-Qt,W,U,P.carcass,0,pt+W/2,-.01,E),d(A,pt,U-.06,P.plinth,0,pt/2,-.03,E);let X=U/2;b.v==="backofen"||b.v==="dampf"?(w(E,P,A,0,pt,.7,X,[.5,.5],V),d(A-.04,.58,.022,P.glass,0,pt+.7+.3,X,E),d(A*.8,.02,.03,P.steel,0,pt+.7+.55,X+.02,E),b.v==="dampf"?(d(A-.04,.44,.022,P.glass,0,pt+1.32+.22,X,E),w(E,P,A,0,pt+1.78,W-1.78,X,[1],V,{vertical:!0})):w(E,P,A,0,pt+1.32,W-1.32,X,[1],V,{vertical:!0})):b.v==="kuehl"?w(E,P,A,0,pt,W,X,[.42,.58],V,{vertical:!0,side:-1}):w(E,P,A,0,pt,W,X,[.5,.5],V,{vertical:!0})},kfr:(E,P,V,b)=>{let A=b.w/100,U=.7,W=1.78;d(A-.01,W,U-.02,P.fridge,0,W/2,0,E),d(.004,W-.02,.02,P.black,0,W/2,U/2,E),d(.02,.7,.04,P.steel,-.06,1.1,U/2+.03,E),d(.02,.7,.04,P.steel,.06,1.1,U/2+.03,E),d(.18,.3,.01,P.black,-.22,1.15,U/2+.001,E)},ws:(E,P,V,b)=>{let A=b.w/100,U=.35;if(b.v==="offen"){[0,.36,.72].forEach(W=>d(A-.01,.025,U-.02,P.F,0,mn+W+.012,0,E)),d(.025,Yt,U-.02,P.F,-A/2+.012,mn+Yt/2,0,E),d(.025,Yt,U-.02,P.F,A/2-.012,mn+Yt/2,0,E);return}d(A-Qt,Yt,U,P.carcass,0,mn+Yt/2,0,E),b.v==="glas"?(d(A-Qt*2,Yt-Qt,.02,P.glassClear,0,mn+Yt/2,U/2+.005,E),d(A-.04,.015,U-.04,P.inner,0,mn+Yt/2,0,E)):d(A-Qt*2,Yt-Qt,.02,P.FA,0,mn+Yt/2,U/2+.005,E),V.handle!=="grifflos"&&d(.02,.2,.025,P.handle,A/2-.06,mn+.14,U/2+.025,E),d(A-.02,.01,.02,P.led,0,mn-.004,U/2-.05,E,!1)},hb:(E,P,V,b)=>{let A=b.w/100;d(A,.1,.5,P.steel,0,1.62,0,E),d(.3,1,.25,P.steel,0,2.17,-.12,E)},rg:(E,P,V,b)=>{let A=b.w/100;[0,.38].forEach(U=>d(A,.04,.26,P.top,0,1.5+U,0,E))},in:(E,P,V,b)=>{let A=b.w/100,U=(b.d||100)/100,W=U-.3,X=-U/2+W/2,Y=Math.max(2,Math.round(A/.6)),Z=A/Y;for(let j=0;j<Y;j++){let F=-A/2+Z*j+Z/2,K=new Pt;K.position.set(F,0,X),v(K,P,V,Z,W,{noTop:!0,parts:b.v==="spuele"&&j===Math.floor(Y/2)?[1]:[.25,.375,.375]}),E.add(K)}if(d(A+.08,jt,U,P.top,0,.9-jt/2,0,E),d(.04,.9-jt,U,P.top,-A/2-.02,(.9-jt)/2,0,E),d(.04,.9-jt,U,P.top,A/2+.02,(.9-jt)/2,0,E),b.v==="kochfeld"){let j=new Pt;j.position.set(0,0,X+.05),N(j,P,.8,!0),E.add(j)}if(b.v==="spuele"){let j=new Pt;j.position.set((Math.floor(Y/2)+.5)*Z-A/2,0,X+.05),L(j,P,Z,W+.3),E.add(j)}let $=Math.max(2,Math.floor(A/.55));for(let j=0;j<$;j++){let F=-A/2+A/($+1)*(j+1),K=U/2+.22,re=new ze(f("leg",()=>new $t(.02,.02,.62,12)),P.stool);re.position.set(F,.31,K),re.castShadow=!0,E.add(re);let fe=new ze(f("seatg",()=>new $t(.18,.17,.05,24)),P.seat);fe.position.set(F,.64,K),fe.castShadow=!0,E.add(fe)}for(let j=0;j<3;j++){let F=-A/2+A/4*(j+1),K=new ze(f("lamp",()=>new Bs(.12,.22,24,1,!0)),P.stool);K.position.set(F,1.82,0),E.add(K);let re=new ze(f("bulb",()=>new ks(.04,12,12)),P.glow);re.position.set(F,1.74,0),E.add(re);let fe=new ze(f("cord",()=>new $t(.004,.004,.7,6)),P.stool);fe.position.set(F,2.28,0),E.add(fe)}},th:(E,P,V,b)=>{let A=b.w/100,U=(b.d||40)/100;d(A,1.06,.06,P.FA,0,.53,-U/2+.05,E),d(A+.04,jt,U+.04,P.top,0,1.08,0,E);let W=Math.max(2,Math.floor(A/.55));for(let X=0;X<W;X++){let Y=-A/2+A/(W+1)*(X+1),Z=U/2+.22,$=new ze(f("leg2",()=>new $t(.02,.02,.78,12)),P.stool);$.position.set(Y,.39,Z),E.add($);let j=new ze(f("seatg",()=>new $t(.18,.17,.05,24)),P.seat);j.position.set(Y,.8,Z),j.castShadow=!0,E.add(j)}}};function C(E){let P=E.style,V=E.room,b=u(P);p&&n.remove(p),p=new Pt,n.add(p);let A=V.w/100,U=V.d/100,W=2.6,X=new ze(new Hn(A+4,U+4),b.floor);X.rotation.x=-Math.PI/2,X.position.set(A/2,0,U/2),X.receiveShadow=!0,p.add(X);let Y=V.walls||{N:1,E:1,S:1,W:1},Z={N:[A,A/2,0,0],S:[A,A/2,U,Math.PI],W:[U,0,U/2,Math.PI/2],E:[U,A,U/2,-Math.PI/2]};for(let F in Z){if(!Y[F])continue;let[K,re,fe,ge]=Z[F],pe=new ze(new Hn(K,W),b.wall);pe.position.set(re,W/2,fe),pe.rotation.y=ge,pe.receiveShadow=!0,p.add(pe)}(E.open||[]).forEach(F=>{if(!Y[F.wall])return;let[K,re,fe,ge]=Z[F.wall],pe=new Pt;pe.rotation.y=ge;let Te=F.s/100+F.w/200,be={N:[Te,0],S:[A-Te,U],W:[0,U-Te],E:[A,Te]}[F.wall];pe.position.set(be[0],0,be[1]);let Ae=F.w/100;if(F.t==="fenster"){let z=(F.y||100)/100,Ze=(F.h||120)/100,ve=new ze(f("pane",()=>new Hn(1,1)),b.sky);ve.scale.set(Ae,Ze,1),ve.position.set(0,z+Ze/2,.003),pe.add(ve),d(Ae+.08,.06,.06,b.frame,0,z,.03,pe,!1),d(Ae+.08,.06,.06,b.frame,0,z+Ze,.03,pe,!1),d(.06,Ze,.06,b.frame,-Ae/2,z+Ze/2,.03,pe,!1),d(.06,Ze,.06,b.frame,Ae/2,z+Ze/2,.03,pe,!1),Ae>.9&&d(.04,Ze,.04,b.frame,0,z+Ze/2,.03,pe,!1),d(Ae+.1,.03,.12,b.frame,0,z-.015,.06,pe,!1)}else d(Ae,2.05,.01,F.t==="durchgang"?b.plinth:b.door,0,2.05/2,.006,pe,!1),d(Ae+.1,.06,.05,b.frame,0,2.05+.03,.025,pe,!1),d(.05,2.05,.05,b.frame,-Ae/2-.025,2.05/2,.025,pe,!1),d(.05,2.05,.05,b.frame,Ae/2+.025,2.05/2,.025,pe,!1),F.t==="tuer"&&d(.12,.02,.04,b.steel,Ae/2-.1,1.05,.04,pe);p.add(pe)}),E.items.forEach(F=>{let K=I[F.t];if(!K)return;let re=new Pt;K(re,b,P,F),re.position.set(F.x/100,0,F.z/100),re.rotation.y=(F.r||0)*Math.PI/180,p.add(re)});let $=V.w+"x"+V.d;g={w:A,d:U},l.position.set(A/2-3,7,U/2+5),l.target.position.set(A/2,0,U/2);let j=Math.max(A,U)/2+1;Object.assign(l.shadow.camera,{left:-j,right:j,top:j,bottom:-j}),l.shadow.camera.updateProjectionMatrix(),$!==m&&(m=$,o.target.set(A/2,.9,U/2),J("perspektive"))}function J(E){c=E;let P=g.w,V=g.d,b={x:P/2,z:V/2},A=Math.max(P,V)*(r.aspect<1?1.75:r.aspect<1.3?1.3:1.05),U={perspektive:[b.x+A*.42,1.5+A*.55,b.z+A*1],front:[b.x,1.6,b.z+A*.95+.8],top:[b.x,A*1.45+2,b.z+.01],ecke:[b.x-A*.5,1.6+A*.45,b.z+A*.95],augen:[b.x,1.62,V-.35]}[E];U&&(r.position.set(...U),E==="augen"?o.target.set(b.x,1.25,.3):o.target.set(P/2,.9,V/2),o.update())}function y(){let E=i.clientWidth,P=i.clientHeight;!E||!P||(t.setSize(E,P,!1),t.domElement.style.width=E+"px",t.domElement.style.height=P+"px",r.aspect=E/P,r.updateProjectionMatrix(),!a&&m&&J(c))}y(),new ResizeObserver(y).observe(i);let T=!0;return new IntersectionObserver(([E])=>T=E.isIntersecting).observe(i),(function E(){requestAnimationFrame(E),!(!T||!i.clientWidth)&&(o.update(),t.render(n,r))})(),{set:C,view:E=>{a=!1,J(E)},snapshot:()=>(t.render(n,r),t.domElement.toDataURL("image/jpeg",.9))}}window.PelPlanner3D=tm;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
