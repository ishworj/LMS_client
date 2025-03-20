import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { fetchAllBorrowsAction } from "../../features/allBorrows/allBorrowActions";
import { fetchAllStudentsAction } from "../../features/students/studentsActions.js"; // Add this import if not present

const AllBorrowsList = () => {
  const [displayBorrows, setDisplayBorrows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const { students } = useSelector((state) => state.studentsInfo);
  const { borrows } = useSelector((state) => state.borrowsInfo);
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  dispatch(setMenu("All Borrows"));

  useEffect(() => {
    dispatch(fetchAllStudentsAction());
    dispatch(fetchAllBorrowsAction());
  }, [dispatch]);

  useEffect(() => {
    setDisplayBorrows(borrows);
  }, [borrows]);

  // Handle text search
  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle date filter
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDate("");
  };

  // Function to get user name by ID
  const getUserName = (userId) => {
    const student = students.find((s) => s._id === userId);
    return student ? student.fName + " "+ student.lName : "Retired User";
  };

  // Function to get book ISBN by ID
  const getBookISBN = (bookId) => {
    const book = books.find((b) => b._id === bookId);
    return book ? book.isbn : "Book removed";
  };

  // Filter borrows based on search and date
  const showBorrows = displayBorrows?.filter((borrow) => {
    const matchesSearch =
      getUserName(borrow.userId)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      getBookISBN(borrow.bookId)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      borrow.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate =
      !selectedDate || borrow.borrowDate.startsWith(selectedDate);

    return matchesSearch && matchesDate;
  });

  return (
    <UserLayout pageTitle={"All Borrows"}>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>{showBorrows?.length} Borrows found!</div>

          <div>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="name/isbn/status"
              value={searchQuery}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="date">Select Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>

          {/* Reset Button */}
          <button className="btn btn-secondary" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
        <hr />
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Borrow Details</th>
              <th>Return Info</th>
            </tr>
          </thead>
          <tbody>
            {showBorrows?.map((borrow) => (
              <tr key={borrow._id}>
                {/* First Column: User, Book, Dates */}
                <td
                  style={{
                    backgroundColor:
                      borrow.status === "borrowed" ? "f8d7da" : "##d4edda",
                  }}
                >
                  <strong>Student:</strong> {getUserName(borrow.userId)} <br />
                  <strong>Book ISBN:</strong> {getBookISBN(borrow.bookId)}{" "}
                  <br />
                  <strong>Borrow Date:</strong>{" "}
                  {new Date(borrow.borrowDate).toLocaleDateString()} <br />
                  <strong >Due Date:</strong>{" "}
                  {new Date(borrow.dueDate).toLocaleDateString()}
                </td>
                {/* Second Column: Return Date & Status */}
                <td
                  style={{
                    backgroundColor:
                      borrow.status === "borrowed" ? "#f8d7da" : "#d4edda",
                  }}
                >
                  <strong>Return Date:</strong>{" "}
                  {borrow.returnDate
                    ? new Date(borrow.returnDate).toLocaleDateString()
                    : "Not Returned"}{" "}
                  <br />
                  <strong>Status:</strong> {borrow.status}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default AllBorrowsList;
