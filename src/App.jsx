import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/dashboard/Dashboard";
import BookLanding from "./pages/book/BookLanding";
import { getAllBooksActions } from "./features/books/bookActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./features/users/userActions";
import BookList from "./pages/book/BookList";
import AddNewBook from "./pages/book/AddNewBook";
import EditBook from "./pages/book/EditBook";
import ProfileDetail from "./pages/profile/ProfileDetail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetching all books
    dispatch(getAllBooksActions(false));
    // auto login feature
    dispatch(autoLogin());
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

        {/* Display Book List */}
        <Route path="admin/books" element={<BookList />} />
        <Route path="admin/books/new" element={<AddNewBook />} />
        <Route path="admin/book/edit/:_id" element={<EditBook />} />

        {/* profile page */}
        <Route path="/profile" element={<ProfileDetail/>}/>
        {/* private routes  */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="my-books" element={<MyBorrow />} /> */}
      </Routes>
    </>
  );
}

export default App;
