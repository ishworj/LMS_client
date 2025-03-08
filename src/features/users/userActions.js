import { loginApi } from "./userAxios";
import { setUser } from "./userSlice";

export const loginAction = (form, navigate) => async (dispatch) => {
  // call the login api
  const data = await loginApi({ ...form });

  console.log(10000, data);

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
