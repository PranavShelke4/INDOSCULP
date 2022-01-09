import React from "react";
import { Container } from "react-bootstrap";
import product from "../../../assets/img/Products/product.png";
import "./Product.css";

const productdata = [
  { 
    id1: "1", 
    productname1: "PS25 Foot Type", 
    productinfo1: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  { 
    id2: "2", 
    productname2: "PS25 Flange Type", 
    productinfo2: "Some quick example text to build on the card title and make up the bulk of the card's content." 
  },
];


function Product() {
  return (
    <div className="product">
      <Container>
      
        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center">

        <a href="/PS25"><div className="rounded" id="productCard">
        <img className="productImg" src={product} alt="product1" />
        {productdata.map(({ id, productname1, productinfo1 }) => (
          <div className="p-2">
            <h3 key={id}>{productname1}</h3>
            <p>{productinfo1}</p>
          </div>
        ))}
      </div></a>

      <a href="/PS25"><div className="rounded" id="productCard">
        <img className="productImg" src={product} alt="product1" />
        {productdata.map(({ id2, productname2, productinfo2 }) => (
          <div className="p-2">
            <h3 key={id2}>{productname2}</h3>
            <p>{productinfo2}</p>
          </div>
        ))}
      </div></a>

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
      </Container>
    </div>
  );
}

export default Product;
