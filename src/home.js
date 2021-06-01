import contactPage from './contactPage';
import about from './about';
import menu from './menu'; // eslint-disable-line

const home = () => {
  const root = document.querySelector('body');
  const navBar = document.createElement('div');
  navBar.innerHTML = `
  <header class="navbar" style="background-color: black">
  <div class="logo-name">
  <a href="#">Exim's Kitchen</a>
  </div>
  <div class="menu">
  <ul class="menu-list">
  <li class="menu-item"><a href="#menu" class="nav-menu-link" id="menu">Menu</a></li>
  <li class="menu-item"><a href="#about" class="nav-menu-link" id="about">About Us</a></li>
  <li class="menu-item"><a href="#contact" class="nav-menu-link" id="contact" >Contact</a></li>
  </ul>
  </div>
  </header>
  `;
  const content = document.getElementById('content');
  root.insertBefore(navBar, content);
  content.innerHTML = 'Welcome';
  const menuTab = document.querySelector('#menu');
  const contactTab = document.querySelector('#contact');
  const aboutTab = document.querySelector('#about');
  const tabs = [[menuTab, menu], [contactTab, contactPage], [aboutTab, about]];
  tabs.forEach((tab) => {
    tab[0].addEventListener('click', () => {
      tab[1]();
    });
  });
};
export default home;