import './styles/style.css';
let menuIsOpen = false;
const menu = document.querySelector('nav');


document.querySelector('.menuToggleBtn').addEventListener('click', () => {
    if (!menuIsOpen) {
        menu.classList.remove('hidden');
        gsap.fromTo('nav', {opacity:0, x: 500},{opacity:1, x: 0, duration: 0.3})
        let tl = gsap.timeline({ defaults: {duration: 0.15} } );
        tl.to(".first-row>span:nth-child(2)", {x:8.6, y:8.6});
        tl.to(".second-row>span:nth-child(1)", {x:8.6, y:-8.6});
        tl.to(".second-row>span:nth-child(3)", {x:-8.6, y:8.6});
        tl.to(".third-row>span:nth-child(2)", {x:-8.6, y:-8.6});
        menuIsOpen = true;
    } else {
        gsap.fromTo('nav', {opacity:1, x: 0}, {opacity:0, x: 500, duration: 0.5})
        let t2 = gsap.timeline({ defaults: {duration: 0.15} } );
        t2.to(".first-row>span:nth-child(2)", {x:0, y:0});
        t2.to(".second-row>span:nth-child(1)", {x:0, y:0});
        t2.to(".second-row>span:nth-child(3)", {x:0, y:0});
        t2.to(".third-row>span:nth-child(2)", {x:0, y:0});
        menuIsOpen = false;
    }
})

