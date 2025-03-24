import { apiProcessor } from "../../helper/axiosHelper";
const userEP = import.meta.env.VITE_APP_ROOT_URL + "/users";

const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth";

export const loginApi = (loginObj) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/login",
    data: loginObj,
    isPrivate: false,
    isRefreshToken: false
  });
};

export const requestOTP = (obj) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/otp",
    data: obj,
    isPrivate: false,
    isRefreshToken: false,
  });
};

export const resetPassword = (obj) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/reset-password",
    data: obj,
    isPrivate: false,
    isRefreshToken: false,
  });
};



// export const fetchAllUserDetailApi = () => {
//   const apiObj = {
//     method: "get",
//     url: authEP,
//     isPrivate: true,
//     isRefreshToken: false,
//   };

//   return apiProcessor(apiObj);
// };

// api to fetch user detail
export const fetchUserDetailApi = () => {
  const apiObj = {
    method: "get",
    url: authEP,
    isPrivate: true,
    isRefreshToken: false,
  };

  return apiProcessor(apiObj);
}

export const createNewUserApi = (newUserObj) => {
  const apiObj = {
    method: "post",
    url: authEP+"/register",
    isPrivate: true,
    data: newUserObj,
  };

  return apiProcessor(apiObj);
};


export const updateUserApi = (userObj)=>{
  const apiObj = {
    method: "put",
    url: authEP,
    isPrivate: true,
    data: userObj,
    contentType: "multipart/form-data",
  };

  return apiProcessor(apiObj);
}


