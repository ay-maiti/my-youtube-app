import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btn_list = ["Cricket", "News", "Live", "Stock Market"]
  
  return (
    <div className='flex'>        
        {btn_list.map(btn=><Button label={btn}/>)}
    </div>
  )
}

export default ButtonList