import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "activeUser",
    initialState: {
        login: ''
    },
    reducers: {
        setActiveUser: (state) => {
            localStorage.setItem
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
