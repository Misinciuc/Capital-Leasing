

document.querySelector(".sideM").onclick = function () {
  const sideMenu = document.querySelector(".sideM");
  const aside = document.querySelector(".aside");
  const asideClose = document.querySelector(".aside__close");
  aside.classList.add("aside-show");
  sideMenu.classList.add("sideM-hide");
  asideClose.onclick = () => {
    sideMenu.classList.remove("sideM-hide");
    aside.classList.remove("aside-show");
    sideMenu.style.visibility = "visible";
  }
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
