import React from "react";
import "../components/Navbar.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="">Contact Us</h1>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 d-flex contact-card-main ">
              <div className="contact-card d-flex flex-column gap-2 mt-5 align-items-center">
                <i class="fa fa-facebook" style={{ fontSize: "36px", color:"#E0DDAA" }}></i>
                <p  style={{ fontSize: "20px", color:"#E9E8E8" }}>
                  Admin Officer
                </p>
                <p style={{ fontSize: "20px" }}>0324-1234567</p>
              </div>
              <div className="contact-card d-flex flex-column gap-2 mt-5 align-items-center">
                <i class="fa fa-facebook" style={{ fontSize: "24px" }}></i>
                <p  style={{ fontSize: "20px", color:"#E9E8E8" }}>
                General Manager
                </p>
                <p style={{ fontSize: "20px" }}>0336-xxxxxx</p>
              </div>
              <div className="contact-card d-flex flex-column gap-2 mt-5 align-items-center">
              <i class="fa fa-envelope" style={{ fontSize: "24px" }}></i>
                <p  style={{ fontSize: "20px", color:"#E9E8E8" }}>
                Inquiries
                </p>
                <p style={{ fontSize: "20px" }}>cafe-x@gmail.com</p>
                <i class="fas fa-mobile-alt"></i> 
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 contact-form-main">
              <h5 style={{color:"black"}}>Instant Inquiry/Feedback*</h5>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
