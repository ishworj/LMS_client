import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container className="bg-black text-light text-center py-3">
        <Row>
          <Col>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>New Books</li>
              <li>Search Books</li>
              <li>Featured Books</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </Col>

          <Col>
            <h5>find us here </h5>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0663419029984!2d151.20139719678957!3d-33.86218110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af90905962cb%3A0xa918cc35a9ad4ed1!2sVictorian%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sau!4v1740827106992!5m2!1sen!2sau"
              ></iframe>
            </div>
          </Col>
        </Row>

        <p className="mt-3">
          &copy; 2025 All rights reserved! Made by{" "}
          <a
            href="https://github.com/Ishwor-Karki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ishwor Karki
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
