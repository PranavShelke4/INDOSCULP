/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Our_location.css";

function Our_location() {
  return (
    <div className="Our_Location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.49725013188!2d74.6924085!3d19.146035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49099ce8544b0925!2sIndosculp%20Autocomp%20Private%20Limited!5e0!3m2!1sen!2sin!4v1645805675863!5m2!1sen!2sin"
        width= "100%"
        height="600"
        allowfullscreen=""
        loading="lazy"
      />
    </div>
  );
}

export default Our_location;
