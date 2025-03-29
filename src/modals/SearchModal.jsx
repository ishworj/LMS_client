import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const imageURL = import.meta.env.VITE_APP_IMAGE_URL;

const SearchModal = (props) => {
  const bookStore = useSelector((state) => state.books);
  const [searchedBooks, setSearchBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setSearchBooks([]); // Clear searched books if searchTerm is empty
    } else {
      setSearchBooks(
        bookStore.books.filter(({ title }) =>
          title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, bookStore.books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleBookClick = () => {
    props.onHide(); // Close the modal when a book is clicked
    setSearchTerm("")
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <div className="d-flex w-100 justify-content-between">
          <div>
            <h3>Book Search</h3>
          </div>
          <div>
            <Form.Control
              onChange={handleOnSearch}
              placeholder="Search by book name..."
              value={searchTerm}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                borderColor: "#ccc",
              }}
            />
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        {/* Search Input */}
        <Row>
          <Col className="d-flex justify-content-between mt-3 ">
            {searchedBooks?.length ? (
              <label htmlFor="">Books found: {searchedBooks.length}</label>
            ) : (
              ""
            )}
          </Col>
        </Row>

        {/* Only display books if search term is not empty */}
        {searchTerm && (
          <Row className="mb-4" style={{ marginTop: "20px", maxHeight:"70vh", overflow:"scroll" }}>
            <Col>
              <div className="d-flex flex-column gap-3 cursor-pointer">
                {searchedBooks.length > 0 ? (
                  searchedBooks.map(
                    (book) =>
                      book.status === "active" && (
                        <div
                          key={book._id}
                          style={{
                            display: "flex",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                            transition: "transform 0.3s ease",
                            padding: "10px",
                          }}
                        >
                          {/* Book Image */}
                          <div
                            style={{
                              width: "150px",
                              height: "auto",
                              marginRight: "15px",
                            }}
                          >
                            <img
                              src={`${imageURL}/${book.thumbnail}`}
                              alt={book.title}
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </div>

                          {/* Book Description */}
                          <div style={{ flex: 1 }}>
                            <Link
                              to={"/book/" + book._id}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                              onClick={handleBookClick} // Close modal on click
                            >
                              <h5>{book.title}</h5>
                              <p style={{ fontSize: "14px", color: "#555" }}>
                                {book.author}
                              </p>
                              <p>{book.description}</p>
                            </Link>
                          </div>
                        </div>
                      )
                  )
                ) : (
                  <p style={{ textAlign: "center", width: "100%" }}>
                    No books found!
                  </p>
                )}
              </div>
            </Col>
          </Row>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
