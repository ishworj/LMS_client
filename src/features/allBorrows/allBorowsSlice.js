import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    borrows:[]
}

const borrowsSlice = createSlice({
    name:"borrows",
    initialState,
    reducers :{
        setBorrows: (state,action)=>{
            state.borrows= action.payload;
        }
    }
})

export const {setBorrows}= borrowsSlice.actions;


export default borrowsSlice.reducer