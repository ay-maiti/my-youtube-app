import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        showSideBar: true
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.showSideBar = !state.showSideBar;
        },
        closeSidebar:(state)=>{
            state.showSideBar = false;
        }
    }
})

export const {toggleSideBar, closeSidebar} = appSlice.actions
export default appSlice.reducer