import { apiProcessor } from "../../helper/axiosHelper";
const bookEP = import.meta.env.VITE_APP_ROOT_URL + "/books";
export const fetchAllBookApi = (isPrivate) => {

const bookEp = import.meta.env.VITE_APP_ROOT_URL + "/books"
  const apiObj = {
    method: "get",
    url: `${bookEp}${isPrivate ? "" : "/pub-books/?status=active"}`,
    isPrivate,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj)
};


export const postNewBookApi = (newBookObj) => {
  const apiObj = {
    method: "post",
    url: bookEP,
    isPrivate: true,
    isRefreshToken: false,
    data: newBookObj,
  };

  return apiProcessor(apiObj);
};

export const updateABook = async ({ _id, ...bookObject }) => {
  const apiObj = {
    method: "put",
    url: bookEP + "/" + _id,
    isPrivate: true,
    isRefreshToken: false,
    data: bookObject,
  };

  return apiProcessor(apiObj);
};


export const deleteBook = async (_id) => {
  const apiObj = {
    method: "delete",
    url: bookEP + "/" + _id,
    isPrivate: true,
    isRefreshToken: false
  };

  return apiProcessor(apiObj);
};