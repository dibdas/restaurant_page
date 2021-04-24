const contactPage = () => {
  const root = document.getElementById('content');
  root.innerHTML = '';
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="contact text-center">
    <div class="center-card">
      <h1>Contact us.</h1>

      <form action="#">
        <div class="form-group">
          <input type="text" id="name" class="form-control"  placeholder="Name">
        </div><br/>

        <div class="form-group">
          <input type="email" id="email" class="form-control"  placeholder="email">
        </div><br/>

        <div class="form-group">
          <textarea name="message" class="form-control" placeholder="Your message ..."></textarea>
        </div><br/>

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
`;
  root.appendChild(element);
};
export default contactPage;