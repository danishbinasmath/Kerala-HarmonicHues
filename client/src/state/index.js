import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   mode: "light",
   user: null,
   token: null,
   post: [],  
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    }
})