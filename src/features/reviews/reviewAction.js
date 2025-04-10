import { deleteReview, fetchReviews, postNewReview, updateReview } from "./reviewAxios";
import { toast } from "react-toastify";
import { setAllReview, setPubReviews, updateReveiwStatus } from "./reviewSlice.js";
import { getMyBorrowListAction } from "../borrows/borrowAction.js";

export const addNewReviewAction = (obj) => async (dispatch) => {
  const pending = postNewReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getMyBorrowListAction());
    return true
  }
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const pending = updateReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(updateReveiwStatus(obj));
  }
};

export const DeleteReviewAction = (id) => async (dispatch) => {
  const pending = deleteReview(id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getReviews(true));
  }
};
// get reviews
export const getReviews = (isPrivate) => async (dispatch) => {
  const { status, reviews } = await fetchReviews(isPrivate);

  if (status) {
    isPrivate
      ? dispatch(setAllReview(reviews))
      : dispatch(setPubReviews(reviews));
  }
};
