import {createSlice} from '@reduxjs/toolkit'
const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        messages: []
    },
    reducers:{
        addMessage:(state, message)=>{
            state.messages = [message.payload, ...state.messages.slice(0,200)]
        },
        clearAllMessages:(state)=>{
            state.messages = []
        }
    }
})
export const {addMessage, clearAllMessages} = chatSlice.actions
export default chatSlice.reducer