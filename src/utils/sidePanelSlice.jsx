import { createSlice } from "@reduxjs/toolkit";

const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;
