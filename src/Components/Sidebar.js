import React from 'react'
import { Link } from 'react-router-dom'
import SidebarIcons from './SidebarIcons';
import {sideBarIconsList} from '../Utilities/sideBarIconsList';


const Sidebar = ({showSideBar}) => {
  console.log("sidebar icon list",sideBarIconsList)
  //console.log(showSideBar);
  return (
    <>
    {showSideBar && <div className='min-h-screen'>
        <ul className='p-3'>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>YouTube Music</li>
        </ul>
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