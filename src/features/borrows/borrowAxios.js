import { apiProcessor } from "../../helper/axiosHelper";

const borrowEP = import.meta.env.VITE_APP_ROOT_URL + "/borrows";

// TODO: fetch borrow books api
export const fetchBorrow = () => {
  return apiProcessor({
    method: "get",
    url: borrowEP + "/history",
    isPrivate: true,
    isRefreshToken: false,
  });
};

// TODO: call create borrow api
export const borrowBook = (obj) => {
  return apiProcessor({
    method: "post",
    url: borrowEP,
    data: obj,
    isPrivate: true,
    isRefreshToken: false,
  });
};

// TODO: return book api
export const returnBook = (id, bookId) => {
  return apiProcessor({
    method: "put",
    url: borrowEP + "/return",
    data: { id,bookId },
    isPrivate: true,
    isRefreshToken: false,
  });
};
