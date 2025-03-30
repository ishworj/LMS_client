import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteSingleBookAction,
  getAllBooksActions,
} from "../../features/books/bookActions";
import ConfirmModal from "../../modals/ConfirmModal";

const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

export const BookTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookToDeleteId, setBookToDeleteId] = useState(null); // Track book ID to delete
  let [displayBooks, setDisplayBooks] = useState([]);
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    setDisplayBooks(books);
  }, [books]);

  useEffect(() => {
    dispatch(getAllBooksActions(true));
  }, [dispatch]);

  const handleOnChange = (e) => {
    const filter = e.target.value.toLowerCase();

    setDisplayBooks(
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(filter) ||
          book.genre.toLowerCase().includes(filter) ||
          book.author.toLowerCase().includes(filter)
      )
    );
  };

  const handleOnDelete = (id) => {
    dispatch(deleteSingleBookAction(id));
    setShowModal(false); // Close modal after deletion
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{books.length} Books found!</div>

        <div>
          <label htmlFor="">Search</label>
          <input
            type="text"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Description</th>
            <th>Updates</th>
          </tr>
        </thead>
        <tbody>
          {displayBooks.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    item.thumbnail.includes("http")
                      ? item.thumbnail
                      : `${imageUrl}/${item.thumbnail}`
                  }
                  alt=""
                  width={"70px"}
                />
              </td>
              <td>
                <h2>{item.title.slice(0, 30)} ...</h2>
                <div>{item.author}</div>
                <div
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  Status: {item.status}
                </div>
              </td>
              <td>
                <Link to={"/admin/book/edit/" + item._id}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    setBookToDeleteId(item._id); // Set the book ID to delete
                    setShowModal(true); // Show the modal
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* The modal now handles the deletion directly */}
      <ConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)} // Close modal when canceled
        onConfirm={() => handleOnDelete(bookToDeleteId)} // Call delete function directly with the book ID
        title="Deleting book"
        message="Are you sure you want to delete this book?"
      />
    </div>
  );
};
