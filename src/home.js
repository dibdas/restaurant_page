const home = () =>{
const root = document.getElementById('content');
const element = document.createElement('div');
element.innerHTML =`
<header class="navbar">
<div class="logo-name">
<a href="#">Exim's Kitchen</a>
</div>
<div class="container-fluid menu">
<ul class="menu-list">
<li class="menu-item"><a href="#home"class="nav-menu-link">Home</a></li>
<li class="menu-item"><a href="#menu" class="nav-menu-link">Menu</a></li>
<li class="menu-item"><a href="#about" class="nav-menu-link" id="about">About Us</a></li>
<li class="menu-item"><a href="#contact" id="contact" >Contactttt</a>fhhh</li>
</ul>
</div>
</header>
`;
root.appendChild(element);
};
export default home