import React from 'react'
import {useDispatch} from 'react-redux'
import { toggleSideBar } from '../Utilities/appSlice';
import Search from './Search';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleSideBar())
  }

  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <img className='h-8 m-6' alt="Side-bar menu button" src="https://www.svgrepo.com/show/506800/burger-menu.svg" onClick={()=>handleSideBar()}/>
            <img className='h-20 mr-auto' alt="YouTube logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
        </div>
        <Search/>
        <img className='h-10 m-6' alt="User account" src="https://cdn.iconscout.com/icon/free/png-256/free-user-circle-3605375-3005455.png"/>
    </div>
  )
}

export default Header