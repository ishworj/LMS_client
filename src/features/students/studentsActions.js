import { fetchAllUserApi } from "./studentAxios";
import { setStudents } from "./studentSlice";
import { toast } from "react-toastify";

export const fetchAllStudentsAction = () => async (dispatch) => {
  const pending = fetchAllUserApi();
  toast.promise(pending, {
    pending: "Please wait ...",
  });

  const { status, message, users } = await pending;
  if (status == "success") {
    dispatch(setStudents(users));
  }
};
