let currentImage = 0;
const images = document.querySelectorAll('.gallery img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showImage(index) {
  images.forEach((image) => {
    image.classList.remove('active');
  });

  images[index].classList.add('active');
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// Показываем первое изображение и скрываем остальные при загрузке страницы
showImage(currentImage);