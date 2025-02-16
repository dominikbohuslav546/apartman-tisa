document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll('.gallery-preview img');
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showLightbox();
        });
    });

    function showLightbox() {
        lightbox.style.display = 'flex';
        lightboxImg.src = images[currentIndex].src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImg.src = images[currentIndex].src;
    }

    document.querySelector(".close").addEventListener("click", closeLightbox);
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    // Close the lightbox when clicking outside of the image (on the background)
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close the lightbox when pressing the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".equipment-grid");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    grids.forEach(grid => observer.observe(grid));
});

document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".surroundings-grid");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    grids.forEach(grid => observer.observe(grid));
});

document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".contact-row");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    grids.forEach(grid => observer.observe(grid));
});

