/* Menu */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

function clickOnNavLink() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", clickOnNavLink));

/* Skills */

const skillsContent = document.getElementsByClassName("skills-content"),
  skillsHeader = document.querySelectorAll(".skills-header");

function skillsToggle() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }

  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", skillsToggle);
});

/* Qualifications */

const qualificationTabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

qualificationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("visible-qualification");
    });

    target.classList.add("visible-qualification");

    tab.forEach((tab) => {
      tab.classList.remove("visible-qualification");
    });

    tab.classList.add("visible-qualification");
  });
});

/* Certifications */

const certificationInfo = document.querySelectorAll(".certifications-info"),
  certificationOpen = document.querySelectorAll(".certifications-button"),
  certificationClose = document.querySelectorAll(".certifications-info-close");

let modal = function (certificationClick) {
  certificationInfo[certificationClick].classList.add("active-certification");
};

certificationOpen.forEach((certificationButton, i) => {
  certificationButton.addEventListener("click", () => {
    modal(i);
  });
});

certificationClose.forEach((certification) => {
  certification.addEventListener("click", () => {
    certificationInfo.forEach((activeCertification) => {
      activeCertification.classList.remove("active-certification");
    });
  });
});

/* Portfolio */

let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/* Scrolling */

const sections = document.querySelectorAll("section[id]");

function activeScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", activeScroll);

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollToTop() {
  const scrollToTop = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollToTop.classList.add("show-scroll");
  else scrollToTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollToTop);

/* Theme switching */

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
