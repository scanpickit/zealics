import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css'; // Custom styles (if needed)
import lady from '../images/lady.png'
const ContactUs = () => {
  return (
    <div className="container-fluid d-flex flex-wrap align-items-center" >
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img src={lady} alt="Contact Us" className="img-fluid" />
      </div>
      <div className="col-md-6 p-5">
        <p id='p-contact-us' className="h5">Contact Us</p>
        <h1 id='h1-collaborate'>Let's Collaborate Now!</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input placeholder='Input Your Name' type="text" id="fullName" className="form-control contact-us-input" required />
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email" className="form-label">Email</label>
              <input placeholder='Input Your Email' type="email" id="email" className="form-control contact-us-input" required />
            </div>
            <div className="col">
              <label htmlFor="industry" className="form-label">Industry</label>
              <input placeholder='Input Service Of Interest' type="text" id="industry" className="form-control contact-us-input" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea placeholder='Write Message...' id="message" className="form-control contact-us-input" style={{height:'100%'}} rows="4" required></textarea>
          </div>
          <button type="submit" className="mt-4 btn send-message">Send Message</button>
        </form>
      </div>

      <div className='NewsLetter'>
  <h1>Subscribe Newsletter & <br /> Get Latest News</h1>
  <div className="email-input">
    <div className="inputWithButton">
      <input className='form-control' placeholder='Enter your email address' type="text"/>
      <button>Subscribe</button>
      
    </div>
  </div>
</div>

    </div>
  );
};

export default ContactUs;
