(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{656:function(e,t,n){},657:function(e,t,n){},658:function(e,t,n){(function(e){var n;n=function(){var e=null,t={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[],r=function(u){if(void 0!==(u=u||{}).seed&&null!==u.seed&&u.seed===parseInt(u.seed,10))e=u.seed;else if("string"==typeof u.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(u.seed);else{if(void 0!==u.seed&&null!==u.seed)throw new TypeError("The seed value must be an integer or string");e=null}var l,f;if(null!==u.count&&void 0!==u.count){for(var p=u.count,h=[],v=0;v<u.count;v++)n.push(!1);for(u.count=null;p>h.length;)e&&u.seed&&(u.seed+=1),h.push(r(u));return u.count=p,h}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return c(e);case"hsl":var n=c(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=c(e),i=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+i+")";case"rgbArray":return o(e);case"rgb":return"rgb("+o(e).join(", ")+")";case"rgba":var a=o(e);return i=t.alpha||Math.random(),"rgba("+a.join(", ")+", "+i+")";default:return function(e){var t=o(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}([l=function(e){if(n.length>0){var r=a(f=function(e){if(isNaN(e)){if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return i(s(e)[0]).hueRange}else{var r=parseInt(e);if(r<360&&r>0)return i(e).hueRange}return[0,360]}(e.hue)),u=(f[1]-f[0])/n.length,o=parseInt((r-f[0])/u);!0===n[o]?o=(o+2)%n.length:n[o]=!0;var c=(f[0]+o*u)%359,l=(f[0]+(o+1)*u)%359;return(r=a(f=[c,l]))<0&&(r=360+r),r}var f=function(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var i=s(e)[0];return[i,i]}return[0,360]}(e.hue);return(r=a(f))<0&&(r=360+r),r}(u),f=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return a([0,100]);var n=function(e){return i(e).saturationRange}(e),r=n[0],u=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=u-10;break;case"light":u=55}return a([r,u])}(l,u),function(e,t,n){var r=function(e,t){for(var n=i(e).lowerBounds,r=0;r<n.length-1;r++){var a=n[r][0],u=n[r][1],o=n[r+1][0],s=n[r+1][1];if(t>=a&&t<=o){var c=(s-u)/(o-a);return c*t+(u-c*a)}}return 0}(e,t),u=100;switch(n.luminosity){case"dark":u=r+20;break;case"light":r=(u+r)/2;break;case"random":r=0,u=100}return a([r,u])}(l,f,u)],u)};function i(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function a(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,i=t[0]||0,a=(e=(9301*e+49297)%233280)/233280;return Math.floor(i+a*(r-i))}function u(e,n,r){var i=r[0][0],a=r[r.length-1][0],u=r[r.length-1][1],o=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[i,a],brightnessRange:[u,o]}}function o(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,i=Math.floor(6*t),a=6*t-i,u=r*(1-n),o=r*(1-a*n),s=r*(1-(1-a)*n),c=256,l=256,f=256;switch(i){case 0:c=r,l=s,f=u;break;case 1:c=o,l=r,f=u;break;case 2:c=u,l=r,f=s;break;case 3:c=u,l=o,f=r;break;case 4:c=s,l=u,f=r;break;case 5:c=r,l=u,f=o}return[Math.floor(255*c),Math.floor(255*l),Math.floor(255*f)]}function s(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,i=Math.max(t,n,r),a=i-Math.min(t,n,r),u=i?a/i:0;switch(i){case t:return[(n-r)/a%6*60||0,u,i];case n:return[60*((r-t)/a+2)||0,u,i];case r:return[60*((t-n)/a+4)||0,u,i]}}function c(e){var t=e[0],n=e[1]/100,r=e[2]/100,i=(2-n)*r;return[t,Math.round(n*r/(i<1?i:2-i)*1e4)/100,i/2*100]}return r}(),e&&e.exports&&(t=e.exports=n),t.randomColor=n}).call(this,n(174)(e))},751:function(e,t,n){"use strict";var r=n(656);n.n(r).a},752:function(e,t,n){"use strict";var r=n(657);n.n(r).a},753:function(e,t,n){var r=n(283),i=n(276),a=n(754),u=n(758);e.exports=function(e,t){if(null==e)return{};var n=r(u(e),(function(e){return[e]}));return t=i(t),a(e,n,(function(e,n){return t(e,n[0])}))}},754:function(e,t,n){var r=n(188),i=n(755),a=n(179);e.exports=function(e,t,n){for(var u=-1,o=t.length,s={};++u<o;){var c=t[u],l=r(e,c);n(l,c)&&i(s,a(c,e),l)}return s}},755:function(e,t,n){var r=n(756),i=n(179),a=n(186),u=n(122),o=n(81);e.exports=function(e,t,n,s){if(!u(e))return e;for(var c=-1,l=(t=i(t,e)).length,f=l-1,p=e;null!=p&&++c<l;){var h=o(t[c]),v=n;if(c!=f){var g=p[h];void 0===(v=s?s(g,h,p):void 0)&&(v=u(g)?g:a(t[c+1])?[]:{})}r(p,h,v),p=p[h]}return e}},756:function(e,t,n){var r=n(757),i=n(185),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var u=e[t];a.call(e,t)&&i(u,n)&&(void 0!==n||t in e)||r(e,t,n)}},757:function(e,t,n){var r=n(284);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},758:function(e,t,n){var r=n(277),i=n(759),a=n(761);e.exports=function(e){return r(e,a,i)}},759:function(e,t,n){var r=n(184),i=n(760),a=n(278),u=n(279),o=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=i(e);return t}:u;e.exports=o},760:function(e,t,n){var r=n(282)(Object.getPrototypeOf,Object);e.exports=r},761:function(e,t,n){var r=n(280),i=n(762),a=n(187);e.exports=function(e){return a(e)?r(e,!0):i(e)}},762:function(e,t,n){var r=n(122),i=n(281),a=n(763),u=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=i(e),n=[];for(var o in e)("constructor"!=o||!t&&u.call(e,o))&&n.push(o);return n}},763:function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u}));n(10);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var e=this;n.e(38).then(n.t.bind(null,811,7)).then((function(t){e.comp=t.default}))},methods:{clickCallback:function(e){var t=this.$pagination.getSpecificPageLink(e-1);this.$router.push(t)}}},i=(n(751),n(6)),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.comp?n(e.comp,{tag:"component",attrs:{value:e.page,"page-count":e.$pagination.length,"click-handler":e.clickCallback,"prev-text":e.$pagination.prevText,"next-text":e.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):e._e()}),[],!1,null,null,null).exports,u=(n(752),Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination simple-pagination"},[e.$pagination.hasPrev?n("router-link",{attrs:{to:e.$pagination.prevLink}},[e._v("\n    "+e._s(e.$pagination.prevText)+"\n  ")]):e._e(),e._v(" "),e.$pagination.hasNext?n("router-link",{attrs:{to:e.$pagination.nextLink}},[e._v("\n    "+e._s(e.$pagination.nextText)+"\n  ")]):e._e()],1)}),[],!1,null,null,null).exports),o=(n(119),n(123)),s=n.n(o),c=n(753),l=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,s.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}};Object(i.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports}}]);