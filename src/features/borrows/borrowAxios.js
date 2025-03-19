import { apiProcessor } from "../../helper/axiosHelper";

const borrowEP = import.meta.env.VITE_APP_ROOT_URL + "/borrows";

export const fetchBorrow = () => {
  return apiProcessor({
    method: "get",
    url: borrowEP + "/history",
    isPrivate: true,
    isRefreshToken: false,
  });
};

export const borrowBook = (obj) => {
  return apiProcessor({
    method: "post",
    url: borrowEP,
    data: obj,
    isPrivate: true,
    isRefreshToken: false,
  });
};

export const returnBook = (id, bookId) => {
  return apiProcessor({
    method: "put",
    url: borrowEP + "/return",
    data: { id,bookId },
    isPrivate: true,
    isRefreshToken: false,
  });
};
