import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  selectedBook: {},
};
const bookSllice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const {setBooks ,setSelectedBook} =
  bookSllice.actions;

export default bookSllice.reducer;
