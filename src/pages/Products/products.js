import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import productdata from "../../components/Shared/Product/ProductData";

function Products() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    loadProduct(id);
  }, []);

  const loadProduct = (i) => {
    let pro = productdata.find((x) => x.id === i.substring(1));

    setProduct(pro);
    console.log(pro + "xsdasy");
  };

  return (
    <div className="row" id="ps">
      {product && (
        <>
          <div className="col-lg-6 col-md-6 col-sm-12" id="productImg">
            <img className="img" src={product.img} alt="PS25" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" id="productInfo">
            <h1 id="title">
              <b>{product.productname}</b>
            </h1>
            <h3>{product.subtitle}</h3>
            <p className="productInfo">{product.dis}</p>

            <a href="/">
              <button id="buy_btn">
                <span>Buy Now </span>
              </button>
            </a>
            <a href="/">
              <button id="contact_btn">
                <span>Contact now </span>
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" id="benefits_box">
            <h1>
              <b>Key benefits</b>
            </h1>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" id="options_box">
            <h1>
              <b>Main options</b>
            </h1>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
            <p id="benefits">- High torque density</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
