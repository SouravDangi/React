import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div style={{display : "flex", justifyContent : "center", fontSize: "20px", gap: "15px", fontWeight:"bold"}}>
      <Link to='/product/men'>Men</Link>
      <Link to='/product/women'>Women</Link>
      </div>
      <Outlet />
      
      {/* <h1>Product Page</h1> */}
    </div>
  )
}

export default Product