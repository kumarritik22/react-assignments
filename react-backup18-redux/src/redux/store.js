import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counterSlice.js";

export const store = configureStore({
    reducer: {
        count: countReducer
    }
});