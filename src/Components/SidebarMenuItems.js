import React from 'react'

const SidebarMenuItems = ({name, icon_link}) => {
  let bg_color = ''
  if(name==="Home"){
    bg_color = 'bg-gray-100'
  }
  return (
    <div className={bg_color+' rounded-lg text-sm px-5 py-2 flex items-end hover:bg-gray-100'}>
            <img className='w-6 mr-5' alt="home" src={icon_link}/>             
            {name}
    </div>
  )
}

export default SidebarMenuItems