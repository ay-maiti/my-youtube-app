import React, { useState } from 'react'

const Button = ({label}) => {
  const [filter, setFilter] = useState(false)
  let text_color = filter? " text-white" : " text-black"
  let bg_color = filter? " bg-black" : " bg-white"
  return (
    <button className={'mx-3 border py-2 px-5 rounded-full'+text_color+bg_color} onClick={(e)=>setFilter(!filter)}>{label}</button>
  )
}

export default Button