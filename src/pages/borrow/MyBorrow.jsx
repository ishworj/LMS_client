import React, { useEffect } from "react";
import BorrowList from "./BorrowList";
import { useDispatch } from "react-redux";
import { getMyBorrowListAction } from "../../features/borrows/borrowAction";
import { setMenu } from "../../features/users/userSlice";
import UserLayout from "../../components/layout/UserLayout";

const MyBorrow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("My Books"));
    dispatch(getMyBorrowListAction());
  }, []);

  return (
    <UserLayout pageTitle={"My Borrowed Book"}>
      <BorrowList />
    </UserLayout>
  );
};

export default MyBorrow;
