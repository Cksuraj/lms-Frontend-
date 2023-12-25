import { createSlice } from "@reduxjs/toolkit";

const intialstate={
    isLoggedin: localStorage.getItem('isLoggedin') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {}
}

const Authslice = createSlice({
    name:'auth',
    intialstate,
    reducers:{}
})

export default Authslice.reducers;