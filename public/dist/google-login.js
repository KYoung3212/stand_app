!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(window,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t){t.exports=e},function(e,t,n){e.exports=n(3)()},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";function o(){}var r=n(4);e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;t.length>n;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;t.length>n;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t);var d=n(0),y=n.n(d),b=(n(1),function(){function e(t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(r=i(e).call(this,t))||"object"!==o(r)&&"function"!=typeof r?c(this):r).signIn=n.signIn.bind(c(c(n))),n.enableButton=n.enableButton.bind(c(c(n))),n.state={disabled:!0},n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e,t,n,o,r,i=this,a=this.props,c=a.clientId,s=a.cookiePolicy,u=a.loginHint,l=a.hostedDomain,p=a.autoLoad,f=a.isSignedIn,d=a.fetchBasicProfile,y=a.redirectUri,b=a.discoveryDocs,g=a.onFailure,h=a.uxMode,m=a.scope,v=a.accessType,O=a.responseType,S=a.jsSrc;o=n=(e=document).getElementsByTagName(t="script")[0],r=n,(r=e.createElement(t)).id="google-login",r.src=S,o&&o.parentNode?o.parentNode.insertBefore(r,o):e.head.appendChild(r),r.onload=function(){var e={client_id:c,cookie_policy:s,login_hint:u,hosted_domain:l,fetch_basic_profile:d,discoveryDocs:b,ux_mode:h,redirect_uri:y,scope:m,access_type:v};"code"===O&&(e.access_type="offline"),window.gapi.load("auth2",function(){i.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(e).then(function(e){f&&e.isSignedIn.get()&&i.handleSigninSuccess(e.currentUser.get())},function(e){return g(e)}),p&&i.signIn()})}}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){}}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,r=o.onSuccess,i=o.onFailure,a=o.responseType,c={prompt:o.prompt};(0,o.onRequest)(),"code"===a?n.grantOfflineAccess(c).then(function(e){return r(e)},function(e){return i(e)}):n.signIn(c).then(function(e){return t.handleSigninSuccess(e)},function(e){return i(e)})}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.type,o=e.style,r=e.className,i=e.disabledStyle,a=e.buttonText,c=e.children,s=e.render,u=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signIn});var l=o||(r&&!o?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),p=u?Object.assign({},l,i):l;return y.a.createElement(t,{onClick:this.signIn,style:p,type:n,disabled:u,className:r},c||a)}}])&&r(t.prototype,n),e}());b.defaultProps={type:"button",tag:"button",buttonText:"Login with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},onRequest:function(){},jsSrc:"https://apis.google.com/js/client:platform.js"};var g=b,h=function(){function e(t){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=l(e).call(this,t))||"object"!==s(o)&&"function"!=typeof o?f(this):o).state={disabled:!0},n.signOut=n.signOut.bind(f(f(n))),n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e,t,n,o,r,i=this,a=this.props.jsSrc;o=n=(e=document).getElementsByTagName(t="script")[0],r=n,(r=e.createElement(t)).id="google-login",r.src=a,o&&o.parentNode?o.parentNode.insertBefore(r,o):e.head.appendChild(r),r.onload=function(){window.gapi.load("auth2",function(){i.setState({disabled:!1})})}}},{key:"signOut",value:function(){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(this.props.onLogoutSuccess)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,o=e.className,r=e.disabledStyle,i=e.buttonText,a=e.children,c=e.render;if(c)return c({onClick:this.signOut});var s=this.state.disabled||this.props.disabled,u=n||(o&&!n?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),l=s?Object.assign({},u,r):u;return y.a.createElement(t,{onClick:this.signOut,style:l,disabled:s,className:o},a||i)}}])&&u(t.prototype,n),e}();h.defaultProps={tag:"button",buttonText:"Logout",disabledStyle:{opacity:.6},jsSrc:"https://apis.google.com/js/client:platform.js"};var m=h;n.d(t,"default",function(){return g}),n.d(t,"GoogleLogin",function(){return g}),n.d(t,"GoogleLogout",function(){return m})}])});