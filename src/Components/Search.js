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

    async function getSearchSuggestion(){
        if(searchText==="") return;
        //console.log("GET SEARCH SUGGESTION CALLED")
        if(searchText in suggestion_cache){
            setSuggestions(suggestion_cache[searchText])    
        }
        else{
            const data_raw = await fetch("https://thingproxy.freeboard.io/fetch/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchText)
            const data = await data_raw.json()
            setSuggestions(data[1])
            const suggestion_obj = {}
            suggestion_obj[searchText] = data[1]
            dispatch(addSuggestion(suggestion_obj))
        }
      }
    let parent_width = 'w-2/5'
    let input_box_round = 'rounded-l-full'
    let input_box_padding = 'px-6'
    let input_box_border = ''
    return (
    <div className={'my-6 '+parent_width+' flex'}>
        

        <div className='h-10 w-10/12'>
            <input className={'h-10 '+input_box_padding+' py-3 w-full border border-gray-400 focus:outline-none '+input_box_border+input_box_round} placeholder='Search'
                value={searchText} 
                onChange={(e)=>setSearchText(e.target.value)} 
                onBlur={()=>{
                    setSuggestions([])
                } 
                
            }
                />
            {
            suggestions.length>0 &&
                (<div className='fixed w-[35rem]'>
                <div className='rounded-lg bg-white shadow-lg border py-3 border-gray-300'>
                {suggestions.map(text=><div className='h-10 px-3 pt-2 pb-2 hover:border' 
                        onMouseDown={()=>{
                        setSearchText(text)}}>{" 🔍 "+text}</div>)}
                </div>
                </div>)
            }
        </div>
        <button className='h-10 w-1/12 border border-gray-400 rounded-r-full'>🔍</button>
    </div>
    )
}

export default Search