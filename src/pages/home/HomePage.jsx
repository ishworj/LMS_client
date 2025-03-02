import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Carousel className="mt-5">
        <Carousel.Item interval={3000}>
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column p-5 w-25">
              <h3 className="text-primary">Make it simple</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Discover More</Button>
            </div>
            <div className="w-75">
              <img
                className="d-block w-100"
                style={{ objectFit: "cover", maxHeight: "400px" }}
                src="https://prh.imgix.net/articles/secondarypicks20.jpg"
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item >
          <div className="d-flex align-items-center">
            <div className="w-75">
              <img
                className="d-block w-100"
                style={{ objectFit: "cover", maxHeight: "400px" }}
                src="https://prh.imgix.net/articles/secondarypicks20.jpg"
                alt="Second slide"
              />
            </div>
            <div className="d-flex flex-column p-5 w-25">
              <h3 className="text-primary">Make it simple</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Discover More</Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomePage;
