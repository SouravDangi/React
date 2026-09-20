import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Course from './Pages/Course'
import Coursedetail from './Pages/Coursedetail'
import Navbar2 from './component/Navbar2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>

        {/* nested Routing */}
        <Route 
        path='/product' element={<Product />}> 
        <Route path='/product/men' element={<Men />}/>
        <Route path='/product/women' element={<Women />}/>
        </Route>

        {/* Dynamic Routing */}
        <Route path='/course' element={<Course />}/>
        <Route path='/course/:courseId' element={<Coursedetail />}/>

        <Route path='/*' element={<Notfound />}/>
      </Routes>
    </div>
  )
}

export default App
