import { fetchAllBookApi } from "./bookAxios";
import { setBooks } from "./bookSlice";

export const getAllBooksActions = () => async (dispatch) => {
  const response = await fetchAllBookApi()

  dispatch(setBooks(response.books));
};
