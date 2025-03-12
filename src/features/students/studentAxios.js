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