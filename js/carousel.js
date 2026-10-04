const wrapper = document.querySelector('.swiper-wrapper');
if (wrapper) {
  const originalSlides = Array.from(wrapper.children);
  for (let i = 0; i < 2; i++) {
    originalSlides.forEach(slide => {
      wrapper.appendChild(slide.cloneNode(true));
    });
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 12,
  loopAddBlankSlides: false,
  loopPreventsSliding: false,
  freeMode: {
    enabled: false
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  mousewheel: true,
  observer: true,
  observeParents: true,

  on: {
    init: function () {
      setTimeout(() => {
        if (this.autoplay) {
          this.autoplay.stop();
          this.autoplay.start();
          this.autoplay.run();
        }
      }, 150);
    },
    slideChange: function () {
      if (this.autoplay && !this.autoplay.running) {
        this.autoplay.start();
      }
    }
  }
});

const borderColors = [
  '#128A9B',
  '#F4E000',
  '#E6643B',
  '#A21C46',
  '#BF8A94',
];

let lastColorIndex = -1;

document.querySelectorAll('.movie-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    let randomIndex;

    // Pick a new index until it differs from the last one
    do {
      randomIndex = Math.floor(Math.random() * borderColors.length);
    } while (randomIndex === lastColorIndex);

    // Save the current index for the next check
    lastColorIndex = randomIndex;

    const randomColor = borderColors[randomIndex];
    card.style.setProperty('--hover-border-color', randomColor);
  });
});