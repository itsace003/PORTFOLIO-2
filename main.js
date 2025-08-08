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
sr.reveal('.home-social', {delay: 400,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 200} )
sr.reveal('.about-text', {delay: 400} )

sr.reveal('.skills-data', {interval: 200} )

sr.reveal('.work-card', {interval: 200} )

sr.reveal('.contact-input', {interval: 200} )

// Work section scroll arrows
document.querySelectorAll('.work-wrapper').forEach(wrapper => {
    const container = wrapper.querySelector('.work-container');
    const left = wrapper.querySelector('.scroll-arrow.left');
    const right = wrapper.querySelector('.scroll-arrow.right');

    if (container && left) {
        left.addEventListener('click', () => {
            container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
        });
    }

    if (container && right) {
        right.addEventListener('click', () => {
            container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
        });
    }
});

