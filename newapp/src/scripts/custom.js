import AOS from 'aos'
import 'aos/dist/aos.css'
document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});

// Mobile nav toggle


const menuButton = document.getElementById('impronav-menu');
menuButton && menuButton.addEventListener('click', toggleMobileNav);
const mobileNav = document.getElementById('mobile-nav')
const closeMenuButton = document.getElementById('impronav-close-menu')
closeMenuButton && closeMenuButton.addEventListener('click', closeNavBar) 
const header = document.querySelector(".impronav-sticky-header");
const mainHeader = document.querySelector("header")

function toggleMobileNav() {
  [...document.querySelectorAll('.impronav-toggle')].forEach((el) => {
    // el.classList.toggle('hidden');
    mainHeader.classList.remove('impronav-sticky-header')
    el.classList.remove('-translate-y-[392px]')
    menuButton.classList.add('hidden')
    closeMenuButton.classList.remove('hidden')
    closeMenuButton.classList.add('block')
    header.classList.add("scrolled");
    // el.classList.remove('-translate-y-[365px]')
  });
}

function closeNavBar(event) {
  [...document.querySelectorAll('.impronav-toggle')].forEach((el) => {
    // el.classList.toggle('hidden');
    el.classList.add('-z-50')
    el.classList.add('-translate-y-[392px]')
    menuButton.classList.remove('hidden')
    closeMenuButton.classList.remove('block')
    closeMenuButton.classList.add('hidden')
    if(header.classList.contains('scrolled') && window.scrollY < 50) {
      header.classList.remove('scrolled')
    }
    // el.classList.remove('-translate-y-[365px]')
  });
}

document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      if (!header.classList.contains('scrolled') && window.innerWidth < 1024) {
        header.classList.add("scrolled");
        mainHeader.classList.add('impronav-shadow')
      } else {
        mainHeader.classList.add('scrolled')
        mainHeader.classList.add('impronav-shadow')
      }
      // if (!closeMenuButton.classList.contains('block')) {
      // }
      mobileNav.classList.add('bg-effect')
    } else {
      if(!closeMenuButton.classList.contains('block')) {
        header.classList.remove("scrolled"); // Keep transparent
        mainHeader.classList.remove('impronav-shadow')
      }
    }
  });
});
