import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Nav, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { Stars } from "../../components/stars/Stars";
import { borrowBookAction } from "../../features/borrows/borrowAction";
import { ReviewBlock } from "../../components/custom-card/ReviewBlock";
import ConfirmModal from "../../modals/ConfirmModal";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const BookLanding = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { bookid } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { books } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.userInfo);
  const { pubReviews } = useSelector((state) => state.reviewInfo);

  const book = books.find((item) => item._id === bookid);
  if (!book?._id) {
    return <Spinner animation="border" variant="primary" />;
  }

  const {
    _id,
    title,
    author,
    publishedYear,
    thumbnail,
    description,
    isAvailable,
    expectedAvailable,
  } = book;

  const handleOnBookBurrow = () => {
      dispatch(
        borrowBookAction({
          bookId: _id,
          title: title,
          thumbnail,
        })
      );
  };

  // reviews only for this book
  const bookReviews = pubReviews.filter((item) => item.bookId === _id);

  const avgRatings = bookReviews.length
    ? bookReviews.reduce((acc, item) => acc + item.ratings, 0) /
      bookReviews.length
    : 0;

  return (
    <>
      <Row className="g-2">
        <Col md={6}>
          <div className="m-auto" style={{ maxWidth: "450px" }}>
            <img
              src={
                thumbnail.includes("http")
                  ? thumbnail
                  : `${imageUrl}/${thumbnail}`
              }
              alt=""
              width={"100%"}
            />
          </div>
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>
            {author} - {publishedYear}
          </p>
          <Stars stars={avgRatings} totalReviews={bookReviews.length} />
          <p className="mt-5">{description.slice(0, 130)}...</p>
          <div className="">
            {user?._id ? (
              <Button
                disabled={!isAvailable}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                {isAvailable
                  ? "Burrow This Book"
                  : "Expected available date: " +
                    expectedAvailable.slice(0, 10)}
              </Button>
            ) : (
              <Link
                to="/signin"
                className=""
                state={{
                  from: { location },
                }}
              >
                <Button>Login to burrow</Button>
              </Link>
            )}

            <ConfirmModal
              show={showModal}
              onHide={() => setShowModal(false)}
              onConfirm={handleOnBookBurrow}
              title="Borrowing book"
              message="Are you sure you want to borrow this book ?"
            />
          </div>
        </Col>
      </Row>
      <Row className="py-5 ">
        <Col>
          {/* tab bar */}

          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              {description}
            </Tab>

            <Tab eventKey="reviews" title="Reviews">
              <ReviewBlock pubReviews={pubReviews} />
            </Tab>
          </Tabs>

          {/* content area  */}
        </Col>
      </Row>
    </>
  );
};

export default BookLanding;
