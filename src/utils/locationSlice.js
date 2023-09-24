import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    loc: null,
  },
  reducers: {
    addLocation: (state, action) => {
      state.loc = action.payload;
    },

    clearLoc: (state) => {
      state.loc = null;
    },
  },
});

//exporting actions by name
export const { addLocation, clearLoc } = locationSlice.actions;

//exporting reducers
export default locationSlice.reducer;
