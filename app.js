'use strict';

const switcher = document.querySelector('.btn');
const body = document.body;
const lightContent = document.querySelector('.light-content');
const darkContent = document.querySelector('.dark-content');

switcher.addEventListener('click', function() {

  const isDarkTheme = body.classList.contains('light-theme');

  if (isDarkTheme) {
    lightContent.style.display = 'none';
    darkContent.style.display = 'block';
  } else {
    lightContent.style.display = 'block';
    darkContent.style.display = 'none';
  }

  console.log('current class name: ' + isDarkTheme); 
});
