  /* script.js */
  // script.js

// Smooth scroll for anchor links
// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll animations
  document.addEventListener('DOMContentLoaded', () => {
    const animatedItems = document.querySelectorAll('.hero-text, .hero-img img, .card, .gallery-grid img, .video-section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedItems.forEach(item => {
      observer.observe(item);
    });
  });
  
  // WhatsApp message sender
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = this.querySelector('input[name="name"]').value;
      const message = this.querySelector('textarea[name="message"]').value;
      const phone = '234XXXXXXXXXX'; // Replace with your WhatsApp number
  
      const whatsappURL = `https://wa.me/${phone}?text=Name:%20${encodeURIComponent(name)}%0AMessage:%20${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    });
  });
  
  // Lock YouTube/TikTok video to only play within site
  document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('iframe');
  
    videos.forEach(video => {
      const src = video.getAttribute('src');
      if (src.includes('youtube.com')) {
        video.setAttribute('src', src + '?modestbranding=1&rel=0&enablejsapi=1');
      }
    });
  
    // Optional: Block right-click
    document.addEventListener('contextmenu', e => {
      if (e.target.closest('.video-section iframe')) {
        e.preventDefault();
      }
    });
  });
  