import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const AboutUs = () => {
  return (
    <Container className="my-5">
      {/* Replacing Jumbotron with a div and custom styling */}
      <div
        style={{
          backgroundColor: "#17a2b8",
          color: "white",
          padding: "50px 0",
          textAlign: "center",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      >
        <h1>Welcome to Our Library</h1>
        <p>Your one-stop place for all kinds of knowledge and resources.</p>
      </div>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Header>
              <h4>Our Mission</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Our mission is to promote learning and development by providing
                a wide range of books, digital resources, and study areas for
                the community. We aim to be the hub of knowledge, fostering
                reading culture and academic growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Header>
              <h4>Our Vision</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                We envision a community where everyone has access to the
                information they need to succeed academically and
                professionally. Our library aspires to be a center for personal
                growth, lifelong learning, and a place for knowledge sharing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Header>
              <h4>Our Services</h4>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>Extensive collection of books and e-books</li>
                <li>Digital resources and databases</li>
                <li>Study rooms and event spaces</li>
                <li>Community events, workshops, and seminars</li>
                <li>Online book reservations and checkouts</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Container className="my-5">
          <h2 className="text-center mb-4">What Others Say</h2>
          <Carousel indicators={false} controls={true} interval={3000}>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h5>Sailesh Magar</h5>
                <p className="w-75 mx-auto">
                  This library has been a great resource for me. The staff is
                  helpful, and the selection of books is amazing!
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h5>Ishwori Karki</h5>
                <p className="w-75 mx-auto">
                  I love the peaceful environment and the wide variety of books.
                  It’s my go-to place for studying and relaxing.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <Link to="/time#contact">Contact Us</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
