function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  console.log(navbar.classList);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-wagon-white');
    } else {
      navbar.classList.remove('navbar-wagon-white');
    }
  });
}

function initUpdateNavbarLinkOnScroll() {
  const navbarLinks = document.querySelectorAll('.navbar-wagon-link');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      // console.log(navbarLinks)
      navbarLinks.forEach((item) => {
        item.classList.add('navbar-wagon-white-link');
      });
    } else {
      navbarLinks.forEach((item) => {
        item.classList.remove('navbar-wagon-white-link');
      });
    }
  });
}

initUpdateNavbarOnScroll()
initUpdateNavbarLinkOnScroll()
