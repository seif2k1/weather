import React from 'react'
import './Navbar.css'
import {AiOutlineSearch} from "react-icons/ai"

const Navbar = ({handleSubmit,value,onchange,handleClick}) => {
  return (
    <div className='navbar'>
        <div>
          <h1>Weather</h1>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" value={value.toLowerCase()} onChange={(e)=> onchange(e.target.value)} required />
          </form>
          <AiOutlineSearch size={15} onClick={handleClick} />
        </div>
    </div>
  )
}

export default Navbar