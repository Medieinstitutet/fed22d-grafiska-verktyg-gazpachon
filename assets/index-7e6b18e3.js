(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const l=document.querySelector("#path-1"),u=document.querySelector("#path-2"),L=document.querySelector("#path-3"),p=document.querySelector("#path-4"),y=document.querySelector("#path-5"),h="M0 424L129 375L257 441L386 406L514 384L643 383L771 448L900 428L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",f="M0 463L129 465L257 431L386 409L514 413L643 456L771 459L900 396L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",g="M0 493L129 425L257 502L386 445L514 511L643 490L771 441L900 482L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",m="M0 500L129 536L257 510L386 513L514 496L643 508L771 484L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",w="M0 558L129 530L257 558L386 550L514 543L643 569L771 563L900 538L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z",v=window.matchMedia("(min-width: 1024px)");let a=!1;const i=document.querySelectorAll("nav>ul>li>a"),b=new IntersectionObserver(o=>{o.forEach(r=>{r.target.classList.toggle("show",r.isIntersecting)})});function S(){const o=document.querySelector(".cookie-bar");o.style.display="none"}document.querySelector(".cookie-btn").addEventListener("click",S);const x=document.querySelector(".camera-card");b.observe(x);function s(){gsap.fromTo("nav",{opacity:1,x:0,display:"grid"},{opacity:0,x:500,duration:.5,display:"none"}),gsap.to(".second-row>span:nth-child(1)",{x:0,y:0,duration:.15}),gsap.to(".third-row>span:nth-child(2)",{x:0,y:0,duration:.15,delay:.1}),gsap.to(".second-row>span:nth-child(3)",{x:0,y:0,duration:.15,delay:.2}),gsap.to(".first-row>span:nth-child(2)",{x:0,y:0,duration:.15,delay:.3}),a=!1}function q(){gsap.fromTo("nav",{display:"none",opacity:0,x:500},{display:"grid",opacity:1,x:0,duration:.3}),gsap.to(".first-row>span:nth-child(2)",{x:8.6,y:8.6,duration:.15}),gsap.to(".second-row>span:nth-child(3)",{x:-8.6,y:8.6,duration:.15,delay:.1}),gsap.to(".third-row>span:nth-child(2)",{x:-8.6,y:-8.6,duration:.15,delay:.2}),gsap.to(".second-row>span:nth-child(1)",{x:8.6,y:-8.6,duration:.15,delay:.3}),a=!0}function k(){gsap.set(".arrow-btn>i",{y:0,overwrite:"auto",duration:.3})}function M(){document.querySelector(".menuToggleBtn").addEventListener("click",()=>{a?s():q()});for(let o=0;o<i.length;o++)i[o].addEventListener("click",()=>{s()});document.querySelector(".arrow-btn").addEventListener("click",k)}function E(o){o.matches&&gsap.to("nav",{backgroundColor:"var(--black-color)",scrollTrigger:{trigger:".hero-container",start:"center top",end:"center bottom",scrub:!0,markers:!1}})}E(v);M();gsap.fromTo(".arrow-btn>i",{y:-10},{y:10,duration:1,repeat:-1,yoyo:!0,ease:"power0"});gsap.to(l,{duration:1,attr:{d:h},yoyo:!0,repeat:-1});gsap.to(u,{duration:1,attr:{d:f},yoyo:!0,repeat:-1,delay:.3});gsap.to(L,{duration:1,attr:{d:g},yoyo:!0,repeat:-1});gsap.to(p,{duration:1,attr:{d:m},yoyo:!0,repeat:-1,delay:.3});gsap.to(y,{duration:1,attr:{d:w},yoyo:!0,repeat:-1});
