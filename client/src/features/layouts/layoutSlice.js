import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layouts",
  initialState: {
    sidebar: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { toggleSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
