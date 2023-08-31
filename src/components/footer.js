import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5 className="mb-3">About Us</h5>
            <p>Your shopping mall's mission and vision.</p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Contact Us</a></li>
              <li><a href="#!">Returns & Exchanges</a></li>
              <li><a href="#!">Shipping Information</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Electronics</a></li>
              <li><a href="#!">Clothing & Accessories</a></li>
              <li><a href="#!">Home & Kitchen</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Stay Connected</h5>
            <p>Follow us on social media:</p>
            <div className="d-flex">
              <a href="#!" className="me-2 text-light"><i className="fab fa-facebook-f"></i></a>
              <a href="#!" className="me-2"><i className="fab fa-twitter"></i></a>
              <a href="#!" className="me-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <p className="mb-0">© {new Date().getFullYear()} Coforge Shopping Mall. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
