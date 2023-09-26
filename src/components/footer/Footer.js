import React from "react";
import "../Navbar.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid mt-5 ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-2 col-md-2 col-sm-6 text-center">
              <img
                src="/images/logo.png"
                style={{ width: "150px", height: "150px" }}
                alt=""
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 text-center mb-5">
              <h4 className="mt-3" style={{ fontWeight: "bolder" }}>
                Make a Reservation
              </h4>
              <p className="mt-4">Your Table Reservations awaits You</p>
              <h5 className="mt-4" style={{ fontWeight: "bolder" }}>
                +92-321-1234567
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 text-center mb-5">
              <h4 className="mt-3" style={{ fontWeight: "bolder" }}>
                Opening Hours
              </h4>
              <p className="mt-4">Monday – Saturday: 12:30 – 00:00</p>
              <h5 className="mt-4" style={{ fontWeight: "bolder" }}>
                Sunday: 13:30 – 00:00
              </h5>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 text-center mb-5">
              <h4 className="mt-3" style={{ fontWeight: "bolder" }}>
                Social Media
              </h4>
              <div className="social-media-icons mt-4 d-flex justify-content-center gap-4">
                <a className="anchor-null" href="">
                  <i class="fa fa-instagram" style={{ fontSize: "24px" }}></i>
                </a>
                <a className="anchor-null" href="">
                  <i class="fa fa-facebook" style={{ fontSize: "24px" }}></i>
                </a>
                <a className="anchor-null" href="">
                  <i class="fa fa-whatsapp" style={{ fontSize: "24px" }}></i>
                </a>
                <a className="anchor-null" href="">
                  <i class="fa fa-twitter" style={{ fontSize: "24px" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2 mb-4 text-center">
          <div className="container">
            <h4 className="text-center mt-3" style={{ fontWeight: "bolder" }}>
              Our Locations
            </h4>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="text-center mt-3">Gulberg Branch</h5>
                <p className="mt-3" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <p style={{ fontSize: "12px" }}>in Market, Lahore</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="text-center mt-3">Packages Mall</h5>
                <p className="mt-3" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <p style={{ fontSize: "12px" }}> Lahore</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="text-center mt-3">Faisal Town</h5>
                <p className="mt-3" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <p style={{ fontSize: "12px" }}>Street-x, Lahore</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="text-center mt-3">Emporium Mall</h5>
                <p className="mt-3" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor, sit amet consectetur
                </p>
                <p style={{ fontSize: "12px" }}> Lahore</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <p style={{ fontSize: "14px" }}>
                &copy; {new Date().getFullYear()} Cafe-X | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
