import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "../features/books/bookSlice.js";
export default configureStore({
  reducer: {
    books: bookreducer,
  },
});
