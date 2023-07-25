import { createSlice } from "@reduxjs/toolkit";

type sidebarState = {
  value: boolean;
};
//inital state

const initialSidebarState: sidebarState = { value: false };

//reducer

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialSidebarState,
  reducers: {
    toogleSidebar(state) {
      state.value = !state.value;
    },
  },
});

//actions

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;
