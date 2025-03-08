import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "../features/books/bookSlice.js";
import userReducer from "../features/users/userSlice.js";
export default configureStore({
  reducer: {
    books: bookreducer,
    userInfo: userReducer,
  },
});
