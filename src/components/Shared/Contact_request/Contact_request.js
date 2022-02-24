import React from "react";
import "./Contact_request.css";

function Contact_request() {
  return (
    <>
      <div className="Contact_request">
        <div className="container-contact100">
          <div className="wrap-contact100">
            <div className="contact100-form-title">
              <span className="contact100-form-title-1">Contact Us</span>

              <span className="contact100-form-title-2">
                Feel free to drop us a line below!
              </span>
            </div>

            <form action="https://formsubmit.co/pranavshelke4@gmail.com" method="POST" className="contact100-form validate-form">
              
            <input type="hidden" name="_next" value="https://indosculp-dev.netlify.app/info"></input>

            <input type="hidden" name="_captcha" value="false"/>

            <input type="hidden" name="_template" value="table"></input>
              
              <div
                className="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <span className="label-input100">Full Name:</span>
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <span className="label-input100">Email:</span>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Enter email addess"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Phone is required"
              >
                <span className="label-input100">Phone:</span>
                <input
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Message is required"
              >
                <span className="label-input100">Message:</span>
                <textarea
                  className="input100"
                  name="message"
                  placeholder="Your Comment..."
                ></textarea>
                <span className="focus-input100"></span>
              </div>

              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_request;
