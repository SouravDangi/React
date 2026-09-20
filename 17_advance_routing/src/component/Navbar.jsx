import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h2>Navbar</h2>
        <div>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/product' >Product</Link>
        <Link to='/course' >Course</Link>
        </div>
        
    </div>
  )
}

export default Navbar
