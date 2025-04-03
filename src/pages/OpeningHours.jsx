import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OpeningHours = () => {
  return (
    <Container className="py-3 py-md-5 ">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center text-success">Our Opening Hours</h2>
          <Card className="shadow-sm">
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Opening Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <h3 id="contact">Contact Us</h3>
          <Card className="shadow-sm">
            <Card.Body>
              <ul className="list-unstyled">
                <li>
                  <strong>Phone:</strong> +1 (234) 567-890
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <strong>Address:</strong> 123 Main Street, City, Country
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h3 className="mt-3 mt-md-0">Location</h3>
          <Card className="shadow-sm">
            <Card.Body>
              <div style={{ height: "250px", backgroundColor: "#e1e1e1" }}>
                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13252.26538313227!2d151.206161!3d-33.862181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af90905962cb%3A0xa918cc35a9ad4ed1!2sVictorian%20Institute%20of%20Technology%20(VIT)!5e0!3m2!1sen!2sau!4v1743248434700!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h4>Extra Information</h4>
              <p>
                For any inquiries, feel free to reach out via email or call us.
                We're happy to help you with any questions regarding our
                services, products, or availability.
              </p>
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OpeningHours;
