import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {
    const parm=useParams();
  return (
    <div>
      <h1>{parm.courseId} Course Details</h1>
    </div>
  )
}

export default Coursedetail
