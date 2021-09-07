let btnToggleMobileMenu = document.querySelector("#iconMobileMenu");
let mainNavBar = document.querySelector("#mainNavBar");
let body = document.querySelector("body");
let modalBodyBG = document.querySelector("#modalBodyBG");

let mobileMenuIsOpen = false;

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

function setMenuDisplayNoneAfterAnimation(){
    setTimeout(() => {
        mainNavBar.classList.remove("close");
        mainNavBar.classList.add("displayNone");
    }, 2000);
}

function init() {
  console.log("Hi");
  btnToggleMobileMenu.addEventListener("click", toggleMobileMenu);
}

window.onload = init;
