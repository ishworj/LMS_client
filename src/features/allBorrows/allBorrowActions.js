import { setBorrows } from "./allBorowsSlice";
import { fetchAllBorrow } from "./allBorrowAxios";

export const fetchAllBorrowsAction = () => async (dispatch) => {
  // fetch borrow list
  const pending = fetchAllBorrow();

  const { status, message, allBorrows } = await pending;
  console.log(status)

 status === "success" && dispatch(setBorrows(allBorrows));
};
