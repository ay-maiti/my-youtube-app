import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from 'react-redux'
import { addMessage, clearAllMessages } from '../Utilities/chatSlice'
import { generateRandomUser, generateRandomMessage } from '../Utilities/generateRandomChats'

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState()
  const [showChatPlay, setshowChatPlay] = useState(true)
  const messages = useSelector((store)=>store.chat.messages)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const interval = setInterval(()=>
        {
            const randomName = generateRandomUser();
            const randomText = generateRandomMessage();            
            dispatch(addMessage({
                name: randomName,
                message:randomText
            }))
        }, 1500)
        return ()=>{
        clearInterval(interval)
        dispatch(clearAllMessages())
    }
    },[])

    if(!showChatPlay){
        return <button className='w-full bg-slate-200 hover:bg-slate-300 rounded-full text-sm p-2 border border-slate-500' onClick={()=>{setshowChatPlay(true)}}>Show Chat</button>
    }

  return (
    <div className='bg-slate-200 shadow-md rounded-md p-2 border border-slate-500'>
        <div className='flex justify-start flex-col-reverse w-full h-[500px] p-1 overflow-y-scroll'>
            {messages.map((m,i)=><ChatMessage key={i} name={m.name} message={m.message}/>)} 
            <button className='absolute text-3xl ml-auto right-16 rounded-full hover:bg-white' onClick={(e)=>{dispatch(addMessage({name:'Demo User', message:"❤️"}))}}>❤️</button>  
        </div>

        <form className='flex mt-2 border-t-2 border-slate-500' onSubmit={(e)=>{e.preventDefault()}}>
        {userMessage && <img className='mt-2 h-10' alt="User account" src="https://cdn.iconscout.com/icon/free/png-256/free-user-circle-3605375-3005455.png"/>}
            <input className='w-full mt-2 my-2 px-3 py-2 rounded-full focus:outline-slate-400' placeholder='Chat...' value={userMessage} onChange={(e)=>{setUserMessage(e.target.value)}}/>            
            <button title='Send' className='mx-2 mt-2 text-2xl hover:bg-white hover:rounded-full hover:border-slate-400' onClick={(e)=>{
                    if(userMessage.trim()!==''){
                        const holdMsg = userMessage;
                        dispatch(addMessage({name:'Demo User', message:holdMsg}))
                    }
                    setUserMessage("");
                }}>🚀</button>
        </form>
        <button className='w-full hover:bg-slate-100 rounded-full text-sm' onClick={()=>{setshowChatPlay(false)}}>Hide Chat</button>
    </div>
  )
}

export default LiveChat