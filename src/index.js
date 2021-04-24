import home from './home';
import contactPage from './contactPage';
import about from './about';
import menu from './menu';

const content = document.querySelector('#content');
const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');
const aboutTab = document.querySelector('#about');
const tabs = [[menuTab,menu], [contactTab,contactPage],[aboutTab,about]];
tabs.forEach((tab)=>{
    tab[0].addEventListener('click',()=>{
        content.innerHTML='';
        home();
        tab[1]()
    })
})