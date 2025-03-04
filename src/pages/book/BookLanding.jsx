import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookLanding = () => {
  const { bookid } = useParams();

  const bookStore = useSelector((state) => state.books);
  const selectedBook = bookStore.books.find((item) => item._id == bookid);
  return (
    <div>
      BookLanding
      <div>title:{selectedBook.title}</div>
      <div>author:{selectedBook.author}</div>
      <div>
        <img src={selectedBook.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default BookLanding;
