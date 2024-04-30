import React from 'react'
import { Link } from 'react-router-dom'
import SidebarIcons from './SidebarIcons';
import {sideBarIconsList, sideBarMenuItemsList} from '../Utilities/sideBarIconsList';
import SidebarMenuItems from './SidebarMenuItems';


const Sidebar = ({showSideBar, showIconBar}) => {
  console.log("sidebar icon list",sideBarIconsList)
  //console.log(showSideBar);
  return (
    <>
    {showSideBar && <div className='bg-white sticky top-16 min-h-screen'>
        <div className='p-3'>
            <Link to="/"></Link>
            {sideBarMenuItemsList.map(icon=><Link><SidebarMenuItems name={icon.name} icon_link={icon.icon_link}></SidebarMenuItems></Link>)}
        </div>
    </div>}
    {
      showIconBar && <div className='bg-white sticky top-16'>
          <div className='min-h-screen p-3 text-[10px] flex flex-col items-center whitespace-nowrap'>
            {sideBarIconsList.map(icon=><Link><SidebarIcons name={icon.name} icon_link={icon.icon_link}/></Link>)}
        </div>
      </div>
    }
    </>
  )
}

export default Sidebar