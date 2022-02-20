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
            <br />

            {/* <a href="tel:{product.contactNo}">
              <button id="contact_btn">
                <span>Contact now </span>
              </button>
            </a> */}
            <a href={product.catalogueLink} download>
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
          <div>
            <input type="checkbox" id="question1" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question1" class="question">
              Torque range
            </label>
            <div class="answers">
              <p className="ans">
                {product.TorqueRange}{" "}
              </p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question2" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question2" class="question">
            Gear ratios
            </label>
            <div class="answers">
              <p className="ans">
              {product.GearRatios}{" "}
              </p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question3" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question3" class="question">
            Transmissible Mechanical Power
            </label>
            <div class="answers">
              <p className="ans">
               {product.MechanicalPower}{" "}
              </p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question4" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question4" class="question">
            Output
            </label>
            <div class="answers">
              <p className="ans">
                {product.Output[0]}<br/>
                {product.Output[1]}<br/>
                {product.Output[2]}{" "}
              </p>
            </div>
          </div>
          <div>
            <input type="checkbox" id="question5" name="q" class="questions" />
            <div class="plus">+</div>
            <label for="question5" class="question">
            Application
            </label>
            <div class="answers">
              <p className="ans">
                {product.Application[0]}<br/>
                {product.Application[1]}<br/>
                {product.Application[2]}<br/>
                {product.Application[3]}<br/>
                {product.Application[4]}<br/>
                {product.Application[5]}<br/>
                {product.Application[6]}<br/>
                {product.Application[7]}<br/>
                {product.Application[8]}<br/>{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
