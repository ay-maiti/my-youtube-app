import React from 'react'
import useFetchVideos from '../Utilities/useFetchVideos'
import VideoCard from './VideoCard';
import { useDispatch } from 'react-redux';
import { updatePage } from '../Utilities/appSlice';

const VideoCardContainer = () => {
  
  const videoList = useFetchVideos()
  const dispatch = useDispatch()
  dispatch(updatePage('home'))
  return videoList?(
    <div className='w-full flex flex-wrap justify-center'>
    {videoList.items.map(item=><VideoCard key={item.id} item={item}/>)}
    </div>
  ):console.log("returned null");
}

export default VideoCardContainer