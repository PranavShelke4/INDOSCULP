import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import logo from "../assets/img/LOGO-01.png";
import product from "../assets/img/Products/product.png";
import banner from "../assets/img/Products/banner2.jpg";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
            >
              <Carousel.Item>
                <img
                  className="d-flex img-fluid"
                  src={product}
                  alt="First slide"
                />
                <Carousel.Caption className="text-light">
                  <h3>Product Name</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex img-fluid"
                  src={logo}
                  alt="Second slide"
                />
                {/* <Carousel.Caption className="text-light">
                  <h3>Product Name</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex img-fluid"
                  src={banner}
                  alt="Third slide"
                />
                {/* <Carousel.Caption className="text-light">
                  <h3>Product Name</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
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
  );
}

export default App;
