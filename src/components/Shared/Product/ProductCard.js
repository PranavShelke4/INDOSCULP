import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import productdata from "./ProductData";

function Product() {
  return (
    <div className="product">
      <Container>
        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center">
          {productdata.map((product) => {
            var link = `/product/:` + product.id;
            return (
              <>
                <Link to={link} key={product.id}>
                  <div className="rounded" id="productCard">
                    <img
                      className="productImg"
                      alt="product_image"
                      src={product.themnel}
                    />
                    <div className="p-2">
                      <h3 id="product__name">{product.productname}</h3>
                      <p>{product.productinfo}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
         
        </div>

      </Container>
    </div>
  );
}

export default Product;
