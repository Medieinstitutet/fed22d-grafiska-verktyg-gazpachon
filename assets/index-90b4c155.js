(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function L(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=L(t);fetch(t.href,o)}})();const c=document.querySelector("#path-1"),l=document.querySelector("#path-2"),u=document.querySelector("#path-3"),p=document.querySelector("#path-4"),y=document.querySelector("#path-5"),h="M0 424L129 375L257 441L386 406L514 384L643 383L771 448L900 428L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",f="M0 463L129 465L257 431L386 409L514 413L643 456L771 459L900 396L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",m="M0 493L129 425L257 502L386 445L514 511L643 490L771 441L900 482L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",g="M0 500L129 536L257 510L386 513L514 496L643 508L771 484L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",w="M0 558L129 530L257 558L386 550L514 543L643 569L771 563L900 538L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z";gsap.to(c,{duration:1,attr:{d:h},yoyo:!0,repeat:-1});gsap.to(l,{duration:1,attr:{d:f},yoyo:!0,repeat:-1,delay:.3});gsap.to(u,{duration:1,attr:{d:m},yoyo:!0,repeat:-1});gsap.to(p,{duration:1,attr:{d:g},yoyo:!0,repeat:-1,delay:.3});gsap.to(y,{duration:1,attr:{d:w},yoyo:!0,repeat:-1});let a=!1;document.querySelector("nav");const d=document.querySelectorAll("nav>ul>li>a");window.matchMedia("(min-width: 768px)");function s(){gsap.fromTo("nav",{opacity:1,x:0,display:"grid"},{opacity:0,x:500,duration:.5,display:"none"});let e=gsap.timeline({defaults:{duration:.15}});e.to(".second-row>span:nth-child(1)",{x:0,y:0}),e.to(".third-row>span:nth-child(2)",{x:0,y:0}),e.to(".second-row>span:nth-child(3)",{x:0,y:0}),e.to(".first-row>span:nth-child(2)",{x:0,y:0}),a=!1}document.querySelector(".menuToggleBtn").addEventListener("click",()=>{if(a)s();else{gsap.fromTo("nav",{display:"none",opacity:0,x:500},{display:"grid",opacity:1,x:0,duration:.3});let e=gsap.timeline({defaults:{duration:.15}});e.to(".first-row>span:nth-child(2)",{x:8.6,y:8.6}),e.to(".second-row>span:nth-child(3)",{x:-8.6,y:8.6}),e.to(".third-row>span:nth-child(2)",{x:-8.6,y:-8.6}),e.to(".second-row>span:nth-child(1)",{x:8.6,y:-8.6}),a=!0}});for(let e=0;e<d.length;e++)d[e].addEventListener("click",()=>{s()});document.querySelector(".arrow-btn").addEventListener("click",()=>{gsap.set(".arrow-btn>div",{y:0,overwrite:"auto",duration:.3})});gsap.fromTo(".arrow-btn>div",{y:-10},{y:10,duration:1,repeat:-1,yoyo:!0,ease:"power0"});
