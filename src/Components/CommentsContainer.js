import React from "react"
import Comment from "./Comment";
import {data} from "../Utilities/comments_data";

const CommentsContainer = () =>{
    console.log(data[0].name)
    return (
        <div className='my-5'> 
            <h1 className="font-bold text-lg">{data.length+" Comments"}</h1>
            
            {data.map(c=> <Comment name={c.name} comment={c.comment} reply={c.reply}/>)}
        </div>
    )
}

export default CommentsContainer;