/* tabs conditions*/

const links = document.querySelectorAll(".tabs__link");
for (let i = 0; i < links.length; i++) {
  links[0].onclick = function () {
    links[1].classList.remove("tabs__head-line", "tabs__link-active");
    links[0].classList.add("tabs__link-active", "tabs__head-line");
    document.querySelector(".tabs__1").style.display = "block";
    document.querySelector(".tabs__2").style.display = "none";
  };

  links[1].onclick = function () {
    links[1].classList.add("tabs__link-active", "tabs__head-line");
    links[0].classList.remove("tabs__link-active", "tabs__head-line");
    document.querySelector(".tabs__1").style.display = "none";
    document.querySelector(".tabs__2").style.display = "block";
  };
}

let block = document.querySelectorAll(".block");
for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", () => {
    if (block[i].classList.contains("block-1")) {
      document.querySelector(".block__list-1").classList.toggle("none");
    }
    if (block[i].classList.contains("block-2")) {
      document.querySelector(".block__list-2").classList.toggle("none");
    }
    if (block[i].classList.contains("block-3")) {
      document.querySelector(".block__list-3").classList.toggle("none");
    }
    if (block[i].classList.contains("block-4")) {
      document.querySelector(".block__list-4").classList.toggle("none");
    }
  });
}

/* ACCORDEON */

let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion-anim");
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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

document.querySelector(".menu-burgher").onclick = function () {
  document
    .querySelector(".navigation-mobile")
    .classList.add("navigation-mobile-animation");
  document.querySelector(".menu__close").onclick = function () {
    document
      .querySelector(".navigation-mobile")
      .classList.remove("navigation-mobile-animation");
  };
};
