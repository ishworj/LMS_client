import {
  deleteBook,
  fetchAllBookApi,
  postNewBookApi,
  updateABook,
} from "./bookAxios";
import { setBooks } from "./bookSlice";
import { toast } from "react-toastify";

export const getAllBooksActions =
  (isPrivate = false) =>
  async (dispatch) => {
    const { books, status } = await fetchAllBookApi(isPrivate);
    // 2. update data
    if (status == "success" && books) {
      dispatch(setBooks(books));
    }
  };

export const postNewBookAction = (obj) => async (disptch) => {
  // call axios to send data
  const pending = postNewBookApi(obj);
  toast.promise(pending, {
    pending: "Please wait ...",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status == "success") {
    // then call function to fetch all the data
    // update the store data with new book
    disptch(getAllBooksActions(true));
    return true;
  } else {
    return false;
  }
};

export const updateSingleBookAction = (obj,id) => async (dispatch) => {
  const pending = updateABook(obj,id);
  toast.promise(pending, {
    pending: "Please wait....",
  });

  const { status, message } = await pending;
  toast[status](message);
  return { status, message };
};

export const deleteSingleBookAction = (id) => async (dispatch) => {
  const pending = deleteBook(id);
  toast.promise(pending, {
    pending: "Please wait ...",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);
  // 2. fetch all update book list
  dispatch(getAllBooksActions(true));
};
