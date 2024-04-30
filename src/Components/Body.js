import React from 'react'
import Sidebar from './Sidebar'
import {useSelector} from "react-redux"
import {Outlet} from "react-router-dom"

const Body = () => {
  let showSideBar = useSelector((store)=>store.app.showSideBar)
  let showIconSideBar = useSelector((store)=>store.app.showIconBar)
  let sidebarPage = useSelector((store)=>store.app.page)
  let width = ' w-[95%] '
  let sideBarWidth = ' w-[5%] '
  let display = ''
  let bg_margin = ''
  let bg_color = ''
  if(showSideBar){
    width = ' w-[85%] '
    sideBarWidth = ' w-[15%] '
  }
  if(sidebarPage==='watch'){
    display = ' absolute '
    bg_margin = ' ml-[5%] '
    if(showSideBar){
      bg_color = ' opacity-50 h-[90%] overflow-hidden '
    }
  }
  return (
    <div className='flex'>
        <div className={sideBarWidth+' z-30 '}>
            <Sidebar showSideBar = {showSideBar} showIconBar = {showIconSideBar}/>
        </div>
        <div className={"pl-0 pt-1 "+bg_color+width+display+bg_margin}>
            <Outlet/>
        </div>        
    </div>
  )
}

export default Body
