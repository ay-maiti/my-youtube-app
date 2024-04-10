import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSuggestion } from '../Utilities/searchSlice'

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const suggestion_cache = useSelector((store)=>(store.search.dict))
    const dispatch = useDispatch()
    useEffect(()=>{
        const timer = setTimeout(getSearchSuggestion, 200)
        return ()=>{
        clearTimeout(timer)
        }
    },[searchText])
//https://thingproxy.freeboard.io/fetch/
    async function getSearchSuggestion(){
        if(searchText in suggestion_cache){
            setSuggestions(suggestion_cache[searchText])    
        }
        else{
            const data_raw = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchText)
            const data = await data_raw.json()
            setSuggestions(data[1])
            const suggestion_obj = {}
            suggestion_obj[searchText] = data[1]
            dispatch(addSuggestion(suggestion_obj))
        }
      }
    
    return (
    <div className='my-6 w-2/5 flex'>
        <div className='h-10 w-11/12'>
            <input className='h-10 px-5 py-3 w-full border border-gray-400 rounded-l-full' placeholder='Search'
                value={searchText} onChange={(e)=>setSearchText(e.target.value)} onBlur={()=>{setSuggestions([])}}/>
            {
            suggestions.length>0 &&
                (<div className='fixed w-[35rem]'>
                <ul className='rounded-lg bg-white shadow-lg border border-gray-300'>
                {suggestions.map(text=><li className='h-10 px-3 py-5 hover:border' onMouseDown={()=>{
                    setSearchText(text)}}>{" 🔍 "+text}</li>)}
                </ul>
                </div>)
            }
        </div>
        <button className='h-10 w-1/12 border border-gray-400 rounded-r-full'>🔍</button>
    </div>
    )
}

export default Search