(this["webpackJsonpatomic-boilerplate"]=this["webpackJsonpatomic-boilerplate"]||[]).push([[50],{348:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return s})),n.d(e,"ion_route_redirect",(function(){return c})),n.d(e,"ion_router",(function(){return U})),n.d(e,"ion_router_link",(function(){return x}));var r=n(13),o=n(39),i=n(29),u=n(40),a=n(370),s=function(){function t(t){Object(o.o)(this,t),this.ionRouteDataChanged=Object(o.g)(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),c=function(){function t(t){Object(o.o)(this,t),this.ionRouteRedirectChanged=Object(o.g)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",l="forward",f=function(t){return"/"+t.filter((function(t){return t.length>0})).join("/")},d=function(t,e,n,o,i,u,a){var s=function(t,e,n){var r=f(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r}(Object(r.e)(Object(r.e)([],p(e).segments),o),n,a);i===l?t.pushState(u,"",s):t.replaceState(u,"",s)},p=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),0===(n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0}))).length&&(n=[""])}return{segments:n,queryString:e}},v=function t(e,n,o,u,a,s){return void 0===a&&(a=!1),Object(r.a)(void 0,void 0,void 0,(function(){var c,l,f,d;return Object(r.c)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),c=m(e),u>=n.length||!c?[2,a]:[4,new Promise((function(t){return Object(i.c)(c,t)}))];case 1:return r.sent(),l=n[u],[4,c.setRouteId(l.id,l.params,o,s)];case 2:return(f=r.sent()).changed&&(o=h,a=!0),[4,t(f.element,n,o,u+1,a,s)];case 3:return a=r.sent(),f.markVisible?[4,f.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,a];case 6:return d=r.sent(),console.error(d),[2,!1];case 7:return[2]}}))}))},b=function(t){return Object(r.a)(void 0,void 0,void 0,(function(){var e,n,o,i;return Object(r.c)(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return(n=m(o))?[4,n.getRouteId()]:[3,3];case 2:return(i=r.sent())?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},g=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",m=function(t){if(t){if(t.matches(g))return t;var e=t.querySelector(g);return null!==e&&void 0!==e?e:void 0}},y=function(t,e){return e.find((function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}(t,e)}))},w=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r},j=function(t,e){for(var n,r=new P(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var a=0,s=u;a<s.length;a++){var c=s[a],h=r.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}o=!1}}return!o||o===(""===r.next())?n?e.map((function(t,e){return{id:t.id,path:t.path,params:O(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},O=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},R=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],a=j(t,u);if(null!==a){var s=C(a);s>r&&(r=s,n=a)}}return n},C=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,u=o[r].path;i<u.length;i++){var a=u[i];":"===a[0]?e+=Math.pow(1,n):""!==a&&(e+=Math.pow(2,n)),n++}return e},P=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),S=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},k=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=S(t,"to");return{from:p(S(t,"from")).segments,to:null==e?void 0:p(e)}}))},E=function(t){return L(D(t))},D=function t(e){return Array.from(e.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(e){var n=S(e,"component");return{path:p(S(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:t(e)}}))},L=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];N([],e,o)}return e},N=function t(e,n,r){if((e=e.slice()).push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length)for(var o=0,i=r.children;o<i.length;o++){t(e,n,i[o])}else n.push(e)},U=function(){function t(t){Object(o.o)(this,t),this.ionRouteWillChange=Object(o.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e,n;return Object(r.c)(this,(function(r){switch(r.label){case 0:return[4,m(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return r.sent(),[4,this.runGuards(this.getPath())];case 2:return!0===(t=r.sent())?[3,5]:"object"!==typeof t?[3,4]:(e=t.redirect,n=p(e),this.setPath(n.segments,h,n.queryString),[4,this.writeNavStateRoot(n.segments,h)]);case 3:r.sent(),r.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:r.sent(),r.label=7;case 7:return[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(i.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.n)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e,n;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:if(!0!==(n=r.sent())){if("object"!==typeof n)return[2,!1];e=p(n.redirect).segments}return[2,this.writeNavStateRoot(e,t)]}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return Object(r.a)(this,void 0,void 0,(function(){var t;return Object(r.c)(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return!0!==(t=e.sent())?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),Object(r.a)(this,void 0,void 0,(function(){var o,i;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=p(t),[4,this.runGuards(o.segments)];case 1:if(!0!==(i=r.sent())){if("object"!==typeof i)return[2,!1];o=p(i.redirect)}return this.setPath(o.segments,e,o.queryString),[2,this.writeNavStateRoot(o.segments,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.c)(this,(function(t){return function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+f(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}(E(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+f(r.from),"font-weight: bold"," TO: ","$c "+f(r.to.segments),"font-weight: bold")}console.groupEnd()}(k(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return Object(r.a)(this,void 0,void 0,(function(){var e,n,o,i,u,a;return Object(r.c)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,b(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=E(this.el),(u=function(t,e){for(var n=null,r=0,o=t.map((function(t){return t.id})),i=0,u=e;i<u.length;i++){var a=u[i],s=w(o,a);s>r&&(n=a,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:O(e.params,t[n]&&t[n].params)}})):null}(n,i))?(a=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var s=o.params&&o.params[a.slice(1)];if(!s)return null;e.push(s)}else""!==a&&e.push(a)}return e}(u))?(this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&y(t,k(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?l:n<r?"back":h},t.prototype.writeNavStateRoot=function(t,e,n){return Object(r.a)(this,void 0,void 0,(function(){var o,i,u,a,s,c,h,l;return Object(r.c)(this,(function(r){return t?(o=k(this.el),i=y(t,o),u=null,i&&(a=i.to,s=a.segments,c=a.queryString,this.setPath(s,e,c),u=i.from,t=s),h=E(this.el),(l=R(t,h))?[2,this.safeWriteNavState(document.body,l,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r.a)(this,void 0,void 0,(function(){var s,c,h;return Object(r.c)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:s=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,a)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return s(),[2,c]}}))}))},t.prototype.lock=function(){return Object(r.a)(this,void 0,void 0,(function(){var t,e;return Object(r.c)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),Object(r.a)(this,void 0,void 0,(function(){var n,o,i,u,a,s,c;return Object(r.c)(this,(function(r){switch(r.label){case 0:return void 0===e&&(e=p(this.previousPath).segments),t&&e?(n=E(this.el),o=R(e,n),(i=o&&o[o.length-1].beforeLeave)?[4,i()]:[3,2]):[2,!0];case 1:return a=r.sent(),[3,3];case 2:a=!0,r.label=3;case 3:return!1===(u=a)||"object"===typeof u?[2,u]:(s=R(t,n),[2,!(c=s&&s[s.length-1].beforeEnter)||c()])}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,a){return void 0===u&&(u=0),Object(r.a)(this,void 0,void 0,(function(){var s,c;return Object(r.c)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(s=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(s),[4,v(t,e,n,u,!1,a)]);case 1:return c=r.sent(),this.busy=!1,s&&this.ionRouteDidChange.emit(s),[2,c]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,d(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return function(t,e,n){var r=p(e).segments,o=n?t.hash.slice(1):t.pathname;return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(r,p(o).segments)}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=f(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?f(e):null,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.k)(this)},enumerable:!1,configurable:!0}),t}(),x=function(){function t(t){var e=this;Object(o.o)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(a.d)(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=Object(u.b)(this),n={href:this.href,rel:this.rel,target:this.target};return Object(o.j)(o.c,{onClick:this.onClick,class:Object(a.a)(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(o.j)("a",Object.assign({},n),Object(o.j)("slot",null)))},t}();x.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},370:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}));var r=n(13),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-"+t]=!0,n),e):e},u=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,n,o){return Object(r.a)(void 0,void 0,void 0,(function(){var i;return Object(r.c)(this,(function(r){return null!=t&&"#"!==t[0]&&!a.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=50.15466d05.chunk.js.map