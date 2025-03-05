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
    el.classList.remove('-translate-y-[392px]')
    menuButton.classList.add('hidden')
    closeMenuButton.classList.remove('hidden')
    closeMenuButton.classList.add('block')
    header.classList.add("scrolled");
  });
}

function closeNavBar(event) {
  [...document.querySelectorAll('.impronav-toggle')].forEach((el) => {
    el.classList.add('-translate-y-[392px]')
    menuButton.classList.remove('hidden')
    closeMenuButton.classList.remove('block')
    closeMenuButton.classList.add('hidden')
    if(header.classList.contains('scrolled') && window.scrollY < 50) {
      header.classList.remove('scrolled')
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      if (!header.classList.contains('scrolled')) {
        header.classList.add("scrolled");
        mainHeader.classList.add('impronav-shadow')
      }
      mobileNav.classList.add('bg-effect')
    } else {
      if(!closeMenuButton.classList.contains('block')) {
        header.classList.remove("scrolled");
        mainHeader.classList.remove('impronav-shadow')
      }
    }
  });
});
