import './style.css';
import Logo from './assets/Logo.png';
import homeContent from './home.js'

let header = document.createElement('div');
let menu = document.createElement('button');
let contact = document.createElement('button');
const restLogo = new Image();
restLogo.src = Logo;

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

console.log("This is a test");
