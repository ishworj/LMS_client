import React from "react";
import { Button } from "react-bootstrap";
import { MdOutlineAddBox } from "react-icons/md";
import { BookTable } from "../../components/tables/BookTable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import UserLayout from "../../components/layout/UserLayout";

const BookList = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Books"));

  return (
    <UserLayout pageTitle={"Book List"}>
      {/* Button here  */}
      <div className=" text-end mb-5">
        <Link to="/admin/books/new">
          <Button variant="primary" style={{ display: "block" }}>
            <MdOutlineAddBox /> Add New Book
          </Button>
        </Link>
      </div>

      {/* table here */}
      <BookTable />
    </UserLayout>
  );
};

export default BookList;
