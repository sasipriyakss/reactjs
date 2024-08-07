"use strict";!function(e,n,t,a,r,s,i,o){var c=e._snigelConfig;if(c)try{t=c.settings.adconsent.objName}catch(e){}var u=void 0,l=84,p=229,f="__"+t,d="stub",v="loaded",g="pwuserstatus",m=void 0,b={tcfeuv2:{z:1,v:2,sid:2,api:r,f:r,s:"getTCData",c:"euconsent-v2",n:"GDPR"},uspv1:{z:2,v:1,sid:6,api:i,f:i,s:"getUSPData",c:"usprivacy",n:"CCPA"},tcfcav1:{z:3,v:2,sid:5,api:t+".pipeda",f:"__tcfca",s:"getTCData",c:"caconsent",n:"PIPEDA"},usnat:{z:4,v:1,sid:7,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usconsent",n:"USNATIONAL"},usca:{z:5,v:1,sid:8,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscaconsent",n:"US-CALIFORNIA"},usco:{z:6,v:1,sid:10,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscoconsent",n:"US-COLORADO"},usct:{z:7,v:1,sid:12,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usctconsent",n:"US-CONNECTICUT"},usva:{z:8,v:1,sid:9,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usvaconsent",n:"US-VIRGINIA"},usut:{z:9,v:1,sid:11,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usutconsent",n:"US-UTAH"}},h=[1,2],C={gppVersion:"1.1",supportedAPIs:Object.keys(b).map(e=>b[e].sid+":"+e),cmpStatus:d,cmpDisplayStatus:"disabled",cmpId:p};function y(e){return"function"==typeof e}function S(e){return"string"==typeof e}try{o=localStorage}catch(e){}var I,E,A=e.performance,L=A&&A.now?function(){return Math.floor(A.now())}:function(){return 0};function _(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push(function(){window.argus.queueError("adconsent",n)})}}!function(){if(y(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:u};var a=n.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{function w(n,t,a,r){e.console[n]&&T.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(a,n.toUpperCase()+":",r))}function D(n){return n===a?function(t,a,r){e[n](t,r,a,u)}:function(t,a,r){e[n](t,u,r,a)}}var U=D(f);U.utils={},U.functions={},U.constants={},U.constants.pwUserStatusStorageName=g,U.gdpr=D(r);var P=U.gdpr;P.listenerId=1,P.tcfListeners=[],P.addEventListener=function(e,n,t){if($(J,e,n)){z("Adding event listener "+P.listenerId,n);var a={id:P.listenerId++,callback:n||function(){}};P.tcfListeners.push(a),t(null,a.id,a.callback)}},P.removeEventListener=function(e,n,t,a,r){if($(J,t,a)){z("Removing event listener "+r);for(var s=0;s<P.tcfListeners.length;s++)if(P.tcfListeners[s].id==r)return P.tcfListeners.splice(s,1),void ee(a,!0);G("Couldn't find listener id "+r+"."),ee(a,!1)}},P.getTCData=function(e,n,t,a){if($(J,t,a))return K(null,0,a)},P.processListeners=function(e){for(var n=P.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},U.ccpa=D(i),U.gpp=D(a);var k=U.gpp;k.eventListeners={id:0},k.fibonacciEncode=function(e){var n=function e(n,t){t=t||[];if(!n)return t;var a=0;for(;n>=h[a];)++a>=h.length&&h.push(h[a-1]+h[a-2]);t.push(a);return e(n-h[a-1],t)}(e),t="";if(n.length){var a,r=0,s=n[0],i=n[r];t="1";for(var o=s;o>0;o--)a="0",o===i&&(a="1",++r<n.length&&(i=n[r])),t=a+t}return t},k.fibonacciDecode=function(e){var n=0;if(e.length>1)for(var t=0;t<e.length-1;t++)t>=h.length&&h.push(h[t-1]+h[t-2]),"1"===e.charAt(t)&&(n+=h[t]);return n},U.version=l,U.cmpId=p;U.cfg=c&&c.adConsentConfigOverrides?c.adConsentConfigOverrides:{apiBaseUrl:"https://cdn.snigelweb.com/adconsent/84",publisherCC:"US",storage:0};var N=U.cfg;U.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){_(arguments),w("error",1,arguments,"#ff0000")},warn:function(){w("warn",2,arguments,"#ffe600")},info:function(){w("info",3,arguments,"#3b88a3")},debug:function(){w("debug",4,arguments,"#808080")}};var T=U.log,z=T.debug,O=T.info,G=T.warn,V=T.error;U.consent=function(){var e={regions:{0:"NONE"},region:u,api:{}};for(var n in b){var t=b[n];e.regions[t.z]=t.n,e.api[n]={region:t.z,loaded:!1,applies:u,version:t.v,status:d}}return e}();var R=U.consent,x=R.regions,q=R.api,J=q.tcfeuv2,W=q.uspv1;U.analytics={enabled:!1,callback:u,send:function(e){j.sendEvent(x[R.region],e,L())},sendEvent:function(n,t,a){(O("Sending analytics event action"+(j.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+a),j.enabled)&&(j.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):G("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:a||0,nonInteraction:!0})}};var j=U.analytics,M=j.send;U.event={fired:{},dispatchCustomEvent:function(e,t,a){a&&F[e]||(F[e]=!0,z("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};M(t[n]),R.region!=b.tcfeuv2.z&&R.region!=b.tcfcav1.z||0==e||M("Publisher"+t[e]);var a=te(e,n);m=3==a,B.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,globalConsent:a,gdprApplies:J.applies,uspApplies:W.applies,currentAPI:C.currentAPI}}})}};var B=U.event,F=B.fired,H=(E=e.location.search)?E.replace(/^\?/,"").split("&").reduce(function(e,n){var t=n.split("="),a=t[0],r=t.length>1?t[1]:u;return/\[\]$/.test(a)?(e[a=a.replace("[]","")]=e[a]||[],e[a].push(r)):e[a]=r||"",e},{}):{},X=("true"==H.sn_debug?"debug":null)||("true"==H.adconsent_debug?"debug":null)||H.adconsent_log;if(T.level=T.levels[X]||T.level,e[t])return void V("Stub is tried to load again!");if(e[r]||e[i]||e[a])return void G("A cmp is already registered in the system. AdConsent is stopping.");function $(e,n,t){return!n||n===e.version||(ee(t,null,!1),z("Wrong framework version detected: "+n),!1)}function K(e,n,t){var a=J.applies?u:J.applies,r={tcString:u,tcfPolicyVersion:4,cmpId:p,cmpVersion:l,gdprApplies:a,eventStatus:!1===a?"tcloaded":u,cmpStatus:J.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:N.publisherCC,purposeOneTreatment:!1};return z("Sending TCData structure:",r,t),ee(t,r,!0),r}function Q(e,n,t,a,r){e.queue.push({command:n,version:t,parameter:r,callback:a})}function Y(n){for(var t=Array.isArray(n)?n:(n||"").split("."),a=t.length>1,r=t.length-1,s=t[r],i=e,o=0;o<r&&(i=i[t[o]]);o++);return{r:i,e:s,apiParts:t,api:i?i[s]:u,internal:a}}function Z(t,r){var s=function(n){var r=n.data,s=S(r);try{var i=(s?JSON.parse(r):r)[t+"Call"];if(i){var o=function(e,a){try{if(n&&n.source&&n.source.postMessage){var r={};r[t+"Return"]={returnValue:e,success:a===u||a,callId:i.callId},n.source.postMessage(s?JSON.stringify(r):r,"*")}}catch(e){}};t===a?e[t](i.command,o,i.parameter,i.version):e[t](i.command,i.version,o,i.parameter)}}catch(e){}},i=Y(t);if(!i.internal){var o=function(t){if(!e.frames[t]){var a=n.body;if(a){var r=n.createElement("iframe");r.style.display="none",r.name=t,a.appendChild(r)}else setTimeout(o,5,t)}};o(t+"Locator")}if(i.r&&!y(i.api)){i.r[i.e]=function(e,n,s,o){var c=Y(i.apiParts).api;if(!c.queue)return c(e,n,s,o);var l=!1;for(var p in r)if(e===p)return l=!0,(0,r[p])(c,e,n,s,o);if(!l)if(t===a){var f=(e||"none").split("."),d=2===f.length?b[f[0]]:u;if(d){var v=Y(d.api);v.internal?v.api(f[1],s,n):v.api(f[1],d.v,n,s)}else V("Unknown "+t+"() API call '"+e+"'")}else i.internal?Q(c,e,o,s,n):Q(c,e,n,s,o)},i.r[i.e].queue=[],i.internal||(e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s))}}function ee(e,n,t){y(e)&&setTimeout(function(){e(n,t)},0)}function ne(e){if(o){var n="_sn_"+e;try{var t=o.getItem(n).split("~");if(2===t.length&&parseInt(t[0])>=Date.now())return t[1];o.removeItem(n)}catch(e){o.removeItem(n)}}}function te(e,n){return e&&3!==e||3!==n?e||n?e&&1!==e||1!==n?2:1:0:3}e[t]=U,U.utils.getStorageItem=ne,U.resolveGlobalConsent=te;var ae=!1;function re(n,t,a,r,s){if(a||G("setConsentRegion is deprecated and should be only used in debug mode."),R.region===u)if(x[s]){for(var o in b){var c=q[o];c.applies=c.region==s,c.applies?C.currentAPI=o:(c.loaded=!0,c.status=v)}var l;R.region=s,C.applicableSections=[C.currentAPI?b[C.currentAPI].sid:-1],O("Configured consent region "+x[s]),l=(n=>{var t=e[n],a=t.queue;if(a){t.queue=[];for(var r=0;r<a.length;r++){var s=a[r];t(s.command,s.version,s.callback,s.parameter)}}}),R.region!==b.tcfeuv2.z&&P.processListeners(K),R.region!==b.uspv1.z&&l(i),0===R.region&&l(f)}else V("Incorrect consent region "+s)}function se(e){ee(e,{hasSubscription:!1},!0)}function ie(e){ee(e,{consentWallEnabled:!1},!0)}U.functions.isConsentWallUser=se,U.functions.isConsentWallEnabled=ie;var oe=(e,t,a,r)=>{var s=()=>ee(r,{fullConsent:m,region:C.currentAPI},!0),i=()=>{n.removeEventListener("cmpConsentAvailable",i),s()};void 0===m?n.addEventListener("cmpConsentAvailable",i):s()};function ce(e,n){for(var t in k.eventListeners)"id"!==t&&ee(k.eventListeners[t],pe(e,t,n))}function ue(e,n,t){var a=JSON.parse(JSON.stringify(C));return ee(t,a,!0),a}function le(e,n,t,r){var s=S(r)&&b[r];if(s){var i=Y(s.api);return i.internal?i.api(s.s,u,t):i.api(s.s,s.v,t)}return function(e,n,t){var r=a+"() API call '"+e+"': "+t;return V(r),ee(n,{message:r},!1),null}(n,t,"Unknown section '"+r+"'.")}function pe(e,n,t){return{eventName:e,listenerId:Number.parseInt(n),data:t,pingData:ue()}}U.functions.getConsent=oe,Z(r,{ping:function(e,n,t,a){ee(a,{gdprApplies:J.applies,cmpLoaded:J.loaded,cmpStatus:J.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:l,cmpId:p,gvlVersion:u,tcfPolicyVersion:4},!0)},getTCData:P.getTCData,addEventListener:function(e,n,t,a,r){P.addEventListener(t,a,K)},removeEventListener:P.removeEventListener}),Z(i,{getUSPData:function(e,n,t,a,r){if(!1===W.applies){if($(W,t,a)){var s={version:b.uspv1.v,uspString:b.uspv1.v+"---"};return ee(a,s,!0),s}}else Q(e,n,t,a,r)}}),I=function(t){var a=!0,r=C.cmpStatus;C.cmpStatus=v;var s=C.cmpDisplayStatus,i=t.type;if("cmpGUIShow"===i?(C.cmpDisplayStatus="visible",C.signalStatus="not ready",ce("signalStatus","not ready"),a=!1):"cmpGUISubmit"===i&&(C.cmpDisplayStatus="hidden",ce("sectionChange",C.currentAPI)),s!==C.cmpDisplayStatus?ce("cmpDisplayStatus",C.cmpDisplayStatus):r!==v?ce("cmpStatus",v):a=!1,a){var c=function(t){var a={sectionId:3,gppVersion:1,parsedSections:{}};t&&(a.pingData=ue(),a.applicableSections=[C.currentAPI?b[C.currentAPI].sid:-1]);var r=function(e,n,t){var a=S(e)?e:Number(e).toString(2);if(n)for(var r=(n-a.length%n)%n,s=0;s<r;s++)t?a+="0":a="0"+a;return a},s={},i=[];for(var c in b){var u=b[c];if(u&&u.c){var l="_sn_"+u.c,p=(o&&o.getItem(l)||"").split("~");if(p&&2===p.length)try{parseInt(p[0])>=(new Date).getTime()?(s[u.sid]=p[1],i.push(u.sid)):o.removeItem(l)}catch(e){}else{var f=("; "+n.cookie).split("; "+u.c+"=");f.length>=2&&(s[u.sid]=f[f.length-1].split(";").shift(),i.push(u.sid))}a.parsedSections[c]=le(null,null,null,c)}}var d="",v="";d+=r(a.sectionId,6),d+=r(a.gppVersion,6),d+=r(i.length,12);var g=0;return a.sectionList=i.sort(function(e,n){return e-n}),a.sectionList.forEach(function(e){d+=r(0,1);var n=e-g;d+=k.fibonacciEncode(n),v+="~"+s[e],g=e}),d=r(d,6,!0),a.gppString=function(n){for(var t=r(n,8,!0),a="",s=0;s<t.length;s+=8)a+=String.fromCharCode(parseInt(t.substr(s,8),2));return e.btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}(d)+v,a}();C.signalStatus="ready",C.sectionList=c.sectionList,C.gppString=c.gppString,C.parsedSections=c.parsedSections,ce("signalStatus","ready")}},n.addEventListener("cmpGUIShow",I),n.addEventListener("cmpGUISubmit",I),n.addEventListener("cmpConsentAvailable",I),Z(b.tcfcav1.api,{}),Z(b.usnat.api,{}),Z(f,{start:function t(a,r,s,i,c){if(R.region!==u){if(!ae)if(ae=!0,0==R.region)B.dispatchCustomEventConsent(3,3);else if(C.currentAPI){var l=n.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8",l.src=U.cfg.apiBaseUrl+"/adconsent"+b[C.currentAPI].f+".js",n.head.appendChild(l)}}else!function(n,t){if((!n||!n.country)&&(n=null,o)){var a=o.getItem("snconsent_geo");if(a){var r=o.getItem("snconsent_geo_exp");if(r)try{parseInt(r)>=(new Date).getTime()&&(n=JSON.parse(e.atob(a)))}catch(e){}}}if(n)t(n);else{var s=new XMLHttpRequest;s.open("GET","https://pro.ip-api.com/json/?fields=24582&key=33arzTfj1gigDqW"),s.timeout=5e3,s.onload=function(){var n=s.responseText.toLowerCase(),a=JSON.parse(n);a={country:a.countrycode,region:a.region},o&&(o.setItem("snconsent_geo",e.btoa(JSON.stringify(a))),o.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),t(a)},s.onerror=s.ontimeout=function(){t(null)},s.send()}}(c,function(e){if(e&&(N.country=e.country?e.country.toLowerCase():null,N.region=(e.region||"").toLowerCase()),ne(g))re(0,0,1,0,b.tcfeuv2.z);else if("us"===N.country)switch(N.region){case"ca":re(0,0,1,0,b.uspv1.z);break;default:re(0,0,1,0,0)}else-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb ch".indexOf(N.country)?re(0,0,1,0,b.tcfeuv2.z):(N.country||(M("ErrorGeotargeting"),V("Geotargeting failed")),re(0,0,1,0,0));t()})},setStorageType:function(e,n,t,a,r){0!==r&&1!==r?ee(a,{message:"Invalid storage type: should be 0 (cookie) or 1 (local storage)."},!1):1!==r||o?(N.storage=r,ee(a,null,!0)):ee(a,{message:"Storage type 'localStorage' was selected, but local storage is not available. Reverting to cookie storage."},!1)},setPublisherCC:function(e,n,t,a,r){S(r)&&2==r.length?(N.publisherCC=r.toUpperCase(),ee(a,null,!0)):ee(a,{message:"Invalid publisher country code detected. Ignoring call."},!1)},setConsentRegion:re,enableGoogleAnalytics:function(e,n,t,a,r){j.enabled=r===u||!!r,j.callback=a},isConsentWallUser:function(e,n,t,a){0===R.region?se(a):Q(e,n,t,a,null)},isConsentWallEnabled:function(e,n,t,a){0===R.region?ie(a):Q(e,n,t,a,null)},getConsent:oe});var fe=t+"Ready";e.dispatchEvent(new CustomEvent(fe)),e.dataLayer||(e.dataLayer=[]),e.dataLayer.push({event:fe})}catch(e){if(_(e),c&&c.passThroughException)throw e;console.error(e)}}(window,document,"adconsent","__gpp","__tcfapi",0,"__uspapi");