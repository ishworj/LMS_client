import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/custom-card/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { apiProcessor } from "../../helper/axiosHelper";
import { setBooks } from "../../features/books/bookSlice.js";
import { useEffect } from "react";
import { getAllBooksActions } from "../../features/books/bookActions.js";

const HomePage = () => {
  const bookStore = useSelector((state) => state.books);
  const [searchedBooks, setSearchBooks] = useState([]);

  const dispatch = useDispatch();
 
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
          <Carousel className="mt-5">
            <Carousel.Item interval={3000}>
              <div className="d-flex align-items-center">
                <div className="d-flex flex-column p-5 w-25">
                  <h3 className="text-primary">Make it simple</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
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
                  <h3 className="text-primary">Make it simple</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Button>Discover More</Button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
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
