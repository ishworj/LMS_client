import { apiProcessor } from "../../helper/axiosHelper";
const boorowEp= import.meta.env.VITE_APP_ROOT_URL + "/borrows";


export const fetchAllBorrow = () => {
  const apiObj = {
    method: "get",
    url: boorowEp ,
    isPrivate:true,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};
