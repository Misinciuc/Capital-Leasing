/* document.querySelector(".info__numbers").onmouseover = function () {
  const dropContent = document.querySelector(".drop-content");
  const droparrow = document.querySelector(".info__numbers");
  dropContent.classList.add("drop-content-show");
  droparrow.classList.add("info__numbers-anim");
};
document.querySelector(".info__numbers").onmouseleave = function () {
  const dropContent = document.querySelector(".drop-content");
  const droparrow = document.querySelector(".info__numbers");
  dropContent.classList.remove("drop-content-show");
  droparrow.classList.remove("info__numbers-anim");
}; */

document.querySelector(".sideM").onclick = function () {
  const sideMenu = document.querySelector(".sideM");
  const sideLine = document.querySelector(".sideM__line");
  const aside = document.querySelector(".aside");
  const asideClose = document.querySelector(".aside__close");
  aside.classList.add("aside-show");
  sideMenu.classList.remove("sideM-like");
  sideLine.classList.remove("sideM__line-like");
  sideMenu.classList.add("sideM-hide");
  asideClose.onclick = () => {
    sideMenu.classList.add("sideM-like");
    sideLine.classList.add("sideM__line-like");
    sideMenu.classList.remove("sideM-hide");
    aside.classList.remove("aside-show");
  };
};

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

/* tabs conditions*/

/* const link2 = document.querySelector('.tabs__link-2').onclick = function () {
  const tab1 = document.querySelector('.tabs__1');
  const tab2 = document.querySelector('.tabs__2');
  tab1.style.display = "none";
  tab2.style.display = "block";
}

const link1 = document.querySelector('.tabs__link-1').onclick = function () {
  const tab1 = document.querySelector('.tabs__1');
  const tab2 = document.querySelector('.tabs__2');
  const link1 = document.querySelector('.tabs__link-1');
  tab1.style.display = "block";
  tab2.style.display = "none";
} */

/* ACCORDEON   */

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.classList.toggle("accordion-anim");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
