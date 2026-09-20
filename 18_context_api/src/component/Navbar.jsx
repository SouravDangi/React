import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { context } from '../context/Themecontext'


const Navbar = () => {

  const data=useContext(context);
   return (
        <div className='nav'>
            <h2>{data}</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar
