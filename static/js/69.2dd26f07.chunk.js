(this["webpackJsonpatomic-boilerplate"]=this["webpackJsonpatomic-boilerplate"]||[]).push([[69],{1135:function(t,e,n){"use strict";n.r(e),n.d(e,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(e,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(e,"copyVisualViewport",(function(){return y})),n.d(e,"keyboardDidClose",(function(){return g})),n.d(e,"keyboardDidOpen",(function(){return p})),n.d(e,"keyboardDidResize",(function(){return b})),n.d(e,"resetKeyboardAssist",(function(){return d})),n.d(e,"setKeyboardClose",(function(){return h})),n.d(e,"setKeyboardOpen",(function(){return f})),n.d(e,"startKeyboardAssist",(function(){return s})),n.d(e,"trackViewportChanges",(function(){return v}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},a=!1,d=function(){r={},u={},a=!1},s=function(t){c(t),t.visualViewport&&(u=y(t.visualViewport),t.visualViewport.onresize=function(){v(t),p()||b(t)?f(t):g(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return f(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},f=function(t,e){w(t,e),a=!0},h=function(t){l(t),a=!1},p=function(){var t=(r.height-u.height)*u.scale;return!a&&r.width===u.width&&t>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},w=function(t,e){var n=e?e.keyboardHeight:t.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});t.dispatchEvent(o)},l=function(t){var e=new CustomEvent(o);t.dispatchEvent(e)},v=function(t){r=Object.assign({},u),u=y(t.visualViewport)},y=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=69.2dd26f07.chunk.js.map