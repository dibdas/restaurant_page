const home = () =>{
    console.log("huj")
const root = document.getElementById('content');
const element = document.createElement('div');
element.innerHTML =`
<header class="navbar">
<div class="logo-name">
<a href="#">Exim's Kitchen</a>
</div>
<div class="container-fluid menu">
<ul class="menu-list">
<li class="menu-item"><a href="#home">Home</a></li>
<li class="menu-item"><a href="#menu">Menu</a></li>
<li class="menu-item"><a href="#about">About</a></li>
<li class="menu-item"><a href="#contact">Contact</a></li>
</ul>
</div>
</header>
`;
console.log("huj1")
root.appendChild(element);
};
export default home