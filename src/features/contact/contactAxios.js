import { apiProcessor } from "../../helper/axiosHelper";
const contactEP = import.meta.env.VITE_APP_ROOT_URL + "/contact";
import {toast} from 'react-toastify'


export const sendMessage = async (form) => {
  const apiObj = {
    method: "post",
    url: contactEP,
    data: form,
  };
  const pending = apiProcessor(apiObj);
   toast.promise(pending, {
      pending: "Please wait ...",
      success: pending.message,
    });
  
    const { status, message } = await pending;
    toast[status](message);
  
    if (status == "success") {
      return true;
    } else {
      return false;


};

}