const menu = () =>{
    const root = document.getElementById('content');
    const element = document.createElement('div');
    element.innerHTML =`
    <div class="menu-container menu-center">
        <ul class="card-list">
          <li class="card">
            
            <div class="card-body">
              <h2 class="card-title">Chicken Burger</h2>
              <span class="price">$8.2</span>
            </div>
          </li><br/>

          <li class="card">
            

            <div class="card-body">
              <h2 class="card-title">Pizza Margherita</h2>
              <span class="price">$5</span>
            </div>
          </li><br/>

          <li class="card">
           

            <div class="card-body">
              <h2 class="card-title">Hot dog</h2>
              <span class="price">$4.2</span>
            </div>
          </li><br/>

          <li class="card">
            

            <div class="card-body">
              <h2 class="card-title">Mixed salad</h2>
              <span class="price">$10</span>
            </div>
          </li><br/>

          <li class="card">
            

            <div class="card-body">
              <h2 class="card-title">Veggie Burger</h2>
              <p class="card-subtitle">includes green leafs</p>
              <span class="price">$8.2</span>
            </div>
          </li><br/>

          <li class="card">
            

            <div class="card-body">
              <h2 class="card-title">Mixed salad</h2>
              <span class="price">$10</span>
            </div>
          </li><br/>
        </ul>
    </div>
  
    `;
    root.appendChild(element);
    };
    export default menu