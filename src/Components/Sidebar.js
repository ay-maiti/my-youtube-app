import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='min-h-screen'>
        <ul className='p-3'>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>YouTube Music</li>
        </ul>
    </div>
  )
}

export default Sidebar