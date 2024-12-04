const images = document.querySelectorAll('.gallery img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 2;

function updateGallery() {
    images.forEach((img, index) => {
        img.classList.remove('active', 'next', 'prev');
        
        if (index === currentIndex) {
            img.classList.add('active');
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            img.classList.add('next');
        } else {
            img.classList.add('prev');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateGallery();
});

updateGallery();
currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelectorAll('.carousel-img').forEach((img, index) => {
    img.addEventListener('click', () => {
        moveSlide(1);
    });
});
