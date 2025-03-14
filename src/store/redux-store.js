import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "../features/books/bookSlice.js";
import userReducer from "../features/users/userSlice.js";
import studentsReducer from "../features/students/studentSlice.js";
import allBorrowReducer from '../features/allBorrows/allBorowsSlice.js'
export default configureStore({
  reducer: {
    books: bookreducer,
    userInfo: userReducer,
    studentsInfo:studentsReducer,
    borrowsInfo:allBorrowReducer
  },
});
