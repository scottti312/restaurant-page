import Steak from './assets/Steak.jpg';
import Dishes from './assets/Dishes.jpg';

var slideIndex = 1;
export function homeContent() {
  let content = document.createElement('div');
  let slideshowContainer = document.createElement('div');
  let steak = new Image();
  let dishes = new Image();
  let rightButton = document.createElement('button');
  let leftButton = document.createElement('button');

  rightButton.classList.add('w3-button', 'w3-black', 'w3-display-right');
  leftButton.classList.add('w3-button', 'w3-black', 'w3-display-left');
  slideshowContainer.classList.add('slideshow');
  rightButton.innerHTML = '&#10095;';
  leftButton.innerHTML = '&#10094;';

  content.id = 'content';

  dishes.src = Dishes;
  steak.src = Steak;
  steak.alt = 'steak';
  dishes.alt = 'dishes';
  steak.classList.add('slides');
  dishes.classList.add('slides');
  steak.style.width = "60vw";
  steak.style.height = "70vh";
  dishes.style.width = "60vw";
  dishes.style.height = "70vh";
  slideshowContainer.appendChild(leftButton);
  slideshowContainer.appendChild(steak);
  slideshowContainer.appendChild(dishes);
  slideshowContainer.appendChild(rightButton);

  rightButton.addEventListener('click', () => {
    showDivs(slideIndex += 1);
  })
  leftButton.addEventListener('click', () => {
    showDivs(slideIndex += -1);
  })

  let welcome = document.createElement('h2');
  welcome.innerText = 'Welcome to the restaurant lorem ipsum this is some test text. Fine dining since 1962.';
  let about = document.createElement('p');
  about.innerText = 'This is a restaurant that sells food. We make fancy food in small portions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  let hours = document.createElement('div');
  hours.id = 'hours';
  let weekdays = document.createElement('div');
  let weekends = document.createElement('div');
  weekdays.innerText = 'Weekdays: 11am to 10pm';
  weekends.innerText = 'Weekends: 8am to 11pm';
  hours.appendChild(weekdays);
  hours.appendChild(weekends);

  content.appendChild(slideshowContainer);
  content.appendChild(welcome);
  content.appendChild(about);
  content.appendChild(hours);
  return content;
}

export function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('slides');
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
