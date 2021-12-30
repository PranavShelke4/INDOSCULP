/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./media.css";
const Media = () => {
  const [arrow, setArrow] = useState(true);
  const Social = () => (
    <>
      <div
        class="social-btn flex-center"
        id="arrow"
        onClick={() => {
          setArrow(!arrow);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-arrows-down"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="7" y1="21" x2="7" y2="3" />
          <path d="M20 18l-3 3l-3 -3" />
          <path d="M4 18l3 3l3 -3" />
          <line x1="17" y1="21" x2="17" y2="3" />
        </svg>
          
      </div>
      <div class="social-btn flex-center" id="youtube">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
        </svg>
      </div>
      <div class="social-btn flex-center" id="twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </div>
      <div class="social-btn flex-center" id="linkedin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </div>
      <div class="social-btn flex-center" id="instagram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="40"
          height="40"
        >
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8ma"
            cx="19.38"
            cy="42.035"
            r="44.899"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fd5" />
            <stop offset=".328" stop-color="#ff543f" />
            <stop offset=".348" stop-color="#fc5245" />
            <stop offset=".504" stop-color="#e64771" />
            <stop offset=".643" stop-color="#d53e91" />
            <stop offset=".761" stop-color="#cc39a4" />
            <stop offset=".841" stop-color="#c837ab" />
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          />
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8mb"
            cx="11.786"
            cy="5.54"
            r="29.813"
            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4168c9" />
            <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          />
          <path
            fill="#fff"
            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
          />
          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
          <path
            fill="#fff"
            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
          />
        </svg>
      </div>
      <div class="social-btn flex-center" id="facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-facebook"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="0.8"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      </div>
    </>
  );
  return (
    <div class="social-links">
      {arrow ? (
        <Social />
      ) : (
        <div
          class="arrow-btn flex-center"
          id="arrow-up"
          onClick={() => {
            setArrow(!arrow);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrows-up"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
