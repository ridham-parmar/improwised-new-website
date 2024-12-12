
// Mobile nav toggle
 const menuButton = document.getElementById('impronav-menu');
 menuButton && menuButton.addEventListener('click', toggleMobileNav);

 function toggleMobileNav() {
    [...document.querySelectorAll('.impronav-toggle')].forEach((el) => {
      el.classList.toggle('hidden');
    });
  }
