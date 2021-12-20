import React from "react";
import "./footer.css";

import logo from "../../../assets/img/Logo1.svg";
import facebook from "../../../assets/icon/facebook.svg";
import youtube from "../../../assets/icon/youtube.svg";
import instagram from "../../../assets/icon/instagram.svg";

const Footer = () => {
  return (
    // <footer className="footer-section">
    //   <div className="container">
    //     <div className="pt-5 pb-5 footer-cta">
    //       <div className="row">
    //         <div className="col-xl-4 col-md-4 mb-30">
    //           <div className="single-cta">
    //             <i className="fas fa-map-marker-alt"></i>
    //             <div className="cta-text">
    //               <h4>Find us</h4>
    //               <span>1010 Lorem ipsum, sw 54321, Sit amet,</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-md-4 mb-30">
    //           <div className="single-cta">
    //             <i className="fas fa-phone"></i>
    //             <div className="cta-text">
    //               <h4>Call us</h4>
    //               <span>9857899965</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-md-4 mb-30">
    //           <div className="single-cta">
    //             <i className="far fa-envelope-open"></i>
    //             <div className="cta-text">
    //               <h4>Mail us</h4>
    //               <span>mail@xyz.com</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pt-5 pb-5 footer-content">
    //       <div className="row">
    //         <div className="col-xl-4 col-lg-4 mb-50">
    //           <div className="footer-widget">
    //             <div className="footer-widget-heading">
    //               <h3>INDOSCULP</h3>
    //             </div>
    //             <div className="footer-text">
    //               <p>
    //                 Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
    //                 sed do eiusmod tempor incididuntut consec tetur adipisicing
    //                 elit,Lorem ipsum dolor sit amet.
    //               </p>
    //             </div>
    //             <div className="footer-social-icon">
    //               <span>Follow us</span>
    //               <a href=".">
    //                 <img src={facebook} alt="facebook" />
    //               </a>
    //               <a href=".">
    //                 <img src={youtube} alt="youtube" />
    //               </a>
    //               <a href=".">
    //                 <img src={instagram} alt="instagram" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
    //           <div className="footer-widget">
    //             <div className="footer-widget-heading">
    //               <h3>Useful Links</h3>
    //             </div>
    //             <ul>
    //               <li>
    //                 <a href=".">Home</a>
    //               </li>
    //               <li>
    //                 <a href=".">about</a>
    //               </li>
    //               <li>
    //                 <a href=".">services</a>
    //               </li>
    //               <li>
    //                 <a href=".">portfolio</a>
    //               </li>
    //               <li>
    //                 <a href=".">Contact</a>
    //               </li>
    //               <li>
    //                 <a href=".">About us</a>
    //               </li>
    //               <li>
    //                 <a href=".">Our Services</a>
    //               </li>
    //               <li>
    //                 <a href=".">Expert Team</a>
    //               </li>
    //               <li>
    //                 <a href=".">Contact us</a>
    //               </li>
    //               <li>
    //                 <a href=".">Latest News</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
    //           <div className="footer-widget">
    //             <div className="footer-widget-heading">
    //               <h3>Subscribe</h3>
    //             </div>
    //             <div className="footer-text mb-25">
    //               <p>
    //                 Don’t miss to subscribe to our new feeds, kindly fill the
    //                 form below.
    //               </p>
    //             </div>
    //             <div className="subscribe-form">
    //               <form action="#">
    //                 <input type="text" placeholder="Email Address" />
    //                 <button>
    //                   <i className="fab fa-telegram-plane"></i>
    //                 </button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="copyright-area">
    //     <div className="container">
    //       <div className="row">
    //         <div className="text-center col-xl-6 col-lg-6 text-lg-left">
    //           <div className="copyright-text">
    //             <p>
    //               Copyright &copy; 2020, All Right Reserved{" "}
    //               <a href="https://www.indosculp.com/">Indosculp</a>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="text-right col-xl-6 col-lg-6 d-none d-lg-block">
    //           <div className="footer-menu">
    //             <ul>
    //               <li>
    //                 <a href=".">Home</a>
    //               </li>
    //               <li>
    //                 <a href=".">Terms</a>
    //               </li>
    //               <li>
    //                 <a href=".">Privacy</a>
    //               </li>
    //               <li>
    //                 <a href=".">Policy</a>
    //               </li>
    //               <li>
    //                 <a href=".">Contact</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <>
      <footer>
        <div className="about col-xl-4 col-md-12 col-sm-12">
            <img alt="" className="logo" src={logo} />
            <span><b>Indosculp</b></span>

            <p>As per the demands of the clients, we provide our range of engineering components in various specifications. 
              Our packaging experts effectively package these items effectively on the basis of their requirements. 
              Due to these reasons, we have achieved a large customer base in India.</p>
            
            <a href="."><img className="social" src={facebook} alt="facebook" /></a>
            <a href="."><img className="social" src={youtube} alt="youtube" /></a>
            <a href="."><img className="social" src={instagram} alt="instagram" /></a>
      
            <p className="Copyright">
              Copyright &copy; 2020, All Right Reserved{" "}
              <a href="https://www.indosculp.com/">Indosculp</a>
            </p>
        </div>


        <div className="sec_div col-xl-8 col-md-12 col-sm-12" >
            <div className="Our_Products col-xl-4 col-md-12 col-sm-12">
            <h4>Our Products</h4>
              <ul>
                <li>Three Wheeler Gears</li>
                <li>Electical Motor Shaft</li>
                <li>API COUPLINGS</li>
                <li>Compressor Block Wheeler Gears</li>
              </ul>
            </div>


            <div className="Contact_Us col-xl-4 col-md-12 col-sm-12">
              <h4>Contact Us</h4>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>MIDC Area-Vallabhnagar,Ahmednagar 400100, Maharastra.<br/>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>Indosculp@gmail.com <br/>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>0123556677<br/>
              

            </div>


            <div className="Quick_Links col-xl-4 col-md-12 col-sm-12">
              <h4>Quick Links</h4>
              <ul>
                <li><a className="pages" href="/">About</a></li>
                <li><a className="pages" href="/">Companies</a> </li>
                <li><a className="pages" href="/">Industries</a> </li>
                <li><a className="pages" href="/">Product</a></li>
              </ul>
            </div>


        </div>

      </footer>



    </>

  );
};

export default Footer;
