// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import productdata from "../../components/Shared/Product/ProductData";
import { Container } from "react-bootstrap";

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

          <div className="col-lg-6 col-md-6 col-sm-12">
            <table className="col-lg-6 col-sm-12 col-md-6">
              <tr>
                <th>Torque range</th>
                <td>{product.TorqueRange}</td>
              </tr>
              <tr>
                <th>Key benefits</th>
                <td>
                  {product.keyBenefits[0]}
                  <br />
                  {product.keyBenefits[1]}
                  <br />
                  {product.keyBenefits[2]}
                  <br />
                  {product.keyBenefits[3]}
                </td>
              </tr>
              <tr>
                <th>Gear ratios</th>
                <td>{product.GearRatios}</td>
              </tr>
              <tr>
                <th>Application</th>
                <td>
                  {" "}
                  {product.Application[0]}
                  <br />
                  {product.Application[1]}
                  <br />
                  {product.Application[2]}
                  <br />
                  {product.Application[3]}
                  <br />
                  {product.Application[4]}
                  <br />
                  {product.Application[5]}
                  <br />
                  {product.Application[6]}
                  <br />
                  {product.Application[7]}
                  <br />
                  {product.Application[8]}
                  <br />{" "}
                </td>
              </tr>
            </table>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <table className="col-lg-6 col-sm-12 col-md-6">
              <tr>
                <th>Transmissible Mechanical Power</th>
                <td>{product.MechanicalPower}</td>
              </tr>
              <tr>
                <th>Output</th>
                <td>
                  {product.Output[0]}
                  <br />
                  {product.Output[1]}
                  <br />
                  {product.Output[2]}{" "}
                </td>
              </tr>
              <tr>
                <th>Main options</th>
                <td>
                  {product.mainOptions[0]}
                  <br />
                  {product.mainOptions[1]}
                  <br />
                  {product.mainOptions[2]}
                  <br />
                  {product.mainOptions[3]}
                  <br />
                  {product.mainOptions[4]}
                  <br />
                  {product.mainOptions[5]}
                  <br />
                  {product.mainOptions[6]}
                </td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
