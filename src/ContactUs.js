import React from 'react';

const ContactUs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-primary">Contact Us</h2>
          <p className="lead">
            We'd love to hear from you. Reach out to us with any questions or feedback!
          </p>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <h3 className="text-info">Visit Us</h3>
          <address>
            123 Shopping Mall Street<br />
            City, State ZIP<br />
            Country
          </address>
          <h3 className="text-info mt-4">Call Us</h3>
          <p>Customer Service: +1 (123) 456-7890</p>
          <p>Sales: +1 (987) 654-3210</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
