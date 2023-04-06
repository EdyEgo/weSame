

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
    user: UserEntity | null;

} = {
    user: null,
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { changeUserStatus } =
    authSlice.actions;

export default authSlice.reducer;