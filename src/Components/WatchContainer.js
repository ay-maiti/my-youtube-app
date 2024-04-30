import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar, updatePage } from '../Utilities/appSlice'
import {useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchContainer = () => {
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  useEffect(()=>{
    dispatch(updatePage('watch'))
    dispatch(closeSidebar())
  },[])
  
  return (
    <div className={' flex flex-col w-[90vw]'}>
      <div className='flex w-full'>
        <div className='ml-0 w-[900px]'>
          <iframe className={"rounded-md"} width="900" height="500" src={`https://www.youtube.com/embed/${params.get("v")}?si=eLV0myJF35KxdLea`} 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full min-w-60 mr-4 ml-8'>
          <LiveChat/>
        </div>
      </div>
      <div className='ml-0 w-[900px]'>
        <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchContainer