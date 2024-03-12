const mediaTabs = document.querySelectorAll('.media__tabs-btn');
const tabsContents = document.querySelectorAll('.media__tabs-content');

mediaTabs.forEach(btn => {
  btn.onclick = (event) => {
    mediaTabs.forEach((item, index) => {
      if (event.target == item) {
        document.querySelector('.media__tabs-content--active').classList.remove('media__tabs-content--active');
        tabsContents[index].classList.add('media__tabs-content--active');
        document.querySelector('.media__tabs-btn--active').classList.remove('media__tabs-btn--active');
        mediaTabs[index].classList.add('media__tabs-btn--active');
      }
    });
  };
});

const mainSlider = new Swiper('.personal__main-slider', {
  slidesPerView: 3,
  spaceBetween: 8,
  navigation: {
    prevEl: '.personal__main-slider-prev',
    nextEl: '.personal__main-slider-next'
  }
});

const slider = new Swiper('.personal__slider', {
  slidesPerView: 4,
  spaceBetween: 8,
  navigation: {
    prevEl: '.personal__slider-prev',
    nextEl: '.personal__slider-next'
  }
});