import React, { useState } from 'react'
import { USER_PROFILE_PIC_URL } from '../Utilities/constants'

const Comment = ({name, comment, reply}) => {
  const [showReply, setShowReply] = useState(false);
  let arrow = "⬇️ ";
  if(showReply){
    arrow = "⬆️ "
  }
  return (
    <div className='flex my-2'>
        <img className='h-8' alt="user-pic" src={USER_PROFILE_PIC_URL}/>
        <div className='ml-2'>
            <p className='font-semibold'>{name}</p>
            <p>{comment}</p>
            {reply.length>0 && <button onClick={()=>{setShowReply(!showReply)}}>{arrow+reply.length+" replies"}</button>}
            {showReply && reply.map(c=><Comment name={c.name} comment={c.comment} reply={c.reply}/>)}
        </div>
    </div>
  )
}

export default Comment