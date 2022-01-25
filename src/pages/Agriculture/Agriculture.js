import React from "react";
import { Container } from "react-bootstrap";
import product from "../../assets/img/Products/product.png";
import "./Agriculture.css";

const Agriculture = () => {
  return (
    <div className="agriculture">
      <div id="page_info">
        <div className="bg">
          <div className="title">
            <b>Agriculture</b>
          </div>
        </div>
      </div>
      <Container>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img className="img1" src={product} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 title1">
            <h1 className="product___Title">
              <b>Title</b>
            </h1>
            <p className="product_info">
              We believe passionately in the power of ideas to change attitudes,
              lives and ultimately, the world.
              <br />
              <br />
              So we’re building here a clearinghouse that offers free knowledge
              and inspiration from the world’s most inspired thinkers, and also
              a community of curious souls to engage with ideas and each other.
            </p>
          </div>
        </div>
      </Container>

      <div className="row box">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h1 className="product___Title">
            <b>Title</b>
          </h1>
          <p className="product_info">
            {" "}
            Incepted in the year 2007, Indosculp Auto comp Pvt. Ltd is one of
            the leading manufacturers and suppliers of an assortment of various
            engineering components such as finish Auto-gear components,
            Transmission Gears, API couplings, Electric motor shafts, Worm
            gears, cluster gears, connecting shafts.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 box2">
          <p className="product_info">
            {" "}
            Incepted in the year 2007, Indosculp Auto comp Pvt. Ltd is one of
            the leading manufacturers and suppliers of an assortment of various
            engineering components such as finish Auto-gear components,
            Transmission Gears, API couplings, Electric motor shafts, Worm
            gears, cluster gears, connecting shafts.
          </p>
        </div>
      </div>

      <Container>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6 box1">
            <h1 className="product___Title">
              <b>Title</b>
            </h1>
            <p className="product_info">
              We believe passionately in the power of ideas to change attitudes,
              lives and ultimately, the world.
              <br />
              <br />
              So we’re building here a clearinghouse that offers free knowledge
              and inspiration from the world’s most inspired thinkers, and also
              a community of curious souls to engage with ideas and each other.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img className="img" src={product} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Agriculture;
