import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteSingleBookAction,
  getAllBooksActions,
} from "../../features/books/bookActions";
import { useState } from "react";

// const isPrivate = true;
export const BookTable = () => {

  let [displayBooks,setDisplayBooks]=useState([]);
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

 useEffect(()=>{
setDisplayBooks(books)
 },[books])

  const handleOnDelete = async (id) => {
    // 1. delete axios call
    dispatch(deleteSingleBookAction(id));
  };

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

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{books.length} Books found!</div>

        <div>
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
                <img src={item.thumbnail} alt="" width={"70px"} />
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
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
