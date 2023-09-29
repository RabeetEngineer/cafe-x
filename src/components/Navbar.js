import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="upper-nav text-white d-flex justify-content-center ">
          <h6 className="mt-3 me-2">Delivery Hours:</h6>
          <h6 className="mt-3">12:00 PM to 12:00 AM</h6>
        </div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container-fluid">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt=""
              style={{ color: "white", width: "80px,", height: "70px" }}
            />
            </Link >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                <li class="nav-item me-3">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item me-3">
                  <Link class="nav-link active" to="/menu">
                    Menu
                  </Link>
                </li>
                <li class="nav-item me-3">
                  <Link class="nav-link active" to="/about-us">
                    About Us
                  </Link>
                </li>

                 <li class="nav-item me-3">
                  <Link class="nav-link active" to="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
