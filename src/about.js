import home from './home';

const about = () => {
    const root = document.getElementById('content')
    root.innerHTML=' '
    const element  = document.createElement('div')
    console.log("about")
    
    element.innerHTML = `
    <div class="about-container text-center ">
    <div class="center-card">
      <h1 class="heading text-white">About project</h1>
      <p class="text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
  `
  root.appendChild(element);
};
export default about