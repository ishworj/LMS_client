import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  students: [],
  selectedStudent: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
  },
});

export const { setStudents, setSelectedStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
