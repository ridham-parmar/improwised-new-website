import AOS from 'aos'
import 'aos/dist/aos.css'
document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});

// Mobile nav toggle


const menuButton = document.getElementById('impronav-menu');
menuButton && menuButton.addEventListener('click', toggleMobileNav);

function toggleMobileNav() {
  [...document.querySelectorAll('.impronav-toggle')].forEach((el) => {
    el.classList.toggle('hidden');
  });
}
document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".impronav-sticky-header");

  window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      header.classList.add("scrolled"); // Apply blur effect
    } else {
      header.classList.remove("scrolled"); // Keep transparent
    }
  });
});
