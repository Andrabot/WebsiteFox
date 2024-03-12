let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  const gallery = document.querySelector('.gallery-container');
  const translateValue = -index * 60; // 60% width per slide

  gallery.style.transform = `translateX(${translateValue}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    prevSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
  }
});

// You can also add buttons or gestures for next and previous slides
// Example: document.getElementById('nextButton').addEventListener('click', nextSlide);
//          document.getElementById('prevButton').addEventListener('click', prevSlide);
