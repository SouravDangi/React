import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate=useNavigate();
  return (
    <div className='nav2'>
      <button onClick={()=>{
        navigate('/')
      }}>
        Home Page
      </button>

      <button onClick={()=>{
        navigate(+1);
      }}>
        Next
      </button>

      <button onClick={()=>{
        navigate(-1);
      }}>
        Previous
      </button>
    </div>
  )
}

export default Navbar2
