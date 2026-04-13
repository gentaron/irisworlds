document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible?
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Gallery Population
    const galleryGrid = document.querySelector('.gallery-grid');
    const images = [
        'Iris.png',
        'Fiona.png',
        'Ike.png',
        'Aina.png',
        'Gareth.png',
        'Miyushari.png',
        'Marina.png',
        'Elena.png',
        'Fariel.png',
        'Castina.png',
        'ミナ・エウレカ.png',
        'Piatrino.png'
    ];

    images.forEach(imgName => {
        const item = document.createElement('div');
        item.className = 'gallery-item glass-card';

        const img = document.createElement('img');
        img.src = `assets/${imgName}`;
        img.alt = imgName.replace('.png', '');
        img.loading = 'lazy';

        item.appendChild(img);
        galleryGrid.appendChild(item);
    });

    // Modal Lightbox Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const span = document.getElementsByClassName('close-modal')[0];

    // Event delegation for dynamically added gallery items
    galleryGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const img = item.querySelector('img');
            modal.classList.add('show');
            modalImg.src = img.src;
        }
    });

    span.onclick = function () {
        modal.classList.remove('show');
    }

    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    }

    // Simple Glitch Effect Randomizer on Hover
    const glitchTitle = document.querySelector('.glitch');
    if (glitchTitle) {
        glitchTitle.addEventListener('mouseover', () => {
            glitchTitle.style.textShadow = `
                ${Math.random() * 20 - 10}px ${Math.random() * 20 - 10}px 0px #ff00ff,
                ${Math.random() * 20 - 10}px ${Math.random() * 20 - 10}px 0px #00ffff
            `;
        });

        glitchTitle.addEventListener('mouseout', () => {
            glitchTitle.style.textShadow = '2px 2px 0px var(--primary)';
        });
    }
});
