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
  watchSlidesProgress: true,
  spaceBetween: 16,
  initialSlide: 1,
  loop: true,
  loopAdditionalSlides: 12,
  loopAddBlankSlides: false,
  loopPreventsSliding: false,
  freeMode: {
    enabled: false,
  },

  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  mousewheel: false,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    init: function () {
      setTimeout(() => {
        if (this.autoplay) {
          this.autoplay.stop();
          this.autoplay.start();
          // this.autoplay.run();
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

