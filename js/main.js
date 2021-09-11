let btnToggleMobileMenu = document.querySelector("#btnMobileMenu");
let mainNavBar = document.querySelector("#mainNavBar");
let body = document.querySelector("body");
let modalBodyBG = document.querySelector("#modalBodyBG");

let testimonials = document.querySelector("#testimonialBox").children;
let testimonialNavElement = document.querySelector("#testimonialNavBlock")
  .firstElementChild.children;

let submitMailForm = document.querySelector("#submitMailForm");
let inputBoxMail = document.querySelector("#inputBoxMail");
let btnSubmitForm = document.querySelector("#btnSubmitForm");

let mobileMenuIsOpen = false;
let testimonialSliderInterval;

function toggleMobileMenu() {
  if (mobileMenuIsOpen) {
    body.classList.remove("overflowHidden");
    mainNavBar.classList.remove("open");
    mainNavBar.classList.add("close");

    modalBodyBG.classList.remove("openModalBG");
    modalBodyBG.classList.add("closeModalBG");

    btnToggleMobileMenu.style.backgroundImage =
      "url('./images/icon-hamburger.svg')";
    mobileMenuIsOpen = !mobileMenuIsOpen;
    setMenuDisplayNoneAfterAnimation();
    console.log("closing  " + mobileMenuIsOpen);
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
    mobileMenuIsOpen = !mobileMenuIsOpen;
    console.log("opening  " + mobileMenuIsOpen);
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

  // testimonialSliderInterval = setInterval(() => {
  //   counter < testimonials.length - 1 ? counter++ : (counter = 0);
  //   selectTestimonial(counter);
  // }, 10000);
}

function selectTestimonial(counter) {
  for (let i = 0; i < testimonials.length; i++) {
    if (i != counter) {
      testimonials[i].classList.add("displayNone");
      testimonialNavElement[i].classList.remove("bgColorBrightRed");
    } else {
      testimonials[i].classList.remove("displayNone");
      testimonialNavElement[i].classList.add("bgColorBrightRed");
    }
  }
}

function switchTestimonial(event) {
  clearInterval(testimonialSliderInterval);
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

function init() {
  console.log("Hi");
  btnToggleMobileMenu.addEventListener("click", toggleMobileMenu);
  startTestimonialSlider();
  btnSubmitForm.addEventListener("click", submitMail);

  let testimonialNavBubbles = testimonialNavBlock.firstElementChild.children;
  for (let i = 0; i < testimonialNavBubbles.length; i++) {
    testimonialNavBubbles[i].addEventListener("click", switchTestimonial);
  }
}

window.onload = init;
