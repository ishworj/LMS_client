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
        <Row>
          <Carousel
            className=" d-flex  align-items-center"
            style={{ minHeight: "70vh" }}
          >
            <Carousel.Item interval={10000}>
              <div className="d-flex align-items-center">
                <div className="d-flex flex-column p-5 w-50">
                  <h3 className="text-primary">
                    Unleash the Power of Knowledge: <br /> Explore Our Extensive
                    Digital <br />
                    Library
                  </h3>

                  <p>
                    Unlock the doors to a world of endless possibilities. Browse
                    our extensive collection of books, journals, and digital
                    resources to satisfy your thirst for knowledge.
                  </p>
                  <div>
                    <Button className="bg-white text-primary fw-bold me-2 ">
                      Start Browsing
                    </Button>
                    <Button>Join now</Button>
                  </div>
                </div>
                <div className="w-50">
                  <img
                    className="d-block w-100"
                    style={{ objectFit: "cover", maxHeight: "400px" }}
                    src="https://prh.imgix.net/articles/secondarypicks20.jpg"
                    alt="First slide"
                  />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
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
                  <h3 className="text-primary">Empowering Knowledge</h3>
                  <p>
                    "Expand your knowledge with our diverse collection of books,
                    journals, and digital resources. Start your journey today!"
                  </p>
                  <Button>Discover More</Button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mb-4">
          <h3 className="text-center text-glow">New arrivals</h3>
        </Row>

        <Row className="mb-4 " id="newArrivals">
          <NewArrivals />
        </Row>

        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">{searchedBooks.length} books found!</label>
            <div>
              <Form.Control
                onChange={handleOnSearch}
                placeholder="search by book name .. "
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mb-4">
          <Col className="d-flex gap-4 flex-wrap">
            {searchedBooks.map(
              (book) =>
                book.status === "active" && (
                  <Link key={book._id} to={"/book/" + book._id}>
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
