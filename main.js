// Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.home-subtitle', {delay: 100} )
sr.reveal('.button', {delay: 200} )
sr.reveal('.home-img', {delay: 400} )
sr.reveal('.home-social', {delay: 400} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 200} )
sr.reveal('.about-text', {delay: 400} )

sr.reveal('.skills-subtitle', {delay: 100} )
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 400} )

sr.reveal('.work-card', {interval: 200} )

sr.reveal('.contact-input', {interval: 200} )

// Work section scroll arrows
const workContainer = document.querySelector('.work-container');
const leftArrow = document.getElementById('work-left');
const rightArrow = document.getElementById('work-right');

if (leftArrow && rightArrow && workContainer) {
    leftArrow.addEventListener('click', () => {
        workContainer.scrollBy({left: -workContainer.clientWidth, behavior: 'smooth'});
    });

    rightArrow.addEventListener('click', () => {
        workContainer.scrollBy({left: workContainer.clientWidth, behavior: 'smooth'});
    });
}

