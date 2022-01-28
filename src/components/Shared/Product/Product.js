import React from "react";
import { Container } from "react-bootstrap";
import productimg from "../../../assets/img/Products/product.png";
import "./Product.css";



const productdata = [
  {
    id: "1",
    productname: "PS25 Foot Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },
  {
    id: "2",
    productname: "PS25 Flange Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },
  {
    id: "3",
    productname: "PS30 Foot Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },
  {
    id: "4",
    productname: "PS30 Flange Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },
  {
    id: "5",
    productname: "PS35 Foot Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },{
    id: "6",
    productname: "PS35 Flange Type",
    productinfo:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    productimg: require("../../../assets/img/Products/product.png"),
  },
];

function Product() {
  return (
    <div className="product">
      <Container>
        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center">

          {productdata.map((product) => {
            return (
              <a href="/PS25" key={product.id}>
                <div className="rounded" id="productCard">
                  <img className="productImg" alt="product_image" src={productimg} />
                  <div className="p-2">
                    <h3 id="product__name">{product.productname}</h3>
                    <p>{product.productinfo}</p>
                  </div>
                </div>
              </a>
            );
          })}

          {/* {productdata.map(({ id, productname1, productinfo1 }) => (
                <div className="p-2">
                  <h3 key={id}>{productname1}</h3>
                  <p>{productinfo1}</p>
                </div>
              ))} */}
         
        </div>

      </Container>
    </div>
  );
}

export default Product;
