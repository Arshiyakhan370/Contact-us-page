function toggleMenu() {
    const body = document.body;
// const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-links');
  const burgerMenu = document.querySelector('.burger-menu');
  
  
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('open');

  if ( navLinks.classList.contains('open')) {
   
        navLinks.style.display = "block";
    body.style.overflow = "hidden"; 
  } else {
    navLinks.style.display = "none";
   
    body.style.overflow = "auto"; 
  }
}

