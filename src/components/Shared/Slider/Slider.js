import React, { useState } from 'react'
import { Carousel, Row, Col } from "react-bootstrap";
import logo from "../../../assets/img/LOGO-01.svg";
import product from "../../../assets/img/Products/product.png";
import banner from "../../../assets/img/Products/banner2.jpg";
import "./Slider.css"


function Slideshow() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div>
        <Row>
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" >


              <Carousel.Item>
                <img className="d-flex img-fluid" id="imgs" src={product} alt="First slide" />
                <Carousel.Caption  className="text-light">
                  <div id='info'>
                    <h3>Product Name</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-flex img-fluid" id="imgs"  src={logo} alt="Second slide" />
                <Carousel.Caption className="text-light">
                  <div id='info'>
                      <h3>Product Name</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                      </p>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-flex img-fluid" id="imgs" src={banner} alt="Third slide" />
                <Carousel.Caption className="text-light">
                  <div id='info'>
                      <h3>Product Name</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                      </p>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
        </div>
    )
}

export default Slideshow
