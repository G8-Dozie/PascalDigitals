document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video iframe');
    let currentVideoIndex = 0;

    videos.forEach((video, index) => {
        video.addEventListener('click', () => {
            currentVideoIndex = index;
            openFullscreen(video);
        });
    });

    function openFullscreen(video) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
        addNavigationButtons(video);
    }

    function addNavigationButtons(video) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.style.position = 'absolute';
        nextButton.style.bottom = '10px';
        nextButton.style.right = '10px';
        nextButton.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            video.src = videos[currentVideoIndex].src;
        });

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.style.position = 'absolute';
        prevButton.style.bottom = '10px';
        prevButton.style.left = '10px';
        prevButton.addEventListener('click', () => {
            currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
            video.src = videos[currentVideoIndex].src;
        });

        video.parentElement.appendChild(nextButton);
        video.parentElement.appendChild(prevButton);
    }
});






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
    const contactPopup = document.getElementById('contact-popup');
    const closeBtn = document.getElementById('close-btn');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });
});