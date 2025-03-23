import { renewAccessJWT } from "../../helper/axiosHelper";
import { fetchUserDetailApi, loginApi, updateUserApi } from "./userAxios";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

export const loginAction = (form, navigate) => async (dispatch) => {
  // call the login api
  const data = await loginApi({ ...form });

  if (data.status == "success") {
    // update user store
    dispatch(setUser(data.user));
    // update session storage for access
    sessionStorage.setItem("accessJWT", data.accessToken);
    // update the local storage for refresh
    localStorage.setItem("refreshJWT", data.refreshToken);

    navigate("/dashboard");
  }
};

// action to get user object
export const getUserObj = () => async (dispatch) => {
  const { status, userData } = await fetchUserDetailApi();

  //update store
  dispatch(setUser(userData));
};

// auto login action
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  //when accessJWT do not exist but refreshJWT exist
  if (refreshJWT) {
    const token = await renewAccessJWT();
    token && dispatch(getUserObj());
  }
};

// update profile

export const updateUserAciton = (userObj) => async (dispatch) => {

    const pending = updateUserApi(userObj);
    toast.promise(pending, {
      pending: "Please wait ..."
    });
  
    const { status, message,user } = await pending;
    toast[status](message);
  if (status == "success") {
    dispatch(setUser(user));
  }
};



