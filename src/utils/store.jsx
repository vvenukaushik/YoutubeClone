import { configureStore } from "@reduxjs/toolkit";
import sidePanelSlice from "./sidePanelSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        sidePanel: sidePanelSlice,
        search: searchSlice,
        chat: chatSlice,
    }
});

export default store;