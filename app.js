// const images = document.querySelectorAll('.gallery img');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentIndex = 2; // Начнем с третьего изображения (индекс 2)

// function updateGallery() {
//     images.forEach((img, index) => {
//         img.classList.remove('active', 'next', 'prev');
        
//         if (index === currentIndex) {
//             img.classList.add('active'); // Центральное изображение
//         } else if (index === currentIndex - 1 || index === currentIndex + 1) {
//             img.classList.add('next'); // Изображения слева и справа от центрального
//         } else {
//             img.classList.add('prev'); // Остальные изображения
//         }
//     });
// }

// // Кнопка "Назад"
// prevButton.addEventListener('click', () => {
//     currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
//     updateGallery();
// });

// // Кнопка "Вперед"
// nextButton.addEventListener('click', () => {
//     currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
//     updateGallery();
// });

// // Инициализация
// updateGallery();
// let currentIndex = 0;

// const slides = document.querySelectorAll('.carousel-slide');
// const totalSlides = slides.length;
// const carousel = document.querySelector('.carousel');

// function moveSlide(step) {
//   // Вычисляем новый индекс слайдера
//   currentIndex += step;

//   // Переход к первому слайду, если достигнут конец
//   if (currentIndex < 0) {
//     currentIndex = totalSlides - 1;
//   }

//   // Переход к последнему слайду, если достигнут начало
//   if (currentIndex >= totalSlides) {
//     currentIndex = 0;
//   }

//   // Перемещаем карусель
//   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Добавляем обработчик клика на каждое изображение
// document.querySelectorAll('.carousel-img').forEach((img, index) => {
//   img.addEventListener('click', () => {
//     // Переключаем на следующий слайд при клике на изображение
//     moveSlide(1);
//   });
// });
