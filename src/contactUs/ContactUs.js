import React from "react";
import "../components/Navbar.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          <div className="row justify-content-center align-items-center mt-5">
            <div className="col-lg-6">
              <form>
                <h4 className="mb-5 text-center">Contact Us</h4>
                <div className="row g-5">
                  <div className="col-md-12 col-sm-12">
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control custom-input"
                      id="your-name"
                      name="your-name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control custom-input"
                      id="your-email"
                      name="your-email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      placeholder="Subject"
                      type="text"
                      className="form-control custom-input"
                      id="your-subject"
                      name="your-subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="Message"
                      className="form-control custom-textarea"
                      id="your-message"
                      name="your-message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 mb-5">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-dark w-100 fw-bold"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
