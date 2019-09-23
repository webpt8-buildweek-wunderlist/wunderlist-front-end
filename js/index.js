// Resonsive Menu with mobile Hamburger

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links .link');

    //init function
    function init() {
        burger.classList.remove('toggle');
        nav.classList.remove('nav-active');
        navLinks.forEach(link => {
            link.style.animation = '';
            link.style.webkitAnimation = '';
        });
    };


    // Toggle nav
    burger.addEventListener('click', () => {
        // Nav menu animation
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation || link.style.webkitAnimation) {
                link.style.animation = '';
                link.style.webkitAnimation = '';
            } else {
                link.style.animation = `navLinkFade .35s ease forwards ${index / 7 + .25}s`;
                link.style.webkitAnimation = `navLinkFade .35s ease forwards ${index / 7 + .25}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');

        // Slide nav off on link click
        navLinks.forEach(link => link.addEventListener('click', () => {
            init();
        }))
    });
}

navSlide();