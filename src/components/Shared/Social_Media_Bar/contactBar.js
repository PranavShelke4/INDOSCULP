import React from "react";
import "./contactBar.css";
const ContactBar = () => {
  return (
    <div class="mail-links">
      <div class="mail-btn flex-center" id="mail">
        <samp>CONTACT US</samp>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-border-vertical"
          width="30"
          height="55"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
        <svg
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="36"
          height="36"
        >
          <path d="M 44.287109 114 L 256 311.81641 L 467.68359 114 L 44.287109 114 z M 478 123.72852 L 339.47656 253.17969 L 478 387.97461 L 478 123.72852 z M 34 123.75781 L 34 388.30859 L 175.03125 255.53125 L 34 123.75781 z M 329.22852 262.85547 L 260.7793 326.72656 A 7.018 7.018 0 0 1 251.2207 326.76562 L 185.28711 265.21094 L 44.351562 398 L 468.01367 398 L 329.22852 262.85547 z" />
        </svg>
      </div>
    </div>
  );
};

export default ContactBar;
