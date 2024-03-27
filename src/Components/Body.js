import React from 'react'
import Sidebar from './Sidebar'
import {useSelector} from "react-redux"
import {Outlet} from "react-router-dom"

const Body = () => {
  let showSideBar = useSelector((store)=>store.app.showSideBar)
  let width = 'w-1/1'
  if(showSideBar){
    width = 'w-5/6'
  }
  return (
    <div className='flex'>
        {showSideBar && <div className='w-1/6'>
            <Sidebar/>
        </div>}
        <div className={width}>
            <Outlet/>
        </div>        
    </div>
  )
}

export default Body