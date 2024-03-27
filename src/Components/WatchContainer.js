import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../Utilities/appSlice'
import {useSearchParams } from 'react-router-dom'

const WatchContainer = () => {
  const dispatch = useDispatch()
  const [params] = useSearchParams()
  console.log(params.get("v"))
  useEffect(()=>{
    dispatch(closeSidebar())
  },[])
  
  return (
    <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${params.get("v")}?si=eLV0myJF35KxdLea`} 
    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}

export default WatchContainer