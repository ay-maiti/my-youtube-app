import React from 'react'

const VideoCard = ({item}) => {
  return (
    <div className='w-1/6 m-5'>
        <img alt={"thumnail- "+item.title} src={item.thumbnails.medium.url}/>
        <div>
            <h3>{item.title}</h3>
        </div>
    </div>
  )
}

export default VideoCard