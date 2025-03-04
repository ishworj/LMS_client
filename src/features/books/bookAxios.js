import { apiProcessor } from "../../helper/axiosHelper";

export const fetchAllBookApi = () => {

const bookEp = import.meta.env.VITE_APP_ROOT_URL + "/books"
  const apiObj = {
    method: "get",
    url: bookEp + "/pub-books/?status=active"
  };

  return apiProcessor(apiObj)
};
