import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='inline-block'>
            <div className='flex items-center'>
                <img className='h-7 m-1' alt="User account" src="https://cdn.iconscout.com/icon/free/png-256/free-user-circle-3605375-3005455.png"/>
                <span className='ml-1 font-semibold from-neutral-500 inline-block'>{name}</span>
            </div>
            <div className='inline-block'>
                
                <span className='ml-2 leading-tight'>{message}</span>
            </div>
    </div>
  )
}

export default ChatMessage