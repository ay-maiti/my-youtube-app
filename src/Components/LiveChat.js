import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from 'react-redux'
import { addMessage, clearAllMessages } from '../Utilities/chatSlice'

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState()
  const [showChatPlay, setshowChatPlay] = useState(true)
  const messages = useSelector((store)=>store.chat.messages)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const interval = setInterval(()=>{
                 
                 // Lists of Indian first names and last names 
                const firstNames = [ 
                    'Aarav', 'Aditi', 'Akshay', 'Amit', 'Ananya', 
                    'Arjun', 'Avani', 'Bhavya', 'Chetan', 'Devi', 
                    'Divya', 'Gaurav', 'Isha', 'Kiran', 'Manoj', 
                    'Neha', 'Preeti', 'Rajesh', 'Riya', 'Shreya', 
                    'Varun', 'Saurabh', 'Ajay', 'Sandip', 'Sadan', 
                    'Jyoti', 'Sapna', 'Prem', 'Ayan','Anusri', 'Ayusri'
                ]; 
                const lastNames = [ 
                    'Agarwal', 'Bansal', 'Bannerjee','Chopra','Chatterjee', 'Ganguly', 'Gupta', 'Jain', 
                    'Kapoor', 'Kumar', 'Mukherjee', 'Maiti', 'Mehta', 'Murthy',  'Pal', 'Pandey', 'Patel', 'Rao', 'Sharma', 
                    'Singh', 'Sinha', 'Thakur','Trivedi', 'Verma', 'Yadav'
                ]; 

        //  To conjure up a name out of nowhere, use this function. 

                const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]; 
                const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
                const randomName = randomFirstName + " " + randomLastName;

                //credit- https://type.fit/api/quotes
                const texts = [
                    "Genius is one percent inspiration and ninety-nine percent perspiration.",
                    "You can observe a lot just by watching.",
                    "A house divided against itself cannot stand.",
                    "Difficulties increase the nearer we get to the goal.",
                    "Fate is in your hands and no one elses",
                    "Be the chief but never the lord.",
                    "Nothing happens unless first we dream.",
                    "Well begun is half done.",
                    "Life is a learning experience, only if you learn.",
                    "Self-complacency is fatal to progress.",
                    "Peace comes from within. Do not seek it without.",
                    "What you give is what you get.",
                    "We can only learn to love by loving.",
                    "Life is change. Growth is optional. Choose wisely.",
                    "You'll see it when you believe it.",
                    "Today is the tomorrow we worried about yesterday."
                ];
                const randomText = texts[Math.floor(Math.random() * texts.length)];
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
    //console.log(messages)
    //console.log(userMessage)

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