let index = 0;

function moveSlide(step) {
  const track = document.querySelector('.carousel-track');
  const totalSlides = track.children.length;
  const slideWidth = track.children[0].offsetWidth;

  index += step;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  track.style.transform = `translateX(-${index * slideWidth}px)`;
}