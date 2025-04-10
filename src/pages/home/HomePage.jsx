import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import NewArrivals from "./NewArrivals";

const HomePage = () => {
  const bookStore = useSelector((state) => state.books);
  const [searchedBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    setSearchBooks(bookStore.books);
  }, [bookStore.books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchBooks(
      bookStore.books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <>
      <Container>
        <Row className="m-5">
          <Col md={6} className="mb-2 mb-sm-0">
            <h3 className="fs-1 fs-sm-2 fs-md-3 fs-lg-4">
              Unleash the Power of Knowledge: <br /> Explore Our Extensive
              Digital <br />
              Library
            </h3>

            <p>
              Unlock the doors to a world of endless possibilities. Browse our
              extensive collection of books, journals, and digital resources to
              satisfy your thirst for knowledge.
            </p>
            <div>
              <Button className="bg-white text-primary fw-bold me-2 ">
                Start Browsing
              </Button>
              <Button>Join now</Button>
            </div>
          </Col>

          <Col>
            <Carousel className=" d-flex  align-items-center text-dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                  src="https://prh.imgix.net/articles/secondarypicks20.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                  src="https://prh.imgix.net/articles/secondarypicks20.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="mb-4">
          <h3 className="text-center ">
            "Fresh Off the Shelves: Explore Our New Book Arrivals!"
          </h3>
        </Row>

        <Row className="mb-4 bg-light p-sm-2 " id="newArrivals">
          <NewArrivals />
        </Row>

        <Row>
          <h3 className="text-center m-4">
            "Dive Into Excellence: Discover Our Major Collections!"
          </h3>
        </Row>

        {/* <Row>
          <Col className="d-flex justify-content-around mt-5">
            <label htmlFor="">{searchedBooks.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row> */}
        <hr />
        <Row className="mb-4">
          <Col className="d-flex justify-content-between flex-wrap">
            {searchedBooks.map(
              (book) =>
                book.status === "active" && (
                  <Link
                    key={book._id}
                    to={"/book/" + book._id}
                    className="text-decoration-none"
                  >
                    <CustomCard {...book} />
                  </Link>
                )
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
