import React from "react";
import { Container } from "react-bootstrap";
import product from "../../../assets/img/Products/product.png";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <Container>
        {/* <div className="container my-4 card-deck row">
        
          <div className="col-xs-12 col-sm-6 col-md-4 cards">
             <a href='/'>
              <Card>
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4">
          <a href='/'>
              <Card>
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
          </div>
          
          <div className="col-xs-12 col-sm-6 col-md-4">
            <a href='/'>
              <Card>
                  <Card.Img variant="top" src={product} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
          </div>
        </div> */}
        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center">
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS25 Foot Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS25 Flange Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </p>
              </div>
            </div>
          </a>
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS30 Foot Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS30 Flange Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulkof the card.
                </p>
              </div>
            </div>
          </a>
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS35 Foot Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </a>
          <a href="/PS25">
            <div className="rounded" id="productCard">
              <img className="productImg" src={product} alt="product1" />
              <div className="p-2">
                <h3>PS35 Flange Type</h3>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* <div className="row" id="products">
          <div
            href="/PS25"
            className="col-sm-12 col-md-4 col-lg-6"
            id="productCard"
          >
            <img className="productImg" src={product} alt="product1" />
            <h3>PS25 Foot Type</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-6" id="productCard">
            <a href="/">
              <img className="productImg" src={product} alt="product1" />
              <h3>PS25 Flange Type</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </a>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-6" id="productCard">
            <a href="/">
              <img className="productImg" src={product} alt="product1" />
              <h3>PS30 Foot Type</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </a>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-6" id="productCard">
            <a href="/">
              <img className="productImg" src={product} alt="product1" />
              <h3>PS30 Flange Type</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </a>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-6" id="productCard">
            <a href="/">
              <img className="productImg" src={product} alt="product1" />
              <h3>PS35 Foot Type</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </a>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-6" id="productCard">
            <a href="/">
              <img className="productImg" src={product} alt="product1" />
              <h3>PS35 Flange Type</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </a>
          </div>
        </div> */}
      </Container>
    </div>
  );
}

export default Product;
