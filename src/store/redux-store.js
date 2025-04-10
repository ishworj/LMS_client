import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "../features/books/bookSlice.js";
import userReducer from "../features/users/userSlice.js";
import studentsReducer from "../features/students/studentSlice.js";
import allBorrowReducer from '../features/allBorrows/allBorowsSlice.js'
import borrowReducer from "../features/borrows/borrowSlice.js"
import reviewReducer from "../features/reviews/reviewSlice.js";
export default configureStore({
  reducer: {
    books: bookreducer,
    userInfo: userReducer,
    studentsInfo: studentsReducer,
    borrowsInfo: allBorrowReducer,
    borrowInfo: borrowReducer,
    reviewInfo: reviewReducer,
  },
});
