import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutUs.css";
import { Container, Row, Col } from "react-bootstrap";

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
          <div className="inner-div px-5">
            <Row>
              <Col className="my-3 px-3 py-2 second-inner rounded" md={4}>
                <h3>Extensive Library</h3>
                <p>
                  Our collection features thousands of e-books across various
                  genres, including fiction, non-fiction, self-help, academic
                  texts, and more.
                </p>
              </Col>
              <Col
                className="my-3 px-3 py-2 second-inner rounded"
                md={{ span: 4, offset: 4 }}
              >
                {" "}
                <h3>Quality Content</h3>
                <p>
                  We partner with authors and publishers to ensure that our
                  e-books are of the highest quality, both in content and
                  format.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="my-3 px-3 py-2 second-inner rounded" md={4}>
                <h3>Ease of Access</h3>
                <p>
                  Our user-friendly platform allows you to browse, purchase, and
                  read e-books effortlessly on any device.
                </p>
              </Col>
              <Col
                className="my-3 px-3 py-2 second-inner rounded"
                md={{ span: 4, offset: 4 }}
              >
                {" "}
                <h3>EAffordable Prices</h3>
                <p>
                  We believe that great books should be accessible to everyone,
                  which is why we offer our e-books at competitive prices.
                </p>
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
