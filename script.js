const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const contactLinkA = document.getElementById('contact-linkA');
    const contactPopup = document.getElementById('contact-popup');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.style.display = 'flex';
    });

    contactLinkA.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });

    sendBtn.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });
});
