"use strict";(self.webpackChunkweb_pack_to_do_lsit=self.webpackChunkweb_pack_to_do_lsit||[]).push([[143,300],{426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([e.id,"body {\r\n  margin: 10% 0 0 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #eee;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.box {\r\n  width: 50vw;\r\n  background-color: #fff;\r\n}\r\n\r\n.top {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ccc;\r\n  font-size: 20px;\r\n  height: 3.5rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.your {\r\n  width: 99%;\r\n  height: 3.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ccc;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  font-size: 18px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-input {\r\n  width: 99%;\r\n  height: 3rem;\r\n  border: none;\r\n  font-size: 18px;\r\n  font-style: italic;\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ccc;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  flex-direction: column-reverse;\r\n}\r\n\r\n.input input {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  height: 3.6rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid #7d7d7d;\r\n  font-size: 18px;\r\n}\r\n\r\n.li-input {\r\n  width: 99%;\r\n  height: 3.5rem;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ccc;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n}\r\n\r\n.your .add {\r\n  background-color: #fff;\r\n  border: none !important;\r\n}\r\n\r\n.top i {\r\n  margin: 0 0.7rem 0 0;\r\n}\r\n\r\n.menu {\r\n  position: relative;\r\n  left: 37%;\r\n}\r\n\r\n.section {\r\n  justify-content: space-between;\r\n}\r\n\r\n.text {\r\n  border: none;\r\n  font-size: 16px;\r\n  height: 2rem;\r\n}\r\n",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var s=t(e,o),d=0;d<i.length;d++){var l=r(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},672:(e,n,r)=>{r.d(n,{$:()=>a,N:()=>i});let t=[];const o=()=>{localStorage.setItem("tasks",JSON.stringify(t))},i=()=>{const e=document.querySelector(".input");e.innerHTML="",(()=>{const e=JSON.parse(localStorage.getItem("tasks"));e&&(t=e)})(),t.forEach((n=>{const r=document.createElement("li"),a=document.createElement("input"),c=document.createElement("input"),s=document.createElement("div");c.className="text",c.type="text",c.value=n.description,c.addEventListener("blur",(e=>{n.description=e.target.value,o()})),c.style.width="20rem",s.className="menu",s.innerHTML='<i class="fa fa-ellipsis-v" aria-hidden="true"></i>',s.addEventListener("click",(e=>{e.preventDefault();const r=document.createElement("div"),a=document.createElement("button"),c=document.querySelector(".fa-ellipsis-v");a.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>',a.addEventListener("click",(()=>{var e;e=t.indexOf(n),t.splice(e,1),o(),i()})),c.style.display="none",r.className="section",r.appendChild(a),s.appendChild(r)})),a.type="checkbox",a.checked=n.completed,r.appendChild(a),r.className="li-input",r.appendChild(c),r.appendChild(s),e.appendChild(r)}))},a=()=>{const e=document.querySelector(".add-input"),n=e.value;if(0!==n.trim().length){const r={description:n,index:t.length+1,completed:!1};t.push(r),o(),i(),e.value=""}}},987:(e,n,r)=>{var t=r(379),o=r.n(t),i=r(795),a=r.n(i),c=r(569),s=r.n(c),d=r(565),l=r.n(d),u=r(216),p=r.n(u),f=r(589),m=r.n(f),h=r(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=r(672);(0,y.N)(),document.querySelector(".add").addEventListener("click",(e=>{e.preventDefault(),(0,y.$)()}));const b=document.querySelector(".button"),g=document.createElement("button");g.textContent="Clear all completed",g.className="clear",b.appendChild(g)}},e=>{e(e.s=987)}]);