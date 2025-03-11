import { renewAccessJWT } from "../../helper/axiosHelper";
import { fetchUserDetailApi, loginApi } from "./userAxios";
import { setUser } from "./userSlice";

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
  console.log("AUTO LOGIN called ");
  // when access JWT exists
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
