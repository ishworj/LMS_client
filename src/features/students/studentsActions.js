import { getUserObj } from "../users/userActions";
import { fetchUserDetailApi } from "../users/userAxios";
import { deleteStudentApi, fetchAllUserApi, updateStudentApi } from "./studentAxios";
import { setSelectedStudent, setStudents } from "./studentSlice";
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


export const deleteStudentAction = (id) => async (dispatch) => {
  const pending = deleteStudentApi(id);
  toast.promise(pending, {
    pending: "Please wait ...",
  });

  const { status, message } = await pending;
  if (status == "success") {
    dispatch(fetchAllStudentsAction())
  }
};



export const updateStudentAciton = (id,form) => async (dispatch) => {
  const pending = updateStudentApi(id,form);
  toast.promise(pending, {
    pending: "Please wait ...",
  });

  const { status, message , user } = await pending;
  if (status == "success") {
    dispatch(setSelectedStudent(user))
    dispatch(fetchAllStudentsAction());

  }
};