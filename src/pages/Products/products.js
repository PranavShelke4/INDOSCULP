import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import productdata from "../../components/Shared/Product/ProductData";

function Products() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    loadProduct(id);
  }, [id]);

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

            {/* <a href={product.buyLink}>
              <button id="buy_btn">
                <span>Buy Now </span>
              </button>
            </a> */}

              <button id="buy_btn">
                <span>Buy Now </span>
              </button>
           
            <a href="tel:{product.contactNo}">
              <button id="contact_btn">
                <span>Contact now </span>
              </button>
            </a>
            <a href={product.catalogueLink}>
              <button id="catalogue_btn">
                <span>Download Catalogue</span>
              </button>
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" id="benefits_box">
            <h1>
              <b>Key benefits</b>
            </h1>
            <p id="benefits">{product.keyBenefits[0]}</p>
            <p id="benefits">{product.keyBenefits[1]}</p>
            <p id="benefits">{product.keyBenefits[2]}</p>
            <p id="benefits">{product.keyBenefits[3]}</p>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6" id="options_box">
            <h1>
              <b>Main options</b>
            </h1>
            <p id="benefits">{product.mainOptions[0]}</p>
            <p id="benefits">{product.mainOptions[1]}</p>
            <p id="benefits">{product.mainOptions[2]}</p>
            <p id="benefits">{product.mainOptions[3]}</p>
            <p id="benefits">{product.mainOptions[4]}</p>
            <p id="benefits">{product.mainOptions[5]}</p>
            <p id="benefits">{product.mainOptions[6]}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
