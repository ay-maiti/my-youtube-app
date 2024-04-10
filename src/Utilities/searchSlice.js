import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        dict:{}
    },
    reducers:{
        addSuggestion:(state, suggestion_obj)=>{
            state.dict = {...suggestion_obj.payload, ...state.dict}
        },
        getSuggestion:(state)=>{
            return state.dict;
        }    
    }
})

export const {addSuggestion, getSuggestion} = searchSlice.actions
export default searchSlice.reducer