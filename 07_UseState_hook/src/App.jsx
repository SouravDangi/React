import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(22)
  const [user, setuser] = useState('Saurav')

  function changeNum(){
    setnum(num+1);
    setuser("Saurabh")
  }

  return (
    <div>
      <h1>User is {user}</h1>
      <h1>Number is {num}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App