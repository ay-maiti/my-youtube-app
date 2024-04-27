import React from 'react'
import Sidebar from './Sidebar'
import {useSelector} from "react-redux"
import {Outlet} from "react-router-dom"

const Body = () => {
  let showSideBar = useSelector((store)=>store.app.showSideBar)
  let width = ' w-[95%] '
  let sideBarWidth = ' w-[5%] '
  if(showSideBar){
    width = ' w-5/6 '
    sideBarWidth = ' w-1/6 '
  }
  return (
    <div className='flex'>
        <div className={sideBarWidth}>
            <Sidebar showSideBar = {showSideBar}/>
        </div>
        <div className={"pl-6"+width}>
            <Outlet/>
        </div>        
    </div>
  )
}

export default Body