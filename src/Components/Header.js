import React from 'react'
import {useDispatch} from 'react-redux'
import { toggleSideBar } from '../Utilities/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  
  const handleSideBar = () => {
    dispatch(toggleSideBar())
  }

  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <img className='h-8 m-6' alt="Side-bar menu button" src="https://www.svgrepo.com/show/506800/burger-menu.svg" onClick={()=>handleSideBar()}/>
            <img className='h-20 m-0' alt="YouTube logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
        </div>
       <div className='my-6 w-2/5 flex'>
        <input className='h-10 w-11/12 px-5 py-2 border border-gray-400 rounded-l-full' placeholder='Search'/>
        <button className='h-10 w-1/12 border border-gray-400 rounded-r-full'>🔍</button>
        </div>
        <img className='h-10 m-6' alt="User account" src="https://cdn.iconscout.com/icon/free/png-256/free-user-circle-3605375-3005455.png"/>
    </div>
  )
}

export default Header