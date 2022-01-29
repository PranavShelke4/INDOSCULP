/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";

import logo from "../../../assets/icon/LOGO_new.png";
// import facebook from "../../../assets/icon/facebook.svg";
// import youtube from "../../../assets/icon/youtube.svg";
// import instagram from "../../../assets/icon/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="about col-lg-4 col-md-12 col-sm-12">
          <img alt="" className="logo" src={logo} />

          <p className="d-flex flex-row py-0 my-1 info-p">
            Incepted in the year 2007, Indosculp Auto comp Pvt. Ltd is one of
            the leading manufacturers and suppliers of an assortment of various
            engineering components such as finish Auto-gear components,
            Transmission Gears, API couplings, Electric motor shafts, Worm
            gears, cluster gears, connecting shafts.
          </p>

          <p className="Copyright ">
            Copyright &copy; 2020, All Right Reserved{" "}
            <a className="Copyright" href="https://www.indosculp.com/">
              Indosculp
            </a>
          </p>
        </div>

        <div className="sec_div col-lg-8 col-md-12 col-sm-12">
          <div className="Our_Products col-lg-4 col-md-12 col-sm-12">
            <div>
              <h4 className="cat">Our Products</h4>
            </div>
            <ul>
              <li>
                <a className="pages" href="/PS25">
                  PS25 Foot Type
                </a>
              </li>
              <li>
                <a className="pages" href="/PS25">
                  PS25 Flange Type
                </a>
              </li>
              <li>
                <a className="pages" href="/PS25">
                  PS30 Foot Type
                </a>
              </li>
              <li>
                <a className="pages" href="/PS25">
                  PS30 Flange Type
                </a>
              </li>
              <li>
                <a className="pages" href="/PS25">
                  PS35 Foot Type
                </a>
              </li>
              <li>
                <a className="pages" href="/PS25">
                  PS35 Flange Type
                </a>
              </li>
            </ul>
          </div>

          <div className="Contact_Us col-lg-4 col-md-12 col-sm-12">
            <h4 className="cat">Contact Us</h4>
            <div className="contact_para">
              <p className="d-flex flex-row py-0 my-1">
                {/* <a href=""></a> */}

                <a
                  className="d-flex flex-row py-0 my-1 pages"
                  href="https://goo.gl/maps/qtaBphAdswoRxAHj7"
                  style={{ padding: 0, margin: 0 }}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin mx-1"
                    width="12"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  A-67, MIDC - 414111 <br /> Ahmednagar (MH), INDIA
                </a>
              </p>
              {/* <br /> */}
              <p className="d-flex flex-row py-0 my-1">
                <a className="pages" href="mailto:info@indosculp.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail mx-1"
                    width="10"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#ffffff"
                    fill="#202124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="#202124" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  info@indosculp.com
                </a>
              </p>
              {/* <br /> */}
              <p className="d-flex flex-row py-0 my-1">
                <a className="pages" href="tel:+918888814506">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone mx-1"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  +91 88888 14506
                </a>
              </p>
            </div>
          </div>

          <div className="Quick_Links col-lg-4 col-md-12 col-sm-12">
            <h4 className="cat">Quick Links</h4>
            <ul>
              <li>
                <a className="pages" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="pages" href="/info">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="pages" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="pages" href="/">
                  Peoples
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
