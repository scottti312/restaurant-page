import './style.css';
import Logo from './Logo.png';

let content = document.createElement('div');
let header = document.createElement('div');
let menu = document.createElement('button');
let contact = document.createElement('button');
const restLogo = new Image();
restLogo.src = Logo;

header.id = 'header';
content.id = 'content';
menu.classList.add('menu');
contact.classList.add('contact');


menu.textContent = 'Menu';
contact.textContent = 'Contact';

header.appendChild(menu);
header.appendChild(restLogo);
header.appendChild(contact);
content.appendChild(header);

document.body.appendChild(content);

console.log("This is a test");
