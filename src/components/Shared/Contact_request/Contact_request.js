import React, { useState } from "react";
import "./Contact_request.css";
import { send } from "@emailjs/browser";

function Contact_request() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_vhckqhu",
      "template_oc5arkb",
      toSend,
      "user_fhvj7YUkcNxB7SxVBZhQs"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
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

            <form onSubmit={onSubmit} className="contact100-form validate-form">
              <div
                className="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <span className="label-input100">Full Name:</span>
                <input
                  className="input100"
                  type="text"
                  name="from_name"
                  placeholder="Enter full name"
                  value={toSend.from_name}
                  onChange={handleChange}
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
                  name='reply_to'
                  placeholder="Enter email addess"
                  value={toSend.reply_to}
                  onChange={handleChange}
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
                  value={toSend.message}
                  onChange={handleChange}
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
