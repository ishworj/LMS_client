import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { setMenu } from "../../features/users/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Dashboard"));
  return (
    <UserLayout pageTitle="Dashboard">
      <h1>main area</h1>
    </UserLayout>
  );
};

export default Dashboard;
