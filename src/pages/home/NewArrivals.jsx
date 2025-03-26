import React from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  return (
    <Col className="d-flex justify-content-between flex-wrap">
      {recentBooks.length > 0
        ? recentBooks.map((book) =>
            book.status === "active" ? (
              <Link key={book._id} to={"/book/" + book._id}>
                <CustomCard {...book} />
              </Link>
            ) : null
          )
        : "No new arrivals"}
    </Col>
  );
};

export default NewArrivals;
