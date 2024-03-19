import React from 'react'
import useFetchVideos from '../Utilities/useFetchVideos'
import VideoCard from './VideoCard';

const VideoCardContainer = () => {
  
  const videoList = useFetchVideos()

  return videoList?(
    <div className='flex flex-wrap'>
    {videoList.items.map(item=><VideoCard key={item.id} item={item.snippet}/>)}
    </div>
  ):console.log("returned null");
}

export default VideoCardContainer