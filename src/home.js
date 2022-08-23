import Steak from './assets/Steak.jpg';
import Dishes from './assets/Dishes.jpg';


var slideIndex = 1;
export function homeContent() {
  let content = document.createElement('div');
  let w3Content = document.createElement('div');
  let steak = new Image();
  let dishes = new Image();
  let rightButton = document.createElement('button');
  let leftButton = document.createElement('button');

  rightButton.classList.add('w3-button', 'w3-black', 'w3-display-right');
  leftButton.classList.add('w3-button', 'w3-black', 'w3-display-left');
  w3Content.classList.add('w3-content', 'w3-display-container');
  rightButton.innerHTML = '&#10095;';
  leftButton.innerHTML = '&#10094;';



  content.id = 'content';

  dishes.src = Dishes;
  steak.src = Steak;
  steak.alt = 'steak';
  dishes.alt = 'dishes';
  steak.classList.add('slides');
  dishes.classList.add('slides');

  steak.style.width = "1200px";
  dishes.style.width = "1200px";



  w3Content.appendChild(steak);
  w3Content.appendChild(dishes);
  w3Content.appendChild(leftButton);
  w3Content.appendChild(rightButton);

  content.appendChild(w3Content);

  rightButton.addEventListener('click', () => {
    showDivs(slideIndex += 1);
  })
  leftButton.addEventListener('click', () => {
    showDivs(slideIndex += -1);
  })

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
