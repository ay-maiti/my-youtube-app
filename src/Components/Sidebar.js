import React from 'react'
import { Link } from 'react-router-dom'
import SidebarIcons from './SidebarIcons';
import {sideBarIconsList, sideBarMenuItemsList} from '../Utilities/sideBarIconsList';


const Sidebar = ({showSideBar}) => {
  console.log("sidebar icon list",sideBarIconsList)
  //console.log(showSideBar);
  return (
    <>
    {showSideBar && <div className='min-h-screen'>
        <div className='p-3'>
            <Link to="/"></Link>
            {sideBarMenuItemsList.map(icon=><Link><div className='rounded-lg my-2 bg-gray-100 text-sm text-center px-5 py-2'>{icon.name}</div></Link>)}
        </div>
    </div>}
    {
      !showSideBar && <div>
          <div className='min-h-screen p-3 text-[10px] flex flex-col items-center whitespace-nowrap'>
            {sideBarIconsList.map(icon=><Link><SidebarIcons name={icon.name} icon_link={icon.icon_link}/></Link>)}
        </div>
      </div>
    }
    </>
  )
}

export default Sidebar