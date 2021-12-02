import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../../assets/icon/facebook.svg";
import youtube from "../../../assets/icon/youtube.svg";
import instagram from "../../../assets/icon/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="pt-5 pb-5 footer-cta">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Lorem ipsum, sw 54321, Sit amet,</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9857899965</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@xyz.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 footer-content">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>INDOSCULP</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href=".">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href=".">
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a href=".">
                    <img src={instagram} alt="instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href=".">Home</a>
                  </li>
                  <li>
                    <a href=".">about</a>
                  </li>
                  <li>
                    <a href=".">services</a>
                  </li>
                  <li>
                    <a href=".">portfolio</a>
                  </li>
                  <li>
                    <a href=".">Contact</a>
                  </li>
                  <li>
                    <a href=".">About us</a>
                  </li>
                  <li>
                    <a href=".">Our Services</a>
                  </li>
                  <li>
                    <a href=".">Expert Team</a>
                  </li>
                  <li>
                    <a href=".">Contact us</a>
                  </li>
                  <li>
                    <a href=".">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="text-center col-xl-6 col-lg-6 text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2020, All Right Reserved{" "}
                  <a href="https://www.indosculp.com/">Indosculp</a>
                </p>
              </div>
            </div>
            <div className="text-right col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href=".">Home</a>
                  </li>
                  <li>
                    <a href=".">Terms</a>
                  </li>
                  <li>
                    <a href=".">Privacy</a>
                  </li>
                  <li>
                    <a href=".">Policy</a>
                  </li>
                  <li>
                    <a href=".">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
