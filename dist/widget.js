(()=>{var t={913:(t,e,i)=>{var n;void 0===(n=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.isEnvironmentValid=t=>this.environments.includes(t),this.setEnvironment=t=>{t&&this.isEnvironmentValid(t)&&(this.environment=t,t===this.environmentStaging?(this.apiUrl=this.apiUrlStaging,this.eventsUrl=this.eventsUrlStaging,this.hostUrl=this.hostUrlStaging):t===this.environmentLocal?(this.apiUrl=this.apiUrlLocal,this.eventsUrl=this.eventsUrlLocal,this.hostUrl=this.hostUrlLocal):t===this.environmentProduction&&(this.apiUrl=this.apiUrlProduction,this.eventsUrl=this.eventsUrlProduction,this.hostUrl=this.hostUrlProduction))},this.environmentLocal="local",this.environmentStaging="staging",this.environmentProduction="production",this.apiUrl="https://api.tonicpow.com",this.apiUrlLocal="http://localhost:3000",this.apiUrlStaging="https://api.staging.tonicpow.com",this.apiUrlProduction="https://api.tonicpow.com",this.eventsUrl="https://events.tonicpow.com",this.eventsUrlLocal="http://localhost:3002",this.eventsUrlStaging="https://events.staging.tonicpow.com",this.eventsUrlProduction="https://events.tonicpow.com",this.hostUrl="http://tonicpow.com",this.hostUrlLocal="http://localhost:3000",this.hostUrlStaging="https://web.staging.tonicpow.com",this.hostUrlProduction="https://tonicpow.com",this.customEnvironmentAttribute="data-environment",this.environment="",this.environments=[this.environmentLocal,this.environmentStaging,this.environmentProduction],this.maxSessionDays=60,this.sessionParameterName="tncpw_session",this.challengeParameterName="tncpw_challenge",this.version="v0.0.9",this.widgetDivClass="tonicpow-widget",this.widgetIdAttribute="data-widget-id"}}}.apply(e,[i,e]))||(t.exports=n)},242:function(t,e,i){var n,o=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))};void 0===(n=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t="",e="",i){this.sendPing=()=>{setTimeout((()=>{console.log("sending"),this.sendEvent("ping",((new Date).getTime()-this.start).toString())}),4e3)},this.detectWidgetClick=()=>{document.addEventListener("click",(t=>o(this,void 0,void 0,(function*(){var e,i;const n=(t||window.event).target,o=null===(e=null==n?void 0:n.parentElement)||void 0===e?void 0:e.parentElement;if(null===(i=null==o?void 0:o.classList)||void 0===i?void 0:i.contains("tonicpow-widget"))try{yield this.sendEvent("widget_click",o.getAttribute(this.config.widgetIdAttribute)||"")}catch(t){console.error("failed to report interaction: widget_click",t)}}))))},this.detectBounce=()=>{window.onbeforeunload=()=>{this.sendEvent("bounce",((new Date).getTime()-this.start).toString())}},this.sendChallengeResponse=()=>{try{this.sendEvent("challenge",this.challengeGuid)}catch(t){console.error("Failed to send challenge response",t)}},this.detectInteraction=()=>{document.addEventListener("mousedown",(()=>o(this,void 0,void 0,(function*(){if(!this.interactionSent)try{this.interactionSent=!0,yield this.sendEvent("interaction","mousedown")}catch(t){console.error("failed to report interaction: mousedown",t)}})))),document.addEventListener("scroll",(()=>o(this,void 0,void 0,(function*(){if(!this.interactionSent)try{this.interactionSent=!0,yield this.sendEvent("interaction","scroll")}catch(t){console.error("failed to report interaction: scroll",t)}})))),document.addEventListener("keypress",(()=>o(this,void 0,void 0,(function*(){if(!this.interactionSent)try{this.interactionSent=!0,yield this.sendEvent("interaction","keypress")}catch(t){console.error("failed to report interaction: keypress",t)}}))))},this.sendEvent=(t,e)=>o(this,void 0,void 0,(function*(){if(!this.sessionId&&!this.challengeGuid)return void console.info("you must call init with a session before sending events");const i=window.location.href,n={v:this.config.version,name:t,location:i,data:e};this.sessionId&&(n.tncpw_session=this.sessionId),yield fetch(`${this.config.eventsUrl}/v1/events?d=${btoa(JSON.stringify(n))}`,{method:"get"})})),this.sessionId=t,this.config=i,this.challengeGuid=e,this.interactionSent=!1,this.start=(new Date).getTime(),this.challengeGuid&&this.challengeGuid.length>0?this.sendChallengeResponse():(this.detectInteraction(),this.detectBounce(),this.detectWidgetClick(),this.sendPing())}}}.apply(e,[i,e]))||(t.exports=n)},607:function(t,e,i){var n,o,s=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};n=[i,e,i(913),i(242),i(912)],void 0===(o=function(t,e,i,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=r(i),n=r(n),o=r(o);class a{constructor(t){this.setOreo=(t,e,i)=>{const n=new Date;n.setTime(n.getTime()+864e5*i),document.cookie=`${t}=${e};path=/;expires=${n.toUTCString()}`},this.captureVisitorSession=(t="",e="")=>{let i=t,n=e;const o=new URLSearchParams(window.location.search);return t&&t.length||"undefined"==typeof window||(i=o.get(this.config.sessionParameterName)||null),e&&e.length||"undefined"==typeof window||(n=o.get(this.config.challengeParameterName)||null),i&&i.length>0&&(this.setOreo(this.config.sessionParameterName,i,this.config.maxSessionDays),this.storage.setStorage(this.config.sessionParameterName,i,86400*this.config.maxSessionDays)),n&&n.length>0&&this.storage.setStorage(this.config.challengeParameterName,n,60),{sessionId:i,challengeGuid:n}},this.getVisitorSession=()=>this.storage.getStorage(this.config.sessionParameterName),this.loadDivs=()=>s(this,void 0,void 0,(function*(){const t=document.getElementsByClassName(this.config.widgetDivClass);for(let e=t.length-1;e>=0;e--){const i=t[e];if(!i){console.log("exit early - remove this?");continue}const n=i.getAttribute(this.config.widgetIdAttribute);if(!n){console.log(`${n} not found`);continue}const o=i.getAttribute(this.config.customEnvironmentAttribute);this.config.setEnvironment(o||"production"),this.widgets.set(n,null);try{const t=yield fetch(`${this.config.apiUrl}/v1/widgets/display/${n}?provider=embed-${this.config.version}`);let e;403===t.status?(console.info(`${t.status}: Domain not allowed`),e={link_url:this.config.hostUrl,image_url:`${this.config.hostUrl}/images/widgetFallback.svg`}):e=yield t.json();const o=encodeURIComponent(e.title);i.innerHTML=`\n      <a href="${e.link_url}?utm_source=tonicpow-widgets&utm_medium=widget&utm_campaign=${n}&utm_content=${o}" style="display: inline-block">\n      <img src="${e.image_url}" \n      width="${e.width}" \n      height="${e.height}" \n      alt="${e.title}" />\n      </a>`,i.setAttribute("data-width",e.width),i.setAttribute("data-height",e.height),this.widgets.set(n,e),this.options&&this.options.onWidgetLoaded&&(e.id=n,this.options.onWidgetLoaded(e))}catch(t){throw t}}})),this.load=()=>s(this,void 0,void 0,(function*(){if("undefined"==typeof window)return void console.error("TonicPow embed only works in the browser");const t=document.getElementsByClassName(this.config.widgetDivClass);if(t&&t.length>0)try{yield this.loadDivs(),console.log("%c TonicPow widget(s) loaded! ","background: #974CD2; color: #fff")}catch(t){throw t}const{sessionId:e,challengeGuid:i}=this.captureVisitorSession();(e||i)&&(this.events=new n.default(e||"",i||"",this.config))})),this.config=new i.default,this.storage=new o.default,this.widgets=new Map,this.options=t,"complete"===document.readyState||"interactive"===document.readyState?this.load():document.addEventListener("DOMContentLoaded",(()=>{this.load()}))}}e.default=a;const c=new a;window.TonicPow=c||{}}.apply(e,n))||(t.exports=o)},912:(t,e,i)=>{var n;void 0===(n=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.removeStorage=t=>{try{localStorage.removeItem(t),localStorage.removeItem(`${t}_expiresIn`)}catch(e){return console.log(`removeStorage: Error removing key [${t}] from localStorage: ${JSON.stringify(e)}`),!1}return!0},this.getStorage=t=>{const e=Date.now();let i;try{i=localStorage.getItem(`${t}_expires`)}catch(t){return console.log(`getItem: error getting localStorage: ${JSON.stringify(t)}`),null}if(null==i&&(i=0),i<e)return this.removeStorage(t),null;try{return localStorage.getItem(t)}catch(e){return console.log(`getStorage: Error reading key [${t}] from localStorage: ${JSON.stringify(e)}`),null}},this.setStorage=(t,e,i=null)=>{i=i?Math.abs(i):86400;const n=Date.now()+1e3*i;try{localStorage.setItem(t,e),localStorage.setItem(`${t}_expires`,n.toString())}catch(e){return console.log(`setStorage: Error setting key [${t}] in localStorage: ${JSON.stringify(e)}`),!1}return!0}}}}.apply(e,[i,e]))||(t.exports=n)}},e={};!function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}(607)})();