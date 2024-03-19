import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import {useSelector} from "react-redux"

const Body = () => {
  let showSideBar = useSelector((store)=>store.app.showSideBar)

  if(!showSideBar){
    return <div>
        <MainContainer/>
    </div>
  }
  return (
    <div className='flex'>
        <div className='w-1/6'>
            <Sidebar/>
        </div>
        <div className='w-5/6'>
            <MainContainer/>
        </div>        
    </div>
  )
}

export default Body