const tswiper = new Swiper(".swiper", {
  grabCursor: true,
  initialSlide: 4,
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  slidesPerGroup: 8,
  grid: {
    rows: 2,
    fill: "row",
  },

  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperService = new Swiper(".service-swipp", {
  slidesPerView: 2,
  //slidesPerGroup: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector('.sideM').onclick = function (){
  const aside = document.querySelector('.aside');
  aside.style.display = "block";
}