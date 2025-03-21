import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { Link  } from "react-router-dom";
import { CustomCard } from "../../components/custom-card/CustomCard";

const NewArrivals = () => {
  const bookStore = useSelector((state) => state.books);

  // Get books added in the last 30 days
  const recentBooks = bookStore.books.filter((book) => {
    const createdAtDate = new Date(book.createdAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdAtDate >= thirtyDaysAgo && book.status === "active";
  });

  return recentBooks.length > 0
    ? recentBooks.map((book) => (
        <Col key={book._id} md={3}>
          <Link to={"/book/" + book._id} style={{ textDecoration: "none" }}>
            <CustomCard {...book} />
          </Link>
        </Col>
      ))
    : null;
};

export default NewArrivals;
