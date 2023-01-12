import './styles/style.css';
let menuIsOpen = false;
const menu = document.querySelector('nav');
const menuOptions = document.querySelectorAll('nav>ul>li>a');
let windowView = window.matchMedia("(min-width: 768px)");

function closeMenu() {
    gsap.fromTo('nav', {opacity:1, x: 0, display:'grid'}, {opacity:0, x: 500, duration: 0.5, display:'none'})
        let t2 = gsap.timeline({ defaults: {duration: 0.15} } );
        t2.to(".second-row>span:nth-child(1)", {x:0, y:0});
        t2.to(".third-row>span:nth-child(2)", {x:0, y:0});
        t2.to(".second-row>span:nth-child(3)", {x:0, y:0});
        t2.to(".first-row>span:nth-child(2)", {x:0, y:0});
    menuIsOpen = false;
}

document.querySelector('.menuToggleBtn').addEventListener('click', () => {
    if (!menuIsOpen) { // Mobile menu button handler
        gsap.fromTo('nav', {display:'none', opacity:0, x: 500},{display:'grid',opacity:1, x: 0, duration: 0.3})
        let tl = gsap.timeline({ defaults: {duration: 0.15} } );
        tl.to(".first-row>span:nth-child(2)", {x:8.6, y:8.6});
        tl.to(".second-row>span:nth-child(3)", {x:-8.6, y:8.6});
        tl.to(".third-row>span:nth-child(2)", {x:-8.6, y:-8.6});
        tl.to(".second-row>span:nth-child(1)", {x:8.6, y:-8.6});
        menuIsOpen = true;
    } else {
        closeMenu();
    }
})
for (let i = 0; i < menuOptions.length; i++) // Closes menu after a link press
    menuOptions[i].addEventListener('click', () => {
        closeMenu();
})
document.querySelector('.arrow-btn').addEventListener('click', () => {
    gsap.set('.arrow-btn>div', {y:0, overwrite: "auto", duration: 0.3});
})
gsap.fromTo('.arrow-btn>div', {y:-10}, {y:10, duration:1, repeat: -1, yoyo: true, ease: 'power0'})

/*
if (windowView) {
    gsap.to("nav", {
    scrollTrigger: "#vibeID", // start the animation when ".box" enters the viewport (once)
    backgroundColor: '#1E1E1E',
    duration: 0.3
    });
} // TODO: Funkar ej
gsap.to("nav", {
    scrollTrigger: "#hero-containerID", // start the animation when ".box" enters the viewport (once)
    backgroundColor: 'transparent',
    duration: 0.3
    });
*/