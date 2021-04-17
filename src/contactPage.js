const contactPage = () => {
    const root = document.getElementById('content')
    const element  = document.createElement('div')
    console.log("contact")
    element.innerHtml = `
    <div class="menu-container text-center">
      <div class="center-card">
        <h1>Contact us.</h1>

        <form action="#">
          <div class="form-group">
            <input type="text" id="name" class="form-control"  placeholder="Name">
          </div>

<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Name">
</div>

          <div class="form-group">
            <input type="email" id="email" class="form-control"  placeholder="email">
          </div>

          <div class="form-group">
            <textarea name="message" class="form-control" placeholder="Your message ..."></textarea>
          </div>

          <div>
             <input type="submit" class="btn menu-btn" value="submit">
          </div>
        </form>


        <div class="contact-info">
          <p class="contact-message">Reach out to us directly.</p>
          <p class="contact-number">+977 120-244-242</p>
        </div>

      </div>
    </div>
  `
  root.appendChild(element);
  console.log("end")
};
export default contactPage