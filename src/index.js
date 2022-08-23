import './style.css';
import Logo from './assets/Logo.png';
import { homeContent, showDivs } from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';

let header = document.createElement('div');
let menu = document.createElement('button');
let contact = document.createElement('button');
const restLogo = new Image();
restLogo.src = Logo;
restLogo.id = 'logo';
restLogo.alt = 'grand boulevard'

header.id = 'header';
menu.classList.add('menu');
contact.classList.add('contact');


menu.textContent = 'Menu';
contact.textContent = 'Contact';

header.appendChild(menu);
header.appendChild(restLogo);
header.appendChild(contact);


document.body.appendChild(header);
document.body.appendChild(homeContent());
showDivs(1);

console.log("This is a test");


menu.addEventListener('click', () => {
  document.body.removeChild(document.querySelector('#content'));
  document.body.appendChild(menuContent());
})

restLogo.addEventListener('click', () => {
  document.body.removeChild(document.querySelector('#content'));
  document.body.appendChild(homeContent());
  showDivs(1);
})

contact.addEventListener('click', () => {
  document.body.removeChild(document.querySelector('#content'));
  document.body.appendChild(contactContent());
})
