import React from 'react'
import useFetchVideos from '../Utilities/useFetchVideos'
import VideoCard from './VideoCard';

const VideoCardContainer = () => {
  
  const videoList = useFetchVideos()

  return videoList?(
    <div className='w-full flex flex-wrap'>
    {videoList.items.map(item=><VideoCard key={item.id} item={item}/>)}
    </div>
  ):console.log("returned null");
}

export default VideoCardContainer