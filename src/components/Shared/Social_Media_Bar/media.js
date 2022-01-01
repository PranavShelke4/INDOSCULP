/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./media.css";
const Media = () => {
  const [arrow, setArrow] = useState(true);
  const Social = () => (
    <>
      <div
        className="social-btn flex-center"
        id="arrow"
        onClick={() => {
          setArrow(!arrow);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrows-down"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="7" y1="21" x2="7" y2="3" />
          <path d="M20 18l-3 3l-3 -3" />
          <path d="M4 18l3 3l3 -3" />
          <line x1="17" y1="21" x2="17" y2="3" />
        </svg>
      </div>
      <div className="social-btn flex-center" id="youtube">
        <a href="https://www.youtube.com/channel/UCBILQdq25WgQSXE7fPOt7-Q">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
          </svg>
        </a>
      </div>
      <div className="social-btn flex-center" id="twitter">
        <a href="https://www.youtube.com/channel/UCBILQdq25WgQSXE7fPOt7-Q">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      </div>
      <div className="social-btn flex-center" id="linkedin">
        <a href="https://www.linkedin.com/company/indosculp/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>
      <div className="social-btn flex-center" id="instagram">
        <a href="https://www.instagram.com/indosculp/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="white"
            fill="#f09433"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="0%" stopColor="#e6683c" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#cc2366" />
              </linearGradient>
            </defs>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
      </div>
      <div className="social-btn flex-center" id="facebook">
        <a href="https://www.facebook.com/indosculpgearbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="0.8"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </a>
      </div>
    </>
  );
  return (
    <div className="social-links">
      {arrow ? (
        <Social />
      ) : (
        <div
          className="arrow-btn flex-center"
          id="arrow-up"
          onClick={() => {
            setArrow(!arrow);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrows-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="17" y1="3" x2="17" y2="21" />
            <path d="M4 6l3 -3l3 3" />
            <path d="M20 6l-3 -3l-3 3" />
            <line x1="7" y1="3" x2="7" y2="21" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Media;
