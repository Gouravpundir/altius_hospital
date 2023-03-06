import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              lectus sit amet purus eleifend porttitor.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/specialities" className="text-dark">
                  Specialities
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-dark">
                  Doctors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li># 6/63, 59th Cross,</li>
              <li> 4th Block, Near Ram Mandir,</li>
              <li> Bengaluru - 560 010.</li>
              <li>Phone: +91-8882799799</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <hr className="text-dark" />
        <p className="text-center text-muted">
          &copy; {new Date().getFullYear()} Example Company. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
