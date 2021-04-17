import home from './home';
import contactPage from './contactPage';
import about from './about';
import menu from './menu';

home();

const about_us = document.querySelector('#about');
about_us.addEventListener('click',()=> about())

const menu_list = document.querySelector('#menu')
menu_list.addEventListener('click',()=> menu())

const contact = document.querySelector('#contact');
contact.addEventListener('click', () => contactPage())
 console.log("gg45j");