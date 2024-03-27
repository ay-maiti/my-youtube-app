import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const VideoCard = ({item}) => {
  let showSideBar = useSelector(store=>store.app.showSideBar)
  let width = 'w-80'
  if(showSideBar){
    width = 'w-96'
  }
  return (
    <Link className={width+' m-2 cursor-pointer'} to={`/watch?v=${item.id}`}>
        <img className='w-full rounded-xl' alt={"thumbnail- "+item.snippet.title} src={item.snippet.thumbnails.medium.url}/>
        <div className='truncate'>
            <h3 className='font-semibold'>{item.snippet.title}</h3>
        </div>
        <div className='text-sm'>
            <h6>{item.snippet.channelTitle}</h6>
            <h6>{item.statistics.viewCount+" views"}</h6>
        </div>
    </Link>
  )
}

export default VideoCard