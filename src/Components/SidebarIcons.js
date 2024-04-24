import React from 'react'

const SidebarIcons = ({name, icon_link}) => {
  return (
    <div className='w-14 h-14 overflow-ellipsis rounded-lg flex flex-col items-center justify-center hover:bg-slate-200'>
            <img className='w-6' alt="home" src={icon_link}/>             
            {name}
    </div>
  )
}

export default SidebarIcons