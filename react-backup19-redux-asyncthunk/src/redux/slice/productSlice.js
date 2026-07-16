import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk("/fetch/getData", async () => {
    const response = axios.get("https://fakestoreapi.com/products");
    return response;
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = true,
            state.error = true,
            state.data = action.payload
        })

        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
        })
    }
})


export default productSlice.reducer;