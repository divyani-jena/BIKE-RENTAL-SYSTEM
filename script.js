const backToTopBtn = document.querySelector('#back-to-top-btn');

// show the button when the user scrolls down 20px from the top
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// scroll to the top of the page when the button is clicked
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

let colorThemeButton = document.getElementById('colorThemeButton');
let bodyElement = document.querySelector('body');

colorThemeButton.addEventListener('click', function() {
	bodyElement.classList.toggle('dark');
});
