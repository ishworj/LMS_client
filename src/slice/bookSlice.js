import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books:[]
};
const bookSllice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks:(state,action)=>{
        state.books= action.payload;
    }
  },
});

export const {setBooks } =
  bookSllice.actions;

export default bookSllice.reducer;
