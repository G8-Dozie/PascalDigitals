document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');
    const contactLink = document.getElementById('contact-link');
    const contactPopup = document.getElementById('contact-popup');
    const closeBtn = document.getElementById('close-btn');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });
});