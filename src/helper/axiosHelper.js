import axios from "axios";

const authEp = "http://localhost:8080/api/v1/auth"
const getAccessJWT = () => {
  return sessionStorage.getItem("accessToken");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshToken");
};
export const apiProcessor = async ({ method, url, data, isPrivate ,isRefreshToken=false }) => {
  const headers = {
    Authorization: isPrivate ? getAccessJWT() :isRefreshToken ? getRefreshJWT(): null,
  };
  try {
    const response = await axios({ method, url, data, headers });

    return response.data;
  } catch (error) {

    if (error?.response?.data?.message == "jwt expired") {
      
      const refreshData = await apiProcessor ({
        method:"get",
        url: authEp + "renew-jwt",
        isPrivate:false,
        isRefreshToken:true
      })


      if (refreshData && refreshData?.status == "success") {
        sessionStorage.setItem("accessJWT",refreshData.accessToken)
        
       await  apiProcessor({
          method,url,data,isPrivate
        })
      }


    }
    const message = error?.response?.data?.message ?? error.message;

    return {
      status: "error",
      message,
    };
  }
};
