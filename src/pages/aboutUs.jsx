import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutUs.css";
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className="main ">
      <div className="first-div bg-black text-white py-4">
        <Container>
          <h1 className="">Our Mission</h1>
          <p className=" py-3">
            At Pustak Ghar, our mission is to make reading accessible and
            enjoyable for everyone. We believe in the power of books to inspire,
            educate, and entertain, and we strive to offer a diverse collection
            of e-books that cater to readers of all ages and interests.
          </p>
        </Container>
      </div>
      <div className="second-div py-4">
        <Container>
          <h1>What We Offer</h1>
          <div className="inner-div m-4 px-5">
          <Row className="g-2">
          <Col lg={3} md={4} sm={6} className="offer-card">
            <div className="m-2">
              <Card className="h-100 bg-secondary text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="offer-card">
            <div className="m-2">
              <Card className="h-100 bg-secondary text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="offer-card">
            <div className="m-2">
              <Card className="h-100 bg-secondary text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} className="offer-card">
            <div className="m-2">
              <Card className="h-100 bg-secondary text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
          </div>
        </Container>
      </div>
      <div className="third-div  bg-black text-white py-4">
        <Container>
          <h1 className="">Our Values</h1>
          <p className=" py-3">
            We prioritize your reading experience with excellent customer
            service, continuous platform innovation, and fostering a community
            of book lovers.
          </p>
        </Container>
      </div>
    </div>
  );
};
export default AboutUs;
