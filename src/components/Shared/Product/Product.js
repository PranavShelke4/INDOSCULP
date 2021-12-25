import React from 'react'
import { Container } from "react-bootstrap";
import product from "../../../assets/img/Products/product.png";
import './Product.css'

function Product() {
    return (
        <div className='product'>
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

        <div className='row' id='products'>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6" id='productCard'>
                  <a href='/PS25'>
                    <img className='productImg' src={product} alt='product1'/>
                    <h3>PS25 Foot Type</h3>
                    <p>Some quick example text to build on the card title and make up
                      the bulk of the card's content.</p>
                  </a>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6" id='productCard'>
                  <a href='/'>
                    <img className='productImg' src={product} alt='product1'/>
                    <h3>PS25 Flange Type</h3>
                    <p>Some quick example text to build on the card title and make up
                      the bulk of the card's content.</p>
                  </a>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6" id='productCard'>
                  <a href='/'>
                    <img className='productImg' src={product} alt='product1'/>
                    <h3>PS30/35 Foot Type</h3>
                    <p>Some quick example text to build on the card title and make up
                      the bulk of the card's content.</p>
                  </a>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6" id='productCard'>
                  <a href='/'>
                    <img className='productImg' src={product} alt='product1'/>
                    <h3>PS30/35 Flange Type</h3>
                    <p>Some quick example text to build on the card title and make up
                      the bulk of the card's content.</p>
                  </a>
              </div>

        </div>

        </Container>
        </div>
    )
}

export default Product
