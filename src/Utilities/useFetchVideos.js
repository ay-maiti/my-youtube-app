import { useEffect, useState } from "react"
import { FETCH_VIDEOLIST_HOMEPAGE } from "./constants"


const useFetchVideos = () => {
  const [list, setList] = useState()
  
  const fetchList = async ()=>{
    const data_raw = await fetch(FETCH_VIDEOLIST_HOMEPAGE)
    const data = await data_raw.json()
    console.log("data in useEffect: ",data)
    setList(data)
  }

  useEffect(()=>{
    fetchList()
  },[])

  return list;
}

export default useFetchVideos