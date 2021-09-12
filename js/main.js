let body = document.querySelector("body");
let modalBodyBG = document.querySelector("#modalBodyBG");
let btnToggleMobileMenu = document.querySelector("#btnMobileMenu");
let mainNavBar = document.querySelector("#mainNavBar");

let testimonials = document.querySelector("#testimonialBox").children;
let testimonialNavElement = document.querySelector("#testimonialNavBlock")
  .firstElementChild.children;

let submitMailForm = document.querySelector("#submitMailForm");
let inputBoxMail = document.querySelector("#inputBoxMail");
let btnSubmitForm = document.querySelector("#btnSubmitForm");

let mobileMenuIsOpen = false;
let testimonialMobileSliderInterval;

function toggleMobileMenu() {
  if (mobileMenuIsOpen) {
    body.classList.remove("overflowHidden");
    mainNavBar.classList.remove("open");
    mainNavBar.classList.add("close");

    modalBodyBG.classList.remove("openModalBG");
    modalBodyBG.classList.add("closeModalBG");

    btnToggleMobileMenu.style.backgroundImage =
      "url('./images/icon-hamburger.svg')";
    btnToggleMobileMenu.setAttribute("aria-label", "open menu");

    mobileMenuIsOpen = !mobileMenuIsOpen;
    setMenuDisplayNoneAfterAnimation();
  } else {
    body.classList.add("overflowHidden");
    mainNavBar.classList.remove("displayNone");
    mainNavBar.classList.remove("close");
    mainNavBar.classList.add("open");

    modalBodyBG.classList.remove("displayNone");
    modalBodyBG.classList.add("openModalBG");
    modalBodyBG.classList.remove("closeModalBG");

    btnToggleMobileMenu.style.backgroundImage =
      "url('./images/icon-close.svg')";
    btnToggleMobileMenu.setAttribute("aria-label", "close menu");

    mobileMenuIsOpen = !mobileMenuIsOpen;
  }
}

function setMenuDisplayNoneAfterAnimation() {
  setTimeout(() => {
    mainNavBar.classList.remove("close");
    mainNavBar.classList.add("displayNone");
    modalBodyBG.classList.remove("closeModalBG");
    modalBodyBG.classList.add("displayNone");
  }, 2000);
}

function startTestimonialSlider(startElement = 0) {
  let counter = startElement;
  selectTestimonial(counter);
  testimonialMobileSliderInterval = setInterval(() => {
    counter < testimonials.length - 1 ? counter++ : (counter = 0);
    selectTestimonial(counter);
  }, 10000);
}

function selectTestimonial(counter) {
  for (let i = 0; i < testimonials.length; i++) {
    if (window.screen.width < 960 && i != counter) {
      testimonials[i].classList.add("displayNone");
      testimonialNavElement[i].classList.remove("bgColorBrightRed");
    } else {
      testimonials[i].classList.remove("displayNone");
      testimonialNavElement[i].classList.add("bgColorBrightRed");
    }
  }
}

function switchTestimonial(event) {
  clearInterval(testimonialMobileSliderInterval);
  startTestimonialSlider(event.target.value);
}

function submitMail(event) {
  let mailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  event.preventDefault();
  if (inputBoxMail.value.match(mailRegex)) {
    submitMailForm.classList.remove("error");
    submitMailForm.classList.add("valid");
  } else {
    submitMailForm.classList.remove("valid");
    submitMailForm.classList.add("error");
  }
}

function handleWindowResize() {
  if (window.screen.width >= 960) {
    clearInterval(testimonialMobileSliderInterval);
    for (let i = 0; i < testimonials.length; i++) {
      testimonials[i].classList.remove("displayNone");
    }
    if (mobileMenuIsOpen) {
      toggleMobileMenu();
    }
  } else {
    selectTestimonial(0);
  }
}

function init() {
  btnToggleMobileMenu.addEventListener("click", toggleMobileMenu);
  btnSubmitForm.addEventListener("click", submitMail);
  window.addEventListener("resize", handleWindowResize);
  startTestimonialSlider();

  let testimonialNavBubbles = testimonialNavBlock.firstElementChild.children;
  for (let i = 0; i < testimonialNavBubbles.length; i++) {
    testimonialNavBubbles[i].addEventListener("click", switchTestimonial);
  }
}

window.onload = init;
