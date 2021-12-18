import React from 'react'
import { Card, Button, Container } from "react-bootstrap";
import product from "../../../assets/img/Products/product.png";

function Product() {
    return (
        <div>
        <Container>
        <div className="container my-4 card-deck row">
          <div className="col-xs-12 col-sm-6 col-md-4 ">
            <Card>
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Card>
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Card>
              <Card.Img variant="top" src={product} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        </Container>
        </div>
    )
}

export default Product
