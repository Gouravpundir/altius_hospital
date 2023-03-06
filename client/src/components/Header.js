import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "light-gray"}}>
        <img
          className="mx-3 p-2"
          src="https://altiushospital.com/wp-content/uploads/2021/01/cropped-Altius-05-300x190.png"
          height={90}
          alt=""
        />
        <div className="container-fluid justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/specialities">
                Specialities
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/treatments">
                Treatments &amp; Services
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/doctors">
                Doctors
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/locations">
                Locations
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="btn btn-outline-dark mx-1" to="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
