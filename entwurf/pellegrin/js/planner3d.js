(()=>{var ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lc=0,Mo=1,Ic=2;var $l=1,oo=2,Sn=3,Hn=0,Bt=1,bn=2;var Fn=0,Ci=1,So=2,bo=3,Eo=4,Dc=5,Kn=100,Uc=101,Nc=102,To=103,wo=104,Oc=200,Fc=201,Bc=202,zc=203,_a=204,xa=205,Hc=206,kc=207,Vc=208,Gc=209,Wc=210,Xc=211,qc=212,Yc=213,Zc=214,Jc=0,Kc=1,$c=2,Gs=3,jc=4,Qc=5,eh=6,th=7,jl=0,nh=1,ih=2,Bn=0,sh=1,rh=2,ah=3,lo=4,oh=5,lh=6;var Ql=300,Ii=301,Di=302,va=303,ya=304,Er=306,ts=1e3,on=1001,Ma=1002,kt=1003,Ao=1004;var Fr=1005;var Kt=1006,ch=1007;var ns=1008;var zn=1009,hh=1010,uh=1011,co=1012,ec=1013,Nn=1014,On=1015,is=1016,tc=1017,nc=1018,jn=1020,dh=1021,ln=1023,fh=1024,ph=1025,Qn=1026,Ui=1027,mh=1028,ic=1029,gh=1030,sc=1031,rc=1033,Br=33776,zr=33777,Hr=33778,kr=33779,Ro=35840,Co=35841,Po=35842,Lo=35843,ac=36196,Io=37492,Do=37496,Uo=37808,No=37809,Oo=37810,Fo=37811,Bo=37812,zo=37813,Ho=37814,ko=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Vr=36492,Zo=36494,Jo=36495,_h=36283,Ko=36284,$o=36285,jo=36286;var Ws=2300,Xs=2301,Gr=2302,Qo=2400,el=2401,tl=2402;var oc=3e3,ei=3001,xh=3200,vh=3201,lc=0,yh=1,$t="",Tt="srgb",Tn="srgb-linear",ho="display-p3",Tr="display-p3-linear",qs="linear",gt="srgb",Ys="rec709",Zs="p3";var li=7680;var nl=519,Mh=512,Sh=513,bh=514,cc=515,Eh=516,Th=517,wh=518,Ah=519,il=35044;var sl="300 es",Sa=1035,En=2e3,Js=2001,fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=1234567,Zi=Math.PI/180,ss=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function uo(i,e){return(i%e+e)%e}function Rh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ch(i,e,t){return i!==e?(t-i)/(e-i):0}function Ji(i,e,t){return(1-t)*i+t*e}function Ph(i,e,t,n){return Ji(i,e,1-Math.exp(-t*n))}function Lh(i,e=1){return e-Math.abs(uo(i,e*2)-e)}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nh(i,e){return i+Math.random()*(e-i)}function Oh(i){return i*(.5-Math.random())}function Fh(i){i!==void 0&&(rl=i);let e=rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bh(i){return i*Zi}function zh(i){return i*ss}function ba(i){return(i&i-1)===0&&i!==0}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ks(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hc={DEG2RAD:Zi,RAD2DEG:ss,generateUUID:oi,clamp:It,euclideanModulo:uo,mapLinear:Rh,inverseLerp:Ch,lerp:Ji,damp:Ph,pingpong:Lh,smoothstep:Ih,smootherstep:Dh,randInt:Uh,randFloat:Nh,randFloatSpread:Oh,seededRandom:Fh,degToRad:Bh,radToDeg:zh,isPowerOfTwo:ba,ceilPowerOfTwo:Hh,floorPowerOfTwo:Ks,setQuaternionFromProperEuler:kh,normalize:zt,denormalize:Ei},Me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],R=s[1],v=s[4],I=s[7],N=s[2],F=s[5],O=s[8];return r[0]=o*x+a*R+l*N,r[3]=o*m+a*v+l*F,r[6]=o*d+a*I+l*O,r[1]=c*x+h*R+u*N,r[4]=c*m+h*v+u*F,r[7]=c*d+h*I+u*O,r[2]=f*x+p*R+g*N,r[5]=f*m+p*v+g*F,r[8]=f*d+p*I+g*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wr=new it;function uc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){let i=$s("canvas");return i.style.display="block",i}var al={};function Ki(i){i in al||(al[i]=!0,console.warn(i))}var ol=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ll=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[Tn]:{transfer:qs,primaries:Ys,toReference:i=>i,fromReference:i=>i},[Tt]:{transfer:gt,primaries:Ys,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tr]:{transfer:qs,primaries:Zs,toReference:i=>i.applyMatrix3(ll),fromReference:i=>i.applyMatrix3(ol)},[ho]:{transfer:gt,primaries:Zs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ll),fromReference:i=>i.applyMatrix3(ol).convertLinearToSRGB()}},Gh=new Set([Tn,Tr]),ft={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=_s[e].toReference,s=_s[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return _s[i].primaries},getTransfer:function(i){return i===$t?qs:_s[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ci,js=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=$s("canvas")),ci.width=e.width,ci.height=e.height;let n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wh=0,Qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?js.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xh=0,Qt=class i extends fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,s=on,r=Kt,o=ns,a=ln,l=zn,c=i.DEFAULT_ANISOTROPY,h=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=oi(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?Tt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ts:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ts:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?ei:oc}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?Tt:$t}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Ql;Qt.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,I=(p+1)/2,N=(d+1)/2,F=(h+f)/4,O=(u+x)/4,Q=(g+m)/4;return v>I&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=F/n,r=O/n):I>N?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=F/s,r=Q/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=O/r,s=Q/r),this.set(n,s,r,t),this}let R=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(u-x)/R,this.z=(f-h)/R,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?Tt:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ta=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*x,R=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let N=Math.sqrt(v),F=Math.atan2(N,d*R);m=Math.sin(m*F)/N,a=Math.sin(a*F)/N}let I=a*R;if(l=l*m+f*I,c=c*m+p*I,h=h*m+g*I,u=u*m+x*I,m===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr=new z,cl=new cn,ti=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),vs.subVectors(this.max,Gi),hi.subVectors(e.a,Gi),ui.subVectors(e.b,Gi),di.subVectors(e.c,Gi),Pn.subVectors(ui,hi),Ln.subVectors(di,ui),Xn.subVectors(hi,di);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Xn.z,Xn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Xn.z,0,-Xn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Xn.y,Xn.x,0];return!Zr(t,hi,ui,di,vs)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,hi,ui,di,vs))?!1:(ys.crossVectors(Pn,Ln),t=[ys.x,ys.y,ys.z],Zr(t,hi,ui,di,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_n=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,xs=new ti,hi=new z,ui=new z,di=new z,Pn=new z,Ln=new z,Xn=new z,Gi=new z,vs=new z,ys=new z,qn=new z;function Zr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qn.fromArray(i,r);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qh=new ti,Wi=new z,Jr=new z,rs=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);let t=Wi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Jr)),this.expandByPoint(Wi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new z,Kr=new z,Ms=new z,In=new z,$r=new z,Ss=new z,jr=new z,Ni=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Kr.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Kr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ms),a=In.dot(this.direction),l=-In.dot(Ms),c=In.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Kr).addScaledVector(Ms,f),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,s,r){$r.subVectors(t,e),Ss.subVectors(n,e),jr.crossVectors($r,Ss);let o=this.direction.dot(jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);let l=a*this.direction.dot(Ss.crossVectors(In,Ss));if(l<0)return null;let c=a*this.direction.dot($r.cross(In));if(c<0||l+c>o)return null;let h=-a*In.dot(jr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yh,e,Zh)}lookAt(e,t,n){let s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Dn.crossVectors(n,Xt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Dn.crossVectors(n,Xt)),Dn.normalize(),bs.crossVectors(Xt,Dn),s[0]=Dn.x,s[4]=bs.x,s[8]=Xt.x,s[1]=Dn.y,s[5]=bs.y,s[9]=Xt.y,s[2]=Dn.z,s[6]=bs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],R=n[3],v=n[7],I=n[11],N=n[15],F=s[0],O=s[4],Q=s[8],E=s[12],A=s[1],q=s[5],ne=s[9],_e=s[13],H=s[2],Y=s[6],P=s[10],se=s[14],re=s[3],ie=s[7],he=s[11],pe=s[15];return r[0]=o*F+a*A+l*H+c*re,r[4]=o*O+a*q+l*Y+c*ie,r[8]=o*Q+a*ne+l*P+c*he,r[12]=o*E+a*_e+l*se+c*pe,r[1]=h*F+u*A+f*H+p*re,r[5]=h*O+u*q+f*Y+p*ie,r[9]=h*Q+u*ne+f*P+p*he,r[13]=h*E+u*_e+f*se+p*pe,r[2]=g*F+x*A+m*H+d*re,r[6]=g*O+x*q+m*Y+d*ie,r[10]=g*Q+x*ne+m*P+d*he,r[14]=g*E+x*_e+m*se+d*pe,r[3]=R*F+v*A+I*H+N*re,r[7]=R*O+v*q+I*Y+N*ie,r[11]=R*Q+v*ne+I*P+N*he,r[15]=R*E+v*_e+I*se+N*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],R=u*m*c-x*f*c+x*l*p-a*m*p-u*l*d+a*f*d,v=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,I=h*x*c-g*u*c+g*a*p-o*x*p-h*a*d+o*u*d,N=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,F=t*R+n*v+s*I+r*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/F;return e[0]=R*O,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*O,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*O,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*O,e[4]=v*O,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*O,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*O,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*O,e[8]=I*O,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*O,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*d+t*a*d)*O,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*O,e[12]=N*O,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*O,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*O,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,x=o*h,m=o*u,d=a*u,R=l*c,v=l*h,I=l*u,N=n.x,F=n.y,O=n.z;return s[0]=(1-(x+d))*N,s[1]=(p+I)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(p-I)*F,s[5]=(1-(f+d))*F,s[6]=(m+R)*F,s[7]=0,s[8]=(g+v)*O,s[9]=(m-R)*O,s[10]=(1-(f+x))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fi.set(s[0],s[1],s[2]).length(),o=fi.set(s[4],s[5],s[6]).length(),a=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],rn.copy(this);let c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=En){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===En)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Js)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=En){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,p=(n+s)*h,g,x;if(a===En)g=(o+r)*u,x=-2*u;else if(a===Js)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fi=new z,rn=new wt,Yh=new z(0,0,0),Zh=new z(1,1,1),Dn=new z,bs=new z,Xt=new z,hl=new wt,ul=new cn,tr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ul.setFromEuler(this),this.setFromQuaternion(ul,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tr.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jh=0,dl=new z,pi=new cn,vn=new wt,Es=new z,Xi=new z,Kh=new z,$h=new cn,fl=new z(1,0,0),pl=new z(0,1,0),ml=new z(0,0,1),jh={type:"added"},Qh={type:"removed"},Vt=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new tr,n=new cn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new it}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(pl,e)}rotateZ(e){return this.rotateOnAxis(ml,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(pl,e)}translateZ(e){return this.translateOnAxis(ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Xi,Es,this.up):vn.lookAt(Es,Xi,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(vn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new z(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new z,yn=new z,Qr=new z,Mn=new z,mi=new z,gi=new z,gl=new z,ea=new z,ta=new z,na=new z,Ts=!1,Ti=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),yn.subVectors(n,t),Qr.subVectors(e,t);let o=an.dot(an),a=an.dot(yn),l=an.dot(Qr),c=yn.dot(yn),h=yn.dot(Qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),yn.subVectors(e,t),an.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ts===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ts=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;mi.subVectors(s,n),gi.subVectors(r,n),ea.subVectors(e,n);let l=mi.dot(ea),c=gi.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,s);let h=mi.dot(ta),u=gi.dot(ta);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(mi,o);na.subVectors(e,r);let p=mi.dot(na),g=gi.dot(na);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(gi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return gl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(gl,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ws={h:0,s:0,l:0};function ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=uo(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ia(o,r,e+1/3),this.g=ia(o,r,e),this.b=ia(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ft.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Tt){ft.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(ws);let n=Ji(Un.h,ws.h,t),s=Ji(Un.s,ws.s,t),r=Ji(Un.l,ws.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new st;st.NAMES=dc;var eu=0,kn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Ci,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=xa,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==xa&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new z,As=new Me,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}};var nr=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ir=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var tu=0,Jt=new wt,sa=new Vt,_i=new z,qt=new ti,qi=new ti,Lt=new z,tn=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?ir:nr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(qt.min,qi.min),qt.expandByPoint(Lt),Lt.addVectors(qt.max,qi.max),qt.expandByPoint(Lt)):(qt.expandByPoint(qi.min),qt.expandByPoint(qi.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(e,c),Lt.add(_i)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new z,h[A]=new z;let u=new z,f=new z,p=new z,g=new Me,x=new Me,m=new Me,d=new z,R=new z;function v(A,q,ne){u.fromArray(s,A*3),f.fromArray(s,q*3),p.fromArray(s,ne*3),g.fromArray(o,A*2),x.fromArray(o,q*2),m.fromArray(o,ne*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let _e=1/(x.x*m.y-m.x*x.y);isFinite(_e)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(_e),R.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(_e),c[A].add(d),c[q].add(d),c[ne].add(d),h[A].add(R),h[q].add(R),h[ne].add(R))}let I=this.groups;I.length===0&&(I=[{start:0,count:n.length}]);for(let A=0,q=I.length;A<q;++A){let ne=I[A],_e=ne.start,H=ne.count;for(let Y=_e,P=_e+H;Y<P;Y+=3)v(n[Y+0],n[Y+1],n[Y+2])}let N=new z,F=new z,O=new z,Q=new z;function E(A){O.fromArray(r,A*3),Q.copy(O);let q=c[A];N.copy(q),N.sub(O.multiplyScalar(O.dot(q))).normalize(),F.crossVectors(Q,q);let _e=F.dot(h[A])<0?-1:1;l[A*4]=N.x,l[A*4+1]=N.y,l[A*4+2]=N.z,l[A*4+3]=_e}for(let A=0,q=I.length;A<q;++A){let ne=I[A],_e=ne.start,H=ne.count;for(let Y=_e,P=_e+H;Y<P;Y+=3)E(n[Y+0]),E(n[Y+1]),E(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_l=new wt,Yn=new Ni,Rs=new rs,xl=new z,xi=new z,vi=new z,yi=new z,ra=new z,Cs=new z,Ps=new Me,Ls=new Me,Is=new Me,vl=new z,yl=new z,Ml=new z,Ds=new z,Us=new z,Je=class extends Vt{constructor(e=new tn,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ra.fromBufferAttribute(u,e),o?Cs.addScaledVector(ra,h):Cs.addScaledVector(ra.sub(t),h))}t.add(Cs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(Rs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Rs,xl)===null||Yn.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],R=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let I=R,N=v;I<N;I+=3){let F=a.getX(I),O=a.getX(I+1),Q=a.getX(I+2);s=Ns(this,d,e,n,c,h,u,F,O,Q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let R=a.getX(m),v=a.getX(m+1),I=a.getX(m+2);s=Ns(this,o,e,n,c,h,u,R,v,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],R=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let I=R,N=v;I<N;I+=3){let F=I,O=I+1,Q=I+2;s=Ns(this,d,e,n,c,h,u,F,O,Q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let R=m,v=m+1,I=m+2;s=Ns(this,o,e,n,c,h,u,R,v,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function nu(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;Us.copy(a),Us.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:i}}function Ns(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,xi),i.getVertexPosition(l,vi),i.getVertexPosition(c,yi);let h=nu(i,e,t,n,xi,vi,yi,Ds);if(h){s&&(Ps.fromBufferAttribute(s,a),Ls.fromBufferAttribute(s,l),Is.fromBufferAttribute(s,c),h.uv=Ti.getInterpolation(Ds,xi,vi,yi,Ps,Ls,Is,new Me)),r&&(Ps.fromBufferAttribute(r,a),Ls.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),h.uv1=Ti.getInterpolation(Ds,xi,vi,yi,Ps,Ls,Is,new Me),h.uv2=h.uv1),o&&(vl.fromBufferAttribute(o,a),yl.fromBufferAttribute(o,l),Ml.fromBufferAttribute(o,c),h.normal=Ti.getInterpolation(Ds,xi,vi,yi,vl,yl,Ml,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};Ti.getNormal(xi,vi,yi,u.normal),h.face=u}return h}var An=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(x,m,d,R,v,I,N,F,O,Q,E){let A=I/O,q=N/Q,ne=I/2,_e=N/2,H=F/2,Y=O+1,P=Q+1,se=0,re=0,ie=new z;for(let he=0;he<P;he++){let pe=he*q-_e;for(let Ae=0;Ae<Y;Ae++){let te=Ae*A-ne;ie[x]=te*R,ie[m]=pe*v,ie[d]=H,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[d]=F>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ae/O),u.push(1-he/Q),se+=1}}for(let he=0;he<Q;he++)for(let pe=0;pe<O;pe++){let Ae=f+pe+Y*he,te=f+pe+Y*(he+1),le=f+(pe+1)+Y*(he+1),Ce=f+(pe+1)+Y*he;l.push(Ae,te,Ce),l.push(te,le,Ce),re+=6}a.addGroup(p,re,E),p+=re,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function iu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fc(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}var su={clone:Oi,merge:Ht},ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ru,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ft=class extends sr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mi=-90,Si=1,wa=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Mi,Si,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Mi,Si,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Mi,Si,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Mi,Si,e,t);a.layers=this.layers,this.add(a);let l=new Ft(Mi,Si,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rr=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Aa=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?Tt:$t),this.texture=new rr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:Fn});r.uniforms.tEquirect.value=t;let o=new Je(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Kt),new wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},aa=new z,ou=new z,lu=new it,Yt=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=aa.subVectors(n,t).cross(ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lu.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new rs,Os=new z,os=class{constructor(e=new Yt,t=new Yt,n=new Yt,s=new Yt,r=new Yt,o=new Yt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],R=s[13],v=s[14],I=s[15];if(n[0].setComponents(l-r,f-c,m-p,I-d).normalize(),n[1].setComponents(l+r,f+c,m+p,I+d).normalize(),n[2].setComponents(l+o,f+h,m+g,I+R).normalize(),n[3].setComponents(l-o,f-h,m-g,I-R).normalize(),n[4].setComponents(l-a,f-u,m-x,I-v).normalize(),t===En)n[5].setComponents(l+a,f+u,m+x,I+v).normalize();else if(t===Js)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Os.x=s.normal.x>0?e.max.x:e.min.x,Os.y=s.normal.y>0?e.max.y:e.min.y,Os.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Vn=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let R=d*f-o;for(let v=0;v<c;v++){let I=v*u-r;g.push(I,-R,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){let v=R+c*d,I=R+c*(d+1),N=R+1+c*(d+1),F=R+1+c*d;p.push(v,I,F),p.push(I,N,F)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uu=`#ifdef USE_ALPHAHASH
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
#endif`,du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gu=`#ifdef USE_AOMAP
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
#endif`,_u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
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
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Eu=`#ifdef USE_BUMPMAP
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Du=`#define PI 3.141592653589793
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`
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
}`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
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
}`,ju=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#endif`,cd=`struct PhysicalMaterial {
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
}`,hd=`
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
#endif`,ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,_f=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,vf=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Af=`#define LAMBERT
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
}`,Rf=`#define MATCAP
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,Lf=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Df=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,Ff=`#define TOON
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
}`,Bf=`uniform float size;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,kf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:hu,alphahash_pars_fragment:uu,alphamap_fragment:du,alphamap_pars_fragment:fu,alphatest_fragment:pu,alphatest_pars_fragment:mu,aomap_fragment:gu,aomap_pars_fragment:_u,batching_pars_vertex:xu,batching_vertex:vu,begin_vertex:yu,beginnormal_vertex:Mu,bsdfs:Su,iridescence_fragment:bu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Au,clipping_planes_vertex:Ru,color_fragment:Cu,color_pars_fragment:Pu,color_pars_vertex:Lu,color_vertex:Iu,common:Du,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Fu,emissivemap_fragment:Bu,emissivemap_pars_fragment:zu,colorspace_fragment:Hu,colorspace_pars_fragment:ku,envmap_fragment:Vu,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Wu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:id,envmap_vertex:qu,fog_vertex:Yu,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Ku,gradientmap_pars_fragment:$u,lightmap_fragment:ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:xd,map_particle_fragment:vd,map_particle_pars_fragment:yd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphcolor_vertex:bd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:wd,normal_fragment_begin:Ad,normal_fragment_maps:Rd,normal_pars_fragment:Cd,normal_pars_vertex:Pd,normal_vertex:Ld,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Dd,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Od,opaque_fragment:Fd,packing:Bd,premultiplied_alpha_fragment:zd,project_vertex:Hd,dithering_fragment:kd,dithering_pars_fragment:Vd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:qd,shadowmap_vertex:Yd,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Kd,skinning_vertex:$d,skinnormal_vertex:jd,specularmap_fragment:Qd,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:hf,background_frag:uf,backgroundCube_vert:df,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:_f,distanceRGBA_vert:xf,distanceRGBA_frag:vf,equirect_vert:yf,equirect_frag:Mf,linedashed_vert:Sf,linedashed_frag:bf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:wf,meshlambert_frag:Af,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Lf,meshphong_vert:If,meshphong_frag:Df,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:Ff,points_vert:Bf,points_frag:zf,shadow_vert:Hf,shadow_frag:kf,sprite_vert:Vf,sprite_frag:Gf},Re={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},dn={basic:{uniforms:Ht([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ht([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ht([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ht([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ht([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new st(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ht([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ht([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ht([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ht([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ht([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ht([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Ht([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Ht([Re.lights,Re.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};dn.physical={uniforms:Ht([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Fs={r:0,b:0,g:0};function Wf(i,e,t,n,s,r,o){let a=new st(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let R=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),R=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Er)?(h===void 0&&(h=new Je(new An(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Oi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ft.getTransfer(v.colorSpace)!==gt,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Je(new Vn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Oi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,d){m.getRGB(Fs,fc(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function Xf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(H,Y,P,se,re){let ie=!1;if(o){let he=x(se,P,Y);c!==he&&(c=he,p(c.object)),ie=d(H,se,P,re),ie&&R(H,se,P,re)}else{let he=Y.wireframe===!0;(c.geometry!==se.id||c.program!==P.id||c.wireframe!==he)&&(c.geometry=se.id,c.program=P.id,c.wireframe=he,ie=!0)}re!==null&&t.update(re,i.ELEMENT_ARRAY_BUFFER),(ie||h)&&(h=!1,Q(H,Y,P,se),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(H){return n.isWebGL2?i.bindVertexArray(H):r.bindVertexArrayOES(H)}function g(H){return n.isWebGL2?i.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function x(H,Y,P){let se=P.wireframe===!0,re=a[H.id];re===void 0&&(re={},a[H.id]=re);let ie=re[Y.id];ie===void 0&&(ie={},re[Y.id]=ie);let he=ie[se];return he===void 0&&(he=m(f()),ie[se]=he),he}function m(H){let Y=[],P=[],se=[];for(let re=0;re<s;re++)Y[re]=0,P[re]=0,se[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:P,attributeDivisors:se,object:H,attributes:{},index:null}}function d(H,Y,P,se){let re=c.attributes,ie=Y.attributes,he=0,pe=P.getAttributes();for(let Ae in pe)if(pe[Ae].location>=0){let le=re[Ae],Ce=ie[Ae];if(Ce===void 0&&(Ae==="instanceMatrix"&&H.instanceMatrix&&(Ce=H.instanceMatrix),Ae==="instanceColor"&&H.instanceColor&&(Ce=H.instanceColor)),le===void 0||le.attribute!==Ce||Ce&&le.data!==Ce.data)return!0;he++}return c.attributesNum!==he||c.index!==se}function R(H,Y,P,se){let re={},ie=Y.attributes,he=0,pe=P.getAttributes();for(let Ae in pe)if(pe[Ae].location>=0){let le=ie[Ae];le===void 0&&(Ae==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),Ae==="instanceColor"&&H.instanceColor&&(le=H.instanceColor));let Ce={};Ce.attribute=le,le&&le.data&&(Ce.data=le.data),re[Ae]=Ce,he++}c.attributes=re,c.attributesNum=he,c.index=se}function v(){let H=c.newAttributes;for(let Y=0,P=H.length;Y<P;Y++)H[Y]=0}function I(H){N(H,0)}function N(H,Y){let P=c.newAttributes,se=c.enabledAttributes,re=c.attributeDivisors;P[H]=1,se[H]===0&&(i.enableVertexAttribArray(H),se[H]=1),re[H]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Y),re[H]=Y)}function F(){let H=c.newAttributes,Y=c.enabledAttributes;for(let P=0,se=Y.length;P<se;P++)Y[P]!==H[P]&&(i.disableVertexAttribArray(P),Y[P]=0)}function O(H,Y,P,se,re,ie,he){he===!0?i.vertexAttribIPointer(H,Y,P,re,ie):i.vertexAttribPointer(H,Y,P,se,re,ie)}function Q(H,Y,P,se){if(n.isWebGL2===!1&&(H.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let re=se.attributes,ie=P.getAttributes(),he=Y.defaultAttributeValues;for(let pe in ie){let Ae=ie[pe];if(Ae.location>=0){let te=re[pe];if(te===void 0&&(pe==="instanceMatrix"&&H.instanceMatrix&&(te=H.instanceMatrix),pe==="instanceColor"&&H.instanceColor&&(te=H.instanceColor)),te!==void 0){let le=te.normalized,Ce=te.itemSize,Ne=t.get(te);if(Ne===void 0)continue;let Ie=Ne.buffer,ke=Ne.type,Ve=Ne.bytesPerElement,Oe=n.isWebGL2===!0&&(ke===i.INT||ke===i.UNSIGNED_INT||te.gpuType===ec);if(te.isInterleavedBufferAttribute){let Xe=te.data,B=Xe.stride,Se=te.offset;if(Xe.isInstancedInterleavedBuffer){for(let ae=0;ae<Ae.locationSize;ae++)N(Ae.location+ae,Xe.meshPerAttribute);H.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ae=0;ae<Ae.locationSize;ae++)I(Ae.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ae=0;ae<Ae.locationSize;ae++)O(Ae.location+ae,Ce/Ae.locationSize,ke,le,B*Ve,(Se+Ce/Ae.locationSize*ae)*Ve,Oe)}else{if(te.isInstancedBufferAttribute){for(let Xe=0;Xe<Ae.locationSize;Xe++)N(Ae.location+Xe,te.meshPerAttribute);H.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Xe=0;Xe<Ae.locationSize;Xe++)I(Ae.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Xe=0;Xe<Ae.locationSize;Xe++)O(Ae.location+Xe,Ce/Ae.locationSize,ke,le,Ce*Ve,Ce/Ae.locationSize*Xe*Ve,Oe)}}else if(he!==void 0){let le=he[pe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Ae.location,le);break;case 3:i.vertexAttrib3fv(Ae.location,le);break;case 4:i.vertexAttrib4fv(Ae.location,le);break;default:i.vertexAttrib1fv(Ae.location,le)}}}}F()}function E(){ne();for(let H in a){let Y=a[H];for(let P in Y){let se=Y[P];for(let re in se)g(se[re].object),delete se[re];delete Y[P]}delete a[H]}}function A(H){if(a[H.id]===void 0)return;let Y=a[H.id];for(let P in Y){let se=Y[P];for(let re in se)g(se[re].object),delete se[re];delete Y[P]}delete a[H.id]}function q(H){for(let Y in a){let P=a[Y];if(P[H.id]===void 0)continue;let se=P[H.id];for(let re in se)g(se[re].object),delete se[re];delete P[H.id]}}function ne(){_e(),h=!0,c!==l&&(c=l,p(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ne,resetDefaultState:_e,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:I,disableUnusedAttributes:F}}function qf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Yf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,I=o||e.has("OES_texture_float"),N=v&&I,F=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:R,vertexTextures:v,floatFragmentTextures:I,floatVertexTextures:N,maxSamples:F}}function Zf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Yt,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let R=r?0:n,v=R*4,I=d.clippingState||null;l.value=I,I=h(g,f,v,p);for(let N=0;N!==v;++N)I[N]=t[N];d.clippingState=I,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,I=p;v!==x;++v,I+=4)o.copy(u[v]).applyMatrix4(R,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Jf(i){let e=new WeakMap;function t(o,a){return a===va?o.mapping=Ii:a===ya&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===va||a===ya)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Aa(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ar=class extends sr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wi=4,Sl=[.125,.215,.35,.446,.526,.582],$n=20,oa=new ar,bl=new st,la=null,ca=0,ha=0,Jn=(1+Math.sqrt(5))/2,bi=1/Jn,El=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Jn,bi),new z(0,Jn,-bi),new z(bi,0,Jn),new z(-bi,0,Jn),new z(Jn,bi,0),new z(-Jn,bi,0)],Fi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ha),e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:is,format:ln,colorSpace:Tn,depthBuffer:!1},s=Tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=$f(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,s){let a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bl),h.toneMapping=Bn,h.autoClear=!1;let p=new en({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Je(new An,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(bl),x=!0);for(let d=0;d<6;d++){let R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;Bs(s,R*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ii||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=El[(s-1)%El.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Je(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);let d=[],R=0;for(let O=0;O<$n;++O){let Q=O/x,E=Math.exp(-Q*Q/2);d.push(E),O===0?R+=E:O<m&&(R+=2*E)}for(let O=0;O<d.length;O++)d[O]=d[O]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let I=this._sizeLods[s],N=3*I*(s>v-wi?s-v+wi:0),F=4*(this._cubeSize-I);Bs(t,N,F,3*I,2*I),l.setRenderTarget(t),l.render(u,oa)}};function Kf(i){let e=[],t=[],n=[],s=i,r=i-wi+1+Sl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-wi?l=Sl[o-i+wi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,R=new Float32Array(x*g*p),v=new Float32Array(m*g*p),I=new Float32Array(d*g*p);for(let F=0;F<p;F++){let O=F%3*2/3-1,Q=F>2?0:-1,E=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];R.set(E,x*g*F),v.set(f,m*g*F);let A=[F,F,F,F,F,F];I.set(A,d*g*F)}let N=new tn;N.setAttribute("position",new jt(R,x)),N.setAttribute("uv",new jt(v,m)),N.setAttribute("faceIndex",new jt(I,d)),e.push(N),s>wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tl(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $f(i,e,t){let n=new Float32Array($n),s=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function wl(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Al(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function jf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===va||l===ya,h=l===Ii||l===Di;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Fi(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fi(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Qf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let R=p.array;x=p.version;for(let v=0,I=R.length;v<I;v+=3){let N=R[v+0],F=R[v+1],O=R[v+2];f.push(N,F,F,O,O,N)}}else if(g!==void 0){let R=g.array;x=g.version;for(let v=0,I=R.length/3-1;v<I;v+=3){let N=v+0,F=v+1,O=v+2;f.push(N,F,F,O,O,N)}}else return;let m=new(uc(f)?ir:nr)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tp(i,e,t,n){let s=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*l),t.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*l,x),t.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let R=0;R<x;R++)d+=g[R];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function np(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,e){return i[0]-e[0]}function sp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function rp(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let H=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",H)};x!==void 0&&x.texture.dispose();let R=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],O=h.morphAttributes.color||[],Q=0;R===!0&&(Q=1),v===!0&&(Q=2),I===!0&&(Q=3);let E=h.attributes.position.count*Q,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let q=new Float32Array(E*A*4*g),ne=new er(q,E,A,g);ne.type=On,ne.needsUpdate=!0;let _e=Q*4;for(let Y=0;Y<g;Y++){let P=N[Y],se=F[Y],re=O[Y],ie=E*A*4*Y;for(let he=0;he<P.count;he++){let pe=he*_e;R===!0&&(o.fromBufferAttribute(P,he),q[ie+pe+0]=o.x,q[ie+pe+1]=o.y,q[ie+pe+2]=o.z,q[ie+pe+3]=0),v===!0&&(o.fromBufferAttribute(se,he),q[ie+pe+4]=o.x,q[ie+pe+5]=o.y,q[ie+pe+6]=o.z,q[ie+pe+7]=0),I===!0&&(o.fromBufferAttribute(re,he),q[ie+pe+8]=o.x,q[ie+pe+9]=o.y,q[ie+pe+10]=o.z,q[ie+pe+11]=re.itemSize===4?o.w:1)}}x={count:g,texture:ne,size:new Me(E,A)},r.set(h,x),h.addEventListener("dispose",H)}let m=0;for(let R=0;R<f.length;R++)m+=f[R];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<p;v++){let I=g[v];I[0]=v,I[1]=f[v]}g.sort(sp);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ip);let x=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let I=a[v],N=I[0],F=I[1];N!==Number.MAX_SAFE_INTEGER&&F?(x&&h.getAttribute("morphTarget"+v)!==x[N]&&h.setAttribute("morphTarget"+v,x[N]),m&&h.getAttribute("morphNormal"+v)!==m[N]&&h.setAttribute("morphNormal"+v,m[N]),s[v]=F,d+=F):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let R=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",R),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function ap(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var or=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Nn),n===void 0&&h===Ui&&(n=jn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mc=new Qt,gc=new or(1,1);gc.compareFunction=cc;var _c=new er,xc=new Ta,vc=new rr,Rl=[],Cl=[],Pl=new Float32Array(16),Ll=new Float32Array(9),Il=new Float32Array(4);function Hi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rl[s];if(r===void 0&&(r=new Float32Array(s),Rl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=Cl[e];t===void 0&&(t=new Int32Array(e),Cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Ct(t,n)}}function dp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Ll.set(n),i.uniformMatrix3fv(this.addr,!1,Ll),Ct(t,n)}}function fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Pl.set(n),i.uniformMatrix4fv(this.addr,!1,Pl),Ct(t,n)}}function pp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function xp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Sp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?gc:mc;t.setTexture2D(e||r,s)}function bp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xc,s)}function Ep(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vc,s)}function Tp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_c,s)}function wp(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(i,e){i.uniform1fv(this.addr,e)}function Rp(i,e){let t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cp(i,e){let t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pp(i,e){let t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Lp(i,e){let t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ip(i,e){let t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dp(i,e){let t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Up(i,e){i.uniform1iv(this.addr,e)}function Np(i,e){i.uniform2iv(this.addr,e)}function Op(i,e){i.uniform3iv(this.addr,e)}function Fp(i,e){i.uniform4iv(this.addr,e)}function Bp(i,e){i.uniform1uiv(this.addr,e)}function zp(i,e){i.uniform2uiv(this.addr,e)}function Hp(i,e){i.uniform3uiv(this.addr,e)}function kp(i,e){i.uniform4uiv(this.addr,e)}function Vp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mc,r[o])}function Gp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xc,r[o])}function Wp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vc,r[o])}function Xp(i,e,t){let n=this.cache,s=e.length,r=wr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_c,r[o])}function qp(i){switch(i){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Op;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return zp;case 36295:return Hp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}var Ra=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wp(t.type)}},Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qp(t.type)}},Pa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ua=/(\w+)(\])?(\[|\.)?/g;function Dl(i,e){i.seq.push(e),i.map[e.id]=e}function Yp(i,e,t){let n=i.name,s=n.length;for(ua.lastIndex=0;;){let r=ua.exec(n),o=ua.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dl(t,c===void 0?new Ra(a,i,e):new Ca(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Pa(a),Dl(t,u)),t=u}}}var Li=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ul(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Zp=37297,Jp=0;function Kp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $p(i){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i),n;switch(e===t?n="":e===Zs&&t===Ys?n="LinearDisplayP3ToLinearSRGB":e===Ys&&t===Zs&&(n="LinearSRGBToLinearDisplayP3"),i){case Tn:case Tr:return[n,"LinearTransferOETF"];case Tt:case ho:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Kp(i.getShaderSource(e),o)}else return s}function jp(i,e){let t=$p(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qp(i,e){let t;switch(e){case sh:t="Linear";break;case rh:t="Reinhard";break;case ah:t="OptimizedCineon";break;case lo:t="ACESFilmic";break;case lh:t="AgX";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function em(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function nm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function im(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ai(i){return i!==""}function Ol(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(sm,am)}var rm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function am(i,e){let t=et[e];if(t===void 0){let n=rm.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}var om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(om,lm)}function lm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function hm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Di&&(e="ENVMAP_MODE_REFRACTION"),e}function dm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function fm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cm(t),c=hm(t),h=um(t),u=dm(t),f=fm(t),p=t.isWebGL2?"":em(t),g=tm(t),x=nm(r),m=s.createProgram(),d,R,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ai).join(`
`),d.length>0&&(d+=`
`),R=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ai).join(`
`),R.length>0&&(R+=`
`)):(d=[zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),R=[p,zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?et.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,jp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),o=La(o),o=Ol(o,t),o=Fl(o,t),a=La(a),a=Ol(a,t),a=Fl(a,t),o=Bl(o),a=Bl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,R=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);let I=v+d+o,N=v+R+a,F=Ul(s,s.VERTEX_SHADER,I),O=Ul(s,s.FRAGMENT_SHADER,N);s.attachShader(m,F),s.attachShader(m,O),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Q(ne){if(i.debug.checkShaderErrors){let _e=s.getProgramInfoLog(m).trim(),H=s.getShaderInfoLog(F).trim(),Y=s.getShaderInfoLog(O).trim(),P=!0,se=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(P=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,F,O);else{let re=Nl(s,F,"vertex"),ie=Nl(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+re+`
`+ie)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(H===""||Y==="")&&(se=!1);se&&(ne.diagnostics={runnable:P,programLog:_e,vertexShader:{log:H,prefix:d},fragmentShader:{log:Y,prefix:R}})}s.deleteShader(F),s.deleteShader(O),E=new Li(s,m),A=im(s,m)}let E;this.getUniforms=function(){return E===void 0&&Q(this),E};let A;this.getAttributes=function(){return A===void 0&&Q(this),A};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(m,Zp)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=F,this.fragmentShader=O,this}var mm=0,Ia=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Da(e),t.set(e,n)),n}},Da=class{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}};function gm(i,e,t,n,s,r,o){let a=new as,l=new Ia,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,A,q,ne,_e){let H=ne.fog,Y=_e.geometry,P=E.isMeshStandardMaterial?ne.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||P),re=se&&se.mapping===Er?se.image.height:null,ie=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=he!==void 0?he.length:0,Ae=0;Y.morphAttributes.position!==void 0&&(Ae=1),Y.morphAttributes.normal!==void 0&&(Ae=2),Y.morphAttributes.color!==void 0&&(Ae=3);let te,le,Ce,Ne;if(ie){let ye=dn[ie];te=ye.vertexShader,le=ye.fragmentShader}else te=E.vertexShader,le=E.fragmentShader,l.update(E),Ce=l.getVertexShaderID(E),Ne=l.getFragmentShaderID(E);let Ie=i.getRenderTarget(),ke=_e.isInstancedMesh===!0,Ve=_e.isBatchedMesh===!0,Oe=!!E.map,Xe=!!E.matcap,B=!!se,Se=!!E.aoMap,ae=!!E.lightMap,ve=!!E.bumpMap,oe=!!E.normalMap,Be=!!E.displacementMap,Pe=!!E.emissiveMap,b=!!E.metalnessMap,y=!!E.roughnessMap,X=E.anisotropy>0,me=E.clearcoat>0,de=E.iridescence>0,ue=E.sheen>0,Ue=E.transmission>0,we=X&&!!E.anisotropyMap,Le=me&&!!E.clearcoatMap,ze=me&&!!E.clearcoatNormalMap,Ge=me&&!!E.clearcoatRoughnessMap,ge=de&&!!E.iridescenceMap,$e=de&&!!E.iridescenceThicknessMap,U=ue&&!!E.sheenColorMap,fe=ue&&!!E.sheenRoughnessMap,Te=!!E.specularMap,_=!!E.specularColorMap,w=!!E.specularIntensityMap,L=Ue&&!!E.transmissionMap,C=Ue&&!!E.thicknessMap,D=!!E.gradientMap,M=!!E.alphaMap,T=E.alphaTest>0,W=!!E.alphaHash,k=!!E.extensions,Z=!!Y.attributes.uv1,K=!!Y.attributes.uv2,J=!!Y.attributes.uv3,G=Bn;return E.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(G=i.toneMapping),{isWebGL2:h,shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:le,defines:E.defines,customVertexShaderID:Ce,customFragmentShaderID:Ne,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ve,instancing:ke,instancingColor:ke&&_e.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Tn,map:Oe,matcap:Xe,envMap:B,envMapMode:B&&se.mapping,envMapCubeUVHeight:re,aoMap:Se,lightMap:ae,bumpMap:ve,normalMap:oe,displacementMap:f&&Be,emissiveMap:Pe,normalMapObjectSpace:oe&&E.normalMapType===yh,normalMapTangentSpace:oe&&E.normalMapType===lc,metalnessMap:b,roughnessMap:y,anisotropy:X,anisotropyMap:we,clearcoat:me,clearcoatMap:Le,clearcoatNormalMap:ze,clearcoatRoughnessMap:Ge,iridescence:de,iridescenceMap:ge,iridescenceThicknessMap:$e,sheen:ue,sheenColorMap:U,sheenRoughnessMap:fe,specularMap:Te,specularColorMap:_,specularIntensityMap:w,transmission:Ue,transmissionMap:L,thicknessMap:C,gradientMap:D,opaque:E.transparent===!1&&E.blending===Ci,alphaMap:M,alphaTest:T,alphaHash:W,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:Se&&x(E.aoMap.channel),lightMapUv:ae&&x(E.lightMap.channel),bumpMapUv:ve&&x(E.bumpMap.channel),normalMapUv:oe&&x(E.normalMap.channel),displacementMapUv:Be&&x(E.displacementMap.channel),emissiveMapUv:Pe&&x(E.emissiveMap.channel),metalnessMapUv:b&&x(E.metalnessMap.channel),roughnessMapUv:y&&x(E.roughnessMap.channel),anisotropyMapUv:we&&x(E.anisotropyMap.channel),clearcoatMapUv:Le&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:U&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(E.sheenRoughnessMap.channel),specularMapUv:Te&&x(E.specularMap.channel),specularColorMapUv:_&&x(E.specularColorMap.channel),specularIntensityMapUv:w&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:C&&x(E.thicknessMap.channel),alphaMapUv:M&&x(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(oe||X),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Z,vertexUv2s:K,vertexUv3s:J,pointsUvs:_e.isPoints===!0&&!!Y.attributes.uv&&(Oe||M),fog:!!H,useFog:E.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:_e.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:G,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&ft.getTransfer(E.map.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Bt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:k&&E.extensions.derivatives===!0,extensionFragDepth:k&&E.extensions.fragDepth===!0,extensionDrawBuffers:k&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:k&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(let q in E.defines)A.push(q),A.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(R(A,E),v(A,E),A.push(i.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function R(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function v(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function I(E){let A=g[E.type],q;if(A){let ne=dn[A];q=su.clone(ne.uniforms)}else q=E.uniforms;return q}function N(E,A){let q;for(let ne=0,_e=c.length;ne<_e;ne++){let H=c[ne];if(H.cacheKey===A){q=H,++q.usedTimes;break}}return q===void 0&&(q=new pm(i,A,E,r),c.push(q)),q}function F(E){if(--E.usedTimes===0){let A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function O(E){l.remove(E)}function Q(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:I,acquireProgram:N,releaseProgram:F,releaseShaderCache:O,programs:c,dispose:Q}}function _m(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||xm),n.length>1&&n.sort(f||Hl),s.length>1&&s.sort(f||Hl)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function vm(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new kl,i.set(n,[o])):s>=r.length?(o=new kl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new st};break;case"SpotLight":t={position:new z,direction:new z,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Mm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sm=0;function bm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Em(i,e){let t=new ym,n=Mm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);let r=new z,o=new wt,a=new wt;function l(h,u){let f=0,p=0,g=0;for(let ne=0;ne<9;ne++)s.probe[ne].set(0,0,0);let x=0,m=0,d=0,R=0,v=0,I=0,N=0,F=0,O=0,Q=0,E=0;h.sort(bm);let A=u===!0?Math.PI:1;for(let ne=0,_e=h.length;ne<_e;ne++){let H=h[ne],Y=H.color,P=H.intensity,se=H.distance,re=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=Y.r*P*A,p+=Y.g*P*A,g+=Y.b*P*A;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(H.sh.coefficients[ie],P);E++}else if(H.isDirectionalLight){let ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*A),H.castShadow){let he=H.shadow,pe=n.get(H);pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,s.directionalShadow[x]=pe,s.directionalShadowMap[x]=re,s.directionalShadowMatrix[x]=H.shadow.matrix,I++}s.directional[x]=ie,x++}else if(H.isSpotLight){let ie=t.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Y).multiplyScalar(P*A),ie.distance=se,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,s.spot[d]=ie;let he=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,he.updateMatrices(H),H.castShadow&&Q++),s.spotLightMatrix[d]=he.matrix,H.castShadow){let pe=n.get(H);pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,s.spotShadow[d]=pe,s.spotShadowMap[d]=re,F++}d++}else if(H.isRectAreaLight){let ie=t.get(H);ie.color.copy(Y).multiplyScalar(P),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),s.rectArea[R]=ie,R++}else if(H.isPointLight){let ie=t.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity*A),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){let he=H.shadow,pe=n.get(H);pe.shadowBias=he.bias,pe.shadowNormalBias=he.normalBias,pe.shadowRadius=he.radius,pe.shadowMapSize=he.mapSize,pe.shadowCameraNear=he.camera.near,pe.shadowCameraFar=he.camera.far,s.pointShadow[m]=pe,s.pointShadowMap[m]=re,s.pointShadowMatrix[m]=H.shadow.matrix,N++}s.point[m]=ie,m++}else if(H.isHemisphereLight){let ie=t.get(H);ie.skyColor.copy(H.color).multiplyScalar(P*A),ie.groundColor.copy(H.groundColor).multiplyScalar(P*A),s.hemi[v]=ie,v++}}R>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let q=s.hash;(q.directionalLength!==x||q.pointLength!==m||q.spotLength!==d||q.rectAreaLength!==R||q.hemiLength!==v||q.numDirectionalShadows!==I||q.numPointShadows!==N||q.numSpotShadows!==F||q.numSpotMaps!==O||q.numLightProbes!==E)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=R,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=F+O-Q,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=Q,s.numLightProbes=E,q.directionalLength=x,q.pointLength=m,q.spotLength=d,q.rectAreaLength=R,q.hemiLength=v,q.numDirectionalShadows=I,q.numPointShadows=N,q.numSpotShadows=F,q.numSpotMaps=O,q.numLightProbes=E,s.version=Sm++)}function c(h,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let R=0,v=h.length;R<v;R++){let I=h[R];if(I.isDirectionalLight){let N=s.directional[f];N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),f++}else if(I.isSpotLight){let N=s.spot[g];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),g++}else if(I.isRectAreaLight){let N=s.rectArea[x];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(d),a.identity(),o.copy(I.matrixWorld),o.premultiply(d),a.extractRotation(o),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),x++}else if(I.isPointLight){let N=s.point[p];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(d),p++}else if(I.isHemisphereLight){let N=s.hemi[m];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Vl(i,e){let t=new Em(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Vl(i,e),t.set(r,[l])):o>=a.length?(l=new Vl(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ua=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
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
}`;function Rm(i,e,t){let n=new os,s=new Me,r=new Me,o=new xt,a=new Ua({depthPacking:vh}),l=new Na,c={},h=t.maxTextureSize,u={[Hn]:Bt,[Bt]:Hn,[bn]:bn},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:wm,fragmentShader:Am}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let d=this.type;this.render=function(F,O,Q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;let E=i.getRenderTarget(),A=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(Fn),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);let _e=d!==Sn&&this.type===Sn,H=d===Sn&&this.type!==Sn;for(let Y=0,P=F.length;Y<P;Y++){let se=F[Y],re=se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let ie=re.getFrameExtents();if(s.multiply(ie),r.copy(re.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,re.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,re.mapSize.y=r.y)),re.map===null||_e===!0||H===!0){let pe=this.type!==Sn?{minFilter:kt,magFilter:kt}:{};re.map!==null&&re.map.dispose(),re.map=new wn(s.x,s.y,pe),re.map.texture.name=se.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let he=re.getViewportCount();for(let pe=0;pe<he;pe++){let Ae=re.getViewport(pe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),ne.viewport(o),re.updateMatrices(se,pe),n=re.getFrustum(),I(O,Q,re.camera,se,this.type)}re.isPointLightShadow!==!0&&this.type===Sn&&R(re,Q),re.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,q)};function R(F,O){let Q=e.update(x);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(O,null,Q,f,x,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(O,null,Q,p,x,null)}function v(F,O,Q,E){let A=null,q=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(q!==void 0)A=q;else if(A=Q.isPointLight===!0?l:a,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let ne=A.uuid,_e=O.uuid,H=c[ne];H===void 0&&(H={},c[ne]=H);let Y=H[_e];Y===void 0&&(Y=A.clone(),H[_e]=Y,O.addEventListener("dispose",N)),A=Y}if(A.visible=O.visible,A.wireframe=O.wireframe,E===Sn?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:u[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,Q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let ne=i.properties.get(A);ne.light=Q}return A}function I(F,O,Q,E,A){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Sn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);let _e=e.update(F),H=F.material;if(Array.isArray(H)){let Y=_e.groups;for(let P=0,se=Y.length;P<se;P++){let re=Y[P],ie=H[re.materialIndex];if(ie&&ie.visible){let he=v(F,ie,E,A);F.onBeforeShadow(i,F,O,Q,_e,he,re),i.renderBufferDirect(Q,null,_e,he,F,re),F.onAfterShadow(i,F,O,Q,_e,he,re)}}}else if(H.visible){let Y=v(F,H,E,A);F.onBeforeShadow(i,F,O,Q,_e,Y,null),i.renderBufferDirect(Q,null,_e,Y,F,null),F.onAfterShadow(i,F,O,Q,_e,Y,null)}}let ne=F.children;for(let _e=0,H=ne.length;_e<H;_e++)I(ne[_e],O,Q,E,A)}function N(F){F.target.removeEventListener("dispose",N);for(let Q in c){let E=c[Q],A=F.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Cm(i,e,t){let n=t.isWebGL2;function s(){let T=!1,W=new xt,k=null,Z=new xt(0,0,0,0);return{setMask:function(K){k!==K&&!T&&(i.colorMask(K,K,K,K),k=K)},setLocked:function(K){T=K},setClear:function(K,J,G,ce,ye){ye===!0&&(K*=ce,J*=ce,G*=ce),W.set(K,J,G,ce),Z.equals(W)===!1&&(i.clearColor(K,J,G,ce),Z.copy(W))},reset:function(){T=!1,k=null,Z.set(-1,0,0,0)}}}function r(){let T=!1,W=null,k=null,Z=null;return{setTest:function(K){K?Ve(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(K){W!==K&&!T&&(i.depthMask(K),W=K)},setFunc:function(K){if(k!==K){switch(K){case Jc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case Qc:i.depthFunc(i.GEQUAL);break;case eh:i.depthFunc(i.GREATER);break;case th:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=K}},setLocked:function(K){T=K},setClear:function(K){Z!==K&&(i.clearDepth(K),Z=K)},reset:function(){T=!1,W=null,k=null,Z=null}}}function o(){let T=!1,W=null,k=null,Z=null,K=null,J=null,G=null,ce=null,ye=null;return{setTest:function(xe){T||(xe?Ve(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(xe){W!==xe&&!T&&(i.stencilMask(xe),W=xe)},setFunc:function(xe,Ee,be){(k!==xe||Z!==Ee||K!==be)&&(i.stencilFunc(xe,Ee,be),k=xe,Z=Ee,K=be)},setOp:function(xe,Ee,be){(J!==xe||G!==Ee||ce!==be)&&(i.stencilOp(xe,Ee,be),J=xe,G=Ee,ce=be)},setLocked:function(xe){T=xe},setClear:function(xe){ye!==xe&&(i.clearStencil(xe),ye=xe)},reset:function(){T=!1,W=null,k=null,Z=null,K=null,J=null,G=null,ce=null,ye=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,R=null,v=null,I=null,N=null,F=null,O=null,Q=null,E=new st(0,0,0),A=0,q=!1,ne=null,_e=null,H=null,Y=null,P=null,se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(he)[1]),re=ie>=1):he.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),re=ie>=2);let pe=null,Ae={},te=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ce=new xt().fromArray(te),Ne=new xt().fromArray(le);function Ie(T,W,k,Z){let K=new Uint8Array(4),J=i.createTexture();i.bindTexture(T,J),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let G=0;G<k;G++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(W,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(W+G,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return J}let ke={};ke[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(i.DEPTH_TEST),l.setFunc(Gs),Pe(!1),b(Mo),Ve(i.CULL_FACE),oe(Fn);function Ve(T){f[T]!==!0&&(i.enable(T),f[T]=!0)}function Oe(T){f[T]!==!1&&(i.disable(T),f[T]=!1)}function Xe(T,W){return p[T]!==W?(i.bindFramebuffer(T,W),p[T]=W,n&&(T===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=W),T===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=W)),!0):!1}function B(T,W){let k=x,Z=!1;if(T)if(k=g.get(W),k===void 0&&(k=[],g.set(W,k)),T.isWebGLMultipleRenderTargets){let K=T.texture;if(k.length!==K.length||k[0]!==i.COLOR_ATTACHMENT0){for(let J=0,G=K.length;J<G;J++)k[J]=i.COLOR_ATTACHMENT0+J;k.length=K.length,Z=!0}}else k[0]!==i.COLOR_ATTACHMENT0&&(k[0]=i.COLOR_ATTACHMENT0,Z=!0);else k[0]!==i.BACK&&(k[0]=i.BACK,Z=!0);Z&&(t.isWebGL2?i.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Se(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let ae={[Kn]:i.FUNC_ADD,[Uc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};if(n)ae[To]=i.MIN,ae[wo]=i.MAX;else{let T=e.get("EXT_blend_minmax");T!==null&&(ae[To]=T.MIN_EXT,ae[wo]=T.MAX_EXT)}let ve={[Oc]:i.ZERO,[Fc]:i.ONE,[Bc]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[Wc]:i.SRC_ALPHA_SATURATE,[Vc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[zc]:i.ONE_MINUS_SRC_COLOR,[xa]:i.ONE_MINUS_SRC_ALPHA,[Gc]:i.ONE_MINUS_DST_COLOR,[kc]:i.ONE_MINUS_DST_ALPHA,[Xc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(T,W,k,Z,K,J,G,ce,ye,xe){if(T===Fn){d===!0&&(Oe(i.BLEND),d=!1);return}if(d===!1&&(Ve(i.BLEND),d=!0),T!==Dc){if(T!==R||xe!==q){if((v!==Kn||F!==Kn)&&(i.blendEquation(i.FUNC_ADD),v=Kn,F=Kn),xe)switch(T){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}I=null,N=null,O=null,Q=null,E.set(0,0,0),A=0,R=T,q=xe}return}K=K||W,J=J||k,G=G||Z,(W!==v||K!==F)&&(i.blendEquationSeparate(ae[W],ae[K]),v=W,F=K),(k!==I||Z!==N||J!==O||G!==Q)&&(i.blendFuncSeparate(ve[k],ve[Z],ve[J],ve[G]),I=k,N=Z,O=J,Q=G),(ce.equals(E)===!1||ye!==A)&&(i.blendColor(ce.r,ce.g,ce.b,ye),E.copy(ce),A=ye),R=T,q=!1}function Be(T,W){T.side===bn?Oe(i.CULL_FACE):Ve(i.CULL_FACE);let k=T.side===Bt;W&&(k=!k),Pe(k),T.blending===Ci&&T.transparent===!1?oe(Fn):oe(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);let Z=T.stencilWrite;c.setTest(Z),Z&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),X(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(T){ne!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),ne=T)}function b(T){T!==Lc?(Ve(i.CULL_FACE),T!==_e&&(T===Mo?i.cullFace(i.BACK):T===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),_e=T}function y(T){T!==H&&(re&&i.lineWidth(T),H=T)}function X(T,W,k){T?(Ve(i.POLYGON_OFFSET_FILL),(Y!==W||P!==k)&&(i.polygonOffset(W,k),Y=W,P=k)):Oe(i.POLYGON_OFFSET_FILL)}function me(T){T?Ve(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function de(T){T===void 0&&(T=i.TEXTURE0+se-1),pe!==T&&(i.activeTexture(T),pe=T)}function ue(T,W,k){k===void 0&&(pe===null?k=i.TEXTURE0+se-1:k=pe);let Z=Ae[k];Z===void 0&&(Z={type:void 0,texture:void 0},Ae[k]=Z),(Z.type!==T||Z.texture!==W)&&(pe!==k&&(i.activeTexture(k),pe=k),i.bindTexture(T,W||ke[T]),Z.type=T,Z.texture=W)}function Ue(){let T=Ae[pe];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ze(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function _(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function w(T){Ce.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Ce.copy(T))}function L(T){Ne.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Ne.copy(T))}function C(T,W){let k=u.get(W);k===void 0&&(k=new WeakMap,u.set(W,k));let Z=k.get(T);Z===void 0&&(Z=i.getUniformBlockIndex(W,T.name),k.set(T,Z))}function D(T,W){let Z=u.get(W).get(T);h.get(W)!==Z&&(i.uniformBlockBinding(W,Z,T.__bindingPointIndex),h.set(W,Z))}function M(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},pe=null,Ae={},p={},g=new WeakMap,x=[],m=null,d=!1,R=null,v=null,I=null,N=null,F=null,O=null,Q=null,E=new st(0,0,0),A=0,q=!1,ne=null,_e=null,H=null,Y=null,P=null,Ce.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ve,disable:Oe,bindFramebuffer:Xe,drawBuffers:B,useProgram:Se,setBlending:oe,setMaterial:Be,setFlipSided:Pe,setCullFace:b,setLineWidth:y,setPolygonOffset:X,setScissorTest:me,activeTexture:de,bindTexture:ue,unbindTexture:Ue,compressedTexImage2D:we,compressedTexImage3D:Le,texImage2D:Te,texImage3D:_,updateUBOMapping:C,uniformBlockBinding:D,texStorage2D:U,texStorage3D:fe,texSubImage2D:ze,texSubImage3D:Ge,compressedTexSubImage2D:ge,compressedTexSubImage3D:$e,scissor:w,viewport:L,reset:M}}function Pm(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):$s("canvas")}function x(b,y,X,me){let de=1;if((b.width>me||b.height>me)&&(de=me/Math.max(b.width,b.height)),de<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ue=y?Ks:Math.floor,Ue=ue(de*b.width),we=ue(de*b.height);u===void 0&&(u=g(Ue,we));let Le=X?g(Ue,we):u;return Le.width=Ue,Le.height=we,Le.getContext("2d").drawImage(b,0,0,Ue,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ue+"x"+we+")."),Le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ba(b.width)&&ba(b.height)}function d(b){return a?!1:b.wrapS!==on||b.wrapT!==on||b.minFilter!==kt&&b.minFilter!==Kt}function R(b,y){return b.generateMipmaps&&y&&b.minFilter!==kt&&b.minFilter!==Kt}function v(b){i.generateMipmap(b)}function I(b,y,X,me,de=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=y;if(y===i.RED&&(X===i.FLOAT&&(ue=i.R32F),X===i.HALF_FLOAT&&(ue=i.R16F),X===i.UNSIGNED_BYTE&&(ue=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ue=i.R8UI),X===i.UNSIGNED_SHORT&&(ue=i.R16UI),X===i.UNSIGNED_INT&&(ue=i.R32UI),X===i.BYTE&&(ue=i.R8I),X===i.SHORT&&(ue=i.R16I),X===i.INT&&(ue=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ue=i.RG32F),X===i.HALF_FLOAT&&(ue=i.RG16F),X===i.UNSIGNED_BYTE&&(ue=i.RG8)),y===i.RGBA){let Ue=de?qs:ft.getTransfer(me);X===i.FLOAT&&(ue=i.RGBA32F),X===i.HALF_FLOAT&&(ue=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ue=Ue===gt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function N(b,y,X){return R(b,X)===!0||b.isFramebufferTexture&&b.minFilter!==kt&&b.minFilter!==Kt?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function F(b){return b===kt||b===Ao||b===Fr?i.NEAREST:i.LINEAR}function O(b){let y=b.target;y.removeEventListener("dispose",O),E(y),y.isVideoTexture&&h.delete(y)}function Q(b){let y=b.target;y.removeEventListener("dispose",Q),q(y)}function E(b){let y=n.get(b);if(y.__webglInit===void 0)return;let X=b.source,me=f.get(X);if(me){let de=me[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&A(b),Object.keys(me).length===0&&f.delete(X)}n.remove(b)}function A(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let X=b.source,me=f.get(X);delete me[y.__cacheKey],o.memory.textures--}function q(b){let y=b.texture,X=n.get(b),me=n.get(y);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(X.__webglFramebuffer[de]))for(let ue=0;ue<X.__webglFramebuffer[de].length;ue++)i.deleteFramebuffer(X.__webglFramebuffer[de][ue]);else i.deleteFramebuffer(X.__webglFramebuffer[de]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[de])}else{if(Array.isArray(X.__webglFramebuffer))for(let de=0;de<X.__webglFramebuffer.length;de++)i.deleteFramebuffer(X.__webglFramebuffer[de]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let de=0;de<X.__webglColorRenderbuffer.length;de++)X.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[de]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let de=0,ue=y.length;de<ue;de++){let Ue=n.get(y[de]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(y[de])}n.remove(y),n.remove(b)}let ne=0;function _e(){ne=0}function H(){let b=ne;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),ne+=1,b}function Y(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function P(b,y){let X=n.get(b);if(b.isVideoTexture&&Be(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){let me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(X,b,y);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function se(b,y){let X=n.get(b);if(b.version>0&&X.__version!==b.version){Ce(X,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function re(b,y){let X=n.get(b);if(b.version>0&&X.__version!==b.version){Ce(X,b,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function ie(b,y){let X=n.get(b);if(b.version>0&&X.__version!==b.version){Ne(X,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let he={[ts]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},pe={[kt]:i.NEAREST,[Ao]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[ch]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Ae={[Mh]:i.NEVER,[Ah]:i.ALWAYS,[Sh]:i.LESS,[cc]:i.LEQUAL,[bh]:i.EQUAL,[wh]:i.GEQUAL,[Eh]:i.GREATER,[Th]:i.NOTEQUAL};function te(b,y,X){if(X?(i.texParameteri(b,i.TEXTURE_WRAP_S,he[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,he[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,he[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,pe[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,pe[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==on||y.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,F(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,F(y.minFilter)),y.minFilter!==kt&&y.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let me=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===kt||y.minFilter!==Fr&&y.minFilter!==ns||y.type===On&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===is&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function le(b,y){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",O));let me=y.source,de=f.get(me);de===void 0&&(de={},f.set(me,de));let ue=Y(y);if(ue!==b.__cacheKey){de[ue]===void 0&&(de[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),de[ue].usedTimes++;let Ue=de[b.__cacheKey];Ue!==void 0&&(de[b.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(y)),b.__cacheKey=ue,b.__webglTexture=de[ue].texture}return X}function Ce(b,y,X){let me=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(me=i.TEXTURE_3D);let de=le(b,y),ue=y.source;t.bindTexture(me,b.__webglTexture,i.TEXTURE0+X);let Ue=n.get(ue);if(ue.version!==Ue.__version||de===!0){t.activeTexture(i.TEXTURE0+X);let we=ft.getPrimaries(ft.workingColorSpace),Le=y.colorSpace===$t?null:ft.getPrimaries(y.colorSpace),ze=y.colorSpace===$t||we===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let Ge=d(y)&&m(y.image)===!1,ge=x(y.image,Ge,!1,s.maxTextureSize);ge=Pe(y,ge);let $e=m(ge)||a,U=r.convert(y.format,y.colorSpace),fe=r.convert(y.type),Te=I(y.internalFormat,U,fe,y.colorSpace,y.isVideoTexture);te(me,y,$e);let _,w=y.mipmaps,L=a&&y.isVideoTexture!==!0&&Te!==ac,C=Ue.__version===void 0||de===!0,D=N(y,ge,$e);if(y.isDepthTexture)Te=i.DEPTH_COMPONENT,a?y.type===On?Te=i.DEPTH_COMPONENT32F:y.type===Nn?Te=i.DEPTH_COMPONENT24:y.type===jn?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:y.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Qn&&Te===i.DEPTH_COMPONENT&&y.type!==co&&y.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Nn,fe=r.convert(y.type)),y.format===Ui&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,y.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=jn,fe=r.convert(y.type))),C&&(L?t.texStorage2D(i.TEXTURE_2D,1,Te,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Te,ge.width,ge.height,0,U,fe,null));else if(y.isDataTexture)if(w.length>0&&$e){L&&C&&t.texStorage2D(i.TEXTURE_2D,D,Te,w[0].width,w[0].height);for(let M=0,T=w.length;M<T;M++)_=w[M],L?t.texSubImage2D(i.TEXTURE_2D,M,0,0,_.width,_.height,U,fe,_.data):t.texImage2D(i.TEXTURE_2D,M,Te,_.width,_.height,0,U,fe,_.data);y.generateMipmaps=!1}else L?(C&&t.texStorage2D(i.TEXTURE_2D,D,Te,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,U,fe,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Te,ge.width,ge.height,0,U,fe,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,D,Te,w[0].width,w[0].height,ge.depth);for(let M=0,T=w.length;M<T;M++)_=w[M],y.format!==ln?U!==null?L?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,M,0,0,0,_.width,_.height,ge.depth,U,_.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,M,Te,_.width,_.height,ge.depth,0,_.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage3D(i.TEXTURE_2D_ARRAY,M,0,0,0,_.width,_.height,ge.depth,U,fe,_.data):t.texImage3D(i.TEXTURE_2D_ARRAY,M,Te,_.width,_.height,ge.depth,0,U,fe,_.data)}else{L&&C&&t.texStorage2D(i.TEXTURE_2D,D,Te,w[0].width,w[0].height);for(let M=0,T=w.length;M<T;M++)_=w[M],y.format!==ln?U!==null?L?t.compressedTexSubImage2D(i.TEXTURE_2D,M,0,0,_.width,_.height,U,_.data):t.compressedTexImage2D(i.TEXTURE_2D,M,Te,_.width,_.height,0,_.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?t.texSubImage2D(i.TEXTURE_2D,M,0,0,_.width,_.height,U,fe,_.data):t.texImage2D(i.TEXTURE_2D,M,Te,_.width,_.height,0,U,fe,_.data)}else if(y.isDataArrayTexture)L?(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,D,Te,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,U,fe,ge.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ge.width,ge.height,ge.depth,0,U,fe,ge.data);else if(y.isData3DTexture)L?(C&&t.texStorage3D(i.TEXTURE_3D,D,Te,ge.width,ge.height,ge.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,U,fe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ge.width,ge.height,ge.depth,0,U,fe,ge.data);else if(y.isFramebufferTexture){if(C)if(L)t.texStorage2D(i.TEXTURE_2D,D,Te,ge.width,ge.height);else{let M=ge.width,T=ge.height;for(let W=0;W<D;W++)t.texImage2D(i.TEXTURE_2D,W,Te,M,T,0,U,fe,null),M>>=1,T>>=1}}else if(w.length>0&&$e){L&&C&&t.texStorage2D(i.TEXTURE_2D,D,Te,w[0].width,w[0].height);for(let M=0,T=w.length;M<T;M++)_=w[M],L?t.texSubImage2D(i.TEXTURE_2D,M,0,0,U,fe,_):t.texImage2D(i.TEXTURE_2D,M,Te,U,fe,_);y.generateMipmaps=!1}else L?(C&&t.texStorage2D(i.TEXTURE_2D,D,Te,ge.width,ge.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,U,fe,ge)):t.texImage2D(i.TEXTURE_2D,0,Te,U,fe,ge);R(y,$e)&&v(me),Ue.__version=ue.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ne(b,y,X){if(y.image.length!==6)return;let me=le(b,y),de=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+X);let ue=n.get(de);if(de.version!==ue.__version||me===!0){t.activeTexture(i.TEXTURE0+X);let Ue=ft.getPrimaries(ft.workingColorSpace),we=y.colorSpace===$t?null:ft.getPrimaries(y.colorSpace),Le=y.colorSpace===$t||Ue===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ze=y.isCompressedTexture||y.image[0].isCompressedTexture,Ge=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let M=0;M<6;M++)!ze&&!Ge?ge[M]=x(y.image[M],!1,!0,s.maxCubemapSize):ge[M]=Ge?y.image[M].image:y.image[M],ge[M]=Pe(y,ge[M]);let $e=ge[0],U=m($e)||a,fe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),_=I(y.internalFormat,fe,Te,y.colorSpace),w=a&&y.isVideoTexture!==!0,L=ue.__version===void 0||me===!0,C=N(y,$e,U);te(i.TEXTURE_CUBE_MAP,y,U);let D;if(ze){w&&L&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,_,$e.width,$e.height);for(let M=0;M<6;M++){D=ge[M].mipmaps;for(let T=0;T<D.length;T++){let W=D[T];y.format!==ln?fe!==null?w?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T,0,0,W.width,W.height,fe,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T,_,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T,0,0,W.width,W.height,fe,Te,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T,_,W.width,W.height,0,fe,Te,W.data)}}}else{D=y.mipmaps,w&&L&&(D.length>0&&C++,t.texStorage2D(i.TEXTURE_CUBE_MAP,C,_,ge[0].width,ge[0].height));for(let M=0;M<6;M++)if(Ge){w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,ge[M].width,ge[M].height,fe,Te,ge[M].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,_,ge[M].width,ge[M].height,0,fe,Te,ge[M].data);for(let T=0;T<D.length;T++){let k=D[T].image[M].image;w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T+1,0,0,k.width,k.height,fe,Te,k.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T+1,_,k.width,k.height,0,fe,Te,k.data)}}else{w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,fe,Te,ge[M]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,_,fe,Te,ge[M]);for(let T=0;T<D.length;T++){let W=D[T];w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T+1,0,0,fe,Te,W.image[M]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+M,T+1,_,fe,Te,W.image[M])}}}R(y,U)&&v(i.TEXTURE_CUBE_MAP),ue.__version=de.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ie(b,y,X,me,de,ue){let Ue=r.convert(X.format,X.colorSpace),we=r.convert(X.type),Le=I(X.internalFormat,Ue,we,X.colorSpace);if(!n.get(y).__hasExternalTextures){let Ge=Math.max(1,y.width>>ue),ge=Math.max(1,y.height>>ue);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ue,Le,Ge,ge,y.depth,0,Ue,we,null):t.texImage2D(de,ue,Le,Ge,ge,0,Ue,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),oe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,de,n.get(X).__webglTexture,0,ve(y)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,de,n.get(X).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(b,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let me=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||oe(y)){let de=y.depthTexture;de&&de.isDepthTexture&&(de.type===On?me=i.DEPTH_COMPONENT32F:de.type===Nn&&(me=i.DEPTH_COMPONENT24));let ue=ve(y);oe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,me,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,me,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let me=ve(y);X&&oe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,y.width,y.height):oe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let me=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let de=0;de<me.length;de++){let ue=me[de],Ue=r.convert(ue.format,ue.colorSpace),we=r.convert(ue.type),Le=I(ue.internalFormat,Ue,we,ue.colorSpace),ze=ve(y);X&&oe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Le,y.width,y.height):oe(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Le,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),P(y.depthTexture,0);let me=n.get(y.depthTexture).__webglTexture,de=ve(y);if(y.depthTexture.format===Qn)oe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(y.depthTexture.format===Ui)oe(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Oe(b){let y=n.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ve(y.__webglFramebuffer,b)}else if(X){y.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[me]),y.__webglDepthbuffer[me]=i.createRenderbuffer(),ke(y.__webglDepthbuffer[me],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),ke(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(b,y,X){let me=n.get(b);y!==void 0&&Ie(me.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Oe(b)}function B(b){let y=b.texture,X=n.get(b),me=n.get(y);b.addEventListener("dispose",Q),b.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=y.version,o.memory.textures++);let de=b.isWebGLCubeRenderTarget===!0,ue=b.isWebGLMultipleRenderTargets===!0,Ue=m(b)||a;if(de){X.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[we]=[];for(let Le=0;Le<y.mipmaps.length;Le++)X.__webglFramebuffer[we][Le]=i.createFramebuffer()}else X.__webglFramebuffer[we]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let we=0;we<y.mipmaps.length;we++)X.__webglFramebuffer[we]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ue)if(s.drawBuffers){let we=b.texture;for(let Le=0,ze=we.length;Le<ze;Le++){let Ge=n.get(we[Le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&oe(b)===!1){let we=ue?y:[y];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Le=0;Le<we.length;Le++){let ze=we[Le];X.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Le]);let Ge=r.convert(ze.format,ze.colorSpace),ge=r.convert(ze.type),$e=I(ze.internalFormat,Ge,ge,ze.colorSpace,b.isXRRenderTarget===!0),U=ve(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,$e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,X.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),te(i.TEXTURE_CUBE_MAP,y,Ue);for(let we=0;we<6;we++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)Ie(X.__webglFramebuffer[we][Le],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Le);else Ie(X.__webglFramebuffer[we],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);R(y,Ue)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let we=b.texture;for(let Le=0,ze=we.length;Le<ze;Le++){let Ge=we[Le],ge=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),te(i.TEXTURE_2D,Ge,Ue),Ie(X.__webglFramebuffer,b,Ge,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),R(Ge,Ue)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?we=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,me.__webglTexture),te(we,y,Ue),a&&y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)Ie(X.__webglFramebuffer[Le],b,y,i.COLOR_ATTACHMENT0,we,Le);else Ie(X.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,we,0);R(y,Ue)&&v(we),t.unbindTexture()}b.depthBuffer&&Oe(b)}function Se(b){let y=m(b)||a,X=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let me=0,de=X.length;me<de;me++){let ue=X[me];if(R(ue,y)){let Ue=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(ue).__webglTexture;t.bindTexture(Ue,we),v(Ue),t.unbindTexture()}}}function ae(b){if(a&&b.samples>0&&oe(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],X=b.width,me=b.height,de=i.COLOR_BUFFER_BIT,ue=[],Ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(b),Le=b.isWebGLMultipleRenderTargets===!0;if(Le)for(let ze=0;ze<y.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<y.length;ze++){ue.push(i.COLOR_ATTACHMENT0+ze),b.depthBuffer&&ue.push(Ue);let Ge=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(Ge===!1&&(b.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ze]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),Le){let ge=n.get(y[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,X,me,0,0,X,me,de,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let ze=0;ze<y.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);let Ge=n.get(y[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function ve(b){return Math.min(s.maxSamples,b.samples)}function oe(b){let y=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Be(b){let y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Pe(b,y){let X=b.colorSpace,me=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Sa||X!==Tn&&X!==$t&&(ft.getTransfer(X)===gt?a===!1?e.has("EXT_sRGB")===!0&&me===ln?(b.format=Sa,b.minFilter=Kt,b.generateMipmaps=!1):y=js.sRGBToLinear(y):(me!==ln||de!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}this.allocateTextureUnit=H,this.resetTextureUnits=_e,this.setTexture2D=P,this.setTexture2DArray=se,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=Xe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=oe}function Lm(i,e,t){let n=t.isWebGL2;function s(r,o=$t){let a,l=ft.getTransfer(o);if(r===zn)return i.UNSIGNED_BYTE;if(r===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hh)return i.BYTE;if(r===uh)return i.SHORT;if(r===co)return i.UNSIGNED_SHORT;if(r===ec)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===is)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===dh)return i.ALPHA;if(r===ln)return i.RGBA;if(r===fh)return i.LUMINANCE;if(r===ph)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Ui)return i.DEPTH_STENCIL;if(r===Sa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===mh)return i.RED;if(r===ic)return i.RED_INTEGER;if(r===gh)return i.RG;if(r===sc)return i.RG_INTEGER;if(r===rc)return i.RGBA_INTEGER;if(r===Br||r===zr||r===Hr||r===kr)if(l===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ro||r===Co||r===Po||r===Lo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ro)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Co)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Po)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ac)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Io||r===Do)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Io)return l===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Do)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uo||r===No||r===Oo||r===Fo||r===Bo||r===zo||r===Ho||r===ko||r===Vo||r===Go||r===Wo||r===Xo||r===qo||r===Yo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===No)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ho)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ko)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Go)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yo)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vr||r===Zo||r===Jo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vr)return l===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_h||r===Ko||r===$o||r===jo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ko)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$o)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Oa=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Im={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fa=class extends fn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=t.getContextAttributes(),m=null,d=null,R=[],v=[],I=new Me,N=null,F=new Ft;F.layers.enable(1),F.viewport=new xt;let O=new Ft;O.layers.enable(2),O.viewport=new xt;let Q=[F,O],E=new Oa;E.layers.enable(1),E.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=R[te];return le===void 0&&(le=new $i,R[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=R[te];return le===void 0&&(le=new $i,R[te]=le),le.getGripSpace()},this.getHand=function(te){let le=R[te];return le===void 0&&(le=new $i,R[te]=le),le.getHandSpace()};function ne(te){let le=v.indexOf(te.inputSource);if(le===-1)return;let Ce=R[le];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||o),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function _e(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",_e),s.removeEventListener("inputsourceschange",H);for(let te=0;te<R.length;te++){let le=v[te];le!==null&&(v[te]=null,R[te].disconnect(le))}A=null,q=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",_e),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new wn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,Ce=null,Ne=null;x.depth&&(Ne=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Ui:Qn,Ce=x.stencil?jn:Nn);let Ie={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new wn(f.textureWidth,f.textureHeight,{format:ln,type:zn,depthTexture:new or(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ke=e.properties.get(d);ke.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(te){for(let le=0;le<te.removed.length;le++){let Ce=te.removed[le],Ne=v.indexOf(Ce);Ne>=0&&(v[Ne]=null,R[Ne].disconnect(Ce))}for(let le=0;le<te.added.length;le++){let Ce=te.added[le],Ne=v.indexOf(Ce);if(Ne===-1){for(let ke=0;ke<R.length;ke++)if(ke>=v.length){v.push(Ce),Ne=ke;break}else if(v[ke]===null){v[ke]=Ce,Ne=ke;break}if(Ne===-1)break}let Ie=R[Ne];Ie&&Ie.connect(Ce)}}let Y=new z,P=new z;function se(te,le,Ce){Y.setFromMatrixPosition(le.matrixWorld),P.setFromMatrixPosition(Ce.matrixWorld);let Ne=Y.distanceTo(P),Ie=le.projectionMatrix.elements,ke=Ce.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),Oe=Ie[14]/(Ie[10]+1),Xe=(Ie[9]+1)/Ie[5],B=(Ie[9]-1)/Ie[5],Se=(Ie[8]-1)/Ie[0],ae=(ke[8]+1)/ke[0],ve=Ve*Se,oe=Ve*ae,Be=Ne/(-Se+ae),Pe=Be*-Se;le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Pe),te.translateZ(Be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let b=Ve+Be,y=Oe+Be,X=ve-Pe,me=oe+(Ne-Pe),de=Xe*Oe/y*b,ue=B*Oe/y*b;te.projectionMatrix.makePerspective(X,me,de,ue,b,y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function re(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;E.near=O.near=F.near=te.near,E.far=O.far=F.far=te.far,(A!==E.near||q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,q=E.far);let le=te.parent,Ce=E.cameras;re(E,le);for(let Ne=0;Ne<Ce.length;Ne++)re(Ce[Ne],le);Ce.length===2?se(E,F,O):E.projectionMatrix.copy(F.projectionMatrix),ie(te,E,le)};function ie(te,le,Ce){Ce===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ss*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)};let he=null;function pe(te,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Ne=!1;Ce.length!==E.cameras.length&&(E.cameras.length=0,Ne=!0);for(let Ie=0;Ie<Ce.length;Ie++){let ke=Ce[Ie],Ve=null;if(p!==null)Ve=p.getViewport(ke);else{let Xe=u.getViewSubImage(f,ke);Ve=Xe.viewport,Ie===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Oe=Q[Ie];Oe===void 0&&(Oe=new Ft,Oe.layers.enable(Ie),Oe.viewport=new xt,Q[Ie]=Oe),Oe.matrix.fromArray(ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ie===0&&(E.matrix.copy(Oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ne===!0&&E.cameras.push(Oe)}}for(let Ce=0;Ce<R.length;Ce++){let Ne=v[Ce],Ie=R[Ce];Ne!==null&&Ie!==void 0&&Ie.update(Ne,le,c||o)}he&&he(te,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let Ae=new pc;Ae.setAnimationLoop(pe),this.setAnimationLoop=function(te){he=te},this.dispose=function(){}}};function Dm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,v,I){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,I)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let R=e.get(d).envMap;if(R&&(m.envMap.value=R,m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let R=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Um(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(R,v){let I=v.program;n.uniformBlockBinding(R,I)}function c(R,v){let I=s[R.id];I===void 0&&(g(R),I=h(R),s[R.id]=I,R.addEventListener("dispose",m));let N=v.program;n.updateUBOMapping(R,N);let F=e.render.frame;r[R.id]!==F&&(f(R),r[R.id]=F)}function h(R){let v=u();R.__bindingPointIndex=v;let I=i.createBuffer(),N=R.__size,F=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,N,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,I),I}function u(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let v=s[R.id],I=R.uniforms,N=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let F=0,O=I.length;F<O;F++){let Q=Array.isArray(I[F])?I[F]:[I[F]];for(let E=0,A=Q.length;E<A;E++){let q=Q[E];if(p(q,F,E,N)===!0){let ne=q.__offset,_e=Array.isArray(q.value)?q.value:[q.value],H=0;for(let Y=0;Y<_e.length;Y++){let P=_e[Y],se=x(P);typeof P=="number"||typeof P=="boolean"?(q.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,ne+H,q.__data)):P.isMatrix3?(q.__data[0]=P.elements[0],q.__data[1]=P.elements[1],q.__data[2]=P.elements[2],q.__data[3]=0,q.__data[4]=P.elements[3],q.__data[5]=P.elements[4],q.__data[6]=P.elements[5],q.__data[7]=0,q.__data[8]=P.elements[6],q.__data[9]=P.elements[7],q.__data[10]=P.elements[8],q.__data[11]=0):(P.toArray(q.__data,H),H+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,v,I,N){let F=R.value,O=v+"_"+I;if(N[O]===void 0)return typeof F=="number"||typeof F=="boolean"?N[O]=F:N[O]=F.clone(),!0;{let Q=N[O];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return N[O]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function g(R){let v=R.uniforms,I=0,N=16;for(let O=0,Q=v.length;O<Q;O++){let E=Array.isArray(v[O])?v[O]:[v[O]];for(let A=0,q=E.length;A<q;A++){let ne=E[A],_e=Array.isArray(ne.value)?ne.value:[ne.value];for(let H=0,Y=_e.length;H<Y;H++){let P=_e[H],se=x(P),re=I%N;re!==0&&N-re<se.boundary&&(I+=N-re),ne.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=I,I+=se.storage}}}let F=I%N;return F>0&&(I+=N-F),R.__size=I,R.__cache={},this}function x(R){let v={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(v.boundary=4,v.storage=4):R.isVector2?(v.boundary=8,v.storage=8):R.isVector3||R.isColor?(v.boundary=16,v.storage=12):R.isVector4?(v.boundary=16,v.storage=16):R.isMatrix3?(v.boundary=48,v.storage=48):R.isMatrix4?(v.boundary=64,v.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),v}function m(R){let v=R.target;v.removeEventListener("dispose",m);let I=o.indexOf(v.__bindingPointIndex);o.splice(I,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ls=class{constructor(e={}){let{canvas:t=Vh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let v=this,I=!1,N=0,F=0,O=null,Q=-1,E=null,A=new xt,q=new xt,ne=null,_e=new st(0),H=0,Y=t.width,P=t.height,se=1,re=null,ie=null,he=new xt(0,0,Y,P),pe=new xt(0,0,Y,P),Ae=!1,te=new os,le=!1,Ce=!1,Ne=null,Ie=new wt,ke=new Me,Ve=new z,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return O===null?se:1}let B=n;function Se(S,V){for(let j=0;j<S.length;j++){let ee=S[j],$=t.getContext(ee,V);if($!==null)return $}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",M,!1),t.addEventListener("webglcontextrestored",T,!1),t.addEventListener("webglcontextcreationerror",W,!1),B===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),B=Se(V,S),B===null)throw Se(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ae,ve,oe,Be,Pe,b,y,X,me,de,ue,Ue,we,Le,ze,Ge,ge,$e,U,fe,Te,_,w,L;function C(){ae=new Qf(B),ve=new Yf(B,ae,e),ae.init(ve),_=new Lm(B,ae,ve),oe=new Cm(B,ae,ve),Be=new np(B),Pe=new _m,b=new Pm(B,ae,oe,Pe,ve,_,Be),y=new Jf(v),X=new jf(v),me=new cu(B,ve),w=new Xf(B,ae,me,ve),de=new ep(B,me,Be,w),ue=new ap(B,de,me,Be),U=new rp(B,ve,b),Ge=new Zf(Pe),Ue=new gm(v,y,X,ae,ve,w,Ge),we=new Dm(v,Pe),Le=new vm,ze=new Tm(ae,ve),$e=new Wf(v,y,X,oe,ue,f,l),ge=new Rm(v,ue,ve),L=new Um(B,Be,ve,oe),fe=new qf(B,ae,Be,ve),Te=new tp(B,ae,Be,ve),Be.programs=Ue.programs,v.capabilities=ve,v.extensions=ae,v.properties=Pe,v.renderLists=Le,v.shadowMap=ge,v.state=oe,v.info=Be}C();let D=new Fa(v,B);this.xr=D,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(S){S!==void 0&&(se=S,this.setSize(Y,P,!1))},this.getSize=function(S){return S.set(Y,P)},this.setSize=function(S,V,j=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,P=V,t.width=Math.floor(S*se),t.height=Math.floor(V*se),j===!0&&(t.style.width=S+"px",t.style.height=V+"px"),this.setViewport(0,0,S,V)},this.getDrawingBufferSize=function(S){return S.set(Y*se,P*se).floor()},this.setDrawingBufferSize=function(S,V,j){Y=S,P=V,se=j,t.width=Math.floor(S*j),t.height=Math.floor(V*j),this.setViewport(0,0,S,V)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(he)},this.setViewport=function(S,V,j,ee){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,V,j,ee),oe.viewport(A.copy(he).multiplyScalar(se).floor())},this.getScissor=function(S){return S.copy(pe)},this.setScissor=function(S,V,j,ee){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,V,j,ee),oe.scissor(q.copy(pe).multiplyScalar(se).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(S){oe.setScissorTest(Ae=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(S=!0,V=!0,j=!0){let ee=0;if(S){let $=!1;if(O!==null){let De=O.texture.format;$=De===rc||De===sc||De===ic}if($){let De=O.texture.type,He=De===zn||De===Nn||De===co||De===jn||De===tc||De===nc,We=$e.getClearColor(),Ze=$e.getClearAlpha(),tt=We.r,Ke=We.g,je=We.b;He?(p[0]=tt,p[1]=Ke,p[2]=je,p[3]=Ze,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=tt,g[1]=Ke,g[2]=je,g[3]=Ze,B.clearBufferiv(B.COLOR,0,g))}else ee|=B.COLOR_BUFFER_BIT}V&&(ee|=B.DEPTH_BUFFER_BIT),j&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M,!1),t.removeEventListener("webglcontextrestored",T,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Le.dispose(),ze.dispose(),Pe.dispose(),y.dispose(),X.dispose(),ue.dispose(),w.dispose(),L.dispose(),Ue.dispose(),D.dispose(),D.removeEventListener("sessionstart",ye),D.removeEventListener("sessionend",xe),Ne&&(Ne.dispose(),Ne=null),Ee.stop()};function M(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=Be.autoReset,V=ge.enabled,j=ge.autoUpdate,ee=ge.needsUpdate,$=ge.type;C(),Be.autoReset=S,ge.enabled=V,ge.autoUpdate=j,ge.needsUpdate=ee,ge.type=$}function W(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function k(S){let V=S.target;V.removeEventListener("dispose",k),Z(V)}function Z(S){K(S),Pe.remove(S)}function K(S){let V=Pe.get(S).programs;V!==void 0&&(V.forEach(function(j){Ue.releaseProgram(j)}),S.isShaderMaterial&&Ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,V,j,ee,$,De){V===null&&(V=Oe);let He=$.isMesh&&$.matrixWorld.determinant()<0,We=Qe(S,V,j,ee,$);oe.setMaterial(ee,He);let Ze=j.index,tt=1;if(ee.wireframe===!0){if(Ze=de.getWireframeAttribute(j),Ze===void 0)return;tt=2}let Ke=j.drawRange,je=j.attributes.position,bt=Ke.start*tt,Wt=(Ke.start+Ke.count)*tt;De!==null&&(bt=Math.max(bt,De.start*tt),Wt=Math.min(Wt,(De.start+De.count)*tt)),Ze!==null?(bt=Math.max(bt,0),Wt=Math.min(Wt,Ze.count)):je!=null&&(bt=Math.max(bt,0),Wt=Math.min(Wt,je.count));let Pt=Wt-bt;if(Pt<0||Pt===1/0)return;w.setup($,ee,We,j,Ze);let gn,vt=fe;if(Ze!==null&&(gn=me.get(Ze),vt=Te,vt.setIndex(gn)),$.isMesh)ee.wireframe===!0?(oe.setLineWidth(ee.wireframeLinewidth*Xe()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if($.isLine){let nt=ee.linewidth;nt===void 0&&(nt=1),oe.setLineWidth(nt*Xe()),$.isLineSegments?vt.setMode(B.LINES):$.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else $.isPoints?vt.setMode(B.POINTS):$.isSprite&&vt.setMode(B.TRIANGLES);if($.isBatchedMesh)vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)vt.renderInstances(bt,Pt,$.count);else if(j.isInstancedBufferGeometry){let nt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dr=Math.min(j.instanceCount,nt);vt.renderInstances(bt,Pt,Dr)}else vt.render(bt,Pt)};function J(S,V,j){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,ct(S,V,j),S.side=Hn,S.needsUpdate=!0,ct(S,V,j),S.side=bn):ct(S,V,j)}this.compile=function(S,V,j=null){j===null&&(j=S),m=ze.get(j),m.init(),R.push(m),j.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),S!==j&&S.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(v._useLegacyLights);let ee=new Set;return S.traverse(function($){let De=$.material;if(De)if(Array.isArray(De))for(let He=0;He<De.length;He++){let We=De[He];J(We,j,$),ee.add(We)}else J(De,j,$),ee.add(De)}),R.pop(),m=null,ee},this.compileAsync=function(S,V,j=null){let ee=this.compile(S,V,j);return new Promise($=>{function De(){if(ee.forEach(function(He){Pe.get(He).currentProgram.isReady()&&ee.delete(He)}),ee.size===0){$(S);return}setTimeout(De,10)}ae.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let G=null;function ce(S){G&&G(S)}function ye(){Ee.stop()}function xe(){Ee.start()}let Ee=new pc;Ee.setAnimationLoop(ce),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(S){G=S,D.setAnimationLoop(S),S===null?Ee.stop():Ee.start()},D.addEventListener("sessionstart",ye),D.addEventListener("sessionend",xe),this.render=function(S,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(V),V=D.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,V,O),m=ze.get(S,R.length),m.init(),R.push(m),Ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(Ie),Ce=this.localClippingEnabled,le=Ge.init(this.clippingPlanes,Ce),x=Le.get(S,d.length),x.init(),d.push(x),be(S,V,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(re,ie),this.info.render.frame++,le===!0&&Ge.beginShadows();let j=m.state.shadowsArray;if(ge.render(j,S,V),le===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(x,S),m.setupLights(v._useLegacyLights),V.isArrayCamera){let ee=V.cameras;for(let $=0,De=ee.length;$<De;$++){let He=ee[$];Ye(x,S,He,He.viewport)}}else Ye(x,S,V);O!==null&&(b.updateMultisampleRenderTarget(O),b.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(v,S,V),w.resetDefaultState(),Q=-1,E=null,R.pop(),R.length>0?m=R[R.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function be(S,V,j,ee){if(S.visible===!1)return;if(S.layers.test(V.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(V);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){ee&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);let He=ue.update(S),We=S.material;We.visible&&x.push(S,He,We,j,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){let He=ue.update(S),We=S.material;if(ee&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ve.copy(He.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(We)){let Ze=He.groups;for(let tt=0,Ke=Ze.length;tt<Ke;tt++){let je=Ze[tt],bt=We[je.materialIndex];bt&&bt.visible&&x.push(S,He,bt,j,Ve.z,je)}}else We.visible&&x.push(S,He,We,j,Ve.z,null)}}let De=S.children;for(let He=0,We=De.length;He<We;He++)be(De[He],V,j,ee)}function Ye(S,V,j,ee){let $=S.opaque,De=S.transmissive,He=S.transparent;m.setupLightsView(j),le===!0&&Ge.setGlobalState(v.clippingPlanes,j),De.length>0&&ut($,De,V,j),ee&&oe.viewport(A.copy(ee)),$.length>0&&Fe($,V,j),De.length>0&&Fe(De,V,j),He.length>0&&Fe(He,V,j),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function ut(S,V,j,ee){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let De=ve.isWebGL2;Ne===null&&(Ne=new wn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?is:zn,minFilter:ns,samples:De?4:0})),v.getDrawingBufferSize(ke),De?Ne.setSize(ke.x,ke.y):Ne.setSize(Ks(ke.x),Ks(ke.y));let He=v.getRenderTarget();v.setRenderTarget(Ne),v.getClearColor(_e),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear();let We=v.toneMapping;v.toneMapping=Bn,Fe(S,j,ee),b.updateMultisampleRenderTarget(Ne),b.updateRenderTargetMipmap(Ne);let Ze=!1;for(let tt=0,Ke=V.length;tt<Ke;tt++){let je=V[tt],bt=je.object,Wt=je.geometry,Pt=je.material,gn=je.group;if(Pt.side===bn&&bt.layers.test(ee.layers)){let vt=Pt.side;Pt.side=Bt,Pt.needsUpdate=!0,dt(bt,j,ee,Wt,Pt,gn),Pt.side=vt,Pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(b.updateMultisampleRenderTarget(Ne),b.updateRenderTargetMipmap(Ne)),v.setRenderTarget(He),v.setClearColor(_e,H),v.toneMapping=We}function Fe(S,V,j){let ee=V.isScene===!0?V.overrideMaterial:null;for(let $=0,De=S.length;$<De;$++){let He=S[$],We=He.object,Ze=He.geometry,tt=ee===null?He.material:ee,Ke=He.group;We.layers.test(j.layers)&&dt(We,V,j,Ze,tt,Ke)}}function dt(S,V,j,ee,$,De){S.onBeforeRender(v,V,j,ee,$,De),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(v,V,j,ee,S,De),$.transparent===!0&&$.side===bn&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,v.renderBufferDirect(j,V,ee,$,S,De),$.side=Hn,$.needsUpdate=!0,v.renderBufferDirect(j,V,ee,$,S,De),$.side=bn):v.renderBufferDirect(j,V,ee,$,S,De),S.onAfterRender(v,V,j,ee,$,De)}function ct(S,V,j){V.isScene!==!0&&(V=Oe);let ee=Pe.get(S),$=m.state.lights,De=m.state.shadowsArray,He=$.state.version,We=Ue.getParameters(S,$.state,De,V,j),Ze=Ue.getProgramCacheKey(We),tt=ee.programs;ee.environment=S.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(S.isMeshStandardMaterial?X:y).get(S.envMap||ee.environment),tt===void 0&&(S.addEventListener("dispose",k),tt=new Map,ee.programs=tt);let Ke=tt.get(Ze);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===He)return ot(S,We),Ke}else We.uniforms=Ue.getUniforms(S),S.onBuild(j,We,v),S.onBeforeCompile(We,v),Ke=Ue.acquireProgram(We,Ze),tt.set(Ze,Ke),ee.uniforms=We.uniforms;let je=ee.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(je.clippingPlanes=Ge.uniform),ot(S,We),ee.needsLights=pt(S),ee.lightsStateVersion=He,ee.needsLights&&(je.ambientLightColor.value=$.state.ambient,je.lightProbe.value=$.state.probe,je.directionalLights.value=$.state.directional,je.directionalLightShadows.value=$.state.directionalShadow,je.spotLights.value=$.state.spot,je.spotLightShadows.value=$.state.spotShadow,je.rectAreaLights.value=$.state.rectArea,je.ltc_1.value=$.state.rectAreaLTC1,je.ltc_2.value=$.state.rectAreaLTC2,je.pointLights.value=$.state.point,je.pointLightShadows.value=$.state.pointShadow,je.hemisphereLights.value=$.state.hemi,je.directionalShadowMap.value=$.state.directionalShadowMap,je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,je.spotShadowMap.value=$.state.spotShadowMap,je.spotLightMatrix.value=$.state.spotLightMatrix,je.spotLightMap.value=$.state.spotLightMap,je.pointShadowMap.value=$.state.pointShadowMap,je.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function Dt(S){if(S.uniformsList===null){let V=S.currentProgram.getUniforms();S.uniformsList=Li.seqWithValue(V.seq,S.uniforms)}return S.uniformsList}function ot(S,V){let j=Pe.get(S);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Qe(S,V,j,ee,$){V.isScene!==!0&&(V=Oe),b.resetTextureUnits();let De=V.fog,He=ee.isMeshStandardMaterial?V.environment:null,We=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Tn,Ze=(ee.isMeshStandardMaterial?X:y).get(ee.envMap||He),tt=ee.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Wt=!!j.morphAttributes.color,Pt=Bn;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pt=v.toneMapping);let gn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,vt=gn!==void 0?gn.length:0,nt=Pe.get(ee),Dr=m.state.lights;if(le===!0&&(Ce===!0||S!==E)){let Zt=S===E&&ee.id===Q;Ge.setState(ee,S,Zt)}let St=!1;ee.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Dr.state.version||nt.outputColorSpace!==We||$.isBatchedMesh&&nt.batching===!1||!$.isBatchedMesh&&nt.batching===!0||$.isInstancedMesh&&nt.instancing===!1||!$.isInstancedMesh&&nt.instancing===!0||$.isSkinnedMesh&&nt.skinning===!1||!$.isSkinnedMesh&&nt.skinning===!0||$.isInstancedMesh&&nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&nt.instancingColor===!1&&$.instanceColor!==null||nt.envMap!==Ze||ee.fog===!0&&nt.fog!==De||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ge.numPlanes||nt.numIntersection!==Ge.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==Ke||nt.morphTargets!==je||nt.morphNormals!==bt||nt.morphColors!==Wt||nt.toneMapping!==Pt||ve.isWebGL2===!0&&nt.morphTargetsCount!==vt)&&(St=!0):(St=!0,nt.__version=ee.version);let Gn=nt.currentProgram;St===!0&&(Gn=ct(ee,V,$));let vo=!1,Vi=!1,Ur=!1,Ut=Gn.getUniforms(),Wn=nt.uniforms;if(oe.useProgram(Gn.program)&&(vo=!0,Vi=!0,Ur=!0),ee.id!==Q&&(Q=ee.id,Vi=!0),vo||E!==S){Ut.setValue(B,"projectionMatrix",S.projectionMatrix),Ut.setValue(B,"viewMatrix",S.matrixWorldInverse);let Zt=Ut.map.cameraPosition;Zt!==void 0&&Zt.setValue(B,Ve.setFromMatrixPosition(S.matrixWorld)),ve.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Vi=!0,Ur=!0)}if($.isSkinnedMesh){Ut.setOptional(B,$,"bindMatrix"),Ut.setOptional(B,$,"bindMatrixInverse");let Zt=$.skeleton;Zt&&(ve.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Ut.setValue(B,"boneTexture",Zt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ut.setOptional(B,$,"batchingTexture"),Ut.setValue(B,"batchingTexture",$._matricesTexture,b));let Nr=j.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0&&ve.isWebGL2===!0)&&U.update($,j,Gn),(Vi||nt.receiveShadow!==$.receiveShadow)&&(nt.receiveShadow=$.receiveShadow,Ut.setValue(B,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Wn.envMap.value=Ze,Wn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Vi&&(Ut.setValue(B,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&at(Wn,Ur),De&&ee.fog===!0&&we.refreshFogUniforms(Wn,De),we.refreshMaterialUniforms(Wn,ee,se,P,Ne),Li.upload(B,Dt(nt),Wn,b)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Li.upload(B,Dt(nt),Wn,b),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ut.setValue(B,"center",$.center),Ut.setValue(B,"modelViewMatrix",$.modelViewMatrix),Ut.setValue(B,"normalMatrix",$.normalMatrix),Ut.setValue(B,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Zt=ee.uniformsGroups;for(let Or=0,Pc=Zt.length;Or<Pc;Or++)if(ve.isWebGL2){let yo=Zt[Or];L.update(yo,Gn),L.bind(yo,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function at(S,V){S.ambientLightColor.needsUpdate=V,S.lightProbe.needsUpdate=V,S.directionalLights.needsUpdate=V,S.directionalLightShadows.needsUpdate=V,S.pointLights.needsUpdate=V,S.pointLightShadows.needsUpdate=V,S.spotLights.needsUpdate=V,S.spotLightShadows.needsUpdate=V,S.rectAreaLights.needsUpdate=V,S.hemisphereLights.needsUpdate=V}function pt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,V,j){Pe.get(S.texture).__webglTexture=V,Pe.get(S.depthTexture).__webglTexture=j;let ee=Pe.get(S);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=j===void 0,ee.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,V){let j=Pe.get(S);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(S,V=0,j=0){O=S,N=V,F=j;let ee=!0,$=null,De=!1,He=!1;if(S){let Ze=Pe.get(S);Ze.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1):Ze.__webglFramebuffer===void 0?b.setupRenderTarget(S):Ze.__hasExternalTextures&&b.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);let tt=S.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);let Ke=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?$=Ke[V][j]:$=Ke[V],De=!0):ve.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?$=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ke)?$=Ke[j]:$=Ke,A.copy(S.viewport),q.copy(S.scissor),ne=S.scissorTest}else A.copy(he).multiplyScalar(se).floor(),q.copy(pe).multiplyScalar(se).floor(),ne=Ae;if(oe.bindFramebuffer(B.FRAMEBUFFER,$)&&ve.drawBuffers&&ee&&oe.drawBuffers(S,$),oe.viewport(A),oe.scissor(q),oe.setScissorTest(ne),De){let Ze=Pe.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ze.__webglTexture,j)}else if(He){let Ze=Pe.get(S.texture),tt=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ze.__webglTexture,j||0,tt)}Q=-1},this.readRenderTargetPixels=function(S,V,j,ee,$,De,He){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){oe.bindFramebuffer(B.FRAMEBUFFER,We);try{let Ze=S.texture,tt=Ze.format,Ke=Ze.type;if(tt!==ln&&_.convert(tt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let je=Ke===is&&(ae.has("EXT_color_buffer_half_float")||ve.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ke!==zn&&_.convert(Ke)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===On&&(ve.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=S.width-ee&&j>=0&&j<=S.height-$&&B.readPixels(V,j,ee,$,_.convert(tt),_.convert(Ke),De)}finally{let Ze=O!==null?Pe.get(O).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(S,V,j=0){let ee=Math.pow(2,-j),$=Math.floor(V.image.width*ee),De=Math.floor(V.image.height*ee);b.setTexture2D(V,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,S.x,S.y,$,De),oe.unbindTexture()},this.copyTextureToTexture=function(S,V,j,ee=0){let $=V.image.width,De=V.image.height,He=_.convert(j.format),We=_.convert(j.type);b.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ee,S.x,S.y,$,De,He,We,V.image.data):V.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ee,S.x,S.y,V.mipmaps[0].width,V.mipmaps[0].height,He,V.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ee,S.x,S.y,He,We,V.image),ee===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(S,V,j,ee,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let De=S.max.x-S.min.x+1,He=S.max.y-S.min.y+1,We=S.max.z-S.min.z+1,Ze=_.convert(ee.format),tt=_.convert(ee.type),Ke;if(ee.isData3DTexture)b.setTexture3D(ee,0),Ke=B.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)b.setTexture2DArray(ee,0),Ke=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment);let je=B.getParameter(B.UNPACK_ROW_LENGTH),bt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Wt=B.getParameter(B.UNPACK_SKIP_PIXELS),Pt=B.getParameter(B.UNPACK_SKIP_ROWS),gn=B.getParameter(B.UNPACK_SKIP_IMAGES),vt=j.isCompressedTexture?j.mipmaps[$]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Ke,$,V.x,V.y,V.z,De,He,We,Ze,tt,vt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ke,$,V.x,V.y,V.z,De,He,We,Ze,vt.data)):B.texSubImage3D(Ke,$,V.x,V.y,V.z,De,He,We,Ze,tt,vt),B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,gn),$===0&&ee.generateMipmaps&&B.generateMipmap(Ke),oe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),oe.unbindTexture()},this.resetState=function(){N=0,F=0,O=null,oe.reset(),w.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ho?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Tr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?ei:oc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?Tt:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ba=class extends ls{};Ba.prototype.isWebGL1Renderer=!0;var Bi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var lr=class extends Qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Me:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new z,s=[],r=[],o=[],a=new z,l=new wt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(It(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(It(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cs=class extends nn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Me,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},za=class extends cs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function po(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var zs=new z,da=new po,fa=new po,pa=new po,Ha=class extends nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zs.subVectors(s[0],s[1]).add(s[0]),c=zs);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),da.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),fa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),pa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),fa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),pa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gl(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Nm(i,e){let t=1-i;return t*t*e}function Om(i,e){return 2*(1-i)*i*e}function Fm(i,e){return i*i*e}function ji(i,e,t,n){return Nm(i,e)+Om(i,t)+Fm(i,n)}function Bm(i,e){let t=1-i;return t*t*t*e}function zm(i,e){let t=1-i;return 3*t*t*i*e}function Hm(i,e){return 3*(1-i)*i*i*e}function km(i,e){return i*i*i*e}function Qi(i,e,t,n,s){return Bm(i,e)+zm(i,t)+Hm(i,n)+km(i,s)}var cr=class extends nn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(e,s.x,r.x,o.x,a.x),Qi(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends nn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qi(e,s.x,r.x,o.x,a.x),Qi(e,s.y,r.y,o.y,a.y),Qi(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hr=class extends nn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends nn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends nn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ji(e,s.x,r.x,o.x),ji(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends nn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ji(e,s.x,r.x,o.x),ji(e,s.y,r.y,o.y),ji(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gl(a,l.x,c.x,h.x,u.x),Gl(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Wa=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:Ha,CubicBezierCurve:cr,CubicBezierCurve3:ka,EllipseCurve:cs,LineCurve:hr,LineCurve3:Va,QuadraticBezierCurve:ur,QuadraticBezierCurve3:Ga,SplineCurve:dr}),Xa=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wa[s.type]().fromJSON(s))}return this}},fr=class extends Xa{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new hr(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ur(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new cr(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new dr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new cs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Gt=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,x=[],m=n/2,d=0;R(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(p,2));function R(){let I=new z,N=new z,F=0,O=(t-e)/n;for(let Q=0;Q<=r;Q++){let E=[],A=Q/r,q=A*(t-e)+e;for(let ne=0;ne<=s;ne++){let _e=ne/s,H=_e*l+a,Y=Math.sin(H),P=Math.cos(H);N.x=q*Y,N.y=-A*n+m,N.z=q*P,u.push(N.x,N.y,N.z),I.set(Y,O,P).normalize(),f.push(I.x,I.y,I.z),p.push(_e,1-A),E.push(g++)}x.push(E)}for(let Q=0;Q<s;Q++)for(let E=0;E<r;E++){let A=x[E][Q],q=x[E+1][Q],ne=x[E+1][Q+1],_e=x[E][Q+1];h.push(A,q,_e),h.push(q,ne,_e),F+=6}c.addGroup(d,F,0),d+=F}function v(I){let N=g,F=new Me,O=new z,Q=0,E=I===!0?e:t,A=I===!0?1:-1;for(let ne=1;ne<=s;ne++)u.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;let q=g;for(let ne=0;ne<=s;ne++){let H=ne/s*l+a,Y=Math.cos(H),P=Math.sin(H);O.x=E*P,O.y=m*A,O.z=E*Y,u.push(O.x,O.y,O.z),f.push(0,A,0),F.x=Y*.5+.5,F.y=P*.5*A+.5,p.push(F.x,F.y),g++}for(let ne=0;ne<s;ne++){let _e=N+ne,H=q+ne;I===!0?h.push(H,H+1,_e):h.push(H+1,H,_e),Q+=3}c.addGroup(d,Q,I===!0?1:2),d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hs=class extends fr{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new fr().fromJSON(s))}return this}},Vm={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yc(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=Ym(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return us(r,o,t,a,l,p,0),o}};function yc(i,e,t,n,s){let r,o;if(s===sg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Wl(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wl(r,i[r],i[r+1],o);return o&&Ar(o,o.next)&&(fs(o),o=o.next),o}function ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ar(t,t.next)||yt(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function us(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Wm(i,n,s,r):Gm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xm(ni(i),e,t),us(i,e,t,n,s,r,2)):o===2&&qm(i,e,t,n,s,r):us(ni(i),e,t,n,s,r,1);break}}}function Gm(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&Ri(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=qa(p,g,e,t,n),R=qa(x,m,e,t,n),v=i.prevZ,I=i.nextZ;for(;v&&v.z>=d&&I&&I.z<=R;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ri(a,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,I.x>=p&&I.x<=x&&I.y>=g&&I.y<=m&&I!==s&&I!==o&&Ri(a,h,l,u,c,f,I.x,I.y)&&yt(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ri(a,h,l,u,c,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;I&&I.z<=R;){if(I.x>=p&&I.x<=x&&I.y>=g&&I.y<=m&&I!==s&&I!==o&&Ri(a,h,l,u,c,f,I.x,I.y)&&yt(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function Xm(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ar(s,r)&&Mc(s,n,n.next,r)&&ds(s,r)&&ds(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fs(n),fs(n.next),n=i=r),n=n.next}while(n!==i);return ni(n)}function qm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let l=Sc(o,a);o=ni(o,o.next),l=ni(l,l.next),us(o,e,t,n,s,r,0),us(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ym(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=yc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(eg(c));for(s.sort(Zm),r=0;r<s.length;r++)t=Jm(s[r],t);return t}function Zm(i,e){return i.x-e.x}function Jm(i,e){let t=Km(i,e);if(!t)return e;let n=Sc(t,i);return ni(n,n.next),ni(t,t.next)}function Km(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ri(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ds(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&$m(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function $m(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function jm(i,e,t,n){let s=i;do s.z===0&&(s.z=qa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qm(s)}function Qm(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function qa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function eg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ri(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function tg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ng(i,e)&&(ds(i,e)&&ds(e,i)&&ig(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Ar(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ar(i,e){return i.x===e.x&&i.y===e.y}function Mc(i,e,t,n){let s=ks(yt(i,e,t)),r=ks(yt(i,e,n)),o=ks(yt(t,n,i)),a=ks(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Hs(i,t,e)||r===0&&Hs(i,n,e)||o===0&&Hs(t,i,n)||a===0&&Hs(t,e,n))}function Hs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ks(i){return i>0?1:i<0?-1:0}function ng(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ds(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function ig(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sc(i,e){let t=new Ya(i.i,i.x,i.y),n=new Ya(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wl(i,e,t,n){let s=new Ya(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var es=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xl(e),ql(n,e);let o=e.length;t.forEach(Xl);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ql(n,t[l]);let a=Vm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xl(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ql(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mr=class i extends tn{constructor(e=new hs([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:rg,v,I=!1,N,F,O,Q;d&&(v=d.getSpacedPoints(h),I=!0,f=!1,N=d.computeFrenetFrames(h,!1),F=new z,O=new z,Q=new z),f||(m=0,p=0,g=0,x=0);let E=a.extractPoints(c),A=E.shape,q=E.holes;if(!es.isClockWise(A)){A=A.reverse();for(let B=0,Se=q.length;B<Se;B++){let ae=q[B];es.isClockWise(ae)&&(q[B]=ae.reverse())}}let _e=es.triangulateShape(A,q),H=A;for(let B=0,Se=q.length;B<Se;B++){let ae=q[B];A=A.concat(ae)}function Y(B,Se,ae){return Se||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(Se,ae)}let P=A.length,se=_e.length;function re(B,Se,ae){let ve,oe,Be,Pe=B.x-Se.x,b=B.y-Se.y,y=ae.x-B.x,X=ae.y-B.y,me=Pe*Pe+b*b,de=Pe*X-b*y;if(Math.abs(de)>Number.EPSILON){let ue=Math.sqrt(me),Ue=Math.sqrt(y*y+X*X),we=Se.x-b/ue,Le=Se.y+Pe/ue,ze=ae.x-X/Ue,Ge=ae.y+y/Ue,ge=((ze-we)*X-(Ge-Le)*y)/(Pe*X-b*y);ve=we+Pe*ge-B.x,oe=Le+b*ge-B.y;let $e=ve*ve+oe*oe;if($e<=2)return new Me(ve,oe);Be=Math.sqrt($e/2)}else{let ue=!1;Pe>Number.EPSILON?y>Number.EPSILON&&(ue=!0):Pe<-Number.EPSILON?y<-Number.EPSILON&&(ue=!0):Math.sign(b)===Math.sign(X)&&(ue=!0),ue?(ve=-b,oe=Pe,Be=Math.sqrt(me)):(ve=Pe,oe=b,Be=Math.sqrt(me/2))}return new Me(ve/Be,oe/Be)}let ie=[];for(let B=0,Se=H.length,ae=Se-1,ve=B+1;B<Se;B++,ae++,ve++)ae===Se&&(ae=0),ve===Se&&(ve=0),ie[B]=re(H[B],H[ae],H[ve]);let he=[],pe,Ae=ie.concat();for(let B=0,Se=q.length;B<Se;B++){let ae=q[B];pe=[];for(let ve=0,oe=ae.length,Be=oe-1,Pe=ve+1;ve<oe;ve++,Be++,Pe++)Be===oe&&(Be=0),Pe===oe&&(Pe=0),pe[ve]=re(ae[ve],ae[Be],ae[Pe]);he.push(pe),Ae=Ae.concat(pe)}for(let B=0;B<m;B++){let Se=B/m,ae=p*Math.cos(Se*Math.PI/2),ve=g*Math.sin(Se*Math.PI/2)+x;for(let oe=0,Be=H.length;oe<Be;oe++){let Pe=Y(H[oe],ie[oe],ve);Ie(Pe.x,Pe.y,-ae)}for(let oe=0,Be=q.length;oe<Be;oe++){let Pe=q[oe];pe=he[oe];for(let b=0,y=Pe.length;b<y;b++){let X=Y(Pe[b],pe[b],ve);Ie(X.x,X.y,-ae)}}}let te=g+x;for(let B=0;B<P;B++){let Se=f?Y(A[B],Ae[B],te):A[B];I?(O.copy(N.normals[0]).multiplyScalar(Se.x),F.copy(N.binormals[0]).multiplyScalar(Se.y),Q.copy(v[0]).add(O).add(F),Ie(Q.x,Q.y,Q.z)):Ie(Se.x,Se.y,0)}for(let B=1;B<=h;B++)for(let Se=0;Se<P;Se++){let ae=f?Y(A[Se],Ae[Se],te):A[Se];I?(O.copy(N.normals[B]).multiplyScalar(ae.x),F.copy(N.binormals[B]).multiplyScalar(ae.y),Q.copy(v[B]).add(O).add(F),Ie(Q.x,Q.y,Q.z)):Ie(ae.x,ae.y,u/h*B)}for(let B=m-1;B>=0;B--){let Se=B/m,ae=p*Math.cos(Se*Math.PI/2),ve=g*Math.sin(Se*Math.PI/2)+x;for(let oe=0,Be=H.length;oe<Be;oe++){let Pe=Y(H[oe],ie[oe],ve);Ie(Pe.x,Pe.y,u+ae)}for(let oe=0,Be=q.length;oe<Be;oe++){let Pe=q[oe];pe=he[oe];for(let b=0,y=Pe.length;b<y;b++){let X=Y(Pe[b],pe[b],ve);I?Ie(X.x,X.y+v[h-1].y,v[h-1].x+ae):Ie(X.x,X.y,u+ae)}}}le(),Ce();function le(){let B=s.length/3;if(f){let Se=0,ae=P*Se;for(let ve=0;ve<se;ve++){let oe=_e[ve];ke(oe[2]+ae,oe[1]+ae,oe[0]+ae)}Se=h+m*2,ae=P*Se;for(let ve=0;ve<se;ve++){let oe=_e[ve];ke(oe[0]+ae,oe[1]+ae,oe[2]+ae)}}else{for(let Se=0;Se<se;Se++){let ae=_e[Se];ke(ae[2],ae[1],ae[0])}for(let Se=0;Se<se;Se++){let ae=_e[Se];ke(ae[0]+P*h,ae[1]+P*h,ae[2]+P*h)}}n.addGroup(B,s.length/3-B,0)}function Ce(){let B=s.length/3,Se=0;Ne(H,Se),Se+=H.length;for(let ae=0,ve=q.length;ae<ve;ae++){let oe=q[ae];Ne(oe,Se),Se+=oe.length}n.addGroup(B,s.length/3-B,1)}function Ne(B,Se){let ae=B.length;for(;--ae>=0;){let ve=ae,oe=ae-1;oe<0&&(oe=B.length-1);for(let Be=0,Pe=h+m*2;Be<Pe;Be++){let b=P*Be,y=P*(Be+1),X=Se+ve+b,me=Se+oe+b,de=Se+oe+y,ue=Se+ve+y;Ve(X,me,de,ue)}}}function Ie(B,Se,ae){l.push(B),l.push(Se),l.push(ae)}function ke(B,Se,ae){Oe(B),Oe(Se),Oe(ae);let ve=s.length/3,oe=R.generateTopUV(n,s,ve-3,ve-2,ve-1);Xe(oe[0]),Xe(oe[1]),Xe(oe[2])}function Ve(B,Se,ae,ve){Oe(B),Oe(Se),Oe(ve),Oe(Se),Oe(ae),Oe(ve);let oe=s.length/3,Be=R.generateSideWallUV(n,s,oe-6,oe-3,oe-2,oe-1);Xe(Be[0]),Xe(Be[1]),Xe(Be[3]),Xe(Be[1]),Xe(Be[2]),Xe(Be[3])}function Oe(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Xe(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ag(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wa[s.type]().fromJSON(s)),new i(n,e.options)}},rg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Me(r,o),new Me(a,l),new Me(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-u),new Me(f,1-g),new Me(x,1-d)]:[new Me(a,1-l),new Me(h,1-u),new Me(p,1-g),new Me(m,1-d)]}};function ag(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gr=class i extends tn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new z,g=new Me;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let R=d+m,v=R,I=R+n+1,N=R+n+2,F=R+1;a.push(v,I,F),a.push(I,N,F)}}this.setIndex(a),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _r=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,f=new z,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let R=[],v=d/n,I=0;d===0&&o===0?I=.5/t:d===n&&l===Math.PI&&(I=-.5/t);for(let N=0;N<=t;N++){let F=N/t;u.x=-e*Math.cos(s+F*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+F*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(F+I,1-v),R.push(c++)}h.push(R)}for(let d=0;d<n;d++)for(let R=0;R<t;R++){let v=h[d][R+1],I=h[d][R],N=h[d+1][R],F=h[d+1][R+1];(d!==0||o>0)&&p.push(v,I,F),(d!==n-1||l<Math.PI)&&p.push(I,N,F)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xr=class i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,u=new z,f=new z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,R=(s+1)*p+g;o.push(x,m,R),o.push(m,d,R)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var vr=class extends kn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var qe=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Vs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qo,endingEnd:Qo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case el:r=e,a=2*t-n;break;case tl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case el:o=e,l=2*n-t;break;case tl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,R=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,I=p*m-p*x;for(let N=0;N!==a;++N)r[N]=d*o[h+N]+R*o[c+N]+v*o[l+N]+I*o[u+N];return r}},Ja=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ka=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case Gr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Gr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&og(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Xs;var ii=class extends hn{};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ws;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends hn{};$a.prototype.ValueTypeName="color";var ja=class extends hn{};ja.prototype.ValueTypeName="number";var Qa=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ps=class extends hn{InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.DefaultInterpolation=Xs;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends hn{};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Ws;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends hn{};eo.prototype.ValueTypeName="vector";var to=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},lg=new to,no=class{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var ms=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},yr=class extends ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ma=new wt,Yl=new z,Zl=new z,Mr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),Zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Jl=new wt,Yi=new z,ga=new z,io=class extends Mr{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),ga.copy(n.position),ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}},Cn=class extends ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new io}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},so=class extends Mr{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new so}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var mo="\\[\\]\\.:\\/",cg=new RegExp("["+mo+"]","g"),go="[^"+mo+"]",hg="[^"+mo.replace("\\.","")+"]",ug=/((?:WC+[\/:])*)/.source.replace("WC",go),dg=/(WCOD+)?/.source.replace("WCOD",hg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go),pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go),mg=new RegExp("^"+ug+dg+fg+pg+"$"),gg=["material","materials","bones","map"],ro=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(e){let t=mg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=ro;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bg=new Float32Array(1);var br=class{constructor(e,t,n=0,s=1/0){this.ray=new Ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ao(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ao(e[s],this,n,t);return n.sort(Kl),n}};function Kl(i,e){return i.distance-e.distance}function ao(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)ao(s[r],e,t,!0)}}var gs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var bc={type:"change"},_o={type:"start"},Ec={type:"end"},Rr=new Ni,Tc=new Yt,xg=Math.cos(70*hc.DEG2RAD),Cr=class extends fn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ue),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bc),n.update(),r=s.NONE},this.update=(function(){let U=new z,fe=new cn().setFromUnitVectors(e.up,new z(0,1,0)),Te=fe.clone().invert(),_=new z,w=new cn,L=new z,C=2*Math.PI;return function(M=null){let T=n.object.position;U.copy(T).sub(n.target),U.applyQuaternion(fe),a.setFromVector3(U),n.autoRotate&&r===s.NONE&&q(E(M)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let W=n.minAzimuthAngle,k=n.maxAzimuthAngle;isFinite(W)&&isFinite(k)&&(W<-Math.PI?W+=C:W>Math.PI&&(W-=C),k<-Math.PI?k+=C:k>Math.PI&&(k-=C),W<=k?a.theta=Math.max(W,Math.min(k,a.theta)):a.theta=a.theta>(W+k)/2?Math.max(W,a.theta):Math.min(k,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&F||n.object.isOrthographicCamera?a.radius=ie(a.radius):a.radius=ie(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Te),T.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Z=!1;if(n.zoomToCursor&&F){let K=null;if(n.object.isPerspectiveCamera){let J=U.length();K=ie(J*c);let G=J-K;n.object.position.addScaledVector(I,G),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let J=new z(N.x,N.y,0);J.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0;let G=new z(N.x,N.y,0);G.unproject(n.object),n.object.position.sub(G).add(J),n.object.updateMatrixWorld(),K=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;K!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(K).add(n.object.position):(Rr.origin.copy(n.object.position),Rr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Rr.direction))<xg?e.lookAt(n.target):(Tc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Rr.intersectPlane(Tc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0);return c=1,F=!1,Z||_.distanceToSquared(n.object.position)>o||8*(1-w.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(bc),_.copy(n.object.position),w.copy(n.object.quaternion),L.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",Pe),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new gs,l=new gs,c=1,h=new z,u=new Me,f=new Me,p=new Me,g=new Me,x=new Me,m=new Me,d=new Me,R=new Me,v=new Me,I=new z,N=new Me,F=!1,O=[],Q={};function E(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function A(U){let fe=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function q(U){l.theta-=U}function ne(U){l.phi-=U}let _e=(function(){let U=new z;return function(Te,_){U.setFromMatrixColumn(_,0),U.multiplyScalar(-Te),h.add(U)}})(),H=(function(){let U=new z;return function(Te,_){n.screenSpacePanning===!0?U.setFromMatrixColumn(_,1):(U.setFromMatrixColumn(_,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Te),h.add(U)}})(),Y=(function(){let U=new z;return function(Te,_){let w=n.domElement;if(n.object.isPerspectiveCamera){let L=n.object.position;U.copy(L).sub(n.target);let C=U.length();C*=Math.tan(n.object.fov/2*Math.PI/180),_e(2*Te*C/w.clientHeight,n.object.matrix),H(2*_*C/w.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_e(Te*(n.object.right-n.object.left)/n.object.zoom/w.clientWidth,n.object.matrix),H(_*(n.object.top-n.object.bottom)/n.object.zoom/w.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function P(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(U,fe){if(!n.zoomToCursor)return;F=!0;let Te=n.domElement.getBoundingClientRect(),_=U-Te.left,w=fe-Te.top,L=Te.width,C=Te.height;N.x=_/L*2-1,N.y=-(w/C)*2+1,I.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function he(U){u.set(U.clientX,U.clientY)}function pe(U){re(U.clientX,U.clientX),d.set(U.clientX,U.clientY)}function Ae(U){g.set(U.clientX,U.clientY)}function te(U){f.set(U.clientX,U.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;q(2*Math.PI*p.x/fe.clientHeight),ne(2*Math.PI*p.y/fe.clientHeight),u.copy(f),n.update()}function le(U){R.set(U.clientX,U.clientY),v.subVectors(R,d),v.y>0?P(A(v.y)):v.y<0&&se(A(v.y)),d.copy(R),n.update()}function Ce(U){x.set(U.clientX,U.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),Y(m.x,m.y),g.copy(x),n.update()}function Ne(U){re(U.clientX,U.clientY),U.deltaY<0?se(A(U.deltaY)):U.deltaY>0&&P(A(U.deltaY)),n.update()}function Ie(U){let fe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),fe=!0;break}fe&&(U.preventDefault(),n.update())}function ke(U){if(O.length===1)u.set(U.pageX,U.pageY);else{let fe=$e(U),Te=.5*(U.pageX+fe.x),_=.5*(U.pageY+fe.y);u.set(Te,_)}}function Ve(U){if(O.length===1)g.set(U.pageX,U.pageY);else{let fe=$e(U),Te=.5*(U.pageX+fe.x),_=.5*(U.pageY+fe.y);g.set(Te,_)}}function Oe(U){let fe=$e(U),Te=U.pageX-fe.x,_=U.pageY-fe.y,w=Math.sqrt(Te*Te+_*_);d.set(0,w)}function Xe(U){n.enableZoom&&Oe(U),n.enablePan&&Ve(U)}function B(U){n.enableZoom&&Oe(U),n.enableRotate&&ke(U)}function Se(U){if(O.length==1)f.set(U.pageX,U.pageY);else{let Te=$e(U),_=.5*(U.pageX+Te.x),w=.5*(U.pageY+Te.y);f.set(_,w)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;q(2*Math.PI*p.x/fe.clientHeight),ne(2*Math.PI*p.y/fe.clientHeight),u.copy(f)}function ae(U){if(O.length===1)x.set(U.pageX,U.pageY);else{let fe=$e(U),Te=.5*(U.pageX+fe.x),_=.5*(U.pageY+fe.y);x.set(Te,_)}m.subVectors(x,g).multiplyScalar(n.panSpeed),Y(m.x,m.y),g.copy(x)}function ve(U){let fe=$e(U),Te=U.pageX-fe.x,_=U.pageY-fe.y,w=Math.sqrt(Te*Te+_*_);R.set(0,w),v.set(0,Math.pow(R.y/d.y,n.zoomSpeed)),P(v.y),d.copy(R);let L=(U.pageX+fe.x)*.5,C=(U.pageY+fe.y)*.5;re(L,C)}function oe(U){n.enableZoom&&ve(U),n.enablePan&&ae(U)}function Be(U){n.enableZoom&&ve(U),n.enableRotate&&Se(U)}function Pe(U){n.enabled!==!1&&(O.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),ze(U),U.pointerType==="touch"?Ue(U):X(U))}function b(U){n.enabled!==!1&&(U.pointerType==="touch"?we(U):me(U))}function y(U){Ge(U),O.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(Ec),r=s.NONE}function X(U){let fe;switch(U.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case ri.DOLLY:if(n.enableZoom===!1)return;pe(U),r=s.DOLLY;break;case ri.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;Ae(U),r=s.PAN}else{if(n.enableRotate===!1)return;he(U),r=s.ROTATE}break;case ri.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;he(U),r=s.ROTATE}else{if(n.enablePan===!1)return;Ae(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_o)}function me(U){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;te(U);break;case s.DOLLY:if(n.enableZoom===!1)return;le(U);break;case s.PAN:if(n.enablePan===!1)return;Ce(U);break}}function de(U){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(U.preventDefault(),n.dispatchEvent(_o),Ne(U),n.dispatchEvent(Ec))}function ue(U){n.enabled===!1||n.enablePan===!1||Ie(U)}function Ue(U){switch(ge(U),O.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;ke(U),r=s.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Ve(U),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(U),r=s.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;B(U),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_o)}function we(U){switch(ge(U),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ae(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;oe(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(U),n.update();break;default:r=s.NONE}}function Le(U){n.enabled!==!1&&U.preventDefault()}function ze(U){O.push(U.pointerId)}function Ge(U){delete Q[U.pointerId];for(let fe=0;fe<O.length;fe++)if(O[fe]==U.pointerId){O.splice(fe,1);return}}function ge(U){let fe=Q[U.pointerId];fe===void 0&&(fe=new Me,Q[U.pointerId]=fe),fe.set(U.pageX,U.pageY)}function $e(U){let fe=U.pointerId===O[0]?O[1]:O[0];return Q[fe]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",Pe),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}};var Pr=class extends Bi{constructor(e=null){super();let t=new An;t.deleteAttribute("uv");let n=new qe({side:Bt}),s=new qe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Cn(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Je(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Je(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Je(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Je(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Je(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Je(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new Je(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new Je(t,ki(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Je(t,ki(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Je(t,ki(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new Je(t,ki(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let R=new Je(t,ki(20));R.position.set(3.235,11.486,-12.541),R.scale.set(2.5,2,.1),this.add(R);let v=new Je(t,ki(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ki(i){let e=new en;return e.color.setScalar(i),e}var lt=.1,At=.04,rt=.004,pn=1.45,un=.72,vg=2.16,mt=.018,yg=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Mg=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Ir(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new lr(n);return s.colorSpace=Tt,s.wrapS=s.wrapT=ts,s.anisotropy=8,s}var mn=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function Lr(i,e){return Ir(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let o=mn()*s,a=.04+mn()*.12;t.strokeStyle=`rgba(${e},${a})`,t.lineWidth=.5+mn()*2.2,t.beginPath(),t.moveTo(0,o);for(let l=0;l<=n;l+=32)t.lineTo(l,o+Math.sin(l/90+r)*3+(mn()-.5)*2);t.stroke()}})}function xo(i,e,t=!0){return Ir(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=n.getImageData(0,0,s,r),a=o.data;for(let l=0;l<a.length;l+=4){let c=(mn()-.5)*14;a[l]+=c,a[l+1]+=c,a[l+2]+=c}if(n.putImageData(o,0,0),t)for(let l=0;l<14;l++){n.strokeStyle=e,n.globalAlpha=.25+mn()*.5,n.lineWidth=.6+mn()*2,n.beginPath();let c=mn()*s,h=0;for(n.moveTo(c,h);h<r;)c+=(mn()-.45)*60,h+=20+mn()*30,n.lineTo(c,h);n.stroke()}n.globalAlpha=1})}function wc(i,e){return Ir(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var Ac={eiche:()=>({map:Lr("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:Lr("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:xo("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:xo("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:xo("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},Rc={eiche:()=>{let i=Lr("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=wc("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=wc("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=Lr("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},Cc={matt:.62,seide:.38,glanz:.12};function Sg(i,e={}){let t=!!e.photo,n=new ls({antialias:!0,preserveDrawingBuffer:!0,alpha:t});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=Tt,n.toneMapping=lo,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=oo,t&&n.setClearColor(0,0),i.appendChild(n.domElement);let s=new Bi;s.background=t?null:new st("#ebe6de");let r=new Fi(n);s.environment=r.fromScene(new Pr(n),.04).texture;let o=new Ft(40,1,.05,80),a=t?null:new Cr(o,n.domElement);a&&(a.enableDamping=!0,a.minPolarAngle=.2,a.maxPolarAngle=1.45,a.minDistance=1.5,a.maxDistance=16,a.screenSpacePanning=!0);let l=!1,c="perspektive",h=!0,u=!1,f=!1,p=()=>{h=!0};a&&a.addEventListener("change",p),n.domElement.addEventListener("pointerdown",()=>{l=!0,e.onInteract&&e.onInteract()});let g=new Sr("#fff6ea",2);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),g.shadow.bias=-4e-4,g.shadow.radius=4,s.add(g,g.target);let x=new yr("#ffffff","#bfae98",.55);s.add(x);let m=s.environment,d="tag";function R(){let _=d==="abend";g.intensity=_?.05:2,x.intensity=_?.3:.55,x.color.set(_?"#ffd9b0":"#ffffff"),s.environment=_?null:m,s.background&&s.background.set(_?"#1d1a17":"#ebe6de"),n.toneMappingExposure=t?v:_?1.25:1.05,re.m&&(re.m.sky.color.set(_?"#1b2640":"#dcefff"),re.m.led.color.set(_?"#fff7e0":"#fff3d6")),p()}let v=1,I={},N=(_,w)=>I[_]||(I[_]=w()),F=new ht,O=new ht;F.add(O),s.add(F);let Q=null,E="",A={w:4.8,d:3.8},q={},ne={},_e=new Set,H=!1,Y=new An(1,1,1);function P(_,w,L,C,D,M,T,W,k=!0){let Z=new Je(Y,C);return Z.scale.set(Math.max(_,.001),Math.max(w,.001),Math.max(L,.001)),Z.position.set(D,M,T),Z.castShadow=k,Z.receiveShadow=!0,W.add(Z),Z}function se(_,w,L,C,D,M,T,W,k,Z){let K=N("cy"+(Z||[_,w,L,C].join()),()=>new Gt(_,w,L,C)),J=new Je(K,D);return J.position.set(M,T,W),k.add(J),J}function re(_){let w=JSON.stringify([_.front,_.finish,_.wood,_.top,_.handle,_.wall,_.floor,_.accent,_.back]);if(re.k===w)return re.m;re.k=w;let L=new qe({color:_.front,roughness:Cc[_.finish]??.5,envMapIntensity:.9}),C=_.wood?new qe({...N("w"+_.wood,()=>Ac[_.wood]()),roughness:.6}):null,D=_.accent?new qe({color:_.accent,roughness:Cc[_.finish]??.5}):null,M=new qe({color:"#c8c8c8",roughness:.25,metalness:1}),T=new qe({color:"#2a2a2a",roughness:.8}),W=new qe({color:"#efece6",roughness:.8}),k=C||L,Z=(K,J)=>{let G=J?k:T,ce=[G,G,G,G,G,G];return ce[K]=W,ce};return re.m={F:C||L,FA:D||C||L,carcass:T,inner:W,cs:{L:Z(0,1),R:Z(1,1),B:Z(2),Tp:Z(3),K:Z(4)},plinth:new qe({color:"#1e1e1e",roughness:.7}),top:new qe({...N("t"+_.top,()=>Ac[_.top]())}),steel:M,black:new qe({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new qe({color:"#111",roughness:.05,metalness:.5}),glassClear:new qe({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:_.handle==="gold"?new qe({color:"#b08a4a",roughness:.3,metalness:1}):_.handle==="schwarz"?new qe({color:"#111",roughness:.4,metalness:.6}):M,wall:new qe({color:_.wall||"#f2eee8",roughness:.95}),floor:new qe({...N("f"+_.floor,()=>(Rc[_.floor]||Rc.eiche)())}),frame:new qe({color:"#ffffff",roughness:.5}),sky:new en({color:"#dcefff"}),door:new qe({color:"#d8d2c8",roughness:.7}),led:new en({color:"#fff3d6"}),stool:new qe({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new qe({color:"#8a6a4a",roughness:.6}),glow:new en({color:"#ffe7b8"}),fridge:new qe({color:"#bfc2c4",roughness:.3,metalness:.8}),tile:new qe({...N("metro",()=>{let K=Ir(512,512,(J,G,ce)=>{J.fillStyle="#d9d4cc",J.fillRect(0,0,G,ce);for(let ye=0;ye<8;ye++)for(let xe=-1;xe<5;xe++){let Ee=xe*128+ye%2*64,be=ye*64;J.fillStyle="#f6f4ef",J.fillRect(Ee+3,be+3,122,58),J.fillStyle="rgba(255,255,255,.5)",J.fillRect(Ee+6,be+6,116,10)}});return K.repeat.set(4,1.1),{map:K}}),roughness:.2}),backGlass:new qe({color:_.wood?"#2a2420":_.front,roughness:.04,metalness:.1,envMapIntensity:1.4}),dside:N("m_ds",()=>new qe({color:"#5b5d60",roughness:.4,metalness:.6})),dbot:N("m_db",()=>new qe({color:"#e7e5e0",roughness:.85})),plate:N("m_pl",()=>new qe({color:"#fbfaf6",roughness:.25})),cup:N("m_cu",()=>new qe({color:"#d9cdb8",roughness:.35})),bottleG:N("m_bg",()=>new qe({color:"#2d4a2a",roughness:.12,metalness:.15})),bottleB:N("m_bb",()=>new qe({color:"#6a3a16",roughness:.12,metalness:.15})),bottleW:N("m_bw",()=>new qe({color:"#c9b37a",roughness:.2})),jar:N("m_ja",()=>new qe({color:"#e3d6bd",roughness:.3})),jarLid:N("m_jl",()=>new qe({color:"#3c3a37",roughness:.4,metalness:.3})),bin:N("m_bi",()=>new qe({color:"#7d8083",roughness:.55})),binY:N("m_by",()=>new qe({color:"#d9b441",roughness:.5})),binB:N("m_bl",()=>new qe({color:"#4f78a8",roughness:.5})),binG:N("m_bgn",()=>new qe({color:"#7a6a55",roughness:.5})),fridgeIn:N("m_fi",()=>new qe({color:"#f3f6f7",roughness:.35})),fridgeLight:N("m_fl",()=>new en({color:"#f2f8ff"})),glassShelf:N("m_gs",()=>new qe({color:"#dfeaea",roughness:.05,transparent:!0,opacity:.5})),green:N("m_gr",()=>new qe({color:"#6f8f4e",roughness:.6})),broom:N("m_br",()=>new qe({color:"#b5a27c",roughness:.6}))},re.m}function ie(_,w,L,C,D,M,T,W,k,Z={}){let K=D+M;W.forEach((J,G)=>{let ce=M*J;if(P(L-rt*2,ce-rt,.02,Z.mat||w.F,C,K-ce/2,T,_),k.handle!=="grifflos"&&!Z.noHandle)if(Z.vertical){let ye=Math.min(Z.hl||.32,ce*.42),Ee=(Z.vpos&&Z.vpos[G]||"bottom")==="top"?K-.07-ye/2:K-ce+.07+ye/2;P(.016,ye,.025,w.handle,C+(Z.side||1)*(L/2-.055),Ee,T+.02,_)}else P(Math.min(.4,L*.6),.015,.025,w.handle,C,K-.05,T+.02,_);K-=ce}),k.handle==="grifflos"&&!Z.noHandle&&P(L,.02,.01,w.steel,C,D+M-.012,T-.004,_,!1)}function he(_,w,L,C,D,M={}){let T=.9-At-lt;P(C-rt,T,D-.02,w.carcass,0,lt+T/2,-.01,_),P(C,lt,D-.06,w.plinth,0,lt/2,-.03,_),M.noFront||ie(_,w,C,0,lt,T-rt,D/2-.01,M.parts||[.25,.375,.375],L,M),M.noTop||P(C+.002,At,D+.02,w.top,0,.9-At/2,.01,_)}function pe(_,w,L,C,D=.9){P(Math.min(.55,L-.2),.012,.42,w.black,0,D+.001,-.02,_,!1);let M=new Je(N("faucet",()=>new Gt(.015,.018,.3,16)),w.steel);M.position.set(0,D+.15,-C/2+.1),M.castShadow=!0,_.add(M);let T=new Je(N("arc",()=>new xr(.09,.012,10,24,Math.PI)),w.steel);T.position.set(0,D+.3,-C/2+.19),T.rotation.y=Math.PI/2,_.add(T)}function Ae(_,w,L,C,D=.9,M=-.02){P(Math.min(.8,L-.08),.008,.52,w.glass,0,D+.004,M,_,!1);let T=N("ringgeo",()=>new gr(.06,.068,32)),W=N("ringmat",()=>new en({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([k,Z])=>{let K=new Je(T,W);K.rotation.x=-Math.PI/2,K.position.set(k*Math.min(1,L/.8),D+.009,M+Z),_.add(K)}),C&&P(.1,.006,.5,w.steel,0,D+.011,M,_,!1)}function te(_,w,L,C,D,M){let T=-D/2,W=D/2-.02,k=W-T,Z=(T+W)/2,K=w.cs,J=L-2*mt-rt;return P(mt,C,k,K.L,-L/2+mt/2+rt/2,M+C/2,Z,_),P(mt,C,k,K.R,L/2-mt/2-rt/2,M+C/2,Z,_),P(J,mt,k,K.B,0,M+mt/2,Z,_,!1),P(J,mt,k,K.Tp,0,M+C-mt/2,Z,_,!1),P(J,C-2*mt,.008,K.K,0,M+C/2,T+.004,_,!1),{zf:W,zb:T}}function le(_,w,L,C){_.anims.push({o:w,k:L,to:C,b:L==="rx"?w.rotation.x:L==="ry"?w.rotation.y:L==="px"?w.position.x:w.position.z})}function Ce(_,w){let L=new ht;return w.add(L),_.hide.push(L),L}function Ne(_,w,L,C,D,M,T,W){let k=_.M,Z=Math.max(1,Math.floor(C/.14)),K=J=>(Math.sin((W+J)*12.9898)*43758.5453%1+1)%1;if(T==="plates"){let J=Math.max(1,Math.floor(C/.3));for(let G=0;G<J;G++)for(let ce=0;ce<5;ce++)se(.1,.095,.012,24,k.plate,L-C/2+(G+.5)*C/J,D+.008+ce*.014,M,w,"plate");return}for(let J=0;J<Z;J++){let G=L-C/2+(J+.5)*C/Z,ce=K(J);if(ce<.4)se(.04,.04,.1,14,k.jar,G,D+.05,M,w,"jar"),se(.042,.042,.02,14,k.jarLid,G,D+.11,M,w,"jarl");else if(ce<.75)for(let ye=0;ye<3;ye++)se(.045,.035,.08,14,k.cup,G,D+.04+ye*.085,M,w,"cup");else for(let ye=0;ye<4;ye++)se(.09,.085,.012,22,k.plate,G,D+.008+ye*.014,M,w,"plate2")}}function Ie(_,w,L,C,D,M,T,W,k){let{M:Z,zf:K,zb:J}=_,G=C-2*mt-.006,ce=K-J-.03,ye=(K+J)/2-.01;for(let xe=1;xe<=T;xe++){let Ee=D+M*xe/(T+1);P(G,.016,ce,k?Z.glassShelf:Z.inner,L,Ee,ye,w,!1),W&&Ne(_,w,L,G-.04,Ee+.008,ye,W,xe*7+L*13)}W&&Ne(_,w,L,G-.04,D+mt,ye,W,99+L*5)}function ke(_,w,L,C,D,M,T){let W=w.in||"shelf",k=T?_.g:Ce(_,_.g),Z=_.M,{zf:K,zb:J}=_,G=(K+J)/2;if(W==="none")return;if(W==="fridge"){let ye=C-2*mt-.01,xe=K-J-.02;P(ye,M-.02,.01,Z.fridgeIn,L,D+M/2,J+.02,k,!1),P(.01,M-.02,xe,Z.fridgeIn,L-ye/2+.005,D+M/2,G,k,!1),P(.01,M-.02,xe,Z.fridgeIn,L+ye/2-.005,D+M/2,G,k,!1);let Ee=Math.max(1,Math.round(M/.3));for(let be=1;be<=Ee;be++){let Ye=D+M*be/(Ee+1);P(ye,.008,xe-.03,Z.glassShelf,L,Ye,G,k,!1),be===1&&(se(.04,.04,.12,12,Z.bottleW,L-ye/4,Ye+.065,G,k,"milk"),se(.05,.05,.06,14,Z.green,L+ye/6,Ye+.035,G,k,"bowl"))}P(ye*.6,.012,.02,Z.fridgeLight,L,D+M-.03,K-.08,k,!1);return}if(W==="broom"){P(C-2*mt-.006,.016,K-J-.03,Z.inner,L,D+M-.3,G,k,!1),se(.012,.012,1.2,8,Z.broom,L-C/5,D+.65,G+.05,k,"stick"),P(.24,.05,.06,Z.stool,L-C/5,D+.06,G+.05,k,!1),P(Math.min(.22,C-.1),.3,.22,Z.bin,L+C/6,D+.16,G,k,!1);return}let ce=_.kind==="t"?Math.max(1,Math.floor(M/.38)):_.kind==="u"&&M>.6?2:1;Ie(_,k,L,C,D,M,ce,w.dec||(T&&_.kind==="u"?"mix":null),!1)}function Ve(_,w,L,C,D,M,T,W){let{M:k,s:Z,g:K,kind:J,zf:G}=_,ce=T==="l"?1:-1,ye=L-ce*C/2,xe=new ht;xe.position.set(ye,0,G),K.add(xe);let Ee=_.mat||k.F,be=C-rt*2,Ye=M-rt,ut=D+M/2;if(W){let Fe=Math.min(.05,be*.12);P(be,Fe,.02,Ee,ce*C/2,D+M-rt/2-Fe/2,.01,xe),P(be,Fe,.02,Ee,ce*C/2,D+rt/2+Fe/2,.01,xe),P(Fe,Ye-2*Fe,.02,Ee,ce*(rt+Fe/2),ut,.01,xe),P(Fe,Ye-2*Fe,.02,Ee,ce*(C-rt-Fe/2),ut,.01,xe),P(be-2*Fe,Ye-2*Fe,.006,k.glassClear,ce*C/2,ut,.01,xe,!1)}else P(be,Ye,.02,Ee,ce*C/2,ut,.01,xe);if(!w.nh&&Z.handle!=="grifflos"){let Fe=J==="b"?Math.min(.14,M*.4):Math.min(J==="u"?.2:w.hl||.32,M*.42),dt=w.hp||(J==="u"?"bottom":J==="b"?"top":"bottom"),ct=dt==="top"?D+M-.06-Fe/2:dt==="mid"?ut:D+.06+Fe/2;P(.016,Fe,.025,k.handle,ce*(C-.055),ct,.03,xe)}le(_,xe,"ry",-ce*(w.ang||1.62))}function Oe(_,w,L,C,D,M,T,W){let{M:k,s:Z,g:K,zf:J,zb:G,d:ce}=_,ye=new ht;K.add(ye),P(C-rt*2,M-rt,.02,_.mat||k.F,L,D+M/2,J+.01,ye),!w.nh&&Z.handle!=="grifflos"&&P(Math.min(.4,C*.6),.015,.025,k.handle,L,D+M-.05,J+.03,ye);let xe=Ce(_,ye),Ee=C-2*mt-.03,be=J-G-.05,Ye=J-.004,ut=Ye-be,Fe=(ut+Ye)/2,dt=D+.02,ct=w.in||(w.k==="pull"?"shelf":"box"),Dt=(ot,Qe=xe,at=dt)=>{P(.012,ot,be,k.dside,L-Ee/2+.006,at+ot/2,Fe,Qe,!1),P(.012,ot,be,k.dside,L+Ee/2-.006,at+ot/2,Fe,Qe,!1),P(Ee,ot*.8,.012,k.dside,L,at+ot*.4,ut+.006,Qe,!1),P(Ee-.02,.01,be,k.dbot,L,at+.005,Fe,Qe,!1)};if(w.k==="drawer"){let ot=Math.max(.06,Math.min(M-.05,.24));if(Dt(ot),ct==="cutlery"||ct==="box"&&T===0&&W>2)for(let Qe=1;Qe<4;Qe++)P(.006,.04,be-.03,k.dbot,L-Ee/2+Ee*Qe/4,dt+.03,Fe,xe,!1);else if(ct==="plates"&&ot>.15){let Qe=Math.max(1,Math.floor(Ee/.26));for(let at=0;at<Qe;at++)for(let pt=0;pt<6;pt++)se(.1,.095,.012,24,k.plate,L-Ee/2+(at+.5)*Ee/Qe,dt+.016+pt*.014,Fe,xe,"plate")}else if(ct==="pots"&&ot>.15){let Qe=Math.max(1,Math.floor(Ee/.26));for(let at=0;at<Qe;at++)se(.1,.1,.12,24,k.steel,L-Ee/2+(at+.5)*Ee/Qe,dt+.07,Fe,xe,"pot")}else if(ct==="id"){let Qe=new ht;xe.add(Qe);let at=.08,pt=D+M-.04-at;Dt(at,Qe,pt),P(Ee-.01,at,.016,_.mat||k.F,L,pt+at/2,Ye-.01,Qe,!1);for(let S=1;S<3;S++)P(.005,.035,be-.04,k.dbot,L-Ee/2+Ee*S/3,pt+.025,Fe,Qe,!1);if(le(_,Qe,"pz",.14),M>.3){let S=Math.max(1,Math.floor(Ee/.26));for(let V=0;V<S;V++)se(.1,.1,.1,24,k.steel,L-Ee/2+(V+.5)*Ee/S,dt+.06,Fe,xe,"pot2")}}le(_,ye,"pz",Math.min(.45,be*.8));return}if(P(.012,M-.06,be,k.dside,L-Ee/2+.006,D+M/2,Fe,xe,!1),P(Ee,M-.06,.012,k.dside,L,D+M/2,ut+.006,xe,!1),ct==="bottles"){let ot=Math.max(1,Math.floor(M/.32)),Qe=Math.max(1,Math.round(Ee/.08));for(let at=0;at<ot;at++){let pt=D+.03+at*M/ot;P(Ee,.01,be,k.dside,L,pt,Fe,xe,!1);for(let S=0;S<Qe;S++)for(let V=0;V<3;V++){let j=L-Ee/2+(S+.5)*Ee/Qe,ee=ut+(V+.5)*be/3,$=(S+V+at)%3===0?k.bottleB:k.bottleG;se(.032,.032,.19,12,$,j,pt+.1,ee,xe,"bot"),se(.011,.015,.07,8,$,j,pt+.23,ee,xe,"neck")}}}else if(ct==="baskets"){let ot=Math.max(2,Math.floor(M/.2));for(let Qe=0;Qe<ot;Qe++){let at=D+.03+Qe*(M-.06)/ot;P(Ee,.008,be,k.dside,L,at,Fe,xe,!1),P(Ee,.04,.006,k.steel,L,at+.03,ut+.01,xe,!1),P(Ee,.04,.006,k.steel,L,at+.03,Ye-.03,xe,!1);let pt=Math.max(1,Math.floor(be/.11));for(let S=0;S<pt;S++){let V=ut+(S+.5)*be/pt;Ee>.1?(se(.035,.035,.09,12,k.jar,L,at+.05,V,xe,"jar2"),se(.037,.037,.015,12,k.jarLid,L,at+.1,V,xe,"jarl2")):P(.05,.1,.07,(S+Qe)%2?k.bottleW:k.cup,L,at+.055,V,xe,!1)}}}else if(ct==="bins"){let ot=Ee>.4?3:2,Qe=Ee/ot-.015,at=[k.binY,k.binB,k.binG];for(let pt=0;pt<ot;pt++){let S=L-Ee/2+(pt+.5)*Ee/ot,V=Math.min(.36,M-.14);P(Qe,V,be-.04,k.bin,S,D+.04+V/2,Fe,xe,!1),P(Qe+.006,.02,be-.02,at[pt],S,D+.05+V,Fe,xe,!1)}}else{let ot=Math.max(1,Math.floor(M/.3));for(let Qe=0;Qe<ot;Qe++)P(Ee,.01,be,k.dbot,L,D+.03+Qe*M/ot,Fe,xe,!1)}le(_,ye,"pz",Math.min(.55,be*.88))}function Xe(_,w,L,C,D,M,T,W){let{M:k,s:Z,g:K,zf:J}=_,G=w.k||"door";if(G==="open"){ke(_,{in:w.in||"shelf",dec:w.dec||"mix"},L,C,D,M,!0);return}if(G==="blind"){P(C-rt*2,M-rt,.02,_.mat||k.F,L,D+M/2,J+.01,K);return}if(G==="oven"||G==="micro"){P(C-rt*2,M-rt,.02,k.glass,L,D+M/2,J+.01,K),P(C-.1,M*.62,.004,N("m_ov",()=>new qe({color:"#202326",roughness:.2,metalness:.4})),L,D+M*.44,J+.022,K,!1),P(C*.8,.018,.03,k.steel,L,D+M-.06,J+.04,K),G==="oven"&&P(C*.5,.02,.004,k.steel,L,D+M-.025,J+.022,K,!1);return}if(G==="drawer"||G==="pull"){Oe(_,w,L,C,D,M,T,W);return}if(G==="door"||G==="glass"){Ve(_,w,L,C,D,M,w.a||"l",G==="glass"),ke(_,w,L,C,D,M,G==="glass");return}if(G==="door2"||G==="glass2"){let ce=G==="glass2";Ve(_,w,L-C/4,C/2,D,M,"l",ce),Ve(_,w,L+C/4,C/2,D,M,"r",ce),ke(_,w,L,C,D,M,ce);return}if(G==="flap"){let ce=new ht;ce.position.set(L,D+M,J),K.add(ce),P(C-rt*2,M-rt,.02,_.mat||k.F,0,-M/2,.01,ce),!w.nh&&Z.handle!=="grifflos"&&P(Math.min(.4,C*.6),.015,.025,k.handle,0,-M+.05,.03,ce),le(_,ce,"rx",-1.75),ke(_,w,L,C,D,M,!1);return}if(G==="dw"){let ce=new ht;ce.position.set(L,D,J),K.add(ce),P(C-rt*2,M-rt,.02,_.mat||k.F,0,M/2,.01,ce),Z.handle!=="grifflos"&&P(Math.min(.4,C*.6),.015,.025,k.handle,0,M-.05,.03,ce);let ye=Ce(_,K),xe=C-2*mt-.02,{zb:Ee}=_,be=J-Ee-.06,Ye=(J+Ee)/2;P(xe,M-.04,.01,k.steel,L,D+M/2,Ee+.03,ye,!1),[.14,.44].forEach((ut,Fe)=>{let dt=new ht;ye.add(dt),P(xe-.02,.006,be,k.dside,L,D+ut,Ye,dt,!1),P(xe-.02,.07,.006,k.dside,L,D+ut+.035,Ye+be/2,dt,!1);let ct=Math.max(4,Math.floor(xe/.05));for(let Dt=0;Dt<ct;Dt++){let ot=new Je(N("dwplate",()=>new Gt(.1,.1,.01,20)),k.plate);ot.rotation.x=Math.PI/2,ot.position.set(L-xe/2+.04+Dt*(xe-.08)/(ct-1),D+ut+.1,Ye-.06*Fe),dt.add(ot)}Fe===0&&le(_,dt,"pz",.32)}),le(_,ce,"rx",1.45);return}}function B(_,w,L,C,D,M){let T=w.reduce((K,J)=>K+(J.cm!=null?J.cm/100:0),0),W=w.reduce((K,J)=>K+(J.cm==null?J.p||1:0),0)||1,k=Math.max(0,M-T),Z=D+M;w.forEach((K,J)=>{let G=K.cm!=null?K.cm/100:k*(K.p||1)/W;G>.005&&Xe(_,K,L,C,Z-G,G,J,w.length),Z-=G})}function Se(_,w,L,C){let{g:D,M,s:T}=_,W=.6,k=.9+C,Z=lt+C,K=k-At-Z,J=.3,G=new ht;D.add(G),w.corner.side==="r"&&(G.scale.x=-1);let ce=-L/2,ye=-L/2+.6;P(L,lt+C,W-.06,M.plinth,0,(lt+C)/2,-.03,G),P(.6-.06,lt+C,J,M.plinth,ce+.27,(lt+C)/2,W/2+J/2,G),P(L-rt,K,.008,M.carcass,0,Z+K/2,-W/2+.004,G),P(mt,K,W+J-.02,M.carcass,ce+mt/2,Z+K/2,(J-.02)/2,G),P(mt,K,W-.02,M.carcass,L/2-mt/2,Z+K/2,-.01,G),P(.6,K,mt,M.carcass,ce+.3,Z+K/2,W/2+J-.02-mt/2,G),P(L-rt,mt,W-.02,M.inner,0,Z+mt/2,-.01,G,!1),P(.6,mt,J,M.inner,ce+.3,Z+mt/2,W/2+J/2-.01,G,!1),P(L+.002,At,W+.02,M.top,0,k-At/2,.01,G),P(.6,At,J,M.top,ce+.3,k-At/2,W/2+.02+J/2-.01,G);let xe=W/2-.02,Ee=_.mat||M.F,be=L/2-ye,Ye=new ht;Ye.position.set(L/2,0,xe),G.add(Ye),P(be-rt*2,K-rt,.02,Ee,-be/2,Z+K/2,.01,Ye);let ut=new ht;ut.position.set(ye+.02,0,W/2+J-.02),G.add(ut),P(.02,K-rt,J-rt*2,Ee,.01,Z+K/2,-J/2+.01,ut),T.handle!=="grifflos"&&P(.016,.14,.025,M.handle,-be+.05,k-At-.12,.03,Ye),le(_,Ye,"ry",1.62),le(_,ut,"ry",-1.62);let Fe=new ht;Fe.position.set(ce+.45,0,.15),G.add(Fe),_.hide.push(Fe);let dt=N("kardisc",()=>new Gt(.4,.4,.02,40,1,!1,Math.PI/2,Math.PI*1.5)),ct=N("karrim",()=>new Gt(.405,.405,.05,40,1,!0,Math.PI/2,Math.PI*1.5));[.22,.5].forEach((Dt,ot)=>{let Qe=new Je(dt,M.inner);Qe.position.y=Z+Dt,Fe.add(Qe);let at=new Je(ct,M.steel);at.position.y=Z+Dt+.025,Fe.add(at);for(let pt=0;pt<4;pt++){let S=Math.PI/2+.5+pt*.9;se(.07,.06,.1+ot*.02,16,pt%2?M.steel:M.jar,Math.sin(S)*.25,Z+Dt+.06,Math.cos(S)*.25,Fe,"karpot"+ot)}}),se(.012,.012,K-.04,8,M.steel,0,Z+K/2,0,Fe,"karax"),le(_,Fe,"ry",-Math.PI/2)}function ae(_,w,L,C,D,M){let{M:T}=_,W=new ht;_.g.add(W),_.hide.push(W);let k=N("lemans",()=>{let Z=new hs;return Z.moveTo(-.22,-.16),Z.lineTo(.18,-.16),Z.quadraticCurveTo(.26,-.16,.26,-.06),Z.lineTo(.26,.1),Z.quadraticCurveTo(.26,.18,.16,.18),Z.lineTo(-.06,.18),Z.quadraticCurveTo(-.22,.18,-.24,.02),Z.quadraticCurveTo(-.26,-.16,-.22,-.16),new mr(Z,{depth:.03,bevelEnabled:!1})});[.2,.48].forEach(Z=>{let K=C+Z*D/.72,J=new Je(k,T.inner);J.rotation.x=-Math.PI/2,J.position.set(0,K,0),W.add(J);for(let G=0;G<3;G++)se(.06,.05,.09,16,G===1?T.steel:T.jar,-.12+G*.13,K+.075,.01,W,"lmpot")}),W.position.set(w+M*.14,0,-.02),le(_,W,"px",-M*.16),le(_,W,"pz",.42),le(_,W,"ry",-M*.45)}function ve(_,w,L,C,D){let M=C.kind||"b",T=C.w/100,W=(C.d||(M==="u"?35:60))/100,k=M==="b"?((C.ah||90)-90)/100:0;if(D.kind=M,D.d=W,D.mat=C.acc?w.FA:null,C.corner&&C.corner.kind==="kar"){Se(D,C,T,k);return}let Z,K;M==="u"?(Z=(C.y0||145)/100,K=(C.h||72)/100):M==="t"?(Z=lt,K=(C.h||216)/100-lt,P(T,lt,W-.06,w.plinth,0,lt/2,-.03,_)):(Z=lt+k,K=.9+k-At-Z,P(T,lt+k,W-.06,w.plinth,0,(lt+k)/2,-.03,_));let{zf:J,zb:G}=te(_,w,T,K,W,Z);D.zf=J,D.zb=G;let ce=C.cols||[{fr:C.fr||[{k:"door"}]}],ye=ce.reduce((be,Ye)=>be+(Ye.cm?Ye.cm/100:0),0),xe=ce.filter(be=>!be.cm).length||1,Ee=-T/2;if(ce.forEach(be=>{let Ye=be.cm?be.cm/100:(T-ye)/xe,ut=K-rt;B(D,be.fr,Ee+Ye/2,Ye,Z+rt/2,ut),be.lemans&&ae(D,Ee+Ye/2,Ye,Z,K,be.lemans),Ee+=Ye}),L.handle==="grifflos"&&M!=="u"&&!C.noGrip&&P(T,.02,.01,w.steel,0,Z+K-.012,J-.004,_,!1),M==="b"&&(P(T+.002,At,W+.02,w.top,0,.9+k-At/2,.01,_),C.app)){let be=new ht;_.add(be),C.app==="sp"?pe(be,w,T,W,.9+k):Ae(be,w,T,C.app==="kfb",.9+k)}M==="u"&&C.led!==!1&&P(T-.02,.01,.02,w.led,0,Z-.004,J-.05,_,!1)}let oe={us:(_,w,L,C)=>he(_,w,L,C.w/100,.6,{parts:C.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(_,w,L,C)=>{he(_,w,L,C.w/100,.6,{parts:[1]}),pe(_,w,C.w/100,.6)},kf:(_,w,L,C)=>{if(C.v==="ofen"){let D=C.w/100;he(_,w,L,D,.6,{parts:[.2,.8]});let M=.9-At-lt;P(D-.05,M*.8-.1,.022,w.glass,0,lt+M*.8/2,.3,_),P(D*.8,.018,.03,w.steel,0,lt+M*.8-.06,.32,_),Ae(_,w,D,!1);return}he(_,w,L,C.w/100,.6,{parts:[.25,.375,.375]}),Ae(_,w,C.w/100,C.v!=="normal")},gs:(_,w,L,C)=>he(_,w,L,C.w/100,.6,{parts:[1],noHandle:L.handle==="grifflos"}),ec:(_,w,L,C)=>he(_,w,L,C.w/100,.6,{parts:[.18,.82]}),hs:(_,w,L,C)=>{let D=C.w/100,M=.6,T=vg-lt;P(D-rt,T,M,w.carcass,0,lt+T/2,-.01,_),P(D,lt,M-.06,w.plinth,0,lt/2,-.03,_);let W=M/2;C.v==="backofen"||C.v==="dampf"?(ie(_,w,D,0,lt,.7,W,[.5,.5],L),P(D-.04,.58,.022,w.glass,0,lt+.7+.3,W,_),P(D*.8,.02,.03,w.steel,0,lt+.7+.55,W+.02,_),C.v==="dampf"?(P(D-.04,.44,.022,w.glass,0,lt+1.32+.22,W,_),ie(_,w,D,0,lt+1.78,T-1.78,W,[1],L,{vertical:!0,vpos:["bottom"],hl:.2})):ie(_,w,D,0,lt+1.32,T-1.32,W,[1],L,{vertical:!0,vpos:["bottom"],hl:.26})):C.v==="kuehl"?ie(_,w,D,0,lt,T,W,[.6,.4],L,{vertical:!0,side:-1,vpos:["bottom","top"]}):ie(_,w,D,0,lt,T,W,[.5,.5],L,{vertical:!0,vpos:["bottom","top"]})},kfr:(_,w,L,C)=>{let D=C.w/100,M=.7,T=1.78;P(D-.01,T,M-.02,w.fridge,0,T/2,0,_),P(.004,T-.02,.02,w.black,0,T/2,M/2,_),P(.02,.7,.04,w.steel,-.06,1.1,M/2+.03,_),P(.02,.7,.04,w.steel,.06,1.1,M/2+.03,_),P(.18,.3,.01,w.black,-.22,1.15,M/2+.001,_)},ws:(_,w,L,C)=>{let D=C.w/100,M=.35;if(C.v==="offen"){[0,.36,.72].forEach(T=>P(D-.01,.025,M-.02,w.F,0,pn+T+.012,0,_)),P(.025,un,M-.02,w.F,-D/2+.012,pn+un/2,0,_),P(.025,un,M-.02,w.F,D/2-.012,pn+un/2,0,_);return}P(D-rt,un,M,w.carcass,0,pn+un/2,0,_),C.v==="glas"?(P(D-rt*2,un-rt,.02,w.glassClear,0,pn+un/2,M/2+.005,_),P(D-.04,.015,M-.04,w.inner,0,pn+un/2,0,_)):P(D-rt*2,un-rt,.02,w.FA,0,pn+un/2,M/2+.005,_),L.handle!=="grifflos"&&C.v!=="glas"&&P(.016,.2,.025,w.handle,D/2-.055,pn+.06+.1,M/2+.025,_),P(D-.02,.01,.02,w.led,0,pn-.004,M/2-.05,_,!1)},ns:(_,w,L,C)=>{let D=C.w/100,M=(C.h||55)/100,T=((C.ah||90)-90)/100;if(M<=.01)return;let W=L.back==="platte"?w.top:L.back==="fliese"?w.tile:L.back==="glas"?w.backGlass:null;W&&P(D,M,.012,W,0,.9+T+M/2,0,_,!1)},hb:(_,w,L,C)=>{let D=C.w/100;P(D,.1,.5,w.steel,0,1.62,0,_),P(.3,1,.25,w.steel,0,2.17,-.12,_)},rg:(_,w,L,C)=>{let D=C.w/100;[0,.38].forEach(M=>P(D,.04,.26,w.top,0,1.5+M,0,_))},in:(_,w,L,C)=>{let D=C.w/100,M=(C.d||100)/100,T=M-.3,W=-M/2+T/2,k=Math.max(2,Math.round(D/.6)),Z=D/k;for(let J=0;J<k;J++){let G=-D/2+Z*J+Z/2,ce=new ht;ce.position.set(G,0,W),he(ce,w,L,Z,T,{noTop:!0,parts:C.v==="spuele"&&J===Math.floor(k/2)?[1]:[.25,.375,.375]}),_.add(ce)}if(P(D+.08,At,M,w.top,0,.9-At/2,0,_),P(.04,.9-At,M,w.top,-D/2-.02,(.9-At)/2,0,_),P(.04,.9-At,M,w.top,D/2+.02,(.9-At)/2,0,_),C.v==="kochfeld"){let J=new ht;J.position.set(0,0,W+.05),Ae(J,w,.8,!0),_.add(J)}if(C.v==="spuele"){let J=new ht;J.position.set((Math.floor(k/2)+.5)*Z-D/2,0,W+.05),pe(J,w,Z,T+.3),_.add(J)}let K=Math.max(2,Math.floor(D/.55));for(let J=0;J<K;J++){let G=-D/2+D/(K+1)*(J+1),ce=M/2+.22,ye=new Je(N("leg",()=>new Gt(.02,.02,.62,12)),w.stool);ye.position.set(G,.31,ce),ye.castShadow=!0,_.add(ye);let xe=new Je(N("seatg",()=>new Gt(.18,.17,.05,24)),w.seat);xe.position.set(G,.64,ce),xe.castShadow=!0,_.add(xe)}for(let J=0;J<3;J++){let G=-D/2+D/4*(J+1),ce=new Je(N("lamp",()=>new pr(.12,.22,24,1,!0)),w.stool);ce.position.set(G,1.82,0),_.add(ce);let ye=new Je(N("bulb",()=>new _r(.04,12,12)),w.glow);ye.position.set(G,1.74,0),_.add(ye);let xe=new Je(N("cord",()=>new Gt(.004,.004,.7,6)),w.stool);xe.position.set(G,2.28,0),_.add(xe)}},th:(_,w,L,C)=>{let D=C.w/100,M=(C.d||40)/100;P(D,1.06,.06,w.FA,0,.53,-M/2+.05,_),P(D+.04,At,M+.04,w.top,0,1.08,0,_);let T=Math.max(2,Math.floor(D/.55));for(let W=0;W<T;W++){let k=-D/2+D/(T+1)*(W+1),Z=M/2+.22,K=new Je(N("leg2",()=>new Gt(.02,.02,.78,12)),w.stool);K.position.set(k,.39,Z),_.add(K);let J=new Je(N("seatg",()=>new Gt(.18,.17,.05,24)),w.seat);J.position.set(k,.8,Z),J.castShadow=!0,_.add(J)}}};function Be(_){let w=_.userData.st,L=Mg(w.c);w.anims.forEach(C=>{let D=C.b+C.to*L;C.k==="rx"?C.o.rotation.x=D:C.k==="ry"?C.o.rotation.y=D:C.k==="px"?C.o.position.x=D:C.o.position.z=D}),w.hide.forEach(C=>{C.visible=w.c>.001})}function Pe(_){let w=_.style,L=_.room,C=re(w);Q&&O.remove(Q),Q=new ht,O.add(Q),ne={};let D=L.w/100,M=L.d/100,T=2.6;if(t){let G=new Je(new Vn(D+6,M+6),N("shadowcatch",()=>new vr({opacity:.34})));G.rotation.x=-Math.PI/2,G.position.set(D/2,0,M/2),G.receiveShadow=!0,Q.add(G)}else{let G=new Je(new Vn(D+4,M+4),C.floor);G.rotation.x=-Math.PI/2,G.position.set(D/2,0,M/2),G.receiveShadow=!0,Q.add(G)}let W=t?{}:L.walls||{N:1,E:1,S:1,W:1},k={N:[D,D/2,0,0],S:[D,D/2,M,Math.PI],W:[M,0,M/2,Math.PI/2],E:[M,D,M/2,-Math.PI/2]};q={};for(let G in k){if(!W[G])continue;let[ce,ye,xe,Ee]=k[G],be=new ht;be.userData={p:new z(ye,0,xe),n:{N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]}[G]},q[G]=be,Q.add(be);let Ye=new Je(new Vn(ce,T),C.wall);Ye.position.set(ye,T/2,xe),Ye.rotation.y=Ee,Ye.receiveShadow=!0,be.add(Ye)}(_.open||[]).forEach(G=>{if(!W[G.wall])return;let[ce,ye,xe,Ee]=k[G.wall],be=new ht;be.rotation.y=Ee;let Ye=G.s/100+G.w/200,ut={N:[Ye,0],S:[D-Ye,M],W:[0,M-Ye],E:[D,Ye]}[G.wall];be.position.set(ut[0],0,ut[1]);let Fe=G.w/100;if(G.t==="fenster"){let dt=(G.y||100)/100,ct=(G.h||120)/100,Dt=new Je(N("pane",()=>new Vn(1,1)),C.sky);Dt.scale.set(Fe,ct,1),Dt.position.set(0,dt+ct/2,.003),be.add(Dt),P(Fe+.08,.06,.06,C.frame,0,dt,.03,be,!1),P(Fe+.08,.06,.06,C.frame,0,dt+ct,.03,be,!1),P(.06,ct,.06,C.frame,-Fe/2,dt+ct/2,.03,be,!1),P(.06,ct,.06,C.frame,Fe/2,dt+ct/2,.03,be,!1),Fe>.9&&P(.04,ct,.04,C.frame,0,dt+ct/2,.03,be,!1),P(Fe+.1,.03,.12,C.frame,0,dt-.015,.06,be,!1)}else P(Fe,2.05,.01,G.t==="durchgang"?C.plinth:C.door,0,2.05/2,.006,be,!1),P(Fe+.1,.06,.05,C.frame,0,2.05+.03,.025,be,!1),P(.05,2.05,.05,C.frame,-Fe/2-.025,2.05/2,.025,be,!1),P(.05,2.05,.05,C.frame,Fe/2+.025,2.05/2,.025,be,!1),G.t==="tuer"&&P(.12,.02,.04,C.steel,Fe/2-.1,1.05,.04,be);q[G.wall].add(be)});let Z=[];_.items.forEach(G=>{let ce=new ht;if(G.t==="cab"){let ye={g:ce,M:C,s:w,anims:[],hide:[]};ve(ce,C,w,G,ye),ye.anims.length&&(ce.userData.st={c:0,t:0,anims:ye.anims,hide:ye.hide},ce.userData.pid=G.id,ce.userData.label=G.label||"",G.id!=null&&(ne[G.id]=ce))}else{let ye=oe[G.t];if(!ye)return;ye(ce,C,w,G)}ce.position.set(G.x/100,0,G.z/100),ce.rotation.y=(G.r||0)*Math.PI/180,Q.add(ce),(G.t==="ws"&&G.v!=="offen"||G.t==="cab"&&G.kind==="u"&&G.led!==!1)&&(ce.updateMatrixWorld(),Z.push(ce.localToWorld(new z(0,(G.t==="cab"?(G.y0||145)/100:pn)-.05,.06))))});for(let G in ne){let ce=ne[G],ye=ce.userData.st;ye.t=ye.c=H||_e.has(String(G))?1:0,Be(ce)}if(d==="abend"){let G=new Cn("#ffe2c0",26,0,2);G.position.set(D/2,2.5,M/2+.3),Q.add(G);let ce=new Cn("#ffcf96",10,0,2);if(ce.position.set(D/2,1.9,M-.4),Q.add(ce),Z.slice(0,10).forEach(ye=>{let xe=new Cn("#ffe4b8",3.2,1.8,2);xe.position.copy(ye),Q.add(xe)}),_.items.some(ye=>ye.t==="in")){let ye=_.items.find(Ee=>Ee.t==="in"),xe=new Cn("#ffd09a",2.5,2.5,2);xe.position.set(ye.x/100,1.7,ye.z/100),Q.add(xe)}}R();let K=L.w+"x"+L.d;A={w:D,d:M},t?g.position.set(D/2+1.2,6,M/2+4):g.position.set(D/2-3,7,M/2+5),g.target.position.set(D/2,0,M/2);let J=Math.max(D,M)/2+1.5;Object.assign(g.shadow.camera,{left:-J,right:J,top:J,bottom:-J}),g.shadow.camera.updateProjectionMatrix(),K!==E&&(E=K,a&&(a.target.set(D/2,.9,M/2),b("perspektive"))),p()}function b(_){if(c=_,!a)return;let w=A.w,L=A.d,C={x:w/2,z:L/2},D=Math.max(w,L)*(o.aspect<1?1.75:o.aspect<1.3?1.3:1.05),M={perspektive:[C.x+D*.42,1.5+D*.55,C.z+D*1],front:[C.x,1.6,C.z+D*.95+.8],top:[C.x,D*1.45+2,C.z+.01],ecke:[C.x-D*.5,1.6+D*.45,C.z+D*.95],augen:[C.x,1.62,L-.35]}[_];M&&(o.position.set(...M),_==="augen"?a.target.set(C.x,1.25,.3):a.target.set(w/2,.9,L/2),a.update()),p()}function y(){let _=i.clientWidth,w=i.clientHeight;!_||!w||(n.setSize(_,w,!1),n.domElement.style.width=_+"px",n.domElement.style.height=w+"px",o.aspect=_/w,o.updateProjectionMatrix(),!l&&E&&a&&b(c),p())}y();let X=new ResizeObserver(y);X.observe(i);let me=!0,de=new IntersectionObserver(([_])=>{me=_.isIntersecting,me&&p()});de.observe(i);let ue=!1,Ue=0;function we(_,w){let L=_.userData.st;L.t=w?1:0,yg?(L.c=L.t,Be(_),p()):ue=!0,p()}function Le(_){let w=Math.min(.05,(_-(Ue||_))/1e3);Ue=_;let L=!1;for(let C in ne){let D=ne[C],M=D.userData.st;M.c!==M.t&&(L=!0,M.c=M.t>M.c?Math.min(M.t,M.c+w/.65):Math.max(M.t,M.c-w/.55),Be(D))}return L||(ue=!1,Ue=0),L}let ze=new br,Ge=new Me;function ge(_){for(let w=_;w;w=w.parent)if(!w.visible)return!1;return!0}function $e(_,w){if(!Q)return null;let L=n.domElement.getBoundingClientRect();Ge.set((_-L.left)/L.width*2-1,-(w-L.top)/L.height*2+1),ze.setFromCamera(Ge,o);let C=ze.intersectObject(Q,!0);for(let D of C)if(ge(D.object)){for(let M=D.object;M&&M!==Q;M=M.parent)if(M.userData&&M.userData.st)return M;if(!(D.object.isMesh&&D.object.material&&D.object.material.isShadowMaterial))return null}return null}let U=null;if(!t){U=document.createElement("div"),U.setAttribute("aria-hidden","true"),U.style.cssText="position:absolute;z-index:3;pointer-events:none;padding:6px 10px;border-radius:10px;background:rgba(24,22,20,.86);color:#fff;font:600 12px/1.3 system-ui,sans-serif;white-space:nowrap;opacity:0;transition:opacity .15s;transform:translate(-50%,-130%)",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(U);let _=null,w=0;n.domElement.addEventListener("pointerdown",L=>{_={x:L.clientX,y:L.clientY,t:performance.now()}}),n.domElement.addEventListener("pointerup",L=>{if(!_)return;let C=Math.hypot(L.clientX-_.x,L.clientY-_.y),D=performance.now()-_.t;if(_=null,C>6||D>600)return;let M=$e(L.clientX,L.clientY);if(!M)return;let T=String(M.userData.pid),W=!(M.userData.st.t>.5);if(W?_e.add(T):_e.delete(T),!W&&H){H=!1;for(let k in ne)k!==T&&ne[k].userData.st.t>.5&&_e.add(k)}we(M,W),e.onPick&&e.onPick(M.userData.pid,W)}),n.domElement.addEventListener("pointermove",L=>{if(L.pointerType!=="mouse"||L.buttons){U.style.opacity=0;return}let C=performance.now();if(C-w<70)return;w=C;let D=$e(L.clientX,L.clientY),M=i.getBoundingClientRect();D&&D.userData.label?(U.textContent=D.userData.label+(D.userData.st.t>.5?" \xB7 klicken zum Schlie\xDFen":" \xB7 klicken zum \xD6ffnen"),U.style.left=L.clientX-M.left+"px",U.style.top=L.clientY-M.top+"px",U.style.opacity=1,n.domElement.style.cursor="pointer"):(U.style.opacity=0,n.domElement.style.cursor="")}),n.domElement.addEventListener("pointerleave",()=>{U.style.opacity=0})}function fe(_){if(!f&&(requestAnimationFrame(fe),!(u||!me||!i.clientWidth)&&(a&&a.update()&&(h=!0),ue&&Le(_)&&(h=!0),!!h))){h=!1;for(let w in q){let L=q[w].userData;q[w].visible=(o.position.x-L.p.x)*L.n[0]+(o.position.z-L.p.z)*L.n[1]>0}n.render(s,o)}}return requestAnimationFrame(fe),{set:Pe,view:_=>{l=!1,b(_)},mood:(_,w)=>{d=_,w?Pe(w):R()},snapshot:()=>(n.render(s,o),n.domElement.toDataURL("image/jpeg",.9)),toggle:(_,w)=>{let L=ne[_];if(!L)return!1;let C=w==null?!(L.userData.st.t>.5):!!w;return C?_e.add(String(_)):_e.delete(String(_)),we(L,C),C},openAll:_=>{H=!!_,_||_e.clear();for(let w in ne)we(ne[w],H);return H},isAllOpen:()=>H,pause:_=>{u=!!_,_||p()},camera:o,rig:F,setPhoto:({pos:_,quat:w,fov:L})=>{_&&o.position.set(_[0],_[1],_[2]),w&&o.quaternion.set(w[0],w[1],w[2],w[3]),L&&(o.fov=L),o.updateProjectionMatrix(),o.updateMatrixWorld(),p()},lookAt:(_,w,L)=>{o.position.set(_[0],_[1],_[2]),o.up.set(0,1,0),o.lookAt(w[0],w[1],w[2]),L&&(o.fov=L),o.updateProjectionMatrix(),o.updateMatrixWorld(),p()},setRig:({x:_=0,z:w=0,ry:L=0,s:C=1,cx:D=0,cz:M=0})=>{F.position.set(D+_,0,M+w),F.rotation.y=L,F.scale.setScalar(C),O.position.set(-D,0,-M),p()},floorAt:(_,w)=>{Ge.set(_,w),ze.setFromCamera(Ge,o);let L=new z;return ze.ray.intersectPlane(new Yt(new z(0,1,0),0),L)?{x:L.x,z:L.z}:null},exposure:_=>{v=_,n.toneMappingExposure=_,p()},render:()=>{n.render(s,o)},capture:(_,w)=>{let L=n.getPixelRatio(),C=i.clientWidth,D=i.clientHeight;n.setPixelRatio(1),n.setSize(_,w,!1),o.aspect=_/w,o.updateProjectionMatrix(),n.render(s,o);let M=document.createElement("canvas");return M.width=_,M.height=w,M.getContext("2d").drawImage(n.domElement,0,0,_,w),n.setPixelRatio(L),n.setSize(C,D,!1),n.domElement.style.width=C+"px",n.domElement.style.height=D+"px",o.aspect=C/D,o.updateProjectionMatrix(),p(),M},dispose:()=>{f=!0,X.disconnect(),de.disconnect(),a&&a.dispose(),n.dispose();try{n.forceContextLoss()}catch{}n.domElement.remove(),U&&U.remove()}}}window.PelPlanner3D=Sg;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
