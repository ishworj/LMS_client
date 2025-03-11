import axios from "axios";

const authEp = import.meta.env.VITE_APP_ROOT_URL + "/auth";
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshToken = false,
}) => {
  const headers = {
    Authorization: isPrivate
      ? getAccessJWT()
      : isRefreshToken
      ? getRefreshJWT()
      : null,
  };
  try {
    const response = await axios({ method, url, data, headers });

    return response.data;
  } catch (error) {
    console.log("catched here", error);

    if (error?.response?.data?.errormsg == "jwt expired") {
      const refreshData = await apiProcessor({
        method: "get",
        url: authEp + "/renew-jwt",
        isPrivate: false,
        isRefreshToken: true,
      });

      if (refreshData && refreshData?.status == "success") {
        await sessionStorage.setItem("accessJWT", refreshData.accessToken);

        return await apiProcessor({
          method,
          url,
          data,
          isPrivate,
        });
      } else {
        return {
          status: "error",
          message: "Error renewing refresh token",
        };
      }
    }
    const message = error?.response?.data?.message ?? error.message;

    return {
      status: "error",
      message,
    };
  }
};

export const renewAccessJWT = async () => {
  const { accessJWT } = await apiProcessor({
    method: "get",
    url: authEp + "/renew-jwt",
    isPrivate: false, // Use refresh token, not access
    isRefreshToken: true, // Correct flag
  });

  if (accessJWT) {
    sessionStorage.setItem("accessJWT", accessJWT);
    return accessJWT;
  }
  return null;
};
