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