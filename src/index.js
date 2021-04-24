import home from './home';
import contactPage from './contactPage';
import about from './about';
import menu from './menu';



const content = document.querySelector('#content');

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

const tabs = [homeTab, menuTab, contactTab];


tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        content.innerHTML='';
        //home();
        content.appendChild(tab)
    })
})
