import React, { useState } from 'react'

const App = () => {
  const [obj, setobj] = useState({name: "Sumit", age: 20})

  const changeDetails=()=>{
    let obj2={...obj};
    obj2.name="Saurabh";
    obj2.age=23;
    setobj(obj2);
  }

  return (
    <div>
      <h1>{obj.name}, {obj.age}</h1>
      <button onClick={changeDetails}>Click</button>
    </div>
  )
}

export default App