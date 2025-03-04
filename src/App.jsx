import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import UserLayout from "./components/layout/UserLayout";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import BookLanding from "./pages/book/BookLanding";
import { getAllBooksActions } from "./features/books/bookActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
 const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBooksActions());
    }, []);
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="book/:bookid" element={<BookLanding />} />
        </Route>

        {/* Private Routes */}
        <Route path="/dashboard" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
