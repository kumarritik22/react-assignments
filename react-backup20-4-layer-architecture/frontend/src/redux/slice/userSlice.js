import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../../services/api";

export const fetchUserData = createAsyncThunk("/fetch/users", async () => {
    return await fetchUser();
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload
        });

        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.loading = true,
            state.error = true
        })
    }
})

export default userSlice.reducer