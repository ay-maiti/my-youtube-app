import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        showSideBar: true,
        showIconBar: false,
        page: 'home'
    },
    reducers:{
        toggleSideBar:(state)=>{
            if(state.page==='watch'){
                state.showIconBar = false;
                state.showSideBar = !state.showSideBar;
            }
            else if(state.page==='home'){
                state.showSideBar = !state.showSideBar;
                state.showIconBar = !state.showSideBar;
            }
            
        },
        updatePage:(state, page)=>{
            state.page = page.payload
        },
        closeSidebar:(state)=>{
            state.showIconBar = false;
            state.showSideBar = false;
        }
    }
})

export const {toggleSideBar, updatePage, closeSidebar} = appSlice.actions
export default appSlice.reducer