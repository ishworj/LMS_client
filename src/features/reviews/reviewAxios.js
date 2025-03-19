import { apiProcessor } from "../../helper/axiosHelper";

const reviewEP = import.meta.env.VITE_APP_ROOT_URL + "/reviews";

export const postNewReview = async (obj) => {
  const axiosObj = {
    method: "post",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};

export const updateReview = async (obj) => {
  const axiosObj = {
    method: "patch",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};


export const deleteReview = async (id) => {
  const axiosObj = {
    method: "delete",
    url: reviewEP+`/${id}`,
    isPrivate: true,
  };
  return apiProcessor(axiosObj);
};


export const fetchReviews = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    // if isPrivate is true, then get reviews for admin, else get reveiws for public
    url: isPrivate ? reviewEP + "/all" : reviewEP,
    isPrivate,
  };
  return apiProcessor(axiosObj);
};
