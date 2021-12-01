import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import logo from "../assets/img/image.svg";
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
                <img className="d-flex" src={product} alt="First slide" />
                <Carousel.Caption className="text-light">
                  <h3>Product Name</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex" src={logo} alt="Second slide" />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex"
                  src="https://source.unsplash.com/user/c_v_r/100x100"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="flex-row my-4 d-flex justify-content-around">
          <div>
            <Card style={{ width: "18rem" }}>
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
          <div>
            <Card style={{ width: "18rem" }}>
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
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={banner} />
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
