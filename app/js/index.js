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