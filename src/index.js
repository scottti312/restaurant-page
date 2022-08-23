import './style.css';
import Logo from './assets/Logo.png';
import { homeContent, showDivs } from './home.js';
import menuContent from './menu.js';
import contactContent from './contact.js';

let header = document.createElement('div');
let menu = document.createElement('button');
let contact = document.createElement('button');
let container = document.createElement('div');
const restLogo = new Image();
restLogo.src = Logo;
restLogo.id = 'logo';
restLogo.alt = 'grand boulevard'

header.id = 'header';
menu.classList.add('menu');
contact.classList.add('contact');
container.id = 'container';


menu.textContent = 'Menu';
contact.textContent = 'Contact';

header.appendChild(menu);
header.appendChild(restLogo);
header.appendChild(contact);
let footer = document.createElement('div');
footer.id = 'footer';
footer.innerText = 'Made by Scott Ti. 2022'

container.appendChild(homeContent());
container.appendChild(footer);


document.body.appendChild(header);
document.body.appendChild(container);

showDivs(1);



menu.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before(menuContent());
})

restLogo.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before(homeContent());
  showDivs(1);
})

contact.addEventListener('click', () => {
  container.removeChild(document.querySelector('#content'));
  footer.before(contactContent());
})
