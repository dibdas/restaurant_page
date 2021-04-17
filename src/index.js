import home from './home';
import contactPage from './contactPage';
import about from './about';
home();

const about_us = document.querySelector('#about');
about_us.addEventListener('click',()=>about())

const contact = document.querySelector('#contact');
contact.addEventListener('click', () => contactPage())
 console.log("gg45j");