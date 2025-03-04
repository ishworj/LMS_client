import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helper/axiosHelper";


const Dashboard = () => {
  const [user, setUser] = useState({});
  const fetchUserData = async () => {
    const data = await apiProcessor({
      method: "get",
      url: "http://localhost:8080/api/v1/auth",
      isPrivate: true,
      isRefreshToken: false,b
    });

    if (data && data.status == "success") {
      setUser(data.userData);
    }
  };

  // if (data?.error?.response?.message) {
  //   console.log(data?.error?.response?.message);
  // }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      Dashboard
      <div className="text-dark">
        {user?.fName}
        {user?.lName}
      </div>
    </div>
  );
};

export default Dashboard;
