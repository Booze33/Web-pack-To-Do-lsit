"use strict";(self.webpackChunkweb_pack_to_do_lsit=self.webpackChunkweb_pack_to_do_lsit||[]).push([[300],{672:(e,t,n)=>{n.d(t,{$:()=>s,N:()=>i});let a=[];const c=()=>{localStorage.setItem("tasks",JSON.stringify(a))},i=()=>{const e=document.querySelector(".input");e.innerHTML="",(()=>{const e=JSON.parse(localStorage.getItem("tasks"));e&&(a=e)})(),a.forEach((t=>{const n=document.createElement("li"),s=document.createElement("input"),l=document.createElement("input"),d=document.createElement("div");l.className="text",l.type="text",l.value=t.description,l.addEventListener("blur",(e=>{t.description=e.target.value,c()})),l.style.width="20rem",d.className="menu",d.innerHTML='<i class="fa fa-ellipsis-v" aria-hidden="true"></i>',d.addEventListener("click",(e=>{e.preventDefault();const n=document.createElement("div"),s=document.createElement("button");s.className="white";const l=document.querySelector(".fa-ellipsis-v");s.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>',s.addEventListener("click",(()=>{var e;e=a.indexOf(t),a.splice(e,1),(e=>{for(let t=e;t<a.length;t++)a[t].index=t+1})(e),c(),i()})),l.classList.add("is-active"),n.className="section",n.appendChild(s),d.appendChild(n)})),s.type="checkbox",s.checked=t.completed,n.appendChild(s),n.className="li-input",n.appendChild(l),n.appendChild(d),e.appendChild(n)}))},s=()=>{const e=document.querySelector(".add-input"),t=e.value;if(0!==t.trim().length){const n={description:t,index:a.length+1,completed:!1};a.push(n),c(),i(),e.value=""}}}},e=>{e(e.s=672)}]);