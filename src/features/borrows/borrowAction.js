import { toast } from "react-toastify";
import { borrowBook, fetchBorrow, returnBook } from "./borrowAxios";
import { setBorrows } from "./borrowSlice";
import { getAllBooksActions } from "../books/bookActions";

//auto login user
export const borrowBookAction = (obj) => async (dispatch) => {
  // 1. burrowAxios
  const pending = borrowBook(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    dispatch(getAllBooksActions());
  }
};

export const getMyBorrowListAction = () => async (dispatch) => {
  // console.log("called burriow")
  // fetch borrow list
  const pending = fetchBorrow();

  const { status, message, borrows } = await pending;

  dispatch(setBorrows(borrows));
};

// Action to return book
export const returnBookAction = (id, bookID) => async (dispatch) => {
  //1. call returnBook Axios
  const pending = returnBook(id, bookID);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    dispatch(getMyBorrowListAction());
    dispatch(getAllBooksActions());
  }
};
