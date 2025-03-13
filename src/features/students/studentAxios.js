import { data } from "react-router-dom";
import { apiProcessor } from "../../helper/axiosHelper";
const authEp= import.meta.env.VITE_APP_ROOT_URL + "/auth";


export const fetchAllUserApi = () => {
  const apiObj = {
    method: "get",
    url: authEp + "/all",
    isPrivate:true,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};

export const deleteStudentApi = (id) => {
  const apiObj = {
    method: "delete",
    url: authEp + `/${id}`,
    isPrivate: true,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};

export const updateStudentApi = (id,form) => {
  const apiObj = {
    method: "put",
    url: authEp + `/${id}`,
    isPrivate: true,
    isRefreshToken: false,
    data: form
  };
  return apiProcessor(apiObj);
}

